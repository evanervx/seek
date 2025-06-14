// Application data
const appData = {
  comparison_data: [
    {"aspect": "初始学习成本", "manual": "低（纸、铅笔、尺子等基础工具）", "cad": "高（软件费用，CLO：$50/月起）"},
    {"aspect": "所需工具", "manual": "纸张、铅笔、直尺、弯尺、剪刀、胶带", "cad": "电脑、制版软件、数位板（可选）"},
    {"aspect": "学习曲线", "manual": "中等，需要理解基础几何和测量", "cad": "陡峭，需要学习软件操作"},
    {"aspect": "技能建立", "manual": "强化基础理论，培养空间想象力", "cad": "注重效率和精度，与现代技术接轨"},
    {"aspect": "就业市场需求", "manual": "传统工坊、手工定制、小型工作室", "cad": "时装公司、大型制造商、现代设计工作室"},
    {"aspect": "制版速度", "manual": "慢，制作一个基础版型需要数小时", "cad": "快，修改和复制版型只需几分钟"},
    {"aspect": "准确性", "manual": "依赖个人技巧，易出现人为误差", "cad": "高精度，减少人为误差"},
    {"aspect": "修改便利性", "manual": "困难，需要重新绘制", "cad": "非常便利，可实时调整"},
    {"aspect": "适合人群", "manual": "喜欢传统工艺、注重基础的初学者", "cad": "科技接受度高、追求效率的初学者"},
    {"aspect": "长期发展", "manual": "适合转向电脑制版的基础", "cad": "符合行业发展趋势"}
  ],
  cost_analysis: [
    {"item": "手工制版基础工具包", "manual_cost": "50-100", "cad_cost": "可选", "description": "直尺、弯尺、剪刀、胶带等"},
    {"item": "制版纸（一年用量）", "manual_cost": "30-50", "cad_cost": "N/A", "description": "制版纸消耗品"},
    {"item": "测量工具", "manual_cost": "20-30", "cad_cost": "20-30", "description": "软尺、三角尺等"},
    {"item": "绘图工具", "manual_cost": "15-25", "cad_cost": "N/A", "description": "铅笔、橡皮、圆规等"},
    {"item": "CLO 3D软件（年费）", "manual_cost": "N/A", "cad_cost": "600", "description": "初学者推荐软件"},
    {"item": "TUKAcad学习版（年费）", "manual_cost": "N/A", "cad_cost": "228", "description": "学习版本，性价比高"},
    {"item": "Adobe Illustrator（年费）", "manual_cost": "N/A", "cad_cost": "240", "description": "通用设计软件"},
    {"item": "电脑设备（推荐配置）", "manual_cost": "可选", "cad_cost": "800-1500", "description": "运行CAD软件所需"},
    {"item": "培训课程", "manual_cost": "200-500", "cad_cost": "300-800", "description": "专业制版培训"}
  ],
  learning_stages: [
    {"stage": "第一阶段：缝纫基础", "duration": "1-3个月", "content": "基础缝纫技巧、使用缝纫机、了解面料、基本针法", "approach": "手工为主，建立基础理解"},
    {"stage": "第二阶段：使用商业版型", "duration": "2-4个月", "content": "使用现成版型制作简单服装，理解版型符号和说明", "approach": "继续手工，熟悉版型概念"},
    {"stage": "第三阶段：版型修改", "duration": "2-3个月", "content": "调整版型尺寸、修改袖子和下摆、简单版型拼接", "approach": "手工制版开始入门"},
    {"stage": "第四阶段：基础制版学习", "duration": "3-6个月", "content": "手工制版基础：测量、绘制基本版型（裙子、上衣）", "approach": "手工制版深入学习"},
    {"stage": "第五阶段：进阶制版技能", "duration": "6个月以上", "content": "复杂版型设计、立体裁剪、或学习CAD制版软件", "approach": "根据兴趣选择手工进阶或转向CAD"}
  ],
  recommendations: {
    "budget_conscious": {
      "title": "预算有限型学习者",
      "recommendation": "建议从手工制版开始。初期投资少，可以先掌握基础理论，后续有条件时再转向CAD。",
      "path": "手工制版 → 基础扎实后考虑CAD"
    },
    "tech_savvy": {
      "title": "科技爱好型学习者", 
      "recommendation": "可以直接学习CAD制版，但建议先了解一些手工制版基础理论。推荐使用CLO 3D或TUKAcad。",
      "path": "简单手工基础 → CAD制版"
    },
    "traditional": {
      "title": "传统工艺爱好者",
      "recommendation": "强烈推荐手工制版。能够深入理解服装构造原理，培养良好的空间想象力和手工技能。",
      "path": "手工制版深度学习 → 可选择性学习CAD"
    },
    "career_focused": {
      "title": "职业发展导向型",
      "recommendation": "建议手工和CAD并重。先学手工打基础，快速转向CAD以符合行业需求。",
      "path": "手工基础（3-6个月）→ CAD专业技能"
    }
  }
};

