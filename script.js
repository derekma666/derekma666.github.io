const translations = {
  en: {
    skipLink: "Skip to content",
    brandLab: "Stochastic Risk Intelligence Lab",
    navProfile: "Profile", navResearch: "Research", navImpact: "Impact", navPeople: "People", navContact: "Contact",
    heroEyebrow: "Assistant Professor · University of Warwick",
    heroLine1: "From", heroLine2: "uncertainty to", heroLine3: "risk intelligence.",
    heroTagline: "Model uncertainty. Interpret evidence. Design decisions.",
    heroLede: "I develop AI-informed stochastic models for uncertain physical, environmental, energy, and financial systems—turning sparse and complex data into interpretable, decision-ready risk insight.",
    exploreResearch: "Explore the research", startConversation: "Start a conversation",
    profileKicker: "Research identity",
    profileName: "Dr Derek G. Ma",
    profileRole: "Assistant Professor in Engineering<br>University of Warwick",
    credential1Title: "Assistant Professor", credential1Affiliation: "University of Warwick, United Kingdom",
    credential3Title: "Data Scientist", credential3Affiliation: "Machine Learning",
    credential4Title: "Degree Apprenticeship Tutor", credential4Affiliation: "CEDA Programme",
    tagStochastic: "Stochastic modelling", tagRisk: "Risk analytics",
    profileNote: "At the interface of artificial intelligence, uncertainty quantification, and decision science.",
    signature1Title: "Model", signature1Text: "randomness as structure",
    signature2Title: "Interpret", signature2Text: "evidence through inference",
    signature3Title: "Design", signature3Text: "decisions under risk",
    researchEyebrow: "Three connected research branches",
    researchTitle: "One mathematical agenda, from <span class=\"gradient-emphasis\">uncertain evidence</span> to <span class=\"gradient-emphasis\">risk-aware design.</span>",
    researchIntro: "Across <strong class=\"copy-emphasis\">probability, stochastic processes, inverse problems, scientific machine learning, and decision analysis</strong>, the programme asks one question: <span class=\"marker-highlight\">how can mathematical structure turn incomplete evidence into reliable action?</span>",
    branch1Label: "Stochastic systems",
    branch1Title: "AI-informed random fields & risk assessment",
    branch1Text: "Learning spatial and temporal variability from sparse observations, simulations, and prior knowledge—then carrying that uncertainty through to system-level risk.",
    branch1Item1: "Multivariate random fields", branch1Item2: "Bayesian learning & copulas", branch1Item3: "Uncertainty propagation",
    branch2Label: "Visual intelligence",
    branch2Title: "Visual AI & computer vision for geomaterials",
    branch2Text: "Extracting risk-relevant structure from images and physical processes, linking perception models with mechanics for explainable hazard intelligence.",
    branch2Item1: "Segmentation & representation", branch2Item2: "Physics-informed AI", branch2Item3: "Catastrophe & geohazard risk",
    branch3Label: "Decision intelligence",
    branch3Title: "Energy risk pricing & decision-making",
    branch3Text: "Developing models for pricing, tail events, and risk transfer where market uncertainty, physical exposure, and strategic decisions interact.",
    branch3Item1: "Risk pricing & transfer", branch3Item2: "Tail-event modelling", branch3Item3: "AI-assisted decisions",
    impactEyebrow: "Research in practice",
    impactTitle: "<span class=\"gradient-emphasis on-dark\">Mathematical models</span>, connected to real decisions.",
    impactText: "The work spans <strong class=\"light-emphasis\">fundamental methods</strong>, engineering applications, policy-facing risk, and <strong class=\"light-emphasis\">new financial mechanisms for uncertainty</strong>.",
    viewFullProfile: "View full Warwick profile",
    impact1Title: "Royal Academy of Engineering", impact1Text: "Recognised through the UK Global Talent route.",
    impact2Title: "Policy advisory", impact2Text: "Contributed to the Welsh Government Coal Tips Safety Taskforce.",
    impact3Title: "International collaboration", impact3Text: "Corresponding member of ISSMGE Technical Committee 309.",
    impact4Title: "Research-led teaching", impact4Text: "Engineering Mathematics, applied modelling, and student research supervision.",
    teachingEyebrow: "Teaching & supervision", teachingTitle: "From formulas to <span class=\"gradient-emphasis\">model-based reasoning.</span>",
    teachingText: "I teach <strong class=\"copy-emphasis\">engineering mathematics</strong> and supervise projects across <span class=\"marker-highlight\">uncertainty modelling, AI for engineering, risk analysis, and computational decision-making.</span>",
    teachingArea1: "Engineering Mathematics", teachingArea2: "Mathematics Bridging Programme", teachingArea3: "Individual Projects", teachingArea4: "AI for Risk Analysis",
    teachingEvidenceEyebrow: "Evidence of teaching", teachingEvidenceTitle: "Engineering mathematics, <span class=\"gradient-emphasis\">in numbers.</span>",
    teachingEvidenceText: "Teaching satisfaction in Engineering Mathematics, from Warwick School of Engineering student surveys.",
    teachingTableCaption: "Teaching satisfaction by year",
    teachingYear: "Academic year",
    teachingPositive: "36/39 positive satisfaction answers across four surveys (92%).",
    teachingSurveySource: "Source: Warwick School of Engineering student surveys, 2024/25–2025/26. Positive means Agree or Strongly Agree; n is the number of answers to this item. Small samples.",
    teachingSnapshot: "2025/26 survey snapshot",
    teachingMetric1Title: "Teaching satisfaction",
    teachingMetric1Text: "ES1A1 and ES1A8",
    teachingMetric2Title: "Subject engagement",
    teachingMetric2Text: "ES1A1",
    teachingMetric3Title: "Learning support",
    teachingMetric3Text: "ES1A1 and ES1A8",
    teachingVoices: "In students’ words",
    teachingQuote1: "“Derek teaches an example and then allows the class to engage… providing support where required.”",
    teachingQuote2: "“Brilliant notes… and clear structure. Derek is brilliant with being consistent in every lesson’s delivery.”",
    teachingQuote3: "“Derek did a great job lecturing this, engaging and made sure everyone was following.”",
    teachingQuote1Source: "Anonymous student feedback · ES1A1 · 2025/26",
    teachingQuote2Source: "Anonymous student feedback · ES1A8 · 2025/26",
    teachingQuote3Source: "Anonymous student feedback · ES1A8 · 2024/25",
    peopleEyebrow: "People & collaborators", peopleTitle: "A focused, interdisciplinary <span class=\"gradient-emphasis\">applied mathematics network.</span>",
    peopleText: "Students and collaborators connect <strong class=\"copy-emphasis\">stochastic modelling, engineering science, Earth systems, computer vision, and financial risk.</strong>",
    person1Role: "PhD Researcher", person1Affiliation: "University of Warwick, United Kingdom", person1Text: "Conditional neural processes and ACF-constrained random-field reconstruction from sparse observations.",
    person2Role: "PhD Researcher", person2Affiliation: "University of Warwick, United Kingdom", person2Text: "Brownian motion and non-stationary stochastic processes for multiscale modelling and extreme-event risk.",
    person10Role: "PhD Researcher", person10Affiliation: "University of Warwick, United Kingdom", person10Text: "Brownian motion and stochastic modelling for probabilistic forecasting and risk-aware sequential decisions.",
    person3Role: "PhD Researcher", person3Affiliation: "University of Warwick, United Kingdom", person3Text: "Exploring image-based models for porous-media flow and particle transport.",
    person4Role: "Visiting Research Associate", person4Affiliation: "Nanchang University, China", person4Text: "Diffusion models and physics-informed neural operators for rainfall-induced slope responses.",
    person5Role: "Research Assistant", person5Affiliation: "The Chinese University of Hong Kong, Hong Kong SAR, China", person5Text: "Image segmentation and engineering AI, with nuclear-graphite applications under exploration.",
    person6Role: "Former Visiting Student · Marie Skłodowska-Curie Fellow", person6Affiliation: "University of Liverpool, United Kingdom", person6Text: "GeoAI, stochastic modelling, and uncertainty-aware simulation for spatially variable ground conditions and data-informed geotechnical analysis.",
    person7Role: "Applied AI Research Fellow", person7Affiliation: "University of Warwick, United Kingdom", person7Text: "Machine learning, computer vision, and image analysis for engineering inspection, scientific imaging, and interpretable pattern recognition.",
    person8Role: "Associate Professor · Visiting Scholar & Collaborator", person8Affiliation: "Guizhou University, China", person8Text: "Backfill-material permeability and geotechnical experiments under uncertainty.",
    person9Name: "Mr Min Zhong", person9Role: "Visiting Research Associate", person9Affiliation: "University of Warwick, United Kingdom", person9Text: "Rainfall infiltration, internal erosion, and slope stability, with a focus on model validation.",
    joinLabel: "Open opportunities", joinTitle: "Join the lab",
    joinText: "I welcome thoughtful enquiries from prospective PhD students, visiting scholars, and collaborators whose interests connect with the three research branches.",
    emailDerek: "Email Derek",
    contactEyebrow: "Contact", contactTitle: "Let’s turn uncertainty into a <span class=\"gradient-emphasis\">useful decision.</span>",
    contactText: "For research collaboration, student enquiries, policy work, or interdisciplinary projects, the best place to begin is a short email.",
    footerTagline: "Stochastic Risk Intelligence Lab · Model uncertainty. Interpret evidence. Design decisions.",
    backToTop: "Back to top ↑"
  },
  zh: {
    skipLink: "跳至正文",
    brandLab: "随机风险智能实验室",
    navProfile: "简介", navResearch: "研究", navImpact: "影响", navPeople: "团队", navContact: "联系",
    heroEyebrow: "华威大学 · 工程学院助理教授",
    heroLine1: "从", heroLine2: "不确定性走向", heroLine3: "风险智能。",
    heroTagline: "刻画不确定性。解读证据。设计决策。",
    heroLede: "我面向不确定的物理、环境、能源与金融系统发展 AI 赋能的随机模型，将稀疏而复杂的数据转化为可解释、可用于决策的风险洞见。",
    exploreResearch: "探索研究", startConversation: "与我联系",
    profileKicker: "研究定位",
    profileName: "马国涛博士 · Dr Derek G. Ma",
    profileRole: "工程学院助理教授<br>华威大学",
    credential1Title: "助理教授", credential1Affiliation: "英国华威大学",
    credential3Title: "数据科学家", credential3Affiliation: "机器学习",
    credential4Title: "学位学徒制导师", credential4Affiliation: "CEDA 项目",
    tagStochastic: "随机建模", tagRisk: "风险分析",
    profileNote: "研究位于人工智能、不确定性量化与决策科学的交汇处。",
    signature1Title: "建模", signature1Text: "将随机性表达为结构",
    signature2Title: "解读", signature2Text: "从证据走向推断",
    signature3Title: "设计", signature3Text: "在风险下形成决策",
    researchEyebrow: "彼此连接的三条研究主线",
    researchTitle: "一个数学议题：从<span class=\"gradient-emphasis\">不完整证据</span>走向<span class=\"gradient-emphasis\">风险感知的设计。</span>",
    researchIntro: "研究横跨<strong class=\"copy-emphasis\">概率论、随机过程、反问题、科学机器学习与决策分析</strong>，并聚焦一个核心问题：<span class=\"marker-highlight\">数学结构如何把不完整的证据转化为可靠的行动？</span>",
    branch1Label: "随机系统",
    branch1Title: "AI 赋能随机场与风险评估",
    branch1Text: "从稀疏观测、数值模拟与先验知识中学习时空变异性，并将不确定性完整传递至系统层面的风险评估。",
    branch1Item1: "多变量随机场", branch1Item2: "贝叶斯学习与 Copula", branch1Item3: "不确定性传播",
    branch2Label: "视觉智能",
    branch2Title: "岩土材料的视觉 AI 与计算机视觉",
    branch2Text: "从图像与物理过程中提取与风险相关的结构，将感知模型和力学机制结合，形成可解释的灾害智能。",
    branch2Item1: "分割与表征", branch2Item2: "物理信息 AI", branch2Item3: "灾变与地质灾害风险",
    branch3Label: "决策智能",
    branch3Title: "能源风险定价与决策",
    branch3Text: "研究市场不确定性、物理暴露与策略决策相互作用下的风险定价、尾部事件和风险转移机制。",
    branch3Item1: "风险定价与转移", branch3Item2: "尾部事件建模", branch3Item3: "AI 辅助决策",
    impactEyebrow: "研究实践",
    impactTitle: "<span class=\"gradient-emphasis on-dark\">数学模型</span>，连接真实世界的决策。",
    impactText: "研究从<strong class=\"light-emphasis\">基础方法</strong>延伸至工程应用、政策风险与<strong class=\"light-emphasis\">面向不确定性的新型金融机制</strong>。",
    viewFullProfile: "查看华威大学完整主页",
    impact1Title: "英国皇家工程院", impact1Text: "通过英国全球人才项目获得专业认可。",
    impact2Title: "政策咨询", impact2Text: "参与威尔士政府煤矸石堆安全工作组。",
    impact3Title: "国际合作", impact3Text: "ISSMGE 技术委员会 TC309 通讯委员。",
    impact4Title: "研究驱动教学", impact4Text: "工程数学、应用建模与学生研究指导。",
    teachingEyebrow: "教学与指导", teachingTitle: "从公式学习走向<span class=\"gradient-emphasis\">模型化思维。</span>",
    teachingText: "我教授<strong class=\"copy-emphasis\">工程数学</strong>，并指导<span class=\"marker-highlight\">不确定性建模、工程 AI、风险分析与计算决策</span>等方向的学生项目。",
    teachingArea1: "工程数学", teachingArea2: "数学衔接课程", teachingArea3: "学生独立项目", teachingArea4: "风险分析中的人工智能",
    teachingEvidenceEyebrow: "教学成效", teachingEvidenceTitle: "工程数学，<span class=\"gradient-emphasis\">用数据说话。</span>",
    teachingEvidenceText: "华威大学工程学院学生调查中的工程数学教学满意度。",
    teachingTableCaption: "各学年教学满意度",
    teachingYear: "学年",
    teachingPositive: "四份调查共 36/39 条满意度回答为正面评价（92%）。",
    teachingSurveySource: "来源：华威大学工程学院 2024/25–2025/26 学生调查。正面评价指“同意”或“非常同意”；n 为此题回答数，样本较小。",
    teachingSnapshot: "2025/26 学年调查概览",
    teachingMetric1Title: "教学满意度",
    teachingMetric1Text: "ES1A1 与 ES1A8",
    teachingMetric2Title: "课堂参与度",
    teachingMetric2Text: "ES1A1",
    teachingMetric3Title: "学习支持",
    teachingMetric3Text: "ES1A1 与 ES1A8",
    teachingVoices: "学生原话",
    teachingQuote1: "“Derek 先讲解例题，再让全班自主解题，并在需要时提供支持。”",
    teachingQuote2: "“印发的讲义非常出色，结构也很清晰；Derek 每节课的教学都非常稳定。”",
    teachingQuote3: "“Derek 这门课讲得很好，课堂引人投入，而且确保每个人都跟得上。”",
    teachingQuote1Source: "匿名学生反馈（译）· ES1A1 · 2025/26",
    teachingQuote2Source: "匿名学生反馈（译）· ES1A8 · 2025/26",
    teachingQuote3Source: "匿名学生反馈（译）· ES1A8 · 2024/25",
    peopleEyebrow: "学生与合作者", peopleTitle: "一个专注而交叉的<span class=\"gradient-emphasis\">应用数学研究网络。</span>",
    peopleText: "学生与合作者共同连接<strong class=\"copy-emphasis\">随机建模、工程科学、地球系统、计算机视觉与金融风险。</strong>",
    person1Role: "博士研究人员", person1Affiliation: "英国华威大学", person1Text: "基于条件神经过程与自相关函数约束，从稀疏观测重构随机场。",
    person2Role: "博士研究人员", person2Affiliation: "英国华威大学", person2Text: "研究布朗运动与非平稳随机过程，用于多尺度建模和极端事件风险分析。",
    person10Role: "博士研究人员", person10Affiliation: "英国华威大学", person10Text: "研究布朗运动与随机建模，用于概率预测和风险感知序贯决策。",
    person3Role: "博士研究人员", person3Affiliation: "英国华威大学", person3Text: "探索用于多孔介质流动与颗粒迁移的图像模型。",
    person4Role: "访问研究助理", person4Affiliation: "中国南昌大学", person4Text: "扩散模型与物理信息神经算子，用于降雨诱发边坡响应。",
    person5Role: "研究助理", person5Affiliation: "中国香港特别行政区 · 香港中文大学", person5Text: "图像分割与工程 AI，并探索核石墨应用。",
    person6Role: "曾任访问学生 · 玛丽·斯克沃多夫斯卡-居里学者", person6Affiliation: "英国利物浦大学", person6Text: "GeoAI、随机建模与不确定性感知模拟，研究空间变异地层与数据驱动岩土分析。",
    person7Role: "应用人工智能研究员", person7Affiliation: "英国华威大学", person7Text: "机器学习、计算机视觉与图像分析，服务于工程检测、科学成像和可解释模式识别。",
    person8Role: "副教授 · 访问学者与合作者", person8Affiliation: "中国贵州大学", person8Text: "回填材料渗透特性及不确定条件下的岩土实验。",
    person9Name: "Mr Min Zhong", person9Role: "访问研究助理", person9Affiliation: "英国华威大学", person9Text: "降雨入渗、内部侵蚀与边坡稳定性，重点关注模型验证。",
    joinLabel: "开放机会", joinTitle: "加入团队",
    joinText: "欢迎研究兴趣与三条主线相关的博士申请者、访问学者与合作者发送简洁而有针对性的咨询。",
    emailDerek: "邮件联系 Derek",
    contactEyebrow: "联系", contactTitle: "让不确定性成为<span class=\"gradient-emphasis\">可用的决策依据。</span>",
    contactText: "如需讨论科研合作、学生指导、政策工作或交叉学科项目，请从一封简短的邮件开始。",
    footerTagline: "随机风险智能实验室 · 刻画不确定性。解读证据。设计决策。",
    backToTop: "返回顶部 ↑"
  }
};

