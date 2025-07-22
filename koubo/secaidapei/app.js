// 色彩搭配数据
const colorRulesData = {
  "colorRules": [
    {
      "name": "同色系搭配",
      "icon": "🎨",
      "definition": "将同色相的颜色搭配在一起，通过明度和纯度的变化营造层次感",
      "effect": "端庄、优雅、统一、有层次感",
      "occasions": ["正式场合", "商务", "日常通勤"],
      "examples": ["粉红+大红+玫红", "深蓝+浅蓝+中蓝", "深灰+浅灰+中灰"],
      "tips": ["选择明暗反差较大的色调", "避免过于单调", "可用配饰增加层次"],
      "colors": ["#FFB6C1", "#FF69B4", "#DC143C"]
    },
    {
      "name": "相近色搭配", 
      "icon": "🌈",
      "definition": "选择色相环上相邻或接近的颜色进行搭配",
      "effect": "和谐、自然、柔和、舒适",
      "occasions": ["休闲", "春夏季节", "温馨聚会"],
      "examples": ["红+橙+黄", "蓝+紫+青", "黄+绿+橙"],
      "tips": ["色彩过渡自然", "易于掌握", "可调整饱和度增加变化"],
      "colors": ["#FF6347", "#FFA500", "#FFD700"]
    },
    {
      "name": "对比色搭配",
      "icon": "⚡",
      "definition": "使用色环上距离较远的颜色形成强烈对比效果",
      "effect": "活力、醒目、个性鲜明、视觉冲击强",
      "occasions": ["运动", "party", "创意场合"],
      "examples": ["红+蓝", "黄+紫", "橙+青"],
      "tips": ["注意面积比例", "一主一辅", "避免过于刺眼"],
      "colors": ["#FF0000", "#0000FF", "#FFFFFF"]
    },
    {
      "name": "互补色搭配",
      "icon": "🔄",
      "definition": "使用色环上180°相对的颜色，形成最强烈的对比",
      "effect": "强烈、鲜明、醒目、充满张力",
      "occasions": ["需要突出的场合", "舞台表演", "特殊活动"],
      "examples": ["红+绿", "蓝+橙", "黄+紫"],
      "tips": ["通过面积平衡", "降低饱和度", "加入中性色调和"],
      "colors": ["#FF0000", "#00FF00", "#808080"]
    },
    {
      "name": "三等分配色法",
      "icon": "△",
      "definition": "选择色环上呈等边三角形分布的三种颜色",
      "effect": "丰富、活泼、充满活力、平衡感强",
      "occasions": ["节庆", "儿童服装", "艺术表达"],
      "examples": ["红+黄+蓝", "橙+绿+紫"],
      "tips": ["选择一个主色", "其他颜色作点缀", "注意比例协调"],
      "colors": ["#FF0000", "#FFFF00", "#0000FF"]
    },
    {
      "name": "无彩色搭配",
      "icon": "⚫",
      "definition": "使用黑、白、灰等无色彩进行搭配，或与有彩色结合",
      "effect": "经典、高级、简约、不会出错",
      "occasions": ["任何场合", "职场", "正式活动"],
      "examples": ["黑+白+灰", "黑+白+红", "灰+白+蓝"],
      "tips": ["永不过时", "可与任何颜色搭配", "通过材质增加变化"],
      "colors": ["#000000", "#FFFFFF", "#808080"]
    },
    {
      "name": "分层配色法",
      "icon": "📐",
      "definition": "运用主色、辅助色、点缀色的比例搭配原则",
      "effect": "层次分明、重点突出、平衡协调",
      "occasions": ["日常穿搭", "职业装", "搭配学习"],
      "examples": ["60%主色+30%辅色+10%点缀色"],
      "tips": ["主色占比60%以上", "辅色30%左右", "点缀色5-15%"],
      "colors": ["#4A90E2", "#7ED321", "#F5A623"]
    }
  ],
  "colorPsychology": {
    "红色": "热情、活力、力量、吸引注意",
    "橙色": "温暖、友好、活泼、创造力",
    "黄色": "乐观、明亮、智慧、警示",
    "绿色": "自然、和谐、安全、成长",
    "蓝色": "冷静、信任、专业、深邃",
    "紫色": "神秘、高贵、创意、浪漫",
    "粉色": "温柔、可爱、浪漫、女性化",
    "黑色": "权威、神秘、优雅、正式",
    "白色": "纯洁、简洁、清新、干净",
    "灰色": "中性、稳重、低调、平衡"
  },
  "seasonalColors": {
    "春季": ["#FFB6C1", "#90EE90", "#87CEEB", "#FFFACD"],
    "夏季": ["#FFFFFF", "#B0E0E6", "#98FB98", "#FFA07A"],
    "秋季": ["#D2691E", "#808000", "#8B0000", "#FFD700"],
    "冬季": ["#191970", "#8B0000", "#000000", "#C0C0C0"]
  },
  "occasionColors": {
    "职场": ["#191970", "#000000", "#FFFFFF", "#808080"],
    "约会": ["#FFB6C1", "#FF0000", "#4169E1", "#F5F5DC"],
    "运动": ["#0000FF", "#00FF00", "#FFA500", "#000000"],
    "派对": ["#FFD700", "#C0C0C0", "#FF0000", "#4B0082"]
  },
  "practicalTips": [
    "全身色彩不超过三种",
    "上深下浅：端庄大方",
    "上浅下深：明快活泼",
    "绿色配咖啡色经典组合",
    "黑白灰是万能搭配色",
    "冷暖色调要统一",
    "主色与点缀色要有面积对比",
    "根据肤色选择适合的颜色",
    "考虑场合选择合适配色",
    "用配饰来完善整体配色"
  ]
};

