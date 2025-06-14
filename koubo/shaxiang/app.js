// Main application initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeInteractivity();
    initializeAnimations();
    
    // Show initial section
    showSection('basics');
});

// Navigation functionality
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Update active button
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section
            showSection(targetSection);
        });
    });
}

// Section display management
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        
        // Trigger animations for the active section
        setTimeout(() => {
            animatePropertyBars();
            animateCards();
        }, 100);
    }
}

// Initialize interactive elements
function initializeInteractivity() {
    initializeCheckboxes();
    initializeInteractiveGuide();
    initializeCardHovers();
}

// Checkbox functionality for best practices
function initializeCheckboxes() {
    const checkboxes = document.querySelectorAll('.practice-checkbox');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkedCount = document.querySelectorAll('.practice-checkbox:checked').length;
            const totalCount = checkboxes.length;
            
            // Add visual feedback
            if (this.checked) {
                this.parentElement.style.background = 'rgba(33, 128, 141, 0.05)';
                this.parentElement.style.borderRadius = 'var(--radius-sm)';
            } else {
                this.parentElement.style.background = 'transparent';
            }
            
            // Show completion feedback
            if (checkedCount === totalCount) {
                showCompletionMessage();
            }
        });
    });
}

// Show completion message for checklist
function showCompletionMessage() {
    const checklist = document.querySelector('.checklist');
    
    // Remove existing message if any
    const existingMessage = checklist.querySelector('.completion-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const message = document.createElement('div');
    message.className = 'completion-message';
    message.style.cssText = `
        margin-top: var(--space-16);
        padding: var(--space-12);
        background: rgba(var(--color-success-rgb), 0.1);
        border: 1px solid rgba(var(--color-success-rgb), 0.2);
        border-radius: var(--radius-base);
        color: var(--color-success);
        font-weight: var(--font-weight-medium);
        text-align: center;
        animation: slideIn 0.3s ease-out;
    `;
    message.textContent = '✓ 恭喜！您已完成所有最佳实践要点';
    
    checklist.appendChild(message);
    
    // Add slide-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Interactive guide functionality
function initializeInteractiveGuide() {
    const steps = document.querySelectorAll('.step');
    
    steps.forEach((step, index) => {
        step.addEventListener('click', function() {
            // Add click feedback
            this.style.transform = 'translateX(8px)';
            this.style.boxShadow = 'var(--shadow-lg)';
            
            setTimeout(() => {
                this.style.transform = 'translateX(4px)';
                this.style.boxShadow = 'var(--shadow-md)';
            }, 150);
            
            // Highlight current step
            steps.forEach(s => s.classList.remove('highlighted'));
            this.classList.add('highlighted');
            
            // Add highlighting style if not exists
            if (!document.querySelector('#step-highlight-style')) {
                const highlightStyle = document.createElement('style');
                highlightStyle.id = 'step-highlight-style';
                highlightStyle.textContent = `
                    .step.highlighted {
                        border-color: var(--color-primary);
                        background: rgba(var(--color-primary-rgb, 33, 128, 141), 0.05);
                    }
                    .step.highlighted .step-number {
                        background: var(--color-primary);
                        transform: scale(1.1);
                    }
                `;
                document.head.appendChild(highlightStyle);
            }
        });
    });
}

// Card hover interactions
function initializeCardHovers() {
    const grainCards = document.querySelectorAll('.grain-card');
    const problemCards = document.querySelectorAll('.problem-card');
    const methodCards = document.querySelectorAll('.method-card');
    
    // Grain cards interaction
    grainCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderWidth = '2px';
            animatePropertyBarsInCard(this);
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderWidth = '1px';
        });
    });
    
    // Problem cards interaction
    problemCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const severity = this.querySelector('.severity');
            if (severity) {
                severity.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const severity = this.querySelector('.severity');
            if (severity) {
                severity.style.transform = 'scale(1)';
            }
        });
    });
    
    // Method cards interaction
    methodCards.forEach(card => {
        card.addEventListener('click', function() {
            const indicator = this.querySelector('.reliability-indicator');
            if (indicator) {
                indicator.style.animation = 'pulse 0.6s ease-in-out';
                setTimeout(() => {
                    indicator.style.animation = '';
                }, 600);
            }
        });
    });
}

// Animation functions
function initializeAnimations() {
    // Add CSS animations to document
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-slide-in-left {
            animation: slideInLeft 0.6s ease-out;
        }
    `;
    document.head.appendChild(animationStyles);
}

// Animate property bars
function animatePropertyBars() {
    const propertyFills = document.querySelectorAll('.property-fill');
    
    propertyFills.forEach((fill, index) => {
        setTimeout(() => {
            fill.style.transition = 'width 0.8s ease-out';
            // The width is already set in CSS, so we trigger a reflow
            fill.style.width = '0';
            setTimeout(() => {
                fill.style.width = ''; // Reset to CSS value
            }, 50);
        }, index * 100);
    });
}

// Animate property bars in a specific card
function animatePropertyBarsInCard(card) {
    const propertyFills = card.querySelectorAll('.property-fill');
    
    propertyFills.forEach((fill, index) => {
        setTimeout(() => {
            fill.style.transform = 'scaleX(0)';
            fill.style.transformOrigin = 'left';
            fill.style.transition = 'transform 0.6s ease-out';
            
            setTimeout(() => {
                fill.style.transform = 'scaleX(1)';
            }, 50);
        }, index * 150);
    });
}

// Animate cards entrance
function animateCards() {
    const activeSection = document.querySelector('.content-section.active');
    if (!activeSection) return;
    
    const cards = activeSection.querySelectorAll('.grain-card, .problem-card, .method-card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Intersection Observer for scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const elementsToAnimate = document.querySelectorAll('.grain-card, .problem-card, .method-card, .step');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Fabric diagram interaction
function initializeFabricDiagram() {
    const fabricDiagram = document.querySelector('.fabric-diagram');
    
    if (fabricDiagram) {
        fabricDiagram.addEventListener('click', function() {
            // Add a visual effect when clicked
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease-out';
            
            setTimeout(() => {
                this.style.transform = 'scale(1.02)';
            }, 300);
        });
    }
}

// Language toggle functionality (for future enhancement)
function initializeLanguageToggle() {
    // This function could be expanded to include English/Chinese toggle
    // Currently not implemented as the requirement is Chinese-only interface
}

// Utility functions
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

// Window resize handler
window.addEventListener('resize', debounce(() => {
    // Recalculate any responsive elements if needed
    // Currently handled by CSS, but this is here for future enhancements
}, 250));

// Smooth scrolling for any internal links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Initialize scroll animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initializeScrollAnimations();
        initializeFabricDiagram();
    }, 500);
});

// Performance optimization: Lazy load animations
function lazyLoadAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationType = entry.target.getAttribute('data-animate');
                entry.target.classList.add(`animate-${animationType}`);
                animationObserver.unobserve(entry.target);
            }
        });
    });
    
    animatedElements.forEach(el => animationObserver.observe(el));
}

// Error handling for missing elements
function handleMissingElements() {
    const requiredElements = [
        '.nav-btn',
        '.content-section',
        '.practice-checkbox'
    ];
    
    requiredElements.forEach(selector => {
        if (!document.querySelector(selector)) {
            console.warn(`Required element not found: ${selector}`);
        }
    });
}

// Initialize error handling
document.addEventListener('DOMContentLoaded', handleMissingElements);