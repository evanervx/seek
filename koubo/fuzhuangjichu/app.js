// 技能数据
const skillsData = {
  drawing: {
    icon: '🎨',
    title: '手绘技能',
    description: '服装设计最基本的表达手段',
    details: '包括素描基础、人体比例、时装效果图绘制。需要掌握人体构造，学会用线条和色彩表达设计理念。可以从临摹开始，逐步提升造型能力。'
  },
  fabric: {
    icon: '🧵',
    title: '面料知识',
    description: '了解各种材质的特性和应用',
    details: '学习天然纤维和合成纤维的特点，了解面料的手感、弹性、透气性。掌握不同面料适合的款式设计，学会面料搭配和改造技巧。'
  },
  color: {
    icon: '🌈',
    title: '色彩搭配',
    description: '色彩是服装设计的灵魂',
    details: '掌握色彩理论，了解冷暖色调、对比色、互补色的运用。学会用色彩表达情感，营造不同的穿着氛围和视觉效果。'
  },
  pattern: {
    icon: '📐',
    title: '版型工艺',
    description: '从设计到成衣的关键技术',
    details: '学习平面制版和立体裁剪，掌握基本的缝纫技巧。了解不同款式的结构原理，学会将设计图转化为实际的服装样板。'
  },
  communication: {
    icon: '💬',
    title: '沟通协作',
    description: '设计师必备的软技能',
    details: '学会向团队清晰传达设计理念，与制版师、样衣师有效协作。具备市场敏感度，能够平衡创意与商业需求。'
  }
};

// 全局变量
let isModalOpen = false;

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  
  // 延迟初始化以确保所有元素都已渲染
  setTimeout(() => {
    initNavigation();
    initSkillModals();
    initScrollEffects();
    initAnimations();
    console.log('App initialized successfully');
  }, 100);
});

// 初始化导航功能
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  console.log('Found nav links:', navLinks.length);
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Nav link clicked:', this.getAttribute('href'));
      
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      console.log('Target section:', targetId, targetSection);
      
      if (targetSection) {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        const targetPosition = targetSection.offsetTop - navbarHeight - 20;
        
        console.log('Scrolling to position:', targetPosition);
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // 更新活动状态
        updateActiveNavLink(this);
      } else {
        console.error('Target section not found:', targetId);
      }
    });
  });
  
  // 监听滚动更新导航状态
  window.addEventListener('scroll', throttle(updateNavOnScroll, 100));
  
  // 初始设置活动导航
  updateNavOnScroll();
}

// 更新活动的导航链接
function updateActiveNavLink(activeLink) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// 滚动时更新导航状态
function updateNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const navbar = document.querySelector('.navbar');
  const navbarHeight = navbar ? navbar.offsetHeight : 80;
  const scrollPos = window.pageYOffset + navbarHeight + 100;
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  // 如果没有找到当前section，默认使用第一个
  if (!current && sections.length > 0) {
    current = sections[0].getAttribute('id');
  }
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const linkTarget = link.getAttribute('href').substring(1);
    if (linkTarget === current) {
      link.classList.add('active');
    }
  });
}

