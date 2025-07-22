// Color data from the provided JSON
const colorData = {
  red: {
    name: "红色",
    hex: "#E53E3E",
    emotions: ["热情", "活力", "自信", "力量"],
    personality: "喜欢红色的人大多具有冒险精神，勇于接受挑战，拥有开阔的心胸",
    fashionStyle: "适合需要展现活力和自信的场合，如约会、聚会、演讲",
    psychologicalEffect: "红色能提升心率，激发肾上腺素分泌，让人感到兴奋和充满能量"
  },
  orange: {
    name: "橙色",
    hex: "#FF8C00",
    emotions: ["温暖", "创造力", "友善", "乐观"],
    personality: "选择橙色的人通常充满创造力，性格开朗，善于社交",
    fashionStyle: "适合休闲场合、创意工作环境、秋季穿搭",
    psychologicalEffect: "橙色能刺激食欲，增强活力，让人感到温暖和舒适"
  },
  yellow: {
    name: "黄色",
    hex: "#ECC94B",
    emotions: ["快乐", "光明", "智慧", "创新"],
    personality: "钟爱黄色的人通常乐观向上，富有创造力，思维活跃",
    fashionStyle: "适合春夏季节、休闲聚会、需要提升注意力的场合",
    psychologicalEffect: "黄色能刺激大脑活动，提高注意力，但过量可能引起焦虑"
  },
  blue: {
    name: "蓝色",
    hex: "#4299E1",
    emotions: ["平静", "信任", "智慧", "专业"],
    personality: "喜欢蓝色的人往往理智冷静，容易包容他人，具有很强的责任感",
    fashionStyle: "适合商务场合、面试、需要展现专业感的环境",
    psychologicalEffect: "蓝色能降低血压和心率，让人感到宁静，有助于集中注意力"
  },
  green: {
    name: "绿色",
    hex: "#48BB78",
    emotions: ["自然", "和谐", "成长", "平衡"],
    personality: "偏爱绿色的人通常心态平和，善于照顾他人，渴望稳定的生活",
    fashionStyle: "适合休闲场合、户外活动、展现亲和力的环境",
    psychologicalEffect: "绿色有助于缓解眼睛疲劳，减少压力，促进身心放松"
  },
  purple: {
    name: "紫色",
    hex: "#9F7AEA",
    emotions: ["神秘", "高贵", "创意", "浪漫"],
    personality: "喜欢紫色的人通常富有想象力，情感丰富，具有艺术天赋",
    fashionStyle: "适合艺术场所、晚宴、需要展现独特个性的场合",
    psychologicalEffect: "紫色能激发创造力，但也可能让某些人感到压抑"
  },
  black: {
    name: "黑色",
    hex: "#2D3748",
    emotions: ["优雅", "神秘", "权威", "经典"],
    personality: "选择黑色的人通常内敛，追求完美，具有强烈的个人风格",
    fashionStyle: "适合正式场合、晚宴、需要展现权威感的环境",
    psychologicalEffect: "黑色能营造庄严感，但过多使用可能影响情绪"
  },
  white: {
    name: "白色",
    hex: "#FFFFFF",
    emotions: ["纯洁", "简约", "和平", "清新"],
    personality: "钟爱白色的人通常是完美主义者，追求简洁，渴望被关注",
    fashionStyle: "适合夏季、正式场合、需要展现纯真感的环境",
    psychologicalEffect: "白色能带来轻松愉悦的感觉，有助于心理净化"
  },
  gray: {
    name: "灰色",
    hex: "#718096",
    emotions: ["稳重", "中性", "平衡", "实用"],
    personality: "偏好灰色的人通常理性务实，不喜欢张扬，善于平衡各种关系",
    fashionStyle: "适合商务场合、日常穿搭、需要低调专业的环境",
    psychologicalEffect: "灰色能营造稳定感，但过多使用可能显得沉闷"
  }
};

// DOM elements
const modal = document.getElementById('colorModal');
const modalColorName = document.getElementById('modalColorName');
const modalColorSample = document.getElementById('modalColorSample');
const modalEmotions = document.getElementById('modalEmotions');
const modalPersonality = document.getElementById('modalPersonality');
const modalFashionStyle = document.getElementById('modalFashionStyle');
const modalPsychologicalEffect = document.getElementById('modalPsychologicalEffect');

// Initialize the application
function init() {
  // Add click event listeners to all color items
  const colorItems = document.querySelectorAll('.color-item');
  colorItems.forEach(item => {
    item.addEventListener('click', handleColorClick);
  });

  // Add click event listener to modal background to close modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Add keyboard event listener for ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Add smooth scrolling for better user experience
  addSmoothScrolling();
  
  // Add animation on scroll
  addScrollAnimations();
}

// Handle color item click
function handleColorClick(e) {
  const colorKey = e.currentTarget.getAttribute('data-color');
  const color = colorData[colorKey];
  
  if (color) {
    showColorDetails(color);
  }
}

// Show color details in modal
function showColorDetails(color) {
  // Update modal content
  modalColorName.textContent = color.name;
  modalColorSample.style.backgroundColor = color.hex;
  
  // Create emotion tags
  modalEmotions.innerHTML = '';
  color.emotions.forEach(emotion => {
    const tag = document.createElement('span');
    tag.className = 'emotion-tag';
    tag.textContent = emotion;
    modalEmotions.appendChild(tag);
  });
  
  // Update text content
  modalPersonality.textContent = color.personality;
  modalFashionStyle.textContent = color.fashionStyle;
  modalPsychologicalEffect.textContent = color.psychologicalEffect;
  
  // Show modal
  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
  
  // Prevent body scrolling when modal is open
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  modal.classList.remove('show');
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }, 250);
}

// Add smooth scrolling behavior
function addSmoothScrolling() {
  // Smooth scroll for anchor links if any are added later
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Add scroll animations
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

  // Observe tip cards and research cards for scroll animations
  const animatedElements = document.querySelectorAll('.tip-card, .research-card');
  animatedElements.forEach((el, index) => {
    // Set initial state
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    
    // Observe element
    observer.observe(el);
  });
}

// Add some interactive enhancements
function addInteractiveEnhancements() {
  // Add hover effects to color items
  const colorItems = document.querySelectorAll('.color-item');
  colorItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) rotate(0deg)';
    });
  });

  // Add pulse animation to category cards on hover
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.animation = 'pulse 0.6s ease-in-out';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.animation = '';
    });
  });
}

// Add CSS animation for pulse effect
function addPulseAnimation() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.02); }
      100% { transform: scale(1); }
    }
  `;
  document.head.appendChild(style);
}

// Utility function to detect if user prefers reduced motion
function respectsReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  init();
  
  // Only add extra animations if user doesn't prefer reduced motion
  if (!respectsReducedMotion()) {
    addInteractiveEnhancements();
    addPulseAnimation();
  }
  
  // Add a subtle loading effect
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
});

// Export functions for global access (needed for HTML onclick handlers)
window.closeModal = closeModal;