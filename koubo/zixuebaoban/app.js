// Application data
const appData = {
  comparison_data: {
    self_learning_pros: [
      "成本低廉，只需购买材料和工具",
      "时间完全自由，可随时学习", 
      "学习节奏自主控制",
      "可重复观看教程视频",
      "在家舒适环境学习"
    ],
    self_learning_cons: [
      "缺乏专业指导和即时反馈",
      "错误不易被发现和纠正",
      "需要很强的自律性", 
      "缺乏同伴交流和鼓励",
      "可能形成不良习惯"
    ],
    classes_pros: [
      "专业老师系统化指导",
      "错误能及时发现和纠正",
      "有同学互动和交流",
      "可使用专业设备",
      "结构化课程安排"
    ],
    classes_cons: [
      "学费较高，经济负担重",
      "时间固定，灵活性差",
      "进度统一，无法个性化",
      "需要通勤时间",
      "可能存在课程质量差异"
    ]
  },
  tools_data: {
    basic_tools: [
      {"name": "缝纫机", "importance": "必需", "price": "$100-500", "description": "选择基础功能的家用缝纫机"},
      {"name": "面料剪刀", "importance": "必需", "price": "$15-50", "description": "锋利的专用面料剪刀，不可剪纸"},
      {"name": "卷尺", "importance": "必需", "price": "$3-10", "description": "用于测量身体和面料尺寸"},
      {"name": "缝纫针", "importance": "必需", "price": "$5-15", "description": "不同粗细的手缝针套装"},
      {"name": "大头针", "importance": "必需", "price": "$5-15", "description": "玻璃头大头针，可熨烫"}
    ],
    basic_materials: [
      {"name": "线", "importance": "必需", "price": "$2-5/卷", "description": "全能线，基础颜色如黑白灰"},
      {"name": "练习面料", "importance": "必需", "price": "$5-20", "description": "棉质面料，适合初学者练习"},
      {"name": "拆线器", "importance": "必需", "price": "$3-8", "description": "修正错误缝纫的必备工具"},
      {"name": "梭芯", "importance": "必需", "price": "$10-20", "description": "适合缝纫机型号的梭芯"},
      {"name": "熨斗", "importance": "必需", "price": "$20-100", "description": "熨烫面料和缝份"}
    ],
    advanced_tools: [
      {"name": "滚轮切刀", "importance": "推荐", "price": "$15-40", "description": "精确切割面料"},
      {"name": "切割垫", "importance": "推荐", "price": "$20-50", "description": "保护桌面，便于切割"},
      {"name": "标记工具", "importance": "推荐", "price": "$5-15", "description": "可消失的布料标记笔"},
      {"name": "压脚套装", "importance": "推荐", "price": "$15-30", "description": "不同功能的缝纫机压脚"},
      {"name": "弹力布针", "importance": "推荐", "price": "$3-8", "description": "缝制针织面料专用"}
    ]
  },
  learning_resources: {
    online_platforms: [
      {"platform": "YouTube", "type": "视频教程", "channels": "Made to Sew, Evelyn Wood, Professor Pincushion", "features": "免费，随时观看，内容丰富"},
      {"platform": "Reddit", "type": "社区讨论", "channels": "r/sewing, r/SewingForBeginners", "features": "经验分享，问题解答，项目展示"},
      {"platform": "缝纫博客", "type": "图文教程", "channels": "Craftsy, Seamwork, Threads Magazine", "features": "详细步骤，专业技巧"},
      {"platform": "免费图纸", "type": "缝纫图纸", "channels": "Free Sewing Patterns网站", "features": "免费下载，适合练习"}
    ],
    beginner_projects: [
      {"project": "直线缝练习", "difficulty": "入门", "time": "1小时", "skills": "直线缝，机器操作"},
      {"project": "抹布/餐具垫", "difficulty": "入门", "time": "2-3小时", "skills": "边缘处理，四角缝合"},
      {"project": "简易围裙", "difficulty": "初级", "time": "4-6小时", "skills": "缝合，系带制作"},
      {"project": "抱枕套", "difficulty": "初级", "time": "3-4小时", "skills": "拉链安装，装饰缝"},
      {"project": "简单手提袋", "difficulty": "中级", "time": "6-8小时", "skills": "提手制作，内衬缝制"}
    ],
    learning_timeline: [
      {"stage": "第1-2周", "goal": "熟悉缝纫机操作", "practice": "直线缝，转角缝，调节线张力"},
      {"stage": "第3-4周", "goal": "基础技能掌握", "practice": "锁边，缝合不同面料"},
      {"stage": "第5-8周", "goal": "简单项目制作", "practice": "制作餐具垫，抹布等"},
      {"stage": "第9-12周", "goal": "中级项目挑战", "practice": "制作围裙，手提袋等"},
      {"stage": "第13周以后", "goal": "进阶技能学习", "practice": "服装制作，图纸修改"}
    ]
  }
};

