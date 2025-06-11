// Application data
const zipperData = {
  "zipper_types": [
    {
      "chinese_name": "尼龙螺旋拉链",
      "english_name": "Nylon Coil Zipper",
      "material": "尼龙/聚酯",
      "sizes": "#3, #5, #7",
      "applications": "连衣裙,裙子,轻便夹克,包包",
      "advantages": "轻便,柔韧,色彩丰富",
      "price_range": "低-中",
      "description": "最常见的拉链类型，由连续的尼龙线圈制成，轻便灵活，适合各种轻中型服装。"
    },
    {
      "chinese_name": "金属拉链",
      "english_name": "Metal Zipper",
      "material": "金属(黄铜/铝/镍)",
      "sizes": "#3, #5, #8, #10",
      "applications": "牛仔裤,皮夹克,重型服装",
      "advantages": "坚固耐用,经典外观",
      "price_range": "中-高",
      "description": "由金属齿制成，通常用于需要额外强度和经典外观的服装，如牛仔裤和皮夹克。"
    },
    {
      "chinese_name": "塑料模压拉链",
      "english_name": "Molded Plastic Zipper",
      "material": "塑料/树脂",
      "sizes": "#5, #8, #10",
      "applications": "外套,运动服,背包",
      "advantages": "耐腐蚀,色彩鲜艳",
      "price_range": "低-中",
      "description": "采用注塑成型的塑料齿，具有良好的耐腐蚀性和丰富的色彩选择。"
    },
    {
      "chinese_name": "隐形拉链",
      "english_name": "Invisible Zipper",
      "material": "尼龙",
      "sizes": "#2, #4, #6",
      "applications": "正装,晚礼服,裙子",
      "advantages": "外观隐蔽,优雅美观",
      "price_range": "中",
      "description": "拉链齿隐藏在背面，从正面看几乎不可见，常用于需要美观外表的正式服装。"
    },
    {
      "chinese_name": "分离式拉链",
      "english_name": "Separating Zipper",
      "material": "金属/塑料",
      "sizes": "#5, #8, #10",
      "applications": "夹克,外套,背心",
      "advantages": "完全分离,方便穿脱",
      "price_range": "中-高",
      "description": "底部可以完全分离的拉链，常用于夹克和外套，方便穿脱。"
    },
    {
      "chinese_name": "双向拉链",
      "english_name": "Two-Way Zipper",
      "material": "金属/塑料",
      "sizes": "#5, #8, #10",
      "applications": "长外套,睡袋,大衣",
      "advantages": "双向开合,使用灵活",
      "price_range": "高",
      "description": "具有两个拉头，可以从两个方向开合，提供更大的使用灵活性。"
    },
    {
      "chinese_name": "防水拉链",
      "english_name": "Waterproof Zipper",
      "material": "聚氨酯涂层",
      "sizes": "#5, #8",
      "applications": "户外服装,雨具,运动服",
      "advantages": "防水防潮,适合户外",
      "price_range": "高",
      "description": "具有特殊防水涂层，能够有效防止水分渗透，适合户外和运动服装。"
    },
    {
      "chinese_name": "可逆拉链",
      "english_name": "Reversible Zipper",
      "material": "金属/塑料",
      "sizes": "#5, #8",
      "applications": "双面夹克,可翻转服装",
      "advantages": "双面可用,时尚实用",
      "price_range": "高",
      "description": "设计用于双面服装，两面都可以正常使用，适合可翻转的时尚服装。"
    },
    {
      "chinese_name": "重型拉链",
      "english_name": "Heavy Duty Zipper",
      "material": "金属/厚塑料",
      "sizes": "#8, #10, #15",
      "applications": "工作服,帐篷,行李箱",
      "advantages": "超强耐用,承重能力强",
      "price_range": "高",
      "description": "专为重型应用设计，具有超强的耐用性和承重能力。"
    },
    {
      "chinese_name": "装饰拉链",
      "english_name": "Decorative Zipper",
      "material": "金属/塑料",
      "sizes": "#3, #5, #7",
      "applications": "时装,配饰,装饰品",
      "advantages": "美观时尚,个性化设计",
      "price_range": "中-高",
      "description": "专注于外观设计的拉链，具有独特的装饰效果和个性化特征。"
    }
  ],
  "applications": [
    {"name": "连衣裙/Dresses", "recommended_zippers": ["隐形拉链", "尼龙螺旋拉链"], "icon": "👗"},
    {"name": "夹克/Jackets", "recommended_zippers": ["分离式拉链", "双向拉链"], "icon": "🧥"},
    {"name": "裤子/Pants", "recommended_zippers": ["金属拉链", "隐形拉链"], "icon": "👖"},
    {"name": "裙子/Skirts", "recommended_zippers": ["隐形拉链", "尼龙螺旋拉链"], "icon": "🩱"},
    {"name": "外套/Coats", "recommended_zippers": ["分离式拉链", "防水拉链"], "icon": "🧥"},
    {"name": "包包/Bags", "recommended_zippers": ["尼龙螺旋拉链", "塑料模压拉链"], "icon": "👜"},
    {"name": "运动服/Sportswear", "recommended_zippers": ["塑料模压拉链", "防水拉链"], "icon": "👕"},
    {"name": "户外装备/Outdoor Gear", "recommended_zippers": ["防水拉链", "重型拉链"], "icon": "⛺"},
    {"name": "正装/Formal Wear", "recommended_zippers": ["隐形拉链"], "icon": "👔"},
    {"name": "工作服/Workwear", "recommended_zippers": ["重型拉链", "金属拉链"], "icon": "🦺"}
  ],
  "size_guide": [
    {"size": "#2", "width": "2mm", "applications": "轻薄面料", "typical_use": "精细服装"},
    {"size": "#3", "width": "3mm", "applications": "轻量服装", "typical_use": "连衣裙、衬衫"},
    {"size": "#4", "width": "4mm", "applications": "中等重量", "typical_use": "隐形拉链"},
    {"size": "#5", "width": "5mm", "applications": "通用尺寸", "typical_use": "大多数服装"},
    {"size": "#6", "width": "6mm", "applications": "隐形拉链", "typical_use": "高级定制"},
    {"size": "#7", "width": "7mm", "applications": "装饰用途", "typical_use": "时装设计"},
    {"size": "#8", "width": "8mm", "applications": "重型应用", "typical_use": "夹克、外套"},
    {"size": "#10", "width": "10mm", "applications": "厚重服装", "typical_use": "重型外套"},
    {"size": "#15", "width": "15mm", "applications": "工业用途", "typical_use": "工作服、帐篷"}
  ]
};

