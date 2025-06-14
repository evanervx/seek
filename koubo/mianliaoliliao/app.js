// Fabric and lining data
const fabricData = {
  "fabric_types": [
    {
      "name": "Cotton",
      "name_zh": "棉花",
      "category": "Natural Fiber",
      "category_zh": "天然纤维",
      "properties": ["Breathable", "Absorbent", "Soft", "Durable"],
      "properties_zh": ["透气", "吸湿", "柔软", "耐用"],
      "applications": ["T-shirts", "Bed sheets", "Casual wear", "Undergarments"],
      "applications_zh": ["T恤", "床单", "休闲服", "内衣"],
      "pros": ["Comfortable", "Natural", "Machine washable", "Hypoallergenic"],
      "pros_zh": ["舒适", "天然", "可机洗", "抗过敏"],
      "cons": ["Wrinkles easily", "Shrinks", "Not quick-drying"],
      "cons_zh": ["易皱", "容易缩水", "不快干"]
    },
    {
      "name": "Silk",
      "name_zh": "丝绸",
      "category": "Natural Fiber",
      "category_zh": "天然纤维",
      "properties": ["Lustrous", "Smooth", "Strong", "Lightweight"],
      "properties_zh": ["光泽", "光滑", "强韧", "轻质"],
      "applications": ["Formal wear", "Lingerie", "Scarves", "Linings"],
      "applications_zh": ["正装", "内衣", "围巾", "里料"],
      "pros": ["Luxurious feel", "Natural sheen", "Temperature regulating"],
      "pros_zh": ["奢华手感", "天然光泽", "调节温度"],
      "cons": ["Expensive", "Delicate", "Requires special care"],
      "cons_zh": ["昂贵", "娇贵", "需要特殊护理"]
    },
    {
      "name": "Wool",
      "name_zh": "羊毛",
      "category": "Natural Fiber",
      "category_zh": "天然纤维",
      "properties": ["Warm", "Elastic", "Moisture-wicking", "Resilient"],
      "properties_zh": ["保暖", "弹性", "排湿", "回弹性"],
      "applications": ["Sweaters", "Coats", "Suits", "Blankets"],
      "applications_zh": ["毛衣", "大衣", "西装", "毛毯"],
      "pros": ["Excellent insulation", "Natural", "Flame resistant"],
      "pros_zh": ["优良保温", "天然", "阻燃"],
      "cons": ["Can be itchy", "Expensive", "Requires careful washing"],
      "cons_zh": ["可能扎人", "昂贵", "需要小心清洗"]
    },
    {
      "name": "Linen",
      "name_zh": "亚麻",
      "category": "Natural Fiber",
      "category_zh": "天然纤维",
      "properties": ["Cool", "Absorbent", "Strong", "Breathable"],
      "properties_zh": ["凉爽", "吸湿", "强韧", "透气"],
      "applications": ["Summer clothing", "Tablecloths", "Curtains", "Casual wear"],
      "applications_zh": ["夏装", "桌布", "窗帘", "休闲服"],
      "pros": ["Very breathable", "Gets softer with wash", "Durable"],
      "pros_zh": ["极度透气", "越洗越软", "耐用"],
      "cons": ["Wrinkles easily", "Can be stiff initially"],
      "cons_zh": ["易皱", "初期较硬"]
    },
    {
      "name": "Polyester",
      "name_zh": "聚酯纤维",
      "category": "Synthetic Fiber",
      "category_zh": "合成纤维",
      "properties": ["Wrinkle-resistant", "Quick-drying", "Durable", "Color-fast"],
      "properties_zh": ["防皱", "快干", "耐用", "不褪色"],
      "applications": ["Sportswear", "Work uniforms", "Blended fabrics", "Outdoor gear"],
      "applications_zh": ["运动服", "工作服", "混纺面料", "户外装备"],
      "pros": ["Low maintenance", "Affordable", "Strong"],
      "pros_zh": ["易护理", "价格实惠", "强韧"],
      "cons": ["Not breathable", "Can retain odors", "Not eco-friendly"],
      "cons_zh": ["不透气", "容易保留气味", "不环保"]
    },
    {
      "name": "Nylon",
      "name_zh": "尼龙",
      "category": "Synthetic Fiber",
      "category_zh": "合成纤维",
      "properties": ["Strong", "Elastic", "Lightweight", "Quick-drying"],
      "properties_zh": ["强韧", "弹性", "轻质", "快干"],
      "applications": ["Hosiery", "Activewear", "Swimwear", "Outerwear"],
      "applications_zh": ["丝袜", "运动服", "泳装", "外衣"],
      "pros": ["Very strong", "Elastic", "Mold resistant"],
      "pros_zh": ["极强韧", "弹性好", "防霉"],
      "cons": ["Can be uncomfortable", "Static prone", "Heat sensitive"],
      "cons_zh": ["可能不舒适", "易静电", "怕热"]
    }
  ],
  "lining_types": [
    {
      "name": "Silk Habotai",
      "name_zh": "丝绸双宫绸",
      "material": "100% Silk",
      "material_zh": "100% 丝绸",
      "weight": "Lightweight",
      "weight_zh": "轻质",
      "applications": ["Delicate garments", "Summer clothing", "Lightweight jackets"],
      "applications_zh": ["精致服装", "夏装", "轻薄夹克"],
      "properties": ["Smooth", "Breathable", "Luxurious feel", "Semi-sheer"],
      "properties_zh": ["光滑", "透气", "奢华手感", "半透明"]
    },
    {
      "name": "Bemberg/Cupro",
      "name_zh": "宾霸/铜氨纤维",
      "material": "Regenerated Cellulose",
      "material_zh": "再生纤维素",
      "weight": "Lightweight",
      "weight_zh": "轻质",
      "applications": ["Suit jackets", "Coats", "Formal wear"],
      "applications_zh": ["西装外套", "大衣", "正装"],
      "properties": ["Silk-like feel", "Breathable", "Anti-static", "Moisture-absorbing"],
      "properties_zh": ["丝绸般手感", "透气", "抗静电", "吸湿"]
    },
    {
      "name": "Acetate Lining",
      "name_zh": "醋酸里料",
      "material": "Semi-synthetic",
      "material_zh": "半合成纤维",
      "weight": "Lightweight to Medium",
      "weight_zh": "轻质至中等",
      "applications": ["Coats", "Jackets", "Formal wear"],
      "applications_zh": ["大衣", "夹克", "正装"],
      "properties": ["Smooth", "Lustrous", "Good drape", "Color-fast"],
      "properties_zh": ["光滑", "有光泽", "悬垂性好", "不褪色"]
    },
    {
      "name": "Polyester Lining",
      "name_zh": "聚酯里料",
      "material": "100% Polyester",
      "material_zh": "100% 聚酯纤维",
      "weight": "Lightweight to Medium",
      "weight_zh": "轻质至中等",
      "applications": ["Casual wear", "Outerwear", "Work clothing"],
      "applications_zh": ["休闲服", "外衣", "工作服"],
      "properties": ["Durable", "Wrinkle-resistant", "Easy care", "Quick-drying"],
      "properties_zh": ["耐用", "防皱", "易护理", "快干"]
    },
    {
      "name": "Cotton Batiste",
      "name_zh": "棉布巴蒂斯特",
      "material": "100% Cotton",
      "material_zh": "100% 棉花",
      "weight": "Lightweight",
      "weight_zh": "轻质",
      "applications": ["Summer garments", "Children's clothing", "Casual wear"],
      "applications_zh": ["夏装", "童装", "休闲服"],
      "properties": ["Breathable", "Soft", "Natural", "Absorbent"],
      "properties_zh": ["透气", "柔软", "天然", "吸湿"]
    }
  ],
  "construction_methods": [
    {
      "method": "Woven",
      "method_zh": "梭织",
      "description": "Fabric created by interlacing warp and weft threads at right angles",
      "description_zh": "通过经纬线垂直交织制成的面料",
      "characteristics": ["Stable", "Strong", "Minimal stretch", "Frays when cut"],
      "characteristics_zh": ["稳定", "强韧", "延展性小", "切割时会散边"],
      "types": ["Plain weave", "Twill weave", "Satin weave"],
      "types_zh": ["平纹", "斜纹", "缎纹"],
      "applications": ["Shirts", "Pants", "Suits", "Formal wear"],
      "applications_zh": ["衬衫", "裤子", "西装", "正装"]
    },
    {
      "method": "Knitted",
      "method_zh": "针织",
      "description": "Fabric created by interlocking loops of yarn",
      "description_zh": "通过纱线相互套结形成的面料",
      "characteristics": ["Stretchy", "Flexible", "Comfortable", "Can unravel"],
      "characteristics_zh": ["有弹性", "柔韧", "舒适", "可能散开"],
      "types": ["Single jersey", "Rib knit", "Interlock", "Fleece"],
      "types_zh": ["单面针织", "罗纹针织", "双面针织", "绒布"],
      "applications": ["T-shirts", "Sweaters", "Activewear", "Underwear"],
      "applications_zh": ["T恤", "毛衣", "运动服", "内衣"]
    }
  ]
};