// Quiz questions
const quizQuestions = [
  {
    question: "你的缝纫学习预算是多少？",
    options: [
      { text: "100-300元（基础工具）", value: "self_learning", weight: 2 },
      { text: "300-800元（中等投入）", value: "neutral", weight: 1 },
      { text: "800元以上（不考虑成本）", value: "classes", weight: 2 }
    ]
  },
  {
    question: "你每周能安排多少时间学习缝纫？",
    options: [
      { text: "1-3小时，时间不固定", value: "self_learning", weight: 2 },
      { text: "3-6小时，相对固定", value: "neutral", weight: 1 },
      { text: "6小时以上，时间很固定", value: "classes", weight: 2 }
    ]
  },
  {
    question: "你的学习风格是？",
    options: [
      { text: "喜欢自主探索，按自己节奏", value: "self_learning", weight: 2 },
      { text: "需要一定指导，但保持灵活", value: "neutral", weight: 1 },
      { text: "需要系统指导和结构化学习", value: "classes", weight: 2 }
    ]
  },
  {
    question: "你希望多快掌握基础缝纫技能？",
    options: [
      { text: "慢慢学，享受过程", value: "self_learning", weight: 1 },
      { text: "3-6个月内掌握基础", value: "neutral", weight: 1 },
      { text: "尽快掌握，1-3个月", value: "classes", weight: 2 }
    ]
  },
  {
    question: "你觉得自己的自律性如何？",
    options: [
      { text: "很好，能坚持自学", value: "self_learning", weight: 2 },
      { text: "一般，需要适当督促", value: "neutral", weight: 1 },
      { text: "需要外部督促和指导", value: "classes", weight: 2 }
    ]
  }
];

// Quiz state
let currentQuestionIndex = 0;
let quizScores = { self_learning: 0, classes: 0 };

// DOM elements
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  populateComparisonData();
  populateToolsData();
  populateResourcesData();
  initializeQuiz();
  setupNavigation();
}

// Populate comparison data
function populateComparisonData() {
  const selfLearningPros = document.getElementById('self-learning-pros');
  const selfLearningCons = document.getElementById('self-learning-cons');
  const classesPros = document.getElementById('classes-pros');
  const classesCons = document.getElementById('classes-cons');

  appData.comparison_data.self_learning_pros.forEach(pro => {
    const li = document.createElement('li');
    li.textContent = pro;
    selfLearningPros.appendChild(li);
  });

  appData.comparison_data.self_learning_cons.forEach(con => {
    const li = document.createElement('li');
    li.textContent = con;
    selfLearningCons.appendChild(li);
  });

  appData.comparison_data.classes_pros.forEach(pro => {
    const li = document.createElement('li');
    li.textContent = pro;
    classesPros.appendChild(li);
  });

  appData.comparison_data.classes_cons.forEach(con => {
    const li = document.createElement('li');
    li.textContent = con;
    classesCons.appendChild(li);
  });
}

// Populate tools data
function populateToolsData() {
  populateToolCategory('basic-tools', appData.tools_data.basic_tools);
  populateToolCategory('basic-materials', appData.tools_data.basic_materials);
  populateToolCategory('advanced-tools', appData.tools_data.advanced_tools);
}

function populateToolCategory(containerId, tools) {
  const container = document.getElementById(containerId);
  
  tools.forEach(tool => {
    const toolCard = createToolCard(tool);
    container.appendChild(toolCard);
  });
}

