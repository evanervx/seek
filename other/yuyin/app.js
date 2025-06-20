// Speech-to-text products data
const products = [
    {
        "产品名称": "讯飞听见",
        "成熟产品或开发": "成熟产品",
        "现有用户": "职场人士、记者律师、老师学生、作家学者等",
        "技术要点": "科大讯飞星火大模型、98%准确率、24种语言转写、多语种翻译",
        "功能要点": "实时录音转文字、AI智能总结、语篇规整、多格式分享、人工精转",
        "是否需再订制": "支持热词定制，可按需定制",
        "需律师参与程度": "低-中等（主要涉及数据安全协议）",
        "实施周期预计": "SaaS版本：1-2周；定制版本：1-3个月",
        "公司规模参保人数": "科大讯飞：约1.5万人",
        "技术扩展能力": "高（支持API接入、SDK集成、私有化部署）",
        "报价范围": "个人版：18-88元/月；企业版：按需报价",
        "年运维费用": "约20-30%产品费用",
        "服务器硬件资源": "云端部署，支持私有化部署（8核CPU、16GB RAM起）"
    },
    {
        "产品名称": "腾讯云语音识别",
        "成熟产品或开发": "成熟产品",
        "现有用户": "微信、王者荣耀、腾讯视频等大量业务",
        "技术要点": "SAN-M模型、50+语言识别、多方言支持、热词增强",
        "功能要点": "实时语音识别、录音文件识别、一句话识别、声纹识别",
        "是否需再订制": "支持自学习平台定制",
        "需律师参与程度": "中等（企业级部署需要数据处理协议）",
        "实施周期预计": "API接入：1-2周；定制模型：2-4个月",
        "公司规模参保人数": "腾讯：约11万人",
        "技术扩展能力": "极高（完整PaaS平台）",
        "报价范围": "按调用量计费，具体价格面议",
        "年运维费用": "约15-25%产品费用",
        "服务器硬件资源": "云端部署为主，支持混合云"
    },
    {
        "产品名称": "阿里云智能语音交互",
        "成熟产品或开发": "成熟产品",
        "现有用户": "淘宝、菜鸟、高德等阿里系业务",
        "技术要点": "SAN-M模型、20+方言识别、50+语言支持、中英自由说",
        "功能要点": "录音文件识别、实时语音识别、一句话识别、语音合成",
        "是否需再订制": "支持深度定制和自学习平台",
        "需律师参与程度": "中等（需要云服务协议和数据处理协议）",
        "实施周期预计": "标准接入：1-3周；定制开发：2-5个月",
        "公司规模参保人数": "阿里巴巴：约25万人",
        "技术扩展能力": "极高（完整云生态）",
        "报价范围": "100万次/1800元起，支持包年包月",
        "年运维费用": "约20-30%产品费用",
        "服务器硬件资源": "云端部署，支持边缘计算节点"
    },
    {
        "产品名称": "百度语音识别",
        "成熟产品或开发": "成熟产品",
        "现有用户": "金融、客服、办公、教育、娱乐等领域",
        "技术要点": "端到端框架、98%准确率、多音色合成、国产化适配",
        "功能要点": "在线识别、离线识别、私有化部署、语音合成",
        "是否需再订制": "支持私有化定制和垂直领域优化",
        "需律师参与程度": "中-高等（私有化部署需要详细合规审查）",
        "实施周期预计": "云端接入：1-2周；私有化部署：3-6个月",
        "公司规模参保人数": "百度：约4.5万人",
        "技术扩展能力": "高（支持云端、边缘、本地部署）",
        "报价范围": "100万次/2400-4000元，私有化另议",
        "年运维费用": "约25-35%产品费用",
        "服务器硬件资源": "支持CPU、GPU、国产化服务器"
    },
    {
        "产品名称": "Google Cloud Speech-to-Text",
        "成熟产品或开发": "成熟产品",
        "现有用户": "全球企业客户，特别是海外市场",
        "技术要点": "神经网络模型、120+语言、实时流式识别、多通道音频",
        "功能要点": "批量转录、流式转录、说话人识别、亵渎词过滤",
        "是否需再订制": "支持AutoML定制和适配训练",
        "需律师参与程度": "中等（需要Google Cloud服务协议）",
        "实施周期预计": "API集成：1-2周；定制模型：1-3个月",
        "公司规模参保人数": "Google：约18万人",
        "技术扩展能力": "极高（全球云基础设施）",
        "报价范围": "$0.016-0.078/分钟，有免费额度",
        "年运维费用": "约10-20%产品费用",
        "服务器硬件资源": "全球云端部署，支持本地部署版本"
    },
    {
        "产品名称": "Microsoft Azure Speech Services",
        "成熟产品或开发": "成熟产品",
        "现有用户": "企业客户、政府机构、开发者",
        "技术要点": "神经网络TTS、自定义语音、实时转录、多语言支持",
        "功能要点": "语音转文字、文字转语音、语音翻译、说话人识别",
        "是否需再订制": "支持自定义神经语音和语音模型",
        "需律师参与程度": "中等（Microsoft企业协议）",
        "实施周期预计": "标准接入：1-2周；自定义开发：2-4个月",
        "公司规模参保人数": "Microsoft：约22万人",
        "技术扩展能力": "极高（Azure云生态）",
        "报价范围": "$1.20/小时起，承诺定价更优惠",
        "年运维费用": "约15-25%产品费用",
        "服务器硬件资源": "云端+边缘计算，支持本地容器部署"
    },
    {
        "产品名称": "Amazon Transcribe",
        "成熟产品或开发": "成熟产品",
        "现有用户": "AWS生态企业客户，媒体、客服等行业",
        "技术要点": "机器学习模型、多语言支持、自动标点、客服优化",
        "功能要点": "批量转录、流式转录、医疗转录、通话分析",
        "是否需再订制": "支持自定义词汇和语言模型",
        "需律师参与程度": "中等（AWS企业协议和合规要求）",
        "实施周期预计": "API接入：1周；定制优化：1-2个月",
        "公司规模参保人数": "Amazon：约150万人",
        "技术扩展能力": "极高（AWS完整生态）",
        "报价范围": "$0.024-0.0102/分钟，阶梯定价",
        "年运维费用": "约10-20%产品费用",
        "服务器硬件资源": "全球云端部署，支持边缘推理"
    },
    {
        "产品名称": "IBM Watson Speech to Text",
        "成熟产品或开发": "成熟产品",
        "现有用户": "企业客户、政府、金融、医疗行业",
        "技术要点": "神经网络技术、多语言支持、客服域优化、低延迟转录",
        "功能要点": "自动转录、自定义模型、说话人分离、智能格式化",
        "是否需再订制": "支持声学特征和语言模型定制",
        "需律师参与程度": "中-高等（IBM企业级安全要求）",
        "实施周期预计": "云端部署：2-3周；本地部署：2-4个月",
        "公司规模参保人数": "IBM：约35万人",
        "技术扩展能力": "高（支持公有云、私有云、混合云）",
        "报价范围": "按使用量计费，企业版定制报价",
        "年运维费用": "约20-30%产品费用",
        "服务器硬件资源": "支持多云部署和本地部署"
    },
    {
        "产品名称": "Rev AI",
        "成熟产品或开发": "成熟产品",
        "现有用户": "媒体、教育、企业客服等行业",
        "技术要点": "机器学习算法、语言检测、情感分析、主题检测",
        "功能要点": "异步转录、流式转录、人工后处理、多格式支持",
        "是否需再订制": "定制化程度有限",
        "需律师参与程度": "低-中等（标准服务协议）",
        "实施周期预计": "API集成：3-5天；大规模部署：2-4周",
        "公司规模参保人数": "Rev公司：约1000人",
        "技术扩展能力": "中等（主要为API服务）",
        "报价范围": "$1.20/音频小时",
        "年运维费用": "约10-15%产品费用",
        "服务器硬件资源": "云端SaaS服务"
    },
    {
        "产品名称": "Deepgram",
        "成熟产品或开发": "成熟产品",
        "现有用户": "开发者、企业、通话分析等领域",
        "技术要点": "端到端深度学习、实时流式处理、高准确率、低延迟",
        "功能要点": "实时转录、批量处理、说话人识别、情感检测",
        "是否需再订制": "支持模型定制和领域适配",
        "需律师参与程度": "中等（企业服务协议）",
        "实施周期预计": "API接入：1周；定制开发：4-8周",
        "公司规模参保人数": "Deepgram：约200人",
        "技术扩展能力": "高（现代API架构）",
        "报价范围": "按使用量计费，具体价格咨询",
        "年运维费用": "约15-20%产品费用",
        "服务器硬件资源": "云端部署，支持本地部署"
    }
];