// 全局变量
let currentSection = 'rules';
let filteredRules = [...colorRulesData.colorRules];

// 工具函数
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function adjustColor(hex, adjustment) {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  
  const newR = Math.max(0, Math.min(255, rgb.r + adjustment));
  const newG = Math.max(0, Math.min(255, rgb.g + adjustment));
  const newB = Math.max(0, Math.min(255, rgb.b + adjustment));
  
  return rgbToHex(newR, newG, newB);
}

function getComplementaryColor(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  
  return rgbToHex(255 - rgb.r, 255 - rgb.g, 255 - rgb.b);
}

function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function hexToHsl(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return {h: 0, s: 0, l: 0};
  
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  
  return {h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100)};
}

// DOM操作函数
function renderRuleCards() {
  const container = document.getElementById('rulesGrid');
  if (!container) return;
  
  container.innerHTML = '';
  
  filteredRules.forEach((rule, index) => {
    const card = document.createElement('div');
    card.className = 'rule-card';
    card.dataset.index = index;
    
    const colorsHtml = rule.colors.map(color => 
      `<div class="color-sample" style="background-color: ${color}"></div>`
    ).join('');
    
    const occasionsHtml = rule.occasions.map(occasion =>
      `<span class="occasion-tag">${occasion}</span>`
    ).join('');
    
    card.innerHTML = `
      <div class="rule-card__header">
        <span class="rule-card__icon">${rule.icon}</span>
        <h3 class="rule-card__title">${rule.name}</h3>
      </div>
      <div class="rule-card__definition">${rule.definition}</div>
      <div class="rule-card__effect">
        <div class="rule-card__effect-title">视觉效果</div>
        <div class="rule-card__effect-text">${rule.effect}</div>
      </div>
      <div class="rule-card__colors">${colorsHtml}</div>
      <div class="rule-card__occasions">${occasionsHtml}</div>
    `;
    
    // 为每个卡片添加点击事件监听器
    card.addEventListener('click', () => {
      showRuleDetail(rule);
    });
    
    container.appendChild(card);
  });
}

function showRuleDetail(rule) {
  const modal = document.getElementById('ruleModal');
  const modalIcon = document.getElementById('modalIcon');
  const modalTitle = document.getElementById('modalTitle');
  const modalDefinition = document.getElementById('modalDefinition');
  const modalEffect = document.getElementById('modalEffect');
  const modalOccasions = document.getElementById('modalOccasions');
  const modalExamples = document.getElementById('modalExamples');
  const modalTips = document.getElementById('modalTips');
  
  if (!modal) return;
  
  modalIcon.textContent = rule.icon;
  modalTitle.textContent = rule.name;
  modalDefinition.textContent = rule.definition;
  modalEffect.textContent = rule.effect;
  
  // 适用场合
  modalOccasions.innerHTML = rule.occasions.map(occasion =>
    `<span class="occasion-tag">${occasion}</span>`
  ).join('');
  
  // 配色示例
  modalExamples.innerHTML = rule.examples.map(example => `
    <div class="color-example">
      <div class="color-example-colors">
        ${rule.colors.map(color => 
          `<div class="color-example-color" style="background-color: ${color}"></div>`
        ).join('')}
      </div>
      <div class="color-example-text">${example}</div>
    </div>
  `).join('');
  
  // 实用技巧
  modalTips.innerHTML = rule.tips.map(tip => `<li>${tip}</li>`).join('');
  
  modal.className = 'modal modal--active';
}