// Global variables
let currentSection = 'home';
let wizardAnswers = {};
let currentWizardStep = 1;

// DOM elements
const navButtons = document.querySelectorAll('.nav__btn');
const sections = document.querySelectorAll('.section');
const zipperGrid = document.getElementById('zipperGrid');
const applicationsGrid = document.getElementById('applicationsGrid');
const sizeTable = document.getElementById('sizeTable');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('zipperModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  renderZipperTypes();
  renderApplications();
  renderSizeGuide();
  initializeComparison();
  initializeWizard();
  initializeModal();
});

// Navigation
function initializeNavigation() {
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const section = button.dataset.section;
      showSection(section);
      
      // Update active nav button
      navButtons.forEach(btn => btn.classList.remove('nav__btn--active'));
      button.classList.add('nav__btn--active');
    });
  });
}

function showSection(sectionId) {
  sections.forEach(section => {
    section.classList.remove('section--active');
    if (section.id === sectionId) {
      section.classList.add('section--active');
    }
  });
  currentSection = sectionId;
}

// Zipper Types
function renderZipperTypes() {
  zipperGrid.innerHTML = '';
  
  zipperData.zipper_types.forEach((zipper, index) => {
    const card = createZipperCard(zipper, index);
    zipperGrid.appendChild(card);
  });
  
  // Initialize filtering
  initializeFiltering();
}

