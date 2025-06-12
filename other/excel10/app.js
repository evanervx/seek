// Excel函数学习平台 - JavaScript代码

// 题目数据
const problemsData = {
  "problems": [
    {
      "id": 1,
      "title": "理解单元格引用",
      "subtitle": "Understanding Cell References",
      "topic": "相对引用、绝对引用和混合引用",
      "question": "在B2单元格中有一个公式 =A1*10%。如果将此公式向下复制到B3单元格，B3中的公式会变成什么？如果希望在复制公式时，对A1单元格的引用保持不变（例如A1是固定的税率），应如何修改B2中的原始公式？",
      "answer": "复制到B3后，公式会变成 =A2*10%。要保持对A1的引用不变，应使用绝对引用：=$A$1*10%。快捷键：F4。",
      "key_concepts": ["相对引用", "绝对引用", "混合引用", "F4快捷键"],
      "examples": [
        {"formula": "=A1*10%", "copy_result": "=A2*10%", "type": "相对引用"},
        {"formula": "=$A$1*10%", "copy_result": "=$A$1*10%", "type": "绝对引用"},
        {"formula": "=$A1*10%", "copy_result": "=$A2*10%", "type": "混合引用（列绝对）"},
        {"formula": "=A$1*10%", "copy_result": "=B$1*10%", "type": "混合引用（行绝对）"}
      ]
    },
    {
      "id": 2,
      "title": "使用IF函数进行基本条件判断",
      "subtitle": "Basic Conditional Logic with IF",
      "topic": "IF函数逻辑判断",
      "question": "假设某公司规定，员工月度销售额（在C5单元格）超过50000元，则绩效为达标，否则为未达标。请在D5单元格写出IF公式来判断C5单元格的销售额是否达标。",
      "answer": "=IF(C5>50000, \"达标\", \"未达标\")",
      "key_concepts": ["IF函数语法", "逻辑测试", "条件判断"],
      "examples": [
        {"sales": 60000, "result": "达标"},
        {"sales": 45000, "result": "未达标"},
        {"sales": 50000, "result": "未达标"},
        {"sales": 55000, "result": "达标"}
      ]
    },
    {
      "id": 3,
      "title": "使用SUMIF函数按单条件求和",
      "subtitle": "Single Condition Summation",
      "topic": "单条件求和",
      "question": "假设一个费用记录表中，A列是费用类型（如餐饮费、交通费），B列是金额。现在需要计算所有交通费的总金额。请写出SUMIF公式。",
      "answer": "=SUMIF(A:A, \"交通费\", B:B)",
      "key_concepts": ["SUMIF语法", "条件求和", "范围选择"],
      "sample_data": [
        {"type": "餐饮费", "amount": 200},
        {"type": "交通费", "amount": 150},
        {"type": "办公费", "amount": 300},
        {"type": "交通费", "amount": 180},
        {"type": "餐饮费", "amount": 120},
        {"type": "交通费", "amount": 90}
      ]
    },
    {
      "id": 4,
      "title": "使用VLOOKUP进行精确查找",
      "subtitle": "Exact Match Lookup",
      "topic": "垂直查找函数",
      "question": "假设有一个产品列表，A列是产品ID，B列是产品名称。现在你知道一个产品ID是P1003（此ID在C1单元格中），想在D1单元格查出对应的产品名称。请写出VLOOKUP公式，确保进行精确匹配。",
      "answer": "=VLOOKUP(C1, A:B, 2, FALSE)",
      "key_concepts": ["VLOOKUP语法", "精确匹配", "列索引"],
      "sample_data": [
        {"id": "P1001", "name": "笔记本电脑"},
        {"id": "P1002", "name": "台式机"},
        {"id": "P1003", "name": "平板电脑"},
        {"id": "P1004", "name": "智能手机"},
        {"id": "P1005", "name": "显示器"}
      ]
    },
    {
      "id": 5,
      "title": "使用TEXT函数格式化数字为文本",
      "subtitle": "Number Formatting as Text",
      "topic": "数字格式化",
      "question": "假设A1单元格有一个数字 123。你希望在B1单元格将其显示为固定4位数的文本，不足的前面补零，即0123。请写出TEXT公式。",
      "answer": "=TEXT(A1, \"0000\")",
      "key_concepts": ["TEXT函数", "数字格式", "占位符"],
      "examples": [
        {"number": 123, "format": "0000", "result": "0123"},
        {"number": 5, "format": "0000", "result": "0005"},
        {"number": 1234, "format": "0000", "result": "1234"},
        {"number": 67, "format": "000", "result": "067"}
      ]
    },
    {
      "id": 6,
      "title": "使用SUBSTITUTE函数替换文本",
      "subtitle": "Text Replacement",
      "topic": "文本替换",
      "question": "A1单元格的文本是Account-123-ABC。你希望将其中的所有连字符替换为空格，得到Account 123 ABC。请写出SUBSTITUTE公式。",
      "answer": "=SUBSTITUTE(A1, \"-\", \" \")",
      "key_concepts": ["SUBSTITUTE函数", "文本替换", "字符串处理"],
      "examples": [
        {"text": "Account-123-ABC", "old": "-", "new": " ", "result": "Account 123 ABC"},
        {"text": "Hello*World*Test", "old": "*", "new": "_", "result": "Hello_World_Test"},
        {"text": "2023/12/25", "old": "/", "new": "-", "result": "2023-12-25"}
      ]
    },
    {
      "id": 7,
      "title": "使用&运算符连接文本",
      "subtitle": "Text Concatenation",
      "topic": "文本连接",
      "question": "A1单元格内容为订单号:，B1单元格内容为2024001。你希望在C1单元格将它们合并显示为订单号:2024001。请写出公式。",
      "answer": "=A1&B1",
      "key_concepts": ["文本连接", "&运算符", "字符串合并"],
      "examples": [
        {"text1": "订单号:", "text2": "2024001", "result": "订单号:2024001"},
        {"text1": "客户: ", "text2": "张三", "result": "客户: 张三"},
        {"text1": "产品", "text2": "型号A", "separator": "-", "result": "产品-型号A"}
      ]
    },
    {
      "id": 8,
      "title": "使用IFERROR处理潜在错误",
      "subtitle": "Error Handling",
      "topic": "错误处理",
      "question": "假设你在C1单元格使用VLOOKUP公式查找数据。如果A1的值在Sheet2中找不到，C1会显示#N/A。如何修改公式，使得在找不到数据时，C1显示文本未找到，而不是#N/A？",
      "answer": "=IFERROR(VLOOKUP(A1, Sheet2!A:B, 2, FALSE), \"未找到\")",
      "key_concepts": ["IFERROR函数", "错误处理", "用户友好提示"],
      "examples": [
        {"lookup_value": "P1003", "found": true, "result": "平板电脑"},
        {"lookup_value": "P9999", "found": false, "result": "未找到"},
        {"lookup_value": "P1001", "found": true, "result": "笔记本电脑"}
      ]
    },
    {
      "id": 9,
      "title": "初步了解SUMIFS进行多条件求和",
      "subtitle": "Multiple Criteria Summation",
      "topic": "多条件求和",
      "question": "假设费用记录表中，A列是部门，B列是费用类型，C列是金额。现在需要计算销售部发生的差旅费的总金额。请写出SUMIFS公式。",
      "answer": "=SUMIFS(C:C, A:A, \"销售部\", B:B, \"差旅费\")",
      "key_concepts": ["SUMIFS函数", "多条件求和", "AND逻辑"],
      "sample_data": [
        {"dept": "销售部", "type": "差旅费", "amount": 1200},
        {"dept": "市场部", "type": "差旅费", "amount": 800},
        {"dept": "销售部", "type": "办公费", "amount": 500},
        {"dept": "销售部", "type": "差旅费", "amount": 900},
        {"dept": "财务部", "type": "差旅费", "amount": 600},
        {"dept": "销售部", "type": "餐饮费", "amount": 300}
      ]
    },
    {
      "id": 10,
      "title": "区分SEARCH和FIND函数",
      "subtitle": "Text Search Functions Comparison",
      "topic": "文本查找函数对比",
      "question": "SEARCH函数和FIND函数都用于查找文本内子字符串。它们在查找时，对字母的大小写是否敏感，以及是否支持通配符方面，有何主要区别？",
      "answer": "大小写敏感性: FIND函数区分大小写，SEARCH函数不区分大小写。通配符支持: FIND函数不支持通配符，SEARCH函数支持通配符 (如星号 * 和问号 ?)。",
      "key_concepts": ["SEARCH函数", "FIND函数", "大小写敏感", "通配符支持"],
      "comparison": [
        {"function": "FIND", "case_sensitive": true, "wildcards": false},
        {"function": "SEARCH", "case_sensitive": false, "wildcards": true}
      ],
      "examples": [
        {"text": "Apple", "search": "a", "find_result": "错误", "search_result": "1"},
        {"text": "Apple", "search": "A", "find_result": "1", "search_result": "1"},
        {"text": "wildwood", "search": "w*d", "find_result": "错误", "search_result": "1"},
        {"text": "consulting fee", "search": "CONSULTING", "find_result": "错误", "search_result": "1"}
      ]
    }
  ]
};

