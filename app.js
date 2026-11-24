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
    activeWx: "wood",
    activeWq: 0,
  };

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

  function setLayerFilter(id) {
    state.layer = id;
    $$("#filters .chip").forEach((c) =>
      c.classList.toggle("on", c.dataset.layer === id)
    );
    $$("#nav a.sub").forEach((a) =>
      a.classList.toggle("active", a.dataset.layer === id)
    );
    renderCards();
  }

  /* ---------------- 卡片 ---------------- */
  function matches(e) {
    if (state.layer !== "all" && e.layer !== state.layer) return false;
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

  function renderCards() {
    const list = DATA.entries.filter(matches);
    const grid = $("#cardGrid");

    grid.innerHTML = list
      .map((e) => {
        const L = LAYER_MAP[e.layer];
        return `
        <button class="card" data-id="${e.id}" style="--c:${L.color}">
          <span class="card-top">
            <span class="card-layer">${e.layer} · ${esc(e.group)}</span>
            <span class="card-ev"><i style="background:${EV_COLOR[e.evidence]}"></i>${e.evidence}</span>
          </span>
          <span class="card-name">${esc(e.name)}</span>
          <span class="card-py">${esc(e.pinyin)}</span>
          <span class="card-sum">${esc(e.summary)}</span>
          <span class="card-foot">
            <span>${e.mappings.length} 组映射</span>
            <span class="arrow">→</span>
          </span>
        </button>`;
      })
      .join("");

    $("#empty").hidden = list.length > 0;
    $("#clearBtn").hidden = state.q === "" && state.layer === "all";
    $("#resultCount").textContent = `显示 ${list.length} / ${DATA.entries.length} 条目`;

    $$(".card", grid).forEach((c) =>
      c.addEventListener("click", () => openDrawer(c.dataset.id))
    );
  }

  /* ---------------- 抽屉 ---------------- */
  let lastFocus = null;

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
            <span class="ev-label">GRADE ${e.evidence} · ${esc(EV_LABEL[e.evidence])}</span>
            <p>${esc(e.evidenceText)}</p>
          </div>
        </div>
      </div>

      <div class="dr-block">
        <h4><b>文献依据</b> REFERENCES</h4>
        <ul class="cite-list">${cites}</ul>
      </div>

      <div class="dr-block">
        <h4><b>同层条目</b> SAME LAYER</h4>
        <div class="dr-related">${DATA.entries
          .filter((x) => x.layer === e.layer && x.id !== e.id)
          .slice(0, 8)
          .map(
            (x) =>
              `<button class="rel-chip" data-id="${x.id}">${esc(x.name)}</button>`
          )
          .join("")}</div>
      </div>
    `;

    $$("#drawerBody .rel-chip").forEach((b) =>
      b.addEventListener("click", () => {
        openDrawer(b.dataset.id);
        $("#drawerBody").scrollTop = 0;
      })
    );

    lastFocus = document.activeElement;
    $("#drawer").classList.add("on");
    $("#drawer").setAttribute("aria-hidden", "false");
    $("#scrim").classList.add("on");
    document.body.style.overflow = "hidden";
    $("#drawerBody").scrollTop = 0;
  }

  function closeDrawer() {
    $("#drawer").classList.remove("on");
    $("#drawer").setAttribute("aria-hidden", "true");
    $("#scrim").classList.remove("on");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
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

  function renderWuxing() {
    const svg = $("#wuxingSvg");
    const cx = 310, cy = 280, R = 186;
    const nodes = {};
    WX_ORDER.forEach((key, i) => {
      const ang = (-90 + i * 72) * (Math.PI / 180);
      nodes[key] = { x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) };
    });

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
      <text class="w-center-title" x="${cx}" y="${cy - 4}" text-anchor="middle" font-size="19" fill="#5d6870" letter-spacing="4">生克</text>
      <text class="w-center-sub" x="${cx}" y="${cy + 18}" text-anchor="middle" font-size="7.5" fill="#8a9299" letter-spacing="2">SHENG · KE</text>
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
    const keTo = WX_KE[key];
    const idx = WX_ORDER.indexOf(key);
    const shengTo = WX_ORDER[(idx + 1) % 5];

    $$(".wx-node", svg).forEach((g) => {
      const k = g.dataset.key;
      g.classList.toggle("sel", k === key);
      g.classList.toggle("dim", k !== key && k !== shengTo && k !== keTo);
      const circle = $(".node-bg", g);
      circle.setAttribute("fill", k === key ? WX_COLOR[k] : "#fbf8f0");
      const t = $("text", g);
      t.setAttribute("fill", k === key ? "#fbf8f0" : WX_COLOR[k]);
    });

    $$(".wx-link", svg).forEach((ln) => {
      const on = ln.dataset.from === key;
      ln.classList.toggle("hi", on);
      ln.classList.toggle("dim", !on);
      if (on) {
        ln.setAttribute("stroke", ln.classList.contains("ke") ? "#c08a3e" : "#7d868d");
      } else {
        ln.setAttribute(
          "stroke",
          ln.classList.contains("ke") ? "#d8bd92" : "#c3c8cc"
        );
      }
    });

    const el = DATA.wuxing.elements.find((x) => x.key === key);
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
      $("#search").value = "";
      $$("#filters .chip").forEach((c) =>
        c.classList.toggle("on", c.dataset.layer === "all")
      );
      $$("#nav a.sub").forEach((a) => a.classList.remove("active"));
      renderCards();
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
    renderCards();
    renderWuxing();
    renderTabs();
    renderRefs();
    bind();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
