// 数据定义
const inspirationData = {
  inspirationSources: [
    {
      name: "历史与复古",
      description: "从服装发展史中汲取设计灵感，了解中西服装差异，开阔设计思路",
      importance: 85,
      frequency: 78,
      category: "历史文化",
      examples: ["维多利亚时代的繁复装饰", "20世纪初的简约线条", "东方传统服饰元素"],
      tips: ["研究不同历史时期的服装特点", "分析历史服饰的剪裁工艺", "将历史元素与现代审美结合"],
      icon: "🏛️"
    },
    {
      name: "文化与传统",
      description: "学习前人成就和传统技艺，在巨人肩膀上创新设计",
      importance: 90,
      frequency: 85,
      category: "历史文化",
      examples: ["中国传统刺绣工艺", "日本和服结构", "印度纱丽印花图案"],
      tips: ["深入了解不同文化的服饰特色", "掌握传统工艺制作技法", "创新性地融合多元文化元素"],
      icon: "🎭"
    },
    {
      name: "自然与环境",
      description: "从大自然的形状、色彩、纹理中寻找协调的设计灵感",
      importance: 95,
      frequency: 90,
      category: "自然艺术",
      examples: ["花朵的形态和色彩", "山川的轮廓线条", "动物的纹路图案"],
      tips: ["观察自然界的色彩搭配", "提取自然形态的设计元素", "运用仿生学原理进行创作"],
      icon: "🌿"
    },
    {
      name: "时尚秀和设计展览",
      description: "观看时装周和设计展，了解流行趋势和设计师创意",
      importance: 88,
      frequency: 80,
      category: "时尚产业",
      examples: ["巴黎时装周", "米兰时装周", "纽约时装周"],
      tips: ["关注国际时装周动态", "分析设计师的创作理念", "把握当季流行趋势"],
      icon: "👗"
    },
    {
      name: "社会与潮流",
      description: "关注社会热点和文化变迁，表达时代精神和年轻人审美",
      importance: 82,
      frequency: 88,
      category: "社会文化",
      examples: ["环保主题设计", "科技感未来主义", "复古怀旧风潮"],
      tips: ["关注社会热点事件", "了解不同文化交流", "表达当代价值观念"],
      icon: "🌍"
    },
    {
      name: "街拍与时尚博主",
      description: "从街头时尚和博主穿搭中获取实用设计灵感",
      importance: 75,
      frequency: 85,
      category: "时尚产业",
      examples: ["街头穿搭风格", "时尚博主造型", "社交媒体时尚内容"],
      tips: ["关注时尚博主账号", "分析街拍穿搭技巧", "学习实用搭配方法"],
      icon: "📸"
    },
    {
      name: "艺术与绘画",
      description: "通过绘画基础和艺术作品激发创作灵感",
      importance: 92,
      frequency: 87,
      category: "自然艺术",
      examples: ["抽象派绘画", "建筑艺术形式", "雕塑作品造型"],
      tips: ["提高绘画表达能力", "研究艺术作品构图", "将艺术理念融入设计"],
      icon: "🎨"
    },
    {
      name: "面料与裁剪",
      description: "通过不同材质和裁剪工艺启发设计创意",
      importance: 89,
      frequency: 92,
      category: "技术材料",
      examples: ["新型科技面料", "传统手工织物", "创新裁剪技术"],
      tips: ["了解面料特性和用途", "掌握基本裁剪技能", "实验不同工艺组合"],
      icon: "✂️"
    },
    {
      name: "色彩与图案",
      description: "运用色彩心理学和图案设计传达情感主题",
      importance: 87,
      frequency: 95,
      category: "技术材料",
      examples: ["季节性色彩搭配", "几何图案设计", "印花图案创作"],
      tips: ["学习色彩搭配理论", "练习图案设计技巧", "掌握印花制作工艺"],
      icon: "🌈"
    },
    {
      name: "个人经历与情感",
      description: "从个人生活体验和情感中寻找独特的创作灵感",
      importance: 80,
      frequency: 70,
      category: "个人情感",
      examples: ["童年回忆主题", "旅行见闻灵感", "情感表达设计"],
      tips: ["记录生活中的灵感瞬间", "将个人故事融入设计", "表达真实的情感体验"],
      icon: "💭"
    }
  ],
  designMethods: [
    {
      name: "模仿形态法",
      description: "将现实中事物的形态通过模仿运用到服装设计中",
      scenario: "自然元素设计",
      difficulty: 3,
      innovation: 7,
      steps: ["观察目标形态", "提取关键特征", "转化为服装元素", "融入整体设计"],
      example: "荷叶边设计源于荷叶的自然形态"
    },
    {
      name: "借用色彩法",
      description: "利用特定色彩作为灵感源，直接运用到服装设计中",
      scenario: "情感表达设计",
      difficulty: 2,
      innovation: 6,
      steps: ["确定色彩主题", "分析色彩情感", "设计配色方案", "应用到服装中"],
      example: "中国红色代表喜庆吉祥的传统文化"
    },
    {
      name: "体现内涵法",
      description: "深入理解文化内涵，以现代形式融入服装设计",
      scenario: "文化主题设计",
      difficulty: 4,
      innovation: 8,
      steps: ["研究文化背景", "提取精神内涵", "现代化转换", "设计表达应用"],
      example: "皮影戏元素融入现代服装设计"
    },
    {
      name: "材质展现法",
      description: "通过创新材质选择和处理创造独特视觉效果",
      scenario: "创新材料设计",
      difficulty: 3,
      innovation: 9,
      steps: ["研究材料特性", "实验材质组合", "设计应用方案", "制作样品测试"],
      example: "用科技面料模拟蘑菇形态的礼服设计"
    },
    {
      name: "解构重组法",
      description: "打破传统服装架构，重新组构新的设计形式",
      scenario: "现代时尚设计",
      difficulty: 5,
      innovation: 9,
      steps: ["分析传统结构", "确定解构点", "重新组织元素", "创建新的形式"],
      example: "川久保玲的不对称西服设计"
    },
    {
      name: "异质同构法",
      description: "将不同风格元素整合，创造新的设计语言",
      scenario: "混搭风格设计",
      difficulty: 4,
      innovation: 8,
      steps: ["选择对比元素", "找到统一性", "平衡对立关系", "形成新的整体"],
      example: "东方面料与西方版型的结合"
    },
    {
      name: "想象构思法",
      description: "运用想象力创造超越现实的设计概念",
      scenario: "概念艺术设计",
      difficulty: 4,
      innovation: 9,
      steps: ["发挥想象空间", "构建概念框架", "具象化表达", "实现设计目标"],
      example: "未来主义科幻风格服装设计"
    },
    {
      name: "跨界融合法",
      description: "融合其他领域的设计理念和方法",
      scenario: "品牌差异化设计",
      difficulty: 5,
      innovation: 10,
      steps: ["确定跨界领域", "研究该领域特点", "寻找融合点", "创新设计应用"],
      example: "建筑设计理念在服装结构中的应用"
    }
  ],
  designProcess: [
    {
      stage: "灵感收集",
      duration: 7,
      importance: 9,
      skills: "观察分析",
      description: "广泛收集各种灵感素材，建立创意资料库"
    },
    {
      stage: "概念提取",
      duration: 3,
      importance: 8,
      skills: "创意思维",
      description: "从灵感中提取核心概念和设计主题"
    },
    {
      stage: "设计草图",
      duration: 5,
      importance: 9,
      skills: "绘画表达",
      description: "将概念转化为具体的设计草图和效果图"
    },
    {
      stage: "材料选择",
      duration: 4,
      importance: 7,
      skills: "材料知识",
      description: "根据设计需求选择合适的面料和辅料"
    },
    {
      stage: "样品制作",
      duration: 10,
      importance: 8,
      skills: "制作工艺",
      description: "制作服装样品，验证设计可行性"
    },
    {
      stage: "测试调整",
      duration: 6,
      importance: 7,
      skills: "问题解决",
      description: "测试样品效果，根据反馈进行调整"
    },
    {
      stage: "最终产品",
      duration: 8,
      importance: 9,
      skills: "整合能力",
      description: "完成最终设计，准备量产或发布"
    },
    {
      stage: "市场反馈",
      duration: 15,
      importance: 6,
      skills: "市场洞察",
      description: "收集市场和用户反馈，为下次设计改进"
    }
  ]
};