// 初始化技能模态框
function initSkillModals() {
  const skillCards = document.querySelectorAll('.skill-card');
  const modal = document.getElementById('skill-modal');
  console.log('Found skill cards:', skillCards.length);
  console.log('Found modal:', modal);
  
  if (!modal) {
    console.error('Modal not found!');
    return;
  }
  
  const modalClose = modal.querySelector('.modal-close');
  const modalIcon = modal.querySelector('.modal-icon');
  const modalTitle = modal.querySelector('.modal-title');
  const modalDescription = modal.querySelector('.modal-description');
  const modalDetails = modal.querySelector('.modal-details');
  
  // 为每个技能卡片添加点击事件
  skillCards.forEach((card, index) => {
    console.log(`Setting up card ${index}:`, card.getAttribute('data-skill'));
    
    // 主要点击事件处理函数
    function handleCardClick(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const skillId = card.getAttribute('data-skill');
      console.log('Card clicked, skill ID:', skillId);
      
      const skillData = skillsData[skillId];
      console.log('Skill data:', skillData);
      
      if (skillData) {
        showSkillModal(skillData);
      } else {
        console.error('Skill data not found for:', skillId);
      }
    }
    
    // 为整个卡片添加点击事件
    card.addEventListener('click', handleCardClick);
    
    // 也为按钮添加点击事件（如果存在）
    const skillBtn = card.querySelector('.skill-btn');
    if (skillBtn) {
      skillBtn.addEventListener('click', handleCardClick);
    }
    
    // 添加悬停效果
    card.addEventListener('mouseenter', function() {
      if (!isModalOpen) {
        this.style.cursor = 'pointer';
        this.style.transform = 'translateY(-4px) scale(1.02)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      if (!isModalOpen) {
        this.style.transform = 'translateY(0) scale(1)';
      }
    });
  });
  
  // 显示模态框
  function showSkillModal(skillData) {
    console.log('Showing modal for:', skillData.title);
    
    if (!modalIcon || !modalTitle || !modalDescription || !modalDetails) {
      console.error('Modal elements not found');
      return;
    }
    
    modalIcon.textContent = skillData.icon;
    modalTitle.textContent = skillData.title;
    modalDescription.textContent = skillData.description;
    modalDetails.textContent = skillData.details;
    
    modal.style.display = 'block';
    modal.style.opacity = '1';
    document.body.style.overflow = 'hidden';
    isModalOpen = true;
    
    console.log('Modal displayed');
  }
  
  // 关闭模态框
  function closeModal() {
    console.log('Closing modal');
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
      isModalOpen = false;
    }, 300);
  }
  
  // 点击关闭按钮
  if (modalClose) {
    modalClose.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Close button clicked');
      closeModal();
    });
  }
  
  // 点击背景关闭
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      console.log('Modal background clicked');
      closeModal();
    }
  });
  
  // ESC键关闭
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isModalOpen) {
      console.log('Escape key pressed');
      closeModal();
    }
  });
}

// 初始化滚动效果
function initScrollEffects() {
  // 检测元素是否部分可见
  function isElementPartiallyVisible(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < windowHeight * 0.8 && rect.bottom > 0;
  }
  
  // 为卡片添加滚动动画
  function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.skill-card, .path-step, .process-step, .resource-category, .highlight-item');
    
    animatedElements.forEach((element, index) => {
      if (isElementPartiallyVisible(element) && !element.classList.contains('animated')) {
        setTimeout(() => {
          element.classList.add('animated');
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * 50);
      }
    });
  }
  
  // 初始化元素状态
  const animatedElements = document.querySelectorAll('.skill-card, .path-step, .process-step, .resource-category, .highlight-item');
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
  });
  
  // 监听滚动
  window.addEventListener('scroll', throttle(animateOnScroll, 50));
  
  // 页面加载时执行一次
  setTimeout(animateOnScroll, 500);
}