// 全局状态
let currentProblemId = 1;
let completedProblems = new Set();
let excelData = {};
let selectedCell = null;

// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderProblemsGrid();
    setupEventListeners();
    updateProgress();
}

// 渲染题目网格
function renderProblemsGrid() {
    const grid = document.querySelector('.problems-grid');
    if (!grid) return;

    grid.innerHTML = '';
    
    problemsData.problems.forEach(problem => {
        const card = createProblemCard(problem);
        grid.appendChild(card);
    });
}

// 创建题目卡片
function createProblemCard(problem) {
    const card = document.createElement('div');
    card.className = `problem-card ${completedProblems.has(problem.id) ? 'completed' : ''}`;
    card.onclick = () => showProblem(problem.id);
    
    card.innerHTML = `
        <div class="card-header">
            <div class="card-number">${problem.id}</div>
            <div class="completion-status ${completedProblems.has(problem.id) ? 'completed' : ''}">
                ${completedProblems.has(problem.id) ? '✓' : '○'}
            </div>
        </div>
        <h3 class="card-title">${problem.title}</h3>
        <p class="card-subtitle">${problem.subtitle}</p>
        <div class="card-topic">${problem.topic}</div>
    `;
    
    return card;
}

// 设置事件监听器
function setupEventListeners() {
    // 返回按钮
    document.getElementById('backBtn').onclick = showHome;
    
    // 导航按钮
    document.getElementById('prevBtn').onclick = () => navigateProblem(-1);
    document.getElementById('nextBtn').onclick = () => navigateProblem(1);
    
    // 公式输入
    document.getElementById('formulaInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            executeFormula();
        }
    });
}

