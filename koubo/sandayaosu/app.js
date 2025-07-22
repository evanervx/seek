// 服装设计核心要素数据
const clothingData = {
  "三大核心要素": {
    "款式造型": {
      "定义": "服装的外部轮廓造型和部件细节造型，是设计变化的基础",
      "包含内容": [
        "外部轮廓造型：由服装的长度和纬度构成，包括腰线、衣裙长度、肩部宽窄、下摆松度等要素",
        "内部线条组织：领型、袖型、口袋、裁剪结构甚至衣褶、拉链、扣子的设计",
        "常见轮廓：A型、X型、T型、H型、O型等"
      ],
      "特点": [
        "是服装造型设计的主要内容",
        "直接决定了款式的流行与否",
        "形成了服装的线条"
      ],
      "重要性": "占据第一位置，没有造型的色彩是无法存在的"
    },
    "色彩": {
      "定义": "服装中给人以强烈感觉的视觉要素，是设计中最醒目的部分",
      "功能": [
        "实用性：保护身体，抵抗自然界的侵袭",
        "装饰性：色彩本身对服装具有装饰作用，优美图案与和谐色彩的有机结合",
        "社会属性：区别穿着者的年龄、性别、性格及职业，表示社会地位"
      ],
      "配色原则": [
        "同色系搭配：简而易行的配色方法",
        "对比色搭配：互相对抗又互相依存，产生强烈对比审美效果",
        "邻近色搭配：把色谱上相近的色彩搭配起来，易收到调和效果",
        "中性色搭配：黑、白、金、银、灰五种中性色彩"
      ],
      "重要性": "最容易表达设计情怀，同时易于被消费者接受"
    },
    "面料材料": {
      "定义": "服装的物质载体，是赖以体现设计思想的物质基础和服装制作的客观对象",
      "分类": [
        "面料：服装的最表层材料，决定了服装质地的外观效果",
        "辅料：配合面料共同完成服装的物质形态的材料，保证服装内在质量和细节表现"
      ],
      "特性要求": [
        "悬垂性、柔软性、保型性等特点",
        "织物表面呈现的种种肌理效果与美感",
        "不同材料的厚薄、软硬、光滑粗涩、立体平滑等差异"
      ],
      "重要性": "没有材料，设计仅仅是一纸'空图'"
    }
  }
};

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  setupHeroCardNavigation();
  setupElementModals();
  setupRelationshipDiagram();
  setupScrollAnimations();
  setupModal();
  addInteractiveEffects();
}

// 设置导航功能
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      console.log('Navigation clicked:', targetId, targetElement); // Debug log
      
      if (targetElement) {
        const navbarHeight = 80;
        const offsetTop = targetElement.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: Math.max(0, offsetTop),
          behavior: 'smooth'
        });
        
        // 更新活动状态
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });
  
  // 滚动时更新导航状态
  window.addEventListener('scroll', updateActiveNavigation);
}