translations.ko = {
  skipLink: "본문으로 건너뛰기",
  brandLab: "확률적 리스크 인텔리전스 연구실",
  navProfile: "소개", navResearch: "연구", navImpact: "성과", navPeople: "구성원", navContact: "연락처",
  heroEyebrow: "워릭대학교 · 공학부 조교수",
  heroLine1: "불확실성에서", heroLine2: "리스크 인텔리전스로", heroLine3: "나아가다.",
  heroTagline: "불확실성을 모델링하고, 증거를 해석하며, 의사결정을 설계합니다.",
  heroLede: "불확실한 물리·환경·에너지·금융 시스템을 위한 AI 기반 확률 모델을 개발하여, 희소하고 복잡한 데이터를 해석 가능하고 의사결정에 활용할 수 있는 리스크 통찰로 전환합니다.",
  exploreResearch: "연구 살펴보기", startConversation: "대화 시작하기",
  profileKicker: "연구 정체성",
  profileName: "Derek G. Ma 박사",
  profileRole: "워릭대학교<br>공학부 조교수",
  credential1Title: "조교수", credential1Affiliation: "워릭대학교, 영국",
  credential3Title: "데이터 과학자", credential3Affiliation: "머신러닝",
  credential4Title: "학위 도제과정 튜터", credential4Affiliation: "CEDA 프로그램",
  tagStochastic: "확률 모델링", tagRisk: "리스크 분석",
  profileNote: "인공지능, 불확실성 정량화, 의사결정과학의 접점에서 연구합니다.",
  signature1Title: "모델링", signature1Text: "무작위성을 구조로 표현",
  signature2Title: "해석", signature2Text: "증거에서 추론으로",
  signature3Title: "설계", signature3Text: "리스크 아래의 의사결정",
  researchEyebrow: "서로 연결된 세 가지 연구 축",
  researchTitle: "하나의 수학적 의제: <span class=\"gradient-emphasis\">불확실한 증거</span>에서 <span class=\"gradient-emphasis\">리스크 인지 설계</span>로.",
  researchIntro: "연구는 <strong class=\"copy-emphasis\">확률론, 확률과정, 역문제, 과학적 머신러닝, 의사결정 분석</strong>을 아우르며 하나의 질문에 답합니다. <span class=\"marker-highlight\">수학적 구조는 불완전한 증거를 어떻게 신뢰할 수 있는 행동으로 바꿀 수 있는가?</span>",
  branch1Label: "확률 시스템",
  branch1Title: "AI 기반 랜덤 필드와 리스크 평가",
  branch1Text: "희소 관측, 시뮬레이션, 사전지식으로부터 시공간 변동성을 학습하고, 그 불확실성을 시스템 수준의 리스크까지 일관되게 전달합니다.",
  branch1Item1: "다변량 랜덤 필드", branch1Item2: "베이지안 학습과 코퓰라", branch1Item3: "불확실성 전파",
  branch2Label: "시각 인텔리전스",
  branch2Title: "지반재료를 위한 시각 AI와 컴퓨터 비전",
  branch2Text: "이미지와 물리 과정에서 리스크 관련 구조를 추출하고, 인지 모델과 역학을 연결하여 설명 가능한 재해 인텔리전스를 구축합니다.",
  branch2Item1: "분할과 표현학습", branch2Item2: "물리정보 AI", branch2Item3: "재난 및 지질재해 리스크",
  branch3Label: "의사결정 인텔리전스",
  branch3Title: "에너지 리스크 가격결정과 의사결정",
  branch3Text: "시장 불확실성, 물리적 노출, 전략적 의사결정이 상호작용하는 환경에서 가격결정, 꼬리사건, 리스크 이전 모델을 개발합니다.",
  branch3Item1: "리스크 가격결정과 이전", branch3Item2: "꼬리사건 모델링", branch3Item3: "AI 지원 의사결정",
  impactEyebrow: "실천으로 이어지는 연구",
  impactTitle: "<span class=\"gradient-emphasis on-dark\">수학적 모델</span>을 실제 의사결정과 연결합니다.",
  impactText: "연구는 <strong class=\"light-emphasis\">기초 방법론</strong>에서 공학 응용, 정책 리스크, 그리고 <strong class=\"light-emphasis\">불확실성을 위한 새로운 금융 메커니즘</strong>까지 확장됩니다.",
  viewFullProfile: "워릭대학교 전체 프로필 보기",
  impact1Title: "영국 왕립공학한림원", impact1Text: "영국 글로벌 탤런트 경로를 통해 전문성을 인정받았습니다.",
  impact2Title: "정책 자문", impact2Text: "웨일스 정부 석탄 폐석더미 안전 태스크포스에 기여했습니다.",
  impact3Title: "국제 협력", impact3Text: "ISSMGE 기술위원회 TC309의 통신위원입니다.",
  impact4Title: "연구 기반 교육", impact4Text: "공학수학, 응용 모델링, 학생 연구지도를 수행합니다.",
  teachingEyebrow: "교육 및 지도", teachingTitle: "공식에서 <span class=\"gradient-emphasis\">모델 기반 추론</span>으로.",
  teachingText: "<strong class=\"copy-emphasis\">공학수학</strong>을 가르치고 <span class=\"marker-highlight\">불확실성 모델링, 공학 AI, 리스크 분석, 계산 의사결정</span> 분야의 학생 프로젝트를 지도합니다.",
  teachingArea1: "공학수학", teachingArea2: "수학 브리징 프로그램", teachingArea3: "개별 프로젝트", teachingArea4: "리스크 분석을 위한 AI",
  teachingEvidenceEyebrow: "교육 성과", teachingEvidenceTitle: "공학수학, <span class=\"gradient-emphasis\">숫자로 보기.</span>",
  teachingEvidenceText: "워릭대학교 공학부 학생 설문에 나타난 공학수학 교육 만족도입니다.",
  teachingTableCaption: "학년도별 교육 만족도",
  teachingYear: "학년도",
  teachingPositive: "네 건의 설문에서 만족도 응답 39건 중 36건이 긍정적이었습니다(92%).",
  teachingSurveySource: "출처: 워릭대학교 공학부 2024/25–2025/26 학생 설문. 긍정은 동의 또는 매우 동의이며, n은 이 문항의 응답 수입니다. 표본이 작습니다.",
  teachingSnapshot: "2025/26 학생 설문 요약",
  teachingMetric1Title: "교육 만족도",
  teachingMetric1Text: "ES1A1 및 ES1A8",
  teachingMetric2Title: "수업 참여도",
  teachingMetric2Text: "ES1A1",
  teachingMetric3Title: "학습 지원",
  teachingMetric3Text: "ES1A1 및 ES1A8",
  teachingVoices: "학생의 목소리",
  teachingQuote1: "“Derek은 예제를 설명한 뒤 학생들이 직접 문제에 참여하게 하고, 필요할 때 지원을 제공합니다.”",
  teachingQuote2: "“인쇄된 노트가 훌륭하고 구조가 명확합니다. Derek의 수업은 매 시간 일관되게 잘 진행됩니다.”",
  teachingQuote3: "“Derek의 강의는 훌륭했고 흥미를 이끌었으며 모두가 수업을 따라오고 있는지 확인해 주었습니다.”",
  teachingQuote1Source: "익명 학생 의견(번역) · ES1A1 · 2025/26",
  teachingQuote2Source: "익명 학생 의견(번역) · ES1A8 · 2025/26",
  teachingQuote3Source: "익명 학생 의견(번역) · ES1A8 · 2024/25",
  peopleEyebrow: "학생 및 협력 연구자", peopleTitle: "집중도 높고 학제적인 <span class=\"gradient-emphasis\">응용수학 연구 네트워크.</span>",
  peopleText: "학생과 협력 연구자들은 <strong class=\"copy-emphasis\">확률 모델링, 공학과학, 지구 시스템, 컴퓨터 비전, 금융 리스크</strong>를 연결합니다.",
  person1Role: "박사과정 연구원", person1Affiliation: "워릭대학교, 영국", person1Text: "희소 관측으로부터 조건부 신경과정과 자기상관함수 제약을 이용한 랜덤 필드 재구성.",
  person2Role: "박사과정 연구원", person2Affiliation: "워릭대학교, 영국", person2Text: "브라운 운동과 비정상 확률과정을 바탕으로 다중 규모 모델링과 극한 사건 리스크를 연구합니다.",
  person10Role: "박사과정 연구원", person10Affiliation: "워릭대학교, 영국", person10Text: "브라운 운동과 확률 모델링을 바탕으로 확률적 예측과 리스크 인지 순차 의사결정을 연구합니다.",
  person3Role: "박사과정 연구원", person3Affiliation: "워릭대학교, 영국", person3Text: "다공성 매질 유동과 입자 이동을 위한 영상 기반 모델 탐색.",
  person4Role: "방문연구원", person4Affiliation: "난창대학교, 중국", person4Text: "강우 유발 사면 반응을 위한 확산 모델과 물리정보 신경 연산자.",
  person5Role: "연구조교", person5Affiliation: "홍콩중문대학교, 중국 홍콩 특별행정구", person5Text: "영상 분할과 공학 AI, 핵흑연 적용 가능성 탐색.",
  person6Role: "전 방문학생 · 마리 스클로도프스카퀴리 펠로우", person6Affiliation: "리버풀대학교, 영국", person6Text: "공간적으로 변동하는 지반 조건과 데이터 기반 지반공학 분석을 위한 GeoAI, 확률 모델링, 불확실성 인지 시뮬레이션을 연구합니다.",
  person7Role: "응용 AI 연구원", person7Affiliation: "워릭대학교, 영국", person7Text: "공학 검사, 과학 이미징, 해석 가능한 패턴 인식을 위한 머신러닝, 컴퓨터 비전, 영상 분석을 연구합니다.",
  person8Role: "부교수 · 방문학자 및 협력 연구자", person8Affiliation: "구이저우대학교, 중국", person8Text: "뒤채움 재료의 투수성과 불확실성을 고려한 지반공학 실험.",
  person9Name: "Min Zhong", person9Role: "방문연구원", person9Affiliation: "워릭대학교, 영국", person9Text: "강우 침투, 내부 침식, 사면 안정성과 모델 검증.",
  joinLabel: "열린 기회", joinTitle: "연구실에 합류하기",
  joinText: "세 가지 연구 축과 관심이 맞닿아 있는 박사과정 지원자, 방문학자, 협력 연구자의 구체적인 문의를 환영합니다.",
  emailDerek: "Derek에게 이메일 보내기",
  contactEyebrow: "연락처", contactTitle: "불확실성을 <span class=\"gradient-emphasis\">유용한 의사결정</span>으로 바꿉시다.",
  contactText: "연구 협력, 학생 지도, 정책 연구 또는 학제간 프로젝트에 관해 논의하려면 간단한 이메일로 시작해 주세요.",
  footerTagline: "확률적 리스크 인텔리전스 연구실 · 불확실성을 모델링하고, 증거를 해석하며, 의사결정을 설계합니다.",
  backToTop: "맨 위로 ↑"
};

