/* ============================================================
   岐黄映射 · Application
   ============================================================ */

(function () {
  "use strict";

  const DATA = window.TCM_DATA;
  const LAYER_MAP = Object.fromEntries(DATA.layers.map((l) => [l.id, l]));
  const EV_LABEL = { A: "强证据", B: "中等证据", C: "理论类比" };
  const EV_COLOR = { A: "#2c6b5b", B: "#a9832b", C: "#8a9299" };

  const state = {
    q: "",
    layer: "all",
    evidence: "all",
    activeWx: "wood",
    wxMode: "physio",
    activeWq: 0,
  };

  const MECH_LABEL = { high: "机制明确", medium: "机制中等", analogical: "结构类比" };
  let hashReady = false;

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------------- 工具 ---------------- */
  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // 轻量 markdown：**粗体** 与 `代码`
  function fmt(str) {
    return esc(str)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`(.+?)`/g, "<em>$1</em>");
  }

  /* ---------------- Hero 统计 ---------------- */
  function renderStats() {
    const totalMaps = DATA.entries.reduce((n, e) => n + e.mappings.length, 0);
    const refs = new Set();
    DATA.entries.forEach((e) => e.refs.forEach((r) => refs.add(r.text)));
    const stats = [
      [DATA.entries.length, "映射条目"],
      [totalMaps, "对应关系"],
      [DATA.layers.length, "分层级别"],
      [refs.size, "文献依据"],
    ];
    $("#heroStats").innerHTML = stats
      .map(
        ([v, k]) => `<div class="stat"><b>${v}</b><span>${esc(k)}</span></div>`
      )
      .join("");
  }

  /* ---------------- 侧栏导航 ---------------- */
  const NAV = [
    { id: "top", label: "总览", idx: "00" },
    { id: "layers", label: "多级分层架构", idx: "01" },
    { id: "atlas", label: "概念映射图谱", idx: "02" },
    { id: "wuxing", label: "五行 · 五脏生克", idx: "03" },
    { id: "bianzheng", label: "三大辨证体系", idx: "04" },
    { id: "refs", label: "文献依据", idx: "05" },
  ];

  function renderNav() {
    const main = NAV.map(
      (n) =>
        `<a href="#${n.id}" data-target="${n.id}"><span class="idx">${n.idx}</span>${esc(
          n.label
        )}</a>`
    ).join("");

    const layers = DATA.layers
      .map(
        (l) =>
          `<a href="#atlas" class="sub" data-layer="${l.id}">${l.id} · ${esc(
            l.name
          )}</a>`
      )
      .join("");

    $("#nav").innerHTML =
      main +
      `<p class="nav-group-title">LAYER INDEX</p>` +
      layers;
  }

  /* ---------------- 分层堆叠 ---------------- */
  function renderLayers() {
    const counts = {};
    DATA.entries.forEach((e) => (counts[e.layer] = (counts[e.layer] || 0) + 1));

    $("#layerStack").innerHTML = DATA.layers
      .map(
        (l) => `
      <div class="layer-row" data-layer="${l.id}" style="--c:${l.color}">
        <div class="layer-code">${l.id}</div>
        <div class="layer-main">
          <h3>${esc(l.name)}<em>${esc(l.en)}</em></h3>
          <p>${esc(l.desc)}</p>
        </div>
        <div class="layer-count">${counts[l.id] || 0} 条目</div>
      </div>`
      )
      .join("");

    $$(".layer-row").forEach((row) => {
      row.addEventListener("click", () => {
        setLayerFilter(row.dataset.layer);
        $("#atlas").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  /* ---------------- 筛选器 ---------------- */
  function renderFilters() {
    const counts = { all: DATA.entries.length };
    DATA.entries.forEach((e) => (counts[e.layer] = (counts[e.layer] || 0) + 1));

    const chips = [
      { id: "all", name: "全部" },
      ...DATA.layers.map((l) => ({ id: l.id, name: `${l.id} ${l.name}` })),
    ];

    $("#filters").innerHTML = chips
      .map(
        (c) =>
          `<button class="chip${c.id === "all" ? " on" : ""}" data-layer="${c.id}">${esc(
            c.name
          )}<span class="n">${counts[c.id] || 0}</span></button>`
      )
      .join("");

    $("#filters").addEventListener("click", (ev) => {
      const chip = ev.target.closest(".chip");
      if (!chip) return;
      setLayerFilter(chip.dataset.layer);
    });
  }

  /* ---------------- 证据等级筛选 ---------------- */
  function renderEvFilters() {
    const counts = { all: DATA.entries.length, A: 0, B: 0, C: 0 };
    DATA.entries.forEach((e) => (counts[e.evidence] = (counts[e.evidence] || 0) + 1));

    const chips = [
      { id: "all", name: "全部证据" },
      { id: "A", name: "A 强证据" },
      { id: "B", name: "B 中等证据" },
      { id: "C", name: "C 理论类比" },
    ];

    $("#evFilters").innerHTML = chips
      .map(
        (c) =>
          `<button class="chip ev-chip${c.id === "all" ? " on" : ""}" data-ev="${c.id}">${esc(
            c.name
          )}<span class="n">${counts[c.id] || 0}</span></button>`
      )
      .join("");

    $("#evFilters").addEventListener("click", (ev) => {
      const chip = ev.target.closest(".chip");
      if (!chip) return;
      setEvidenceFilter(chip.dataset.ev);
    });
  }

  function setEvidenceFilter(id) {
    state.evidence = id;
    $$("#evFilters .chip").forEach((c) =>
      c.classList.toggle("on", c.dataset.ev === id)
    );
    renderCards();
  }

  function setLayerFilter(id) {
    state.layer = id;
    $$("#filters .chip").forEach((c) =>
      c.classList.toggle("on", c.dataset.layer === id)
    );
    $$("#nav a.sub").forEach((a) =>
      a.classList.toggle("active", a.dataset.layer === id)
    );
    syncHash(id && id !== "all" ? "layer/" + id : "");
    renderCards();
  }

  /* ---------------- 卡片 ---------------- */
  function matches(e) {
    if (state.layer !== "all" && e.layer !== state.layer) return false;
    if (state.evidence !== "all" && e.evidence !== state.evidence) return false;
    if (!state.q) return true;
    const q = state.q.toLowerCase();
    const hay = [
      e.name,
      e.pinyin,
      e.summary,
      e.tcm,
      e.modern,
      e.group,
      ...(e.alias || []),
      ...e.mappings.map((m) => m.tcm + m.modern + m.note),
      ...e.refs.map((r) => r.text),
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  }

  // 反向检索：命中现代医学指标时，返回该映射行
  function findMappingHit(e) {
    if (!state.q) return null;
    const q = state.q.toLowerCase();
    for (const m of e.mappings) {
      const line = `${m.tcm} → ${m.modern}`;
      if ((line + " " + m.note).toLowerCase().includes(q)) return line;
    }
    for (const m of e.mappings) {
      if (m.modern.toLowerCase().includes(q)) return m.modern;
    }
    return null;
  }

  function highlight(text, q) {
    const safe = esc(text);
    if (!q) return safe;
    const re = new RegExp(
      "(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")",
      "ig"
    );
    return safe.replace(re, "<mark>$1</mark>");
  }

  function renderCards() {
    const list = DATA.entries.filter(matches);
    const grid = $("#cardGrid");
    const q = state.q;

    grid.innerHTML = list
      .map((e) => {
        const L = LAYER_MAP[e.layer];
        const hit = findMappingHit(e);
        return `
        <button class="card" data-id="${e.id}" style="--c:${L.color}">
          <span class="card-top">
            <span class="card-layer">${e.layer} · ${esc(e.group)}</span>
            <span class="card-ev"><i style="background:${EV_COLOR[e.evidence]}"></i>${e.evidence}</span>
          </span>
          <span class="card-name">${esc(e.name)}</span>
          <span class="card-py">${esc(e.pinyin)}</span>
          <span class="card-sum">${esc(e.summary)}</span>
          ${
            hit
              ? `<span class="card-hit"><b>命中</b>${highlight(hit, q)}</span>`
              : ""
          }
          <span class="card-foot">
            <span>${e.mappings.length} 组映射</span>
            <span class="arrow">→</span>
          </span>
        </button>`;
      })
      .join("");

    $("#empty").hidden = list.length > 0;
    $("#clearBtn").hidden =
      state.q === "" && state.layer === "all" && state.evidence === "all";
    $("#resultCount").textContent = `显示 ${list.length} / ${DATA.entries.length} 条目`;

    $$(".card", grid).forEach((c) =>
      c.addEventListener("click", () => openDrawer(c.dataset.id))
    );
  }

  /* ---------------- 抽屉 ---------------- */
  let lastFocus = null;

  // 未配置 relatedIds 时，按关键词自动匹配跨层条目
  function autoRelated(e) {
    const text = [
      e.name,
      e.summary,
      e.tcm,
      e.modern,
      ...(e.alias || []),
      ...e.mappings.map((m) => m.tcm + m.modern),
    ].join(" ");
    return DATA.entries
      .filter(
        (x) =>
          x.id !== e.id &&
          x.layer !== e.layer &&
          x.name.length >= 2 &&
          text.includes(x.name)
      )
      .slice(0, 6)
      .map((x) => x.id);
  }

  function resolveRelated(e) {
    const all = (e.relatedIds || [])
      .map((id) => DATA.entries.find((x) => x.id === id))
      .filter(Boolean);
    // 优先展示跨层条目；全部同层时改用关键词自动匹配
    const cross = all.filter((x) => x.layer !== e.layer);
    if (cross.length) return cross;
    const auto = autoRelated(e)
      .map((id) => DATA.entries.find((x) => x.id === id))
      .filter(Boolean);
    return auto.length ? auto : all;
  }

  function openDrawer(id) {
    const e = DATA.entries.find((x) => x.id === id);
    if (!e) return;
    const L = LAYER_MAP[e.layer];

    $("#drawerMeta").innerHTML = `
      <span class="dm-tag layer" style="--c:${L.color}">${e.layer} · ${esc(L.name)}</span>
      <span class="dm-tag">${esc(e.group)}</span>
      <span class="dm-tag ev">证据 ${e.evidence} · ${esc(EV_LABEL[e.evidence])}</span>
    `;

    const alias = (e.alias || [])
      .map((a) => `<span>${esc(a)}</span>`)
      .join("");

    const maps = e.mappings
      .map(
        (m) => `
      <div class="map-row">
        <div class="m-tcm">${esc(m.tcm)}</div>
        <div class="m-arrow">→</div>
        <div class="m-modern">${fmt(m.modern)}</div>
        ${m.note ? `<div class="m-note">${esc(m.note)}</div>` : ""}
      </div>`
      )
      .join("");

    const cites = e.refs
      .map(
        (r) =>
          `<li class="${r.type === "classic" ? "cls" : ""}"><span class="badge">${
            r.type === "classic" ? "典籍" : "研究"
          }</span>${esc(r.text)}</li>`
      )
      .join("");

    const crossChips = resolveRelated(e)
      .map((x) => {
        const xl = LAYER_MAP[x.layer];
        return `<button class="rel-chip cross" data-id="${x.id}" style="--c:${xl.color}">
          <span class="lv">${x.layer}</span>${esc(x.name)}
        </button>`;
      })
      .join("");

    const sameChips = DATA.entries
      .filter((x) => x.layer === e.layer && x.id !== e.id)
      .slice(0, 8)
      .map(
        (x) =>
          `<button class="rel-chip" data-id="${x.id}">${esc(x.name)}</button>`
      )
      .join("");

    $("#drawerBody").innerHTML = `
      <h2 class="dr-title">${esc(e.name)}</h2>
      <p class="dr-pinyin">${esc(e.pinyin)}</p>
      ${alias ? `<div class="dr-alias">${alias}</div>` : ""}
      <p class="dr-summary">${esc(e.summary)}</p>

      <div class="dr-block">
        <h4><b>中医定义</b> TRADITIONAL DEFINITION</h4>
        <p class="dr-text">${fmt(e.tcm)}</p>
      </div>

      <div class="dr-block">
        <h4><b>现代医学对应</b> MODERN CORRESPONDENCE</h4>
        <p class="dr-text">${fmt(e.modern)}</p>
      </div>

      <div class="dr-block">
        <h4><b>映射关系</b> MAPPING TABLE</h4>
        <div class="map-table">${maps}</div>
      </div>

      <div class="dr-block">
        <h4><b>证据强度</b> EVIDENCE</h4>
        <div class="ev-box">
          <div class="ev-grade ${e.evidence.toLowerCase()}">${e.evidence}</div>
          <div>
            <span class="ev-label">GRADE ${e.evidence} · ${esc(EV_LABEL[e.evidence])}　|　MECHANISM ${esc(
              e.mechanismLevel || "—"
            )} · ${esc(MECH_LABEL[e.mechanismLevel] || "—")}</span>
            <p>${esc(e.evidenceText)}</p>
          </div>
        </div>
      </div>

      <div class="dr-block">
        <h4><b>文献依据</b> REFERENCES</h4>
        <ul class="cite-list">${cites}</ul>
      </div>

      <div class="dr-block">
        <h4><b>跨层关联</b> CROSS-LAYER LINKS</h4>
        <div class="dr-related">${crossChips || '<span class="dr-none">暂无跨层关联</span>'}</div>
      </div>

      <div class="dr-block">
        <h4><b>同层条目</b> SAME LAYER</h4>
        <div class="dr-related">${sameChips || '<span class="dr-none">暂无同层条目</span>'}</div>
      </div>
    `;

    $$("#drawerBody .rel-chip").forEach((b) =>
      b.addEventListener("click", () => {
        openDrawer(b.dataset.id);
        $("#drawerBody").scrollTop = 0;
      })
    );

    if (!lastFocus || !document.body.contains(lastFocus) || $("#drawer").getAttribute("aria-hidden") === "true") {
      lastFocus = document.activeElement;
    }
    $("#drawer").classList.add("on");
    $("#drawer").setAttribute("aria-hidden", "false");
    $("#scrim").classList.add("on");
    document.body.style.overflow = "hidden";
    $("#drawerBody").scrollTop = 0;
    syncHash("entry/" + e.id);
  }

  function closeDrawer() {
    $("#drawer").classList.remove("on");
    $("#drawer").setAttribute("aria-hidden", "true");
    $("#scrim").classList.remove("on");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
    if (location.hash.indexOf("#entry/") === 0) syncHash("");
  }

  /* ---------------- 五行生克 ---------------- */
  const WX_COLOR = {
    wood: "#2c6b5b",
    fire: "#ad3427",
    earth: "#a9832b",
    metal: "#6b7280",
    water: "#23567e",
  };
  const WX_ORDER = ["wood", "fire", "earth", "metal", "water"];
  // 相克：木克土、土克水、水克火、火克金、金克木
  const WX_KE = { wood: "earth", earth: "water", water: "fire", fire: "metal", metal: "wood" };
  // 相侮（反克）：被克者反侮克者。X 侮 Y 当且仅当 Y 克 X
  const WX_WU = {};
  WX_ORDER.forEach((y) => { WX_WU[WX_KE[y]] = y; });

  // 病理传变：相乘（顺克太过）与相侮（反克）
  const WX_PATHO = {
    wood: {
      cheng: {
        label: "木旺乘土 · 肝气犯胃 / 肝郁脾虚",
        modern: "慢性应激经 HPA 轴与自主神经改变胃肠动力与内脏敏感性（脑—肠轴），对应功能性消化不良、肠易激综合征、应激性胃黏膜损伤。",
      },
      wu: {
        label: "木火刑金 · 肝火犯肺",
        modern: "门脉高压相关的肝肺综合征与门脉性肺动脉高压：肝病致肺内血管扩张、通气/血流比失调与低氧血症。",
      },
    },
    fire: {
      cheng: {
        label: "火旺乘金 · 心火灼肺",
        modern: "左心功能不全致肺静脉压升高、肺淤血与肺水肿，出现咳嗽、气促、端坐呼吸。",
      },
      wu: {
        label: "火盛侮水 · 心火耗伤肾阴",
        modern: "容量负荷与 RAAS/交感持续激活改变肾灌注与钠水排泄，形成心—肾轴恶性循环（心肾综合征）。",
      },
    },
    earth: {
      cheng: {
        label: "土旺乘水 · 脾湿泛滥",
        modern: "低蛋白血症与水钠潴留致水肿、腹水；有效循环血量下降进一步影响肾灌注与滤过。",
      },
      wu: {
        label: "土壅侮木 · 湿浊困阻肝疏泄",
        modern: "代谢综合征与非酒精性脂肪性肝病：胰岛素抵抗与脂毒性损伤肝细胞，肝内脂质沉积反过来加重代谢紊乱。",
      },
    },
    metal: {
      cheng: {
        label: "金旺乘木 · 肺病及肝",
        modern: "右心衰竭致肝淤血（心源性肝硬化）；慢性缺氧性肝损伤与肝酶异常。",
      },
      wu: {
        label: "金盛侮火 · 肺病及心",
        modern: "慢性肺病致肺动脉高压与肺源性心脏病、右心功能不全，最终全心衰竭。",
      },
    },
    water: {
      cheng: {
        label: "水旺乘火 · 肾水凌心",
        modern: "容量负荷与尿毒症毒素致心力衰竭、尿毒症性心包炎；心肾综合征的经典通路。",
      },
      wu: {
        label: "水盛侮土 · 肾病及脾",
        modern: "尿毒症致胃肠黏膜损伤、食欲下降与蛋白能量消耗（PEW），形成营养不良—炎症恶性循环。",
      },
    },
  };

  function renderWuxing() {
    const svg = $("#wuxingSvg");
    const cx = 310, cy = 280, R = 186;
    const nodes = {};
    WX_ORDER.forEach((key, i) => {
      const ang = (-90 + i * 72) * (Math.PI / 180);
      nodes[key] = { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) };
    });

    const patho = state.wxMode === "patho";

    let defs = `
      <defs>
        <marker id="arw-sheng" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#9aa2a8"/>
        </marker>
        <marker id="arw-ke" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#c9a06a"/>
        </marker>
      </defs>`;

    // 中心装饰
    let center = `
      <circle cx="${cx}" cy="${cy}" r="64" fill="none" stroke="rgba(20,24,27,.1)" stroke-dasharray="2 5"/>
      <text class="w-center-title" x="${cx}" y="${cy - 4}" text-anchor="middle" font-size="19" fill="#5d6870" letter-spacing="4">${patho ? "乘侮" : "生克"}</text>
      <text class="w-center-sub" x="${cx}" y="${cy + 18}" text-anchor="middle" font-size="7.5" fill="#8a9299" letter-spacing="2">${patho ? "CHENG · WU" : "SHENG · KE"}</text>
    `;

    // 相生连线（外圈，顺时针）
    let sheng = "";
    WX_ORDER.forEach((from, i) => {
      const to = WX_ORDER[(i + 1) % 5];
      const a = nodes[from], b = nodes[to];
      sheng += `<line class="wx-link sheng" data-from="${from}" data-to="${to}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="#c3c8cc" stroke-width="1.4" marker-end="url(#arw-sheng)"/>`;
    });

    // 相克连线（五角星，虚线）
    let ke = "";
    WX_ORDER.forEach((from) => {
      const to = WX_KE[from];
      const a = nodes[from], b = nodes[to];
      ke += `<line class="wx-link ke" data-from="${from}" data-to="${to}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="#d8bd92" stroke-width="1.2" stroke-dasharray="5 5" marker-end="url(#arw-ke)"/>`;
    });

    // 节点
    let nodeHtml = "";
    WX_ORDER.forEach((key) => {
      const el = DATA.wuxing.elements.find((x) => x.key === key);
      const n = nodes[key];
      const c = WX_COLOR[key];
      nodeHtml += `
        <g class="wx-node" data-key="${key}" transform="translate(${n.x},${n.y})">
          <circle class="node-bg" r="38" fill="#fbf8f0" stroke="${c}" stroke-width="1.4"/>
          <circle r="31" fill="none" stroke="${c}" stroke-opacity=".22" stroke-width=".8"/>
          <text class="w-node-char" y="8" text-anchor="middle" font-size="28" fill="${c}" letter-spacing="0">${el.name}</text>
          <text class="w-node-organ" y="58" text-anchor="middle" font-size="13" fill="#5d6870" letter-spacing="3">${el.organ}</text>
        </g>`;
    });

    svg.innerHTML = defs + center + sheng + ke + nodeHtml;

    $$(".wx-node", svg).forEach((g) => {
      g.addEventListener("mouseenter", () => setWx(g.dataset.key));
      g.addEventListener("click", () => setWx(g.dataset.key));
    });

    setWx(state.activeWx);
  }

  function setWx(key) {
    state.activeWx = key;
    const svg = $("#wuxingSvg");
    const patho = state.wxMode === "patho";
    const keTo = WX_KE[key];
    const wuTo = WX_WU[key];
    const idx = WX_ORDER.indexOf(key);
    const shengTo = WX_ORDER[(idx + 1) % 5];

    const focus = patho ? [key, keTo, wuTo] : [key, shengTo, keTo];

    $$(".wx-node", svg).forEach((g) => {
      const k = g.dataset.key;
      g.classList.toggle("sel", k === key);
      g.classList.toggle("dim", !focus.includes(k));
      const circle = $(".node-bg", g);
      circle.setAttribute("fill", k === key ? WX_COLOR[k] : "#fbf8f0");
      circle.setAttribute("stroke", patho && k === keTo ? "#ad3427" : WX_COLOR[k]);
      const t = $("text", g);
      t.setAttribute("fill", k === key ? "#fbf8f0" : WX_COLOR[k]);
    });

    $$(".wx-link", svg).forEach((ln) => {
      const isCheng = patho && ln.dataset.from === key && ln.dataset.to === keTo;
      const isWu = patho && ln.dataset.from === wuTo && ln.dataset.to === key;
      const isPhysio = !patho && ln.dataset.from === key;
      const on = isCheng || isWu || isPhysio;

      ln.classList.toggle("hi", on);
      ln.classList.toggle("dim", !on);

      if (isCheng) {
        ln.setAttribute("stroke", "#ad3427");
        ln.setAttribute("stroke-width", "2.8");
      } else if (isWu) {
        ln.setAttribute("stroke", "#b8781f");
        ln.setAttribute("stroke-width", "2.6");
      } else if (isPhysio) {
        ln.setAttribute("stroke", ln.classList.contains("ke") ? "#c08a3e" : "#7d868d");
        ln.setAttribute("stroke-width", ln.classList.contains("ke") ? "2.6" : "1.4");
      } else {
        ln.setAttribute("stroke", ln.classList.contains("ke") ? "#d8bd92" : "#c3c8cc");
        ln.setAttribute("stroke-width", ln.classList.contains("ke") ? "1.2" : "1.4");
      }
    });

    const el = DATA.wuxing.elements.find((x) => x.key === key);

    if (patho) {
      const p = WX_PATHO[key];
      const chengEl = DATA.wuxing.elements.find((x) => x.key === keTo);
      const wuEl = DATA.wuxing.elements.find((x) => x.key === wuTo);
      $("#wxDetail").innerHTML = `
        <span class="glyph">${el.name}</span>
        <p class="wx-kicker">PATHOLOGICAL TRANSMISSION · ${key.toUpperCase()}</p>
        <h3>${el.name} · ${el.organ}　病理传变</h3>
        <p class="wx-sub">相乘 → ${chengEl.name}（${chengEl.organ}）　相侮 → ${wuEl.name}（${wuEl.organ}）</p>
        <div class="wx-patho">
          <div class="wx-patho-item cheng">
            <span class="tag">相乘 · 顺克太过</span>
            <b>${esc(p.cheng.label)}</b>
            <p>${esc(p.cheng.modern)}</p>
          </div>
          <div class="wx-patho-item wu">
            <span class="tag">相侮 · 反克</span>
            <b>${esc(p.wu.label)}</b>
            <p>${esc(p.wu.modern)}</p>
          </div>
        </div>
      `;
      return;
    }

    const toEl = DATA.wuxing.elements.find((x) => x.key === shengTo);
    const keEl = DATA.wuxing.elements.find((x) => x.key === keTo);

    $("#wxDetail").innerHTML = `
      <span class="glyph">${el.name}</span>
      <p class="wx-kicker">FIVE PHASES · ${key.toUpperCase()}</p>
      <h3>${el.name} · ${el.organ}</h3>
      <p class="wx-sub">相生 → ${toEl.name}（${toEl.organ}）　相克 → ${keEl.name}（${keEl.organ}）</p>
      <dl class="wx-facts">
        <div class="wx-fact"><dt>腑 / FU</dt><dd>${el.fu}</dd></div>
        <div class="wx-fact"><dt>五味 / TASTE</dt><dd>${el.taste}</dd></div>
        <div class="wx-fact"><dt>五色 / COLOR</dt><dd>${el.color}</dd></div>
        <div class="wx-fact"><dt>五志 / EMOTION</dt><dd>${el.emotion}</dd></div>
        <div class="wx-fact"><dt>季节 / SEASON</dt><dd>${el.season}</dd></div>
        <div class="wx-fact"><dt>方位 / DIRECTION</dt><dd>${el.direction}</dd></div>
      </dl>
      <p class="wx-modern"><b>MODERN CORRESPONDENCE</b>${esc(el.modern)}</p>
    `;
  }

  /* ---------------- 辨证体系 ---------------- */
  function renderTabs() {
    $("#tabs").addEventListener("click", (ev) => {
      const btn = ev.target.closest(".tab");
      if (!btn) return;
      $$(".tab").forEach((t) => t.classList.toggle("active", t === btn));
      renderTabPanel(btn.dataset.tab);
    });
    renderTabPanel("bagang");
  }

  function renderTabPanel(key) {
    const box = $("#tabPanels");

    if (key === "bagang") {
      box.innerHTML = `<div class="tab-panel"><div class="bg-grid">${DATA.bagang
        .map(
          (b) => `
        <div class="bg-card">
          <span class="bg-role">${esc(b.role)}</span>
          <h4>${esc(b.name)}</h4>
          <p class="bg-tcm">${esc(b.content)}</p>
          <p class="bg-modern">${esc(b.modern)}</p>
          <p class="bg-ref">${esc(b.ref)}</p>
        </div>`
        )
        .join("")}</div></div>`;
    }

    if (key === "liujing") {
      box.innerHTML = `<div class="tab-panel"><div class="lj-flow">${DATA.liujing
        .map(
          (l) => `
        <div class="lj-item">
          <div class="lj-badge">${esc(l.name.replace("病", ""))}</div>
          <div class="lj-body">
            <h4>${esc(l.name)}</h4>
            <p class="lj-sys">STAGE ${l.stage} · ${esc(l.system)}</p>
            <p class="lj-tcm">${esc(l.summary)}</p>
            <p class="lj-modern"><strong>现代对应　</strong>${esc(l.modern)}</p>
          </div>
        </div>`
        )
        .join("")}</div></div>`;
    }

    if (key === "weiqi") {
      box.innerHTML = `<div class="tab-panel">
        <div class="wq-track" id="wqTrack">
          ${DATA.weiqi
            .map(
              (w, i) => `
            <div class="wq-stage${i === state.activeWq ? " on" : ""}" data-i="${i}">
              <div class="wq-lv">LEVEL ${w.depth} / 4</div>
              <h4>${esc(w.name)}</h4>
              <div class="wq-loc">${esc(w.location)}</div>
              <div class="wq-fill" style="width:${i === state.activeWq ? 100 : 0}%"></div>
            </div>`
            )
            .join("")}
        </div>
        <div class="wq-detail" id="wqDetail"></div>
      </div>`;

      $$("#wqTrack .wq-stage").forEach((s) =>
        s.addEventListener("click", () => {
          state.activeWq = Number(s.dataset.i);
          renderTabPanel("weiqi");
        })
      );
      renderWqDetail();
    }
  }

  function renderWqDetail() {
    const w = DATA.weiqi[state.activeWq];
    $("#wqDetail").innerHTML = `
      <div class="wq-head">
        <h4>${esc(w.name)}</h4>
        <p class="lvl">LEVEL ${w.depth} · ${esc(w.location)}</p>
        <p><strong>证候表现　</strong>${esc(w.summary)}</p>
        <p class="wq-mark">可测指标　${esc(w.marker)}</p>
      </div>
      <div class="wq-side">
        <h5>MODERN CORRESPONDENCE</h5>
        <p>${esc(w.modern)}</p>
      </div>
    `;
  }

  /* ---------------- 文献 ---------------- */
  function renderRefs() {
    const classic = [];
    const modern = [];
    const seen = new Set();

    DATA.entries.forEach((e) =>
      e.refs.forEach((r) => {
        if (seen.has(r.text)) return;
        seen.add(r.text);
        (r.type === "classic" ? classic : modern).push(r.text);
      })
    );

    const sortFn = (a, b) => a.localeCompare(b, "zh-Hans-CN");
    $("#refClassic").innerHTML = classic.sort(sortFn).map((t) => `<li>${esc(t)}</li>`).join("");
    $("#refModern").innerHTML = modern.sort(sortFn).map((t) => `<li>${esc(t)}</li>`).join("");
  }

  /* ---------------- URL Hash 深度链接 ---------------- */
  function syncHash(h) {
    if (!hashReady) return;
    const target = h ? "#" + h : location.pathname + location.search;
    try {
      history.replaceState(null, "", target);
    } catch (err) {
      /* file:// 等环境可能禁止修改历史，忽略即可 */
    }
  }

  function route(hash) {
    const h = (hash || "").replace(/^#/, "");
    const mEntry = h.match(/^entry\/(.+)$/);
    const mLayer = h.match(/^layer\/(.+)$/);

    if (mEntry) {
      openDrawer(decodeURIComponent(mEntry[1]));
      return;
    }
    if (mLayer) {
      const id = decodeURIComponent(mLayer[1]);
      if (DATA.layers.some((l) => l.id === id)) {
        setLayerFilter(id);
        $("#atlas").scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  /* ---------------- 交互绑定 ---------------- */
  function bind() {
    const search = $("#search");
    let timer;
    search.addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        state.q = search.value.trim();
        renderCards();
      }, 120);
    });

    $("#clearBtn").addEventListener("click", () => {
      state.q = "";
      state.layer = "all";
      state.evidence = "all";
      $("#search").value = "";
      $$("#filters .chip").forEach((c) =>
        c.classList.toggle("on", c.dataset.layer === "all")
      );
      $$("#evFilters .chip").forEach((c) =>
        c.classList.toggle("on", c.dataset.ev === "all")
      );
      $$("#nav a.sub").forEach((a) => a.classList.remove("active"));
      syncHash("");
      renderCards();
    });

    // 五行模式切换
    $("#wxMode").addEventListener("click", (ev) => {
      const btn = ev.target.closest(".wx-mode-btn");
      if (!btn) return;
      state.wxMode = btn.dataset.mode;
      $$(".wx-mode-btn").forEach((b) => b.classList.toggle("active", b === btn));
      renderWuxing();
    });

    $("#drawerClose").addEventListener("click", closeDrawer);
    $("#scrim").addEventListener("click", closeDrawer);

    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape") {
        closeDrawer();
        $("#sidebar").classList.remove("on");
      }
      if (ev.key === "/" && document.activeElement !== search) {
        ev.preventDefault();
        search.focus();
      }
    });

    $("#menuBtn").addEventListener("click", () =>
      $("#sidebar").classList.toggle("on")
    );

    $("#nav").addEventListener("click", (ev) => {
      const a = ev.target.closest("a");
      if (!a) return;
      if (a.dataset.layer) {
        setLayerFilter(a.dataset.layer);
        $("#atlas").scrollIntoView({ behavior: "smooth", block: "start" });
      }
      $("#sidebar").classList.remove("on");
    });

    window.addEventListener("hashchange", () => route(location.hash));

    // 滚动高亮
    const sections = ["top", "layers", "atlas", "wuxing", "bianzheng", "refs"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const id = en.target.id;
          $$('#nav a[data-target]').forEach((a) =>
            a.classList.toggle("active", a.dataset.target === id)
          );
        });
      },
      { rootMargin: "-72px 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
  }

  /* ---------------- 启动 ---------------- */
  function init() {
    $("#disclaimer").textContent = DATA.meta.disclaimer;
    $("#version").textContent = "v" + DATA.meta.version;
    $("#updated").textContent = DATA.meta.updated;

    renderStats();
    renderNav();
    renderLayers();
    renderFilters();
    renderEvFilters();
    renderCards();
    renderWuxing();
    renderTabs();
    renderRefs();
    bind();

    // 解析初始 hash，支持直接分享词条或层级
    hashReady = true;
    if (/^#(entry|layer)\//.test(location.hash)) {
      route(location.hash);
      if (/^#layer\//.test(location.hash)) {
        setTimeout(
          () => $("#atlas").scrollIntoView({ behavior: "auto", block: "start" }),
          60
        );
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
