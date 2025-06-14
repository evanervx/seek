// Application data
const data = {
  "ironComparison": [
    {
      "feature": "价格范围",
      "cordless": "$50-150",
      "corded": "$20-100",
      "recommendation": "★★★★☆"
    },
    {
      "feature": "加热时间",
      "cordless": "快速(60秒内)",
      "corded": "快速(45-60秒)",
      "recommendation": "★★★★★"
    },
    {
      "feature": "使用便利性",
      "cordless": "高-无线缆束缚",
      "corded": "中等-有线缆限制",
      "recommendation": "★★★★★"
    },
    {
      "feature": "蒸汽持续性",
      "cordless": "短暂-需重新加热",
      "corded": "连续-持续供电",
      "recommendation": "★★★☆☆"
    },
    {
      "feature": "适合任务类型",
      "cordless": "小面积压烫、细节工作",
      "corded": "大面积、重型面料",
      "recommendation": "★★★★☆"
    },
    {
      "feature": "学习难度",
      "cordless": "容易",
      "corded": "容易",
      "recommendation": "★★★★★"
    },
    {
      "feature": "安全性",
      "cordless": "高-自动回座",
      "corded": "中等-需手动放置",
      "recommendation": "★★★★★"
    },
    {
      "feature": "移动灵活性",
      "cordless": "优秀",
      "corded": "受限",
      "recommendation": "★★★★★"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "跳过每条缝压烫",
      "consequence": "缝线不平整、成品不专业",
      "prevention": "每缝一条线就压烫一次",
      "severity": "中等"
    },
    {
      "mistake": "使用错误温度",
      "consequence": "面料烧毁或变形",
      "prevention": "查看面料标签、测试小块",
      "severity": "高"
    },
    {
      "mistake": "缺乏预洗面料",
      "consequence": "成品缩水变形",
      "prevention": "按护理标签预洗面料",
      "severity": "高"
    },
    {
      "mistake": "忘记使用压烫布",
      "consequence": "面料表面光泽受损",
      "prevention": "使用专用压烫布保护",
      "severity": "中等"
    },
    {
      "mistake": "熨斗放置不当",
      "consequence": "安全隐患、烫伤风险",
      "prevention": "始终竖直放置熨斗",
      "severity": "高"
    },
    {
      "mistake": "忘记关闭熨斗",
      "consequence": "火灾风险",
      "prevention": "使用自动关闭功能",
      "severity": "极高"
    }
  ],
  "fabricTemperatures": [
    {
      "fabric": "尼龙",
      "tempC": 135,
      "tempF": 275,
      "setting": "1 (低温)",
      "steam": "无蒸汽",
      "notes": "易熔化"
    },
    {
      "fabric": "醋酸纤维",
      "tempC": 143,
      "tempF": 290,
      "setting": "1 (低温)",
      "steam": "无蒸汽",
      "notes": "易损坏"
    },
    {
      "fabric": "丝绸",
      "tempC": 148,
      "tempF": 300,
      "setting": "2-3 (中温)",
      "steam": "避免蒸汽",
      "notes": "反面压烫"
    },
    {
      "fabric": "羊毛",
      "tempC": 148,
      "tempF": 300,
      "setting": "2-3 (中温)",
      "steam": "适度蒸汽",
      "notes": "使用压烫布"
    },
    {
      "fabric": "聚酯纤维",
      "tempC": 148,
      "tempF": 300,
      "setting": "2-3 (中温)",
      "steam": "轻微蒸汽",
      "notes": "反面压烫"
    },
    {
      "fabric": "人造丝",
      "tempC": 190,
      "tempF": 375,
      "setting": "4-5 (高温)",
      "steam": "蒸汽",
      "notes": "略湿压烫"
    },
    {
      "fabric": "棉布",
      "tempC": 204,
      "tempF": 400,
      "setting": "6 (高温)",
      "steam": "大量蒸汽",
      "notes": "可高温"
    },
    {
      "fabric": "亚麻",
      "tempC": 230,
      "tempF": 445,
      "setting": "7 (最高温)",
      "steam": "大量蒸汽",
      "notes": "略湿最佳"
    }
  ],
  "recommendedProducts": [
    {
      "name": "Panasonic 360 Freestyle 无绳熨斗",
      "type": "无绳",
      "price": "$129.95",
      "features": ["360度设计", "双尖底板", "适合拼布", "便携包装"],
      "beginnerRating": 5,
      "pros": ["操作灵活", "细节工作佳", "安全性高"],
      "cons": ["价格较高", "需频繁充电"]
    },
    {
      "name": "Singer SteamCraft 蒸汽熨斗",
      "type": "有绳",
      "price": "$49.99",
      "features": ["OnPoint尖端技术", "1700W功率", "30分钟自动关闭", "10英尺线缆"],
      "beginnerRating": 4,
      "pros": ["价格实惠", "功能丰富", "适合初学者"],
      "cons": ["线缆限制", "较重"]
    },
    {
      "name": "Clover Mini 迷你熨斗",
      "type": "有绳",
      "price": "$28.59",
      "features": ["小巧便携", "温度控制", "适合细节", "快速加热"],
      "beginnerRating": 4,
      "pros": ["经济实惠", "适合小项目", "易于控制"],
      "cons": ["仅适合小面积", "无蒸汽功能"]
    }
  ],
  "safetyTips": [
    {
      "tip": "始终竖直放置熨斗",
      "icon": "⚠️",
      "details": "熨斗使用后立即竖直放置，避免烫伤和火灾风险"
    },
    {
      "tip": "使用自动关闭功能",
      "icon": "🔒",
      "details": "选择带有自动关闭功能的熨斗，确保安全"
    },
    {
      "tip": "测试面料温度",
      "icon": "🧪",
      "details": "在不显眼处先测试温度设置，避免损坏面料"
    },
    {
      "tip": "使用压烫布",
      "icon": "🛡️",
      "details": "对于精细面料使用压烫布保护表面"
    },
    {
      "tip": "保持工作区域整洁",
      "icon": "🧹",
      "details": "确保熨烫台稳固，周围无易燃物品"
    }
  ]
};