translations.ja = {
  skipLink: "本文へ移動",
  brandLab: "確率的リスク・インテリジェンス研究室",
  navProfile: "プロフィール", navResearch: "研究", navImpact: "社会実装", navPeople: "メンバー", navContact: "お問い合わせ",
  heroEyebrow: "ウォーリック大学 · 工学部助教",
  heroLine1: "不確実性から", heroLine2: "リスク・インテリジェンスへ", heroLine3: "つなげる。",
  heroTagline: "不確実性をモデル化し、証拠を解釈し、意思決定を設計する。",
  heroLede: "不確実な物理・環境・エネルギー・金融システムを対象にAIを活用した確率モデルを開発し、疎で複雑なデータを、解釈可能で意思決定に直結するリスク知見へ変換します。",
  exploreResearch: "研究を見る", startConversation: "相談する",
  profileKicker: "研究アイデンティティ",
  profileName: "Derek G. Ma 博士",
  profileRole: "ウォーリック大学<br>工学部助教",
  credential1Title: "助教", credential1Affiliation: "ウォーリック大学、英国",
  credential3Title: "データサイエンティスト", credential3Affiliation: "機械学習",
  credential4Title: "学位見習い制度チューター", credential4Affiliation: "CEDAプログラム",
  tagStochastic: "確率モデリング", tagRisk: "リスク分析",
  profileNote: "人工知能、不確実性定量化、意思決定科学の交差領域で研究しています。",
  signature1Title: "モデル化", signature1Text: "ランダム性を構造として表現",
  signature2Title: "解釈", signature2Text: "証拠から推論へ",
  signature3Title: "設計", signature3Text: "リスク下の意思決定",
  researchEyebrow: "相互につながる三つの研究軸",
  researchTitle: "一つの数学的課題：<span class=\"gradient-emphasis\">不確実な証拠</span>から<span class=\"gradient-emphasis\">リスクを考慮した設計</span>へ。",
  researchIntro: "研究は<strong class=\"copy-emphasis\">確率論、確率過程、逆問題、科学機械学習、意思決定分析</strong>を横断し、一つの問いに取り組みます。<span class=\"marker-highlight\">数学的構造は、不完全な証拠をどのように信頼できる行動へ変えられるのか。</span>",
  branch1Label: "確率システム",
  branch1Title: "AIを活用したランダム場とリスク評価",
  branch1Text: "疎な観測、シミュレーション、事前知識から時空間変動を学習し、その不確実性をシステムレベルのリスク評価まで一貫して伝播させます。",
  branch1Item1: "多変量ランダム場", branch1Item2: "ベイズ学習とコピュラ", branch1Item3: "不確実性伝播",
  branch2Label: "視覚インテリジェンス",
  branch2Title: "地盤材料のための視覚AIとコンピュータビジョン",
  branch2Text: "画像と物理過程からリスクに関わる構造を抽出し、知覚モデルと力学を結び付けて説明可能な災害インテリジェンスを構築します。",
  branch2Item1: "セグメンテーションと表現", branch2Item2: "物理情報AI", branch2Item3: "災害・地質ハザードリスク",
  branch3Label: "意思決定インテリジェンス",
  branch3Title: "エネルギーリスクの価格付けと意思決定",
  branch3Text: "市場の不確実性、物理的エクスポージャー、戦略的意思決定が相互作用する状況で、価格付け、テール事象、リスク移転のモデルを開発します。",
  branch3Item1: "リスクの価格付けと移転", branch3Item2: "テール事象モデリング", branch3Item3: "AI支援意思決定",
  impactEyebrow: "実践につながる研究",
  impactTitle: "<span class=\"gradient-emphasis on-dark\">数学モデル</span>を現実の意思決定へつなぐ。",
  impactText: "研究は<strong class=\"light-emphasis\">基礎手法</strong>から工学応用、政策リスク、さらに<strong class=\"light-emphasis\">不確実性に対応する新しい金融メカニズム</strong>まで広がっています。",
  viewFullProfile: "ウォーリック大学のプロフィールを見る",
  impact1Title: "英国王立工学アカデミー", impact1Text: "英国グローバル・タレント制度を通じて専門性が認められました。",
  impact2Title: "政策助言", impact2Text: "ウェールズ政府の石炭ボタ山安全タスクフォースに貢献しました。",
  impact3Title: "国際連携", impact3Text: "ISSMGE技術委員会TC309の通信委員です。",
  impact4Title: "研究に基づく教育", impact4Text: "工学数学、応用モデリング、学生研究指導を行っています。",
  teachingEyebrow: "教育・研究指導", teachingTitle: "公式から<span class=\"gradient-emphasis\">モデルに基づく推論</span>へ。",
  teachingText: "<strong class=\"copy-emphasis\">工学数学</strong>を教え、<span class=\"marker-highlight\">不確実性モデリング、工学AI、リスク分析、計算意思決定</span>に関する学生プロジェクトを指導しています。",
  teachingArea1: "工学数学", teachingArea2: "数学ブリッジング・プログラム", teachingArea3: "個別プロジェクト", teachingArea4: "リスク分析のためのAI",
  teachingEvidenceEyebrow: "教育実績", teachingEvidenceTitle: "工学数学を<span class=\"gradient-emphasis\">数字で見る。</span>",
  teachingEvidenceText: "ウォーリック大学工学部の学生アンケートによる工学数学の授業満足度です。",
  teachingTableCaption: "年度別の授業満足度",
  teachingYear: "学年度",
  teachingPositive: "4件の調査で、満足度への回答39件中36件が肯定的でした（92%）。",
  teachingSurveySource: "出典：ウォーリック大学工学部、2024/25–2025/26学生アンケート。肯定的は「同意」または「強く同意」、nはこの設問の回答数です。標本は小規模です。",
  teachingSnapshot: "2025/26年度アンケート概要",
  teachingMetric1Title: "授業満足度",
  teachingMetric1Text: "ES1A1・ES1A8",
  teachingMetric2Title: "授業への参加",
  teachingMetric2Text: "ES1A1",
  teachingMetric3Title: "学習支援",
  teachingMetric3Text: "ES1A1・ES1A8",
  teachingVoices: "学生の声",
  teachingQuote1: "「Derekは例題を説明した後、学生自身が問題に取り組めるようにし、必要なときに支援してくれます。」",
  teachingQuote2: "「配布ノートは素晴らしく、構成も明確です。Derekの授業は毎回一貫して丁寧です。」",
  teachingQuote3: "「Derekの講義は素晴らしく、興味を引きつけ、全員が内容を理解できているか確かめてくれました。」",
  teachingQuote1Source: "匿名の学生コメント（翻訳）· ES1A1 · 2025/26",
  teachingQuote2Source: "匿名の学生コメント（翻訳）· ES1A8 · 2025/26",
  teachingQuote3Source: "匿名の学生コメント（翻訳）· ES1A8 · 2024/25",
  peopleEyebrow: "学生・共同研究者", peopleTitle: "焦点の明確な学際的<span class=\"gradient-emphasis\">応用数学ネットワーク。</span>",
  peopleText: "学生と共同研究者が<strong class=\"copy-emphasis\">確率モデリング、工学科学、地球システム、コンピュータビジョン、金融リスク</strong>を結び付けます。",
  person1Role: "博士課程研究者", person1Affiliation: "ウォーリック大学、英国", person1Text: "疎な観測から、条件付きニューラルプロセスと自己相関関数の制約を用いてランダム場を再構成。",
  person2Role: "博士課程研究者", person2Affiliation: "ウォーリック大学、英国", person2Text: "ブラウン運動と非定常確率過程を用いたマルチスケールモデリングと極端事象のリスクを研究。",
  person10Role: "博士課程研究者", person10Affiliation: "ウォーリック大学、英国", person10Text: "ブラウン運動と確率モデリングを用いた確率予測とリスクを考慮した逐次意思決定を研究。",
  person3Role: "博士課程研究者", person3Affiliation: "ウォーリック大学、英国", person3Text: "多孔質媒体の流動と粒子移動に向けた画像ベースモデルを探索。",
  person4Role: "客員研究員", person4Affiliation: "南昌大学、中国", person4Text: "降雨による斜面応答に向けた拡散モデルと物理情報ニューラル演算子。",
  person5Role: "研究助手", person5Affiliation: "香港中文大学、中国香港特別行政区", person5Text: "画像分割と工学AI、原子炉用黒鉛への応用を探索。",
  person6Role: "元客員学生 · マリー・スクウォドフスカ＝キュリー・フェロー", person6Affiliation: "リバプール大学、英国", person6Text: "空間変動地盤とデータ駆動型地盤解析に向けたGeoAI、確率モデリング、不確実性を考慮したシミュレーションを研究しています。",
  person7Role: "応用AI研究員", person7Affiliation: "ウォーリック大学、英国", person7Text: "工学検査、科学イメージング、解釈可能なパターン認識のための機械学習、コンピュータビジョン、画像解析を研究しています。",
  person8Role: "准教授 · 客員研究者・共同研究者", person8Affiliation: "貴州大学、中国", person8Text: "埋戻し材の透水性と不確実性を考慮した地盤工学実験。",
  person9Name: "Min Zhong", person9Role: "客員研究員", person9Affiliation: "ウォーリック大学、英国", person9Text: "降雨浸透、内部侵食、斜面安定性とモデル検証。",
  joinLabel: "参加機会", joinTitle: "研究室に参加する",
  joinText: "三つの研究軸と関心が重なる博士課程志望者、客員研究者、共同研究者からの具体的なお問い合わせを歓迎します。",
  emailDerek: "Derekにメールする",
  contactEyebrow: "お問い合わせ", contactTitle: "不確実性を<span class=\"gradient-emphasis\">有用な意思決定</span>へ変えましょう。",
  contactText: "研究連携、学生指導、政策研究、学際プロジェクトについては、簡単なメールからご相談ください。",
  footerTagline: "確率的リスク・インテリジェンス研究室 · 不確実性をモデル化し、証拠を解釈し、意思決定を設計する。",
  backToTop: "ページ上部へ ↑"
};

