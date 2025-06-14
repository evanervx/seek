// Sewing Terms Data
const sewingData = [
  {
    "category": "基础缝纫工具和设备",
    "color": "#FF6B6B",
    "terms": [
      {"term": "Sewing Machine", "chinese": "缝纫机", "definition": "一种用线缝合布料和其他材料的机械驱动设备"},
      {"term": "Needle", "chinese": "缝纫针", "definition": "一种用于缝合的锋利、细长的工具"},
      {"term": "Thread", "chinese": "缝纫线", "definition": "一种用于缝纫的长而细的线"},
      {"term": "Bobbin", "chinese": "梭芯/线轴", "definition": "一个缠绕线的圆筒或纺锤"},
      {"term": "Presser Foot", "chinese": "压脚", "definition": "缝合时将织物固定到位的部件"},
      {"term": "Feed Dogs", "chinese": "送布牙", "definition": "在针下移动织物的金属齿"},
      {"term": "Seam Ripper", "chinese": "拆线器", "definition": "一种用于剪断和拆除缝线的小工具"},
      {"term": "Scissors", "chinese": "剪刀", "definition": "用于裁剪织物的工具"},
      {"term": "Pins", "chinese": "大头针", "definition": "用于临时将布块固定在一起的小金属扣件"},
      {"term": "Tape Measure", "chinese": "软尺", "definition": "用于测量的柔性测量设备"},
      {"term": "Thimble", "chinese": "顶针", "definition": "手缝时保护手指的护套"},
      {"term": "Pin Cushion", "chinese": "针插", "definition": "一个用于插针和缝纫针的软垫"},
      {"term": "Rotary Cutter", "chinese": "滚轮裁刀", "definition": "一种带有圆形刀片的切割工具，用于精确裁剪织物"},
      {"term": "Cutting Mat", "chinese": "切割垫", "definition": "用于裁剪织物的自愈表面"},
      {"term": "Iron", "chinese": "熨斗", "definition": "用于熨烫和抚平织物的设备"}
    ]
  },
  {
    "category": "面料和纹理术语",
    "color": "#4ECDC4",
    "terms": [
      {"term": "Fabric", "chinese": "面料/织物", "definition": "通过编织或针织纤维制成的材料"},
      {"term": "Grain", "chinese": "纱向", "definition": "梭织物中纱线的方向"},
      {"term": "Bias", "chinese": "斜纹/斜向", "definition": "与纱向成45度角的织物斜向"},
      {"term": "Selvage", "chinese": "布边", "definition": "织物上不会散开的紧密编织边缘"},
      {"term": "Warp", "chinese": "经线", "definition": "梭织物中的纵向纱线"},
      {"term": "Weft", "chinese": "纬线", "definition": "梭织物中的横向纱线"},
      {"term": "Nap", "chinese": "绒毛方向", "definition": "天鹅绒等织物上凸起的表面方向"},
      {"term": "Drape", "chinese": "悬垂性", "definition": "织物悬挂或流动的方式"},
      {"term": "Hand", "chinese": "手感", "definition": "织物的质地或手感"},
      {"term": "Right Side", "chinese": "正面", "definition": "织物的外露、可见的一面"},
      {"term": "Wrong Side", "chinese": "反面", "definition": "织物的内侧、隐藏的一面"},
      {"term": "Face", "chinese": "正面", "definition": "织物的正面"},
      {"term": "Knit Fabric", "chinese": "针织面料", "definition": "由纱线互锁环圈制成的织物"},
      {"term": "Woven Fabric", "chinese": "梭织面料", "definition": "通过将纱线编织在一起制成的织物"},
      {"term": "Stretch Fabric", "chinese": "弹性面料", "definition": "可以拉伸并恢复原状的织物"}
    ]
  },
  {
    "category": "缝纫技术和针法",
    "color": "#45B7D1",
    "terms": [
      {"term": "Seam", "chinese": "缝", "definition": "两块织物通过缝合连接起来的线"},
      {"term": "Backstitch", "chinese": "回针", "definition": "用于加固缝线起止处的牢固针法"},
      {"term": "Running Stitch", "chinese": "平针", "definition": "在织物中上下穿梭的简单手缝针法"},
      {"term": "Basting", "chinese": "假缝/疏缝", "definition": "用于将布块临时固定在一起的缝线"},
      {"term": "Blanket Stitch", "chinese": "锁边针", "definition": "用于整理织物边缘的手缝针法"},
      {"term": "Chain Stitch", "chinese": "链式针迹", "definition": "类似链条的环形针法"},
      {"term": "Cross Stitch", "chinese": "十字绣", "definition": "两针交叉形成X形的针法"},
      {"term": "Zigzag Stitch", "chinese": "Z字针", "definition": "针左右移动的机器针法"},
      {"term": "Satin Stitch", "chinese": "缎纹针", "definition": "形成实心覆盖的紧密Z字形针迹"},
      {"term": "Topstitch", "chinese": "明线", "definition": "服装外部的装饰性缝线"},
      {"term": "Understitch", "chinese": "压线", "definition": "在贴边一侧靠近缝线处进行缝合"},
      {"term": "Edgestitch", "chinese": "边缘线", "definition": "非常靠近织物边缘缝制的直线针迹"},
      {"term": "Stitch in the Ditch", "chinese": "压缝线", "definition": "直接在缝线中进行缝合"},
      {"term": "French Seam", "chinese": "法式缝", "definition": "将毛边包裹在内的缝"},
      {"term": "Overlock Stitch", "chinese": "包缝针", "definition": "修剪和整理织物边缘的针法"}
    ]
  },
  {
    "category": "版型制作术语",
    "color": "#96CEB4",
    "terms": [
      {"term": "Pattern", "chinese": "纸样/版型", "definition": "用于裁剪布块的模板"},
      {"term": "Seam Allowance", "chinese": "缝份", "definition": "织物边缘和缝线之间的区域"},
      {"term": "Dart", "chinese": "省道", "definition": "为塑造形状而折叠的织物楔形部分"},
      {"term": "Notch", "chinese": "刀眼", "definition": "帮助对齐纸样布块的标记"},
      {"term": "Grainline", "chinese": "纱向线", "definition": "纸样上显示织物纱向的箭头"},
      {"term": "Cutting Line", "chinese": "裁剪线", "definition": "显示在哪里裁剪织物的线"},
      {"term": "Fold Line", "chinese": "折叠线", "definition": "指示在哪里折叠织物的线"},
      {"term": "Armscye", "chinese": "袖窿", "definition": "连接袖子的袖窿开口"},
      {"term": "Block", "chinese": "基础版型", "definition": "代表服装形状的基础纸样"},
      {"term": "Ease", "chinese": "松量", "definition": "纸样中为合身和活动预留的额外空间"},
      {"term": "Bust Point", "chinese": "胸点", "definition": "胸部的最突出点"},
      {"term": "Center Front (CF)", "chinese": "前中心线", "definition": "服装前部的中心线"},
      {"term": "Center Back (CB)", "chinese": "后中心线", "definition": "服装后部的中心线"},
      {"term": "Apex", "chinese": "省尖", "definition": "省道逐渐变细并结束的点"},
      {"term": "Balance Point", "chinese": "平衡点", "definition": "帮助对齐服装布块的标记"}
    ]
  },
  {
    "category": "服装构造术语",
    "color": "#FECA57",
    "terms": [
      {"term": "Hem", "chinese": "下摆", "definition": "服装的整理好的底边"},
      {"term": "Facing", "chinese": "贴边", "definition": "为整洁地完成边缘而缝制的布块"},
      {"term": "Interfacing", "chinese": "衬布", "definition": "为增加结构和稳定性而添加的材料"},
      {"term": "Lining", "chinese": "里布", "definition": "服装的内层织物"},
      {"term": "Binding", "chinese": "滚边", "definition": "用于整理边缘的布条"},
      {"term": "Bias Tape", "chinese": "斜布条", "definition": "沿斜向裁剪用于整理的布条"},
      {"term": "Zipper", "chinese": "拉链", "definition": "带有两排互锁齿的闭合装置"},
      {"term": "Button", "chinese": "纽扣", "definition": "用作扣件的小圆盘"},
      {"term": "Buttonhole", "chinese": "扣眼", "definition": "供纽扣穿过的缝制孔"},
      {"term": "Placket", "chinese": "门襟", "definition": "带有纽扣等闭合装置的开口"},
      {"term": "Collar", "chinese": "领子", "definition": "服装颈部周围的部分"},
      {"term": "Cuff", "chinese": "袖口", "definition": "袖子的整理好的边缘"},
      {"term": "Sleeve", "chinese": "袖子", "definition": "服装覆盖手臂的部分"},
      {"term": "Bodice", "chinese": "上身", "definition": "连衣裙或服装的上半部分"},
      {"term": "Waistband", "chinese": "腰带", "definition": "腰部的布带"}
    ]
  },
  {
    "category": "装饰技术",
    "color": "#FF9FF3",
    "terms": [
      {"term": "Appliqué", "chinese": "贴花", "definition": "缝在另一块织物上的装饰性织物"},
      {"term": "Embroidery", "chinese": "刺绣", "definition": "织物上的装饰性缝线"},
      {"term": "Pleats", "chinese": "褶皱", "definition": "织物中的褶皱，形成可控的丰满度"},
      {"term": "Gathering", "chinese": "抽褶", "definition": "将织物聚拢在一起以产生丰满感"},
      {"term": "Shirring", "chinese": "抽褶装饰", "definition": "用于装饰的多排抽褶"},
      {"term": "Smocking", "chinese": "褶饰", "definition": "在抽褶织物上的装饰性缝线"},
      {"term": "Tuck", "chinese": "裥", "definition": "为塑造形状或装饰而缝制的织物褶"},
      {"term": "Piping", "chinese": "滚边条", "definition": "插入缝中的装饰性滚边"},
      {"term": "Trim", "chinese": "装饰边", "definition": "添加到服装上的装饰材料"},
      {"term": "Beading", "chinese": "珠绣", "definition": "在织物上添加珠子进行装饰"},
      {"term": "Sequins", "chinese": "亮片", "definition": "缝在织物上的小装饰圆片"},
      {"term": "Fringe", "chinese": "流苏", "definition": "由悬挂线组成的装饰性边缘"},
      {"term": "Ruffle", "chinese": "荷叶边", "definition": "用作装饰的抽褶布条"},
      {"term": "Box Pleat", "chinese": "工字褶", "definition": "两褶朝向相反方向的褶裥"},
      {"term": "Knife Pleat", "chinese": "刀褶", "definition": "朝一个方向折叠的单褶"}
    ]
  },
  {
    "category": "质量控制和整理",
    "color": "#54A0FF",
    "terms": [
      {"term": "Press", "chinese": "熨烫", "definition": "使用熨斗压平并定型织物"},
      {"term": "Grade", "chinese": "修剪", "definition": "修剪缝份以减少厚度"},
      {"term": "Clip", "chinese": "剪牙口", "definition": "在曲线处的缝份上剪的小口"},
      {"term": "Notch", "chinese": "剪V口", "definition": "为去除多余厚度而剪的V形切口"},
      {"term": "Finish", "chinese": "整理", "definition": "缝边最后的处理工序"},
      {"term": "Trim", "chinese": "修边", "definition": "剪掉多余的织物"},
      {"term": "Turn", "chinese": "翻转", "definition": "将织物翻到正面"},
      {"term": "Anchor", "chinese": "固定", "definition": "在起针和收针时加固缝线"},
      {"term": "Lock Stitch", "chinese": "锁式针迹", "definition": "将线锁在一起的机器针迹"},
      {"term": "Tension", "chinese": "张力", "definition": "线的松紧度控制"},
      {"term": "Feed", "chinese": "送料", "definition": "织物通过缝纫机的移动"},
      {"term": "Backstitch", "chinese": "倒缝", "definition": "反向缝线以加固缝合处"},
      {"term": "Overcast", "chinese": "包边", "definition": "在毛边上进行缝合"},
      {"term": "Blind Hem", "chinese": "暗缝", "definition": "一种隐藏的卷边技巧"},
      {"term": "Whipstitch", "chinese": "锁边针", "definition": "缠绕织物边缘的缝法"}
    ]
  },
  {
    "category": "现代缝纫技术",
    "color": "#5F27CD",
    "terms": [
      {"term": "Serger", "chinese": "包缝机", "definition": "同时修剪和整理边缘的机器"},
      {"term": "Overlocker", "chinese": "锁边机", "definition": "用于整理织物边缘的机器"},
      {"term": "Free Motion Quilting", "chinese": "自由压线", "definition": "在针下自由移动织物以进行装饰性绗缝"},
      {"term": "Computerized Sewing", "chinese": "电脑缝纫", "definition": "由机器控制的精确缝合"},
      {"term": "Automatic Buttonhole", "chinese": "自动扣眼", "definition": "机器制作的扣眼"},
      {"term": "Walking Foot", "chinese": "走布压脚", "definition": "能均匀送料多层织物的压脚"},
      {"term": "Invisible Zipper", "chinese": "隐形拉链", "definition": "设计用于隐藏在缝中的拉链"},
      {"term": "Fusible Interfacing", "chinese": "粘合衬", "definition": "可用熨斗烫合的衬料"},
      {"term": "Double Needle", "chinese": "双针", "definition": "能产生平行缝线的针"},
      {"term": "Ballpoint Needle", "chinese": "圆头针", "definition": "专为针织面料设计的针"},
      {"term": "Thread Cutter", "chinese": "切线器", "definition": "内置的用于切线的刀片"},
      {"term": "Needle Threader", "chinese": "穿线器", "definition": "帮助穿针的装置"},
      {"term": "LCD Display", "chinese": "液晶显示屏", "definition": "现代机器上的电子显示屏"},
      {"term": "USB Port", "chinese": "USB接口", "definition": "用于下载图样的连接端口"},
      {"term": "Embroidery Hoop", "chinese": "绣花绷", "definition": "在刺绣时保持织物拉紧的框架"}    ]
  }
];

