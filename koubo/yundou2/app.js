// 应用数据
const appData = {
  "comparison_data": [
    {
      "category": "使用便利性",
      "cordless": "极高 - 无线束缚，360°自由移动",
      "corded": "中等 - 受电线长度限制"
    },
    {
      "category": "熨烫效果", 
      "cordless": "良好 - 温度稳定，双向底板设计",
      "corded": "优秀 - 持续稳定功率输出"
    },
    {
      "category": "价格范围",
      "cordless": "中高端 - 通常500-1500元", 
      "corded": "经济实惠 - 通常100-800元"
    },
    {
      "category": "适合人群",
      "cordless": "追求便利性的用户",
      "corded": "注重性价比的用户"
    },
    {
      "category": "加热时间",
      "cordless": "快速 - 底座预热，30-60秒",
      "corded": "中等 - 直接加热，1-3分钟"
    },
    {
      "category": "续航能力",
      "cordless": "中等 - 需定期回座充电", 
      "corded": "优秀 - 持续供电无间断"
    }
  ],
  "expert_tips": [
    "新手建议从中等温度开始练习，避免烫坏布料",
    "使用纯净水可以延长熨斗使用寿命",
    "缝纫时熨烫和制作同等重要，选择合适的工具事半功倍",
    "考虑购买熨烫垫板，提升熨烫效果",
    "定期清洁熨斗底板，保持最佳性能"
  ],
  "faqs": [
    {
      "question": "无绳熨斗需要经常充电吗？",
      "answer": "无绳熨斗使用底座加热设计，不是充电式，而是在底座上快速加热，使用时脱离底座，需要重新加热时再放回底座即可。"
    },
    {
      "question": "新手应该选择多大功率的熨斗？", 
      "answer": "建议选择1200W以上的熨斗，能够快速加热并提供足够的蒸汽量，满足各种面料的熨烫需求。"
    },
    {
      "question": "缝纫用熨斗和普通家用熨斗有什么区别？",
      "answer": "缝纫用熨斗通常要求更精确的温度控制和更好的蒸汽分布，无绳设计在缝纫过程中更加灵活便利。"
    },
    {
      "question": "如何避免烫坏面料？",
      "answer": "从低温开始测试，使用蒸汽功能软化纤维，在不显眼的地方先试验，掌握不同面料的适宜温度。"
    }
  ],
  "recommendations": {
    "budget_limited": {
      "type": "有绳熨斗",
      "reason": "预算友好，性价比高",
      "models": ["苏泊尔YD06AC-20", "美的蒸汽熨斗"]
    },
    "convenience_focused": {
      "type": "无绳熨斗", 
      "reason": "使用便利，操作简单",
      "models": ["松下NI-WL65", "飞利浦GC850"]
    },
    "space_limited": {
      "type": "无绳熨斗",
      "reason": "收纳方便，无线束缚", 
      "models": ["松下NI-WL30", "朗菲无绳蒸汽熨斗"]
    }
  }
};

// DOM 元素
let navbarElement;
let faqItems = [];
let currentUserChoices = {};

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
  generateContent();
  setupScrollAnimations();
});

// 初始化应用
function initializeApp() {
  navbarElement = document.querySelector('.navbar');
  console.log('应用初始化完成');
}

// 设置事件监听器
function setupEventListeners() {
  // 导航栏滚动效果
  window.addEventListener('scroll', handleNavbarScroll);
  
  // 图表模态框
  setupChartModal();
  
  // 推荐系统
  setupRecommendationSystem();
  
  // FAQ 折叠
  setupFAQAccordion();
  
  // 平滑滚动
  setupSmoothScroll();
}

// 生成动态内容
function generateContent() {
  generateComparisonFeatures();
  generateExpertTips();
  generateFAQs();
}

// 生成对比特性
function generateComparisonFeatures() {
  const cordlessContainer = document.getElementById('cordless-features');
  const cordedContainer = document.getElementById('corded-features');
  
  if (!cordlessContainer || !cordedContainer) return;
  
  appData.comparison_data.forEach(item => {
    // 无绳熨斗特性
    const cordlessFeature = document.createElement('div');
    cordlessFeature.className = 'feature-item';
    cordlessFeature.innerHTML = `
      <div class="feature-category">${item.category}</div>
      <div class="feature-description">${item.cordless}</div>
    `;
    cordlessContainer.appendChild(cordlessFeature);
    
    // 有绳熨斗特性
    const cordedFeature = document.createElement('div');
    cordedFeature.className = 'feature-item';
    cordedFeature.innerHTML = `
      <div class="feature-category">${item.category}</div>
      <div class="feature-description">${item.corded}</div>
    `;
    cordedContainer.appendChild(cordedFeature);
  });
}

// 生成专家建议
function generateExpertTips() {
  const tipsContainer = document.getElementById('expert-tips-list');
  if (!tipsContainer) return;
  
  appData.expert_tips.forEach((tip, index) => {
    const tipItem = document.createElement('div');
    tipItem.className = 'tip-item';
    tipItem.innerHTML = `
      <div class="tip-icon">${index + 1}.</div>
      <div class="tip-text">${tip}</div>
    `;
    tipsContainer.appendChild(tipItem);
  });
}

