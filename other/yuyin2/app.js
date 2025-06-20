// 语音转文字产品市场分析仪表板
class Dashboard {
    constructor() {
        // 应用数据
        this.data = {
            "overview": {
                "total_products": 14,
                "domestic_vendors": 6,
                "international_vendors": 8,
                "cloud_services": 13,
                "hybrid_deployment": 4
            },
            "products_detail": [
                {
                    "name": "百度智能云",
                    "company": "百度",
                    "type": "云服务/混合部署",
                    "users": "企业级用户",
                    "accuracy": "98%",
                    "customization_level": 5,
                    "legal_involvement": "中等",
                    "implementation_weeks": "4-8周",
                    "company_scale": "大型",
                    "extensibility": "强",
                    "price_range": "3-10元/小时",
                    "hardware_requirement": "高配置(私有化)",
                    "languages": "中文+多语言",
                    "features": ["实时识别", "批量转写", "模型定制", "私有化部署"]
                },
                {
                    "name": "阿里云智能语音",
                    "company": "阿里巴巴",
                    "type": "云服务/混合部署",
                    "users": "企业级用户",
                    "accuracy": "95%+",
                    "customization_level": 3,
                    "legal_involvement": "中等",
                    "implementation_weeks": "4-8周",
                    "company_scale": "大型",
                    "extensibility": "强",
                    "price_range": "0.45-3元/小时",
                    "hardware_requirement": "高配置(私有化)",
                    "languages": "50+语言",
                    "features": ["实时识别", "批量转写", "SAN-M模型", "多语言"]
                },
                {
                    "name": "腾讯云语音识别",
                    "company": "腾讯",
                    "type": "云服务",
                    "users": "企业级用户",
                    "accuracy": "95%+",
                    "customization_level": 3,
                    "legal_involvement": "中等",
                    "implementation_weeks": "2-4周",
                    "company_scale": "大型",
                    "extensibility": "强",
                    "price_range": "3-5元/小时",
                    "hardware_requirement": "无",
                    "languages": "中文+多语言",
                    "features": ["实时识别", "批量转写", "情绪分析", "热词增强"]
                },
                {
                    "name": "华为云语音识别",
                    "company": "华为",
                    "type": "云服务",
                    "users": "企业级用户",
                    "accuracy": "95%+",
                    "customization_level": 4,
                    "legal_involvement": "中等",
                    "implementation_weeks": "2-4周",
                    "company_scale": "大型",
                    "extensibility": "中等",
                    "price_range": "按量计费",
                    "hardware_requirement": "无",
                    "languages": "中文+多语言",
                    "features": ["实时识别", "批量转写", "行业定制", "API集成"]
                },
                {
                    "name": "讯飞听见",
                    "company": "科大讯飞",
                    "type": "云服务/本地部署",
                    "users": "企业级用户",
                    "accuracy": "95%+",
                    "customization_level": 4,
                    "legal_involvement": "高",
                    "implementation_weeks": "4-8周",
                    "company_scale": "大型",
                    "extensibility": "中等",
                    "price_range": "按量计费",
                    "hardware_requirement": "中等配置",
                    "languages": "中文+方言",
                    "features": ["会议转写", "质检分析", "说话人分离", "行业词汇"]
                },
                {
                    "name": "Google Cloud Speech",
                    "company": "Google",
                    "type": "云服务",
                    "users": "企业级用户",
                    "accuracy": "95%+",
                    "customization_level": 3,
                    "legal_involvement": "高",
                    "implementation_weeks": "2-4周",
                    "company_scale": "大型",
                    "extensibility": "强",
                    "price_range": "0.10-0.16元/小时",
                    "hardware_requirement": "无",
                    "languages": "125+语言",
                    "features": ["实时识别", "Chirp模型", "多语言", "热词增强"]
                },
                {
                    "name": "Microsoft Azure Speech",
                    "company": "Microsoft",
                    "type": "云服务",
                    "users": "企业级用户",
                    "accuracy": "95%+",
                    "customization_level": 5,
                    "legal_involvement": "高",
                    "implementation_weeks": "2-4周",
                    "company_scale": "大型",
                    "extensibility": "强",
                    "price_range": "按量计费",
                    "hardware_requirement": "无",
                    "languages": "100+语言",
                    "features": ["实时识别", "自定义语音", "企业安全", "模型定制"]
                },
                {
                    "name": "Amazon Transcribe",
                    "company": "Amazon",
                    "type": "云服务",
                    "users": "企业级用户",
                    "accuracy": "95%+",
                    "customization_level": 3,
                    "legal_involvement": "高",
                    "implementation_weeks": "2-4周",
                    "company_scale": "大型",
                    "extensibility": "强",
                    "price_range": "按量计费",
                    "hardware_requirement": "无",
                    "languages": "多语言",
                    "features": ["实时识别", "批量转写", "AWS生态", "热词增强"]
                },
                {
                    "name": "IBM Watson Speech",
                    "company": "IBM",
                    "type": "云服务/本地部署",
                    "users": "企业级用户",
                    "accuracy": "95%+",
                    "customization_level": 4,
                    "legal_involvement": "高",
                    "implementation_weeks": "4-8周",
                    "company_scale": "大型",
                    "extensibility": "强",
                    "price_range": "按量计费",
                    "hardware_requirement": "中等配置",
                    "languages": "多语言",
                    "features": ["实时识别", "企业级API", "行业定制", "本地部署"]
                },
                {
                    "name": "Otter.ai",
                    "company": "Otter.ai",
                    "type": "云服务",
                    "users": "个人/企业用户",
                    "accuracy": "90%+",
                    "customization_level": 2,
                    "legal_involvement": "低",
                    "implementation_weeks": "1-2周",
                    "company_scale": "中型",
                    "extensibility": "中等",
                    "price_range": "200-3600元/年",
                    "hardware_requirement": "无",
                    "languages": "英文为主",
                    "features": ["实时转写", "会议记录", "协作功能", "移动应用"]
                },
                {
                    "name": "Rev.ai",
                    "company": "Rev.ai",
                    "type": "云服务",
                    "users": "企业用户",
                    "accuracy": "90%+",
                    "customization_level": 1,
                    "legal_involvement": "低",
                    "implementation_weeks": "1-2周",
                    "company_scale": "中型",
                    "extensibility": "弱",
                    "price_range": "15-120元/小时",
                    "hardware_requirement": "无",
                    "languages": "多语言",
                    "features": ["实时识别", "批量转写", "API接口", "高精度"]
                },
                {
                    "name": "Dragon Professional",
                    "company": "Nuance",
                    "type": "桌面软件",
                    "users": "专业用户",
                    "accuracy": "99%+",
                    "customization_level": 1,
                    "legal_involvement": "高",
                    "implementation_weeks": "1-2周",
                    "company_scale": "大型",
                    "extensibility": "弱",
                    "price_range": "699元(终身)",
                    "hardware_requirement": "低配置",
                    "languages": "多语言",
                    "features": ["语音输入", "命令控制", "专业词汇", "离线使用"]
                },
                {
                    "name": "Sonix",
                    "company": "Sonix",
                    "type": "云服务",
                    "users": "媒体/企业用户",
                    "accuracy": "90%+",
                    "customization_level": 4,
                    "legal_involvement": "高",
                    "implementation_weeks": "1-2周",
                    "company_scale": "中型",
                    "extensibility": "中等",
                    "price_range": "60-120元/小时",
                    "hardware_requirement": "无",
                    "languages": "40+语言",
                    "features": ["批量转写", "多媒体支持", "编辑工具", "SOC2合规"]
                },
                {
                    "name": "网易见外",
                    "company": "网易",
                    "type": "云服务",
                    "users": "个人用户",
                    "accuracy": "85%+",
                    "customization_level": 1,
                    "legal_involvement": "低",
                    "implementation_weeks": "1-2周",
                    "company_scale": "大型",
                    "extensibility": "弱",
                    "price_range": "免费(2小时/天)",
                    "hardware_requirement": "无",
                    "languages": "中文+多语言",
                    "features": ["免费使用", "视频字幕", "文档翻译", "简单易用"]
                }
            ]
        };

        this.charts = {};
        this.currentTab = 'overview';
        this.domesticVendors = ['百度', '阿里巴巴', '腾讯', '华为', '科大讯飞', '网易'];
        
        this.init();
    }

