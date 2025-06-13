// Application Data
const appData = {
    decisionQuestions: [
        {
            id: 1,
            question: "你的预算范围是多少？",
            options: [
                { text: "200-500元", weight: { domestic: 3, industrial: 0 } },
                { text: "500-1500元", weight: { domestic: 2, industrial: 0 } },
                { text: "1500-5000元", weight: { domestic: 1, industrial: 1 } },
                { text: "5000元以上", weight: { domestic: 0, industrial: 3 } }
            ]
        },
        {
            id: 2,
            question: "你的缝纫经验如何？",
            options: [
                { text: "完全新手", weight: { domestic: 3, industrial: 0 } },
                { text: "有一些基础", weight: { domestic: 2, industrial: 1 } },
                { text: "中等水平", weight: { domestic: 1, industrial: 2 } },
                { text: "经验丰富", weight: { domestic: 0, industrial: 3 } }
            ]
        },
        {
            id: 3,
            question: "你主要想做什么项目？",
            options: [
                { text: "简单修补和基础缝纫", weight: { domestic: 3, industrial: 0 } },
                { text: "服装制作", weight: { domestic: 2, industrial: 1 } },
                { text: "家居装饰用品", weight: { domestic: 2, industrial: 1 } },
                { text: "皮革制品或厚重面料", weight: { domestic: 0, industrial: 3 } }
            ]
        },
        {
            id: 4,
            question: "你计划多久使用一次？",
            options: [
                { text: "偶尔使用", weight: { domestic: 3, industrial: 0 } },
                { text: "每周几次", weight: { domestic: 2, industrial: 1 } },
                { text: "几乎每天", weight: { domestic: 1, industrial: 2 } },
                { text: "专业或商业用途", weight: { domestic: 0, industrial: 3 } }
            ]
        },
        {
            id: 5,
            question: "你的工作空间如何？",
            options: [
                { text: "小房间或临时空间", weight: { domestic: 3, industrial: 0 } },
                { text: "客厅或多功能房间", weight: { domestic: 2, industrial: 0 } },
                { text: "独立的工作室", weight: { domestic: 1, industrial: 2 } },
                { text: "专门的缝纫间", weight: { domestic: 0, industrial: 3 } }
            ]
        }
    ],
    
    machineComparison: [
        { feature: "初始成本", industrial: "$1,000-$10,000", domestic: "$100-$3,000" },
        { feature: "速度 (针数/分钟)", industrial: "3,000-5,500", domestic: "700-1,600" },
        { feature: "重量", industrial: "28-75公斤", domestic: "5-15公斤" },
        { feature: "学习难度", industrial: "中等-困难", domestic: "容易" },
        { feature: "维护要求", industrial: "定期清洁和上油", domestic: "最少维护" },
        { feature: "适用面料", industrial: "重型面料、皮革、帆布", domestic: "轻-中型面料" },
        { feature: "功能数量", industrial: "有限(专用功能)", domestic: "多样(装饰针迹等)" },
        { feature: "耐用性", industrial: "非常高", domestic: "中等" },
        { feature: "噪音水平", industrial: "较高", domestic: "较低" },
        { feature: "占地面积", industrial: "大(需专用桌子)", domestic: "小-中等" },
        { feature: "便携性", industrial: "低", domestic: "高" },
        { feature: "针迹种类", industrial: "通常只有直缝", domestic: "20-400种针迹" }
    ],
    
    expertAdvice: {
        beginnerTips: [
            {
                title: "从家用机开始",
                content: "新手建议从质量好的家用缝纫机开始，学习成本低，功能多样化，易于掌握基础技能"
            },
            {
                title: "重视质量而非功能数量",
                content: "基础针迹的质量比花哨的装饰功能更重要，选择针迹稳定、操作简单的机器"
            },
            {
                title: "考虑二手高质量机器",
                content: "如果预算有限，可以考虑购买二手的知名品牌机器，性价比往往更高"
            },
            {
                title: "投资基础配件",
                content: "好的剪刀、尺子、拆线器等工具同样重要，不要忽视这些基础配件"
            }
        ],
        commonMistakes: [
            {
                mistake: "工业机总是比家用机好",
                reality: "工业机专门化强，但功能单一，不适合多样化的家庭项目"
            },
            {
                mistake: "贵的机器一定适合新手",
                reality: "复杂功能可能增加学习难度，简单实用的机器更适合入门"
            },
            {
                mistake: "一台机器能解决所有需求",
                reality: "随着技能提升，可能需要不同类型的机器来应对不同项目"
            },
            {
                mistake: "工业机维护很困难",
                reality: "虽然需要定期维护，但工业机结构简单，维护相对直接"
            }
        ]
    },
    
    buyingChecklist: {
        budget: [
            "确定总预算范围",
            "考虑附加成本(桌子、配件、维护)",
            "评估长期投资价值",
            "比较不同品牌价格"
        ],
        skills: [
            "评估当前缝纫经验",
            "考虑学习新技能的时间",
            "确定主要使用场景",
            "考虑未来技能发展方向"
        ],
        space: [
            "测量可用空间尺寸",
            "考虑噪音对家人的影响",
            "规划配件和材料存储",
            "考虑照明和通风条件"
        ],
        features: [
            "列出必需的基本功能",
            "区分重要和可选功能",
            "考虑未来需求变化",
            "研究不同品牌特色"
        ]
    },
    
    recommendedMachines: {
        beginner: [
            {
                name: "Brother XR3774",
                price: "约 ¥800-1200",
                features: ["37种针迹", "自动穿线", "LED灯", "包装配件丰富"],
                bestFor: "完全新手"
            },
            {
                name: "Singer Heavy Duty 4423",
                price: "约 ¥1000-1500",
                features: ["重型金属机架", "23种针迹", "高速缝纫", "适合厚面料"],
                bestFor: "需要处理厚面料的新手"
            }
        ],
        intermediate: [
            {
                name: "Brother CS7000X",
                price: "约 ¥1500-2000",
                features: ["70种针迹", "7种扣眼", "宽台面", "电脑化操作"],
                bestFor: "有基础想升级的用户"
            },
            {
                name: "Janome 2212",
                price: "约 ¥1200-1800",
                features: ["全金属构造", "可调节针迹", "操作简单", "耐用性强"],
                bestFor: "重视质量的中级用户"
            }
        ],
        industrial: [
            {
                name: "JUKI DDL-8700",
                price: "约 ¥4000-6000",
                features: ["直线缝纫专用", "5500针/分钟", "伺服电机", "静音设计"],
                bestFor: "专业需求或频繁使用"
            },
            {
                name: "二手工业直缝机",
                price: "约 ¥2000-4000",
                features: ["性价比高", "结构简单", "维修容易", "适合入门工业机"],
                bestFor: "预算有限但需要工业机性能"
            }
        ]
    }
};