// Project roles and dates follow the Warwick profile's Selected Projects section.
Object.assign(translations.en, {
  navProjects: "Projects", projectsEyebrow: "Selected projects",
  projectsTitle: "Research across <span class=\"gradient-emphasis\">disciplines and decisions.</span>",
  projectsIntro: "A selection of research projects and contributions listed on my University of Warwick profile.",
  projectsSource: "View Selected Projects on the Warwick profile",
  projectsMoreClosed: "View 3 more projects",
  projectsMoreOpen: "Show fewer projects",
  project1Fund: "Warwick IAS · Interdisciplinary Research Development Award (2026)",
  project1Role: "Co-Investigator · With Dr Kaihua Qin (PI) and Prof Jiahua Xu (UCL)",
  project1Text: "Integrates computer security, stochastic modelling and financial economics to assess systemic risk and cascading failures in decentralised finance.",
  project2Fund: "Fudan–Warwick Joint Seed Fund",
  project2Role: "Co-Investigator · With Dr Feng Mao (Warwick) and Prof Jian Pu (Fudan)",
  project2Text: "Combines deep learning and stochastic random fields to address spatial uncertainty in subsurface characterisation.",
  project3Fund: "Shanghai Jiao Tong University–Warwick Joint Seed Fund",
  project3Role: "In collaboration with Prof Lulu Zhang (Shanghai Jiao Tong University)",
  project3Text: "Combines machine learning and probabilistic reliability analysis to improve landslide risk assessment under geological and geotechnical uncertainty.",
  project4Fund: "European Commission Horizon 2020 · MSCA-RISE (2020–2026)",
  project4Role: "Participating Researcher",
  project4Text: "Contributed stochastic modelling, spatial heterogeneity and uncertainty quantification to interdisciplinary environmental and subsurface research.",
  project5Fund: "Warwick IAS · Early Career Fellowship (2021–2022)",
  project5Role: "Fellowship Holder",
  project5Text: "Supported independent research development in computational geomechanics, stochastic modelling and uncertainty quantification for geohazard risk.",
  project6Fund: "Welsh Government · Coal Tip Safety Taskforce (2022)",
  project6Role: "Researcher and Policy Advisor",
  project6Text: "Applied computational geomechanics and landslide risk modelling to support coal tip safety assessment and policy in Wales."
});