function createToolCard(tool) {
  const card = document.createElement('div');
  card.className = 'tool-card';
  
  const importanceClass = tool.importance === '必需' ? 'required' : 'recommended';
  
  card.innerHTML = `
    <div class="tool-card__header">
      <h4 class="tool-card__name">${tool.name}</h4>
      <span class="tool-card__importance tool-card__importance--${importanceClass}">
        ${tool.importance}
      </span>
    </div>
    <div class="tool-card__price">${tool.price}</div>
    <p class="tool-card__description">${tool.description}</p>
  `;
  
  return card;
}

// Populate resources data
function populateResourcesData() {
  populateOnlinePlatforms();
  populateBeginnerProjects();
  populateLearningTimeline();
}

function populateOnlinePlatforms() {
  const container = document.getElementById('online-platforms');
  
  appData.learning_resources.online_platforms.forEach(platform => {
    const card = document.createElement('div');
    card.className = 'resource-card';
    
    card.innerHTML = `
      <h4 class="resource-card__title">${platform.platform}</h4>
      <div class="resource-card__meta">${platform.type} • ${platform.channels}</div>
      <p class="resource-card__features">${platform.features}</p>
    `;
    
    container.appendChild(card);
  });
}

function populateBeginnerProjects() {
  const container = document.getElementById('beginner-projects');
  
  appData.learning_resources.beginner_projects.forEach(project => {
    const item = document.createElement('div');
    item.className = 'project-item';
    
    const difficultyClass = getDifficultyClass(project.difficulty);
    
    item.innerHTML = `
      <div class="project-item__difficulty project-item__difficulty--${difficultyClass}">
        ${project.difficulty}
      </div>
      <div class="project-item__content">
        <h4 class="project-item__name">${project.project}</h4>
        <div class="project-item__details">
          <span>⏰ ${project.time}</span>
          <span>🎯 ${project.skills}</span>
        </div>
      </div>
    `;
    
    container.appendChild(item);
  });
}

function getDifficultyClass(difficulty) {
  switch(difficulty) {
    case '入门': return 'entry';
    case '初级': return 'beginner';
    case '中级': return 'intermediate';
    default: return 'entry';
  }
}

function populateLearningTimeline() {
  const container = document.getElementById('learning-timeline');
  
  appData.learning_resources.learning_timeline.forEach(stage => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    
    item.innerHTML = `
      <div class="timeline-item__stage">${stage.stage}</div>
      <div class="timeline-item__goal">${stage.goal}</div>
      <div class="timeline-item__practice">${stage.practice}</div>
    `;
    
    container.appendChild(item);
  });
}

// Quiz functionality
function initializeQuiz() {
  showQuestion(0);
  
  document.getElementById('next-btn').addEventListener('click', nextQuestion);
  document.getElementById('prev-btn').addEventListener('click', prevQuestion);
  document.getElementById('restart-btn').addEventListener('click', restartQuiz);
}

function showQuestion(index) {
  const question = quizQuestions[index];
  const questionElement = document.getElementById('quiz-question');
  const optionsElement = document.getElementById('quiz-options');
  const progressBar = document.getElementById('progress-bar');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  // Update progress
  const progress = ((index + 1) / quizQuestions.length) * 100;
  progressBar.style.width = `${progress}%`;
  
  // Show question
  questionElement.textContent = question.question;
  
  // Clear and populate options
  optionsElement.innerHTML = '';
  question.options.forEach((option, optionIndex) => {
    const optionElement = document.createElement('div');
    optionElement.className = 'quiz__option';
    optionElement.textContent = option.text;
    optionElement.addEventListener('click', () => selectOption(optionIndex));
    optionsElement.appendChild(optionElement);
  });
  
  // Update buttons
  prevBtn.disabled = index === 0;
  nextBtn.textContent = index === quizQuestions.length - 1 ? '查看结果' : '下一题';
}

function selectOption(optionIndex) {
  const options = document.querySelectorAll('.quiz__option');
  options.forEach(option => option.classList.remove('selected'));
  options[optionIndex].classList.add('selected');
  
  // Store the selected option
  quizQuestions[currentQuestionIndex].selectedOption = optionIndex;
}