// Application State
let currentQuestionIndex = 0;
let answers = [];
let scores = { domestic: 0, industrial: 0 };

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadQuestion();
    populateComparisonTable();
    initializeCostCalculator();
    initializeExpertAdvice();
    initializeBuyingChecklist();
    initializeRecommendedMachines();
    initializeTabNavigation();
});

function initializeApp() {
    // Add smooth scrolling to HTML
    document.documentElement.classList.add('smooth-scroll');
    
    // Initialize total questions count
    document.getElementById('total-questions').textContent = appData.decisionQuestions.length;
}

// Decision Tool Functions
function loadQuestion() {
    const question = appData.decisionQuestions[currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const currentQuestionSpan = document.getElementById('current-question');
    const progressFill = document.getElementById('progress-fill');
    
    // Update question text and progress
    questionText.textContent = question.question;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    
    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / appData.decisionQuestions.length) * 100;
    progressFill.style.width = progress + '%';
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create option buttons
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.onclick = () => selectOption(index);
        
        // Restore previous selection if exists
        if (answers[currentQuestionIndex] === index) {
            button.classList.add('selected');
        }
        
        optionsContainer.appendChild(button);
    });
    
    // Update navigation buttons
    updateNavigationButtons();
}

function selectOption(optionIndex) {
    const optionButtons = document.querySelectorAll('.option-btn');
    
    // Remove previous selection
    optionButtons.forEach(btn => btn.classList.remove('selected'));
    
    // Add selection to clicked option
    optionButtons[optionIndex].classList.add('selected');
    
    // Store answer
    answers[currentQuestionIndex] = optionIndex;
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    if (answers[currentQuestionIndex] === undefined) return;
    
    // Calculate scores for new answers only
    if (currentQuestionIndex < scores.calculatedUpTo || scores.calculatedUpTo === undefined) {
        const question = appData.decisionQuestions[currentQuestionIndex];
        const selectedOption = question.options[answers[currentQuestionIndex]];
        scores.domestic += selectedOption.weight.domestic;
        scores.industrial += selectedOption.weight.industrial;
        scores.calculatedUpTo = currentQuestionIndex + 1;
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < appData.decisionQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = answers[currentQuestionIndex] === undefined;
}

function showResults() {
    const questionCard = document.getElementById('question-card');
    const resultCard = document.getElementById('result-card');
    const resultTitle = document.getElementById('result-title');
    const resultDescription = document.getElementById('result-description');
    
    questionCard.classList.add('hidden');
    resultCard.classList.remove('hidden');
    
    // Determine recommendation
    let recommendation, description;
    
    if (scores.domestic > scores.industrial) {
        recommendation = "推荐选择家用缝纫机";
        description = `根据您的回答，家用缝纫机更适合您的需求。它们学习成本低、功能多样、维护简单，非常适合初学者和家庭使用。建议选择知名品牌的中档机型，既能保证质量又有良好的性价比。`;
    } else if (scores.industrial > scores.domestic) {
        recommendation = "推荐考虑工业缝纫机";
        description = `基于您的需求分析，工业缝纫机可能更适合您。它们具有更高的耐用性和工作效率，适合频繁使用或专业项目。建议从入门级工业机开始，或考虑质量好的二手机型。`;
    } else {
        recommendation = "建议深入了解两种机型";
        description = `您的需求在两种机型之间较为平衡。建议先体验不同类型的机器，了解实际操作感受，再根据具体项目需求和预算做出选择。也可以考虑先购买家用机入门，后续根据需要升级。`;
    }
    
    resultTitle.textContent = recommendation;
    resultDescription.textContent = description;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    answers = [];
    scores = { domestic: 0, industrial: 0, calculatedUpTo: 0 };
    
    const questionCard = document.getElementById('question-card');
    const resultCard = document.getElementById('result-card');
    
    resultCard.classList.add('hidden');
    questionCard.classList.remove('hidden');
    
    loadQuestion();
}

// Comparison Table
function populateComparisonTable() {
    const tbody = document.getElementById('comparison-table-body');
    
    appData.machineComparison.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="feature-name">${item.feature}</td>
            <td class="feature-value">${item.industrial}</td>
            <td class="feature-value">${item.domestic}</td>
        `;
        tbody.appendChild(row);
    });
}

// Cost Calculator
function initializeCostCalculator() {
    const budgetSlider = document.getElementById('budget-slider');
    const budgetValue = document.getElementById('budget-value');
    const usageFrequency = document.getElementById('usage-frequency');
    
    if (budgetSlider && usageFrequency) {
        budgetSlider.addEventListener('input', updateCostCalculation);
        usageFrequency.addEventListener('change', updateCostCalculation);
        updateCostCalculation();
    }
}

function updateCostCalculation() {
    const budgetSlider = document.getElementById('budget-slider');
    const usageFrequency = document.getElementById('usage-frequency');
    
    if (!budgetSlider || !usageFrequency) return;
    
    const budget = parseInt(budgetSlider.value);
    const frequency = usageFrequency.value;
    
    // Update budget display
    document.getElementById('budget-value').textContent = budget;
    
    // Calculate costs based on usage frequency
    const maintenanceMultiplier = {
        occasional: 0.5,
        weekly: 1,
        daily: 2,
        professional: 3
    };
    
    const multiplier = maintenanceMultiplier[frequency];
    
    // Domestic machine costs
    let domesticInitial = budget <= 1500 ? budget * 0.8 : Math.min(budget * 0.6, 3000);
    let domesticMaintenance = 300 * multiplier;
    let domesticTotal = domesticInitial + domesticMaintenance;
    
    // Industrial machine costs  
    let industrialInitial = Math.max(budget * 1.5, 4000);
    let industrialMaintenance = 1500 * multiplier;
    let industrialTotal = industrialInitial + industrialMaintenance;
    
    // Update display
    document.getElementById('domestic-initial').textContent = `¥${Math.round(domesticInitial)}`;
    document.getElementById('domestic-maintenance').textContent = `¥${Math.round(domesticMaintenance)}`;
    document.getElementById('domestic-total').textContent = `¥${Math.round(domesticTotal)}`;
    
    document.getElementById('industrial-initial').textContent = `¥${Math.round(industrialInitial)}`;
    document.getElementById('industrial-maintenance').textContent = `¥${Math.round(industrialMaintenance)}`;
    document.getElementById('industrial-total').textContent = `¥${Math.round(industrialTotal)}`;
}

// Expert Advice
function initializeExpertAdvice() {
    const beginnerTipsContainer = document.getElementById('beginner-tips');
    const commonMistakesContainer = document.getElementById('common-mistakes');
    
    if (beginnerTipsContainer) {
        // Populate beginner tips
        appData.expertAdvice.beginnerTips.forEach((tip, index) => {
            const accordionItem = createAccordionItem(`tip-${index}`, tip.title, tip.content);
            beginnerTipsContainer.appendChild(accordionItem);
        });
    }
    
    if (commonMistakesContainer) {
        // Populate common mistakes
        appData.expertAdvice.commonMistakes.forEach((mistake, index) => {
            const content = `<strong>误区：</strong>${mistake.mistake}<br><strong>实际：</strong>${mistake.reality}`;
            const accordionItem = createAccordionItem(`mistake-${index}`, `误区 ${index + 1}`, content);
            commonMistakesContainer.appendChild(accordionItem);
        });
    }
}

function createAccordionItem(id, title, content) {
    const item = document.createElement('div');
    item.className = 'accordion-item';
    item.innerHTML = `
        <div class="accordion-header" onclick="toggleAccordion('${id}')">
            <span>${title}</span>
            <i class="fas fa-chevron-down accordion-icon"></i>
        </div>
        <div class="accordion-content" id="${id}">
            <p>${content}</p>
        </div>
    `;
    return item;
}

function toggleAccordion(id) {
    const content = document.getElementById(id);
    const header = content.previousElementSibling;
    
    // Close all other accordions in the same container
    const container = content.closest('.accordion');
    const allContents = container.querySelectorAll('.accordion-content');
    const allHeaders = container.querySelectorAll('.accordion-header');
    
    allContents.forEach(item => {
        if (item.id !== id) {
            item.classList.remove('active');
        }
    });
    
    allHeaders.forEach(item => {
        if (item !== header) {
            item.classList.remove('active');
        }
    });
    
    // Toggle current accordion
    content.classList.toggle('active');
    header.classList.toggle('active');
}

// Buying Checklist
function initializeBuyingChecklist() {
    populateChecklist('budget-checklist', appData.buyingChecklist.budget);
    populateChecklist('skills-checklist', appData.buyingChecklist.skills);
    populateChecklist('space-checklist', appData.buyingChecklist.space);
    populateChecklist('features-checklist', appData.buyingChecklist.features);
}

function populateChecklist(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    items.forEach((item, index) => {
        const checklistItem = document.createElement('div');
        checklistItem.className = 'checklist-item';
        checklistItem.innerHTML = `
            <input type="checkbox" id="${containerId}-${index}" onchange="toggleChecklistItem(this)">
            <label for="${containerId}-${index}">${item}</label>
        `;
        container.appendChild(checklistItem);
    });
}

function toggleChecklistItem(checkbox) {
    const item = checkbox.parentElement;
    if (checkbox.checked) {
        item.classList.add('checked');
    } else {
        item.classList.remove('checked');
    }
}

function downloadChecklist() {
    // Create checklist text
    let checklistText = "缝纫机购买清单\n\n";
    
    const categories = [
        { id: 'budget-checklist', title: '预算考虑' },
        { id: 'skills-checklist', title: '技能评估' },
        { id: 'space-checklist', title: '空间要求' },
        { id: 'features-checklist', title: '功能需求' }
    ];
    
    categories.forEach(category => {
        checklistText += `${category.title}:\n`;
        const container = document.getElementById(category.id);
        if (container) {
            const items = container.querySelectorAll('.checklist-item');
            
            items.forEach(item => {
                const checkbox = item.querySelector('input[type="checkbox"]');
                const label = item.querySelector('label');
                const status = checkbox.checked ? '✓' : '○';
                checklistText += `${status} ${label.textContent}\n`;
            });
        }
        checklistText += '\n';
    });
    
    // Create and download file
    const blob = new Blob([checklistText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '缝纫机购买清单.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function resetChecklist() {
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const items = document.querySelectorAll('.checklist-item');
    
    checkboxes.forEach(checkbox => checkbox.checked = false);
    items.forEach(item => item.classList.remove('checked'));
}

// Recommended Machines
function initializeRecommendedMachines() {
    showCategory('beginner');
}

function initializeTabNavigation() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active tab
            tabBtns.forEach(tab => tab.classList.remove('active'));
            this.classList.add('active');
            
            // Show machines for category
            showCategory(category);
        });
    });
}

function showCategory(category) {
    const machinesGrid = document.getElementById('machines-grid');
    if (!machinesGrid) return;
    
    machinesGrid.innerHTML = '';
    
    const machines = appData.recommendedMachines[category];
    if (!machines) return;
    
    machines.forEach(machine => {
        const machineCard = document.createElement('div');
        machineCard.className = 'machine-card';
        
        const featuresHtml = machine.features.map(feature => `<li>${feature}</li>`).join('');
        
        machineCard.innerHTML = `
            <h4>${machine.name}</h4>
            <div class="machine-price">${machine.price}</div>
            <div class="machine-features">
                <ul>${featuresHtml}</ul>
            </div>
            <div class="machine-best-for">适合：${machine.bestFor}</div>
        `;
        
        machinesGrid.appendChild(machineCard);
    });
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Global event handlers (for functions called from HTML onclick)
window.selectOption = selectOption;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.restartQuiz = restartQuiz;
window.scrollToSection = scrollToSection;
window.toggleAccordion = toggleAccordion;
window.toggleChecklistItem = toggleChecklistItem;
window.downloadChecklist = downloadChecklist;
window.resetChecklist = resetChecklist;
window.showCategory = showCategory;