// DOM elements
const fabricGrid = document.getElementById('fabricGrid');
const liningGrid = document.getElementById('liningGrid');
const constructionGrid = document.getElementById('constructionGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const navLinks = document.querySelectorAll('.nav__link');
const modal = document.getElementById('fabricModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal__close');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderFabrics();
    renderLinings();
    renderConstructionMethods();
    setupEventListeners();
    setupNavigation();
});

// Render fabric cards
function renderFabrics(filter = 'all', searchTerm = '') {
    const filteredFabrics = fabricData.fabric_types.filter(fabric => {
        const matchesFilter = filter === 'all' || 
            (filter === 'natural' && fabric.category === 'Natural Fiber') ||
            (filter === 'synthetic' && fabric.category === 'Synthetic Fiber');
        
        const matchesSearch = searchTerm === '' || 
            fabric.name_zh.toLowerCase().includes(searchTerm.toLowerCase()) ||
            fabric.name.toLowerCase().includes(searchTerm.toLowerCase());
        
        return matchesFilter && matchesSearch;
    });

    fabricGrid.innerHTML = filteredFabrics.map(fabric => {
        const categoryClass = fabric.category === 'Natural Fiber' ? 'natural' : 'synthetic';
        return `
            <div class="fabric-card ${categoryClass}" data-fabric='${JSON.stringify(fabric)}'>
                <div class="fabric-card__header">
                    <h3 class="fabric-card__title">${fabric.name_zh} (${fabric.name})</h3>
                    <span class="fabric-card__category ${categoryClass}">${fabric.category_zh}</span>
                </div>
                <div class="properties-list">
                    ${fabric.properties_zh.map(prop => `<span class="property-tag">${prop}</span>`).join('')}
                </div>
                <h4>主要应用：</h4>
                <ul class="applications-list">
                    ${fabric.applications_zh.map(app => `<li>${app}</li>`).join('')}
                </ul>
            </div>
        `;
    }).join('');

    // Add click handlers to fabric cards
    document.querySelectorAll('.fabric-card').forEach(card => {
        card.addEventListener('click', function() {
            const fabric = JSON.parse(this.dataset.fabric);
            showFabricModal(fabric);
        });
    });
}