// Global state
let currentCategory = 'all';
let currentSearchTerm = '';
let allTerms = [];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Flatten all terms into a single array
    allTerms = sewingData.flatMap(category => 
        category.terms.map(term => ({
            ...term,
            category: category.category,
            color: category.color
        }))
    );
    
    // Set up event listeners
    setupEventListeners();
    
    // Initial render
    renderTerms(allTerms);
    updateStatistics(allTerms.length);
}

function setupEventListeners() {
    // Search input with debouncing
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    
    // Category filter buttons
    const categoryButtons = document.querySelectorAll('.btn--category');
    categoryButtons.forEach(button => {
        button.addEventListener('click', handleCategoryFilter);
    });
    
    // Add keyboard navigation for accessibility
    document.addEventListener('keydown', handleKeyNavigation);
}

function handleSearch(event) {
    currentSearchTerm = event.target.value.toLowerCase().trim();
    filterAndRenderTerms();
}

function handleCategoryFilter(event) {
    const category = event.target.dataset.category;
    
    // Update active button
    document.querySelectorAll('.btn--category').forEach(btn => 
        btn.classList.remove('active')
    );
    event.target.classList.add('active');
    
    currentCategory = category;
    filterAndRenderTerms();
    
    // Smooth scroll to terms section
    setTimeout(() => {
        document.querySelector('.terms-section').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}

function filterAndRenderTerms() {
    let filteredTerms = allTerms;
    
    // Apply search filter first (across all terms)
    if (currentSearchTerm) {
        filteredTerms = filteredTerms.filter(term => 
            term.term.toLowerCase().includes(currentSearchTerm) ||
            term.chinese.toLowerCase().includes(currentSearchTerm) ||
            term.definition.toLowerCase().includes(currentSearchTerm)
        );
    }
    
    // Then apply category filter only if a specific category is selected
    // and there's no search term (to avoid the zero results bug)
    if (currentCategory !== 'all' && !currentSearchTerm) {
        filteredTerms = filteredTerms.filter(term => 
            term.category === currentCategory
        );
    }
    
    renderTerms(filteredTerms);
    updateStatistics(filteredTerms.length);
}

function renderTerms(terms) {
    const termsGrid = document.getElementById('terms-grid');
    const noResults = document.getElementById('no-results');
    
    if (terms.length === 0) {
        termsGrid.style.display = 'none';
        noResults.classList.remove('hidden');
        return;
    }
    
    termsGrid.style.display = 'grid';
    noResults.classList.add('hidden');
    
    // Create term cards HTML
    const termsHTML = terms.map((term, index) => `
        <div class="term-card" 
             data-category="${term.category}"
             data-term="${term.term}"
             data-chinese="${term.chinese}"
             data-definition="${term.definition}"
             style="animation-delay: ${(index % 6) * 0.1}s">
            <div class="term-card__category">${term.category}</div>
            <div class="term-card__english">${term.term}</div>
            <div class="term-card__chinese">${term.chinese}</div>
            <div class="term-card__definition">${term.definition}</div>
        </div>
    `).join('');
    
    termsGrid.innerHTML = termsHTML;
    
    // Add click handlers for term cards
    addTermCardInteractions();
}

function addTermCardInteractions() {
    const termCards = document.querySelectorAll('.term-card');
    
    termCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click interaction with expanded details
        card.addEventListener('click', function() {
            showTermDetails(this);
        });
        
        // Add keyboard support
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                showTermDetails(this);
            }
        });
    });
}