// Global state
let currentSort = { column: null, direction: 'asc' };
let filteredProducts = [...products];

// DOM elements
const navTabs = document.querySelectorAll('.nav__tab');
const sections = document.querySelectorAll('.section');
const searchInput = document.getElementById('searchInput');
const companyFilter = document.getElementById('companyFilter');
const deploymentFilter = document.getElementById('deploymentFilter');
const tableBody = document.getElementById('tableBody');
const productsGrid = document.getElementById('productsGrid');
const quickComparison = document.getElementById('quickComparison');
const productModal = document.getElementById('productModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initFilters();
    initTable();
    initQuickComparison();
    initProductCards();
    initModal();
});

// Navigation
function initNavigation() {
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetSection = tab.dataset.tab;
            
            // Update active tab
            navTabs.forEach(t => t.classList.remove('nav__tab--active'));
            tab.classList.add('nav__tab--active');
            
            // Update active section
            sections.forEach(s => s.classList.remove('section--active'));
            document.querySelector(`[data-section="${targetSection}"]`).classList.add('section--active');
        });
    });
}

// Filters and search
function initFilters() {
    // Populate company filter
    const companies = [...new Set(products.map(p => {
        const match = p['公司规模参保人数'].match(/^([^：:]+)/);
        return match ? match[1] : '';
    }))].filter(Boolean);
    
    companies.forEach(company => {
        const option = document.createElement('option');
        option.value = company;
        option.textContent = company;
        companyFilter.appendChild(option);
    });

    // Event listeners
    searchInput.addEventListener('input', filterProducts);
    companyFilter.addEventListener('change', filterProducts);
    deploymentFilter.addEventListener('change', filterProducts);
}

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const companyValue = companyFilter.value;
    const deploymentValue = deploymentFilter.value;

    filteredProducts = products.filter(product => {
        const matchesSearch = Object.values(product).some(value => 
            value.toLowerCase().includes(searchTerm)
        );
        
        const matchesCompany = !companyValue || 
            product['公司规模参保人数'].includes(companyValue);
        
        const matchesDeployment = !deploymentValue || 
            product['服务器硬件资源'].includes(deploymentValue);

        return matchesSearch && matchesCompany && matchesDeployment;
    });

    updateTable();
}

