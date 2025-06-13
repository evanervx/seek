// Fabric data from the provided JSON
const fabricData = [
    {
        "fabric_name": "Silk Chiffon",
        "chinese_name": "丝绸雪纺",
        "difficulty_level": "Very High",
        "main_problems": "极度光滑，容易脱线，难以裁剪和缝制，需要法式包缝。",
        "why_avoid_as_beginner": "需要法式包缝、衬纸支撑和精准处理等高级技巧。",
        "beginner_alternatives": "棉府绸或棉麻布"
    },
    {
        "fabric_name": "Silk/Rayon Charmeuse",
        "chinese_name": "丝绸/人造丝绉缎",
        "difficulty_level": "Very High",
        "main_problems": "非常光滑，贴身，难以处理和裁剪。",
        "why_avoid_as_beginner": "对于初学者来说太滑难以控制，容易因失误而损坏。",
        "beginner_alternatives": "棉贡缎或反面绉缎"
    },
    {
        "fabric_name": "Satin",
        "chinese_name": "缎面",
        "difficulty_level": "High",
        "main_problems": "光滑，会留下针孔，容易起皱，贴身。",
        "why_avoid_as_beginner": "会显现出每一个瑕疵，用错线或针会导致面料轻易起皱。",
        "beginner_alternatives": "棉贡缎或抛光棉"
    },
    {
        "fabric_name": "Velvet",
        "chinese_name": "天鹅绒",
        "difficulty_level": "High",
        "main_problems": "绒毛光滑，需要考虑绒毛的走向，缝制时会移动，需要特殊熨烫",
        "why_avoid_as_beginner": "绒毛的走向对外观至关重要，绒毛容易被卷入缝纫机，需要经验。",
        "beginner_alternatives": "平绒（棉质天鹅绒）或灯芯绒"
    },
    {
        "fabric_name": "Faux Fur",
        "chinese_name": "人造毛皮",
        "difficulty_level": "Very High",
        "main_problems": "掉毛多、场面混乱，缝份厚重，难以看清标记，需要特殊裁剪工具。",
        "why_avoid_as_beginner": "会弄得一团糟，厚重的缝份会对基础缝纫机造成压力，需要特殊的裁剪工具。",
        "beginner_alternatives": "摇粒绒或Minky面料"
    },
    {
        "fabric_name": "Leather/Vinyl",
        "chinese_name": "皮革/人造革",
        "difficulty_level": "Very High",
        "main_problems": "厚重且没有容错空间，容易断针，没有犯错余地，需要特殊压脚。",
        "why_avoid_as_beginner": "这种材料没有容错空间——针孔是永久性的，需要重型设备。",
        "beginner_alternatives": "重磅棉帆布或厚棉布"
    },
    {
        "fabric_name": "Sequined/Beaded Fabrics",
        "chinese_name": "亮片/珠片面料",
        "difficulty_level": "Very High",
        "main_problems": "必须移除缝份上的亮片/珠子，容易断针，不能直接熨烫。",
        "why_avoid_as_beginner": "准备工作耗时，有弄断昂贵的针和损坏机器的风险。",
        "beginner_alternatives": "带有装饰性明线的素色棉布"
    },
    {
        "fabric_name": "Jersey Knits",
        "chinese_name": "针织棉",
        "difficulty_level": "Medium-High",
        "main_problems": "边缘卷曲，容易拉伸变形，难以精确裁剪。",
        "why_avoid_as_beginner": "边缘卷曲使得卷边困难，裁剪时会发生不可预测的拉伸。",
        "beginner_alternatives": "罗马布或稳定的棉针织布"
    },
    {
        "fabric_name": "Stretch/Spandex Fabrics",
        "chinese_name": "弹力/莱卡面料",
        "difficulty_level": "Medium-High",
        "main_problems": "需要使用弹性线迹，接缝容易崩开，需要复杂的计算。",
        "why_avoid_as_beginner": "需要了解拉伸比和使用特殊的线迹/针。",
        "beginner_alternatives": "含2%氨纶的棉混纺面料"
    },
    {
        "fabric_name": "Organza",
        "chinese_name": "硬纱",
        "difficulty_level": "High",
        "main_problems": "非常薄且易滑动，难以保持平直，需要衬纸支撑。",
        "why_avoid_as_beginner": "太过娇贵和易于滑动，对初学者来说处理起来很麻烦。",
        "beginner_alternatives": "棉麻布或细棉布"
    },
    {
        "fabric_name": "Tulle",
        "chinese_name": "薄纱",
        "difficulty_level": "Medium",
        "main_problems": "重量轻且容易钩住，难以裁剪出直线。",
        "why_avoid_as_beginner": "容易撕裂，难以获得干净的切口和接缝。",
        "beginner_alternatives": "棉网布或轻质棉布"
    },
    {
        "fabric_name": "Lace",
        "chinese_name": "蕾丝",
        "difficulty_level": "High",
        "main_problems": "开放式编织结构，需要特殊的接缝技术，需要精细处理。",
        "why_avoid_as_beginner": "需要复杂的制作方法，缝制过程中容易被钩住。",
        "beginner_alternatives": "鸡眼棉布或绣花棉布"
    },
    {
        "fabric_name": "Bias Cut Fabrics",
        "chinese_name": "斜裁面料",
        "difficulty_level": "High",
        "main_problems": "容易拉伸和变形，需要假缝固定，排版复杂。",
        "why_avoid_as_beginner": "需要高级的排版技巧和稳定技术。",
        "beginner_alternatives": "直纹棉布或亚麻布"
    }
];