function showTermDetails(cardElement) {
    // Create a subtle pulse effect
    cardElement.style.transform = 'scale(0.95)';
    setTimeout(() => {
        cardElement.style.transform = 'translateY(-4px) scale(1.02)';
    }, 150);
    
    // Get term data
    const term = cardElement.dataset.term;
    const chinese = cardElement.dataset.chinese;
    const definition = cardElement.dataset.definition;
    const category = cardElement.dataset.category;
    
    // Create and show modal/popup with detailed information
    showDetailModal(term, chinese, definition, category);
}

function showDetailModal(term, chinese, definition, category) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.term-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal HTML
    const modal = document.createElement('div');
    modal.className = 'term-modal';
    modal.innerHTML = `
        <div class="term-modal__backdrop"></div>
        <div class="term-modal__content">
            <div class="term-modal__header">
                <h2>${term}</h2>
                <button class="term-modal__close" aria-label="关闭">×</button>
            </div>
            <div class="term-modal__body">
                <div class="term-modal__chinese">${chinese}</div>
                <div class="term-modal__category">分类: ${category}</div>
                <div class="term-modal__definition">
                    <h4>定义:</h4>
                    <p>${definition}</p>
                </div>
                <div class="term-modal__actions">
                    <button class="btn btn--primary term-modal__copy">复制术语</button>
                    <button class="btn btn--secondary term-modal__close-btn">关闭</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyles = `
        .term-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: var(--space-16);
        }
        
        .term-modal__backdrop {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(4px);
        }
        
        .term-modal__content {
            background: var(--color-surface);
            border-radius: var(--radius-lg);
            max-width: 500px;
            width: 100%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: var(--shadow-lg);
            position: relative;
            animation: modalFadeIn 0.3s ease-out;
        }
        
        @keyframes modalFadeIn {
            from {
                opacity: 0;
                transform: scale(0.9) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
        
        .term-modal__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--space-20);
            border-bottom: 1px solid var(--color-border);
        }
        
        .term-modal__header h2 {
            margin: 0;
            color: var(--color-primary);
        }
        
        .term-modal__close {
            background: none;
            border: none;
            font-size: var(--font-size-3xl);
            cursor: pointer;
            color: var(--color-text-secondary);
            padding: 0;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-sm);
            transition: all var(--duration-fast) var(--ease-standard);
        }
        
        .term-modal__close:hover {
            background: var(--color-secondary);
            color: var(--color-text);
        }
        
        .term-modal__body {
            padding: var(--space-20);
        }
        
        .term-modal__chinese {
            font-size: var(--font-size-xl);
            font-weight: var(--font-weight-semibold);
            color: var(--color-primary);
            margin-bottom: var(--space-12);
        }
        
        .term-modal__category {
            font-size: var(--font-size-sm);
            color: var(--color-text-secondary);
            margin-bottom: var(--space-16);
            padding: var(--space-4) var(--space-8);
            background: var(--color-secondary);
            border-radius: var(--radius-sm);
            display: inline-block;
        }
        
        .term-modal__definition h4 {
            margin: 0 0 var(--space-8) 0;
            font-size: var(--font-size-md);
        }
        
        .term-modal__definition p {
            margin: 0;
            line-height: var(--line-height-normal);
            color: var(--color-text-secondary);
        }
        
        .term-modal__actions {
            display: flex;
            gap: var(--space-12);
            margin-top: var(--space-20);
        }
        
        .term-modal__copy {
            flex: 1;
        }
        
        .term-modal__close-btn {
            flex: 1;
        }
    `;
    
    // Add styles to head if not already present
    if (!document.querySelector('#modal-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'modal-styles';
        styleSheet.textContent = modalStyles;
        document.head.appendChild(styleSheet);
    }
    
    // Add modal to body
    document.body.appendChild(modal);
    
    // Add event listeners
    const closeModal = () => {
        modal.style.animation = 'modalFadeOut 0.3s ease-out';
        setTimeout(() => modal.remove(), 300);
    };
    
    // Close button
    modal.querySelector('.term-modal__close').addEventListener('click', closeModal);
    modal.querySelector('.term-modal__close-btn').addEventListener('click', closeModal);
    
    // Backdrop click
    modal.querySelector('.term-modal__backdrop').addEventListener('click', closeModal);
    
    // Copy button
    modal.querySelector('.term-modal__copy').addEventListener('click', () => {
        const textToCopy = `${term} (${chinese}): ${definition}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            const copyBtn = modal.querySelector('.term-modal__copy');
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '已复制!';
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        });
    });
    
    // Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

