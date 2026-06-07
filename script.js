document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('section, article, aside').forEach((el) => {
  el.classList.add('fade-in');
  observer.observe(el);
});

const translations = {
  en: {
    navResearch: "Research",
    navProjects: "Projects",
    navTeaching: "Teaching",
    navPeople: "People",
    navContact: "Contact",

    heroLine1: "From",
    heroLine2: "uncertainty to",
    heroLine3: "risk intelligence.",
    heroLede:
      "I develop stochastic, physics-informed, and AI-assisted models that transform uncertain data into predictive, interpretable, and decision-ready risk intelligence across engineering, hazard, energy, and financial systems.",

    exploreResearch: "Explore research",
    getInTouch: "Get in touch",

    researchVision: "Research vision",
    researchTitle:
      "Risk intelligence for uncertain, complex, and data-limited systems.",
    researchText1:
      "My work develops a unified risk-intelligence framework for systems where data are sparse, noisy, heterogeneous, or shifting over time. The central question is: how can we make reliable predictions and better decisions when uncertainty is unavoidable?",
    researchText2:
      "The lab integrates stochastic modelling, AI-informed inference, physical mechanisms, and interpretable uncertainty measures to support risk assessment across natural hazards, engineered systems, energy markets, and financial decision-making.",

    card1Title: "AI-informed random fields",
    card1Text:
      "Learning hidden spatial variability from sparse observations, images, and simulations to quantify uncertainty and support risk-aware prediction.",
    card2Title: "Catastrophe and hazard risk modelling",
    card2Text:
      "Developing data-and-physics-driven models for low-probability, high-impact events, with emphasis on uncertainty propagation, scenario analysis, and risk assessment.",
    card3Title: "Energy and financial risk intelligence",
    card3Text:
      "Bridging stochastic processes, risk pricing, tail-event modelling, and AI-assisted decision systems for energy transfer and financial risk analysis.",

    projectsEyebrow: "Selected project directions",
    projectsTitle:
      "Building risk intelligence across physical, hazard, energy, and financial systems.",

    teachingEyebrow: "Teaching & supervision",
    teachingTitle:
      "Mathematics, engineering judgement, and research-led learning.",
    teachingText:
      "I teach Engineering Mathematics and supervise student projects across uncertainty modelling, AI for engineering, risk analysis, applied mathematics, and computational decision-making. My teaching aims to help students move from formula-based learning to model-based reasoning.",

    peopleEyebrow: "People",
    peopleTitle:
      "Building a small, ambitious, interdisciplinary research group.",
    peopleText:
      "We welcome students, visiting scholars, and collaborators interested in stochastic risk intelligence, uncertainty modelling, AI-informed inference, hazard risk assessment, energy risk, and computational finance.",

    joinTitle: "Join the lab",
    joinOpen: "Open Opportunities",
    joinAffiliation: "PhD Students · Visiting Scholars · Collaborators",
    joinText:
      "I welcome motivated students and collaborators interested in stochastic risk intelligence, AI-informed uncertainty modelling, hazard risk assessment, energy risk, and computational finance.",
    emailDerek: "Email Derek",
    submitForm: "Submit interest form",

    contactEyebrow: "Contact",
    contactTitle: "Interested in collaboration?",
    contactText:
      "I am open to interdisciplinary collaborations in stochastic risk intelligence, AI-informed uncertainty modelling, catastrophe and hazard risk assessment, energy risk, and computational finance.",

    footerText: "Designed as a preview landing page."
  },

  zh: {
    navResearch: "研究",
    navProjects: "项目",
    navTeaching: "教学",
    navPeople: "团队",
    navContact: "联系",

    heroLine1: "从",
    heroLine2: "不确定性走向",
    heroLine3: "风险智能。",
    heroLede:
      "我致力于发展随机建模、物理信息驱动建模与人工智能辅助建模方法，将不确定数据转化为可预测、可解释、可支持决策的风险智能，并应用于工程、灾害、能源与金融系统。",

    exploreResearch: "探索研究",
    getInTouch: "联系我",

    researchVision: "研究愿景",
    researchTitle: "面向不确定、复杂与数据受限系统的风险智能。",
    researchText1:
      "我的研究致力于建立统一的风险智能框架，用于处理数据稀疏、含噪、异质或随时间变化的复杂系统。核心问题是：当不确定性不可避免时，我们如何仍然做出可靠预测与更优决策？",
    researchText2:
      "实验室融合随机建模、AI赋能推断、物理机制与可解释不确定性量化方法，支持自然灾害、工程系统、能源市场与金融决策中的风险评估。",

    card1Title: "AI赋能随机场",
    card1Text:
      "从稀疏观测、图像与数值模拟中学习隐藏的空间变异性，量化不确定性，并支持风险感知预测。",
    card2Title: "灾变与灾害风险建模",
    card2Text:
      "面向低概率、高影响事件，发展数据与物理双驱动模型，重点关注不确定性传播、情景分析与风险评估。",
    card3Title: "能源与金融风险智能",
    card3Text:
      "连接随机过程、风险定价、尾部事件建模与AI辅助决策系统，用于能源风险转移与金融风险分析。",

    projectsEyebrow: "代表性项目方向",
    projectsTitle: "构建跨物理、灾害、能源与金融系统的风险智能。",

    teachingEyebrow: "教学与指导",
    teachingTitle: "数学、工程判断与研究驱动型学习。",
    teachingText:
      "我的教学与指导覆盖工程数学、不确定性建模、AI工程应用、风险分析、应用数学与计算决策。我希望帮助学生从公式化学习走向模型化思维。",

    peopleEyebrow: "团队",
    peopleTitle: "建设一个小而有野心的交叉型研究团队。",
    peopleText:
      "我们欢迎对随机风险智能、不确定性建模、AI赋能推断、灾害风险评估、能源风险与计算金融感兴趣的学生、访问学者与合作者。",

    joinTitle: "加入团队",
    joinOpen: "开放机会",
    joinAffiliation: "博士生 · 访问学者 · 合作者",
    joinText:
      "欢迎对随机风险智能、AI赋能不确定性建模、灾害风险评估、能源风险与计算金融感兴趣的学生和合作者联系我。",
    emailDerek: "邮件联系 Derek",
    submitForm: "提交意向表",

    contactEyebrow: "联系",
    contactTitle: "有兴趣开展合作？",
    contactText:
      "我欢迎围绕随机风险智能、AI赋能不确定性建模、灾变与灾害风险评估、能源风险与计算金融的跨学科合作。",

    footerText: "个人主页预览版本。"
  }
};

let currentLang = "en";

function setLanguage(lang) {
  currentLang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.textContent = lang === "en" ? "中文" : "EN";
  }

  document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
}

const langToggle = document.getElementById("langToggle");

if (langToggle) {
  langToggle.addEventListener("click", () => {
    setLanguage(currentLang === "en" ? "zh" : "en");
  });
}

function animateCountUpMetrics() {
  const metrics = document.querySelectorAll(".count-up");

  metrics.forEach((metric) => {
    if (metric.dataset.animated === "true") return;

    const target = Number(metric.dataset.value);
    const suffix = metric.dataset.suffix || "";

    if (!target) return;

    metric.dataset.animated = "true";

    const duration = 1300;
    const startTime = performance.now();

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(target * eased);

      metric.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        metric.textContent = target + suffix;
      }
    }

    requestAnimationFrame(update);
  });
}

const impactMetrics = document.querySelector(".impact-metrics");

if (impactMetrics) {
  const impactObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCountUpMetrics();
        impactObserver.disconnect();
      }
    },
    { threshold: 0.35 }
  );

  impactObserver.observe(impactMetrics);
}
