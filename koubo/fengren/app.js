// Sewing Learning Application JavaScript

class SewingApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupTabNavigation();
        this.setupTimelineInteractions();
        this.setupBudgetCalculator();
        this.setupFabricFilter();
        this.setupProjectDetails();
        this.setupTipsAccordion();
        this.addSmoothScrolling();
    }

    // Tab Navigation
    setupTabNavigation() {
        const tabButtons = document.querySelectorAll('.nav-tab');
        const sections = document.querySelectorAll('.content-section');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                // Remove active class from all tabs and sections
                tabButtons.forEach(btn => btn.classList.remove('active'));
                sections.forEach(section => section.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding section
                button.classList.add('active');
                const targetSection = document.getElementById(targetTab);
                if (targetSection) {
                    targetSection.classList.add('active');
                    
                    // Force display for debugging
                    targetSection.style.display = 'block';
                } else {
                    console.error('Section not found:', targetTab);
                }
                
                // Smooth scroll to top of content
                document.querySelector('.main-content').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
    }

    // Timeline Interactions
    setupTimelineInteractions() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach((item, index) => {
            const content = item.querySelector('.timeline-content');
            const details = item.querySelector('.timeline-details');
            
            if (!content || !details) return;
            
            // Set initial state - all items start collapsed except first
            details.dataset.expanded = index === 0 ? 'true' : 'false';
            if (index > 0) {
                details.style.maxHeight = '0';
                details.style.overflow = 'hidden';
                details.style.transition = 'max-height 0.3s ease';
            } else {
                details.style.maxHeight = 'none';
            }
            
            content.addEventListener('click', () => {
                const isExpanded = details.dataset.expanded === 'true';
                
                if (isExpanded) {
                    // Collapse
                    details.dataset.expanded = 'false';
                    details.style.maxHeight = '0';
                    content.style.transform = '';
                } else {
                    // Expand
                    details.dataset.expanded = 'true';
                    details.style.maxHeight = details.scrollHeight + 'px';
                    content.style.transform = 'translateY(-2px)';
                }
            });
            
            // Add hover effects
            content.addEventListener('mouseenter', () => {
                if (details.dataset.expanded === 'false') {
                    content.style.transform = 'translateY(-3px)';
                }
            });
            
            content.addEventListener('mouseleave', () => {
                if (details.dataset.expanded === 'false') {
                    content.style.transform = '';
                }
            });
        });
    }

    // Budget Calculator
    setupBudgetCalculator() {
        const checkboxes = document.querySelectorAll('.calculator-item input[type="checkbox"]');
        const budgetMin = document.getElementById('budget-min');
        const budgetMax = document.getElementById('budget-max');
        
        if (!budgetMin || !budgetMax) return;
        
        const calculateBudget = () => {
            let minTotal = 0;
            let maxTotal = 0;
            
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                    minTotal += parseInt(checkbox.getAttribute('data-min')) || 0;
                    maxTotal += parseInt(checkbox.getAttribute('data-max')) || 0;
                }
            });
            
            budgetMin.textContent = minTotal;
            budgetMax.textContent = maxTotal;
            
            // Add animation effect
            budgetMin.style.transform = 'scale(1.1)';
            budgetMax.style.transform = 'scale(1.1)';
            budgetMin.style.transition = 'transform 0.2s ease';
            budgetMax.style.transition = 'transform 0.2s ease';
            
            setTimeout(() => {
                budgetMin.style.transform = 'scale(1)';
                budgetMax.style.transform = 'scale(1)';
            }, 200);
        };
        
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', calculateBudget);
        });
        
        // Initial calculation
        calculateBudget();
    }

    // Fabric Filter
    setupFabricFilter() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const fabricCards = document.querySelectorAll('.fabric-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter cards
                fabricCards.forEach(card => {
                    const difficulty = card.getAttribute('data-difficulty');
                    const priceRange = card.getAttribute('data-price-range');
                    
                    let shouldShow = false;
                    
                    if (filter === 'all') {
                        shouldShow = true;
                    } else if (filter === '初学者' && difficulty === '初学者') {
                        shouldShow = true;
                    } else if (filter === 'low-price' && priceRange === 'low') {
                        shouldShow = true;
                    }
                    
                    if (shouldShow) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeIn 0.5s ease';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Project Details
    setupProjectDetails() {
        const detailButtons = document.querySelectorAll('.project-details-btn');
        
        detailButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const projectCard = button.closest('.project-card');
                const projectName = projectCard.querySelector('h3').textContent;
                
                // Remove existing modal if any
                const existingModal = document.querySelector('.project-modal');
                if (existingModal) {
                    existingModal.remove();
                }
                
                const modal = document.createElement('div');
                modal.className = 'project-modal';
                modal.innerHTML = `
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3>${projectName} - 详细说明</h3>
                            <button class="modal-close">×</button>
                        </div>
                        <div class="modal-body">
                            <p><strong>项目特点：</strong></p>
                            <p>${projectCard.querySelector('.description').textContent}</p>
                            <p><strong>学习收获：</strong></p>
                            <p>通过制作${projectName}，你将掌握重要的缝纫技能，为下一个项目打下坚实基础。</p>
                            <p><strong>制作建议：</strong></p>
                            <ul>
                                <li>选择合适的面料，建议初学者使用纯棉材质</li>
                                <li>准备好所有必要工具后再开始制作</li>
                                <li>不要急于求成，每一步都要仔细完成</li>
                                <li>遇到困难时可以参考快速技巧部分</li>
                            </ul>
                        </div>
                    </div>
                `;
                
                // Add modal styles
                modal.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    animation: fadeIn 0.3s ease;
                `;
                
                const modalContent = modal.querySelector('.modal-content');
                modalContent.style.cssText = `
                    background: white;
                    border-radius: 12px;
                    padding: 0;
                    max-width: 500px;
                    width: 90%;
                    max-height: 80vh;
                    overflow-y: auto;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
                `;
                
                const modalHeader = modal.querySelector('.modal-header');
                modalHeader.style.cssText = `
                    padding: 20px;
                    border-bottom: 1px solid #eee;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: rgba(217, 179, 145, 0.1);
                `;
                
                const modalBody = modal.querySelector('.modal-body');
                modalBody.style.cssText = `
                    padding: 20px;
                    line-height: 1.6;
                `;
                
                const closeButton = modal.querySelector('.modal-close');
                closeButton.style.cssText = `
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                    color: #666;
                    padding: 0;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                `;
                
                document.body.appendChild(modal);
                
                // Close modal functionality
                const closeModal = () => {
                    modal.style.animation = 'fadeOut 0.3s ease';
                    setTimeout(() => {
                        if (modal.parentNode) {
                            modal.remove();
                        }
                        document.body.style.overflow = '';
                    }, 300);
                };
                
                closeButton.addEventListener('click', closeModal);
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) closeModal();
                });
                
                // Prevent body scroll when modal is open
                document.body.style.overflow = 'hidden';
            });
        });
    }

    // Tips Accordion
    setupTipsAccordion() {
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const accordionItem = header.parentElement;
                const content = accordionItem.querySelector('.accordion-content');
                const icon = header.querySelector('.accordion-icon');
                
                const isActive = accordionItem.classList.contains('active');
                
                // Close all other accordion items
                accordionHeaders.forEach(otherHeader => {
                    const otherItem = otherHeader.parentElement;
                    const otherContent = otherItem.querySelector('.accordion-content');
                    const otherIcon = otherHeader.querySelector('.accordion-icon');
                    
                    if (otherItem !== accordionItem) {
                        otherItem.classList.remove('active');
                        otherContent.style.maxHeight = '0';
                        otherIcon.style.transform = 'rotate(0deg)';
                    }
                });
                
                // Toggle current item
                if (isActive) {
                    accordionItem.classList.remove('active');
                    content.style.maxHeight = '0';
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    accordionItem.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                    icon.style.transform = 'rotate(180deg)';
                }
            });
        });
        
        // Open first accordion item by default
        setTimeout(() => {
            const firstAccordion = document.querySelector('.accordion-item');
            if (firstAccordion && !firstAccordion.classList.contains('active')) {
                firstAccordion.querySelector('.accordion-header').click();
            }
        }, 100);
    }

    // Smooth Scrolling
    addSmoothScrolling() {
        // Add smooth scrolling to any internal links
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
}

// Additional utility functions
const Utils = {
    // Animate elements on scroll
    animateOnScroll() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe cards and timeline items
        document.querySelectorAll('.tool-card, .fabric-card, .project-card, .timeline-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    },

    // Add loading states
    addLoadingStates() {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                if (!this.classList.contains('loading')) {
                    this.classList.add('loading');
                    setTimeout(() => {
                        this.classList.remove('loading');
                    }, 500);
                }
            });
        });
    },

    // Add keyboard navigation
    addKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Tab navigation with arrow keys
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                const currentTab = document.querySelector('.nav-tab.active');
                const tabs = Array.from(document.querySelectorAll('.nav-tab'));
                const currentIndex = tabs.indexOf(currentTab);
                
                let newIndex;
                if (e.key === 'ArrowLeft') {
                    newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
                } else {
                    newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
                }
                
                tabs[newIndex].click();
                tabs[newIndex].focus();
                e.preventDefault();
            }
            
            // Close modal with Escape key
            if (e.key === 'Escape') {
                const modal = document.querySelector('.project-modal');
                if (modal) {
                    modal.querySelector('.modal-close').click();
                }
            }
        });
    }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new SewingApp();
    
    // Add additional utilities with a slight delay
    setTimeout(() => {
        Utils.animateOnScroll();
        Utils.addLoadingStates();
        Utils.addKeyboardNavigation();
    }, 500);
    
    // Add some CSS for animations and loading states
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        .loading {
            opacity: 0.7;
            pointer-events: none;
            position: relative;
        }
        
        .loading::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 20px;
            height: 20px;
            margin: -10px 0 0 -10px;
            border: 2px solid transparent;
            border-top: 2px solid currentColor;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Focus styles for accessibility */
        .nav-tab:focus,
        .filter-btn:focus,
        .project-details-btn:focus,
        .accordion-header:focus {
            outline: 2px solid var(--color-primary);
            outline-offset: 2px;
        }
        
        /* Enhanced hover effects */
        .timeline-content:hover,
        .tool-card:hover,
        .fabric-card:hover,
        .project-card:hover {
            transform: translateY(-3px);
            transition: transform 0.3s ease;
        }
        
        /* Ensure content sections are properly hidden/shown */
        .content-section:not(.active) {
            display: none !important;
        }
        
        .content-section.active {
            display: block !important;
        }
    `;
    document.head.appendChild(style);
});

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SewingApp, Utils };
}