// Table functionality
function initTable() {
    // Add sort event listeners
    document.querySelectorAll('.sortable').forEach(header => {
        header.addEventListener('click', () => {
            const column = header.dataset.sort;
            sortTable(column);
        });
    });

    updateTable();
}

function sortTable(column) {
    if (currentSort.column === column) {
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
        currentSort.column = column;
        currentSort.direction = 'asc';
    }

    // Update sort indicators
    document.querySelectorAll('.sortable').forEach(header => {
        header.classList.remove('sort-asc', 'sort-desc');
        if (header.dataset.sort === column) {
            header.classList.add(`sort-${currentSort.direction}`);
        }
    });

    // Sort products
    filteredProducts.sort((a, b) => {
        const aValue = a[column] || '';
        const bValue = b[column] || '';
        
        if (currentSort.direction === 'asc') {
            return aValue.localeCompare(bValue, 'zh-CN');
        } else {
            return bValue.localeCompare(aValue, 'zh-CN');
        }
    });

    updateTable();
}

function updateTable() {
    tableBody.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${product['产品名称']}</strong></td>
            <td title="${product['现有用户']}">${truncateText(product['现有用户'], 20)}</td>
            <td title="${product['技术要点']}">${truncateText(product['技术要点'], 30)}</td>
            <td title="${product['功能要点']}">${truncateText(product['功能要点'], 30)}</td>
            <td title="${product['是否需再订制']}">${truncateText(product['是否需再订制'], 15)}</td>
            <td title="${product['实施周期预计']}">${truncateText(product['实施周期预计'], 20)}</td>
            <td title="${product['技术扩展能力']}">${truncateText(product['技术扩展能力'], 15)}</td>
            <td title="${product['报价范围']}">${truncateText(product['报价范围'], 25)}</td>
        `;
        tableBody.appendChild(row);
    });
}

function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

// Quick comparison cards
function initQuickComparison() {
    const topProducts = products.slice(0, 3); // Show top 3 products
    
    topProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'quick-card';
        card.innerHTML = `
            <div class="quick-card__title">${product['产品名称']}</div>
            <div class="quick-card__info">
                <div class="quick-card__row">
                    <span class="quick-card__label">技术特点:</span>
                    <span class="quick-card__value">${truncateText(product['技术要点'], 40)}</span>
                </div>
                <div class="quick-card__row">
                    <span class="quick-card__label">实施周期:</span>
                    <span class="quick-card__value">${product['实施周期预计']}</span>
                </div>
                <div class="quick-card__row">
                    <span class="quick-card__label">定制化:</span>
                    <span class="quick-card__value">${truncateText(product['是否需再订制'], 30)}</span>
                </div>
                <div class="quick-card__row">
                    <span class="quick-card__label">报价范围:</span>
                    <span class="quick-card__value">${truncateText(product['报价范围'], 30)}</span>
                </div>
            </div>
        `;
        quickComparison.appendChild(card);
    });
}

// Product cards
function initProductCards() {
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-card__header">
                <h3 class="product-card__title">${product['产品名称']}</h3>
                <span class="status status--success">${product['成熟产品或开发']}</span>
            </div>
            <div class="product-card__content">
                <div class="product-card__row">
                    <div class="product-card__label">现有用户</div>
                    <div class="product-card__value">${truncateText(product['现有用户'], 50)}</div>
                </div>
                <div class="product-card__row">
                    <div class="product-card__label">技术要点</div>
                    <div class="product-card__value">${truncateText(product['技术要点'], 60)}</div>
                </div>
                <div class="product-card__row">
                    <div class="product-card__label">实施周期</div>
                    <div class="product-card__value">${product['实施周期预计']}</div>
                </div>
                <div class="product-card__row">
                    <div class="product-card__label">报价范围</div>
                    <div class="product-card__value">${product['报价范围']}</div>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => showProductModal(product));
        productsGrid.appendChild(card);
    });
}

// Modal functionality
function initModal() {
    modalClose.addEventListener('click', hideModal);
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal || e.target.classList.contains('modal__backdrop')) {
            hideModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && productModal.classList.contains('modal--active')) {
            hideModal();
        }
    });
}

function showProductModal(product) {
    modalTitle.textContent = product['产品名称'];
    modalBody.innerHTML = `
        <div class="modal-content">
            ${Object.entries(product).map(([key, value]) => `
                <div class="modal-section">
                    <h4>${key}</h4>
                    <p>${value}</p>
                </div>
            `).join('')}
        </div>
    `;
    
    productModal.classList.add('modal--active');
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    productModal.classList.remove('modal--active');
    document.body.style.overflow = 'auto';
}