// DOM 元素
let navbar, navbarToggle, inspirationGrid, methodsAccordion, processTimeline;

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
  initializeElements();
  setupNavigation();
  renderInspirationSources();
  renderDesignMethods();
  renderDesignProcess();
  setupScrollAnimations();
  createProgressBar();
  createBackToTop();
});

// 初始化 DOM 元素
function initializeElements() {
  navbar = document.getElementById('navbar');
  navbarToggle = document.getElementById('navbarToggle');
  inspirationGrid = document.getElementById('inspirationGrid');
  methodsAccordion = document.getElementById('methodsAccordion');
  processTimeline = document.getElementById('processTimeline');
}

// 滚动到指定区域的工具函数
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

// 设置导航功能
function setupNavigation() {
  // 移动端菜单切换
  if (navbarToggle) {
    navbarToggle.addEventListener('click', function() {
      const menu = document.querySelector('.navbar-menu');
      if (menu) {
        menu.classList.toggle('active');
      }
      
      // 切换汉堡菜单动画
      this.classList.toggle('active');
    });
  }

  // 导航栏滚动效果
  window.addEventListener('scroll', function() {
    if (navbar) {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  // 为所有导航链接添加点击事件
  document.querySelectorAll('.navbar-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        const sectionId = href.substring(1);
        scrollToSection(sectionId);
        
        // 关闭移动端菜单
        const menu = document.querySelector('.navbar-menu');
        if (menu && menu.classList.contains('active')) {
          menu.classList.remove('active');
          if (navbarToggle) {
            navbarToggle.classList.remove('active');
          }
        }
      }
    });
  });
}

