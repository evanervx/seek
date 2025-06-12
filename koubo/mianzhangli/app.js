// DOM Elements
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const fabricTypeSelect = document.getElementById('fabricType');
const tensionResult = document.getElementById('tensionResult');

// Fabric tension data
const fabricTensionData = {
    thick: {
        name: '厚布料',
        tension: '4-5',
        description: '需要更高张力把底线拉上来',
        tips: ['使用较粗的针头', '可能需要调整压脚压力', '缝制速度可以稍慢']
    },
    denim: {
        name: '牛仔布',
        tension: '4-6',
        description: '根据重量调整',
        tips: ['使用牛仔布专用针', '考虑使用加强线', '多层缝制时可增加张力']
    },
    polyester: {
        name: '聚酯面料',
        tension: '4',
        description: '标准设置即可',
        tips: ['聚酯线与聚酯布料匹配良好', '注意静电问题', '可使用通用针头']
    },
    lightweight: {
        name: '轻薄面料',
        tension: '2-4',
        description: '从4开始向下调整',
        tips: ['使用细针头', '降低压脚压力', '缝制时轻柔操作']
    },
    cotton: {
        name: '棉布',
        tension: '3-4',
        description: '中等张力适用',
        tips: ['棉线与棉布搭配效果最好', '预洗布料避免缩水', '标准压脚设置']
    },
    stretchy: {
        name: '弹性面料',
        tension: '2-3',
        description: '较低张力避免起皱',
        tips: ['使用弹性针或圆头针', '考虑使用弹性线', '可使用锯齿缝或多重缝']
    }
};

// Initialize the application
function init() {
    setupTabNavigation();
    setupTensionCalculator();
    
    // Set default active tab
    showTab('overview');
}

// Tab Navigation Setup
function setupTabNavigation() {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            showTab(tabId);
            setActiveButton(button);
        });
    });
}

// Show specific tab content
function showTab(tabId) {
    // Hide all tab contents
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected tab content
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}

// Set active button state
function setActiveButton(activeButton) {
    // Remove active class from all buttons
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Add active class to clicked button
    activeButton.classList.add('active');
}

// Tension Calculator Setup
function setupTensionCalculator() {
    if (fabricTypeSelect) {
        fabricTypeSelect.addEventListener('change', calculateTension);
    }
}

// Calculate tension based on fabric type
function calculateTension() {
    const selectedFabric = fabricTypeSelect.value;
    
    if (!selectedFabric) {
        tensionResult.innerHTML = '<p>请选择面料类型以获取推荐张力设置</p>';
        tensionResult.classList.remove('active');
        return;
    }
    
    const fabricData = fabricTensionData[selectedFabric];
    
    if (fabricData) {
        tensionResult.innerHTML = `
            <div class="calculation-result">
                <h4>📊 ${fabricData.name} 推荐设置</h4>
                <div class="tension-recommendation">
                    <div class="tension-display">
                        <span class="tension-label">推荐张力：</span>
                        <span class="tension-number">${fabricData.tension}</span>
                    </div>
                    <p class="tension-desc">${fabricData.description}</p>
                </div>
                <div class="fabric-tips">
                    <h5>💡 专业建议：</h5>
                    <ul>
                        ${fabricData.tips.map(tip => `<li>${tip}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        tensionResult.classList.add('active');
    }
}

// Smooth scrolling for better UX
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add click handlers for tab buttons to scroll to top
function addScrollToTopOnTabChange() {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            setTimeout(smoothScrollToTop, 100);
        });
    });
}