// DOM elements
let tabButtons, tabContents;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  tabButtons = document.querySelectorAll('.tab-btn');
  tabContents = document.querySelectorAll('.tab-content');
  
  // Set up event listeners
  setupTabNavigation();
  
  // Populate content
  populateComparisonTable();
  populateCostAnalysis();
  populateLearningStages();
  populateRecommendations();
});

// Tab navigation functionality
function setupTabNavigation() {
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.dataset.tab;
      switchTab(targetTab);
    });
  });
}

function switchTab(targetTab) {
  // Remove active class from all buttons and contents
  tabButtons.forEach(btn => btn.classList.remove('active'));
  tabContents.forEach(content => content.classList.remove('active'));
  
  // Add active class to clicked button and corresponding content
  document.querySelector(`[data-tab="${targetTab}"]`).classList.add('active');
  document.getElementById(targetTab).classList.add('active');
}

// Populate comparison table
function populateComparisonTable() {
  const tableBody = document.getElementById('comparison-table-body');
  
  appData.comparison_data.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><strong>${item.aspect}</strong></td>
      <td>${item.manual}</td>
      <td>${item.cad}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Populate cost analysis
function populateCostAnalysis() {
  const tableBody = document.getElementById('cost-table-body');
  let manualTotal = 0;
  let cadTotal = 0;
  
  appData.cost_analysis.forEach(item => {
    const row = document.createElement('tr');
    
    // Format cost display
    const manualCost = item.manual_cost === 'N/A' ? 'N/A' : 
                      item.manual_cost === '可选' ? '可选' : `$${item.manual_cost}`;
    const cadCost = item.cad_cost === 'N/A' ? 'N/A' : 
                   item.cad_cost === '可选' ? '可选' : `$${item.cad_cost}`;
    
    row.innerHTML = `
      <td><strong>${item.item}</strong></td>
      <td>${manualCost}</td>
      <td>${cadCost}</td>
      <td>${item.description}</td>
    `;
    tableBody.appendChild(row);
    
    // Calculate totals (excluding N/A and 可选)
    if (item.manual_cost !== 'N/A' && item.manual_cost !== '可选') {
      const costs = item.manual_cost.split('-');
      const avgCost = costs.length > 1 ? 
        (parseInt(costs[0]) + parseInt(costs[1])) / 2 : 
        parseInt(costs[0]);
      manualTotal += avgCost;
    }
    
    if (item.cad_cost !== 'N/A' && item.cad_cost !== '可选') {
      const costs = item.cad_cost.split('-');
      const avgCost = costs.length > 1 ? 
        (parseInt(costs[0]) + parseInt(costs[1])) / 2 : 
        parseInt(costs[0]);
      cadTotal += avgCost;
    }
  });
  
  // Update total cost displays
  document.getElementById('manual-total').textContent = `$${Math.round(manualTotal)}`;
  document.getElementById('cad-total').textContent = `$${Math.round(cadTotal)}`;
}

// Populate learning stages
function populateLearningStages() {
  const container = document.getElementById('learning-stages');
  
  appData.learning_stages.forEach((stage, index) => {
    const stageCard = document.createElement('div');
    stageCard.className = 'stage-card';
    
    stageCard.innerHTML = `
      <div class="stage-header">
        <h3 class="stage-title">${stage.stage}</h3>
        <span class="stage-duration">${stage.duration}</span>
      </div>
      <div class="stage-content">${stage.content}</div>
      <div class="stage-approach">💡 建议方法：${stage.approach}</div>
    `;
    
    container.appendChild(stageCard);
  });
}

// Populate recommendations
function populateRecommendations() {
  const container = document.getElementById('recommendation-cards');
  
  // Icons for different learner types
  const icons = {
    'budget_conscious': '💰',
    'tech_savvy': '💻',
    'traditional': '🎨',
    'career_focused': '🚀'
  };
  
  Object.entries(appData.recommendations).forEach(([key, rec]) => {
    const card = document.createElement('div');
    card.className = 'recommendation-card';
    
    card.innerHTML = `
      <div class="recommendation-title">
        ${icons[key] || '📋'} ${rec.title}
      </div>
      <div class="recommendation-text">${rec.recommendation}</div>
      <div class="recommendation-path">
        <strong>推荐路径：</strong>${rec.path}
      </div>
    `;
    
    container.appendChild(card);
  });
}

// Add smooth scrolling for better UX
function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Add click event to tab buttons to scroll to top
document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      setTimeout(smoothScrollToTop, 100);
    });
  });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    const activeButton = document.querySelector('.tab-btn.active');
    const buttons = Array.from(document.querySelectorAll('.tab-btn'));
    const currentIndex = buttons.indexOf(activeButton);
    
    let newIndex;
    if (e.key === 'ArrowLeft') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : buttons.length - 1;
    } else {
      newIndex = currentIndex < buttons.length - 1 ? currentIndex + 1 : 0;
    }
    
    const targetTab = buttons[newIndex].dataset.tab;
    switchTab(targetTab);
    buttons[newIndex].focus();
  }
});

