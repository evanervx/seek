// 应用数据
const appData = {
  "darts": {
    "name_chinese": ["标准省", "胸省", "法式省", "肩部省", "颈部省", "肘部省", "腰部省", "曲线省", "双尖省"],
    "name_english": ["Standard Dart", "Bust Dart", "French Dart", "Shoulder Dart", "Neck Dart", "Elbow Dart", "Waist Dart", "Curved Dart", "Double-pointed Dart"],
    "description_chinese": [
        "最常见的省道类型，呈三角形，开口在一端",
        "专门用于胸部区域，让服装更好地贴合胸部曲线",
        "从腰际开始延伸到胸部，结合了胸省和腰省的功能",
        "从肩部开始的省道，增加女性化的轮廓",
        "从颈部开始，指向胸部顶点，适合有胸围的女性",
        "用于袖部，让袖子更贴合肘部弯曲",
        "用于腰部区域，创造更贴身的腰线",
        "具有弧形线条的省道，提供更多的立体塑形",
        "两端都有尖端的省道，用于连衣裙的腰部塑形"
    ],
    "usage": [
        "胸部、腰部，可用于创建公主缝线",
        "胸部区域，从侧缝开始到胸部顶点附近",
        "从腰线开始向上到胸部，常见于复古风格",
        "肩部，增加女性化轮廓，避免过于宽松的外观",
        "颈部到胸部，为大胸围女性提供更好的贴合度",
        "袖部肘部区域，使袖子更贴合手臂自然弯曲",
        "腰部区域，创造合身的腰线效果",
        "裙子或裤子，当标准省无法提供足够塑形时使用",
        "连衣裙或夹克，同时塑形胸部和臀部"
    ],
    "difficulty": ["初级", "初级", "中级", "初级", "中级", "中级", "初级", "中级", "高级"]
  },
  "pleats": {
    "name_chinese": ["刀褶", "箱褶", "倒箱褶", "手风琴褶", "阳光褶", "水晶褶", "缝褶", "踢褶"],
    "name_english": ["Knife Pleat", "Box Pleat", "Inverted Box Pleat", "Accordion Pleat", "Sunray Pleat", "Crystal Pleat", "Tucks", "Kick Pleat"],
    "description_chinese": [
        "所有褶皱朝同一方向折叠，看起来像刀刃般锋利",
        "由两个背向的刀褶组成，形成箱子状的外观",
        "两个刀褶面向中心汇合，与箱褶相反",
        "非常细密的褶皱，宽度通常不超过1.3厘米",
        "顶部较窄，底部逐渐变宽的扇形褶皱",
        "极细的褶皱，宽度约0.3厘米，需要专业热处理",
        "窄而精致的缝合褶皱，可以是装饰性的",
        "在服装底部增加飘逸感的褶皱"
    ],
    "usage": [
        "裙子、苏格兰短裙、制服裙",
        "衬衫背部、裙子、作为单独的褶皱使用",
        "裙子、袖头、增加胸部的丰满度",
        "正式服装、精致的裙子，需要专业制作",
        "优雅的长裙，从腰部放射状展开",
        "高端定制服装，极其精致的细节",
        "衬衫前胸、袖口、装饰性细节",
        "铅笔裙底部、增加行走时的活动空间"
    ],
    "difficulty": ["初级", "中级", "中级", "高级", "高级", "专业", "初级", "中级"]
  },
  "comparison": {
    "特征": ["目的", "形状", "缝合方式", "面料厚度", "主要用途", "设计效果"],
    "省(Darts)": [
        "减少面料，使平面布料贴合身体曲线",
        "三角形楔形",
        "将两条省道线缝合在一起",
        "适用于各种厚度",
        "胸部、腰部、臀部的贴身效果",
        "紧身、合体的轮廓"
    ],
    "褶(Pleats)": [
        "增加面料丰满度，提供活动空间",
        "折叠形成的规律性褶皱",
        "只在顶部或特定位置缝合",
        "较薄的面料效果更好",
        "裙子、袖子、装饰细节",
        "丰满、有层次的外观"
    ]
  }
};

// DOM 元素
let currentSection = 'home';
let dartsData = [];
let pleatsData = [];
let currentModalData = null; // 添加当前模态框数据的追踪

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    loadData();
    initModal();
    initSearch();
});

// 导航功能
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // 更新活跃链接
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // 显示目标部分
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(targetId).classList.add('active');
            
            currentSection = targetId;
            
            // 滚动到顶部
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// 加载数据
function loadData() {
    // 处理省的数据
    dartsData = appData.darts.name_chinese.map((name, index) => ({
        name_chinese: name,
        name_english: appData.darts.name_english[index],
        description: appData.darts.description_chinese[index],
        usage: appData.darts.usage[index],
        difficulty: appData.darts.difficulty[index]
    }));

    // 处理褶的数据
    pleatsData = appData.pleats.name_chinese.map((name, index) => ({
        name_chinese: name,
        name_english: appData.pleats.name_english[index],
        description: appData.pleats.description_chinese[index],
        usage: appData.pleats.usage[index],
        difficulty: appData.pleats.difficulty[index]
    }));

    // 渲染卡片
    renderDartsCards(dartsData);
    renderPleatsCards(pleatsData);
    renderComparisonTable();
}

// 渲染省的卡片
function renderDartsCards(data) {
    const container = document.getElementById('darts-grid');
    container.innerHTML = '';

    data.forEach((dart, index) => {
        const card = createTechniqueCard(dart, 'dart');
        container.appendChild(card);
    });
}