Object.assign(translations.zh, {
  navProjects: "项目", projectsEyebrow: "代表性项目",
  projectsTitle: "跨学科研究，<span class=\"gradient-emphasis\">面向真实决策。</span>",
  projectsIntro: "以下选录华威大学个人主页列出的研究项目与本人贡献。",
  projectsSource: "在华威大学主页查看代表性项目",
  projectsMoreClosed: "查看另外 3 个项目",
  projectsMoreOpen: "收起项目",
  project1Fund: "华威大学 IAS · 跨学科研究发展资助（2026）",
  project1Role: "共同研究者 · 与项目负责人 Dr Kaihua Qin 及伦敦大学学院 Prof Jiahua Xu 合作",
  project1Text: "结合计算机安全、随机建模与金融经济学，评估去中心化金融系统中的系统性风险和级联失效。",
  project2Fund: "复旦大学–华威大学联合种子基金",
  project2Role: "共同研究者 · 与华威大学 Dr Feng Mao、复旦大学 Prof Jian Pu 合作",
  project2Text: "结合深度学习与随机场建模，研究地下介质表征中的空间不确定性。",
  project3Fund: "上海交通大学–华威大学联合种子基金",
  project3Role: "与上海交通大学 Prof Lulu Zhang 合作",
  project3Text: "结合机器学习与概率可靠度分析，改进地质和岩土不确定性下的滑坡风险评估。",
  project4Fund: "欧盟 Horizon 2020 · MSCA-RISE（2020–2026）",
  project4Role: "参与研究人员",
  project4Text: "为环境与地下系统的跨学科研究贡献随机建模、空间异质性和不确定性量化方法。",
  project5Fund: "华威大学 IAS · 早期职业研究员项目（2021–2022）",
  project5Role: "研究员项目获得者",
  project5Text: "支持针对地质灾害风险的计算岩土力学、随机建模与不确定性量化独立研究。",
  project6Fund: "威尔士政府 · 煤矸石堆安全工作组（2022）",
  project6Role: "研究人员及政策顾问",
  project6Text: "应用计算岩土力学和滑坡风险建模，支持威尔士废弃煤矸石堆的安全评估与政策制定。"
});

Object.assign(translations.ko, {
  navProjects: "프로젝트", projectsEyebrow: "주요 프로젝트",
  projectsTitle: "<span class=\"gradient-emphasis\">학문 분야와 의사결정</span>을 잇는 연구.",
  projectsIntro: "워릭대학교 공식 프로필에 기재된 연구 프로젝트와 참여 내역입니다.",
  projectsSource: "워릭대학교 프로필에서 주요 프로젝트 보기",
  projectsMoreClosed: "프로젝트 3개 더 보기",
  projectsMoreOpen: "프로젝트 접기",
  project1Fund: "워릭대학교 IAS · 학제간 연구개발 지원(2026)",
  project1Role: "공동연구자 · 연구책임자 Dr Kaihua Qin, UCL Prof Jiahua Xu와 협력",
  project1Text: "컴퓨터 보안, 확률 모델링, 금융경제학을 결합해 탈중앙화 금융의 시스템 리스크와 연쇄 실패를 평가합니다.",
  project2Fund: "푸단대학교–워릭대학교 공동 시드 펀드",
  project2Role: "공동연구자 · 워릭대학교 Dr Feng Mao, 푸단대학교 Prof Jian Pu와 협력",
  project2Text: "딥러닝과 확률 랜덤 필드를 결합해 지하 특성화의 공간적 불확실성을 다룹니다.",
  project3Fund: "상하이교통대학교–워릭대학교 공동 시드 펀드",
  project3Role: "상하이교통대학교 Prof Lulu Zhang과 공동 연구",
  project3Text: "머신러닝과 확률론적 신뢰도 분석을 결합해 지질 및 지반 불확실성 아래의 산사태 리스크 평가를 개선합니다.",
  project4Fund: "유럽연합 Horizon 2020 · MSCA-RISE(2020–2026)",
  project4Role: "참여 연구자",
  project4Text: "환경 및 지하 시스템의 학제간 연구에 확률 모델링, 공간적 이질성, 불확실성 정량화 방법을 기여했습니다.",
  project5Fund: "워릭대학교 IAS · 초기 경력 연구 펠로십(2021–2022)",
  project5Role: "펠로십 수혜자",
  project5Text: "지질재해 리스크를 위한 계산 지반역학, 확률 모델링, 불확실성 정량화의 독립 연구를 지원했습니다.",
  project6Fund: "웨일스 정부 · 석탄 폐석더미 안전 태스크포스(2022)",
  project6Role: "연구자 및 정책 자문위원",
  project6Text: "계산 지반역학과 산사태 리스크 모델링을 적용해 웨일스 석탄 폐석더미의 안전 평가와 정책 수립을 지원했습니다."
});