// 初始化其他动画效果
function initAnimations() {
  // 为学习路径步骤添加交互效果
  const pathSteps = document.querySelectorAll('.path-step');
  
  pathSteps.forEach((step, index) => {
    step.addEventListener('mouseenter', function() {
      if (!isModalOpen) {
        this.style.transform = 'translateX(12px) scale(1.02)';
        this.style.zIndex = '10';
      }
    });
    
    step.addEventListener('mouseleave', function() {
      if (!isModalOpen) {
        this.style.transform = 'translateX(0) scale(1)';
        this.style.zIndex = '1';
      }
    });
    
    // 添加点击效果
    step.addEventListener('click', function() {
      this.classList.toggle('expanded');
      
      // 可以在这里添加更多详细信息的展示
      if (this.classList.contains('expanded')) {
        this.style.backgroundColor = 'var(--color-bg-3)';
      } else {
        this.style.backgroundColor = 'var(--color-surface)';
      }
    });
  });
  
  // 为流程步骤添加连续动画效果
  const processSteps = document.querySelectorAll('.process-step');
  
  processSteps.forEach((step, index) => {
    step.addEventListener('mouseenter', function() {
      if (!isModalOpen) {
        // 高亮当前步骤
        this.style.transform = 'scale(1.05)';
        this.style.zIndex = '10';
        
        // 淡化其他步骤
        processSteps.forEach((otherStep, otherIndex) => {
          if (otherIndex !== index) {
            otherStep.style.opacity = '0.6';
          }
        });
      }
    });
    
    step.addEventListener('mouseleave', function() {
      if (!isModalOpen) {
        this.style.transform = 'scale(1)';
        this.style.zIndex = '1';
        
        // 恢复所有步骤的透明度
        processSteps.forEach(otherStep => {
          otherStep.style.opacity = '1';
        });
      }
    });
  });
  
  // 为资源列表项添加悬停效果
  const resourceItems = document.querySelectorAll('.resource-list li');
  
  resourceItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      if (!isModalOpen) {
        this.style.paddingLeft = '16px';
        this.style.backgroundColor = 'var(--color-bg-1)';
        this.style.borderRadius = 'var(--radius-sm)';
      }
    });
    
    item.addEventListener('mouseleave', function() {
      if (!isModalOpen) {
        this.style.paddingLeft = '0';
        this.style.backgroundColor = 'transparent';
        this.style.borderRadius = '0';
      }
    });
  });
}

// 工具函数：节流函数
function throttle(func, wait) {
  let timeout;
  let previous = 0;
  
  return function executedFunction(...args) {
    const now = Date.now();
    
    if (now - previous > wait) {
      func.apply(this, args);
      previous = now;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(this, args);
        previous = Date.now();
      }, wait - (now - previous));
    }
  };
}

// 处理窗口大小变化
window.addEventListener('resize', throttle(() => {
  // 重新计算导航位置
  updateNavOnScroll();
}, 250));

// 添加页面加载完成的动画
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
  console.log('Page fully loaded');
  
  // 为hero区域添加入场动画
  const heroContent = document.querySelector('.hero-content');
  const heroImage = document.querySelector('.hero-image');
  
  if (heroContent && heroImage) {
    heroContent.style.animation = 'slideInLeft 1s cubic-bezier(0.16, 1, 0.3, 1)';
    heroImage.style.animation = 'slideInRight 1s cubic-bezier(0.16, 1, 0.3, 1)';
  }
  
  // 确保所有功能都已初始化
  setTimeout(() => {
    const skillCards = document.querySelectorAll('.skill-card');
    const modal = document.getElementById('skill-modal');
    console.log('Final check - Skill cards:', skillCards.length, 'Modal:', !!modal);
    
    // 手动验证第一个技能卡片的点击事件
    if (skillCards.length > 0) {
      console.log('First skill card data-skill:', skillCards[0].getAttribute('data-skill'));
    }
  }, 1000);
});

// 添加CSS动画关键帧（通过JavaScript动态添加）
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .nav-link.active {
    color: var(--color-primary) !important;
    background: var(--color-secondary) !important;
  }
  
  .modal {
    transition: opacity 0.3s ease;
  }
  
  .animated {
    animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .skill-card {
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .path-step {
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .path-step.expanded {
    background-color: var(--color-bg-3) !important;
  }
`;

document.head.appendChild(styleSheet);

// Debug: 添加全局点击监听器来调试点击事件
document.addEventListener('click', function(e) {
  if (e.target.closest('.skill-card')) {
    console.log('Skill card clicked (global listener):', e.target.closest('.skill-card').getAttribute('data-skill'));
  }
});