// 更新活动导航项
function updateActiveNavigation() {
  const sections = document.querySelectorAll('.section, .hero-section');
  const navLinks = document.querySelectorAll('.nav-menu a');
  const scrollPos = window.scrollY + 120;
  
  let currentSection = '';
  
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    
    if (scrollPos >= top && scrollPos < top + height) {
      currentSection = id;
    }
  });
  
  if (currentSection) {
    navLinks.forEach(link => link.classList.remove('active'));
    const activeLink = document.querySelector(`a[href="#${currentSection}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  }
}

// 设置首页卡片导航
function setupHeroCardNavigation() {
  const heroCards = document.querySelectorAll('.hero-card');
  
  heroCards.forEach(card => {
    card.addEventListener('click', function() {
      const target = this.dataset.target;
      const targetElement = document.getElementById(target);
      
      console.log('Hero card clicked:', target, targetElement); // Debug log
      
      if (targetElement) {
        const navbarHeight = 80;
        const offsetTop = targetElement.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: Math.max(0, offsetTop),
          behavior: 'smooth'
        });
        
        // 更新导航状态
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => link.classList.remove('active'));
        const activeNavLink = document.querySelector(`a[href="#${target}"]`);
        if (activeNavLink) {
          activeNavLink.classList.add('active');
        }
      }
    });
  });
}

// 设置要素详情弹窗
function setupElementModals() {
  const elementButtons = document.querySelectorAll('.element-btn');
  
  elementButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      const card = this.closest('.element-card');
      const elementType = card.dataset.element;
      showElementModal(elementType);
    });
  });
}

// 显示要素详情弹窗
function showElementModal(elementType) {
  const modal = document.getElementById('element-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  
  let title = '';
  let data = null;
  
  switch(elementType) {
    case 'style':
      title = '款式造型';
      data = clothingData['三大核心要素']['款式造型'];
      break;
    case 'color':
      title = '色彩';
      data = clothingData['三大核心要素']['色彩'];
      break;
    case 'material':
      title = '面料材料';
      data = clothingData['三大核心要素']['面料材料'];
      break;
  }
  
  if (data) {
    modalTitle.textContent = title;
    modalBody.innerHTML = generateModalContent(data);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // 添加显示动画
    setTimeout(() => {
      modal.classList.add('show');
    }, 10);
  }
}

// 生成弹窗内容
function generateModalContent(data) {
  let content = `<p><strong>定义：</strong>${data.定义}</p>`;
  
  // 添加包含内容或功能
  if (data.包含内容) {
    content += '<h3>包含内容</h3><ul>';
    data.包含内容.forEach(item => {
      content += `<li>${item}</li>`;
    });
    content += '</ul>';
  }
  
  if (data.功能) {
    content += '<h3>主要功能</h3><ul>';
    data.功能.forEach(item => {
      content += `<li>${item}</li>`;
    });
    content += '</ul>';
  }
  
  // 添加特点或配色原则
  if (data.特点) {
    content += '<h3>主要特点</h3><ul>';
    data.特点.forEach(item => {
      content += `<li>${item}</li>`;
    });
    content += '</ul>';
  }
  
  if (data.配色原则) {
    content += '<h3>配色原则</h3><ul>';
    data.配色原则.forEach(item => {
      content += `<li>${item}</li>`;
    });
    content += '</ul>';
  }
  
  // 添加分类或特性要求
  if (data.分类) {
    content += '<h3>主要分类</h3><ul>';
    data.分类.forEach(item => {
      content += `<li>${item}</li>`;
    });
    content += '</ul>';
  }
  
  if (data.特性要求) {
    content += '<h3>特性要求</h3><ul>';
    data.特性要求.forEach(item => {
      content += `<li>${item}</li>`;
    });
    content += '</ul>';
  }
  
  // 添加重要性
  if (data.重要性) {
    content += `<h3>重要性</h3><p>${data.重要性}</p>`;
  }
  
  return content;
}

// 设置关系图交互
function setupRelationshipDiagram() {
  const outerNodes = document.querySelectorAll('.outer-node');
  const infoCard = document.querySelector('.info-card');
  
  outerNodes.forEach(node => {
    node.addEventListener('click', function() {
      const nodeId = this.id;
      showRelationshipInfo(nodeId);
      
      // 更新节点状态
      outerNodes.forEach(n => n.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

// 显示关系信息
function showRelationshipInfo(nodeId) {
  const infoCard = document.querySelector('.info-card');
  let content = '';
  
  switch(nodeId) {
    case 'style-node':
      content = `
        <h3>款式造型的关系作用</h3>
        <ul>
          <li><strong>主导地位：</strong>作为服装设计的第一要素，款式造型为其他要素提供基础框架</li>
          <li><strong>制约作用：</strong>不同的造型对色彩和材料的选择有明确的指导意义</li>
          <li><strong>表现载体：</strong>色彩和材料需要通过造型来展现其美学价值</li>
        </ul>
      `;
      break;
    case 'color-node':
      content = `
        <h3>色彩的关系作用</h3>
        <ul>
          <li><strong>视觉冲击：</strong>色彩是最直观的视觉要素，能够快速吸引注意力</li>
          <li><strong>情感表达：</strong>通过色彩搭配传达设计师的情感和理念</li>
          <li><strong>协调统一：</strong>与造型和材料形成和谐统一的整体效果</li>
        </ul>
      `;
      break;
    case 'material-node':
      content = `
        <h3>面料材料的关系作用</h3>
        <ul>
          <li><strong>物质基础：</strong>为设计理念提供实现的物质载体</li>
          <li><strong>质感表现：</strong>不同材料带来不同的触感和视觉效果</li>
          <li><strong>功能保障：</strong>材料特性直接影响服装的实用性和舒适度</li>
        </ul>
      `;
      break;
    default:
      content = `
        <h3>相互关系</h3>
        <ul>
          <li><strong>相互制约：</strong>任何一个方面出了差错，便有可能导致整件衣服的失败</li>
          <li><strong>相辅相成：</strong>三者必须协调配合，共同创造服装的整体美</li>
          <li><strong>动态平衡：</strong>根据服装类型，三要素的重要性会有所变化</li>
        </ul>
      `;
  }
  
  infoCard.innerHTML = content;
}

// 设置滚动动画
function setupScrollAnimations() {
  const animatedElements = document.querySelectorAll('.element-card, .principle-card, .trend-card, .process-step');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// 设置弹窗功能
function setupModal() {
  const modal = document.getElementById('element-modal');
  const closeBtn = document.querySelector('.modal-close');
  
  // 关闭按钮
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  
  // 点击背景关闭
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
  
  // ESC键关闭
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && modal.style.display === 'block') {
      closeModal();
    }
  });
}

// 关闭弹窗
function closeModal() {
  const modal = document.getElementById('element-modal');
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 300);
  }
}

// 添加交互效果
function addInteractiveEffects() {
  // 导航栏滚动效果
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // 向下滚动，隐藏导航栏
      if (navbar) {
        navbar.style.transform = 'translateY(-100%)';
      }
    } else {
      // 向上滚动，显示导航栏
      if (navbar) {
        navbar.style.transform = 'translateY(0)';
      }
    }
    
    // 添加背景模糊效果
    if (navbar) {
      if (scrollTop > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    
    lastScrollTop = scrollTop;
  });
  
  // 关系图节点动画
  const relationshipNodes = document.querySelectorAll('.outer-node');
  relationshipNodes.forEach((node, index) => {
    if (node) {
      setTimeout(() => {
        node.style.opacity = '1';
        node.style.transform = 'scale(1)';
      }, index * 200);
      
      node.style.opacity = '0';
      node.style.transform = 'scale(0.8)';
      node.style.transition = 'all 0.5s ease';
    }
  });
  
  // 流程步骤动画
  const processSteps = document.querySelectorAll('.process-step');
  const processObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, index * 100);
      }
    });
  }, { threshold: 0.3 });
  
  processSteps.forEach((step, index) => {
    if (step) {
      step.style.opacity = '0';
      step.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
      step.style.transition = 'all 0.6s ease';
      processObserver.observe(step);
    }
  });
  
  // 趋势卡片悬停效果增强
  const trendCards = document.querySelectorAll('.trend-card');
  trendCards.forEach(card => {
    if (card) {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    }
  });
  
  // 添加视差滚动效果
  const heroSection = document.querySelector('.hero-section');
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (heroSection) {
      heroSection.style.transform = `translateY(${rate}px)`;
    }
  });
}

// 工具函数：平滑滚动到元素
function scrollToElement(elementId, offset = 80) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: Math.max(0, elementPosition),
      behavior: 'smooth'
    });
  }
}

// 工具函数：检查元素是否在视口中
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// 添加更多交互功能
function enhanceInteractivity() {
  // 添加加载动画
  window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }
  });
  
  // 添加页面进入动画
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    setTimeout(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 200);
    
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'all 0.8s ease';
  }
  
  // 确保所有导航都能正常工作
  setTimeout(() => {
    console.log('All elements found:');
    console.log('Home:', document.getElementById('home'));
    console.log('Elements:', document.getElementById('elements'));
    console.log('Relationship:', document.getElementById('relationship'));
    console.log('Principles:', document.getElementById('principles'));
    console.log('Process:', document.getElementById('process'));
    console.log('Trends:', document.getElementById('trends'));
  }, 100);
}

// 初始化增强交互功能
enhanceInteractivity();