// 显示主页
function showHome() {
    document.getElementById('homePage').classList.add('active');
    document.getElementById('problemPage').classList.remove('active');
    renderProblemsGrid(); // 重新渲染以更新完成状态
}

// 显示题目详情
function showProblem(problemId) {
    currentProblemId = problemId;
    const problem = problemsData.problems.find(p => p.id === problemId);
    
    if (!problem) return;
    
    // 切换页面
    document.getElementById('homePage').classList.remove('active');
    document.getElementById('problemPage').classList.add('active');
    
    // 填充题目信息
    document.getElementById('problemTitle').textContent = problem.title;
    document.getElementById('problemSubtitle').textContent = problem.subtitle;
    document.getElementById('problemTopic').textContent = problem.topic;
    document.getElementById('problemQuestion').textContent = problem.question;
    document.getElementById('problemAnswer').textContent = problem.answer;
    
    // 渲染关键概念
    renderConcepts(problem.key_concepts);
    
    // 渲染示例内容
    renderExamples(problem);
    
    // 初始化Excel模拟器
    initializeExcelSimulator(problem);
    
    // 渲染函数演示
    renderFunctionDemo(problem);
    
    // 更新导航按钮状态
    updateNavigationButtons();
}

// 渲染关键概念
function renderConcepts(concepts) {
    const container = document.getElementById('conceptsList');
    container.innerHTML = '';
    
    concepts.forEach(concept => {
        const tag = document.createElement('span');
        tag.className = 'concept-tag';
        tag.textContent = concept;
        container.appendChild(tag);
    });
}