    init() {
        this.initNavigation();
        this.initOverviewTab();
        this.initProductsTab();
        this.initMarketTab();
        this.initTechnologyTab();
        this.initModal();
    }

    initNavigation() {
        const navBtns = document.querySelectorAll('.nav-btn');
        navBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetTab = e.target.getAttribute('data-tab');
                this.switchTab(targetTab);
            });
        });
    }

    switchTab(targetTab) {
        // 更新导航按钮状态
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('nav-btn--active');
        });
        document.querySelector(`[data-tab="${targetTab}"]`).classList.add('nav-btn--active');

        // 更新标签页内容
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('tab-content--active');
        });
        document.getElementById(targetTab).classList.add('tab-content--active');

        this.currentTab = targetTab;
    }

    // 概览页面初始化
    initOverviewTab() {
        // 更新指标卡片
        const overview = this.data.overview;
        document.getElementById('total-products').textContent = overview.total_products;
        document.getElementById('domestic-vendors').textContent = overview.domestic_vendors;
        document.getElementById('international-vendors').textContent = overview.international_vendors;
        document.getElementById('cloud-services').textContent = overview.cloud_services;

        // 创建图表
        this.createVendorChart();
        this.createDeploymentChart();
        this.createCustomizationChart();
    }

    createVendorChart() {
        const ctx = document.getElementById('vendor-chart').getContext('2d');
        this.charts.vendor = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['国内厂商', '国际厂商'],
                datasets: [{
                    data: [6, 8],
                    backgroundColor: ['#1FB8CD', '#FFC185'],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    }
                }
            }
        });
    }

    createDeploymentChart() {
        const ctx = document.getElementById('deployment-chart').getContext('2d');
        this.charts.deployment = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['云服务', '云服务/混合部署', '云服务/本地部署', '桌面软件'],
                datasets: [{
                    data: [10, 2, 2, 1],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }

    createCustomizationChart() {
        const ctx = document.getElementById('customization-chart').getContext('2d');
        const customizationData = this.analyzeCustomization();
        
        this.charts.customization = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['高定制化(4-5分)', '中等定制化(3分)', '低定制化(1-2分)'],
                datasets: [{
                    data: [customizationData.high, customizationData.medium, customizationData.low],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    }
                }
            }
        });
    }

    analyzeCustomization() {
        let high = 0, medium = 0, low = 0;
        this.data.products_detail.forEach(product => {
            if (product.customization_level >= 4) high++;
            else if (product.customization_level === 3) medium++;
            else low++;
        });
        return { high, medium, low };
    }

    // 产品对比页面初始化
    initProductsTab() {
        this.renderProductsTable();
        this.initProductsFilters();
    }

    renderProductsTable() {
        const tbody = document.getElementById('products-tbody');
        tbody.innerHTML = '';

        this.data.products_detail.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><strong>${product.name}</strong></td>
                <td>${product.company}</td>
                <td>${product.type}</td>
                <td>${product.accuracy}</td>
                <td>${this.renderCustomizationLevel(product.customization_level)}</td>
                <td>${product.price_range}</td>
                <td><button class="btn-details" onclick="dashboard.showProductDetails('${product.name}')">详情</button></td>
            `;
            tbody.appendChild(row);
        });

        // 添加表格排序功能
        this.initTableSort();
    }

    renderCustomizationLevel(level) {
        let html = '<div class="customization-level">';
        for (let i = 1; i <= 5; i++) {
            html += `<span class="${i <= level ? 'active' : ''}"></span>`;
        }
        html += '</div>';
        return html;
    }

    initProductsFilters() {
        const vendorFilter = document.getElementById('vendor-filter');
        vendorFilter.addEventListener('change', (e) => {
            this.filterProducts(e.target.value);
        });
    }

    filterProducts(filterType) {
        const rows = document.querySelectorAll('#products-tbody tr');
        rows.forEach(row => {
            const company = row.cells[1].textContent;
            let show = true;
            
            if (filterType === 'domestic') {
                show = this.domesticVendors.includes(company);
            } else if (filterType === 'international') {
                show = !this.domesticVendors.includes(company);
            }
            
            row.style.display = show ? '' : 'none';
        });
    }

    initTableSort() {
        const headers = document.querySelectorAll('.products-table th[data-sort]');
        headers.forEach(header => {
            header.addEventListener('click', () => {
                const sortKey = header.getAttribute('data-sort');
                this.sortTable(sortKey, header);
            });
        });
    }

    sortTable(key, header) {
        const tbody = document.getElementById('products-tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));
        
        // 确定排序方向
        const isAsc = !header.classList.contains('sort-asc');
        
        // 清除所有排序状态
        document.querySelectorAll('.products-table th').forEach(th => {
            th.classList.remove('sort-asc', 'sort-desc');
        });
        
        // 设置当前排序状态
        header.classList.add(isAsc ? 'sort-asc' : 'sort-desc');
        
        // 排序数据
        const sortedProducts = [...this.data.products_detail].sort((a, b) => {
            let aVal = a[key];
            let bVal = b[key];
            
            // 处理不同类型的数据
            if (key === 'customization_level') {
                return isAsc ? aVal - bVal : bVal - aVal;
            }
            
            if (typeof aVal === 'string') {
                return isAsc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
            }
            
            return isAsc ? aVal - bVal : bVal - aVal;
        });
        
        // 重新渲染表格
        tbody.innerHTML = '';
        sortedProducts.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><strong>${product.name}</strong></td>
                <td>${product.company}</td>
                <td>${product.type}</td>
                <td>${product.accuracy}</td>
                <td>${this.renderCustomizationLevel(product.customization_level)}</td>
                <td>${product.price_range}</td>
                <td><button class="btn-details" onclick="dashboard.showProductDetails('${product.name}')">详情</button></td>
            `;
            tbody.appendChild(row);
        });
    }

    // 市场分析页面初始化
    initMarketTab() {
        this.createPriceChart();
        this.createImplementationChart();
        this.createCompanyScaleChart();
        this.createHardwareChart();
    }

    createPriceChart() {
        const ctx = document.getElementById('price-chart').getContext('2d');
        const priceData = this.analyzePriceDistribution();
        
        this.charts.price = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(priceData),
                datasets: [{
                    data: Object.values(priceData),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C'],
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    },
                    x: {
                        ticks: {
                            maxRotation: 45
                        }
                    }
                }
            }
        });
    }

    analyzePriceDistribution() {
        const priceCategories = {
            '按量计费': 0,
            '低成本(1元以下)': 0,
            '中等成本(3-10元)': 0,
            '高成本(15元以上)': 0,
            '年费制': 0,
            '一次性购买': 0,
            '免费': 0
        };

        this.data.products_detail.forEach(product => {
            const price = product.price_range;
            if (price.includes('按量计费')) {
                priceCategories['按量计费']++;
            } else if (price.includes('0.10') || price.includes('0.45')) {
                priceCategories['低成本(1元以下)']++;
            } else if (price.includes('3-10') || price.includes('3-5')) {
                priceCategories['中等成本(3-10元)']++;
            } else if (price.includes('15-120') || price.includes('60-120')) {
                priceCategories['高成本(15元以上)']++;
            } else if (price.includes('年')) {
                priceCategories['年费制']++;
            } else if (price.includes('终身')) {
                priceCategories['一次性购买']++;
            } else if (price.includes('免费')) {
                priceCategories['免费']++;
            }
        });

        return priceCategories;
    }

    createImplementationChart() {
        const ctx = document.getElementById('implementation-chart').getContext('2d');
        const implData = this.analyzeImplementation();
        
        this.charts.implementation = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(implData),
                datasets: [{
                    data: Object.values(implData),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    }
                }
            }
        });
    }

    analyzeImplementation() {
        const implCategories = {
            '快速部署(1-2周)': 0,
            '标准部署(2-4周)': 0,
            '复杂部署(4-8周)': 0
        };

        this.data.products_detail.forEach(product => {
            const weeks = product.implementation_weeks;
            if (weeks.includes('1-2')) {
                implCategories['快速部署(1-2周)']++;
            } else if (weeks.includes('2-4')) {
                implCategories['标准部署(2-4周)']++;
            } else if (weeks.includes('4-8')) {
                implCategories['复杂部署(4-8周)']++;
            }
        });

        return implCategories;
    }

    createCompanyScaleChart() {
        const ctx = document.getElementById('company-scale-chart').getContext('2d');
        const scaleData = this.analyzeCompanyScale();
        
        this.charts.companyScale = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: Object.keys(scaleData),
                datasets: [{
                    data: Object.values(scaleData),
                    backgroundColor: ['#1FB8CD', '#FFC185'],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    }
                }
            }
        });
    }

    analyzeCompanyScale() {
        const scaleCategories = {
            '大型': 0,
            '中型': 0
        };

        this.data.products_detail.forEach(product => {
            scaleCategories[product.company_scale]++;
        });

        return scaleCategories;
    }

    createHardwareChart() {
        const ctx = document.getElementById('hardware-chart').getContext('2d');
        const hardwareData = this.analyzeHardware();
        
        this.charts.hardware = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(hardwareData),
                datasets: [{
                    data: Object.values(hardwareData),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }

    analyzeHardware() {
        const hardwareCategories = {
            '无': 0,
            '高配置(私有化)': 0,
            '中等配置': 0,
            '低配置': 0
        };

        this.data.products_detail.forEach(product => {
            hardwareCategories[product.hardware_requirement]++;
        });

        return hardwareCategories;
    }

    // 技术分析页面初始化
    initTechnologyTab() {
        this.createExtensibilityChart();
        this.createLegalChart();
        this.createLanguageChart();
    }

    createExtensibilityChart() {
        const ctx = document.getElementById('extensibility-chart').getContext('2d');
        const extData = this.analyzeExtensibility();
        
        this.charts.extensibility = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(extData),
                datasets: [{
                    data: Object.values(extData),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }

    analyzeExtensibility() {
        const extCategories = {
            '强': 0,
            '中等': 0,
            '弱': 0
        };

        this.data.products_detail.forEach(product => {
            extCategories[product.extensibility]++;
        });

        return extCategories;
    }

    createLegalChart() {
        const ctx = document.getElementById('legal-chart').getContext('2d');
        const legalData = this.analyzeLegal();
        
        this.charts.legal = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(legalData),
                datasets: [{
                    data: Object.values(legalData),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    }
                }
            }
        });
    }

    analyzeLegal() {
        const legalCategories = {
            '高': 0,
            '中等': 0,
            '低': 0
        };

        this.data.products_detail.forEach(product => {
            legalCategories[product.legal_involvement]++;
        });

        return legalCategories;
    }

    createLanguageChart() {
        const ctx = document.getElementById('language-chart').getContext('2d');
        const langData = this.analyzeLanguages();
        
        this.charts.language = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(langData),
                datasets: [{
                    data: Object.values(langData),
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'],
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }

    analyzeLanguages() {
        const langCategories = {
            '多语言(50+)': 0,
            '中文+多语言': 0,
            '英文为主': 0,
            '中文+方言': 0
        };

        this.data.products_detail.forEach(product => {
            const lang = product.languages;
            if (lang.includes('125+') || lang.includes('100+') || lang.includes('50+') || lang.includes('40+')) {
                langCategories['多语言(50+)']++;
            } else if (lang.includes('中文+多语言')) {
                langCategories['中文+多语言']++;
            } else if (lang.includes('英文为主')) {
                langCategories['英文为主']++;
            } else if (lang.includes('中文+方言')) {
                langCategories['中文+方言']++;
            } else if (lang.includes('多语言')) {
                langCategories['多语言(50+)']++;
            }
        });

        return langCategories;
    }

    // 模态框初始化
    initModal() {
        const modal = document.getElementById('product-modal');
        const closeBtn = document.querySelector('.modal__close');
        const backdrop = document.querySelector('.modal__backdrop');

        closeBtn.addEventListener('click', () => {
            this.hideModal();
        });

        backdrop.addEventListener('click', () => {
            this.hideModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                this.hideModal();
            }
        });
    }

    showProductDetails(productName) {
        const product = this.data.products_detail.find(p => p.name === productName);
        if (!product) return;

        const modal = document.getElementById('product-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');

        modalTitle.textContent = product.name;
        modalBody.innerHTML = `
            <div class="product-details">
                <div class="detail-group">
                    <div class="detail-label">公司</div>
                    <div class="detail-value">${product.company}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">类型</div>
                    <div class="detail-value">${product.type}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">用户群体</div>
                    <div class="detail-value">${product.users}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">识别准确率</div>
                    <div class="detail-value">${product.accuracy}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">定制化等级</div>
                    <div class="detail-value">${product.customization_level}/5</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">法律合规</div>
                    <div class="detail-value">${product.legal_involvement}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">实施周期</div>
                    <div class="detail-value">${product.implementation_weeks}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">公司规模</div>
                    <div class="detail-value">${product.company_scale}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">扩展能力</div>
                    <div class="detail-value">${product.extensibility}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">价格范围</div>
                    <div class="detail-value">${product.price_range}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">硬件要求</div>
                    <div class="detail-value">${product.hardware_requirement}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">语言支持</div>
                    <div class="detail-value">${product.languages}</div>
                </div>
                <div class="detail-group">
                    <div class="detail-label">功能特性</div>
                    <div class="features-list">
                        ${product.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;

        modal.classList.add('active');
    }

    hideModal() {
        const modal = document.getElementById('product-modal');
        modal.classList.remove('active');
    }
}

// 初始化仪表板
const dashboard = new Dashboard();