// Enhanced interaction effects
function addInteractionEffects() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn, .tab-btn');
    buttons.forEach(button => {
        button.addEventListener('click', createRippleEffect);
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.fabric-card, .tool-card, .intro-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// Create ripple effect for buttons
function createRippleEffect(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add CSS for ripple animation
function addRippleCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .calculation-result {
            text-align: left;
        }
        
        .calculation-result h4 {
            color: var(--color-primary);
            margin-bottom: var(--space-16);
            font-size: var(--font-size-xl);
        }
        
        .tension-recommendation {
            background: rgba(33, 128, 141, 0.1);
            border: 1px solid rgba(33, 128, 141, 0.2);
            border-radius: var(--radius-base);
            padding: var(--space-16);
            margin-bottom: var(--space-16);
        }
        
        .tension-display {
            display: flex;
            align-items: center;
            gap: var(--space-12);
            margin-bottom: var(--space-8);
        }
        
        .tension-label {
            font-weight: var(--font-weight-semibold);
            color: var(--color-text);
        }
        
        .tension-number {
            background: var(--color-primary);
            color: white;
            padding: var(--space-4) var(--space-12);
            border-radius: var(--radius-full);
            font-weight: var(--font-weight-bold);
            font-size: var(--font-size-lg);
        }
        
        .tension-desc {
            color: var(--color-text-secondary);
            margin: 0;
            font-style: italic;
        }
        
        .fabric-tips {
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            border-radius: var(--radius-base);
            padding: var(--space-16);
        }
        
        .fabric-tips h5 {
            color: var(--color-primary);
            margin-bottom: var(--space-12);
            font-size: var(--font-size-base);
        }
        
        .fabric-tips ul {
            margin: 0;
            padding-left: var(--space-20);
        }
        
        .fabric-tips li {
            margin-bottom: var(--space-8);
            color: var(--color-text);
        }
        
        .fabric-tips li:last-child {
            margin-bottom: 0;
        }
    `;
    document.head.appendChild(style);
}

// Keyboard navigation support
function setupKeyboardNavigation() {
    document.addEventListener('keydown', (event) => {
        // Handle tab navigation with arrow keys
        if (event.target.classList.contains('tab-btn')) {
            const currentIndex = Array.from(tabButtons).indexOf(event.target);
            let nextIndex;
            
            switch (event.key) {
                case 'ArrowLeft':
                    event.preventDefault();
                    nextIndex = currentIndex > 0 ? currentIndex - 1 : tabButtons.length - 1;
                    tabButtons[nextIndex].focus();
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    nextIndex = currentIndex < tabButtons.length - 1 ? currentIndex + 1 : 0;
                    tabButtons[nextIndex].focus();
                    break;
                case 'Enter':
                case ' ':
                    event.preventDefault();
                    event.target.click();
                    break;
            }
        }
    });
}

// Accessibility improvements
function improveAccessibility() {
    // Add ARIA labels and roles
    tabButtons.forEach((button, index) => {
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-controls', button.getAttribute('data-tab'));
        button.setAttribute('tabindex', index === 0 ? '0' : '-1');
    });
    
    tabContents.forEach(content => {
        content.setAttribute('role', 'tabpanel');
        content.setAttribute('aria-hidden', !content.classList.contains('active'));
    });
    
    // Update ARIA states when tabs change
    const originalSetActiveButton = setActiveButton;
    setActiveButton = function(activeButton) {
        tabButtons.forEach((button, index) => {
            const isActive = button === activeButton;
            button.setAttribute('aria-selected', isActive);
            button.setAttribute('tabindex', isActive ? '0' : '-1');
        });
        
        tabContents.forEach(content => {
            content.setAttribute('aria-hidden', !content.classList.contains('active'));
        });
        
        originalSetActiveButton.call(this, activeButton);
    };
}

// Performance optimization - lazy load content
function optimizePerformance() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards for fade-in animation
    const animatedElements = document.querySelectorAll('.card, .fabric-card, .tool-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Error handling and fallbacks
function setupErrorHandling() {
    window.addEventListener('error', (event) => {
        console.error('应用程序错误:', event.error);
        // You could add user-friendly error messaging here
    });
    
    // Fallback for missing elements
    if (!fabricTypeSelect || !tensionResult) {
        console.warn('某些元素未找到，部分功能可能不可用');
    }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    init();
    addRippleCSS();
    addScrollToTopOnTabChange();
    addInteractionEffects();
    setupKeyboardNavigation();
    improveAccessibility();
    optimizePerformance();
    setupErrorHandling();
    
    console.log('缝纫线张力指南应用已初始化');
});

// Export functions for potential external use
window.SewingTensionApp = {
    showTab,
    calculateTension,
    fabricTensionData
};