// 渲染灵感来源
function renderInspirationSources() {
  if (!inspirationGrid) return;

  const sources = inspirationData.inspirationSources;
  inspirationGrid.innerHTML = sources.map(source => `
    <div class="inspiration-card fade-in-up">
      <div class="inspiration-category">${source.category}</div>
      <div class="inspiration-header">
        <div class="inspiration-icon">${source.icon}</div>
        <div class="inspiration-title">${source.name}</div>
      </div>
      <p class="inspiration-description">${source.description}</p>
      
      <div class="inspiration-stats">
        <div class="stat-item">
          <div class="stat-value">${source.importance}</div>
          <div class="stat-label">重要程度</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">${source.frequency}</div>
          <div class="stat-label">应用频率</div>
        </div>
      </div>
      
      <div class="inspiration-examples">
        <h4>典型例子：</h4>
        <ul>
          ${source.examples.map(example => `<li>${example}</li>`).join('')}
        </ul>
      </div>
      
      <div class="inspiration-tips">
        <h4>实用建议：</h4>
        <ul>
          ${source.tips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// 渲染设计方法
function renderDesignMethods() {
  if (!methodsAccordion) return;

  const methods = inspirationData.designMethods;
  methodsAccordion.innerHTML = methods.map((method, index) => `
    <div class="method-item" data-index="${index}">
      <div class="method-header" data-method-index="${index}">
        <h3>${method.name}</h3>
        <div class="method-toggle">▼</div>
      </div>
      <div class="method-content">
        <div class="method-body">
          <p class="method-description">${method.description}</p>
          
          <div class="method-meta">
            <div class="method-badge">
              <span>难度: ${generateStars(method.difficulty)}</span>
            </div>
            <div class="method-badge">
              <span>创新度: ${generateStars(method.innovation)}</span>
            </div>
            <div class="method-badge">
              <span>适用场景: ${method.scenario}</span>
            </div>
          </div>
          
          <div class="method-steps">
            <h4>操作步骤：</h4>
            <ol>
              ${method.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
          </div>
          
          <div class="method-example">
            <h4>实际案例：</h4>
            <p>${method.example}</p>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // 为方法手风琴添加点击事件
  document.querySelectorAll('.method-header').forEach(header => {
    header.addEventListener('click', function() {
      const index = this.getAttribute('data-method-index');
      if (index !== null) {
        toggleMethod(parseInt(index));
      }
    });
  });
}

// 生成星级评分
function generateStars(rating) {
  const maxStars = 10;
  const fullStars = Math.floor(rating);
  const emptyStars = maxStars - fullStars;
  return '★'.repeat(fullStars) + '☆'.repeat(emptyStars);
}

// 切换方法手风琴
function toggleMethod(index) {
  const methodItem = document.querySelector(`.method-item[data-index="${index}"]`);
  if (!methodItem) return;
  
  const isActive = methodItem.classList.contains('active');
  
  // 关闭所有其他项
  document.querySelectorAll('.method-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // 切换当前项
  if (!isActive) {
    methodItem.classList.add('active');
  }
}

// 渲染设计流程
function renderDesignProcess() {
  if (!processTimeline) return;

  const processes = inspirationData.designProcess;
  processTimeline.innerHTML = `
    <div class="timeline-line"></div>
    ${processes.map((process, index) => `
      <div class="timeline-item fade-in-up" style="animation-delay: ${index * 0.1}s">
        <div class="timeline-content">
          <div class="timeline-card">
            <div class="timeline-stage">${process.stage}</div>
            <p>${process.description}</p>
            <div class="timeline-meta">
              <div class="timeline-duration">
                <span>⏱️</span>
                <span>${process.duration}天</span>
              </div>
              <div class="timeline-importance">
                <span>⭐</span>
                <span>${process.importance}/10</span>
              </div>
              <div class="timeline-skills">
                <span>🛠️</span>
                <span>${process.skills}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-dot"></div>
      </div>
    `).join('')}
  `;
}

// 设置滚动动画
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
      }
    });
  }, observerOptions);

  // 观察所有需要动画的元素
  const animateElements = document.querySelectorAll('.inspiration-card, .case-card, .tool-card, .timeline-item');
  animateElements.forEach(el => {
    observer.observe(el);
  });
}