function nextQuestion() {
  const selectedOption = quizQuestions[currentQuestionIndex].selectedOption;
  
  if (selectedOption === undefined) {
    alert('请选择一个答案');
    return;
  }
  
  // Update scores
  const option = quizQuestions[currentQuestionIndex].options[selectedOption];
  if (option.value === 'self_learning') {
    quizScores.self_learning += option.weight;
  } else if (option.value === 'classes') {
    quizScores.classes += option.weight;
  }
  
  if (currentQuestionIndex === quizQuestions.length - 1) {
    showResult();
  } else {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    // Remove previous score
    const selectedOption = quizQuestions[currentQuestionIndex].selectedOption;
    if (selectedOption !== undefined) {
      const option = quizQuestions[currentQuestionIndex].options[selectedOption];
      if (option.value === 'self_learning') {
        quizScores.self_learning -= option.weight;
      } else if (option.value === 'classes') {
        quizScores.classes -= option.weight;
      }
    }
    
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
  }
}

function showResult() {
  const quizContent = document.getElementById('quiz-content');
  const quizResult = document.getElementById('quiz-result');
  const resultContent = document.getElementById('result-content');
  
  quizContent.classList.add('hidden');
  quizResult.classList.remove('hidden');
  
  let recommendation, description, tips;
  
  if (quizScores.self_learning > quizScores.classes) {
    recommendation = '建议选择自学缝纫';
    description = '根据你的回答，自学更适合你的情况。你有良好的自律性和灵活的时间安排，能够享受自主学习的过程。';
    tips = [
      '从基础工具开始，逐步添置设备',
      '选择高质量的在线教程和视频',
      '加入缝纫社区获得支持和建议',
      '设定明确的学习目标和时间表',
      '从简单项目开始，循序渐进'
    ];
  } else if (quizScores.classes > quizScores.self_learning) {
    recommendation = '建议选择报班学习';
    description = '根据你的回答，报班学习更适合你。你希望获得专业指导和系统化的学习，有相对固定的时间安排。';
    tips = [
      '选择有经验的老师和良好口碑的机构',
      '了解课程内容和教学方式',
      '准备好基础工具，课程可能会有要求',
      '积极参与课堂互动和同学交流',
      '课后复习和练习巩固所学技能'
    ];
  } else {
    recommendation = '建议混合学习方式';
    description = '你的情况介于两者之间，可以考虑混合学习方式：参加基础课程建立框架，然后通过自学深化技能。';
    tips = [
      '先参加短期基础课程掌握要点',
      '使用在线资源补充和深化学习',
      '保持与缝纫社区的联系',
      '根据进度调整学习方式',
      '记录学习过程和遇到的问题'
    ];
  }
  
  resultContent.innerHTML = `
    <h3>${recommendation}</h3>
    <p>${description}</p>
    <h4>具体建议：</h4>
    <ul>
      ${tips.map(tip => `<li>${tip}</li>`).join('')}
    </ul>
  `;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  quizScores = { self_learning: 0, classes: 0 };
  
  // Clear all selected options
  quizQuestions.forEach(question => {
    delete question.selectedOption;
  });
  
  const quizContent = document.getElementById('quiz-content');
  const quizResult = document.getElementById('quiz-result');
  
  quizResult.classList.add('hidden');
  quizContent.classList.remove('hidden');
  
  showQuestion(0);
}

// Navigation
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav__link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Update active nav link on scroll
  window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav__link');
  const scrollPosition = window.scrollY + 100;
  
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      const correspondingNavLink = document.querySelector(`a[href="#${section.id}"]`);
      if (correspondingNavLink) {
        correspondingNavLink.classList.add('active');
      }
    }
  });
}

// Add smooth scroll behavior to all anchor links
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
});

// Add fade-in animation for cards on scroll
function addScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe cards and other elements
  const elementsToAnimate = document.querySelectorAll('.comparison__card, .tool-card, .resource-card, .project-item, .timeline-item');
  
  elementsToAnimate.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Initialize animations after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(addScrollAnimations, 100);
});