Object.assign(translations.ja, {
  navProjects: "プロジェクト", projectsEyebrow: "主なプロジェクト",
  projectsTitle: "<span class=\"gradient-emphasis\">分野と意思決定</span>をつなぐ研究。",
  projectsIntro: "ウォーリック大学の公式プロフィールに掲載された研究プロジェクトと参加実績です。",
  projectsSource: "ウォーリック大学のプロフィールで主なプロジェクトを見る",
  projectsMoreClosed: "さらに3件のプロジェクトを見る",
  projectsMoreOpen: "プロジェクトを閉じる",
  project1Fund: "ウォーリック大学 IAS · 学際的研究開発助成（2026年）",
  project1Role: "共同研究者 · 研究代表者 Dr Kaihua Qin、UCL の Prof Jiahua Xu と協力",
  project1Text: "コンピュータセキュリティ、確率モデル、金融経済学を統合し、分散型金融におけるシステミックリスクと連鎖的障害を評価します。",
  project2Fund: "復旦大学–ウォーリック大学共同シード基金",
  project2Role: "共同研究者 · ウォーリック大学の Dr Feng Mao、復旦大学の Prof Jian Pu と協力",
  project2Text: "深層学習と確率的ランダムフィールドを組み合わせ、地下特性評価における空間的不確実性を扱います。",
  project3Fund: "上海交通大学–ウォーリック大学共同シード基金",
  project3Role: "上海交通大学の Prof Lulu Zhang と共同研究",
  project3Text: "機械学習と確率論的信頼性解析を組み合わせ、地質・地盤の不確実性を考慮した地すべりリスク評価を改善します。",
  project4Fund: "欧州委員会 Horizon 2020 · MSCA-RISE（2020–2026年）",
  project4Role: "参加研究者",
  project4Text: "環境・地下システムの学際的研究に、確率モデル、空間的不均質性、不確実性定量化の手法で貢献しました。",
  project5Fund: "ウォーリック大学 IAS · 若手研究者フェローシップ（2021–2022年）",
  project5Role: "フェローシップ採択者",
  project5Text: "地質災害リスクに関する計算地盤力学、確率モデル、不確実性定量化の独立研究を支援しました。",
  project6Fund: "ウェールズ政府 · 石炭廃棄物堆積場安全タスクフォース（2022年）",
  project6Role: "研究者・政策アドバイザー",
  project6Text: "計算地盤力学と地すべりリスクモデルを応用し、ウェールズの石炭採掘に伴う廃石堆積場の安全評価と政策立案を支援しました。"
});

Object.assign(translations.en, {
  researchTradingEntryLabel: "听风 × Auralis Tech research preview",
  tradingEntry: "听风 × Auralis Tech ↗",
  tradingHomeLabel: "Return to the SRI Lab homepage",
  tradingBrandSub: "Algorithmic trading research",
  tradingEyebrow: "Research & development preview",
  tradingTitle: "Reading market structure. <span>Building systematic decisions.</span>",
  tradingIntro: "We study event-based signals and multi-scale market context, then connect research decisions to replayable execution and risk checks.",
  tradingMarketsLabel: "Markets under research",
  tradingMarkets: "Forex · Crypto · Equity indices",
  tradingReturn: "Back to SRI Lab",
  tradingVisualCore: "Stochastic field",
  tradingVisualDescription: "Research themes: Brownian motion, stochastic modelling, multivariate uncertainty, extreme value analysis",
  tradingMath1Local: "Random paths", tradingMath2Local: "Probabilistic models", tradingMath3Local: "Joint uncertainty", tradingMath4Local: "Tail behaviour",
  tradingMotionPause: "Pause motion", tradingMotionResume: "Resume motion",
  tradingMethodEyebrow: "The research lens",
  tradingMethodTitle: "From market events to controlled decisions.",
  tradingCard1Kicker: "01 / MARKET STRUCTURE", tradingCard1Title: "Events over clock time.", tradingCard1Text: "Explore how price moves across multiple scales, and when regimes favour reversion or continuation.",
  tradingCard2Kicker: "02 / SYSTEMATIC RESEARCH", tradingCard2Title: "Signals with context.", tradingCard2Text: "Study probabilistic signals across forex, crypto and equity indices, with each market evaluated on its own evidence.",
  tradingCard3Kicker: "03 / EXECUTION & CONTROL", tradingCard3Title: "Decisions we can replay.", tradingCard3Text: "Build a trace from research decisions to target positions, execution records, costs and risk checks.",
  tradingVenuesEyebrow: "VENUE MAP", tradingVenuesTitle: "Where <span>we trade.</span>", tradingVenuesIntro: "Research data, execution plans and future market access.",
  tradingVenueBinance: "Market data", tradingVenueOkx: "Exchange research", tradingVenueTmgm: "Planned CFD execution", tradingVenueCme: "Futures roadmap",
  tradingVenuesNote: "Venue names describe research and planned routes; they do not imply exchange partnerships or live execution on every venue.",
  tradingVenuePause: "Pause motion", tradingVenueResume: "Resume motion",
  tradingJoinEyebrow: "WORK WITH US", tradingJoinTitle: "Build the next research layer.", tradingJoinText: "Interested in systematic markets, stochastic modelling or execution systems? Send a short introduction and a link to relevant work.",
  tradingApply: "Apply to join Auralis Tech team",
  tradingFooterNav: "Footer", tradingFooterContact: "Contact", tradingFooterPrivacy: "Privacy Policy",
  tradingDisclaimer: "This is a research preview for information only. Venue references do not imply exchange partnerships or live trading. This page does not offer trading services, solicit capital or provide investment advice.",
  tradingStatus: "Research & development preview · No performance claims",
  tradingFooterReturn: "Return to main site ↗",
  privacyBackLabel: "Back to Auralis Tech", privacyEyebrow: "WEBSITE PRIVACY", privacyTitle: "Privacy <span>Policy.</span>",
  privacyIntro: "This notice covers the Auralis Tech research preview and this page, maintained by Dr Derek G. Ma. The main SRI Lab website has separate analytics and is outside this notice.",
  privacySection1Title: "Page delivery", privacySection1Text: "GitHub Pages serves these static pages, and Google Fonts supplies the typeface. Your browser makes requests to those providers, which may process technical request data under their own policies. These preview pages do not include an on-site analytics script or advertising cookies.",
  privacySection2Title: "Language choice", privacySection2Text: "If you change language, the site saves the choice as “sri-language” in your browser’s local storage and adds a language code to the page URL. You can remove the saved choice by clearing site data in your browser.",
  privacySection3Title: "Email enquiries", privacySection3Text: "Contact and Apply links open your email application; there is no application form on this site. If you choose to email, your message and any attachments are handled by your email provider and the recipient’s email service. Please avoid sending confidential account or trading details.",
  privacySection4Title: "Questions", privacySection4Text: "For questions about this preview or an email you have sent, write to Derek.Ma.1@warwick.ac.uk.",
  privacyUpdated: "Last updated: 25 October 2026", privacyReturn: "Back to Auralis Tech"
});