// 添加页面滚动进度条
function createProgressBar() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
  document.body.appendChild(progressBar);

  const progressBarFill = progressBar.querySelector('.scroll-progress-bar');

  window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBarFill.style.width = scrolled + '%';
  });
}

// 添加返回顶部按钮
function createBackToTop() {
  const backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.innerHTML = '↑';
  backToTop.setAttribute('aria-label', '返回顶部');
  document.body.appendChild(backToTop);

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
}

// 样式注入（用于动态创建的元素）
const additionalStyles = `
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(26, 54, 93, 0.1);
  z-index: 9999;
}

.scroll-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #1a365d, #d4af37);
  width: 0%;
  transition: width 0.3s ease;
}

.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: var(--color-fashion-gold);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
  z-index: 1000;
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  background: var(--color-fashion-primary);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
}

.inspiration-examples,
.inspiration-tips {
  margin-top: 1rem;
}

.inspiration-examples h4,
.inspiration-tips h4 {
  font-size: 0.9rem;
  color: var(--color-fashion-primary);
  margin-bottom: 0.5rem;
}

.inspiration-examples ul,
.inspiration-tips ul {
  padding-left: 1.2rem;
  margin: 0;
}

.inspiration-examples li,
.inspiration-tips li {
  margin-bottom: 0.3rem;
  font-size: 0.85rem;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .back-to-top {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    font-size: 18px;
  }
}
`;

// 注入额外样式
const style = document.createElement('style');
style.textContent = additionalStyles;
document.head.appendChild(style);