// 渲染示例内容
function renderExamples(problem) {
    const card = document.getElementById('examplesCard');
    const content = document.getElementById('examplesContent');
    
    if (problem.examples || problem.sample_data) {
        card.style.display = 'block';
        content.innerHTML = '';
        
        if (problem.examples) {
            content.appendChild(createExamplesTable(problem.examples));
        }
        
        if (problem.sample_data) {
            content.appendChild(createSampleDataTable(problem.sample_data));
        }
        
        if (problem.comparison) {
            content.appendChild(createComparisonTable(problem.comparison));
        }
    } else {
        card.style.display = 'none';
    }
}

// 创建示例表格
function createExamplesTable(examples) {
    const table = document.createElement('table');
    table.className = 'examples-table';
    
    const headers = Object.keys(examples[0]);
    const headerRow = table.insertRow();
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    
    examples.forEach(example => {
        const row = table.insertRow();
        headers.forEach(header => {
            const cell = row.insertCell();
            cell.textContent = example[header];
        });
    });
    
    return table;
}

// 创建示例数据表格
function createSampleDataTable(sampleData) {
    const table = document.createElement('table');
    table.className = 'examples-table';
    
    const headers = Object.keys(sampleData[0]);
    const headerRow = table.insertRow();
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    
    sampleData.forEach(data => {
        const row = table.insertRow();
        headers.forEach(header => {
            const cell = row.insertCell();
            cell.textContent = data[header];
        });
    });
    
    return table;
}

// 创建比较表格
function createComparisonTable(comparison) {
    const table = document.createElement('table');
    table.className = 'examples-table';
    
    const headers = Object.keys(comparison[0]);
    const headerRow = table.insertRow();
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    
    comparison.forEach(item => {
        const row = table.insertRow();
        headers.forEach(header => {
            const cell = row.insertCell();
            cell.textContent = item[header];
        });
    });
    
    return table;
}

// 初始化Excel模拟器
function initializeExcelSimulator(problem) {
    const grid = document.getElementById('excelGrid');
    grid.innerHTML = '';
    excelData = {};
    selectedCell = null;
    
    // 创建表格头部
    for (let col = 0; col <= 5; col++) {
        const cell = document.createElement('div');
        cell.className = 'excel-cell header';
        if (col === 0) {
            cell.textContent = '';
        } else {
            cell.textContent = String.fromCharCode(64 + col); // A, B, C, D, E
        }
        grid.appendChild(cell);
    }
    
    // 创建数据行
    for (let row = 1; row <= 8; row++) {
        // 行号
        const rowHeader = document.createElement('div');
        rowHeader.className = 'excel-cell header';
        rowHeader.textContent = row;
        grid.appendChild(rowHeader);
        
        // 数据单元格
        for (let col = 1; col <= 5; col++) {
            const cell = document.createElement('div');
            cell.className = 'excel-cell';
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.onclick = () => selectCell(row, col);
            
            const input = document.createElement('input');
            input.type = 'text';
            input.addEventListener('input', (e) => updateCellValue(row, col, e.target.value));
            cell.appendChild(input);
            
            grid.appendChild(cell);
        }
    }
    
    // 预填充示例数据
    if (problem.sample_data) {
        fillSampleData(problem.sample_data);
    } else if (problem.id === 2) {
        // IF函数示例：在C5填入销售额
        setCellValue(5, 3, '60000');
    } else if (problem.id === 4) {
        // VLOOKUP示例：填入产品ID
        setCellValue(1, 3, 'P1003');
    } else if (problem.id === 5) {
        // TEXT函数示例：在A1填入数字
        setCellValue(1, 1, '123');
    } else if (problem.id === 6) {
        // SUBSTITUTE函数示例
        setCellValue(1, 1, 'Account-123-ABC');
    } else if (problem.id === 7) {
        // 文本连接示例
        setCellValue(1, 1, '订单号:');
        setCellValue(1, 2, '2024001');
    }
}

