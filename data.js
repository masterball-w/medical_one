/* ============================================================
   岐黄映射 · TCM × Modern Medicine
   多级分层映射数据集
   分层：L0 哲学本体 / L1 生命物质 / L2 脏腑系统 / L3 病机证候
        L4 辨证体系 / L5 诊疗技术
   证据分级：A 临床/机制强证据 · B 中等证据 · C 理论类比
   ============================================================ */

window.TCM_DATA = {
  meta: {
    title: "岐黄映射",
    subtitle: "中医概念 · 现代医学对应",
    version: "1.0",
    updated: "2026-11",
    disclaimer:
      "本站为学术整理与教学演示，用于概念对照与文献索引，不构成任何诊疗建议。证据等级 C 表示结构类比或理论推演，不代表因果结论。临床应用请遵循执业医师指导。",
  },

  /* ---------------- 分层定义 ---------------- */
  layers: [
    {
      id: "L0",
      name: "哲学本体层",
      en: "Ontological Layer",
      desc: "中医理论的最底层公理：阴阳、五行、气一元论。它们不是解剖实体，而是一套描述生命系统「对立统一、多节点耦合、动态平衡」的关系语言。",
      color: "#8c6d3f",
    },
    {
      id: "L1",
      name: "生命物质层",
      en: "Vital Substance Layer",
      desc: "构成与维持生命的物质与功能基底：精、气、神、血、津液。现代医学中无单一对应物，需落到细胞、分子、能量与信息调控网络。",
      color: "#2f6f5e",
    },
    {
      id: "L2",
      name: "脏腑系统层",
      en: "Organ System Layer",
      desc: "五脏六腑是「功能系统」而非解剖器官。现代对应需叠加解剖脏器、生理功能、神经内分泌调控三个维度理解。",
      color: "#a8322d",
    },
    {
      id: "L3",
      name: "病机证候层",
      en: "Pathomechanism Layer",
      desc: "由脏腑功能失调派生的证候单元。每一证候可拆解为若干可测量的现代生理/生化异常，是中西医沟通密度最高的层级。",
      color: "#7a4b8c",
    },
    {
      id: "L4",
      name: "辨证体系层",
      en: "Diagnostic System Layer",
      desc: "八纲、六经、卫气营血等分类算法。现代对应为「多维分型/分层诊断模型」，与疾病分期、严重度评分、表型分型同构。",
      color: "#1f5f8b",
    },
    {
      id: "L5",
      name: "诊疗技术层",
      en: "Therapeutic Layer",
      desc: "经络、腧穴、针灸、脉诊、舌诊。现代研究集中于结缔组织平面、神经血管束、肥大细胞与腺苷信号等可测量机制。",
      color: "#b07d1a",
    },
  ],

  /* ---------------- 五行 · 五脏对应 ---------------- */
  wuxing: {
    elements: [
      { key: "wood", name: "木", organ: "肝", fu: "胆", taste: "酸", color: "青", emotion: "怒", season: "春", direction: "东", modern: "生长/代谢/疏泄：肝脏代谢轴与自主神经调节" },
      { key: "fire", name: "火", organ: "心", fu: "小肠", taste: "苦", color: "赤", emotion: "喜", season: "夏", direction: "南", modern: "循环/兴奋：心血管泵功能与交感激活" },
      { key: "earth", name: "土", organ: "脾", fu: "胃", taste: "甘", color: "黄", emotion: "思", season: "长夏", direction: "中", modern: "消化吸收与免疫：胃肠-菌群-免疫轴" },
      { key: "metal", name: "金", organ: "肺", fu: "大肠", taste: "辛", color: "白", emotion: "悲", season: "秋", direction: "西", modern: "气体交换与屏障：呼吸-免疫-皮肤屏障" },
      { key: "water", name: "水", organ: "肾", fu: "膀胱", taste: "咸", color: "黑", emotion: "恐", season: "冬", direction: "北", modern: "排泄与内分泌：RAAS/EPO/维生素D/性腺轴" },
    ],
    sheng: { desc: "相生：木生火、火生土、土生金、金生水、水生木", modern: "正反馈或促进性耦合：一个系统的产物成为下一系统的输入" },
    ke: { desc: "相克：木克土、土克水、水克火、火克金、金克木", modern: "负反馈约束：防止单一通路过度放大，维持网络稳定" },
  },

  /* ---------------- 八纲 ---------------- */
  bagang: [
    { name: "阴阳", role: "总纲", content: "阳证＝兴奋、亢进、代谢增高的证候群；阴证＝抑制、衰退、代谢低下的证候群。", modern: "从「亢进/低下」看，近似自主神经张力、代谢率与炎症水平的双极偏移。", ref: "《医学心悟·寒热虚实表里阴阳辨》" },
    { name: "表里", role: "病位", content: "表证病位浅在肌表、起病急、病程短；里证病位深在脏腑，病程长、变化多。", modern: "近似「局部/早期炎症」与「系统性/器质性病变」的分层，可对应炎症标志物与影像学受累范围。", ref: "《伤寒论》《医学心悟》" },
    { name: "寒热", role: "病性", content: "寒证见畏寒、肢冷、分泌物清稀；热证见发热、口渴、分泌物黄稠。", modern: "近似「产热-散热平衡」与「炎症-代谢活性」两个维度：寒≈低代谢/低灌注，热≈高代谢/炎症活跃。", ref: "《素问·阴阳应象大论》《医学心悟》" },
    { name: "虚实", role: "正邪", content: "虚证为正虚（气血阴阳不足）；实证为邪盛（病理产物蓄积）。", modern: "虚≈储备功能下降（器官储备、营养、免疫）；实≈负荷增加（容量负荷、炎症负荷、代谢产物蓄积）。", ref: "《素问·通评虚实论》《医学心悟》" },
  ],

  /* ---------------- 六经 ---------------- */
  liujing: [
    { name: "太阳病", stage: "1", system: "体表-营卫", summary: "外邪初袭，恶寒发热、头项强痛、脉浮。", modern: "上呼吸道/黏膜早期感染，固有免疫与局部炎症启动，尚无全身器官受累。" },
    { name: "阳明病", stage: "2", system: "胃肠-里实热", summary: "邪入里化热，高热、汗出、烦渴、便秘、脉洪大。", modern: "全身炎症反应综合征（SIRS）伴胃肠功能紊乱：高热、脱水、肠麻痹。" },
    { name: "少阳病", stage: "3", system: "半表半里", summary: "寒热往来、胸胁苦满、口苦咽干、脉弦。", modern: "迁延性/局限性炎症，免疫-内分泌调节失衡，功能性躯体化表现突出。" },
    { name: "太阴病", stage: "4", system: "脾胃虚寒", summary: "腹满而吐、食不下、自利、时腹自痛。", modern: "消化吸收功能低下、胃肠动力紊乱，对应慢性肠病与营养不良倾向。" },
    { name: "少阴病", stage: "5", system: "心肾阳虚", summary: "但欲寐、脉微细、四肢厥逆。", modern: "循环衰竭前期/低灌注、意识水平下降，对应休克早期与多器官储备耗竭。" },
    { name: "厥阴病", stage: "6", system: "阴阳错杂", summary: "消渴、气上撞心、心中疼热、厥热胜复。", modern: "终末期多器官功能不全伴内环境紊乱，代谢-循环-神经调控相互失代偿。" },
  ],

  /* ---------------- 卫气营血 ---------------- */
  weiqi: [
    { name: "卫分证", depth: 1, location: "皮毛肌腠·肺卫", summary: "发热微恶风寒、头痛、咳嗽、口微渴、舌边尖红、脉浮数。", modern: "病原体侵入黏膜，固有免疫与局部血管反应启动；上呼吸道感染早期。", marker: "局部炎症介质、黏膜充血" },
    { name: "气分证", depth: 2, location: "肺·胃·肠·胆", summary: "壮热、不恶寒反恶热、大汗、大渴、脉洪大。", modern: "全身炎症反应期，高热与代谢亢进；炎症标志物（CRP、PCT）显著升高。", marker: "CRP / PCT / 白细胞介素-6" },
    { name: "营分证", depth: 3, location: "心营·血络", summary: "身热夜甚、心烦不寐、时有谵语、舌绛少苔、脉细数。", modern: "炎症累及中枢与微循环：意识改变、微循环障碍、凝血激活前状态。", marker: "D-二聚体、乳酸、意识评分" },
    { name: "血分证", depth: 4, location: "血分·肝肾", summary: "斑疹显露、吐血便血、抽搐、舌深绛、脉细数。", modern: "弥散性血管内凝血（DIC）、多器官功能障碍（MODS），出现出血倾向与器官损伤。", marker: "血小板下降、凝血酶原时间延长、器官功能评分" },
  ],

  /* ============================================================
     概念映射条目
     ============================================================ */
  entries: [
    /* ===================== L0 ===================== */
    {
      id: "yinyang",
      layer: "L0",
      group: "阴阳五行",
      name: "阴阳",
      pinyin: "Yīn Yáng",
      alias: ["阴阳学说", "阴阳消长"],
      summary: "对立统一的关系模型，中医全部理论的元语言。",
      tcm:
        "阴阳指事物相互对立又相互依存的两种属性。《素问·阴阳应象大论》：『阴阳者，天地之道也，万物之纲纪，变化之父母，生杀之本始，神明之府也。』其内容含对立制约、互根互用、消长平衡、相互转化四层。",
      modern:
        "现代医学没有与「阴阳」一一对应的实体。最贴近的对应是**稳态调控（homeostasis）中的成对拮抗系统**：交感—副交感、合成—分解、促炎—抗炎、氧化—抗氧化、凝血—纤溶。阴阳描述的不是某种物质，而是这些成对系统在动态中维持「可生存区间」的关系结构。",
      mappings: [
        { tcm: "阴阳对立制约", modern: "交感/副交感、促炎/抗炎、凝血/纤溶的相互抑制", note: "如去甲肾上腺素与乙酰胆碱在窦房结的拮抗调控" },
        { tcm: "阴阳互根互用", modern: "负反馈环路中的相互依赖（如胰岛素/胰高血糖素）", note: "一方缺失将导致系统失去可调性" },
        { tcm: "阴阳消长平衡", modern: "稳态调定点（set point）与生理节律波动", note: "皮质醇晨高夜低的昼夜节律即典型「消长」" },
        { tcm: "阴阳相互转化", modern: "阈值效应与相变：SIRS 向 CARS 的代偿性反转", note: "重度炎症后出现免疫抑制，临床常见" },
      ],
      evidence: "B",
      evidenceText: "作为关系模型与稳态理论高度同构；但「阴阳」不指向特定分子，只能做结构性映射。",
      refs: [
        { type: "classic", text: "《黄帝内经·素问·阴阳应象大论》" },
        { type: "classic", text: "《黄帝内经·素问·生气通天论》" },
        { type: "modern", text: "Cannon WB. The Wisdom of the Body. New York: Norton, 1932.（内环境稳态概念的提出）" },
        { type: "modern", text: "Kitano H. Systems biology: a brief overview. Science, 2002, 295(5560): 1662–1664." },
      ],
    },
    {
      id: "wuxing",
      layer: "L0",
      group: "阴阳五行",
      name: "五行",
      pinyin: "Wǔ Xíng",
      alias: ["五行学说", "木火土金水"],
      summary: "五类属性构成的多节点生克网络模型。",
      tcm:
        "五行以木、火、土、金、水概括五类属性及其运动变化。《素问·五运行大论》确立五行与方位、季节、脏象的配属。五行不是五种物质，而是五类「功能态」及其相互关系。",
      modern:
        "五行可视为**多节点网络的关系拓扑**：相生近似促进性耦合（正反馈/级联放大），相克近似抑制性约束（负反馈）。现代系统生物学中的基因调控网络、代谢通路网络、器官轴（肠—脑轴、心—肾轴、肝—肠轴）具有同构的关系结构，但节点数目远多于五。",
      mappings: [
        { tcm: "五行配五脏", modern: "五大功能系统：代谢/循环/消化免疫/呼吸屏障/排泄内分泌", note: "属功能归类，非解剖分类" },
        { tcm: "相生（促进性耦合）", modern: "级联放大、底物—产物链、器官轴正向调节", note: "如肾素→血管紧张素→醛固酮" },
        { tcm: "相克（抑制性约束）", modern: "负反馈、拮抗激素、抑制性中间神经元", note: "防止通路失控" },
        { tcm: "相乘相侮（网络失衡）", modern: "正反馈失控、代偿失败、多器官级联损伤", note: "如肝硬化导致肝肾综合征" },
      ],
      evidence: "C",
      evidenceText: "结构类比成立，但五行模型节点固定为五，无法覆盖现代医学的多层网络，属启发性模型。",
      refs: [
        { type: "classic", text: "《黄帝内经·素问·五运行大论》" },
        { type: "classic", text: "《黄帝内经·素问·阴阳应象大论》" },
        { type: "modern", text: "Kitano H. Systems biology: a brief overview. Science, 2002, 295(5560): 1662–1664." },
        { type: "modern", text: "Barabási AL, Oltvai ZN. Network biology: understanding the cell's functional organization. Nature Reviews Genetics, 2004, 5(2): 101–113." },
      ],
    },
    {
      id: "wuxing-shengke",
      layer: "L0",
      group: "阴阳五行",
      name: "五行生克",
      pinyin: "Wǔ Xíng Shēng Kè",
      alias: ["生克制化", "母子关系"],
      summary: "五脏之间促进与约束的双向关系网。",
      tcm:
        "相生：木生火、火生土、土生金、金生水、水生木，构成「母子」促进链。相克：木克土、土克水、水克火、火克金、金克木，构成约束环。生中有克、克中有生，维持「制化」平衡。",
      modern:
        "相生≈器官轴上的**促进性信号传递**（如肝合成的血管紧张素原经肾素系统作用于肾与血管）；相克≈**负反馈与拮抗机制**（如心钠肽抑制 RAAS、胰岛素抑制胰高血糖素）。五脏关系在现代医学中体现为器官轴与神经内分泌反馈环路。",
      mappings: [
        { tcm: "木生火（肝→心）", modern: "肝脏合成的载脂蛋白、凝血因子支持心血管功能", note: "肝—心轴" },
        { tcm: "火生土（心→脾）", modern: "心输出量决定肠道灌注；心衰致肠壁水肿吸收障碍", note: "心—肠轴" },
        { tcm: "土生金（脾→肺）", modern: "肠道菌群与黏膜免疫影响肺部免疫（肠—肺轴）", note: "已有明确动物与人群证据" },
        { tcm: "金生水（肺→肾）", modern: "肺参与 RAAS（肺内 ACE 含量高），影响肾灌注与钠水", note: "肺—肾轴" },
        { tcm: "水生木（肾→肝）", modern: "肾灌注与 RAAS 影响肝血流；肝肾综合征为典型失代偿", note: "肝—肾轴" },
        { tcm: "木克土（肝→脾）", modern: "应激/情绪经 HPA 轴与自主神经改变胃肠动力（脑—肠轴）", note: "功能性胃肠病常见" },
        { tcm: "土克水（脾→肾）", modern: "胃肠吸收影响容量与电解质，间接调控肾排泄", note: "容量—渗透压调节" },
        { tcm: "水克火（肾→心）", modern: "容量与电解质（钾、钠）直接决定心肌兴奋性与血压", note: "肾—心轴" },
        { tcm: "火克金（心→肺）", modern: "左心功能影响肺循环压力，肺水肿为典型表现", note: "心—肺轴" },
        { tcm: "金克木（肺→肝）", modern: "肺内 ACE 参与血管紧张素代谢，影响肝窦压力", note: "肺—肝轴" },
      ],
      evidence: "B",
      evidenceText: "器官轴（肠—肺、肝—肾、心—肾）已有大量生理学与临床证据；但「五行」固定映射并非唯一解，属启发性框架。",
      refs: [
        { type: "classic", text: "《黄帝内经·素问·五运行大论》《素问·宝命全形论》" },
        { type: "modern", text: "Budden KF, et al. Emerging pathogenic links between microbiota and the gut–lung axis. Nature Reviews Microbiology, 2017, 15(1): 55–63." },
        { type: "modern", text: "Angeli P, et al. Hyponatremia in cirrhosis: pathophysiology. Journal of Hepatology, 2019." },
      ],
    },
    {
      id: "qiyuan",
      layer: "L0",
      group: "阴阳五行",
      name: "气一元论",
      pinyin: "Qì Yī Yuán Lùn",
      alias: ["精气学说", "气本论"],
      summary: "气是构成万物的本原，也是生命活动的动力。",
      tcm:
        "《素问·宝命全形论》：『人以天地之气生。』气既是构成人体的物质，也是推动生命活动的功能。气一元论将物质与功能统一于「气」，是中医生理学的本体论基础。",
      modern:
        "现代医学中「物质与功能统一」的对应是**能量代谢与信息调控的耦合**：ATP 供能、线粒体氧化磷酸化、神经—内分泌—免疫信号网络、生物电活动。气一元论可视为对「代谢—信息耦合系统」的整体性抽象。",
      mappings: [
        { tcm: "气为生命动力", modern: "线粒体 ATP 产生与能量稳态", note: "ATP 是「动力」的分子载体" },
        { tcm: "气机升降出入", modern: "跨膜转运、血流/气流/淋巴流的定向运输", note: "钠钾泵、气体交换、静脉回流" },
        { tcm: "气化", modern: "物质代谢与转化（合成/分解代谢）", note: "气化≈新陈代谢" },
      ],
      evidence: "C",
      evidenceText: "整体性抽象，可对应但不可还原为单一指标。",
      refs: [
        { type: "classic", text: "《黄帝内经·素问·宝命全形论》《素问·六微旨大论》" },
        { type: "modern", text: "Nunnari J, Suomalainen A. Mitochondria: in sickness and in health. Cell, 2012, 148(6): 1145–1159." },
      ],
    },

    /* ===================== L1 ===================== */
    {
      id: "jing",
      layer: "L1",
      group: "生命物质",
      name: "精",
      pinyin: "Jīng",
      alias: ["精气", "先天之精", "后天之精"],
      summary: "生命的物质基础与遗传载体，主生长发育与生殖。",
      tcm:
        "精是构成人体和维持生命活动的最基本物质，分先天之精（禀受父母）与后天之精（水谷化生）。《素问·金匮真言论》：『夫精者，身之本也。』精主生长、发育、生殖与化髓充脑。",
      modern:
        "「精」跨越多个现代概念：**基因组与表观遗传信息**（先天之精）、**干细胞池与生殖细胞**（生长发育与生殖）、**营养储备**（后天之精）。其「主骨生髓充脑」与骨髓造血、间充质干细胞、神经发生高度相关。",
      mappings: [
        { tcm: "先天之精", modern: "基因组、表观遗传修饰、线粒体 DNA", note: "遗传信息的物质载体" },
        { tcm: "精主生殖", modern: "下丘脑—垂体—性腺轴（HPG）与配子发生", note: "GnRH→LH/FSH→性激素" },
        { tcm: "精生髓充脑", modern: "骨髓造血干细胞、间充质干细胞、成年神经发生", note: "骨—脑—造血的联系" },
        { tcm: "精化为气", modern: "线粒体氧化磷酸化将底物转化为 ATP", note: "物质→能量的转化" },
      ],
      evidence: "B",
      evidenceText: "干细胞与 HPG 轴对应明确；「精」的整体概念大于任一现代指标。",
      refs: [
        { type: "classic", text: "《黄帝内经·素问·金匮真言论》《素问·上古天真论》" },
        { type: "classic", text: "《难经·三十六难》" },
        { type: "modern", text: "Morrison SJ, Scadden DT. The bone marrow niche for haematopoietic stem cells. Nature, 2014, 505(7483): 327–334." },
      ],
    },
    {
      id: "qi",
      layer: "L1",
      group: "生命物质",
      name: "气",
      pinyin: "Qì",
      alias: ["元气", "宗气", "营气", "卫气"],
      summary: "推动、温煦、防御、固摄、气化五大功能。",
      tcm:
        "气是构成人体和维持生命活动的基本物质与功能。分类：元气（肾中精气化生，生命原动力）、宗气（肺吸入清气与脾运化水谷之气结合，聚于胸中）、营气（行于脉中，化生血液）、卫气（行于脉外，温养肌表、抗御外邪）。",
      modern:
        "气的五大功能可逐项对应：**推动**≈循环动力与蠕动；**温煦**≈基础代谢产热；**防御**≈固有免疫与黏膜屏障；**固摄**≈括约肌、血管张力与止血；**气化**≈物质代谢。卫气与营气的区分近似「免疫屏障（组织层）」与「血液营养运输（血管内）」。",
      mappings: [
        { tcm: "气的推动", modern: "心泵功能、胃肠蠕动、纤毛运动", note: "动力性功能的总称" },
        { tcm: "气的温煦", modern: "基础代谢率、棕色脂肪产热、甲状腺激素", note: "体温维持" },
        { tcm: "卫气（防御）", modern: "黏膜免疫、皮肤屏障、中性粒细胞与巨噬细胞", note: "「卫」≈外周免疫监视" },
        { tcm: "营气（营养）", modern: "血浆营养物质运输与红细胞携氧", note: "「营」≈血管内营养" },
        { tcm: "气的固摄", modern: "括约肌张力、血管内皮完整性、凝血", note: "防止「漏出」" },
      ],
      evidence: "B",
      evidenceText: "功能分解后各项均有对应生理基础；作为整体概念仍属抽象。",
      refs: [
        { type: "classic", text: "《黄帝内经·素问·痹论》《灵枢·营卫生会》" },
        { type: "classic", text: "《难经·八难》" },
        { type: "modern", text: "Medzhitov R. Recognition of microorganisms and activation of the immune response. Nature, 2007, 449(7164): 819–826." },
      ],
    },
    {
      id: "shen",
      layer: "L1",
      group: "生命物质",
      name: "神",
      pinyin: "Shén",
      alias: ["神明", "元神", "识神"],
      summary: "生命活动的外在征象与精神意识思维活动。",
      tcm:
        "神有广义与狭义之分。广义之神为人体生命活动的外在表现（「得神者昌，失神者亡」）；狭义之神指精神、意识、思维、情志活动，为心所主（「心藏神」）。神由精气血所化生，又统御精气血。",
      modern:
        "广义之神≈**整体生命状态的外在可观察征象**（意识水平、眼神、反应性、面色、体态），临床上接近「一般情况（general appearance）」与格拉斯哥昏迷评分；狭义之神≈**中枢神经系统高级功能**——意识、认知、情绪、执行功能，涉及前额叶—边缘系统—丘脑网络。",
      mappings: [
        { tcm: "神为生命征象", modern: "意识水平、觉醒度、GCS 评分、一般状况", note: "「失神」≈意识障碍/衰竭面容" },
        { tcm: "心藏神", modern: "丘脑—皮层网络与默认模式网络（DMN）", note: "「心」在此为功能系统而非心脏" },
        { tcm: "神魂（肝藏魂）", modern: "睡眠—觉醒周期、梦境、边缘系统情绪加工", note: "REM 睡眠与情绪记忆整合" },
        { tcm: "神机（气机的外在表现）", modern: "神经—内分泌—免疫网络的整体调节状态", note: "应激反应性" },
      ],
      evidence: "B",
      evidenceText: "神经科学对应清晰但「神」含哲学与整体生命观成分，不能完全还原。",
      refs: [
        { type: "classic", text: "《黄帝内经·素问·移精变气论》《灵枢·本神》" },
        { type: "classic", text: "《素问·上古天真论》" },
        { type: "modern", text: "Raichle ME. The brain's default mode network. Annual Review of Neuroscience, 2015, 38: 433–447." },
      ],
    },
    {
      id: "xue",
      layer: "L1",
      group: "生命物质",
      name: "血",
      pinyin: "Xuè",
      alias: ["营血", "血液"],
      summary: "濡养全身、化神载气的红色液态物质。",
      tcm:
        "血是循行于脉中、富有营养的红色液态物质。《灵枢·营卫生会》：『中焦亦并胃中，出上焦之后，此所受气者，泌糟粕，蒸津液，化其精微，上注于肺脉，乃化而为血。』血主濡养、化神，与气互根（气为血帅，血为气母）。",
      modern:
        "血与**血液系统**直接对应：红细胞携氧、血浆运输营养与激素、白细胞免疫、血小板与凝血因子止血。中医「血虚」接近贫血与组织灌注不足；「血瘀」接近微循环障碍与高凝状态。",
      mappings: [
        { tcm: "血主濡养", modern: "红细胞携氧与血浆营养运输", note: "血红蛋白、白蛋白" },
        { tcm: "血能载气", modern: "血液作为激素与代谢底物的运输载体", note: "无血流则信号无法传递" },
        { tcm: "气能生血", modern: "造血所需的能量与促红细胞生成素（EPO）", note: "EPO 由肾产生" },
        { tcm: "血能化神", modern: "脑灌注与葡萄糖/氧供决定认知功能", note: "贫血致乏力、注意力下降" },
      ],
      evidence: "A",
      evidenceText: "血液系统与中医血的物质基础高度重合，「血虚/血瘀」有成熟实验室指标。",
      refs: [
        { type: "classic", text: "《灵枢·营卫生会》《灵枢·决气》" },
        { type: "classic", text: "《素问·八正神明论》" },
        { type: "modern", text: "中国中西医结合学会活血化瘀专业委员会. 血瘀证诊断标准. 1986/2016 修订版." },
      ],
    },
    {
      id: "jinye",
      layer: "L1",
      group: "生命物质",
      name: "津液",
      pinyin: "Jīn Yè",
      alias: ["津", "液", "水液"],
      summary: "机体一切正常水液的总称，主滋润与濡养。",
      tcm:
        "津液是机体一切正常水液的总称。清稀流动性大者为津（布散于体表、孔窍），稠厚流动性小者为液（灌注于骨节、脏腑、脑髓）。津液代谢依赖脾的运化、肺的宣降、肾的蒸腾气化与三焦的通调。",
      modern:
        "津液≈**体液（total body water）与水电解质平衡**：细胞内液、细胞外液（血浆、组织间液、淋巴）、消化液、脑脊液、关节滑液、泪液与唾液。其代谢调控对应抗利尿激素（ADH）、RAAS、心房钠尿肽（ANP）与口渴中枢。",
      mappings: [
        { tcm: "津（清稀）", modern: "唾液、汗液、泪液、组织间液", note: "外分泌与间质液" },
        { tcm: "液（稠厚）", modern: "关节滑液、脑脊液、眼玻璃体", note: "深部润滑与缓冲" },
        { tcm: "脾运化水湿", modern: "肠道水吸收与淋巴回流", note: "门静脉—淋巴系统" },
        { tcm: "肾主水", modern: "ADH/RAAS/ANP 调控的肾小管重吸收", note: "水钠平衡核心" },
        { tcm: "三焦通调水道", modern: "组织间质—淋巴—血流的液体通道", note: "见「三焦」条目" },
      ],
      evidence: "A",
      evidenceText: "水电解质生理学与津液代谢描述高度一致，指标明确（血钠、渗透压、出入量）。",
      refs: [
        { type: "classic", text: "《素问·经脉别论》《灵枢·决气》" },
        { type: "classic", text: "《素问·逆调论》" },
        { type: "modern", text: "Rose BD, Post TW. Clinical Physiology of Acid-Base and Electrolyte Disorders. 5th ed. McGraw-Hill, 2001." },
      ],
    },

    /* ===================== L2 五脏 ===================== */
    {
      id: "five-zang",
      layer: "L2",
      group: "五脏总论",
      name: "五脏",
      pinyin: "Wǔ Zàng",
      alias: ["五藏", "藏象", "五脏系统"],
      summary: "心肝脾肺肾五个功能系统，藏精气而不泻。",
      tcm:
        "五脏指心、肝、脾、肺、肾。《素问·五脏别论》：『所谓五脏者，藏精气而不泻也，故满而不能实。』五脏以「藏」为共性，各自统辖一组功能、一类形体官窍与一种情志，构成五个功能系统，而非五个解剖器官。",
      modern:
        "五脏是**功能系统分类**，不能一对一还原为解剖脏器。每一「脏」大致对应一个生理轴：心≈循环+中枢，肝≈代谢解毒+自主神经调节，脾≈消化吸收+免疫+菌群，肺≈呼吸+黏膜屏障，肾≈排泄+内分泌+生殖。理解五脏必须叠加「解剖器官—生理功能—神经内分泌调控」三层。",
      mappings: [
        { tcm: "心（君主之官）", modern: "心血管系统 + 中枢神经高级功能", note: "「心主神明」应还原为脑" },
        { tcm: "肝（将军之官）", modern: "肝脏代谢 + 自主神经/HPA 的情志调节", note: "「肝主疏泄」为调控功能" },
        { tcm: "脾（后天之本）", modern: "消化吸收 + 肠道菌群 + 黏膜免疫", note: "含解剖脾脏的滤血免疫" },
        { tcm: "肺（相傅之官）", modern: "呼吸系统 + 皮肤黏膜屏障 + 肺内 RAAS", note: "「肺朝百脉」有解剖基础" },
        { tcm: "肾（先天之本）", modern: "排泄 + RAAS/EPO/维生素D + 生殖 + 骨代谢", note: "内分泌功能对应度最高" },
        { tcm: "五脏藏精气而不泻", modern: "五个系统以「储备与调控」为主，区别于「传化排泄」", note: "与六腑的功能定位形成互补" },
      ],
      evidence: "B",
      evidenceText: "五脏作为功能系统的划分与现代器官轴高度呼应；但「五脏」不是解剖学分类，无法直接映射为五个器官。",
      refs: [
        { type: "classic", text: "《素问·五脏别论》《素问·六节藏象论》" },
        { type: "classic", text: "《灵枢·本脏》" },
        { type: "modern", text: "Guyton AC, Hall JE. Textbook of Medical Physiology. 14th ed. Elsevier, 2020." },
      ],
    },
    {
      id: "heart",
      layer: "L2",
      group: "五脏",
      name: "心",
      pinyin: "Xīn",
      alias: ["心主血脉", "心藏神", "君主之官"],
      summary: "主血脉、藏神明，为五脏六腑之大主。",
      tcm:
        "心为君主之官，主血脉、藏神明。心气推动血液在脉中运行，濡养全身；心神主宰意识、思维、情志。其华在面，开窍于舌，在液为汗，与小肠相表里。",
      modern:
        "「心」实为两套系统的合称：**循环系统**（心脏泵血、冠脉供血、血压调节）与**中枢神经高级功能**（意识、认知、情绪）。前者对应解剖心脏与血流动力学；后者对应前额叶—边缘系统网络。「心主神明」是古代对脑功能的归属，现代应还原为脑。",
      mappings: [
        { tcm: "心主血脉", modern: "心脏泵功能、冠脉循环、血压", note: "EF、心输出量、血压" },
        { tcm: "心藏神", modern: "中枢神经系统高级功能与意识", note: "古代「心」含脑之意" },
        { tcm: "其华在面", modern: "面部灌注与血红蛋白水平的外显", note: "面色苍白≈贫血" },
        { tcm: "心开窍于舌", modern: "舌肌运动由舌下神经支配；舌体血供丰富", note: "舌诊的解剖基础" },
        { tcm: "汗为心之液", modern: "交感胆碱能纤维支配汗腺；心衰时大汗", note: "自主神经耦合" },
      ],
      evidence: "A",
      evidenceText: "「心主血脉」为直接解剖生理对应；「心藏神」需改写为脑功能。",
      refs: [
        { type: "classic", text: "《素问·灵兰秘典论》《素问·六节藏象论》" },
        { type: "classic", text: "《灵枢·本神》" },
        { type: "modern", text: "Guyton AC, Hall JE. Textbook of Medical Physiology. 14th ed. Elsevier, 2020." },
      ],
    },
    {
      id: "liver",
      layer: "L2",
      group: "五脏",
      name: "肝",
      pinyin: "Gān",
      alias: ["肝主疏泄", "肝藏血", "将军之官"],
      summary: "主疏泄、藏血，调畅气机与情志。",
      tcm:
        "肝为将军之官，主疏泄、藏血。疏泄指调畅全身气机、促进脾胃运化、调畅情志、通利水道；藏血指贮藏血液、调节血量、防止出血。肝开窍于目，其华在爪，在志为怒，与胆相表里。",
      modern:
        "肝的现代对应是**双系统叠加**：①解剖肝脏——代谢、解毒、合成白蛋白与凝血因子、胆汁生成、糖脂代谢；②「疏泄」——自主神经系统与 HPA 轴对情绪、胃肠动力、平滑肌舒缩的调节。肝藏血对应肝脏的血窦储血功能与凝血因子合成。",
      mappings: [
        { tcm: "肝主疏泄（气机）", modern: "自主神经与 HPA 轴对内脏平滑肌、血管张力的调节", note: "应激相关胃肠功能紊乱" },
        { tcm: "肝藏血", modern: "肝血窦储血、凝血因子合成、铁与维生素储存", note: "肝硬化致凝血障碍" },
        { tcm: "肝主筋", modern: "运动系统与神经肌肉接头；肝性脑病致扑翼样震颤", note: "「筋」含肌腱与运动控制" },
        { tcm: "肝开窍于目", modern: "维生素 A 代谢与视紫红质合成；肝性脑病眼底改变", note: "夜盲与肝病相关" },
        { tcm: "怒伤肝", modern: "急性应激经儿茶酚胺与皮质醇影响肝糖代谢", note: "应激性高血糖" },
      ],
      evidence: "A",
      evidenceText: "解剖肝脏对应明确；「疏泄」对应自主神经—HPA 调控，机制研究充分。",
      refs: [
        { type: "classic", text: "《素问·灵兰秘典论》《素问·五脏生成篇》" },
        { type: "classic", text: "《灵枢·本神》" },
        { type: "modern", text: "Trepel M. Neuroanatomie: Struktur und Funktion. 7. Aufl. Elsevier, 2019." },
        { type: "modern", text: "Mayer EA. Gut feelings: the emerging biology of gut–brain communication. Nature Reviews Neuroscience, 2011, 12(8): 453–466." },
      ],
    },
    {
      id: "spleen",
      layer: "L2",
      group: "五脏",
      name: "脾",
      pinyin: "Pí",
      alias: ["脾主运化", "脾统血", "后天之本"],
      summary: "主运化水谷、统摄血液，为气血生化之源。",
      tcm:
        "脾为后天之本、气血生化之源。主运化水谷精微与水湿，主升清，主统血。脾气主升，喜燥恶湿。开窍于口，其华在唇，在志为思，与胃相表里。",
      modern:
        "中医「脾」不等于解剖脾脏，而是**消化吸收 + 免疫 + 水液代谢的功能系统**：胃肠消化酶与动力、小肠吸收、肠道菌群、黏膜免疫、淋巴回流。解剖脾脏的滤血与免疫监视功能只是其中一小部分。",
      mappings: [
        { tcm: "脾主运化", modern: "胃肠消化吸收、胰酶与胆汁分泌、肠道转运", note: "D-木糖吸收试验曾用于脾虚评估" },
        { tcm: "脾统血", modern: "血小板功能、毛细血管完整性、凝血因子", note: "脾虚出血倾向" },
        { tcm: "脾主升清", modern: "营养物质经门静脉向上输送；内脏下垂", note: "「中气下陷」≈盆底/胃下垂" },
        { tcm: "脾为后天之本", modern: "营养状态决定免疫与修复能力", note: "营养不良→免疫低下" },
        { tcm: "脾与肠道菌群", modern: "菌群结构影响短链脂肪酸、胆汁酸与免疫成熟", note: "脾虚患者菌群多样性下降" },
      ],
      evidence: "B",
      evidenceText: "「脾」的功能边界明确对应消化—免疫—菌群轴；解剖脾脏仅为部分对应。",
      refs: [
        { type: "classic", text: "《素问·灵兰秘典论》《素问·太阴阳明论》" },
        { type: "classic", text: "李杲《脾胃论》（1249）" },
        { type: "modern", text: "Wu HJ, Wu E. The role of gut microbiota in immune homeostasis and autoimmunity. Gut Microbes, 2012, 3(1): 4–14." },
      ],
    },
    {
      id: "lung",
      layer: "L2",
      group: "五脏",
      name: "肺",
      pinyin: "Fèi",
      alias: ["肺主气", "肺朝百脉", "相傅之官"],
      summary: "主气司呼吸、宣发肃降、通调水道。",
      tcm:
        "肺为相傅之官，主气、司呼吸，主宣发肃降，通调水道，朝百脉、主治节。肺外合皮毛，开窍于鼻，在志为悲，与大肠相表里。肺为娇脏，不耐寒热。",
      modern:
        "肺对应**呼吸系统与黏膜免疫屏障**：气体交换（肺泡—毛细血管膜）、气道清除（纤毛、黏液）、肺表面活性物质、肺内免疫（肺泡巨噬细胞）、肺内 ACE 对 RAAS 的调节。「肺主皮毛」对应皮肤屏障与肺—皮肤免疫共享（同源于内胚层/外胚层界面的黏膜免疫）。",
      mappings: [
        { tcm: "肺主气司呼吸", modern: "肺泡气体交换、通气/血流比、呼吸驱动", note: "PaO₂、PaCO₂" },
        { tcm: "肺主宣发肃降", modern: "气道黏液纤毛清除与肺容积变化", note: "黏液纤毛梯" },
        { tcm: "肺通调水道", modern: "肺内 ACE 参与 AngII 生成；呼吸失水", note: "肺—肾轴" },
        { tcm: "肺主皮毛", modern: "皮肤屏障与黏膜免疫共享；特应性皮炎与哮喘共病", note: "「同一气道、同一疾病」概念" },
        { tcm: "肺朝百脉", modern: "肺循环接收全部心输出量，参与血液滤过与代谢", note: "肺是唯一接受全量心输出量的器官" },
      ],
      evidence: "A",
      evidenceText: "呼吸生理与「肺主气」直接对应；肺—皮肤免疫共享有流行病学与机制证据。",
      refs: [
        { type: "classic", text: "《素问·灵兰秘典论》《素问·经脉别论》" },
        { type: "classic", text: "《灵枢·九针论》" },
        { type: "modern", text: "West JB. Respiratory Physiology: The Essentials. 10th ed. Wolters Kluwer, 2016." },
        { type: "modern", text: "Silverberg JI, et al. Association between atopic dermatitis and asthma. Journal of Allergy and Clinical Immunology, 2013." },
      ],
    },
    {
      id: "kidney",
      layer: "L2",
      group: "五脏",
      name: "肾",
      pinyin: "Shèn",
      alias: ["肾藏精", "肾主水", "先天之本", "作强之官"],
      summary: "藏精、主水、纳气，为先天之本。",
      tcm:
        "肾为先天之本、作强之官。藏精，主生长发育与生殖；主水，司二便；主纳气；主骨生髓，其华在发，开窍于耳及二阴。肾阴肾阳为一身阴阳之根本。",
      modern:
        "肾对应**排泄 + 内分泌 + 生殖 + 骨代谢**四重功能的集合：肾小球滤过与肾小管重吸收、RAAS、促红细胞生成素（EPO）、活性维生素 D 羟化、HPG 轴与性激素、骨代谢调控（FGF23、Klotho）。「肾主骨」与慢性肾病—矿物质骨代谢异常（CKD-MBD）高度吻合。",
      mappings: [
        { tcm: "肾主水", modern: "肾小球滤过、ADH 与 RAAS 调控的水钠平衡", note: "eGFR、尿量、血肌酐" },
        { tcm: "肾藏精主生殖", modern: "HPG 轴（GnRH-LH/FSH-性激素）与配子发生", note: "性激素六项" },
        { tcm: "肾主骨生髓", modern: "活性维生素 D、FGF23、Klotho 与骨代谢；骨髓造血", note: "CKD-MBD、肾性贫血" },
        { tcm: "肾主纳气", modern: "呼吸驱动与膈肌功能；代谢性酸中毒时的代偿性深大呼吸", note: "尿毒症呼吸" },
        { tcm: "其华在发", modern: "营养与激素状态对毛囊周期的影响", note: "休止期脱发" },
        { tcm: "开窍于耳", modern: "肾功能与内耳微循环；部分遗传性肾病伴耳聋（Alport 综合征）", note: "耳—肾综合征" },
      ],
      evidence: "A",
      evidenceText: "肾的内分泌功能与「肾藏精、主骨、生髓」对应度极高，EPO/维生素 D/HPG 轴均有明确指标。",
      refs: [
        { type: "classic", text: "《素问·灵兰秘典论》《素问·上古天真论》《素问·逆调论》" },
        { type: "classic", text: "《难经·三十六难》" },
        { type: "modern", text: "Kuro-o M. Klotho and the aging process. Korean Journal of Internal Medicine, 2011, 26(2): 113–122." },
        { type: "modern", text: "KDIGO. CKD-MBD Clinical Practice Guideline Update. 2017." },
      ],
    },

    /* ===================== L2 六腑 ===================== */
    {
      id: "six-fu",
      layer: "L2",
      group: "六腑总论",
      name: "六腑",
      pinyin: "Liù Fǔ",
      alias: ["六府", "传化之腑"],
      summary: "胆胃小肠大肠膀胱三焦，传化物而不藏。",
      tcm:
        "六腑指胆、胃、小肠、大肠、膀胱、三焦。《素问·五脏别论》：『六腑者，传化物而不藏，故实而不能满也。』六腑以「通降」为共性，负责受纳、腐熟、传化、排泄，以通为用、以降为顺。",
      modern:
        "六腑对应**消化道与排泄管道系统**：口腔—食管—胃—小肠—大肠—直肠，加上胆道、尿路与体腔液体通道。其共同特征是「管腔—传输—分泌/吸收」模式，与五脏的「实质—储备—调控」模式形成互补。现代医学的胃肠动力、分泌、吸收、排泄功能正对应「传化物而不藏」。",
      mappings: [
        { tcm: "六腑以通为用", modern: "管腔器官的通畅性：胃肠传输、胆道通畅、尿路通畅", note: "梗阻即病" },
        { tcm: "传化物而不藏", modern: "消化—吸收—排遗的连续流程，不在腔内长期储存", note: "与五脏储藏功能互补" },
        { tcm: "六腑以通降为顺", modern: "胃排空、肠蠕动、排便与排尿的定向性", note: "逆向即「气逆」" },
        { tcm: "六腑与五脏相表里", modern: "器官轴：肠—肺、心—小肠、肝—胆、脾—胃、肾—膀胱", note: "神经内分泌与菌群介导" },
        { tcm: "三焦为孤腑", modern: "无对应器官，近似体腔间隙与淋巴—间质通道", note: "见「三焦」条目" },
      ],
      evidence: "B",
      evidenceText: "六腑与消化道/排泄管道系统的对应清晰；「三焦」例外，无解剖实体。",
      refs: [
        { type: "classic", text: "《素问·五脏别论》《素问·六节藏象论》" },
        { type: "classic", text: "《灵枢·本输》" },
        { type: "modern", text: "Boron WF, Boulpaep EL. Medical Physiology. 3rd ed. Elsevier, 2016." },
      ],
    },
    {
      id: "gallbladder",
      layer: "L2",
      group: "六腑",
      name: "胆",
      pinyin: "Dǎn",
      alias: ["胆主决断", "中正之官", "奇恒之腑"],
      summary: "贮藏排泄胆汁，主决断。",
      tcm:
        "胆为六腑之一，又属奇恒之腑。贮藏与排泄胆汁以助消化，主决断。与肝相表里，肝之余气化生胆汁。",
      modern:
        "胆的解剖与功能对应**胆囊—胆道系统**：胆汁浓缩储存、胆囊收缩排胆、胆盐乳化脂肪。「主决断」难以直接对应，可类比为前额叶执行功能与去甲肾上腺素能警觉系统的「决策与勇气」，属功能类比而非解剖联系。",
      mappings: [
        { tcm: "胆贮藏排泄胆汁", modern: "胆囊浓缩胆汁、缩胆囊素（CCK）促排胆", note: "胆囊收缩素由小肠 I 细胞分泌" },
        { tcm: "胆助消化", modern: "胆盐乳化脂肪、促进脂溶性维生素吸收", note: "胆囊切除后脂肪泻" },
        { tcm: "胆主决断", modern: "前额叶执行功能与去甲肾上腺素能警觉（类比）", note: "证据等级 C" },
      ],
      evidence: "B",
      evidenceText: "胆汁功能对应明确；「主决断」为理论类比。",
      refs: [
        { type: "classic", text: "《素问·灵兰秘典论》《灵枢·本输》" },
        { type: "modern", text: "Boron WF, Boulpaep EL. Medical Physiology. 3rd ed. Elsevier, 2016." },
      ],
    },
    {
      id: "stomach",
      layer: "L2",
      group: "六腑",
      name: "胃",
      pinyin: "Wèi",
      alias: ["胃主受纳", "水谷之海", "太仓"],
      summary: "受纳腐熟水谷，以降为和。",
      tcm:
        "胃为水谷之海、太仓。主受纳、腐熟水谷，主通降，喜润恶燥。与脾相表里，脾胃共为后天之本。",
      modern:
        "胃对应**胃的分泌与动力功能**：胃酸（壁细胞 H⁺/K⁺-ATP 酶）、胃蛋白酶原、内因子、胃泌素、胃排空与胃窦—幽门协调、胃黏膜屏障。",
      mappings: [
        { tcm: "胃主受纳腐熟", modern: "胃酸分泌、胃蛋白酶原激活、胃机械研磨", note: "pH 1.5–3.5" },
        { tcm: "胃主通降", modern: "胃排空与胃窦—幽门—十二指肠协调运动", note: "胃轻瘫" },
        { tcm: "胃喜润恶燥", modern: "胃黏膜黏液—碳酸氢盐屏障", note: "屏障受损→溃疡" },
        { tcm: "胃气", modern: "胃泌素—胃酸轴与整体消化功能状态", note: "「有胃气则生」≈ 消化功能保存" },
      ],
      evidence: "A",
      evidenceText: "胃的解剖生理与中医胃的功能描述高度一致。",
      refs: [
        { type: "classic", text: "《灵枢·玉版》《素问·玉机真脏论》" },
        { type: "modern", text: "Schubert ML, Peura DA. Control of gastric acid secretion in health and disease. Gastroenterology, 2008, 134(7): 1842–1860." },
      ],
    },
    {
      id: "small-intestine",
      layer: "L2",
      group: "六腑",
      name: "小肠",
      pinyin: "Xiǎo Cháng",
      alias: ["小肠主液", "受盛之官"],
      summary: "受盛化物，泌别清浊。",
      tcm:
        "小肠为受盛之官。受盛胃中水谷，进一步化物，泌别清浊：清者上输于脾，浊者下传大肠，余水渗入膀胱。与心相表里。",
      modern:
        "小肠对应**营养消化吸收的主战场**：胰酶与刷状缘酶完成水解，十二指肠—空肠—回肠吸收葡萄糖、氨基酸、脂肪酸、铁、钙、维生素 B12（回肠末端 + 内因子）。「泌别清浊」精确对应「吸收（清）与排入结肠（浊）」的分流。",
      mappings: [
        { tcm: "受盛化物", modern: "小肠腔内胰酶与刷状缘酶的水解", note: "淀粉→葡萄糖、蛋白→氨基酸" },
        { tcm: "泌别清浊", modern: "肠上皮吸收与管腔残余物向结肠输送", note: "SGLT1、GLUT2、肽转运体" },
        { tcm: "小肠主液", modern: "每天约 8 L 消化液在空肠回肠被重吸收", note: "「利小便以实大便」的生理基础" },
        { tcm: "心与小肠相表里", modern: "肠—心轴；肠道菌群 TMAO 与心血管风险", note: "TMAO 研究" },
      ],
      evidence: "A",
      evidenceText: "「泌别清浊」与肠道吸收—分泌生理几乎一一对应；心—小肠轴有新兴证据。",
      refs: [
        { type: "classic", text: "《素问·灵兰秘典论》《灵枢·本输》" },
        { type: "modern", text: "Wang Z, et al. Gut flora metabolism of phosphatidylcholine promotes cardiovascular disease. Nature, 2011, 472(7341): 57–63." },
      ],
    },
    {
      id: "large-intestine",
      layer: "L2",
      group: "六腑",
      name: "大肠",
      pinyin: "Dà Cháng",
      alias: ["大肠主津", "传导之官"],
      summary: "传导糟粕，吸收水分，主排便。",
      tcm:
        "大肠为传导之官。接受小肠下传的糟粕，吸收其中多余水分（大肠主津），形成粪便并排出。与肺相表里。",
      modern:
        "大肠对应**结肠与直肠**：水与电解质吸收、肠道菌群发酵（短链脂肪酸）、粪便成形与排便反射（直肠—肛门括约肌协调）。",
      mappings: [
        { tcm: "大肠主津", modern: "结肠吸收 Na⁺、Cl⁻ 与水（醛固酮调控）", note: "每日回收约 1.5 L" },
        { tcm: "传导糟粕", modern: "结肠蠕动、集团运动与排便反射", note: "胃结肠反射" },
        { tcm: "肺与大肠相表里", modern: "肠—肺轴；菌群代谢物影响肺部免疫", note: "「肺病治肠」的机制基础" },
        { tcm: "大肠菌群", modern: "短链脂肪酸（丁酸）供能结肠上皮、调节 Treg", note: "菌群—免疫轴" },
      ],
      evidence: "B",
      evidenceText: "结肠生理对应明确；肺—大肠轴机制研究活跃。",
      refs: [
        { type: "classic", text: "《素问·灵兰秘典论》《灵枢·本输》" },
        { type: "modern", text: "Budden KF, et al. Emerging pathogenic links between microbiota and the gut–lung axis. Nature Reviews Microbiology, 2017, 15(1): 55–63." },
      ],
    },
    {
      id: "bladder",
      layer: "L2",
      group: "六腑",
      name: "膀胱",
      pinyin: "Páng Guāng",
      alias: ["州都之官", "膀胱主气化"],
      summary: "贮尿排尿，赖肾之气化。",
      tcm:
        "膀胱为州都之官，津液所聚。贮尿与排尿依赖肾的气化功能，「膀胱气化」实为肾阳蒸腾水液的外在表现。与肾相表里。",
      modern:
        "膀胱对应**下尿路储尿—排尿功能**：逼尿肌（副交感 M3 受体收缩）、尿道括约肌（躯体与交感 α₁ 受体）、膀胱感觉传入与骶髓排尿中枢、脑桥排尿中枢。「肾气化」对应肾对尿浓缩与排尿节律的调控。",
      mappings: [
        { tcm: "膀胱贮尿", modern: "逼尿肌舒张与括约肌收缩的储尿期", note: "膀胱顺应性" },
        { tcm: "膀胱排尿", modern: "副交感兴奋→逼尿肌收缩 + 括约肌舒张", note: "骶髓 S2–S4 反射" },
        { tcm: "肾主气化", modern: "ADH 浓缩尿液、肾灌注与排尿节律", note: "夜尿增多见于肾浓缩功能下降" },
        { tcm: "膀胱气化不利", modern: "尿潴留、尿失禁、神经源性膀胱", note: "对应尿动力学检查" },
      ],
      evidence: "A",
      evidenceText: "储尿—排尿生理与「膀胱气化」高度对应，尿动力学可量化。",
      refs: [
        { type: "classic", text: "《素问·灵兰秘典论》《素问·宣明五气》" },
        { type: "modern", text: "Fowler CJ, et al. The neural control of micturition. Nature Reviews Neuroscience, 2008, 9(6): 453–466." },
      ],
    },
    {
      id: "sanjiao",
      layer: "L2",
      group: "六腑",
      name: "三焦",
      pinyin: "Sān Jiāo",
      alias: ["决渎之官", "上焦中焦下焦"],
      summary: "通行元气、运行水液的大型通道系统。",
      tcm:
        "三焦为决渎之官，主通行元气、运行水液。上焦（心肺）如雾，主宣发；中焦（脾胃）如沤，主腐熟运化；下焦（肝肾膀胱）如渎，主排泄。三焦是气与水液运行的通道。",
      modern:
        "三焦无单一解剖对应，最贴近的是**体腔间隙与组织液—淋巴回流系统**：胸膜腔、腹膜腔、腹膜后间隙、组织间质（interstitium）、淋巴管网络。近年「间质（interstitium）」被重新认识为连续液体腔隙，与「三焦为水道」的描述形成有趣的呼应。功能上三焦≈体液的区室分布与转运。",
      mappings: [
        { tcm: "三焦为水道", modern: "组织间质—淋巴—血流构成的液体转运通路", note: "间质（interstitium）研究" },
        { tcm: "上焦如雾", modern: "心肺的气体交换与血液氧合（雾状弥散）", note: "肺泡—毛细血管膜" },
        { tcm: "中焦如沤", modern: "胃肠的消化腐熟与吸收", note: "发酵/水解" },
        { tcm: "下焦如渎", modern: "肾—输尿管—膀胱—尿道的排泄通路", note: "尿路" },
        { tcm: "三焦通行元气", modern: "液体腔隙中的激素与信号分子扩散", note: "旁分泌/内分泌运输" },
      ],
      evidence: "C",
      evidenceText: "无解剖实体，属功能通道概念；与间质—淋巴系统的结构性类比成立但不能等同。",
      refs: [
        { type: "classic", text: "《素问·灵兰秘典论》《灵枢·营卫生会》" },
        { type: "classic", text: "《难经·三十一难》" },
        { type: "modern", text: "Benias PC, et al. Structure and distribution of an unrecognized interstitium in human tissues. Scientific Reports, 2018, 8: 4947." },
      ],
    },
    {
      id: "pericardium",
      layer: "L2",
      group: "六腑",
      name: "心包",
      pinyin: "Xīn Bāo",
      alias: ["心包络", "膻中", "臣使之官"],
      summary: "心之外围，代心受邪。",
      tcm:
        "心包为心之外围，有保护心脏的作用。「代心受邪」：外邪犯心，先犯心包。手厥阴心包经与手少阳三焦经相表里。",
      modern:
        "解剖对应**心包（pericardium）**：纤维心包与浆膜心包、心包腔液体。功能上「代心受邪」可类比为心包的机械保护与缓冲，以及感染/炎症时心包先受累（心包炎常先于心肌炎出现）。",
      mappings: [
        { tcm: "心包护心", modern: "心包膜机械保护、心包液润滑缓冲", note: "心包填塞的病理生理" },
        { tcm: "代心受邪", modern: "心包炎常先于心肌受累；病毒性心包炎", note: "临床顺序上的类比" },
        { tcm: "膻中为气会", modern: "胸腺与纵隔免疫（功能类比）", note: "证据等级 C" },
      ],
      evidence: "B",
      evidenceText: "解剖心包对应明确；「代心受邪」为功能类比。",
      refs: [
        { type: "classic", text: "《灵枢·邪客》《素问·灵兰秘典论》" },
        { type: "modern", text: "Imazio M, et al. Acute pericarditis: aetiology and management. Lancet, 2015." },
      ],
    },

    /* ===================== L3 病机证候 ===================== */
    {
      id: "kidney-jing-deficiency",
      layer: "L3",
      group: "肾系证候",
      name: "肾精亏虚",
      pinyin: "Shèn Jīng Kuī Xū",
      alias: ["肾精不足", "精亏"],
      summary: "生长发育迟缓、早衰、生殖功能下降。",
      tcm:
        "肾精亏虚多因先天不足、后天失养、久病耗损或年老精衰。症见小儿发育迟缓、成人早衰（发脱齿摇、健忘耳聋）、生殖功能低下、腰膝酸软、骨痿无力。",
      modern:
        "对应**干细胞池耗竭 + HPG 轴功能减退 + 骨代谢失衡 + 认知储备下降**：性激素水平下降、骨密度降低、肌肉量减少、神经发生与突触可塑性下降。是「生物学衰老（biological aging）」的多系统表现。",
      mappings: [
        { tcm: "发育迟缓", modern: "生长激素—IGF-1 轴与营养吸收", note: "IGF-1、身高体重曲线" },
        { tcm: "生殖功能低下", modern: "HPG 轴减退：睾酮/雌二醇下降、精子质量下降", note: "性激素六项、精液分析" },
        { tcm: "骨痿无力", modern: "骨密度下降、肌少症", note: "DXA、握力、步速" },
        { tcm: "健忘耳聋", modern: "海马神经发生下降、内耳毛细胞退化", note: "认知量表、听力阈值" },
        { tcm: "早衰", modern: "端粒缩短、表观遗传时钟加速、慢性低度炎症", note: "inflammaging" },
      ],
      evidence: "B",
      evidenceText: "多个系统指标可测量且方向一致；「精」本身无法被单一生物标志物替代。",
      refs: [
        { type: "classic", text: "《素问·上古天真论》《素问·痿论》" },
        { type: "modern", text: "López-Otín C, et al. The hallmarks of aging. Cell, 2013, 153(6): 1194–1217." },
        { type: "modern", text: "沈自尹. 肾阳虚证的定位研究. 中国中西医结合杂志, 1997, 17(1): 50–52." },
      ],
    },
    {
      id: "kidney-deficiency",
      layer: "L3",
      group: "肾系证候",
      name: "肾亏",
      pinyin: "Shèn Kuī",
      alias: ["肾虚", "肾亏虚"],
      summary: "肾系虚损的统称，需进一步分阴阳精气。",
      tcm:
        "「肾亏」是肾虚的民间统称，涵盖肾精亏虚、肾气虚、肾阴虚、肾阳虚等不同证型。临床表现可为腰膝酸软、乏力、耳鸣、脱发、性功能减退、畏寒或潮热等。中医强调必须进一步辨明「阴虚、阳虚、精亏、气不固」，不可一概而论。",
      modern:
        "作为统称，「肾亏」对应**多系统储备功能下降的非特异表型**：HPA 轴与 HPG 轴功能减退、骨密度下降、肌少症、肾小球滤过率早期下降、慢性疲劳。其现代意义的要点在于「分层」——必须区分是内分泌轴低下（偏阳虚）、交感-分解代谢偏亢（偏阴虚）、还是干细胞/生殖储备耗竭（偏精亏）。",
      mappings: [
        { tcm: "偏阳虚（畏寒肢冷）", modern: "HPA 轴与甲状腺轴功能低下、基础代谢率下降", note: "详见「肾阳虚」" },
        { tcm: "偏阴虚（潮热盗汗）", modern: "交感张力增高、皮质醇节律紊乱、体液不足", note: "详见「肾阴虚」" },
        { tcm: "偏精亏（早衰健忘）", modern: "干细胞池耗竭、性腺轴减退、骨密度与认知储备下降", note: "详见「肾精亏虚」" },
        { tcm: "偏气不固（尿频失禁）", modern: "盆底与括约肌功能下降、膀胱过度活动", note: "详见「肾气不固」" },
        { tcm: "腰膝酸软", modern: "腰背肌力下降、骨密度降低、慢性疲劳", note: "握力、DXA、步速" },
      ],
      evidence: "C",
      evidenceText: "作为统称其生物学异质性极大，无法对应单一指标；价值在于提示必须分型，而非提供一个诊断。",
      refs: [
        { type: "classic", text: "《素问·脉要精微论》「腰者，肾之府」" },
        { type: "classic", text: "《景岳全书·虚损》（1624）" },
        { type: "modern", text: "沈自尹. 肾阳虚证的定位研究. 中国中西医结合杂志, 1997, 17(1): 50–52." },
      ],
    },
    {
      id: "kidney-yang-deficiency",
      layer: "L3",
      group: "肾系证候",
      name: "肾阳虚",
      pinyin: "Shèn Yáng Xū",
      alias: ["命门火衰", "肾阳不足"],
      summary: "畏寒肢冷、腰膝冷痛、性功能减退、水肿。",
      tcm:
        "肾阳虚为肾阳亏虚、温煦失职。症见畏寒肢冷（尤以下肢为甚）、腰膝冷痛、面色㿠白、神疲乏力、性欲减退、阳痿早泄、五更泄泻、水肿尿少、舌淡胖苔白、脉沉迟无力。",
      modern:
        "研究最充分的证候之一。**下丘脑—垂体—肾上腺皮质轴（HPA）功能低下**为核心，兼有**甲状腺轴功能偏低、基础代谢率下降、能量代谢减弱、性腺轴抑制**。沈自尹团队自 1959 年起发现肾阳虚患者 24 小时尿 17-羟皮质类固醇排量降低，并进一步定位到下丘脑—垂体层面。",
      mappings: [
        { tcm: "畏寒肢冷", modern: "基础代谢率下降、皮肤温度与末梢灌注降低", note: "红外热成像可见温度分布改变" },
        { tcm: "HPA 轴抑制", modern: "血浆皮质醇、ACTH 降低；尿 17-OHCS 降低", note: "沈自尹 1959–1997 系列研究" },
        { tcm: "甲状腺功能偏低", modern: "T3/T4 偏低、TSH 反应迟钝、产热减少", note: "邝安堃等研究" },
        { tcm: "性功能减退", modern: "睾酮下降、LH 脉冲减弱", note: "HPG 轴抑制" },
        { tcm: "水肿尿少", modern: "RAAS 激活与水钠潴留；肾灌注下降", note: "醛固酮相对升高" },
        { tcm: "五更泄泻", modern: "结肠动力节律异常与肠道菌群改变", note: "肠—脑轴" },
      ],
      evidence: "A",
      evidenceText: "HPA 轴、甲状腺轴与能量代谢的对应有系统研究支持，是中国中西医结合研究的经典范例。",
      refs: [
        { type: "classic", text: "《景岳全书·命门余义》（张介宾，1624）" },
        { type: "classic", text: "《素问·生气通天论》" },
        { type: "modern", text: "沈自尹, 王文健. 中医虚证辨证参考标准. 中西医结合杂志, 1986, 6(10): 598." },
        { type: "modern", text: "沈自尹. 肾阳虚证的定位研究. 中国中西医结合杂志, 1997, 17(1): 50–52." },
      ],
    },
    {
      id: "kidney-yin-deficiency",
      layer: "L3",
      group: "肾系证候",
      name: "肾阴虚",
      pinyin: "Shèn Yīn Xū",
      alias: ["肾水不足", "真阴亏虚"],
      summary: "腰膝酸软、潮热盗汗、五心烦热、眩晕耳鸣。",
      tcm:
        "肾阴虚为肾阴亏虚、虚热内生。症见腰膝酸软、头晕耳鸣、失眠多梦、潮热盗汗、五心烦热、口干咽燥、舌红少苔、脉细数。",
      modern:
        "对应**HPA 轴相对亢进或负反馈减弱 + 交感神经张力增高 + 体液不足**：皮质醇节律紊乱、心率变异性降低、基础体温偏高、夜间出汗（自主神经功能失调）、唾液与泪液分泌减少。常与围绝经期综合征、慢性疲劳、甲状腺功能偏亢的亚临床状态重叠。",
      mappings: [
        { tcm: "潮热盗汗", modern: "体温调定点波动与自主神经（交感）张力增高", note: "围绝经期血管舒缩症状" },
        { tcm: "五心烦热", modern: "末梢血管扩张与皮温升高、代谢率偏高", note: "红外热成像" },
        { tcm: "口干咽燥", modern: "唾液流率下降、抗胆碱能效应", note: "干燥综合征需鉴别" },
        { tcm: "失眠多梦", modern: "HPA 轴夜间不降、睡眠结构碎片化", note: "皮质醇昼夜节律" },
        { tcm: "脉细数", modern: "心率增快、每搏输出量下降", note: "心率变异性（HRV）降低" },
      ],
      evidence: "B",
      evidenceText: "自主神经与 HPA 轴指标方向一致；「阴虚」与「阳虚」在内分泌轴上呈现相反偏移，是二分模型的亮点。",
      refs: [
        { type: "classic", text: "《景岳全书·真阴论》（1624）" },
        { type: "classic", text: "朱震亨《格致余论·阳有余阴不足论》（1347）" },
        { type: "modern", text: "沈自尹. 肾阳虚证的定位研究. 中国中西医结合杂志, 1997, 17(1): 50–52." },
        { type: "modern", text: "Thurston RC, et al. Vasomotor symptoms and cardiovascular risk. Menopause, 2017." },
      ],
    },
    {
      id: "kidney-qi-not-solid",
      layer: "L3",
      group: "肾系证候",
      name: "肾气不固",
      pinyin: "Shèn Qì Bù Gù",
      alias: ["肾气亏虚", "下元不固"],
      summary: "小便频数失禁、遗精滑泄、胎动易滑。",
      tcm:
        "肾气不固为肾气亏虚、封藏失职。症见小便频数而清、尿后余沥、夜尿多、遗尿失禁、男子遗精滑精、女子白带清稀、胎动易滑、腰膝酸软、舌淡脉弱。",
      modern:
        "对应**括约肌与盆底功能下降 + 膀胱感觉过敏 + 抗利尿激素节律异常 + 生殖系统控摄功能减弱**：膀胱过度活动症（OAB）、压力性尿失禁、夜尿症、精索/前列腺术后控尿障碍。",
      mappings: [
        { tcm: "小便频数失禁", modern: "逼尿肌过度活动、尿道括约肌功能下降", note: "尿动力学：逼尿肌过度活动（DO）" },
        { tcm: "夜尿多", modern: "ADH 夜间分泌节律减弱、夜尿多尿症", note: "夜间尿量 > 全天 33%" },
        { tcm: "遗精滑精", modern: "射精控制与盆底肌功能、自主神经调节", note: "交感—副交感平衡" },
        { tcm: "胎动易滑", modern: "宫颈机能不全、子宫平滑肌兴奋性", note: "产科评估" },
      ],
      evidence: "B",
      evidenceText: "尿动力学与盆底功能指标可量化；生殖方面证据相对间接。",
      refs: [
        { type: "classic", text: "《素问·六节藏象论》《景岳全书》" },
        { type: "modern", text: "Abrams P, et al. Incontinence. 6th International Consultation on Incontinence, 2017." },
      ],
    },
    {
      id: "kidney-not-grasping-qi",
      layer: "L3",
      group: "肾系证候",
      name: "肾不纳气",
      pinyin: "Shèn Bù Nà Qì",
      alias: ["肾虚喘促"],
      summary: "久病咳喘、动则气促、呼多吸少。",
      tcm:
        "肾不纳气为肾气虚衰、摄纳无权。症见久病咳喘、气短不足以息、动则喘甚、呼多吸少、腰膝酸软、汗出肢冷、舌淡脉沉弱。",
      modern:
        "对应**呼吸肌力下降 + 呼吸驱动调节异常 + 肺气肿/COPD 的呼吸储备耗竭**：最大吸气压/呼气压下降、膈肌疲劳、二氧化碳潴留、运动耐量下降。中医「纳气」与「呼吸中枢对 CO₂ 的通气反应」及膈肌功能形成对应。",
      mappings: [
        { tcm: "动则气促", modern: "最大摄氧量下降、呼吸储备低、膈肌疲劳", note: "6 分钟步行试验" },
        { tcm: "呼多吸少", modern: "阻塞性通气障碍与呼气末正压（内源性 PEEP）", note: "肺功能：FEV1/FVC" },
        { tcm: "肾不纳气", modern: "呼吸中枢化学感受器反应性下降、CO₂ 潴留", note: "PaCO₂ 升高" },
        { tcm: "久病及肾", modern: "慢性心肺疾病导致的骨骼肌萎缩与营养耗竭", note: "肺康复的病理基础" },
      ],
      evidence: "B",
      evidenceText: "呼吸生理指标可测；「纳气」为功能整合概念。",
      refs: [
        { type: "classic", text: "《类证治裁·喘证》（林珮琴，1839）" },
        { type: "modern", text: "Global Initiative for Chronic Obstructive Lung Disease (GOLD). Report 2024." },
      ],
    },
    {
      id: "lung-yin-deficiency",
      layer: "L3",
      group: "肺系证候",
      name: "肺阴虚",
      pinyin: "Fèi Yīn Xū",
      alias: ["肺阴不足", "肺燥"],
      summary: "干咳少痰、咽干口燥、声嘶、痰中带血。",
      tcm:
        "肺阴虚为肺阴亏耗、虚热内生。症见干咳无痰或痰少而黏、痰中带血、咽干口燥、声音嘶哑、午后潮热、盗汗、舌红少津、脉细数。",
      modern:
        "对应**呼吸道上皮屏障与分泌功能受损 + 慢性低度炎症**：气道黏液分泌减少、黏液纤毛清除下降、肺泡表面活性物质减少、黏膜干燥、局部炎症因子升高。常见于感染后咳嗽、干燥综合征肺部受累、间质性肺病早期、长期吸入刺激物者。",
      mappings: [
        { tcm: "干咳少痰", modern: "气道黏液分泌减少、黏膜干燥、咳嗽反射敏化", note: "咳嗽敏感性增高" },
        { tcm: "痰中带血", modern: "气道黏膜毛细血管脆性增加、微损伤", note: "需排除结核与肿瘤" },
        { tcm: "咽干口燥", modern: "唾液与气道分泌减少（抗胆碱能/干燥综合征）", note: "Schirmer 试验、唾液流率" },
        { tcm: "午后潮热盗汗", modern: "炎症性体温波动与自主神经失调", note: "结核中毒症状的经典描述" },
        { tcm: "肺阴虚—间质改变", modern: "间质性肺病的早期炎症与纤维化倾向", note: "HRCT、KL-6" },
      ],
      evidence: "B",
      evidenceText: "呼吸道分泌与炎症指标可测；与结核/间质病的鉴别诊断价值需谨慎。",
      refs: [
        { type: "classic", text: "《素问·痿论》《医宗金鉴·肺痿》" },
        { type: "classic", text: "叶天士《临证指南医案·燥》" },
        { type: "modern", text: "Raghu G, et al. Idiopathic pulmonary fibrosis: diagnosis and management. American Journal of Respiratory and Critical Care Medicine, 2018." },
      ],
    },
    {
      id: "liver-yang-rising",
      layer: "L3",
      group: "肝系证候",
      name: "肝阳上亢",
      pinyin: "Gān Yáng Shàng Kàng",
      alias: ["肝阳偏亢", "阴虚阳亢"],
      summary: "眩晕耳鸣、头目胀痛、面红目赤、急躁易怒。",
      tcm:
        "肝阳上亢多由肝肾阴虚、水不涵木，致肝阳偏亢而上扰。症见眩晕耳鸣、头目胀痛、面红目赤、急躁易怒、失眠多梦、腰膝酸软、舌红少津、脉弦有力。",
      modern:
        "研究最集中的对应是**原发性高血压（尤其伴交感激活与 RAAS 激活者）**：外周血管阻力增高、交感神经张力增高、血浆去甲肾上腺素与血管紧张素 II 升高、心率变异性降低。眩晕与头痛对应血压波动与脑血管自动调节障碍。",
      mappings: [
        { tcm: "眩晕头胀", modern: "血压升高、脑血管自动调节曲线右移", note: "24 小时动态血压" },
        { tcm: "面红目赤", modern: "头面部血管扩张、交感激活", note: "红外热成像可见头面温度升高" },
        { tcm: "急躁易怒", modern: "交感—HPA 轴反应性增高、情绪调节障碍", note: "特质愤怒与高血压相关" },
        { tcm: "脉弦", modern: "外周阻力增高导致的脉搏波形改变", note: "脉搏波传导速度（PWV）" },
        { tcm: "肝肾阴虚为本", modern: "RAAS 激活与血管内皮功能损伤", note: "AngII、NO 生物利用度" },
      ],
      evidence: "A",
      evidenceText: "高血压与交感/RAAS 激活的对应有大量临床与机制研究；「肝阳」作为证候与高血压并非一一对应，需辨证。",
      refs: [
        { type: "classic", text: "《素问·至真要大论》「诸风掉眩，皆属于肝」" },
        { type: "classic", text: "叶天士《临证指南医案·眩晕》" },
        { type: "modern", text: "Mancia G, et al. 2023 ESH Guidelines for the management of arterial hypertension. Journal of Hypertension, 2023." },
        { type: "modern", text: "Grassi G. Sympathetic neural activity in hypertension and related diseases. American Journal of Hypertension, 2010." },
      ],
    },
    {
      id: "liver-yin-deficiency",
      layer: "L3",
      group: "肝系证候",
      name: "肝阴不足",
      pinyin: "Gān Yīn Bù Zú",
      alias: ["肝阴虚", "肝血虚"],
      summary: "头晕眼花、两目干涩、胁肋隐痛、肢体麻木。",
      tcm:
        "肝阴不足为肝之阴血亏虚、濡养失职。症见头晕眼花、两目干涩、视物模糊、胁肋隐痛、肢体麻木、筋惕肉𥆧、五心烦热、舌红少津、脉弦细。",
      modern:
        "对应**肝脏合成与储备功能下降 + 视觉系统营养不足 + 周围神经与肌肉的营养性改变**：白蛋白与前白蛋白下降、维生素 A 与视紫红质合成不足、干眼症、周围神经传导速度下降。也常见于慢性肝病早期与营养不良状态。",
      mappings: [
        { tcm: "两目干涩", modern: "泪液分泌减少、泪膜破裂时间缩短、维生素 A 缺乏", note: "干眼评估（OSDI、TBUT）" },
        { tcm: "肢体麻木", modern: "周围神经传导减慢、B 族维生素缺乏", note: "神经传导速度" },
        { tcm: "胁肋隐痛", modern: "肝包膜牵张、慢性肝病相关不适", note: "肝纤维化扫描" },
        { tcm: "筋惕肉𥆧", modern: "低钙/低镁致神经肌肉兴奋性增高", note: "电解质检查" },
        { tcm: "肝藏血不足", modern: "白蛋白、前白蛋白、铁蛋白等储备指标下降", note: "营养评估" },
      ],
      evidence: "B",
      evidenceText: "营养与神经肌肉指标可测；「肝阴」与实验室指标非一一对应。",
      refs: [
        { type: "classic", text: "《素问·五脏生成篇》《灵枢·本神》" },
        { type: "classic", text: "《医宗金鉴·杂病心法要诀》" },
        { type: "modern", text: "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on nutrition in chronic liver disease. 2019." },
      ],
    },
    {
      id: "heart-fire",
      layer: "L3",
      group: "心系证候",
      name: "心火亢盛",
      pinyin: "Xīn Huǒ Kàng Shèng",
      alias: ["心火", "心火上炎"],
      summary: "心烦失眠、口舌生疮、面赤口渴、舌尖红。",
      tcm:
        "心火亢盛为心火内炽、扰乱心神。症见心烦失眠、口舌生疮、舌尖红赤疼痛、面赤口渴、小便短赤、甚则狂躁谵语、吐血衄血。",
      modern:
        "对应**交感神经兴奋性增高 + 口腔黏膜局部炎症 + 睡眠—觉醒调节紊乱**：心率增快、血压升高、皮温升高、口腔溃疡（复发性阿弗他口炎）、焦虑与失眠。「心开窍于舌」使口腔溃疡成为「心火」最具象的对应。",
      mappings: [
        { tcm: "口舌生疮", modern: "复发性阿弗他口炎、口腔黏膜免疫异常", note: "与压力、睡眠不足、营养缺乏相关" },
        { tcm: "心烦失眠", modern: "交感张力增高、入睡潜伏期延长、睡眠碎片化", note: "PSG、HRV" },
        { tcm: "面赤", modern: "头面部血管扩张、皮温升高", note: "红外热成像" },
        { tcm: "小便短赤", modern: "尿液浓缩、尿胆原/尿比重升高", note: "脱水状态" },
        { tcm: "心火—炎症", modern: "促炎因子（IL-6、TNF-α）升高与氧化应激", note: "低度炎症" },
      ],
      evidence: "B",
      evidenceText: "口腔溃疡与交感兴奋对应直观；「心火」是证候群而非单一疾病。",
      refs: [
        { type: "classic", text: "《素问·至真要大论》「诸痛痒疮，皆属于心」" },
        { type: "classic", text: "刘完素《素问玄机原病式》（1186）" },
        { type: "modern", text: "Scully C. Clinical practice: aphthous ulceration. New England Journal of Medicine, 2006, 355(2): 165–172." },
      ],
    },
    {
      id: "heart-yin-deficiency",
      layer: "L3",
      group: "心系证候",
      name: "心阴不足",
      pinyin: "Xīn Yīn Bù Zú",
      alias: ["心阴虚", "心阴亏虚"],
      summary: "心悸怔忡、失眠多梦、五心烦热、盗汗。",
      tcm:
        "心阴不足为心阴亏虚、虚热内扰。症见心悸怔忡、失眠多梦、心烦、五心烦热、潮热盗汗、口干、舌红少苔、脉细数。",
      modern:
        "对应**心肌能量代谢与电活动稳定性下降 + 自主神经失衡（交感偏亢）**：心率变异性降低、静息心率增快、心悸（期前收缩）、睡眠结构碎片化、夜间出汗。常见于甲状腺功能偏亢、围绝经期、慢性应激与心肌病早期。",
      mappings: [
        { tcm: "心悸怔忡", modern: "期前收缩、心率变异性降低、交感张力增高", note: "24 小时动态心电图" },
        { tcm: "失眠多梦", modern: "睡眠效率下降、REM 比例异常", note: "PSG" },
        { tcm: "五心烦热盗汗", modern: "自主神经失调、夜间皮温升高", note: "皮温与出汗监测" },
        { tcm: "心阴不足—心肌", modern: "心肌能量代谢（脂肪酸氧化/葡萄糖利用）失衡", note: "PET 心肌代谢显像" },
      ],
      evidence: "B",
      evidenceText: "心电与自主神经指标可量化；与器质性心脏病的因果关系需个案评估。",
      refs: [
        { type: "classic", text: "《伤寒论·辨太阳病脉证并治》（炙甘草汤证）" },
        { type: "classic", text: "《景岳全书》" },
        { type: "modern", text: "Task Force of ESC/NASPE. Heart rate variability: standards of measurement. Circulation, 1996, 93: 1043–1065." },
      ],
    },
    {
      id: "spleen-qi-deficiency",
      layer: "L3",
      group: "脾系证候",
      name: "脾虚",
      pinyin: "Pí Xū",
      alias: ["脾气虚", "脾胃虚弱", "中气不足"],
      summary: "食少腹胀、便溏乏力、面色萎黄、舌淡。",
      tcm:
        "脾虚（脾气虚）为脾气不足、运化失职。症见食少纳呆、腹胀便溏、神疲乏力、少气懒言、面色萎黄、形体消瘦或浮肿、舌淡苔白、脉缓弱。",
      modern:
        "对应**消化吸收功能低下 + 肠道菌群失调 + 免疫功能偏低 + 能量代谢不足**四联征：胃排空延迟、消化酶分泌减少、小肠吸收面积/功能下降、菌群多样性降低、sIgA 与免疫细胞活性下降、线粒体 ATP 生成减少。",
      mappings: [
        { tcm: "食少腹胀便溏", modern: "胃排空延迟、小肠传输时间改变、消化酶不足", note: "胃肠动力检测" },
        { tcm: "神疲乏力", modern: "线粒体 ATP 生成下降、最大摄氧量降低", note: "乳酸阈值、6 分钟步行" },
        { tcm: "脾虚—菌群", modern: "肠道菌群多样性下降、厚壁菌/拟杆菌比例改变", note: "16S rRNA 测序研究" },
        { tcm: "脾虚—免疫", modern: "sIgA 下降、T 细胞亚群失衡、易感染", note: "免疫球蛋白与淋巴细胞亚群" },
        { tcm: "面色萎黄", modern: "轻度贫血、胡萝卜素代谢与营养状态", note: "血红蛋白、血清铁" },
        { tcm: "脾虚—水湿", modern: "肠壁水肿、淋巴回流减弱、体重增加", note: "生物电阻抗分析" },
      ],
      evidence: "B",
      evidenceText: "消化、菌群、免疫三条线均有研究支持；「脾虚」证候标准已由学会发布。",
      refs: [
        { type: "classic", text: "《素问·太阴阳明论》" },
        { type: "classic", text: "李杲《脾胃论》（1249）" },
        { type: "modern", text: "中国中西医结合学会消化系统疾病专业委员会. 脾虚证中西医结合诊疗共识意见. 2017." },
        { type: "modern", text: "Wu HJ, Wu E. The role of gut microbiota in immune homeostasis and autoimmunity. Gut Microbes, 2012, 3(1): 4–14." },
      ],
    },
    {
      id: "spleen-yang-deficiency",
      layer: "L3",
      group: "脾系证候",
      name: "脾阳虚",
      pinyin: "Pí Yáng Xū",
      alias: ["脾胃虚寒", "中焦虚寒"],
      summary: "腹冷痛喜温喜按、久泻不止、四肢不温。",
      tcm:
        "脾阳虚为脾气虚进一步发展、阳气不足。症见腹胀纳少、腹痛喜温喜按、畏寒肢冷、大便溏薄清稀或完谷不化、肢体浮肿、小便不利、舌淡胖苔白滑、脉沉迟无力。",
      modern:
        "对应**消化系统低动力 + 内脏高敏感 + 产热不足**：胃肠传输减慢、胃电节律紊乱、肠易激综合征（腹泻型）、基础代谢率偏低、末梢循环差。",
      mappings: [
        { tcm: "腹冷痛喜温", modern: "内脏高敏感与腹壁温度降低；热敷降低内脏敏感性", note: "内脏敏感性与温度相关" },
        { tcm: "久泻完谷不化", modern: "胰酶不足、肠传输过快、吸收不良", note: "粪便弹性蛋白酶、粪脂" },
        { tcm: "畏寒肢冷", modern: "基础代谢率与末梢灌注下降", note: "皮温、甲功" },
        { tcm: "肢体浮肿", modern: "低蛋白血症与淋巴回流障碍", note: "白蛋白、生物电阻抗" },
      ],
      evidence: "B",
      evidenceText: "消化动力与代谢指标可测；与肠易激综合征重叠度高。",
      refs: [
        { type: "classic", text: "《伤寒论·辨太阴病脉证并治》" },
        { type: "classic", text: "《景岳全书·脾胃》" },
        { type: "modern", text: "Ford AC, et al. Irritable bowel syndrome. Lancet, 2020, 396(10263): 1675–1688." },
      ],
    },
    {
      id: "stomach-fire",
      layer: "L3",
      group: "脾胃证候",
      name: "胃火",
      pinyin: "Wèi Huǒ",
      alias: ["胃热", "胃火炽盛"],
      summary: "胃脘灼痛、口渴喜冷、牙龈肿痛、口臭便秘。",
      tcm:
        "胃火（胃热）为胃中火热炽盛。症见胃脘灼热疼痛、渴喜冷饮、消谷善饥、牙龈肿痛出血、口臭、便秘尿黄、舌红苔黄、脉滑数。",
      modern:
        "对应**胃酸分泌亢进 + 胃黏膜炎症 + 口腔—牙周炎症 + 交感代谢亢进**：胃泌素与胃酸升高、幽门螺杆菌相关胃炎、胃食管反流、牙龈炎/牙周炎、口臭（挥发性硫化物）、便秘。",
      mappings: [
        { tcm: "胃脘灼痛", modern: "胃酸反流与胃黏膜炎症（糜烂/溃疡）", note: "胃镜、24h 食管 pH 监测" },
        { tcm: "消谷善饥", modern: "胃排空增快、血糖波动、甲状腺功能偏亢", note: "需排除糖尿病与甲亢" },
        { tcm: "牙龈肿痛出血", modern: "牙周炎、牙龈炎症与菌斑", note: "牙周探诊深度" },
        { tcm: "口臭", modern: "挥发性硫化物（VSC）、幽门螺杆菌", note: "呼气检测" },
        { tcm: "便秘", modern: "结肠传输减慢、水分吸收增加", note: "罗马 IV 标准" },
      ],
      evidence: "B",
      evidenceText: "多系统炎症对应明确；「胃火」需与糖尿病、甲亢等代谢病鉴别。",
      refs: [
        { type: "classic", text: "《素问·气厥论》《兰室秘藏》（李杲）" },
        { type: "modern", text: "Malfertheiner P, et al. Management of Helicobacter pylori infection: the Maastricht VI/Florence consensus report. Gut, 2022." },
      ],
    },
    {
      id: "qi-deficiency",
      layer: "L3",
      group: "气血证候",
      name: "气虚",
      pinyin: "Qì Xū",
      alias: ["正气不足", "元气虚"],
      summary: "少气懒言、疲乏自汗、易感冒、脉弱。",
      tcm:
        "气虚为元气不足、功能减退。症见少气懒言、神疲乏力、头晕目眩、自汗、活动后加重、易感冒、舌淡苔白、脉虚无力。",
      modern:
        "对应**线粒体能量代谢下降 + 心肺耐力降低 + 免疫功能低下 + 自主神经调节减弱**：ATP 生成减少、最大摄氧量（VO₂max）下降、肌力下降、NK 细胞与 T 细胞活性降低、心率变异性降低。慢性疲劳综合征与心衰的「乏力」表型与之高度重叠。",
      mappings: [
        { tcm: "疲乏无力", modern: "ATP 生成与肌肉能量利用效率下降", note: "31P-MRS 可测肌肉磷酸肌酸恢复" },
        { tcm: "少气懒言", modern: "最大通气量与呼吸肌力下降", note: "MVV、MIP" },
        { tcm: "自汗易感冒", modern: "自主神经汗腺调节异常 + 黏膜免疫下降", note: "sIgA、感染频率" },
        { tcm: "脉虚", modern: "每搏输出量与脉压下降", note: "心输出量、脉搏波" },
        { tcm: "气虚—线粒体", modern: "线粒体数量与氧化磷酸化效率下降", note: "mtDNA 拷贝数研究" },
      ],
      evidence: "B",
      evidenceText: "能量代谢与耐力指标方向一致；「气虚」为跨系统证候，非单一疾病。",
      refs: [
        { type: "classic", text: "《素问·通评虚实论》《灵枢·海论》" },
        { type: "modern", text: "中国中西医结合学会. 中医虚证辨证参考标准. 1986." },
        { type: "modern", text: "Fitts RH. The cross-bridge cycle and skeletal muscle fatigue. Journal of Applied Physiology, 2008, 104(2): 551–558." },
      ],
    },
    {
      id: "blood-deficiency",
      layer: "L3",
      group: "气血证候",
      name: "血虚",
      pinyin: "Xuè Xū",
      alias: ["营血虚", "血亏"],
      summary: "面色淡白、头晕心悸、失眠、爪甲不荣。",
      tcm:
        "血虚为血液亏虚、濡养失职。症见面色淡白或萎黄、唇甲色淡、头晕眼花、心悸失眠、手足发麻、月经量少色淡、舌淡、脉细。",
      modern:
        "对应**贫血与组织氧供不足 + 微循环灌注下降**：血红蛋白与红细胞压积降低、铁/叶酸/维生素 B12 缺乏、携氧能力下降、组织缺氧致乏力与心悸。也包含营养性低蛋白与末梢循环差。",
      mappings: [
        { tcm: "面色唇甲淡白", modern: "贫血（血红蛋白降低）、末梢灌注不足", note: "血常规、铁代谢" },
        { tcm: "头晕心悸", modern: "携氧能力下降致代偿性心率增快", note: "心输出量代偿" },
        { tcm: "手足发麻", modern: "维生素 B12 缺乏性周围神经病变", note: "血清 B12、同型半胱氨酸" },
        { tcm: "失眠", modern: "脑灌注与神经递质合成（铁为酪氨酸羟化酶辅因子）", note: "铁缺乏与睡眠/不宁腿" },
      ],
      evidence: "A",
      evidenceText: "贫血诊断标准明确，与「血虚」表型高度重叠。",
      refs: [
        { type: "classic", text: "《灵枢·决气》《素问·举痛论》" },
        { type: "modern", text: "WHO. Haemoglobin concentrations for the diagnosis of anaemia. 2011." },
      ],
    },
    {
      id: "shanghuo",
      layer: "L3",
      group: "气血证候",
      name: "上火",
      pinyin: "Shàng Huǒ",
      alias: ["火气", "内热", "热气"],
      summary: "口疮、咽痛、牙龈肿、痘疹、便秘的民间统称。",
      tcm:
        "「上火」是民间对一组火热证候的统称，可见口舌生疮、咽喉肿痛、牙龈肿痛、目赤、面部痤疮、便秘尿黄等。可因外感、饮食辛辣、情志郁结、熬夜等诱发，涉及心火、胃火、肝火等不同脏腑定位。",
      modern:
        "对应**急性/亚急性炎症反应 + 黏膜屏障受损 + 氧化应激 + 睡眠剥夺与应激**的综合表型：局部促炎因子（IL-1β、IL-6、TNF-α）升高、CRP 轻度升高、口腔/咽部黏膜炎症、皮脂分泌增加与痤疮丙酸杆菌增殖、肠道传输减慢。熬夜与心理应激通过 HPA 轴与交感激活放大该表型。",
      mappings: [
        { tcm: "口舌生疮", modern: "复发性阿弗他口炎、黏膜局部免疫反应", note: "与压力、睡眠、B12/铁/叶酸缺乏相关" },
        { tcm: "咽喉肿痛", modern: "急性咽炎/扁桃体炎（病毒或细菌）", note: "咽拭子、CRP" },
        { tcm: "面部痤疮", modern: "皮脂分泌增加、毛囊角化异常、痤疮丙酸杆菌", note: "IGF-1 与高糖饮食相关" },
        { tcm: "便秘", modern: "结肠传输减慢、饮水不足", note: "罗马 IV" },
        { tcm: "熬夜致上火", modern: "睡眠剥夺升高 IL-6/CRP、降低 HRV", note: "睡眠与炎症研究" },
      ],
      evidence: "B",
      evidenceText: "多系统低度炎症与黏膜表型可测；「上火」是症状集合而非诊断实体，需排除感染与器质病。",
      refs: [
        { type: "classic", text: "《素问·至真要大论》「诸痛痒疮，皆属于心」" },
        { type: "classic", text: "刘完素《素问玄机原病式》（1186）" },
        { type: "modern", text: "Irwin MR, Opp MR. Sleep health: reciprocal regulation of sleep and innate immunity. Neuropsychopharmacology, 2017, 42(1): 129–155." },
      ],
    },
    {
      id: "liver-qi-stagnation",
      layer: "L3",
      group: "肝系证候",
      name: "肝气郁结",
      pinyin: "Gān Qì Yù Jié",
      alias: ["肝郁", "气滞"],
      summary: "情志抑郁、胸胁胀痛、善太息、月经不调。",
      tcm:
        "肝气郁结为肝失疏泄、气机郁滞。症见情志抑郁或易怒、胸胁胀满窜痛、善太息、咽中如有物阻（梅核气）、女性乳房胀痛与月经不调、舌淡红苔薄白、脉弦。",
      modern:
        "对应**慢性应激下的 HPA 轴与自主神经调节失衡 + 情绪调节网络异常 + 功能性躯体症状**：皮质醇节律紊乱、心率变异性降低、前额叶—杏仁核功能连接改变、功能性消化不良与肠易激综合征、紧张性头痛。",
      mappings: [
        { tcm: "情志抑郁", modern: "前额叶—杏仁核环路与 5-HT/NE 系统功能改变", note: "fMRI 研究" },
        { tcm: "胸胁胀满", modern: "胸壁肌筋膜紧张、功能性躯体化", note: "需排除心肺疾病" },
        { tcm: "梅核气", modern: "咽喉异物感（癔球症）、食管上括约肌功能异常", note: "咽喉镜排除器质病变" },
        { tcm: "月经不调", modern: "应激致 GnRH 脉冲抑制、周期紊乱", note: "功能性下丘脑性闭经" },
        { tcm: "脉弦", modern: "交感张力增高与外周阻力增加", note: "HRV、PWV" },
      ],
      evidence: "B",
      evidenceText: "应激—HPA—自主神经与功能性胃肠病对应明确；「肝郁」涵盖范围广。",
      refs: [
        { type: "classic", text: "《素问·举痛论》《丹溪心法·六郁》（朱震亨）" },
        { type: "modern", text: "Mayer EA. Gut feelings: the emerging biology of gut–brain communication. Nature Reviews Neuroscience, 2011, 12(8): 453–466." },
        { type: "modern", text: "Drossman DA. Functional gastrointestinal disorders: history, pathophysiology, clinical features. Gastroenterology, 2016, 150(6): 1262–1279." },
      ],
    },
    {
      id: "phlegm-damp",
      layer: "L3",
      group: "病理产物",
      name: "痰湿",
      pinyin: "Tán Shī",
      alias: ["痰湿内阻", "湿浊", "痰浊"],
      summary: "形体肥胖、胸闷痰多、苔腻、身重困倦。",
      tcm:
        "痰湿为水液代谢障碍所形成的病理产物，又可成为致病因素。症见形体肥胖、胸闷脘痞、痰多黏腻、头晕身重、口黏不渴、大便黏滞、舌体胖大苔白腻、脉滑。",
      modern:
        "对应**代谢综合征与胰岛素抵抗的核心表型**：中心性肥胖、血脂异常（甘油三酯升高、HDL 降低）、血压升高、空腹血糖升高、脂肪肝、水钠潴留。脂肪组织分泌的炎症因子与胰岛素抵抗形成恶性循环。",
      mappings: [
        { tcm: "形体肥胖", modern: "中心性肥胖、内脏脂肪堆积", note: "腰围、BMI、内脏脂肪面积" },
        { tcm: "胸闷痰多", modern: "气道分泌增多、阻塞性睡眠呼吸暂停", note: "AHI 指数" },
        { tcm: "苔腻口黏", modern: "唾液黏稠度增加、口腔菌群改变", note: "舌苔微生物组研究" },
        { tcm: "身重困倦", modern: "胰岛素抵抗致乏力、睡眠质量下降", note: "HOMA-IR" },
        { tcm: "痰湿—脂肪肝", modern: "非酒精性脂肪性肝病（NAFLD/MASLD）", note: "肝脏超声、肝酶" },
        { tcm: "痰湿—代谢综合征", modern: "血脂、血糖、血压、腰围四联异常", note: "MetS 诊断标准" },
      ],
      evidence: "A",
      evidenceText: "痰湿证与代谢综合征的重叠有大量流行病学与机制研究，是可量化度最高的证候之一。",
      refs: [
        { type: "classic", text: "《丹溪心法·痰》（朱震亨，1347）" },
        { type: "classic", text: "《医宗金鉴·痰饮》" },
        { type: "modern", text: "Alberti KG, et al. Harmonizing the metabolic syndrome. Circulation, 2009, 120(16): 1640–1645." },
        { type: "modern", text: "中华中医药学会. 痰湿体质与代谢综合征相关性研究. 中国中西医结合杂志." },
      ],
    },
    {
      id: "blood-stasis",
      layer: "L3",
      group: "病理产物",
      name: "血瘀",
      pinyin: "Xuè Yū",
      alias: ["瘀血", "蓄血"],
      summary: "刺痛固定、面色晦暗、舌紫暗有瘀斑、脉涩。",
      tcm:
        "血瘀为血液运行不畅或离经之血留滞。症见刺痛固定不移、面色晦暗、口唇紫暗、肌肤瘀斑、癥积肿块、舌质紫暗或有瘀点、脉涩。",
      modern:
        "对应**微循环障碍 + 血液高凝状态 + 内皮功能障碍**：血小板活化（P-选择素、β-TG 升高）、D-二聚体升高、血液黏度增高、血管内皮依赖性舒张功能下降、微循环血流速度减慢。是心血管、脑血管与糖尿病并发症的共同病理基础。",
      mappings: [
        { tcm: "刺痛固定", modern: "局部缺血性疼痛、组织缺氧", note: "需排除器质性病变" },
        { tcm: "舌紫暗瘀斑", modern: "舌微循环障碍、血氧饱和度下降", note: "舌下静脉观察、舌微循环检测" },
        { tcm: "脉涩", modern: "血液黏度增高、脉搏波传导异常", note: "全血黏度、PWV" },
        { tcm: "癥积肿块", modern: "纤维化、肿瘤、血栓机化", note: "影像学" },
        { tcm: "血瘀—高凝", modern: "血小板活化、凝血—纤溶失衡", note: "D-二聚体、血小板聚集率" },
        { tcm: "血瘀—内皮", modern: "内皮功能障碍与动脉粥样硬化", note: "FMD、内皮素-1" },
      ],
      evidence: "A",
      evidenceText: "血瘀证诊断标准与实验室指标成熟，是中西医结合最成功的范式之一。",
      refs: [
        { type: "classic", text: "《素问·调经论》" },
        { type: "classic", text: "王清任《医林改错》（1830）" },
        { type: "modern", text: "中国中西医结合学会活血化瘀专业委员会. 血瘀证诊断标准（2016 修订）." },
        { type: "modern", text: "Libby P. Inflammation in atherosclerosis. Nature, 2002, 420(6917): 868–874." },
      ],
    },

    /* ===================== L4 辨证体系 ===================== */
    {
      id: "bagang",
      layer: "L4",
      group: "八纲辨证",
      name: "八纲辨证",
      pinyin: "Bā Gāng Biàn Zhèng",
      alias: ["阴阳表里寒热虚实"],
      summary: "以四对范畴定位病位的八维分类框架。",
      tcm:
        "八纲辨证以阴阳、表里、寒热、虚实四对纲领概括证候。阴阳为总纲，表里辨病位深浅，寒热辨病性，虚实辨正邪盛衰。清代程钟龄《医学心悟》系统提出「寒热虚实表里阴阳辨」。",
      modern:
        "八纲可视为一个**四维分类向量**，与现代医学的多轴评估同构：病位（局部/系统）、病性（代谢-炎症活性）、正邪（储备/负荷）、总纲（兴奋/抑制）。现代对应为「表型分型（phenotyping）」与「严重度分层」，但八纲不依赖实验室指标，属临床启发式。",
      mappings: [
        { tcm: "表里（病位轴）", modern: "局部/早期 vs 系统性/器质性——对应影像与炎症标志物范围", note: "分层诊断" },
        { tcm: "寒热（病性轴）", modern: "产热—代谢轴与炎症活性轴", note: "体温、代谢率、CRP" },
        { tcm: "虚实（正邪轴）", modern: "器官储备 vs 病理负荷", note: "营养指标 vs 容量/炎症负荷" },
        { tcm: "阴阳（总纲）", modern: "整体兴奋/抑制偏移（自主神经—代谢）", note: "HRV、代谢率" },
      ],
      evidence: "B",
      evidenceText: "作为多维分类框架与表型分型同构；具体证候的生物学基础因证而异。",
      refs: [
        { type: "classic", text: "程钟龄《医学心悟·寒热虚实表里阴阳辨》（1732）" },
        { type: "classic", text: "《素问·阴阳应象大论》" },
        { type: "modern", text: "Loscalzo J, et al. Precision medicine. Nature, 2017, 541: 483–484." },
      ],
    },
    {
      id: "bagang-yinyang",
      layer: "L4",
      group: "八纲辨证",
      name: "阴阳辨证",
      pinyin: "Yīn Yáng Biàn Zhèng",
      alias: ["阴证", "阳证"],
      summary: "八纲总纲：阳证主亢奋，阴证主衰退。",
      tcm:
        "阴阳为八纲总纲。阳证见发热、面赤、烦躁、口渴、便秘、脉洪数；阴证见畏寒、肢冷、精神萎靡、便溏、脉沉迟。表、热、实属阳；里、寒、虚属阴。",
      modern:
        "近似**整体兴奋—抑制偏移**：阳证对应交感激活、代谢率升高、炎症活跃；阴证对应副交感占优、代谢率降低、器官功能减退。可用 HRV、基础代谢率、体温、炎症标志物组合刻画。",
      mappings: [
        { tcm: "阳证", modern: "交感激活、高代谢、炎症活跃", note: "HRV 低频/高频比升高、CRP 升高" },
        { tcm: "阴证", modern: "低代谢、低灌注、功能减退", note: "基础体温低、甲状腺功能偏低" },
      ],
      evidence: "B",
      evidenceText: "总体偏移方向可测；阴阳证候覆盖面广，异质性大。",
      refs: [
        { type: "classic", text: "《素问·阴阳应象大论》《医学心悟》" },
        { type: "modern", text: "Thayer JF, et al. The relationship of autonomic imbalance to cardiovascular disease risk. International Journal of Cardiology, 2010." },
      ],
    },
    {
      id: "bagang-biaoli",
      layer: "L4",
      group: "八纲辨证",
      name: "表里辨证",
      pinyin: "Biǎo Lǐ Biàn Zhèng",
      alias: ["表证", "里证", "半表半里"],
      summary: "病位深浅的分层：肌表还是脏腑。",
      tcm:
        "表里辨病位。表证病位浅在肌表，起病急、病程短，见恶寒发热、头身痛、脉浮；里证病位深在脏腑，病程长，见脏腑功能异常；半表半里见寒热往来、胸胁苦满。",
      modern:
        "近似**疾病的空间分层**：表≈黏膜/皮肤等屏障器官的局部反应（上呼吸道、皮肤）；里≈内脏器官与系统性疾病；半表半里≈迁延性、局限性炎症或功能性障碍。可用影像范围、炎症标志物、器官功能指标分层。",
      mappings: [
        { tcm: "表证", modern: "黏膜/皮肤局部炎症与固有免疫启动", note: "上呼吸道感染早期" },
        { tcm: "里证", modern: "内脏器官受累或全身性疾病", note: "肝肾功能、影像" },
        { tcm: "半表半里", modern: "迁延性局限炎症/功能性躯体症状", note: "CRP 轻度升高" },
      ],
      evidence: "B",
      evidenceText: "分层思想与疾病分期同构；边界在实际病例中常模糊。",
      refs: [
        { type: "classic", text: "《伤寒论·辨太阳病脉证并治》（张仲景）" },
        { type: "classic", text: "《医学心悟》" },
      ],
    },
    {
      id: "bagang-hanre",
      layer: "L4",
      group: "八纲辨证",
      name: "寒热辨证",
      pinyin: "Hán Rè Biàn Zhèng",
      alias: ["寒证", "热证"],
      summary: "病性：产热—代谢轴的低与高。",
      tcm:
        "寒热辨病性。寒证见畏寒喜暖、肢冷、分泌物清稀、舌淡苔白、脉迟；热证见发热喜凉、口渴、分泌物黄稠、舌红苔黄、脉数。",
      modern:
        "对应**产热—散热平衡与炎症—代谢活性**两个轴：寒证≈基础代谢率低、末梢灌注差、甲状腺/肾上腺功能偏低；热证≈代谢率高、炎症活跃、交感兴奋、体温调定点上移。",
      mappings: [
        { tcm: "寒证", modern: "低代谢、低灌注、甲状腺/肾上腺功能偏低", note: "基础体温、T3/T4、皮温" },
        { tcm: "热证", modern: "高代谢、炎症活跃、交感兴奋", note: "CRP、IL-6、心率" },
        { tcm: "真寒假热", modern: "感染性休克早期的外周血管扩张（暖休克）", note: "血流动力学分型" },
      ],
      evidence: "B",
      evidenceText: "寒热与代谢/炎症轴对应方向一致；「真寒假热」与休克分型形成有趣对照。",
      refs: [
        { type: "classic", text: "《素问·阴阳应象大论》《医学心悟》" },
        { type: "modern", text: "Vincent JL, De Backer D. Circulatory shock. New England Journal of Medicine, 2013, 369(18): 1726–1734." },
      ],
    },
    {
      id: "bagang-xushi",
      layer: "L4",
      group: "八纲辨证",
      name: "虚实辨证",
      pinyin: "Xū Shí Biàn Zhèng",
      alias: ["虚证", "实证"],
      summary: "正邪力量对比：储备不足还是负荷过盛。",
      tcm:
        "虚实辨正邪盛衰。「邪气盛则实，精气夺则虚」。虚证见神疲、气短、自汗、脉虚无力；实证见胀满、疼痛拒按、痰涎壅盛、脉实有力。",
      modern:
        "对应**器官储备 vs 病理负荷**的对比：虚≈营养储备、肌肉量、免疫储备、心/肺/肾储备下降；实≈容量负荷、炎症负荷、代谢产物蓄积、占位性病变。危重症中的「虚弱—负荷」评估与中医虚实高度同构。",
      mappings: [
        { tcm: "虚证", modern: "器官储备下降、营养不良、免疫抑制", note: "白蛋白、握力、淋巴细胞计数" },
        { tcm: "实证", modern: "容量负荷、炎症负荷、代谢产物蓄积", note: "BNP、CRP、肌酐、腹水" },
        { tcm: "虚实夹杂", modern: "慢性病急性加重（如心衰合并感染）", note: "临床最常见" },
      ],
      evidence: "B",
      evidenceText: "与危重症「储备—负荷」模型同构，可量化；但虚实判定仍依赖临床综合。",
      refs: [
        { type: "classic", text: "《素问·通评虚实论》「邪气盛则实，精气夺则虚」" },
        { type: "classic", text: "《医学心悟》" },
      ],
    },
    {
      id: "liujing",
      layer: "L4",
      group: "六经辨证",
      name: "六经辨证",
      pinyin: "Liù Jīng Biàn Zhèng",
      alias: ["伤寒六经", "三阳三阴"],
      summary: "外感病由表入里、由阳转阴的六阶段模型。",
      tcm:
        "六经辨证出自张仲景《伤寒论》，以太阳、阳明、少阳、太阴、少阴、厥阴概括外感病传变阶段。三阳病以邪实为主，三阴病以正虚为主。六经既是病程分期，也是证候分类。",
      modern:
        "六经可视为**疾病进展的分期—分层模型**，与脓毒症分期、感染性疾病病程高度同构：太阳≈局部早期感染；阳明≈全身炎症反应；少阳≈迁延/局限化；太阴≈消化功能受累；少阴≈循环衰竭前期；厥阴≈多器官功能不全终末期。",
      mappings: [
        { tcm: "六经传变", modern: "疾病分期（stage）与严重度分级", note: "如脓毒症的 SIRS→sepsis→septic shock" },
        { tcm: "三阳（邪实）", modern: "炎症反应活跃期，器官功能尚代偿", note: "CRP/PCT 高，器官功能尚可" },
        { tcm: "三阴（正虚）", modern: "器官储备耗竭、代偿失调", note: "乳酸升高、少尿、意识改变" },
      ],
      evidence: "B",
      evidenceText: "分期思想与疾病进展模型同构；六经与具体疾病的线性对应不成立。",
      refs: [
        { type: "classic", text: "张仲景《伤寒论》（约 205 年）" },
        { type: "classic", text: "柯琴《伤寒来苏集》（1669）" },
        { type: "modern", text: "Singer M, et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA, 2016, 315(8): 801–810." },
      ],
    },
    {
      id: "taiyang",
      layer: "L4",
      group: "六经辨证",
      name: "太阳病",
      pinyin: "Tài Yáng Bìng",
      alias: ["表证", "太阳伤寒", "太阳中风"],
      summary: "外邪初袭肌表，营卫不和。",
      tcm:
        "太阳病为外感初期，邪在肌表。太阳伤寒见恶寒发热、无汗而喘、身疼、脉浮紧（麻黄汤证）；太阳中风见发热汗出、恶风、脉浮缓（桂枝汤证）。",
      modern:
        "对应**上呼吸道/黏膜早期感染与固有免疫启动**：局部血管扩张、黏膜充血、炎症介质释放（缓激肽、前列腺素）、体温调定点上移致恶寒。麻黄汤中的麻黄碱具拟交感作用，桂枝具扩张血管与轻度发汗作用，与现代解热镇痛—减充血思路相通。",
      mappings: [
        { tcm: "恶寒发热", modern: "致热原使调定点上移，产热增加伴寒战", note: "PGE2 介导" },
        { tcm: "无汗身疼", modern: "交感兴奋、肌肉酸痛（前列腺素致痛觉敏化）", note: "NSAIDs 可缓解" },
        { tcm: "脉浮", modern: "外周血管扩张、心输出量增加", note: "血流动力学改变" },
        { tcm: "桂枝汤调和营卫", modern: "轻度发汗与血管调节（类比）", note: "证据等级 C" },
      ],
      evidence: "B",
      evidenceText: "早期感染的病理生理与太阳病描述高度吻合；方剂机制部分明确。",
      refs: [
        { type: "classic", text: "《伤寒论·辨太阳病脉证并治》" },
        { type: "modern", text: "Eccles R. Understanding the symptoms of the common cold. Lancet Infectious Diseases, 2005, 5(11): 718–725." },
      ],
    },
    {
      id: "yangming",
      layer: "L4",
      group: "六经辨证",
      name: "阳明病",
      pinyin: "Yáng Míng Bìng",
      alias: ["胃家实", "阳明经证", "阳明腑证"],
      summary: "邪入里化热，里热炽盛或腑实。",
      tcm:
        "阳明病为邪入胃肠、里热炽盛。阳明经证见大热、大汗、大渴、脉洪大（白虎汤证）；阳明腑证见潮热、腹满硬痛、便秘、谵语（承气汤证）。",
      modern:
        "对应**全身炎症反应综合征（SIRS）伴胃肠功能紊乱**：高热、代谢亢进、脱水（大汗大渴）、肠麻痹（腑实）、毒素蓄积致意识改变。与脓毒症的高动力期及麻痹性肠梗阻高度对应。",
      mappings: [
        { tcm: "大热大汗大渴", modern: "高热、高代谢、脱水与容量不足", note: "SIRS 的高动力期" },
        { tcm: "脉洪大", modern: "心输出量增加、外周阻力下降（暖休克）", note: "血流动力学" },
        { tcm: "腹满便秘", modern: "麻痹性肠梗阻、肠道菌群移位", note: "肠鸣音、腹部影像" },
        { tcm: "谵语", modern: "脓毒症相关性脑病", note: "CAM-ICU 评估" },
      ],
      evidence: "B",
      evidenceText: "与 SIRS/脓毒症高动力期高度同构；「阳明」不等于某一具体疾病。",
      refs: [
        { type: "classic", text: "《伤寒论·辨阳明病脉证并治》" },
        { type: "modern", text: "Singer M, et al. Sepsis-3. JAMA, 2016, 315(8): 801–810." },
      ],
    },
    {
      id: "shaoyang",
      layer: "L4",
      group: "六经辨证",
      name: "少阳病",
      pinyin: "Shào Yáng Bìng",
      alias: ["半表半里", "柴胡证"],
      summary: "邪在半表半里，枢机不利。",
      tcm:
        "少阳病为邪居半表半里、枢机不利。症见寒热往来、胸胁苦满、默默不欲饮食、心烦喜呕、口苦咽干目眩、脉弦（小柴胡汤证）。",
      modern:
        "对应**迁延性/局限性炎症与免疫—内分泌调节失衡**：低热或体温波动（寒热往来）、功能性消化不良与恶心、自主神经功能紊乱、情绪与睡眠改变。常见于感染后迁延期、亚急性甲状腺炎、功能性胃肠病。",
      mappings: [
        { tcm: "寒热往来", modern: "体温调定点反复波动（如亚急性甲状腺炎、疟疾）", note: "需排除感染性疾病" },
        { tcm: "胸胁苦满", modern: "胸壁肌筋膜紧张与功能性躯体症状", note: "需排除肝胆疾病" },
        { tcm: "心烦喜呕", modern: "自主神经失调致恶心、焦虑", note: "功能性消化不良" },
        { tcm: "脉弦", modern: "交感张力增高、外周阻力增加", note: "HRV" },
      ],
      evidence: "B",
      evidenceText: "与迁延性炎症及功能性疾病表型对应；「半表半里」无解剖对应。",
      refs: [
        { type: "classic", text: "《伤寒论·辨少阳病脉证并治》" },
        { type: "modern", text: "Stasiak CE, et al. Subacute thyroiditis: a review. Endocrine Practice, 2021." },
      ],
    },
    {
      id: "taiyin",
      layer: "L4",
      group: "六经辨证",
      name: "太阴病",
      pinyin: "Tài Yīn Bìng",
      alias: ["脾虚寒", "中阳不足"],
      summary: "脾胃虚寒，运化失职。",
      tcm:
        "太阴病为脾阳虚弱、寒湿内盛。症见腹满而吐、食不下、自利益甚、时腹自痛、口不渴、舌淡苔白、脉缓弱（理中汤证）。",
      modern:
        "对应**消化吸收功能低下与胃肠动力紊乱**：胃排空延迟、肠传输改变、吸收不良、低代谢与营养不良倾向。常见于慢性胃肠病、术后恢复期、老年衰弱。",
      mappings: [
        { tcm: "腹满而吐", modern: "胃排空延迟、胃轻瘫", note: "胃电图、排空试验" },
        { tcm: "自利益甚", modern: "肠传输加快、吸收不良性腹泻", note: "粪便检查、乳糖氢呼气" },
        { tcm: "时腹自痛", modern: "内脏高敏感与肠痉挛", note: "罗马 IV" },
        { tcm: "口不渴", modern: "低代谢与容量状态尚可", note: "鉴别脱水" },
      ],
      evidence: "B",
      evidenceText: "消化功能低下对应明确；「太阴」为证候群。",
      refs: [
        { type: "classic", text: "《伤寒论·辨太阴病脉证并治》" },
        { type: "classic", text: "李杲《脾胃论》（1249）" },
      ],
    },
    {
      id: "shaoyin",
      layer: "L4",
      group: "六经辨证",
      name: "少阴病",
      pinyin: "Shào Yīn Bìng",
      alias: ["心肾阳虚", "少阴寒化", "少阴热化"],
      summary: "心肾虚衰，全身功能低下。",
      tcm:
        "少阴病为心肾虚衰。寒化证见无热恶寒、但欲寐、四肢厥逆、下利清谷、脉微细（四逆汤证）；热化证见心烦不得卧、咽干口燥、舌红少苔、脉细数（黄连阿胶汤证）。",
      modern:
        "寒化证对应**循环衰竭前期/低灌注**：低血压、末梢循环差、意识水平下降（但欲寐）、少尿、代谢性酸中毒——即休克早期。热化证对应**交感兴奋伴体液不足**：心动过速、焦虑失眠、口干。",
      mappings: [
        { tcm: "但欲寐", modern: "意识水平下降、脑灌注不足", note: "GCS、乳酸" },
        { tcm: "四肢厥逆", modern: "末梢灌注不足、外周血管收缩", note: "毛细血管再充盈时间" },
        { tcm: "脉微细", modern: "每搏输出量下降、脉压变小", note: "有创/无创血流动力学" },
        { tcm: "下利清谷", modern: "肠道缺血致吸收障碍", note: "肠屏障标志物" },
        { tcm: "热化证", modern: "交感兴奋、容量不足、失眠", note: "心率、血压、口渴" },
      ],
      evidence: "B",
      evidenceText: "与休克早期及高交感状态的对应较为清晰；「少阴」仍需结合具体病因。",
      refs: [
        { type: "classic", text: "《伤寒论·辨少阴病脉证并治》" },
        { type: "modern", text: "Vincent JL, De Backer D. Circulatory shock. New England Journal of Medicine, 2013, 369(18): 1726–1734." },
      ],
    },
    {
      id: "jueyin",
      layer: "L4",
      group: "六经辨证",
      name: "厥阴病",
      pinyin: "Jué Yīn Bìng",
      alias: ["阴阳错杂", "厥热胜复"],
      summary: "阴阳错杂、寒热并见，病程末期。",
      tcm:
        "厥阴病为六经传变之末，阴阳错杂、寒热并见。症见消渴、气上撞心、心中疼热、饥不欲食、食则吐蛔、厥热胜复、下利不止（乌梅丸证）。",
      modern:
        "对应**多器官功能不全（MODS）伴内环境紊乱**：代谢—循环—神经调控相互失代偿，出现高血糖/电解质紊乱（消渴）、心肌受累（心中疼热）、胃肠功能衰竭（饥不欲食、下利）、意识改变。是危重症终末期的典型图景。",
      mappings: [
        { tcm: "消渴", modern: "应激性高血糖与电解质紊乱", note: "血糖、电解质" },
        { tcm: "气上撞心", modern: "心悸、反流与自主神经失调", note: "心电图、反流监测" },
        { tcm: "厥热胜复", modern: "体温与循环交替失代偿", note: "血流动力学波动" },
        { tcm: "下利不止", modern: "肠功能衰竭、菌群移位", note: "肠屏障标志物" },
      ],
      evidence: "C",
      evidenceText: "与 MODS 终末期图景的类比成立，但厥阴病涵盖范围广，缺少可验证的生物学定义。",
      refs: [
        { type: "classic", text: "《伤寒论·辨厥阴病脉证并治》" },
        { type: "modern", text: "Singer M, et al. Sepsis-3. JAMA, 2016, 315(8): 801–810." },
      ],
    },
    {
      id: "weiqi-yingxue",
      layer: "L4",
      group: "卫气营血辨证",
      name: "卫气营血辨证",
      pinyin: "Wèi Qì Yíng Xuè Biàn Zhèng",
      alias: ["温病四层", "叶天士辨证"],
      summary: "温热病由浅入深的四个传变层次。",
      tcm:
        "卫气营血辨证由叶天士在《温热论》中创立，用于温病（外感热病）的传变分析。卫分→气分→营分→血分，标志病邪由表入里、由浅入深、由轻转重。治疗原则：在卫汗之可也，到气才可清气，入营犹可透热转气，入血就恐耗血动血，直须凉血散血。",
      modern:
        "对应**感染性疾病的病程分层与严重度分级**：卫分≈黏膜局部感染；气分≈全身炎症反应（SIRS）；营分≈炎症累及中枢与微循环；血分≈DIC 与 MODS。四层与脓毒症进展、病毒性肺炎分期高度同构。",
      mappings: [
        { tcm: "卫分", modern: "局部黏膜感染、固有免疫启动", note: "上呼吸道感染早期" },
        { tcm: "气分", modern: "全身炎症反应（SIRS）、高热高代谢", note: "CRP、PCT、IL-6" },
        { tcm: "营分", modern: "中枢与微循环受累、凝血激活前状态", note: "意识评分、乳酸、D-二聚体" },
        { tcm: "血分", modern: "DIC、出血倾向、MODS", note: "血小板、PT/APTT、器官功能评分" },
        { tcm: "透热转气", modern: "阻断炎症级联、防止器官损伤（治疗策略类比）", note: "证据等级 C" },
      ],
      evidence: "B",
      evidenceText: "四层与感染病程分层高度同构，是温病学最具现代解释力的框架之一；具体对应需结合病原与宿主。",
      refs: [
        { type: "classic", text: "叶天士《温热论》（1746）" },
        { type: "classic", text: "吴鞠通《温病条辨》（1798）" },
        { type: "classic", text: "吴又可《温疫论》（1642）" },
        { type: "modern", text: "Singer M, et al. Sepsis-3. JAMA, 2016, 315(8): 801–810." },
      ],
    },
    {
      id: "weifen",
      layer: "L4",
      group: "卫气营血辨证",
      name: "卫分证",
      pinyin: "Wèi Fēn Zhèng",
      alias: ["邪在卫表"],
      summary: "温病初起，邪袭肺卫。",
      tcm:
        "卫分证为温病初起，邪在肺卫。症见发热、微恶风寒、头痛、少汗、咳嗽、口微渴、咽痛、舌边尖红、苔薄白、脉浮数（银翘散证）。",
      modern:
        "对应**上呼吸道病毒感染早期**：黏膜局部炎症、血管扩张、固有免疫启动，全身反应轻微。炎症标志物轻度升高或正常，病毒载量上升期。",
      mappings: [
        { tcm: "发热微恶风寒", modern: "致热原与调定点上移，尚处早期", note: "PGE2" },
        { tcm: "咳嗽咽痛", modern: "上呼吸道黏膜炎症与咳嗽反射敏化", note: "咽拭子病原检测" },
        { tcm: "舌边尖红", modern: "舌黏膜血流增加（早期充血）", note: "舌象与微循环" },
        { tcm: "脉浮数", modern: "心输出量增加、外周血管扩张", note: "心率、脉压" },
      ],
      evidence: "B",
      evidenceText: "与上呼吸道感染早期高度吻合；「卫分」为证候层。",
      refs: [
        { type: "classic", text: "叶天士《温热论》" },
        { type: "modern", text: "Eccles R. Understanding the symptoms of the common cold. Lancet Infectious Diseases, 2005, 5(11): 718–725." },
      ],
    },
    {
      id: "qifen",
      layer: "L4",
      group: "卫气营血辨证",
      name: "气分证",
      pinyin: "Qì Fēn Zhèng",
      alias: ["热在气分", "阳明热盛"],
      summary: "邪入气分，正邪剧争，里热炽盛。",
      tcm:
        "气分证为温病邪已入里，正邪剧争。症见壮热、不恶寒反恶热、大汗、大渴喜冷饮、心烦、尿赤、舌红苔黄、脉洪大（白虎汤证）；或见腑实便秘（承气汤证）。",
      modern:
        "对应**全身炎症反应（SIRS）高动力期**：高热、代谢率显著升高、心率增快、心输出量增加、外周阻力下降、脱水。CRP、PCT、IL-6 显著升高，但器官功能尚代偿。",
      mappings: [
        { tcm: "壮热不恶寒", modern: "高热且调定点已稳定在上移水平", note: "体温曲线" },
        { tcm: "大汗大渴", modern: "不显性失水增加、容量不足", note: "出入量、血钠" },
        { tcm: "脉洪大", modern: "高动力循环：心输出量高、外周阻力低", note: "血流动力学" },
        { tcm: "舌红苔黄", modern: "舌黏膜充血、上皮角化与菌群改变", note: "舌象图像分析" },
      ],
      evidence: "B",
      evidenceText: "与 SIRS 高动力期对应度高；需与具体感染灶结合。",
      refs: [
        { type: "classic", text: "叶天士《温热论》、吴鞠通《温病条辨》" },
        { type: "modern", text: "Singer M, et al. Sepsis-3. JAMA, 2016, 315(8): 801–810." },
      ],
    },
    {
      id: "yingfen",
      layer: "L4",
      group: "卫气营血辨证",
      name: "营分证",
      pinyin: "Yíng Fēn Zhèng",
      alias: ["热入营分", "营热"],
      summary: "热灼营阴，扰及心神。",
      tcm:
        "营分证为热邪深入营分，灼伤营阴、扰乱心神。症见身热夜甚、心烦不寐、时有谵语、斑疹隐隐、口干但不甚渴饮、舌绛少苔、脉细数（清营汤证）。",
      modern:
        "对应**炎症累及中枢与微循环**：夜间高热、意识改变（谵妄）、睡眠—觉醒紊乱、微循环障碍、凝血激活前状态。乳酸可能轻度升高，D-二聚体上升，器官功能开始受累。",
      mappings: [
        { tcm: "身热夜甚", modern: "夜间皮质醇低谷与炎症因子节律致体温升高", note: "体温昼夜节律" },
        { tcm: "谵语心烦", modern: "脓毒症相关性脑病早期、谵妄", note: "CAM-ICU" },
        { tcm: "斑疹隐隐", modern: "微血管渗漏与皮下出血点", note: "皮肤检查、D-二聚体" },
        { tcm: "舌绛", modern: "舌微循环淤滞、舌乳头萎缩", note: "舌象" },
        { tcm: "口干不欲饮", modern: "容量尚可但分布异常（第三间隙）", note: "容量评估" },
      ],
      evidence: "B",
      evidenceText: "与脓毒症脑病及微循环障碍对应较好；「营分」边界依赖临床判断。",
      refs: [
        { type: "classic", text: "叶天士《温热论》、吴鞠通《温病条辨·清营汤》" },
        { type: "modern", text: "Sonneville R, et al. Understanding brain dysfunction in sepsis. Annals of Intensive Care, 2013, 3: 15." },
      ],
    },
    {
      id: "xuefen",
      layer: "L4",
      group: "卫气营血辨证",
      name: "血分证",
      pinyin: "Xuè Fēn Zhèng",
      alias: ["热入血分", "耗血动血"],
      summary: "热盛动血，耗血伤阴，病位最深。",
      tcm:
        "血分证为温病最深阶段，热盛动血、耗血伤阴。症见斑疹显露、色紫黑、吐血、衄血、便血、尿血、抽搐、角弓反张、舌深绛、脉细数（犀角地黄汤证）。",
      modern:
        "对应**弥散性血管内凝血（DIC）与多器官功能障碍（MODS）**：血小板与凝血因子消耗致出血，微血栓致器官缺血，出现意识改变、抽搐、少尿、呼吸衰竭。是危重症的终末阶段。",
      mappings: [
        { tcm: "斑疹紫黑", modern: "皮下出血、微血栓形成（暴发性紫癜）", note: "皮肤活检、D-二聚体" },
        { tcm: "吐血便血", modern: "凝血因子消耗性出血（DIC）", note: "血小板、PT/APTT、纤维蛋白原" },
        { tcm: "抽搐角弓反张", modern: "中毒性脑病、脑水肿、癫痫发作", note: "脑电图、影像" },
        { tcm: "舌深绛", modern: "严重微循环淤滞与缺氧", note: "舌象、乳酸" },
        { tcm: "耗血伤阴", modern: "凝血因子与白蛋白消耗、内环境紊乱", note: "凝血与生化全套" },
      ],
      evidence: "A",
      evidenceText: "与 DIC/MODS 的病理生理对应非常清晰，实验室指标完整可测。",
      refs: [
        { type: "classic", text: "叶天士《温热论》、吴鞠通《温病条辨》" },
        { type: "modern", text: "Levi M, van der Poll T. Coagulation and sepsis. Thrombosis Research, 2017, 149: 38–44." },
      ],
    },

    /* ===================== L5 ===================== */
    {
      id: "jingluo",
      layer: "L5",
      group: "经络腧穴",
      name: "经络",
      pinyin: "Jīng Luò",
      alias: ["经脉", "络脉", "经络系统"],
      summary: "运行气血、联络脏腑、沟通内外的通道网络。",
      tcm:
        "经络是运行气血、联络脏腑肢节、沟通上下内外的通路系统。经为主干（十二正经、奇经八脉），络为分支（十五络脉、孙络）。《灵枢·海论》：『夫十二经脉者，内属于腑脏，外络于肢节。』",
      modern:
        "经络无单一解剖对应。目前主要假说：①**结缔组织平面假说**——经络走行与肌间筋膜、结缔组织分隔平面高度重合（Langevin 等，2002）；②**神经—血管束假说**——经穴多位于神经血管束穿出筋膜处；③**间质—液体通道假说**——与组织液流动、淋巴回流相关。尚无一种假说能完整解释全部经络现象。",
      mappings: [
        { tcm: "经络为通道", modern: "肌间筋膜平面与结缔组织分隔（Langevin 假说）", note: "超声显像可见针刺时的结缔组织缠绕" },
        { tcm: "经络联络脏腑", modern: "皮节—内脏反射（Head 带）与自主神经通路", note: "牵涉痛的皮节分布" },
        { tcm: "经络行气血", modern: "组织液流动、淋巴回流与微循环", note: "间质液体动力学" },
        { tcm: "循经感传", modern: "轴突反射与中枢敏化的复合现象", note: "机制尚存争议" },
      ],
      evidence: "C",
      evidenceText: "结缔组织与神经血管束的相关性有解剖学研究支持；但经络作为完整功能系统的独立存在尚无共识。",
      refs: [
        { type: "classic", text: "《灵枢·经脉》《灵枢·海论》" },
        { type: "classic", text: "皇甫谧《针灸甲乙经》（282）" },
        { type: "modern", text: "Langevin HM, Yandow JA. Relationship of acupuncture points and meridians to connective tissue planes. The Anatomical Record, 2002, 269(6): 257–265." },
      ],
    },
    {
      id: "shier-jing",
      layer: "L5",
      group: "经络腧穴",
      name: "十二正经",
      pinyin: "Shí Èr Zhèng Jīng",
      alias: ["十二经脉", "手足三阴三阳经"],
      summary: "手足三阴三阳十二条主干经脉。",
      tcm:
        "十二正经包括手三阴（肺、心包、心）、手三阳（大肠、三焦、小肠）、足三阳（胃、胆、膀胱）、足三阴（脾、肝、肾）。它们首尾相贯、如环无端，与脏腑一一属络，是气血运行的主干。",
      modern:
        "十二经的走向与**神经节段支配、肌筋膜经线（myofascial meridians）** 存在部分重叠。例如手三阴经沿上肢前侧屈肌群分布，与正中神经/尺神经支配区相关；足三阳经沿下肢后外侧，与坐骨神经走行相关。解剖学重合是相关性而非因果证明。",
      mappings: [
        { tcm: "手三阴经", modern: "上肢前侧屈肌群与正中/尺神经支配区", note: "解剖重叠" },
        { tcm: "足三阳经", modern: "下肢后外侧伸肌群与坐骨神经走行", note: "解剖重叠" },
        { tcm: "经脉属络脏腑", modern: "皮节—内脏反射与自主神经节段", note: "Head 带" },
        { tcm: "经脉流注次序", modern: "循环系统的一体化血流（类比）", note: "证据等级 C" },
      ],
      evidence: "C",
      evidenceText: "与神经节段、肌筋膜经线存在部分解剖重叠，但十二经体系不能等同于任一套现代解剖系统。",
      refs: [
        { type: "classic", text: "《灵枢·经脉》" },
        { type: "classic", text: "《针灸大成》（杨继洲，1601）" },
        { type: "modern", text: "Myers TW. Anatomy Trains: Myofascial Meridians. 4th ed. Elsevier, 2020." },
      ],
    },
    {
      id: "shuxue",
      layer: "L5",
      group: "经络腧穴",
      name: "腧穴",
      pinyin: "Shù Xué",
      alias: ["穴位", "经穴", "孔穴"],
      summary: "经络气血输注于体表的特定部位。",
      tcm:
        "腧穴是人体脏腑经络之气输注于体表的特殊部位，分经穴（361 个）、奇穴、阿是穴。腧穴有近治、远治与特殊作用，是针灸、推拿的施术部位。",
      modern:
        "腧穴的解剖学特征：**神经血管束穿出点、筋膜交界处、肥大细胞与结缔组织密集区**。组织学研究发现穴位处肥大细胞、神经末梢、小血管密度较高；针刺可触发局部腺苷释放、肥大细胞脱颗粒与轴突反射。WHO 于 2008 年发布标准经穴定位，为研究提供统一坐标。",
      mappings: [
        { tcm: "腧穴为气血输注处", modern: "神经血管束穿出筋膜点的高密度区", note: "解剖学与超声研究" },
        { tcm: "腧穴—肥大细胞", modern: "穴位处肥大细胞密度较高，针刺致脱颗粒", note: "组织学研究" },
        { tcm: "针刺镇痛", modern: "局部腺苷 A1 受体激活（小鼠模型）", note: "Nature Neuroscience 2010" },
        { tcm: "经穴定位", modern: "WHO 标准经穴定位（2008）", note: "国际标准化" },
      ],
      evidence: "B",
      evidenceText: "穴位局部组织学差异与腺苷机制有实验支持；特异性仍存学术争议。",
      refs: [
        { type: "classic", text: "《灵枢·九针十二原》《针灸甲乙经》" },
        { type: "modern", text: "WHO. Standard Acupuncture Point Locations in the Western Pacific Region. 2008." },
        { type: "modern", text: "Goldman N, et al. Adenosine A1 receptors mediate local anti-nociceptive effects of acupuncture. Nature Neuroscience, 2010, 13(7): 883–888." },
      ],
    },
    {
      id: "deqi",
      layer: "L5",
      group: "经络腧穴",
      name: "得气",
      pinyin: "Dé Qì",
      alias: ["针感", "气至"],
      summary: "针刺后患者酸麻重胀、医者沉紧的感应。",
      tcm:
        "得气指针刺入穴位后，患者出现酸、麻、胀、重等感觉，医者针下感到沉紧。《标幽赋》：『气速至而速效，气迟至而不治。』得气被视为疗效的关键前提。",
      modern:
        "得气对应**针刺引起的躯体感觉与局部组织反应**：Aδ 与 C 纤维激活、局部肌肉抽动（针刺肌电活动）、结缔组织缠绕与成纤维细胞变形、局部血流增加。fMRI 研究显示得气强度与躯体感觉皮层及岛叶激活相关。",
      mappings: [
        { tcm: "酸麻胀重", modern: "Aδ/C 纤维激活与躯体感觉皮层反应", note: "fMRI、神经电生理" },
        { tcm: "医者针下沉紧", modern: "结缔组织缠绕针体与肌肉抽动", note: "超声显像可见" },
        { tcm: "气至有效", modern: "针感强度与镇痛效应的剂量—反应关系", note: "临床试验的针感量表" },
      ],
      evidence: "B",
      evidenceText: "针感的神经生理基础较清楚；「得气决定疗效」的因果关系仍待高质量试验验证。",
      refs: [
        { type: "classic", text: "窦汉卿《标幽赋》（金元）" },
        { type: "modern", text: "Langevin HM, et al. Mechanical signaling through connective tissue: a mechanism for the therapeutic effect of acupuncture. FASEB Journal, 2001, 15(12): 2275–2282." },
        { type: "modern", text: "Hui KK, et al. Acupuncture modulates the limbic system and subcortical gray structures. Human Brain Mapping, 2000." },
      ],
    },
    {
      id: "zhenjiu",
      layer: "L5",
      group: "经络腧穴",
      name: "针灸",
      pinyin: "Zhēn Jiǔ",
      alias: ["针刺", "艾灸", "acupuncture"],
      summary: "以针刺或艾灸刺激腧穴的治疗方法。",
      tcm:
        "针灸包括针刺与艾灸，通过刺激腧穴、疏通经络、调和气血以治疗疾病。《灵枢·九针十二原》：『余欲勿使被毒药，无用砭石，欲以微针通其经脉，调其血气。』",
      modern:
        "现代研究识别的机制包括：**局部腺苷释放（A1 受体）**、内源性阿片肽释放、迷走—肾上腺轴激活、局部血流增加、炎症调节。临床证据方面，针灸对慢性疼痛、化疗致恶心呕吐、紧张性头痛等有中等质量证据支持（如 Vickers 等 2018 年个体患者数据 meta 分析）。",
      mappings: [
        { tcm: "针刺镇痛", modern: "腺苷 A1 受体激活 + 内源性阿片肽释放", note: "动物模型与人体试验" },
        { tcm: "艾灸温通", modern: "局部热疗致血管扩张、热休克蛋白表达", note: "温热效应" },
        { tcm: "针灸抗炎", modern: "迷走神经—肾上腺轴（胆碱能抗炎通路）", note: "电针研究" },
        { tcm: "临床适应症", modern: "慢性疼痛、化疗恶心呕吐、紧张性头痛", note: "Vickers 2018 IPD meta 分析" },
      ],
      evidence: "A",
      evidenceText: "多项系统评价支持针灸对特定适应症有效；机制研究明确但特异性仍存争议。",
      refs: [
        { type: "classic", text: "《灵枢·九针十二原》《针灸大成》" },
        { type: "modern", text: "Vickers AJ, et al. Acupuncture for chronic pain: update of an individual patient data meta-analysis. Journal of Pain, 2018, 19(5): 455–474." },
        { type: "modern", text: "Goldman N, et al. Nature Neuroscience, 2010, 13(7): 883–888." },
      ],
    },
    {
      id: "maizhen",
      layer: "L5",
      group: "诊法",
      name: "脉诊",
      pinyin: "Mài Zhěn",
      alias: ["切脉", "寸口诊法", "脉象"],
      summary: "按寸口脉象判断气血盛衰与病位病性。",
      tcm:
        "脉诊为四诊之一，切按寸口桡动脉，以浮沉、迟数、虚实、滑涩等辨别脉象。王叔和《脉经》确立二十四脉，李时珍《濒湖脉学》归纳二十七脉。脉象反映气血盛衰、脏腑功能与病邪性质。",
      modern:
        "脉象可对应**桡动脉脉搏波的血流动力学特征**：脉率（迟数）、脉搏波传导速度与反射波（弦紧）、每搏输出量与脉压（虚实）、血液黏度（涩）。现代脉诊仪以压力传感器采集脉搏波形，提取时域/频域特征。但传统 28 脉的临床判读依赖于医师经验，客观化仍在研究中。",
      mappings: [
        { tcm: "迟脉/数脉", modern: "心率减慢/增快（<60 或 >90 次/分）", note: "脉率可精确测量" },
        { tcm: "弦脉", modern: "外周阻力增高、脉搏波反射增强", note: "PWV、 augmentation index" },
        { tcm: "滑脉", modern: "每搏输出量增加、外周阻力降低", note: "妊娠期滑脉的血流动力学解释" },
        { tcm: "涩脉", modern: "血液黏度增高、脉搏波形不规则", note: "全血黏度" },
        { tcm: "浮脉/沉脉", modern: "血管充盈度与按压力的波形变化", note: "压力传感器可量化" },
      ],
      evidence: "B",
      evidenceText: "单脉象的血流动力学对应可测；28 脉体系的整体判读尚缺乏统一标准。",
      refs: [
        { type: "classic", text: "王叔和《脉经》（3 世纪）" },
        { type: "classic", text: "李时珍《濒湖脉学》（1564）" },
        { type: "modern", text: "O'Rourke MF, et al. McDonald's Blood Flow in Arteries. 6th ed. CRC Press, 2011." },
      ],
    },
    {
      id: "shezhen",
      layer: "L5",
      group: "诊法",
      name: "舌诊",
      pinyin: "Shé Zhěn",
      alias: ["望舌", "舌象"],
      summary: "观察舌质与舌苔判断脏腑气血与病邪性质。",
      tcm:
        "舌诊为望诊重要内容。舌质反映脏腑气血盛衰（淡白为虚、红绛为热、紫暗为瘀），舌苔反映病邪性质与胃气（薄白正常、黄腻为湿热、剥苔为阴虚）。舌为心之苗，舌面分属脏腑。",
      modern:
        "舌象对应**舌黏膜微循环、上皮更新与口腔菌群**：舌质颜色反映血红蛋白与血流灌注；舌苔由脱落上皮、唾液、细菌与食物残渣构成，其厚薄与口腔菌群结构、唾液流率相关。已有研究以图像分析量化舌色、苔厚与裂纹，并关联代谢指标。",
      mappings: [
        { tcm: "舌淡白", modern: "贫血、末梢灌注不足", note: "血红蛋白" },
        { tcm: "舌红绛", modern: "黏膜充血、炎症活跃、脱水", note: "舌血流与炎症" },
        { tcm: "舌紫暗", modern: "微循环淤滞、血氧饱和度下降", note: "舌微循环检测" },
        { tcm: "苔黄腻", modern: "口腔菌群改变、炎症与消化功能紊乱", note: "舌苔微生物组" },
        { tcm: "剥苔/少苔", modern: "舌乳头萎缩、唾液分泌减少、营养缺乏", note: "B 族维生素、铁" },
      ],
      evidence: "B",
      evidenceText: "舌色与贫血/炎症的关联有研究支持；舌苔与菌群的研究正在兴起。",
      refs: [
        { type: "classic", text: "《敖氏伤寒金镜录》（1341，现存最早舌诊专著）" },
        { type: "classic", text: "叶天士《温热论》（舌诊论述）" },
        { type: "modern", text: "Ye J, et al. Tongue coating microbiome as a potential biomarker. Journal of Oral Microbiology, 2020." },
      ],
    },
  ],
};