// Helper function to get temperature class
function getTempClass(temp) {
  if (temp <= 150) return 'temp-low';
  if (temp <= 190) return 'temp-medium';
  return 'temp-high';
}

// Helper function to get severity class
function getSeverityClass(severity) {
  switch(severity) {
    case '极高': return 'severity-extreme';
    case '高': return 'severity-high';
    case '中等': return 'severity-medium';
    default: return 'severity-medium';
  }
}

// Helper function to get advantage/disadvantage class for comparison
function getComparisonClass(feature, value, type) {
  const advantageKeywords = ['高', '优秀', '快速', '容易', '自动'];
  const disadvantageKeywords = ['低', '受限', '短暂', '需', '中等-需'];
  
  const lowerValue = value.toLowerCase();
  
  if (advantageKeywords.some(keyword => value.includes(keyword))) {
    return 'advantage';
  } else if (disadvantageKeywords.some(keyword => value.includes(keyword))) {
    return 'disadvantage';
  }
  return 'neutral';
}

// Populate comparison table
function populateComparisonTable() {
  const tbody = document.getElementById('comparison-tbody');
  tbody.innerHTML = '';
  
  data.ironComparison.forEach(item => {
    const row = document.createElement('tr');
    const cordlessClass = getComparisonClass(item.feature, item.cordless, 'cordless');
    const cordedClass = getComparisonClass(item.feature, item.corded, 'corded');
    
    row.innerHTML = `
      <td><strong>${item.feature}</strong></td>
      <td class="${cordlessClass}">${item.cordless}</td>
      <td class="${cordedClass}">${item.corded}</td>
      <td class="feature-rating">${item.recommendation}</td>
    `;
    tbody.appendChild(row);
  });
}