// 生成FAQ
function generateFAQs() {
  const faqContainer = document.getElementById('faq-list');
  if (!faqContainer) return;
  
  appData.faqs.forEach((faq, index) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    faqItem.innerHTML = `
      <div class="faq-question" onclick="toggleFAQ(${index})">
        <h3>${faq.question}</h3>
        <div class="faq-toggle">+</div>
      </div>
      <div class="faq-answer">
        <div class="faq-answer-content">${faq.answer}</div>
      </div>
    `;
    faqContainer.appendChild(faqItem);
    faqItems.push(faqItem);
  });
}

// 导航栏滚动效果
function handleNavbarScroll() {
  if (window.scrollY > 100) {
    navbarElement.style.background = 'rgba(255, 255, 255, 0.98)';
    navbarElement.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
  } else {
    navbarElement.style.background = 'rgba(255, 255, 255, 0.95)';
    navbarElement.style.boxShadow = 'none';
  }
}

// 设置图表模态框
function setupChartModal() {
  const modal = document.getElementById('chart-modal');
  const modalImg = document.getElementById('modal-chart');
  const closeBtn = document.querySelector('.modal-close');
  
  if (!modal || !modalImg || !closeBtn) return;
  
  // 为所有图表图片添加点击事件
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('chart-image')) {
      openChartModal(e.target);
    }
  });
  
  // 关闭模态框
  closeBtn.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  };
  
  // 点击模态框外部关闭
  modal.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  };
  
  // ESC键关闭
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
}

// 打开图表模态框
function openChartModal(imgElement) {
  const modal = document.getElementById('chart-modal');
  const modalImg = document.getElementById('modal-chart');
  
  if (!modal || !modalImg) return;
  
  modal.style.display = 'block';
  modalImg.src = imgElement.src;
  modalImg.alt = imgElement.alt;
  document.body.style.overflow = 'hidden';
}

// 设置推荐系统
function setupRecommendationSystem() {
  // 使用事件委托来处理动态添加的radio按钮
  document.addEventListener('change', function(e) {
    if (e.target.type === 'radio') {
      currentUserChoices[e.target.name] = e.target.value;
      console.log('用户选择更新:', currentUserChoices);
      updateRecommendation();
    }
  });
}

// 更新推荐结果
function updateRecommendation() {
  const resultContainer = document.getElementById('recommendation-result');
  if (!resultContainer) return;
  
  // 检查是否所有问题都已回答
  const requiredQuestions = ['budget', 'frequency', 'space', 'priority'];
  const answeredQuestions = Object.keys(currentUserChoices);
  
  console.log('必需问题:', requiredQuestions);
  console.log('已回答问题:', answeredQuestions);
  
  if (requiredQuestions.every(q => answeredQuestions.includes(q))) {
    console.log('所有问题已回答，计算推荐...');
    const recommendation = calculateRecommendation(currentUserChoices);
    showRecommendationResult(recommendation);
  } else {
    // 显示部分选择的提示
    const remainingQuestions = requiredQuestions.filter(q => !answeredQuestions.includes(q));
    resultContainer.innerHTML = `
      <div class="result-placeholder">
        <p>还有 ${remainingQuestions.length} 个问题待回答，完成后即可获得个性化推荐 ✨</p>
        <div class="loading"></div>
      </div>
    `;
  }
}

// 计算推荐结果
function calculateRecommendation(choices) {
  let cordlessScore = 0;
  let cordedScore = 0;
  
  console.log('计算推荐，用户选择:', choices);
  
  // 预算评分
  if (choices.budget === 'low') cordedScore += 3;
  else if (choices.budget === 'medium') { cordlessScore += 1; cordedScore += 2; }
  else { cordlessScore += 2; cordedScore += 1; }
  
  // 使用频率评分
  if (choices.frequency === 'occasional') cordlessScore += 3;
  else if (choices.frequency === 'regular') { cordlessScore += 2; cordedScore += 1; }
  else cordedScore += 3;
  
  // 空间评分
  if (choices.space === 'small') cordlessScore += 3;
  else if (choices.space === 'medium') { cordlessScore += 2; cordedScore += 1; }
  else { cordlessScore += 1; cordedScore += 2; }
  
  // 优先级评分
  if (choices.priority === 'convenience') cordlessScore += 3;
  else if (choices.priority === 'performance') { cordedScore += 2; cordlessScore += 1; }
  else cordedScore += 3;
  
  // 确定推荐类型
  const recommendationType = cordlessScore > cordedScore ? 'cordless' : 'corded';
  const confidence = Math.abs(cordlessScore - cordedScore);
  
  const result = {
    type: recommendationType,
    confidence: confidence,
    cordlessScore: cordlessScore,
    cordedScore: cordedScore
  };
  
  console.log('推荐结果:', result);
  return result;
}