function updateStatistics(filteredCount) {
    const totalTermsEl = document.getElementById('total-terms');
    const totalCategoriesEl = document.getElementById('total-categories');
    const filteredTermsEl = document.getElementById('filtered-terms');
    
    // Animate number changes
    animateNumber(totalTermsEl, allTerms.length);
    animateNumber(totalCategoriesEl, sewingData.length);
    animateNumber(filteredTermsEl, filteredCount);
}

function animateNumber(element, targetNumber) {
    const currentNumber = parseInt(element.textContent) || 0;
    const duration = 500;
    const steps = 20;
    const increment = (targetNumber - currentNumber) / steps;
    
    let current = currentNumber;
    let step = 0;
    
    const timer = setInterval(() => {
        current += increment;
        step++;
        
        if (step >= steps) {
            current = targetNumber;
            clearInterval(timer);
        }
        
        element.textContent = Math.round(current);
    }, duration / steps);
}

function handleKeyNavigation(event) {
    // Add keyboard shortcuts for better accessibility
    if (event.ctrlKey || event.metaKey) {
        switch(event.key) {
            case 'f':
            case 'F':
                event.preventDefault();
                document.getElementById('search-input').focus();
                break;
        }
    }
    
    // Escape key clears search
    if (event.key === 'Escape') {
        const searchInput = document.getElementById('search-input');
        if (searchInput === document.activeElement) {
            searchInput.value = '';
            currentSearchTerm = '';
            filterAndRenderTerms();
        }
    }
}

// Debounce function for performance optimization
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

// Add fade out animation for modal
const additionalModalStyles = `
    @keyframes modalFadeOut {
        from {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
        to {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
        }
    }
`;

// Add the additional styles
document.addEventListener('DOMContentLoaded', function() {
    const additionalStyleSheet = document.createElement('style');
    additionalStyleSheet.textContent = additionalModalStyles;
    document.head.appendChild(additionalStyleSheet);
});