Object.assign(translations.zh, {
  researchTradingEntryLabel: "听风 × Auralis Tech 研究预览",
  tradingEntry: "听风 × Auralis Tech ↗",
  tradingHomeLabel: "返回随机风险智能实验室主页",
  tradingBrandSub: "算法交易研究",
  tradingEyebrow: "研发概念预览",
  tradingTitle: "读懂市场结构，<span>构建系统化决策。</span>",
  tradingIntro: "我们研究事件驱动信号与多尺度市场状态，并将研究决策连接到可回放的执行和风险检查。",
  tradingMarketsLabel: "研究市场",
  tradingMarkets: "外汇 · 加密资产 · 股票指数",
  tradingReturn: "返回 SRI Lab",
  tradingVisualCore: "随机过程",
  tradingVisualDescription: "研究主题：布朗运动、随机建模、多变量不确定性与极值分析",
  tradingMath1Local: "布朗运动", tradingMath2Local: "随机建模", tradingMath3Local: "多变量不确定性", tradingMath4Local: "极值分析",
  tradingMotionPause: "暂停动画", tradingMotionResume: "继续动画",
  tradingMethodEyebrow: "研究视角",
  tradingMethodTitle: "从市场事件到受控决策。",
  tradingCard1Kicker: "01 / 市场结构", tradingCard1Title: "以事件观察价格。", tradingCard1Text: "研究不同尺度上的价格变化，以及均值回复与趋势延续各自适用的市场状态。",
  tradingCard2Kicker: "02 / 系统化研究", tradingCard2Title: "让信号有上下文。", tradingCard2Text: "研究外汇、加密资产和股票指数的概率信号，并分别依据各市场的证据评估。",
  tradingCard3Kicker: "03 / 执行与约束", tradingCard3Title: "让决策可以回放。", tradingCard3Text: "建立从研究决策到目标仓位、执行记录、成本与风险检查的可追踪链路。",
  tradingVenuesEyebrow: "场所地图", tradingVenuesTitle: "我们的<span>交易场所。</span>", tradingVenuesIntro: "研究数据、计划中的执行路径与未来市场接入。",
  tradingVenueBinance: "市场数据", tradingVenueOkx: "交易所研究", tradingVenueTmgm: "计划中的 CFD 执行", tradingVenueCme: "期货路线图",
  tradingVenuesNote: "场所名称说明研究和计划路径，不代表与平台存在合作关系，也不表示每个平台已有实盘执行。",
  tradingVenuePause: "暂停滚动", tradingVenueResume: "继续滚动",
  tradingJoinEyebrow: "加入研究", tradingJoinTitle: "共建下一层研究能力。", tradingJoinText: "如果你对系统化市场、随机建模或执行系统感兴趣，欢迎发来简短介绍及相关作品链接。",
  tradingApply: "申请加入 Auralis Tech 团队",
  tradingFooterNav: "页脚导航", tradingFooterContact: "联系", tradingFooterPrivacy: "隐私政策",
  tradingDisclaimer: "本页仅供研究展示。场所名称不代表平台合作或已开展实盘交易；本页不提供交易服务、不募集资金，也不构成投资建议。",
  tradingStatus: "研发概念预览 · 不展示业绩主张",
  tradingFooterReturn: "返回主站 ↗",
  privacyBackLabel: "返回 Auralis Tech", privacyEyebrow: "网站隐私", privacyTitle: "隐私<span>政策。</span>",
  privacyIntro: "本说明仅适用于由马国涛博士维护的 Auralis Tech 研究预览页及本页。SRI Lab 主站另设访问分析，不属于本说明范围。",
  privacySection1Title: "页面服务", privacySection1Text: "这些静态页面由 GitHub Pages 提供，字体由 Google Fonts 提供。浏览器会向这些服务发送请求，服务方可能按各自政策处理技术请求数据。预览页未加入站内分析脚本或广告 Cookie。",
  privacySection2Title: "语言选择", privacySection2Text: "切换语言时，网站会在浏览器本地存储中保存“sri-language”，并在网址加入语言代码。清除浏览器中的本站数据即可移除该偏好。",
  privacySection3Title: "邮件咨询", privacySection3Text: "“联系”和“申请加入”会打开你的邮件应用；本站没有申请表。如你选择发送邮件，正文及附件由你的邮件服务和收件方邮件服务处理。请勿发送机密账户或交易资料。",
  privacySection4Title: "问题", privacySection4Text: "如对本预览页或已发送邮件有疑问，请写信至 Derek.Ma.1@warwick.ac.uk。",
  privacyUpdated: "更新日期：2026 年 10 月 25 日", privacyReturn: "返回 Auralis Tech"
});

Object.assign(translations.ko, {
  researchTradingEntryLabel: "听风 × Auralis Tech 연구 미리보기",
  tradingEntry: "听风 × Auralis Tech ↗",
  tradingHomeLabel: "SRI Lab 홈페이지로 돌아가기",
  tradingBrandSub: "알고리즘 트레이딩 연구",
  tradingEyebrow: "연구개발 미리보기",
  tradingTitle: "시장 구조를 읽고, <span>체계적인 결정을 설계합니다.</span>",
  tradingIntro: "이벤트 기반 신호와 여러 시간 척도의 시장 맥락을 연구하고, 연구 결정을 재현 가능한 실행 및 위험 점검과 연결합니다.",
  tradingMarketsLabel: "연구 대상 시장",
  tradingMarkets: "외환 · 암호자산 · 주가지수",
  tradingReturn: "SRI Lab으로 돌아가기",
  tradingVisualCore: "확률적 장",
  tradingVisualDescription: "연구 주제: 브라운 운동, 확률적 모델링, 다변량 불확실성, 극값 분석",
  tradingMath1Local: "브라운 운동", tradingMath2Local: "확률적 모델링", tradingMath3Local: "다변량 불확실성", tradingMath4Local: "극값 분석",
  tradingMotionPause: "동작 일시정지", tradingMotionResume: "동작 다시 시작",
  tradingMethodEyebrow: "연구 관점",
  tradingMethodTitle: "시장 이벤트에서 통제된 결정까지.",
  tradingCard1Kicker: "01 / 시장 구조", tradingCard1Title: "시계보다 이벤트를 봅니다.", tradingCard1Text: "여러 척도의 가격 변화와 평균회귀·추세 지속에 유리한 시장 국면을 연구합니다.",
  tradingCard2Kicker: "02 / 체계적 연구", tradingCard2Title: "맥락을 갖춘 신호.", tradingCard2Text: "외환, 암호자산, 주가지수의 확률 신호를 연구하고 시장별 근거를 따로 평가합니다.",
  tradingCard3Kicker: "03 / 실행과 통제", tradingCard3Title: "재현 가능한 결정.", tradingCard3Text: "연구 결정부터 목표 포지션, 실행 기록, 비용, 위험 점검까지 추적 가능한 경로를 설계합니다.",
  tradingVenuesEyebrow: "거래 장소 지도", tradingVenuesTitle: "우리가 <span>거래하는 곳.</span>", tradingVenuesIntro: "연구 데이터, 계획된 실행 경로와 향후 시장 접근입니다.",
  tradingVenueBinance: "시장 데이터", tradingVenueOkx: "거래소 연구", tradingVenueTmgm: "계획된 CFD 실행", tradingVenueCme: "선물 로드맵",
  tradingVenuesNote: "장소 이름은 연구와 계획 경로를 나타내며 제휴 관계나 모든 장소에서의 실거래를 뜻하지 않습니다.",
  tradingVenuePause: "움직임 일시정지", tradingVenueResume: "움직임 다시 시작",
  tradingJoinEyebrow: "함께 연구하기", tradingJoinTitle: "다음 연구 단계를 함께 만듭니다.", tradingJoinText: "체계적 시장 연구, 확률 모델링 또는 실행 시스템에 관심이 있다면 간단한 소개와 관련 작업 링크를 보내 주세요.",
  tradingApply: "Auralis Tech 팀 지원하기",
  tradingFooterNav: "바닥글 탐색", tradingFooterContact: "문의", tradingFooterPrivacy: "개인정보 처리방침",
  tradingDisclaimer: "이 페이지는 정보 제공을 위한 연구 미리보기입니다. 거래 장소 표기는 제휴 또는 실거래를 뜻하지 않습니다. 거래 서비스를 제공하거나 자금을 모집하거나 투자 조언을 제공하지 않습니다.",
  tradingStatus: "연구개발 미리보기 · 성과 주장 없음",
  tradingFooterReturn: "메인 사이트로 돌아가기 ↗",
  privacyBackLabel: "Auralis Tech로 돌아가기", privacyEyebrow: "웹사이트 개인정보", privacyTitle: "개인정보 <span>처리방침.</span>",
  privacyIntro: "이 안내는 Derek G. Ma 박사가 관리하는 Auralis Tech 연구 미리보기와 이 페이지에 적용됩니다. SRI Lab 메인 사이트의 별도 방문 분석은 여기의 범위 밖입니다.",
  privacySection1Title: "페이지 제공", privacySection1Text: "정적 페이지는 GitHub Pages에서 제공하고 서체는 Google Fonts에서 불러옵니다. 브라우저가 해당 제공자에게 요청을 보내며, 제공자는 자체 정책에 따라 기술적 요청 데이터를 처리할 수 있습니다. 이 미리보기 페이지에는 자체 분석 스크립트나 광고 쿠키가 없습니다.",
  privacySection2Title: "언어 선택", privacySection2Text: "언어를 바꾸면 사이트가 브라우저 로컬 저장소에 “sri-language”를 저장하고 URL에 언어 코드를 추가합니다. 브라우저에서 사이트 데이터를 지우면 이 설정을 삭제할 수 있습니다.",
  privacySection3Title: "이메일 문의", privacySection3Text: "문의 및 지원 링크는 이메일 앱을 열며 이 사이트에는 지원 양식이 없습니다. 이메일을 보내면 메시지와 첨부파일은 발신자와 수신자의 이메일 서비스에서 처리됩니다. 기밀 계정 또는 거래 정보를 보내지 마세요.",
  privacySection4Title: "문의", privacySection4Text: "이 미리보기 또는 보낸 이메일에 관한 문의는 Derek.Ma.1@warwick.ac.uk로 보내 주세요.",
  privacyUpdated: "최종 업데이트: 2026년 10월 25일", privacyReturn: "Auralis Tech로 돌아가기"
});