// Render lining cards
function renderLinings() {
    liningGrid.innerHTML = fabricData.lining_types.map(lining => `
        <div class="lining-card">
            <h3 class="lining-card__title">${lining.name_zh} (${lining.name})</h3>
            <div class="lining-detail">
                <span class="lining-detail__label">材质：</span>
                <span class="lining-detail__value">${lining.material_zh}</span>
            </div>
            <div class="lining-detail">
                <span class="lining-detail__label">重量：</span>
                <span class="lining-detail__value">${lining.weight_zh}</span>
            </div>
            <div class="lining-detail">
                <span class="lining-detail__label">应用：</span>
                <span class="lining-detail__value">${lining.applications_zh.join(', ')}</span>
            </div>
            <div class="properties-list" style="margin-top: 12px;">
                ${lining.properties_zh.map(prop => `<span class="property-tag">${prop}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Render construction methods
function renderConstructionMethods() {
    constructionGrid.innerHTML = fabricData.construction_methods.map(method => `
        <div class="construction-card">
            <h3 class="construction-card__title">${method.method_zh} (${method.method})</h3>
            <p class="construction-card__description">${method.description_zh}</p>
            <div class="characteristics-list">
                ${method.characteristics_zh.map(char => `<div class="characteristic-item">${char}</div>`).join('')}
            </div>
            <h4>类型：</h4>
            <ul class="types-list">
                ${method.types_zh.map(type => `<li>${type}</li>`).join('')}
            </ul>
            <h4>应用：</h4>
            <p style="color: var(--color-text-secondary); font-size: var(--font-size-sm);">
                ${method.applications_zh.join(', ')}
            </p>
        </div>
    `).join('');
}

// Show fabric modal
function showFabricModal(fabric) {
    modalBody.innerHTML = `
        <h3>${fabric.name_zh} (${fabric.name})</h3>
        <p><strong>类型：</strong> ${fabric.category_zh}</p>
        <div class="properties-list" style="margin: 16px 0;">
            ${fabric.properties_zh.map(prop => `<span class="property-tag">${prop}</span>`).join('')}
        </div>
        <h4>主要应用：</h4>
        <ul>
            ${fabric.applications_zh.map(app => `<li>${app}</li>`).join('')}
        </ul>
        <div class="pros-cons">
            <div class="pros">
                <h4>优点：</h4>
                <ul>
                    ${fabric.pros_zh.map(pro => `<li>${pro}</li>`).join('')}
                </ul>
            </div>
            <div class="cons">
                <h4>缺点：</h4>
                <ul>
                    ${fabric.cons_zh.map(con => `<li>${con}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    modal.style.display = 'block';
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value;
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        renderFabrics(activeFilter, searchTerm);
    });

    // Search button
    document.querySelector('.search-btn').addEventListener('click', function() {
        const searchTerm = searchInput.value;
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        renderFabrics(activeFilter, searchTerm);
    });

    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            const searchTerm = searchInput.value;
            renderFabrics(filter, searchTerm);
        });
    });

    // Modal close
    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Setup navigation
function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Add smooth scrolling for all anchor links
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