const advancedTechniques = [
    {
        "name": "法式缝",
        "description": "用于透明或易磨损面料的无暴露线头的缝合方法"
    },
    {
        "name": "使用组织纸",
        "description": "在缝纫时在面料下放置薄纸，以防止面料滑动或卡在送布齿中"
    },
    {
        "name": "特殊压脚",
        "description": "如特氟龙压脚（适用于皮革、人造革）或滚轮压脚（适用于天鹅绒）"
    },
    {
        "name": "特殊针",
        "description": "如球头针（针织面料）、皮革针或微针（丝绸）"
    },
    {
        "name": "固定边缘",
        "description": "使用固定线迹防止弹性或偏斜裁剪面料变形"
    },
    {
        "name": "专业剪裁技术",
        "description": "如单层裁剪或使用重物而非别针固定滑动面料"
    }
];

// Function to get difficulty class name
function getDifficultyClass(level) {
    switch(level) {
        case 'Very High':
            return 'difficulty-very-high';
        case 'High':
            return 'difficulty-high';
        case 'Medium-High':
            return 'difficulty-medium-high';
        case 'Medium':
            return 'difficulty-medium';
        default:
            return 'difficulty-medium';
    }
}

// Function to populate the fabric table
function populateFabricTable() {
    const tableBody = document.getElementById('fabricTableBody');
    
    fabricData.forEach(fabric => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td><strong>${fabric.chinese_name}</strong></td>
            <td>${fabric.fabric_name}</td>
            <td><span class="${getDifficultyClass(fabric.difficulty_level)}">${fabric.difficulty_level}</span></td>
            <td>${fabric.main_problems}</td>
            <td>${fabric.why_avoid_as_beginner}</td>
            <td class="alternative-highlight">${fabric.beginner_alternatives}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Function to create detailed fabric information
function createDetailedFabricInfo() {
    const detailsContainer = document.getElementById('fabricDetails');
    
    fabricData.forEach(fabric => {
        const fabricItem = document.createElement('div');
        fabricItem.className = 'fabric-detail-item';
        
        const difficultyEmoji = fabric.difficulty_level === 'Very High' ? '🔴' : 
                               fabric.difficulty_level === 'High' ? '🟠' : 
                               fabric.difficulty_level === 'Medium-High' ? '🟡' : '🟢';
        
        fabricItem.innerHTML = `
            <h3>${difficultyEmoji} ${fabric.chinese_name} (${fabric.fabric_name})</h3>
            
            <div class="fabric-detail-section">
                <h4>🚫 为什么初学者应该避免？</h4>
                <p>${fabric.why_avoid_as_beginner}</p>
            </div>
            
            <div class="fabric-detail-section">
                <h4>⚠️ 主要问题</h4>
                <p>${fabric.main_problems}</p>
            </div>
            
            <div class="fabric-detail-section">
                <h4>✅ 推荐的初学者替代方案</h4>
                <p class="alternative-highlight">${fabric.beginner_alternatives}</p>
            </div>
        `;
        
        detailsContainer.appendChild(fabricItem);
    });
}

// Function to populate advanced techniques
function populateAdvancedTechniques() {
    const techniquesGrid = document.getElementById('techniquesGrid');
    
    advancedTechniques.forEach(technique => {
        const techniqueItem = document.createElement('div');
        techniqueItem.className = 'technique-item';
        
        techniqueItem.innerHTML = `
            <h4>${technique.name}</h4>
            <p>${technique.description}</p>
        `;
        
        techniquesGrid.appendChild(techniqueItem);
    });
}

// Function to handle image loading
function handleImageLoading() {
    const images = document.querySelectorAll('.chart-item img');
    
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
            
            img.addEventListener('error', function() {
                this.classList.add('loaded');
                console.warn('Failed to load image:', this.src);
            });
        }
    });
}

// Function to add smooth scrolling behavior
function addSmoothScrolling() {
    // Add click handlers for any internal links if they exist
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
}

// Function to add table sorting functionality (optional enhancement)
function addTableInteractivity() {
    const table = document.getElementById('fabricTable');
    const headers = table.querySelectorAll('th');
    
    headers.forEach((header, index) => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', () => {
            sortTable(table, index);
        });
    });
}

// Simple table sorting function
function sortTable(table, columnIndex) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    const isAscending = table.dataset.sortOrder !== 'asc';
    table.dataset.sortOrder = isAscending ? 'asc' : 'desc';
    
    rows.sort((a, b) => {
        const aText = a.cells[columnIndex].textContent.trim();
        const bText = b.cells[columnIndex].textContent.trim();
        
        return isAscending ? aText.localeCompare(bText) : bText.localeCompare(aText);
    });
    
    rows.forEach(row => tbody.appendChild(row));
}

// Function to add scroll-to-top functionality
function addScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--color-primary);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: var(--shadow-lg);
        transition: all var(--duration-normal) var(--ease-standard);
    `;
    
    document.body.appendChild(scrollButton);
    
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });
}

// Main initialization function
function initializeApp() {
    // Populate all dynamic content
    populateFabricTable();
    createDetailedFabricInfo();
    populateAdvancedTechniques();
    
    // Add interactive features
    handleImageLoading();
    addSmoothScrolling();
    addTableInteractivity();
    addScrollToTop();
    
    // Add loading effect for the page
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('缝纫小白面料指南应用已初始化完成！');
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Add window resize handler for responsive adjustments
window.addEventListener('resize', () => {
    // Handle any responsive adjustments if needed
    handleImageLoading();
});

// Error handling for any uncaught errors
window.addEventListener('error', (e) => {
    console.error('应用错误:', e.error);
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Add keyboard shortcuts if needed
    if (e.key === 'Home' && e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});