// Populate mistakes cards
function populateMistakes() {
  const container = document.getElementById('mistakes-grid');
  container.innerHTML = '';
  
  data.commonMistakes.forEach((mistake, index) => {
    const card = document.createElement('div');
    card.className = 'mistake-card';
    card.tabIndex = 0;
    
    card.innerHTML = `
      <div class="mistake-card__header">
        <h3 class="mistake-card__title">${mistake.mistake}</h3>
        <span class="severity-badge ${getSeverityClass(mistake.severity)}">${mistake.severity}</span>
      </div>
      <div class="mistake-card__content">
        <p class="mistake-card__consequence"><strong>后果：</strong>${mistake.consequence}</p>
        <div class="mistake-card__details">
          <p class="mistake-card__prevention"><strong>预防方法：</strong>${mistake.prevention}</p>
        </div>
      </div>
    `;
    
    // Add click event to expand/collapse
    card.addEventListener('click', () => {
      card.classList.toggle('expanded');
    });
    
    // Add keyboard event for accessibility
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('expanded');
      }
    });
    
    container.appendChild(card);
  });
}

// Populate fabric temperature table
function populateFabricTable() {
  const tbody = document.getElementById('fabric-tbody');
  tbody.innerHTML = '';
  
  data.fabricTemperatures.forEach(fabric => {
    const row = document.createElement('tr');
    const tempClass = getTempClass(fabric.tempC);
    
    row.innerHTML = `
      <td><strong>${fabric.fabric}</strong></td>
      <td class="${tempClass}">${fabric.tempC}°C</td>
      <td class="${tempClass}">${fabric.tempF}°F</td>
      <td>${fabric.setting}</td>
      <td>${fabric.steam}</td>
      <td>${fabric.notes}</td>
    `;
    tbody.appendChild(row);
  });
}

// Populate product cards
function populateProducts() {
  const container = document.getElementById('products-grid');
  container.innerHTML = '';
  
  data.recommendedProducts.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const stars = '★'.repeat(product.beginnerRating) + '☆'.repeat(5 - product.beginnerRating);
    
    card.innerHTML = `
      <div class="product-card__header">
        <h3 class="product-card__name">${product.name}</h3>
        <span class="product-card__type">${product.type}</span>
        <div class="product-card__price">${product.price}</div>
        <div class="product-card__rating">
          <span class="rating-stars">${stars}</span>
          <span class="rating-text">初学者推荐度</span>
        </div>
      </div>
      
      <div class="product-card__features">
        <h4>主要特性</h4>
        <ul>
          ${product.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
      </div>
      
      <div class="pros-cons">
        <div class="pros">
          <h5>优点</h5>
          <ul>
            ${product.pros.map(pro => `<li>✓ ${pro}</li>`).join('')}
          </ul>
        </div>
        <div class="cons">
          <h5>缺点</h5>
          <ul>
            ${product.cons.map(con => `<li>✗ ${con}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// Populate safety tips
function populateSafetyTips() {
  const container = document.getElementById('safety-grid');
  container.innerHTML = '';
  
  data.safetyTips.forEach(tip => {
    const tipElement = document.createElement('div');
    tipElement.className = 'safety-tip';
    
    tipElement.innerHTML = `
      <div class="safety-tip__icon">${tip.icon}</div>
      <h3 class="safety-tip__title">${tip.tip}</h3>
      <p class="safety-tip__details">${tip.details}</p>
    `;
    
    container.appendChild(tipElement);
  });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav__link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerOffset = 80; // Account for sticky nav
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Add active state to navigation
function setupActiveNavigation() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav__link');
  
  function updateActiveNav() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav(); // Initial call
}

// Add active state styles
function addActiveNavStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .nav__link.active {
      background-color: var(--color-primary);
      color: var(--color-btn-primary-text);
    }
  `;
  document.head.appendChild(style);
}

// Initialize the application
function init() {
  // Populate all sections with data
  populateComparisonTable();
  populateMistakes();
  populateFabricTable();
  populateProducts();
  populateSafetyTips();
  
  // Setup navigation
  setupSmoothScrolling();
  setupActiveNavigation();
  addActiveNavStyles();
  
  // Add loading animation completion
  document.body.classList.add('loaded');
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Add some additional interactive enhancements
document.addEventListener('DOMContentLoaded', () => {
  // Add hover effects to tables
  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      row.addEventListener('mouseenter', () => {
        row.style.transform = 'scale(1.01)';
        row.style.transition = 'transform 0.2s ease';
      });
      row.addEventListener('mouseleave', () => {
        row.style.transform = 'scale(1)';
      });
    });
  });
  
  // Add fade-in animation for sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });
  
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
});