// 显示推荐结果
function showRecommendationResult(recommendation) {
  const resultContainer = document.getElementById('recommendation-result');
  if (!resultContainer) return;
  
  const isWireless = recommendation.type === 'cordless';
  const typeText = isWireless ? '无绳熨斗' : '有绳熨斗';
  const icon = isWireless ? '🔋' : '🔌';
  const reason = getRecommendationReason(recommendation, currentUserChoices);
  const models = getRecommendedModels(recommendation, currentUserChoices);
  const matchPercentage = Math.round(((recommendation.confidence + 6) / 12) * 100);
  
  resultContainer.innerHTML = `
    <div class="result-content">
      <h3>🎯 为你推荐</h3>
      <div class="result-type">${icon} ${typeText}</div>
      <div class="result-reason">${reason}</div>
      <div class="result-details">
        <p><strong>推荐理由：</strong></p>
        <p>${getDetailedReason(recommendation, currentUserChoices)}</p>
        <p><strong>建议型号：</strong> ${models.join(' / ')}</p>
        <p><strong>匹配度：</strong> ${matchPercentage}%</p>
      </div>
    </div>
  `;
  
  console.log('推荐结果已显示');
}

// 获取推荐理由
function getRecommendationReason(recommendation, choices) {
  const reasons = [];
  
  if (choices.budget === 'low') reasons.push('预算友好');
  if (choices.frequency === 'occasional') reasons.push('使用便利');
  if (choices.space === 'small') reasons.push('节省空间');
  if (choices.priority === 'convenience') reasons.push('操作简单');
  if (choices.priority === 'performance') reasons.push('性能优秀');
  if (choices.priority === 'price') reasons.push('性价比高');
  
  return reasons.length > 0 ? reasons.join('，') + '的最佳选择' : '综合考虑的最佳选择';
}

// 获取详细推荐理由
function getDetailedReason(recommendation, choices) {
  const isWireless = recommendation.type === 'cordless';
  let reason = '';
  
  if (isWireless) {
    reason = '基于你的选择，无绳熨斗更适合你：';
    if (choices.space === 'small') reason += '工作空间有限时无绳设计更灵活；';
    if (choices.frequency === 'occasional') reason += '偶尔使用时便利性更重要；';
    if (choices.priority === 'convenience') reason += '追求便利性的用户首选。';
  } else {
    reason = '基于你的选择，有绳熨斗更适合你：';
    if (choices.budget === 'low') reason += '预算有限时有绳熨斗更经济；';
    if (choices.frequency === 'daily') reason += '高频使用时稳定性更重要；';
    if (choices.priority === 'performance') reason += '注重熨烫效果的用户首选。';
    if (choices.priority === 'price') reason += '性价比是重要考虑因素。';
  }
  
  return reason;
}

// 获取推荐型号
function getRecommendedModels(recommendation, choices) {
  const isWireless = recommendation.type === 'cordless';
  
  if (choices.budget === 'low') {
    return appData.recommendations.budget_limited.models;
  } else if (choices.priority === 'convenience' || (isWireless && choices.space === 'small')) {
    return isWireless ? 
      appData.recommendations.convenience_focused.models : 
      appData.recommendations.budget_limited.models;
  } else if (choices.space === 'small') {
    return appData.recommendations.space_limited.models;
  } else {
    return isWireless ? 
      appData.recommendations.convenience_focused.models : 
      appData.recommendations.budget_limited.models;
  }
}

// FAQ 折叠功能
function toggleFAQ(index) {
  const faqItem = faqItems[index];
  if (!faqItem) return;
  
  const isActive = faqItem.classList.contains('active');
  
  // 关闭所有其他FAQ
  faqItems.forEach(item => item.classList.remove('active'));
  
  // 切换当前FAQ
  if (!isActive) {
    faqItem.classList.add('active');
  }
}

// 设置FAQ折叠
function setupFAQAccordion() {
  // FAQ切换功能在generateFAQs中通过onclick直接绑定
}

// 平滑滚动
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const offsetTop = section.offsetTop - 80; // 考虑固定导航栏高度
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}

// 设置平滑滚动
function setupSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
}

// 滚动动画
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // 观察需要动画的元素
  const animateElements = document.querySelectorAll('.comparison-card, .chart-card, .highlight-item');
  animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

// 全局函数（供HTML调用）
window.scrollToSection = scrollToSection;
window.openChartModal = openChartModal;
window.toggleFAQ = toggleFAQ;

// 性能优化：防抖滚动处理
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 应用防抖优化
const debouncedScrollHandler = debounce(handleNavbarScroll, 10);
window.removeEventListener('scroll', handleNavbarScroll);
window.addEventListener('scroll', debouncedScrollHandler);

// 错误处理
window.addEventListener('error', function(e) {
  console.error('应用错误:', e.error);
});

// 页面加载完成提示
window.addEventListener('load', function() {
  console.log('🎉 缝纫小白熨斗选择指南加载完成！');
});