// 渲染褶的卡片
function renderPleatsCards(data) {
    const container = document.getElementById('pleats-grid');
    container.innerHTML = '';

    data.forEach((pleat, index) => {
        const card = createTechniqueCard(pleat, 'pleat');
        container.appendChild(card);
    });
}

// 创建技术卡片
function createTechniqueCard(item, type) {
    const card = document.createElement('div');
    card.className = 'technique-card';
    card.dataset.type = type;
    card.dataset.difficulty = item.difficulty;
    
    card.innerHTML = `
        <div class="technique-card-header">
            <div>
                <h3>${item.name_chinese}</h3>
                <div class="english-name">${item.name_english}</div>
            </div>
            <span class="difficulty-badge difficulty-${item.difficulty}">${item.difficulty}</span>
        </div>
        <div class="technique-card-description">
            ${item.description}
        </div>
        <div class="technique-card-usage">
            <strong>主要用途：</strong>${item.usage}
        </div>
    `;

    // 添加点击事件，传递完整的数据对象
    card.addEventListener('click', () => {
        showModal(item);
    });

    return card;
}

// 渲染对比表格
function renderComparisonTable() {
    const tbody = document.getElementById('comparison-tbody');
    tbody.innerHTML = '';

    appData.comparison.特征.forEach((feature, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${feature}</td>
            <td>${appData.comparison['省(Darts)'][index]}</td>
            <td>${appData.comparison['褶(Pleats)'][index]}</td>
        `;
        tbody.appendChild(row);
    });
}

// 模态框功能
function initModal() {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.modal-close');

    closeBtn.addEventListener('click', hideModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideModal();
        }
    });

    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            hideModal();
        }
    });
}

function showModal(item) {
    // 保存当前模态框数据
    currentModalData = {
        name_chinese: item.name_chinese,
        name_english: item.name_english,
        description: item.description,
        usage: item.usage,
        difficulty: item.difficulty
    };

    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const english = document.getElementById('modal-english');
    const description = document.getElementById('modal-description');
    const usage = document.getElementById('modal-usage');
    const difficulty = document.getElementById('modal-difficulty');

    // 清空现有内容
    title.textContent = '';
    english.textContent = '';
    description.textContent = '';
    usage.textContent = '';
    difficulty.textContent = '';
    difficulty.className = 'difficulty-badge';

    // 设置新内容
    title.textContent = currentModalData.name_chinese;
    english.textContent = currentModalData.name_english;
    description.textContent = currentModalData.description;
    usage.textContent = currentModalData.usage;
    difficulty.textContent = currentModalData.difficulty;
    difficulty.className = `difficulty-badge difficulty-${currentModalData.difficulty}`;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // 清空模态框数据
    currentModalData = null;
    
    // 清空模态框内容
    const title = document.getElementById('modal-title');
    const english = document.getElementById('modal-english');
    const description = document.getElementById('modal-description');
    const usage = document.getElementById('modal-usage');
    const difficulty = document.getElementById('modal-difficulty');
    
    title.textContent = '';
    english.textContent = '';
    description.textContent = '';
    usage.textContent = '';
    difficulty.textContent = '';
    difficulty.className = 'difficulty-badge';
}

// 搜索和筛选功能
function initSearch() {
    // 省的搜索和筛选
    const dartSearch = document.getElementById('dart-search');
    const dartFilter = document.getElementById('dart-filter');

    dartSearch.addEventListener('input', () => filterCards('darts'));
    dartFilter.addEventListener('change', () => filterCards('darts'));

    // 褶的搜索和筛选
    const pleatSearch = document.getElementById('pleat-search');
    const pleatFilter = document.getElementById('pleat-filter');

    pleatSearch.addEventListener('input', () => filterCards('pleats'));
    pleatFilter.addEventListener('change', () => filterCards('pleats'));
}

function filterCards(type) {
    const searchInput = document.getElementById(`${type === 'darts' ? 'dart' : 'pleat'}-search`);
    const filterSelect = document.getElementById(`${type === 'darts' ? 'dart' : 'pleat'}-filter`);
    const container = document.getElementById(`${type}-grid`);
    const cards = container.querySelectorAll('.technique-card');

    const searchTerm = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;

    cards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        const cardDifficulty = card.dataset.difficulty;

        const matchesSearch = cardText.includes(searchTerm);
        const matchesFilter = !filterValue || cardDifficulty === filterValue;

        if (matchesSearch && matchesFilter) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
            card.style.display = 'none';
        }
    });
}

// 平滑滚动到元素
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 工具函数：防抖
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

// 响应式处理
function handleResize() {
    const navbar = document.querySelector('.navbar');
    const main = document.querySelector('main');
    
    if (window.innerWidth <= 768) {
        main.style.marginTop = '120px';
    } else {
        main.style.marginTop = '80px';
    }
}

// 窗口大小改变时调整布局
window.addEventListener('resize', debounce(handleResize, 250));

// 页面加载动画
function addLoadAnimation() {
    const cards = document.querySelectorAll('.technique-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// 滚动时的导航栏效果
function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
}

window.addEventListener('scroll', debounce(handleScroll, 10));

// 初始化完成后的回调
document.addEventListener('DOMContentLoaded', function() {
    // 添加加载动画
    setTimeout(addLoadAnimation, 100);
    
    // 初始化响应式处理
    handleResize();
    
    // 为所有外部链接添加target="_blank"
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});

// 错误处理
window.addEventListener('error', function(e) {
    console.error('应用发生错误:', e.error);
});

// 导出函数供外部使用（如果需要）
window.AppFunctions = {
    showModal,
    hideModal,
    filterCards,
    scrollToElement
};