Object.assign(translations.ja, {
  researchTradingEntryLabel: "听风 × Auralis Tech 研究プレビュー",
  tradingEntry: "听风 × Auralis Tech ↗",
  tradingHomeLabel: "SRI Lab のホームページに戻る",
  tradingBrandSub: "アルゴリズム取引の研究",
  tradingEyebrow: "研究開発プレビュー",
  tradingTitle: "市場構造を読み、<span>体系的な判断を設計する。</span>",
  tradingIntro: "イベントに基づくシグナルと複数の時間尺度の市場状況を研究し、研究上の判断を再現可能な執行とリスク確認につなげます。",
  tradingMarketsLabel: "研究対象市場",
  tradingMarkets: "外国為替 · 暗号資産 · 株価指数",
  tradingReturn: "SRI Lab に戻る",
  tradingVisualCore: "確率的フィールド",
  tradingVisualDescription: "研究テーマ：ブラウン運動、確率モデリング、多変量の不確実性、極値解析",
  tradingMath1Local: "ブラウン運動", tradingMath2Local: "確率モデリング", tradingMath3Local: "多変量の不確実性", tradingMath4Local: "極値解析",
  tradingMotionPause: "動きを一時停止", tradingMotionResume: "動きを再開",
  tradingMethodEyebrow: "研究の視点",
  tradingMethodTitle: "市場イベントから管理された判断へ。",
  tradingCard1Kicker: "01 / 市場構造", tradingCard1Title: "時間よりイベントを捉える。", tradingCard1Text: "複数の尺度での価格変動と、平均回帰やトレンド継続に適した市場状況を研究します。",
  tradingCard2Kicker: "02 / 体系的研究", tradingCard2Title: "文脈を持つシグナル。", tradingCard2Text: "外国為替、暗号資産、株価指数の確率的シグナルを研究し、市場ごとに根拠を評価します。",
  tradingCard3Kicker: "03 / 執行と管理", tradingCard3Title: "再現できる判断。", tradingCard3Text: "研究判断から目標ポジション、執行記録、コスト、リスク確認まで追跡できる流れを構築します。",
  tradingVenuesEyebrow: "取引先マップ", tradingVenuesTitle: "私たちの<span>取引市場。</span>", tradingVenuesIntro: "研究データ、計画中の執行経路、将来の市場アクセスを示します。",
  tradingVenueBinance: "市場データ", tradingVenueOkx: "取引所の研究", tradingVenueTmgm: "計画中の CFD 執行", tradingVenueCme: "先物のロードマップ",
  tradingVenuesNote: "名称は研究と計画中の経路を示すもので、提携関係や全市場での実取引を意味しません。",
  tradingVenuePause: "動きを一時停止", tradingVenueResume: "動きを再開",
  tradingJoinEyebrow: "チームと研究", tradingJoinTitle: "次の研究基盤を一緒につくる。", tradingJoinText: "体系的な市場研究、確率モデリング、執行システムに関心があれば、簡単な自己紹介と関連する成果のリンクをお送りください。",
  tradingApply: "Auralis Tech チームに応募する",
  tradingFooterNav: "フッターナビゲーション", tradingFooterContact: "お問い合わせ", tradingFooterPrivacy: "プライバシーポリシー",
  tradingDisclaimer: "本ページは情報提供を目的とする研究プレビューです。市場名は提携や実取引を意味しません。取引サービス、資金募集、投資助言を提供するものではありません。",
  tradingStatus: "研究開発プレビュー · 運用実績の主張なし",
  tradingFooterReturn: "メインサイトに戻る ↗",
  privacyBackLabel: "Auralis Tech に戻る", privacyEyebrow: "サイトのプライバシー", privacyTitle: "プライバシー<span>ポリシー。</span>",
  privacyIntro: "この案内は、Derek G. Ma 博士が管理する Auralis Tech 研究プレビューと本ページを対象とします。SRI Lab のメインサイトには別のアクセス解析があり、この案内の対象外です。",
  privacySection1Title: "ページの配信", privacySection1Text: "静的ページは GitHub Pages から配信され、書体は Google Fonts から読み込まれます。ブラウザーは各提供元にリクエストを送信し、提供元は独自の方針に従い技術的なリクエストデータを扱う場合があります。プレビューにはサイト内の解析スクリプトや広告 Cookie はありません。",
  privacySection2Title: "言語の選択", privacySection2Text: "言語を切り替えると、サイトはブラウザーのローカルストレージに “sri-language” を保存し、URL に言語コードを追加します。ブラウザーでサイトデータを削除すると、この設定も削除できます。",
  privacySection3Title: "メールでのお問い合わせ", privacySection3Text: "お問い合わせと応募のリンクはメールアプリを開きます。このサイトに応募フォームはありません。メールを送る場合、本文と添付ファイルは送信元と受信先のメールサービスで処理されます。機密の口座情報や取引情報は送らないでください。",
  privacySection4Title: "ご質問", privacySection4Text: "このプレビューや送信済みのメールについては Derek.Ma.1@warwick.ac.uk にお問い合わせください。",
  privacyUpdated: "最終更新日：2026年10月25日", privacyReturn: "Auralis Tech に戻る"
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const languageButtons = [...document.querySelectorAll("[data-lang]")];
const htmlLanguageCodes = { en: "en", zh: "zh-CN", ko: "ko", ja: "ja" };
let currentLanguage = "en";

function setLanguage(language, persist = true) {
  if (!translations[language]) return;
  currentLanguage = language;
  const dictionary = { ...translations.en, ...translations[language] };

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.innerHTML = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (dictionary[key]) element.setAttribute("aria-label", dictionary[key]);
  });

  document.querySelectorAll("[data-language-link]").forEach((element) => {
    const destination = new URL(element.getAttribute("href"), window.location.href);
    destination.searchParams.set("lang", language);
    element.href = destination.href;
  });

  document.documentElement.lang = htmlLanguageCodes[language];
  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === language));
  });

  if (persist) {
    try {
      localStorage.setItem("sri-language", language);
    } catch (_) {
      // The language switcher still works when storage is unavailable.
    }
    try {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set("lang", language);
      window.history.replaceState(null, "", currentUrl.href);
    } catch (_) {
      // Navigation links also carry the language when URL updates are unavailable.
    }
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

let initialLanguage = "en";
try {
  const savedLanguage = localStorage.getItem("sri-language");
  if (savedLanguage && translations[savedLanguage]) initialLanguage = savedLanguage;
} catch (_) {
  // Default to English when storage is unavailable.
}
const linkLanguage = new URLSearchParams(window.location.search).get("lang");
if (linkLanguage && translations[linkLanguage]) initialLanguage = linkLanguage;
setLanguage(initialLanguage, false);

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const venueMotionButton = document.querySelector(".venue-motion");
const venueRegion = document.querySelector(".trading-venues");
if (venueMotionButton && venueRegion) {
  if (reducedMotion) {
    venueMotionButton.hidden = true;
  } else {
    venueMotionButton.addEventListener("click", () => {
      const paused = venueRegion.classList.toggle("is-paused");
      venueMotionButton.setAttribute("aria-pressed", String(paused));
      venueMotionButton.querySelector(".venue-pause").hidden = paused;
      venueMotionButton.querySelector(".venue-resume").hidden = !paused;
    });
  }
}
const revealGroups = [];

const addRevealGroup = (root, items) => {
  if (!root || !items.length) return;
  items.forEach((item, index) => {
    item.classList.add("scroll-reveal");
    item.style.setProperty("--reveal-delay", `${Math.min(index, 5) * 95}ms`);
  });
  revealGroups.push({ root, items });
};

const hero = document.querySelector(".hero");
addRevealGroup(hero, [
  ...document.querySelectorAll(".hero-copy > *"),
  document.querySelector(".profile-card")
].filter(Boolean));

document.querySelectorAll(".section-intro").forEach((sectionIntro) => {
  addRevealGroup(sectionIntro, [...sectionIntro.children]);
});

addRevealGroup(document.querySelector(".impact-copy"), [...document.querySelectorAll(".impact-copy > *")]);
addRevealGroup(document.querySelector(".contact-card"), [...document.querySelectorAll(".contact-card > *")]);

document.querySelectorAll(".signature-band > p, .research-card, .impact-grid article, .teaching-list > span, .teaching-scores, .evidence-metric, .student-quote, .person-card").forEach((item) => {
  addRevealGroup(item, [item]);
});

document.querySelectorAll(".trading-venues .venues-intro, .trading-venues .venue-marquee, .trading-process .process-intro, .trading-process .process-grid, .trading-join").forEach((item) => {
  addRevealGroup(item, [item]);
});

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealGroups.forEach(({ items }) => items.forEach((item) => item.classList.add("is-visible")));
} else {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const group = revealGroups.find(({ root }) => root === entry.target);
      if (group) group.items.forEach((item) => item.classList.add("is-visible"));
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8%" });

  revealGroups.forEach(({ root }) => revealObserver.observe(root));
}