function createZipperCard(zipper, index) {
  const card = document.createElement('div');
  card.className = 'zipper-card';
  card.dataset.priceRange = zipper.price_range;
  
  const priceClass = getPriceClass(zipper.price_range);
  
  card.innerHTML = `
    <div class="zipper-card__header">
      <div class="zipper-card__price-badge ${priceClass}">${zipper.price_range}</div>
      <h3 class="zipper-card__title">${zipper.chinese_name}</h3>
      <p class="zipper-card__subtitle">${zipper.english_name}</p>
    </div>
    <div class="zipper-card__body">
      <div class="zipper-card__info">
        <div class="info-item">
          <span class="info-item__label">材料 Material:</span>
          <span class="info-item__value">${zipper.material}</span>
        </div>
        <div class="info-item">
          <span class="info-item__label">尺寸 Sizes:</span>
          <span class="info-item__value">${zipper.sizes}</span>
        </div>
        <div class="info-item">
          <span class="info-item__label">优势 Advantages:</span>
          <span class="info-item__value">${zipper.advantages}</span>
        </div>
      </div>
      <p class="zipper-card__description">${zipper.description}</p>
    </div>
  `;
  
  // Add click event to show modal
  card.addEventListener('click', () => showZipperModal(zipper));
  
  return card;
}

function getPriceClass(priceRange) {
  if (priceRange.includes('低')) return 'price-low';
  if (priceRange.includes('高')) return 'price-high';
  return 'price-medium';
}