// 填充示例数据
function fillSampleData(sampleData) {
    if (sampleData.length === 0) return;
    
    const headers = Object.keys(sampleData[0]);
    
    // 填入表头
    headers.forEach((header, colIndex) => {
        setCellValue(1, colIndex + 1, header);
    });
    
    // 填入数据
    sampleData.forEach((item, rowIndex) => {
        headers.forEach((header, colIndex) => {
            setCellValue(rowIndex + 2, colIndex + 1, item[header]);
        });
    });
}

// 选择单元格
function selectCell(row, col) {
    // 清除之前的选择
    document.querySelectorAll('.excel-cell.selected').forEach(cell => {
        cell.classList.remove('selected');
    });
    
    // 选择新单元格
    const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    if (cell) {
        cell.classList.add('selected');
        selectedCell = { row, col };
        
        // 更新公式栏
        const cellKey = `${String.fromCharCode(64 + col)}${row}`;
        const formulaInput = document.getElementById('formulaInput');
        formulaInput.value = excelData[cellKey] || '';
    }
}

// 设置单元格值
function setCellValue(row, col, value) {
    const cellKey = `${String.fromCharCode(64 + col)}${row}`;
    excelData[cellKey] = value;
    
    const cell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    if (cell) {
        const input = cell.querySelector('input');
        if (input) {
            input.value = value;
        }
    }
}

// 更新单元格值
function updateCellValue(row, col, value) {
    const cellKey = `${String.fromCharCode(64 + col)}${row}`;
    excelData[cellKey] = value;
}

// 执行公式
function executeFormula() {
    const formulaInput = document.getElementById('formulaInput');
    const formula = formulaInput.value.trim();
    const resultDisplay = document.getElementById('resultDisplay');
    
    if (!formula) {
        resultDisplay.textContent = '请输入公式';
        resultDisplay.className = 'result-display';
        return;
    }
    
    try {
        const result = evaluateFormula(formula);
        const problem = problemsData.problems.find(p => p.id === currentProblemId);
        
        // 检查答案是否正确
        if (isCorrectAnswer(formula, problem)) {
            resultDisplay.textContent = `结果: ${result} ✓ 正确！`;
            resultDisplay.className = 'result-display success';
            markProblemCompleted(currentProblemId);
            showSuccessToast();
        } else {
            resultDisplay.textContent = `结果: ${result}`;
            resultDisplay.className = 'result-display';
        }
        
        // 如果选中了单元格，将结果填入
        if (selectedCell) {
            setCellValue(selectedCell.row, selectedCell.col, result);
        }
        
    } catch (error) {
        resultDisplay.textContent = `错误: ${error.message}`;
        resultDisplay.className = 'result-display error';
    }
}