function hideModal() {
  const modal = document.getElementById('ruleModal');
  if (modal) {
    modal.className = 'modal';
  }
}

function renderColorSchemes(baseColor) {
  const container = document.getElementById('colorSchemes');
  if (!container) return;
  
  const hsl = hexToHsl(baseColor);
  
  const schemes = [
    {
      name: '单色调',
      colors: [
        baseColor,
        hslToHex(hsl.h, hsl.s, Math.min(90, hsl.l + 30)),
        hslToHex(hsl.h, hsl.s, Math.max(10, hsl.l - 30))
      ]
    },
    {
      name: '互补色',
      colors: [
        baseColor,
        hslToHex((hsl.h + 180) % 360, hsl.s, hsl.l),
        '#F5F5F5'
      ]
    },
    {
      name: '相近色',
      colors: [
        baseColor,
        hslToHex((hsl.h + 30) % 360, hsl.s, hsl.l),
        hslToHex((hsl.h - 30 + 360) % 360, hsl.s, hsl.l)
      ]
    },
    {
      name: '三色调',
      colors: [
        baseColor,
        hslToHex((hsl.h + 120) % 360, hsl.s, hsl.l),
        hslToHex((hsl.h + 240) % 360, hsl.s, hsl.l)
      ]
    }
  ];
  
  container.innerHTML = schemes.map(scheme => `
    <div class="color-scheme">
      <div class="color-scheme__title">${scheme.name}</div>
      <div class="color-scheme__colors">
        ${scheme.colors.map(color => 
          `<div class="color-scheme__color" style="background-color: ${color}"></div>`
        ).join('')}
      </div>
    </div>
  `).join('');
}

function renderTips() {
  const basicTipsContainer = document.getElementById('basicTips');
  const seasonalContainer = document.getElementById('seasonalColors');
  const occasionContainer = document.getElementById('occasionColors');
  
  if (!basicTipsContainer || !seasonalContainer || !occasionContainer) return;
  
  // 基础搭配技巧
  basicTipsContainer.innerHTML = colorRulesData.practicalTips.map(tip => 
    `<li>${tip}</li>`
  ).join('');
  
  // 季节配色
  seasonalContainer.innerHTML = Object.entries(colorRulesData.seasonalColors).map(([season, colors]) => `
    <div class="season-item">
      <span class="season-name">${season}</span>
      <div class="season-colors">
        ${colors.map(color => 
          `<div class="season-color" style="background-color: ${color}"></div>`
        ).join('')}
      </div>
    </div>
  `).join('');
  
  // 场合配色
  occasionContainer.innerHTML = Object.entries(colorRulesData.occasionColors).map(([occasion, colors]) => `
    <div class="occasion-item">
      <span class="occasion-name">${occasion}</span>
      <div class="occasion-colors-list">
        ${colors.map(color => 
          `<div class="occasion-color" style="background-color: ${color}"></div>`
        ).join('')}
      </div>
    </div>
  `).join('');
}

function renderPsychology() {
  const container = document.getElementById('psychologyGrid');
  if (!container) return;
  
  const colorMap = {
    '红色': '#FF0000',
    '橙色': '#FFA500',
    '黄色': '#FFFF00',
    '绿色': '#00FF00',
    '蓝色': '#0000FF',
    '紫色': '#800080',
    '粉色': '#FFB6C1',
    '黑色': '#000000',
    '白色': '#FFFFFF',
    '灰色': '#808080'
  };
  
  container.innerHTML = Object.entries(colorRulesData.colorPsychology).map(([color, effect]) => `
    <div class="psychology-item">
      <div class="psychology-color" style="background-color: ${colorMap[color]}; ${color === '白色' ? 'border: 2px solid #ccc;' : ''}"></div>
      <div class="psychology-name">${color}</div>
      <div class="psychology-effect">${effect}</div>
    </div>
  `).join('');
}