function initializeFiltering() {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      
      // Update active filter button
      filterButtons.forEach(btn => btn.classList.remove('filter-btn--active'));
      button.classList.add('filter-btn--active');
      
      // Filter cards
      const cards = document.querySelectorAll('.zipper-card');
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.priceRange === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// Applications
function renderApplications() {
  applicationsGrid.innerHTML = '';
  
  zipperData.applications.forEach(app => {
    const card = document.createElement('div');
    card.className = 'application-card';
    
    card.innerHTML = `
      <div class="application-card__icon">${app.icon}</div>
      <h3 class="application-card__title">${app.name}</h3>
      <p class="application-card__zippers">推荐拉链: ${app.recommended_zippers.join(', ')}</p>
    `;
    
    card.addEventListener('click', () => showApplicationModal(app));
    applicationsGrid.appendChild(card);
  });
}

// Size Guide
function renderSizeGuide() {
  sizeTable.innerHTML = `
    <div class="size-table__header">
      <div>尺寸 Size</div>
      <div>宽度 Width</div>
      <div>典型用途 Typical Use</div>
    </div>
  `;
  
  zipperData.size_guide.forEach(size => {
    const row = document.createElement('div');
    row.className = 'size-table__row';
    
    row.innerHTML = `
      <div>${size.size}</div>
      <div>${size.width}</div>
      <div>${size.typical_use}</div>
    `;
    
    sizeTable.appendChild(row);
  });
}

// Comparison Tool
function initializeComparison() {
  const selects = [
    document.getElementById('compareSelect1'),
    document.getElementById('compareSelect2'),
    document.getElementById('compareSelect3')
  ];
  
  // Populate select options
  selects.forEach(select => {
    zipperData.zipper_types.forEach(zipper => {
      const option = document.createElement('option');
      option.value = zipper.chinese_name;
      option.textContent = `${zipper.chinese_name} (${zipper.english_name})`;
      select.appendChild(option);
    });
    
    select.addEventListener('change', updateComparison);
  });
}

function updateComparison() {
  const selects = [
    document.getElementById('compareSelect1'),
    document.getElementById('compareSelect2'),
    document.getElementById('compareSelect3')
  ];
  
  const selectedZippers = selects
    .map(select => select.value)
    .filter(value => value)
    .map(name => zipperData.zipper_types.find(z => z.chinese_name === name));
  
  if (selectedZippers.length < 2) {
    document.getElementById('comparisonResults').innerHTML = '<p class="text-center">请至少选择两种拉链进行对比 | Please select at least two zippers to compare</p>';
    return;
  }
  
  renderComparisonTable(selectedZippers);
}

function renderComparisonTable(zippers) {
  const results = document.getElementById('comparisonResults');
  
  const table = document.createElement('div');
  table.className = 'comparison-table';
  
  // Header
  const header = document.createElement('div');
  header.className = 'comparison-header';
  header.style.gridTemplateColumns = `200px repeat(${zippers.length}, 1fr)`;
  header.innerHTML = '<div></div>' + zippers.map(z => `<div>${z.chinese_name}</div>`).join('');
  table.appendChild(header);
  
  // Rows
  const properties = [
    { key: 'english_name', label: 'English Name | 英文名称' },
    { key: 'material', label: 'Material | 材料' },
    { key: 'sizes', label: 'Sizes | 尺寸' },
    { key: 'applications', label: 'Applications | 应用' },
    { key: 'advantages', label: 'Advantages | 优势' },
    { key: 'price_range', label: 'Price Range | 价格范围' }
  ];
  
  properties.forEach(prop => {
    const row = document.createElement('div');
    row.className = 'comparison-row';
    row.style.gridTemplateColumns = `200px repeat(${zippers.length}, 1fr)`;
    
    row.innerHTML = `<div class="comparison-cell comparison-cell--label">${prop.label}</div>` +
      zippers.map(z => `<div class="comparison-cell">${z[prop.key]}</div>`).join('');
    
    table.appendChild(row);
  });
  
  results.innerHTML = '';
  results.appendChild(table);
}

// Selection Wizard
function initializeWizard() {
  const wizardOptions = document.querySelectorAll('.wizard-option');
  
  wizardOptions.forEach(option => {
    option.addEventListener('click', () => {
      // Remove selection from siblings
      const siblings = option.parentElement.querySelectorAll('.wizard-option');
      siblings.forEach(sibling => sibling.classList.remove('wizard-option--selected'));
      
      // Select current option
      option.classList.add('wizard-option--selected');
      
      // Store answer
      wizardAnswers[currentWizardStep] = option.dataset.value;
      
      // Move to next step after delay
      setTimeout(() => {
        nextWizardStep();
      }, 500);
    });
  });
}

function nextWizardStep() {
  if (currentWizardStep < 4) {
    currentWizardStep++;
    updateWizardStep();
  } else {
    showWizardResults();
  }
}

function updateWizardStep() {
  const steps = document.querySelectorAll('.wizard-step');
  const progressFill = document.getElementById('progressFill');
  const currentStepElement = document.getElementById('currentStep');
  
  steps.forEach((step, index) => {
    step.classList.remove('wizard-step--active');
    if (index + 1 === currentWizardStep) {
      step.classList.add('wizard-step--active');
    }
  });
  
  progressFill.style.width = `${(currentWizardStep / 4) * 100}%`;
  currentStepElement.textContent = currentWizardStep;
}

function showWizardResults() {
  const wizardContent = document.getElementById('wizardContent');
  const results = document.getElementById('wizardResults');
  const recommendations = document.getElementById('recommendations');
  
  // Hide wizard steps
  const steps = document.querySelectorAll('.wizard-step');
  steps.forEach(step => step.classList.remove('wizard-step--active'));
  
  // Show results
  results.style.display = 'block';
  
  // Generate recommendations
  const recommendedZippers = getWizardRecommendations();
  
  recommendations.innerHTML = '';
  recommendedZippers.forEach(rec => {
    const card = document.createElement('div');
    card.className = 'recommendation-card';
    
    card.innerHTML = `
      <h4 class="recommendation-card__title">${rec.zipper.chinese_name}</h4>
      <p class="recommendation-card__reason">${rec.reason}</p>
      <p class="recommendation-card__details">${rec.zipper.description}</p>
    `;
    
    recommendations.appendChild(card);
  });
}

function getWizardRecommendations() {
  const recommendations = [];
  const clothing = wizardAnswers[1];
  const fabric = wizardAnswers[2];
  const budget = wizardAnswers[3];
  const features = wizardAnswers[4];
  
  zipperData.zipper_types.forEach(zipper => {
    let score = 0;
    let reasons = [];
    
    // Check clothing type compatibility
    if (zipper.applications.includes(clothing)) {
      score += 3;
      reasons.push(`适合${clothing}`);
    }
    
    // Check fabric weight
    if (fabric === '轻薄面料' && (zipper.chinese_name.includes('尼龙') || zipper.chinese_name.includes('隐形'))) {
      score += 2;
      reasons.push('适合轻薄面料');
    } else if (fabric === '厚重面料' && (zipper.chinese_name.includes('重型') || zipper.chinese_name.includes('金属'))) {
      score += 2;
      reasons.push('适合厚重面料');
    }
    
    // Check budget
    if (budget === '经济实惠' && zipper.price_range.includes('低')) {
      score += 2;
      reasons.push('价格经济');
    } else if (budget === '中等价位' && zipper.price_range.includes('中')) {
      score += 2;
      reasons.push('价格适中');
    } else if (budget === '高端产品' && zipper.price_range.includes('高')) {
      score += 2;
      reasons.push('高端品质');
    }
    
    // Check special features
    if (features === '防水' && zipper.chinese_name.includes('防水')) {
      score += 3;
      reasons.push('防水功能');
    } else if (features === '隐形' && zipper.chinese_name.includes('隐形')) {
      score += 3;
      reasons.push('隐形设计');
    } else if (features === '装饰性' && zipper.chinese_name.includes('装饰')) {
      score += 3;
      reasons.push('装饰效果');
    } else if (features === '超强耐用' && zipper.chinese_name.includes('重型')) {
      score += 3;
      reasons.push('超强耐用');
    }
    
    if (score > 2) {
      recommendations.push({
        zipper: zipper,
        score: score,
        reason: reasons.join(', ')
      });
    }
  });
  
  return recommendations
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

function resetWizard() {
  currentWizardStep = 1;
  wizardAnswers = {};
  
  // Reset UI
  const results = document.getElementById('wizardResults');
  results.style.display = 'none';
  
  const options = document.querySelectorAll('.wizard-option');
  options.forEach(option => option.classList.remove('wizard-option--selected'));
  
  updateWizardStep();
}

// Modal functionality
function initializeModal() {
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}

function showZipperModal(zipper) {
  const images = {
    '防水拉链': 'https://pplx-res.cloudinary.com/image/upload/v1749622685/pplx_project_search_images/4d4011918045dd1eea25d30a7c13ded106388a8d.jpg',
    '重型拉链': 'https://pplx-res.cloudinary.com/image/upload/v1749622685/pplx_project_search_images/b1660ded47ba46de41613e80e8e2b91fcf0a2c4d.jpg',
    '分离式拉链': 'https://pplx-res.cloudinary.com/image/upload/v1749622685/pplx_project_search_images/93cba5785034119f4efb269c3896a3d283e75e85.jpg'
  };
  
  modalBody.innerHTML = `
    <h2 class="modal__title">${zipper.chinese_name} | ${zipper.english_name}</h2>
    ${images[zipper.chinese_name] ? `<img src="${images[zipper.chinese_name]}" alt="${zipper.chinese_name}" class="modal__image">` : ''}
    <div class="modal__specs">
      <div class="modal__spec">
        <span class="modal__spec-label">材料 Material:</span>
        <span class="modal__spec-value">${zipper.material}</span>
      </div>
      <div class="modal__spec">
        <span class="modal__spec-label">尺寸 Sizes:</span>
        <span class="modal__spec-value">${zipper.sizes}</span>
      </div>
      <div class="modal__spec">
        <span class="modal__spec-label">应用 Applications:</span>
        <span class="modal__spec-value">${zipper.applications}</span>
      </div>
      <div class="modal__spec">
        <span class="modal__spec-label">优势 Advantages:</span>
        <span class="modal__spec-value">${zipper.advantages}</span>
      </div>
      <div class="modal__spec">
        <span class="modal__spec-label">价格范围 Price Range:</span>
        <span class="modal__spec-value">${zipper.price_range}</span>
      </div>
    </div>
    <p><strong>详细说明 Description:</strong></p>
    <p>${zipper.description}</p>
  `;
  
  modal.classList.add('modal--active');
  document.body.style.overflow = 'hidden';
}

function showApplicationModal(app) {
  const recommendedZippers = app.recommended_zippers.map(name => 
    zipperData.zipper_types.find(z => z.chinese_name === name)
  ).filter(Boolean);
  
  modalBody.innerHTML = `
    <h2 class="modal__title">${app.name}</h2>
    <div class="application-card__icon" style="font-size: 4rem; text-align: center; margin: 20px 0;">${app.icon}</div>
    <h3>推荐拉链类型 | Recommended Zipper Types:</h3>
    <div class="modal__specs">
      ${recommendedZippers.map(zipper => `
        <div class="modal__spec">
          <span class="modal__spec-label">${zipper.chinese_name}:</span>
          <span class="modal__spec-value">${zipper.advantages}</span>
        </div>
      `).join('')}
    </div>
    <h3>选择建议 | Selection Tips:</h3>
    <p>根据具体需求选择合适的拉链类型，考虑面料重量、使用频率和美观要求。</p>
  `;
  
  modal.classList.add('modal--active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('modal--active');
  document.body.style.overflow = '';
}