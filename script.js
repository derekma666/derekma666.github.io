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
    teachingEvidenceEyebrow: "Evidence of teaching", teachingEvidenceTitle: "Support that students can <span class=\"gradient-emphasis\">feel and measure.</span>",
    teachingEvidenceText: "Aggregate results and short, non-identifying extracts from Warwick School of Engineering student surveys.",
    teachingMetric1Title: "Teaching satisfaction", teachingMetric1Text: "Reported for both ES1A1 and ES1A8.",
    teachingMetric2Title: "Subject engagement", teachingMetric2Text: "Highest reported score across ES1A1 and ES1A8.",
    teachingMetric3Title: "Learning support", teachingMetric3Text: "Reported for both ES1A1 and ES1A8.",
    teachingSurveySource: "2025–26 School of Engineering student surveys · 17 submitted responses across ES1A1 and ES1A8",
    teachingQuote1: "“Derek teaches an example and then allows the class to engage… providing support where required.”", teachingQuote1Source: "Anonymous student feedback · ES1A1",
    teachingQuote2: "“Brilliant notes… and clear structure. Derek is brilliant with being consistent in every lesson’s delivery.”", teachingQuote2Source: "Anonymous student feedback · ES1A8",
    teachingActionEyebrow: "Feedback into action", teachingActionTitle: "Listening, refining, and <span class=\"gradient-emphasis\">making mathematics learnable.</span>",
    teachingActionText: "Student feedback continues to shape the balance between mathematical depth, practice, assessment clarity, and pace.",
    teachingAction1: "More guided practice", teachingAction2: "Clearer assessment guidance", teachingAction3: "Better-paced revision support",
    peopleEyebrow: "People & collaborators", peopleTitle: "A focused, interdisciplinary <span class=\"gradient-emphasis\">applied mathematics network.</span>",
    peopleText: "Students and collaborators connect <strong class=\"copy-emphasis\">stochastic modelling, engineering science, Earth systems, computer vision, and financial risk.</strong>",
    person1Role: "PhD Student", person1Affiliation: "University of Warwick, United Kingdom", person1Text: "Stochastic modelling, geotechnical uncertainty, random fields, and probabilistic representations of spatially variable engineering systems.",
    person2Role: "PhD Student", person2Affiliation: "University of Warwick, United Kingdom", person2Text: "Quantitative risk, pricing, and computational finance, with emphasis on uncertainty-aware valuation, tail events, and data-informed decisions.",
    person3Role: "PhD Student", person3Affiliation: "University of Warwick, United Kingdom", person3Text: "Machine learning, computer vision, and geotechnical imaging for interpretable analysis of engineering materials, structures, and risk.",
    person4Role: "Visiting Research Associate", person4Affiliation: "Nanchang University, China", person4Text: "Landslide dynamics, neural operators, and physics-informed modelling for rapid simulation, uncertainty propagation, and hazard-aware prediction.",
    person5Role: "Research Assistant", person5Affiliation: "The Chinese University of Hong Kong, Hong Kong SAR, China", person5Text: "Image segmentation and AI-assisted geotechnical visual intelligence, linking material features, spatial patterns, and engineering interpretation.",
    person6Role: "Former Visiting Student · Marie Skłodowska-Curie Fellow", person6Affiliation: "University of Liverpool, United Kingdom", person6Text: "GeoAI, stochastic modelling, and uncertainty-aware simulation for spatially variable ground conditions and data-informed geotechnical analysis.",
    person7Role: "Applied AI Research Fellow", person7Affiliation: "University of Warwick, United Kingdom", person7Text: "Machine learning, computer vision, and image analysis for engineering inspection, scientific imaging, and interpretable pattern recognition.",
    person8Role: "Associate Professor · Visiting Scholar & Collaborator", person8Affiliation: "Guizhou University, China", person8Text: "Geotechnical modelling, uncertainty quantification, and risk analysis for complex ground behaviour, infrastructure resilience, and engineering decisions.",
    person9Name: "Mr Min Zhong", person9Role: "Visiting Research Associate", person9Affiliation: "University of Warwick, United Kingdom", person9Text: "Collaborative research in engineering modelling, data-informed analysis, and uncertainty-aware computational methods for applied science.",
    joinLabel: "Open opportunities", joinTitle: "Join the lab",
    joinText: "I welcome thoughtful enquiries from prospective PhD students, visiting scholars, and collaborators whose interests connect with the three research branches.",
    emailDerek: "Email Derek",
    contactEyebrow: "Contact", contactTitle: "Let’s turn uncertainty into a useful decision.",
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
    teachingEvidenceEyebrow: "教学成效", teachingEvidenceTitle: "让学生能够<span class=\"gradient-emphasis\">感受到、也衡量得到</span>的支持。",
    teachingEvidenceText: "数据来自华威大学工程学院学生调查，仅呈现汇总结果与无法识别个人的短评摘录。",
    teachingMetric1Title: "教学满意度", teachingMetric1Text: "ES1A1 与 ES1A8 均为此分数。",
    teachingMetric2Title: "课堂吸引力", teachingMetric2Text: "ES1A1 与 ES1A8 中的最高调查分数。",
    teachingMetric3Title: "学习支持", teachingMetric3Text: "ES1A1 与 ES1A8 均为此分数。",
    teachingSurveySource: "2025–26 工程学院学生调查 · ES1A1 与 ES1A8 共收到 17 份问卷",
    teachingQuote1: "“Derek 先讲解例题，再让全班自主解题，并在需要时提供支持。”", teachingQuote1Source: "匿名学生反馈 · ES1A1",
    teachingQuote2: "“印发的讲义非常出色，结构也很清晰；Derek 每节课的教学都非常稳定。”", teachingQuote2Source: "匿名学生反馈 · ES1A8",
    teachingActionEyebrow: "让反馈转化为行动", teachingActionTitle: "持续倾听、不断改进，让<span class=\"gradient-emphasis\">数学真正可学。</span>",
    teachingActionText: "学生反馈持续帮助我在数学深度、练习强度、考核说明与教学节奏之间取得更好的平衡。",
    teachingAction1: "增加引导式练习", teachingAction2: "提供更清晰的考核说明", teachingAction3: "优化复习支持与教学节奏",
    peopleEyebrow: "学生与合作者", peopleTitle: "一个专注而交叉的<span class=\"gradient-emphasis\">应用数学研究网络。</span>",
    peopleText: "学生与合作者共同连接<strong class=\"copy-emphasis\">随机建模、工程科学、地球系统、计算机视觉与金融风险。</strong>",
    person1Role: "博士研究生", person1Affiliation: "英国华威大学", person1Text: "随机建模、岩土不确定性、随机场，以及空间变异工程系统的概率表征。",
    person2Role: "博士研究生", person2Affiliation: "英国华威大学", person2Text: "量化风险、定价与计算金融，重点研究不确定性感知估值、尾部事件与数据驱动决策。",
    person3Role: "博士研究生", person3Affiliation: "英国华威大学", person3Text: "机器学习、计算机视觉与岩土成像，用于工程材料、结构和风险的可解释分析。",
    person4Role: "访问研究助理", person4Affiliation: "中国南昌大学", person4Text: "滑坡动力学、神经算子与物理信息建模，面向快速模拟、不确定性传播与灾害预测。",
    person5Role: "研究助理", person5Affiliation: "中国香港特别行政区 · 香港中文大学", person5Text: "图像分割与 AI 辅助岩土视觉智能，连接材料特征、空间模式与工程解释。",
    person6Role: "曾任访问学生 · 玛丽·斯克沃多夫斯卡-居里学者", person6Affiliation: "英国利物浦大学", person6Text: "GeoAI、随机建模与不确定性感知模拟，研究空间变异地层与数据驱动岩土分析。",
    person7Role: "应用人工智能研究员", person7Affiliation: "英国华威大学", person7Text: "机器学习、计算机视觉与图像分析，服务于工程检测、科学成像和可解释模式识别。",
    person8Role: "副教授 · 访问学者与合作者", person8Affiliation: "中国贵州大学", person8Text: "岩土建模、不确定性量化与风险分析，面向复杂地层行为、基础设施韧性与工程决策。",
    person9Name: "Mr Min Zhong", person9Role: "访问研究助理", person9Affiliation: "英国华威大学", person9Text: "围绕工程建模、数据驱动分析与不确定性感知计算方法开展应用科学合作研究。",
    joinLabel: "开放机会", joinTitle: "加入团队",
    joinText: "欢迎研究兴趣与三条主线相关的博士申请者、访问学者与合作者发送简洁而有针对性的咨询。",
    emailDerek: "邮件联系 Derek",
    contactEyebrow: "联系", contactTitle: "让不确定性成为可用的决策依据。",
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
  teachingEvidenceEyebrow: "교육 성과", teachingEvidenceTitle: "학생이 <span class=\"gradient-emphasis\">체감하고 측정할 수 있는</span> 지원.",
  teachingEvidenceText: "워릭대학교 공학부 학생 설문의 집계 결과와 개인을 식별할 수 없는 짧은 의견만 제시합니다.",
  teachingMetric1Title: "교육 만족도", teachingMetric1Text: "ES1A1과 ES1A8 모두 동일한 점수입니다.",
  teachingMetric2Title: "수업 몰입도", teachingMetric2Text: "ES1A1과 ES1A8에서 보고된 최고 점수입니다.",
  teachingMetric3Title: "학습 지원", teachingMetric3Text: "ES1A1과 ES1A8 모두 동일한 점수입니다.",
  teachingSurveySource: "2025–26 공학부 학생 설문 · ES1A1과 ES1A8에서 총 17건의 응답",
  teachingQuote1: "“Derek은 예제를 설명한 뒤 학생들이 직접 문제에 참여하게 하고, 필요할 때 지원을 제공합니다.”", teachingQuote1Source: "익명 학생 의견 · ES1A1",
  teachingQuote2: "“인쇄된 노트가 훌륭하고 구조가 명확합니다. Derek의 수업은 매 시간 일관되게 잘 진행됩니다.”", teachingQuote2Source: "익명 학생 의견 · ES1A8",
  teachingActionEyebrow: "피드백을 행동으로", teachingActionTitle: "경청하고 개선하며 <span class=\"gradient-emphasis\">배울 수 있는 수학</span>을 만듭니다.",
  teachingActionText: "학생 피드백은 수학적 깊이, 연습, 평가 안내, 수업 속도의 균형을 지속적으로 개선하는 데 반영됩니다.",
  teachingAction1: "더 많은 단계별 연습", teachingAction2: "더 명확한 평가 안내", teachingAction3: "속도를 조정한 복습 지원",
  peopleEyebrow: "학생 및 협력 연구자", peopleTitle: "집중도 높고 학제적인 <span class=\"gradient-emphasis\">응용수학 연구 네트워크.</span>",
  peopleText: "학생과 협력 연구자들은 <strong class=\"copy-emphasis\">확률 모델링, 공학과학, 지구 시스템, 컴퓨터 비전, 금융 리스크</strong>를 연결합니다.",
  person1Role: "박사과정 연구원", person1Affiliation: "워릭대학교, 영국", person1Text: "확률 모델링, 지반공학 불확실성, 랜덤 필드, 공간 변동 공학 시스템의 확률론적 표현을 연구합니다.",
  person2Role: "박사과정 연구원", person2Affiliation: "워릭대학교, 영국", person2Text: "정량적 리스크, 가격결정, 계산금융을 연구하며 불확실성 기반 가치평가, 꼬리사건, 데이터 기반 의사결정에 중점을 둡니다.",
  person3Role: "박사과정 연구원", person3Affiliation: "워릭대학교, 영국", person3Text: "공학 재료, 구조, 리스크의 해석 가능한 분석을 위한 머신러닝, 컴퓨터 비전, 지반공학 이미징을 연구합니다.",
  person4Role: "방문연구원", person4Affiliation: "난창대학교, 중국", person4Text: "빠른 시뮬레이션, 불확실성 전파, 재해 예측을 위한 산사태 동역학, 신경 연산자, 물리정보 모델링을 연구합니다.",
  person5Role: "연구조교", person5Affiliation: "홍콩중문대학교, 중국 홍콩 특별행정구", person5Text: "재료 특성, 공간 패턴, 공학적 해석을 연결하는 영상 분할과 AI 기반 지반공학 시각 인텔리전스를 연구합니다.",
  person6Role: "전 방문학생 · 마리 스클로도프스카퀴리 펠로우", person6Affiliation: "리버풀대학교, 영국", person6Text: "공간적으로 변동하는 지반 조건과 데이터 기반 지반공학 분석을 위한 GeoAI, 확률 모델링, 불확실성 인지 시뮬레이션을 연구합니다.",
  person7Role: "응용 AI 연구원", person7Affiliation: "워릭대학교, 영국", person7Text: "공학 검사, 과학 이미징, 해석 가능한 패턴 인식을 위한 머신러닝, 컴퓨터 비전, 영상 분석을 연구합니다.",
  person8Role: "부교수 · 방문학자 및 협력 연구자", person8Affiliation: "구이저우대학교, 중국", person8Text: "복잡한 지반 거동, 인프라 회복탄력성, 공학 의사결정을 위한 지반공학 모델링, 불확실성 정량화, 리스크 분석을 연구합니다.",
  person9Name: "Min Zhong", person9Role: "방문연구원", person9Affiliation: "워릭대학교, 영국", person9Text: "응용과학을 위한 공학 모델링, 데이터 기반 분석, 불확실성 인지 계산기법의 협력 연구를 수행합니다.",
  joinLabel: "열린 기회", joinTitle: "연구실에 합류하기",
  joinText: "세 가지 연구 축과 관심이 맞닿아 있는 박사과정 지원자, 방문학자, 협력 연구자의 구체적인 문의를 환영합니다.",
  emailDerek: "Derek에게 이메일 보내기",
  contactEyebrow: "연락처", contactTitle: "불확실성을 유용한 의사결정으로 바꿉시다.",
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
  teachingEvidenceEyebrow: "教育実績", teachingEvidenceTitle: "学生が<span class=\"gradient-emphasis\">実感し、測定できる</span>支援。",
  teachingEvidenceText: "ウォーリック大学工学部の学生アンケートから、集計結果と個人を特定できない短いコメントのみを掲載しています。",
  teachingMetric1Title: "教育満足度", teachingMetric1Text: "ES1A1とES1A8の両方で同じ評価です。",
  teachingMetric2Title: "授業への関与", teachingMetric2Text: "ES1A1とES1A8で報告された最高評価です。",
  teachingMetric3Title: "学習支援", teachingMetric3Text: "ES1A1とES1A8の両方で同じ評価です。",
  teachingSurveySource: "2025–26 工学部学生アンケート · ES1A1とES1A8で計17件の回答",
  teachingQuote1: "「Derekは例題を説明した後、学生自身が問題に取り組めるようにし、必要なときに支援してくれます。」", teachingQuote1Source: "匿名の学生コメント · ES1A1",
  teachingQuote2: "「配布ノートは素晴らしく、構成も明確です。Derekの授業は毎回一貫して丁寧です。」", teachingQuote2Source: "匿名の学生コメント · ES1A8",
  teachingActionEyebrow: "フィードバックを行動へ", teachingActionTitle: "耳を傾け、改善し、<span class=\"gradient-emphasis\">学べる数学</span>をつくる。",
  teachingActionText: "学生の声を、数学的な深さ、演習量、評価説明、授業ペースのより良いバランスへ継続的に反映しています。",
  teachingAction1: "段階的な演習を増やす", teachingAction2: "評価方法をより明確に説明", teachingAction3: "ペースを整えた復習支援",
  peopleEyebrow: "学生・共同研究者", peopleTitle: "焦点の明確な学際的<span class=\"gradient-emphasis\">応用数学ネットワーク。</span>",
  peopleText: "学生と共同研究者が<strong class=\"copy-emphasis\">確率モデリング、工学科学、地球システム、コンピュータビジョン、金融リスク</strong>を結び付けます。",
  person1Role: "博士課程学生", person1Affiliation: "ウォーリック大学、英国", person1Text: "確率モデリング、地盤工学的不確実性、ランダム場、空間変動を持つ工学システムの確率表現を研究しています。",
  person2Role: "博士課程学生", person2Affiliation: "ウォーリック大学、英国", person2Text: "定量リスク、価格付け、計算金融を研究し、不確実性を考慮した評価、テール事象、データ駆動型意思決定に重点を置いています。",
  person3Role: "博士課程学生", person3Affiliation: "ウォーリック大学、英国", person3Text: "工学材料、構造、リスクの解釈可能な分析に向けた機械学習、コンピュータビジョン、地盤工学イメージングを研究しています。",
  person4Role: "客員研究員", person4Affiliation: "南昌大学、中国", person4Text: "高速シミュレーション、不確実性伝播、ハザード予測に向けた地すべり動力学、ニューラルオペレータ、物理情報モデリングを研究しています。",
  person5Role: "研究助手", person5Affiliation: "香港中文大学、中国香港特別行政区", person5Text: "材料特徴、空間パターン、工学的解釈を結ぶ画像分割とAI支援地盤工学ビジュアル・インテリジェンスを研究しています。",
  person6Role: "元客員学生 · マリー・スクウォドフスカ＝キュリー・フェロー", person6Affiliation: "リバプール大学、英国", person6Text: "空間変動地盤とデータ駆動型地盤解析に向けたGeoAI、確率モデリング、不確実性を考慮したシミュレーションを研究しています。",
  person7Role: "応用AI研究員", person7Affiliation: "ウォーリック大学、英国", person7Text: "工学検査、科学イメージング、解釈可能なパターン認識のための機械学習、コンピュータビジョン、画像解析を研究しています。",
  person8Role: "准教授 · 客員研究者・共同研究者", person8Affiliation: "貴州大学、中国", person8Text: "複雑な地盤挙動、インフラのレジリエンス、工学的意思決定に向けた地盤モデリング、不確実性定量化、リスク分析を研究しています。",
  person9Name: "Min Zhong", person9Role: "客員研究員", person9Affiliation: "ウォーリック大学、英国", person9Text: "応用科学のための工学モデリング、データ駆動型分析、不確実性を考慮した計算手法の共同研究を行っています。",
  joinLabel: "参加機会", joinTitle: "研究室に参加する",
  joinText: "三つの研究軸と関心が重なる博士課程志望者、客員研究者、共同研究者からの具体的なお問い合わせを歓迎します。",
  emailDerek: "Derekにメールする",
  contactEyebrow: "お問い合わせ", contactTitle: "不確実性を有用な意思決定へ変えましょう。",
  contactText: "研究連携、学生指導、政策研究、学際プロジェクトについては、簡単なメールからご相談ください。",
  footerTagline: "確率的リスク・インテリジェンス研究室 · 不確実性をモデル化し、証拠を解釈し、意思決定を設計する。",
  backToTop: "ページ上部へ ↑"
};

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
setLanguage(initialLanguage, false);

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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

document.querySelectorAll(".signature-band > p, .research-card, .impact-grid article, .teaching-list > span, .evidence-metric, .student-quote, .feedback-action, .person-card").forEach((item) => {
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