function switchSection(sectionName) {
  console.log('Switching to section:', sectionName);
  
  // 隐藏所有部分
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('section--active');
  });
  
  // 显示目标部分
  const targetSection = document.getElementById(sectionName);
  if (targetSection) {
    targetSection.classList.add('section--active');
  }
  
  // 更新导航按钮状态
  const navButtons = document.querySelectorAll('.nav__btn');
  navButtons.forEach(btn => {
    btn.classList.remove('nav__btn--active');
  });
  
  const activeBtn = document.querySelector(`[data-section="${sectionName}"]`);
  if (activeBtn) {
    activeBtn.classList.add('nav__btn--active');
  }
  
  currentSection = sectionName;
}

function filterRules(searchTerm) {
  const term = searchTerm.toLowerCase().trim();
  
  if (term === '') {
    filteredRules = [...colorRulesData.colorRules];
  } else {
    filteredRules = colorRulesData.colorRules.filter(rule => 
      rule.name.toLowerCase().includes(term) ||
      rule.definition.toLowerCase().includes(term) ||
      rule.effect.toLowerCase().includes(term) ||
      rule.occasions.some(occasion => occasion.toLowerCase().includes(term)) ||
      rule.examples.some(example => example.toLowerCase().includes(term))
    );
  }
  
  renderRuleCards();
}

// 事件监听器设置
function setupEventListeners() {
  // 导航按钮点击事件
  const navButtons = document.querySelectorAll('.nav__btn');
  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const section = e.target.getAttribute('data-section');
      console.log('Nav button clicked:', section);
      if (section) {
        switchSection(section);
      }
    });
  });
  
  // 搜索功能
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filterRules(e.target.value);
    });
    
    searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        filterRules(e.target.value);
      }
    });
  }
  
  // 模态框关闭事件
  const modalClose = document.querySelector('.modal__close');
  if (modalClose) {
    modalClose.addEventListener('click', (e) => {
      e.preventDefault();
      hideModal();
    });
  }
  
  const modal = document.getElementById('ruleModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        hideModal();
      }
    });
  }
  
  // ESC键关闭模态框
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideModal();
    }
  });
  
  // 颜色选择器事件
  const colorPicker = document.getElementById('colorPicker');
  const colorHex = document.getElementById('colorHex');
  const colorRgb = document.getElementById('colorRgb');
  
  if (colorPicker && colorHex && colorRgb) {
    colorPicker.addEventListener('input', (e) => {
      const color = e.target.value;
      const rgb = hexToRgb(color);
      
      colorHex.textContent = color.toUpperCase();
      if (rgb) {
        colorRgb.textContent = `RGB(${rgb.r}, ${rgb.g}, ${rgb.b})`;
      }
      
      renderColorSchemes(color);
    });
    
    colorPicker.addEventListener('change', (e) => {
      const color = e.target.value;
      const rgb = hexToRgb(color);
      
      colorHex.textContent = color.toUpperCase();
      if (rgb) {
        colorRgb.textContent = `RGB(${rgb.r}, ${rgb.g}, ${rgb.b})`;
      }
      
      renderColorSchemes(color);
    });
  }
}

// 初始化应用
function initApp() {
  console.log('Initializing app...');
  
  // 渲染所有内容
  renderRuleCards();
  renderTips();
  renderPsychology();
  renderColorSchemes('#4A90E2');
  
  // 设置事件监听器
  setupEventListeners();
  
  // 设置初始颜色信息
  const initialColor = '#4A90E2';
  const rgb = hexToRgb(initialColor);
  const colorHex = document.getElementById('colorHex');
  const colorRgb = document.getElementById('colorRgb');
  
  if (colorHex && colorRgb && rgb) {
    colorHex.textContent = initialColor;
    colorRgb.textContent = `RGB(${rgb.r}, ${rgb.g}, ${rgb.b})`;
  }
  
  console.log('App initialized successfully');
}

// 当DOM加载完成时初始化应用
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}