// 评估公式（简化的Excel公式解析器）
function evaluateFormula(formula) {
    // 移除开头的等号
    if (formula.startsWith('=')) {
        formula = formula.substring(1);
    }
    
    // 替换单元格引用
    formula = formula.replace(/([A-Z]+)(\d+)/g, (match, col, row) => {
        const cellKey = col + row;
        const value = excelData[cellKey];
        return value ? (isNaN(value) ? `"${value}"` : value) : '0';
    });
    
    // 处理常见函数
    formula = formula.replace(/IF\s*\(\s*([^,]+)\s*,\s*([^,]+)\s*,\s*([^)]+)\s*\)/gi, (match, condition, trueVal, falseVal) => {
        try {
            const conditionResult = eval(condition.replace(/"/g, '"'));
            return conditionResult ? trueVal.replace(/"/g, '') : falseVal.replace(/"/g, '');
        } catch (e) {
            throw new Error('IF函数语法错误');
        }
    });
    
    formula = formula.replace(/SUMIF\s*\(\s*([^,]+)\s*,\s*([^,]+)\s*,\s*([^)]+)\s*\)/gi, (match, range, criteria, sumRange) => {
        return calculateSumif(range, criteria, sumRange);
    });
    
    formula = formula.replace(/VLOOKUP\s*\(\s*([^,]+)\s*,\s*([^,]+)\s*,\s*(\d+)\s*,\s*(FALSE|TRUE|0|1)\s*\)/gi, (match, lookupValue, tableArray, colIndex, exactMatch) => {
        return calculateVlookup(lookupValue, tableArray, parseInt(colIndex), exactMatch);
    });
    
    formula = formula.replace(/TEXT\s*\(\s*([^,]+)\s*,\s*([^)]+)\s*\)/gi, (match, value, format) => {
        return formatText(value, format);
    });
    
    formula = formula.replace(/SUBSTITUTE\s*\(\s*([^,]+)\s*,\s*([^,]+)\s*,\s*([^)]+)\s*\)/gi, (match, text, oldText, newText) => {
        const textValue = text.replace(/"/g, '');
        const oldValue = oldText.replace(/"/g, '');
        const newValue = newText.replace(/"/g, '');
        return textValue.replace(new RegExp(oldValue, 'g'), newValue);
    });
    
    formula = formula.replace(/IFERROR\s*\(\s*([^,]+)\s*,\s*([^)]+)\s*\)/gi, (match, formula, errorValue) => {
        try {
            return eval(formula);
        } catch (e) {
            return errorValue.replace(/"/g, '');
        }
    });
    
    // 处理文本连接
    formula = formula.replace(/&/g, '+');
    
    // 尝试执行公式
    try {
        const result = eval(formula);
        return result;
    } catch (error) {
        throw new Error('公式语法错误');
    }
}

// 计算SUMIF
function calculateSumif(range, criteria, sumRange) {
    // 简化实现：假设是对示例数据进行计算
    const problem = problemsData.problems.find(p => p.id === currentProblemId);
    if (problem && problem.sample_data) {
        let sum = 0;
        const criteriaValue = criteria.replace(/"/g, '');
        
        if (problem.id === 3) { // 交通费求和
            problem.sample_data.forEach(item => {
                if (item.type === criteriaValue) {
                    sum += item.amount;
                }
            });
        }
        return sum;
    }
    return 0;
}

// 计算VLOOKUP
function calculateVlookup(lookupValue, tableArray, colIndex, exactMatch) {
    const problem = problemsData.problems.find(p => p.id === currentProblemId);
    if (problem && problem.sample_data) {
        const searchValue = lookupValue.replace(/"/g, '');
        
        if (problem.id === 4) { // 产品查找
            const found = problem.sample_data.find(item => item.id === getCellValue('C1'));
            if (found && colIndex === 2) {
                return found.name;
            }
        }
    }
    return '#N/A';
}

// 格式化文本
function formatText(value, format) {
    const numValue = parseFloat(value);
    const formatStr = format.replace(/"/g, '');
    
    if (formatStr === '0000') {
        return numValue.toString().padStart(4, '0');
    }
    
    return value;
}

// 获取单元格值
function getCellValue(cellRef) {
    return excelData[cellRef] || '';
}

// 检查答案是否正确
function isCorrectAnswer(userFormula, problem) {
    if (!problem) return false;
    
    // 标准化公式进行比较
    const normalizeFormula = (formula) => {
        return formula.toLowerCase()
                     .replace(/\s+/g, '')
                     .replace(/"/g, '"')
                     .replace(/"/g, '"');
    };
    
    const userNormalized = normalizeFormula(userFormula);
    const correctNormalized = normalizeFormula(problem.answer);
    
    return userNormalized === correctNormalized || 
           userNormalized.includes(correctNormalized.replace('=', ''));
}

// 标记题目完成
function markProblemCompleted(problemId) {
    completedProblems.add(problemId);
    updateProgress();
}

// 更新进度
function updateProgress() {
    const completed = completedProblems.size;
    const total = problemsData.problems.length;
    const percentage = (completed / total) * 100;
    
    document.getElementById('progressFill').style.width = `${percentage}%`;
    document.getElementById('progressText').textContent = `进度: ${completed}/${total}`;
}

// 题目导航
function navigateProblem(direction) {
    const newId = currentProblemId + direction;
    if (newId >= 1 && newId <= problemsData.problems.length) {
        showProblem(newId);
    }
}

// 更新导航按钮状态
function updateNavigationButtons() {
    document.getElementById('prevBtn').disabled = currentProblemId <= 1;
    document.getElementById('nextBtn').disabled = currentProblemId >= problemsData.problems.length;
}

// 重置模拟器
function resetSimulator() {
    const problem = problemsData.problems.find(p => p.id === currentProblemId);
    initializeExcelSimulator(problem);
    document.getElementById('formulaInput').value = '';
    document.getElementById('resultDisplay').textContent = '';
    document.getElementById('resultDisplay').className = 'result-display';
}

// 显示提示
function showHint() {
    const problem = problemsData.problems.find(p => p.id === currentProblemId);
    if (!problem) return;
    
    let hintText = '';
    
    switch (problem.id) {
        case 1:
            hintText = '使用F4键可以快速切换引用类型。绝对引用使用$符号固定行列。';
            break;
        case 2:
            hintText = 'IF函数语法：=IF(条件, 真值, 假值)。注意条件中使用比较运算符。';
            break;
        case 3:
            hintText = 'SUMIF语法：=SUMIF(条件范围, 条件, 求和范围)。条件用引号包围。';
            break;
        case 4:
            hintText = 'VLOOKUP语法：=VLOOKUP(查找值, 表格数组, 列索引, 精确匹配)。最后一个参数用FALSE表示精确匹配。';
            break;
        case 5:
            hintText = 'TEXT函数语法：=TEXT(数值, 格式代码)。"0000"表示4位数字，不足补零。';
            break;
        case 6:
            hintText = 'SUBSTITUTE语法：=SUBSTITUTE(文本, 旧字符, 新字符)。所有文本参数都要用引号。';
            break;
        case 7:
            hintText = '使用&运算符连接文本：=文本1&文本2。可以连接单元格引用和文本。';
            break;
        case 8:
            hintText = 'IFERROR语法：=IFERROR(公式, 错误时显示的值)。将原公式包装在IFERROR中。';
            break;
        case 9:
            hintText = 'SUMIFS语法：=SUMIFS(求和范围, 条件范围1, 条件1, 条件范围2, 条件2)。';
            break;
        case 10:
            hintText = 'FIND区分大小写，SEARCH不区分。SEARCH支持通配符*和?，FIND不支持。';
            break;
        default:
            hintText = '仔细阅读题目描述，按照函数语法输入公式。';
    }
    
    document.getElementById('hintText').textContent = hintText;
    document.getElementById('hintModal').classList.add('show');
}

// 关闭弹窗
function closeModal() {
    document.getElementById('hintModal').classList.remove('show');
}

// 显示成功提示
function showSuccessToast() {
    const toast = document.getElementById('successToast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// 复制答案
function copyAnswer() {
    const answer = document.getElementById('problemAnswer').textContent;
    navigator.clipboard.writeText(answer).then(() => {
        // 临时显示复制成功
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '已复制';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 1000);
    });
}

// 渲染函数演示
function renderFunctionDemo(problem) {
    const demoContent = document.getElementById('demoContent');
    demoContent.innerHTML = '';
    
    // 根据不同的题目类型创建演示内容
    switch (problem.id) {
        case 1:
            demoContent.innerHTML = `
                <div class="demo-step">
                    <h4>相对引用演示</h4>
                    <p>当复制公式时，单元格引用会自动调整</p>
                    <code>=A1*10%</code> → <code>=A2*10%</code>
                </div>
                <div class="demo-step">
                    <h4>绝对引用演示</h4>
                    <p>使用$符号固定引用，复制时不会改变</p>
                    <code>=$A$1*10%</code> → <code>=$A$1*10%</code>
                </div>
            `;
            break;
        case 2:
            demoContent.innerHTML = `
                <div class="demo-step">
                    <h4>IF函数结构</h4>
                    <p>IF(逻辑测试, 真值, 假值)</p>
                    <p>如果C5>50000，则显示"达标"，否则显示"未达标"</p>
                </div>
            `;
            break;
        case 3:
            demoContent.innerHTML = `
                <div class="demo-step">
                    <h4>SUMIF函数结构</h4>
                    <p>SUMIF(条件范围, 条件, 求和范围)</p>
                    <p>在A列中查找"交通费"，对应的B列数值求和</p>
                </div>
            `;
            break;
        default:
            demoContent.innerHTML = `
                <div class="demo-step">
                    <h4>函数说明</h4>
                    <p>请查看题目描述和标准答案，尝试在模拟器中输入公式</p>
                </div>
            `;
    }
}