// Add accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
  // Add ARIA labels and roles
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabButtons.forEach((button, index) => {
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-selected', button.classList.contains('active'));
    button.setAttribute('tabindex', button.classList.contains('active') ? '0' : '-1');
  });
  
  tabContents.forEach((content, index) => {
    content.setAttribute('role', 'tabpanel');
    content.setAttribute('aria-hidden', !content.classList.contains('active'));
  });
  
  // Update ARIA attributes when tabs change
  const originalSwitchTab = switchTab;
  switchTab = function(targetTab) {
    originalSwitchTab(targetTab);
    
    // Update ARIA attributes
    tabButtons.forEach(btn => {
      const isActive = btn.classList.contains('active');
      btn.setAttribute('aria-selected', isActive);
      btn.setAttribute('tabindex', isActive ? '0' : '-1');
    });
    
    tabContents.forEach(content => {
      const isActive = content.classList.contains('active');
      content.setAttribute('aria-hidden', !isActive);
    });
  };
});

// Add print-friendly styles
function optimizeForPrint() {
  // Show all tab contents when printing
  const style = document.createElement('style');
  style.textContent = `
    @media print {
      .tab-content {
        display: block !important;
        page-break-before: always;
      }
      .tab-content:first-child {
        page-break-before: auto;
      }
      .nav-tabs {
        display: none;
      }
      .chart-container img,
      .timeline-container img {
        max-height: 400px;
        object-fit: contain;
      }
    }
  `;
  document.head.appendChild(style);
}

// Initialize print optimization
document.addEventListener('DOMContentLoaded', optimizeForPrint);