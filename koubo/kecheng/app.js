// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initChecklistFunctionality();
    initSmoothScrolling();
    initScrollHighlight();
});

// Checklist functionality
function initChecklistFunctionality() {
    const checkboxes = document.querySelectorAll('.checklist-checkbox');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const recommendationText = document.getElementById('recommendation-text');
    
    const totalItems = checkboxes.length;
    
    // Add event listeners to all checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateProgress);
    });
    
    function updateProgress() {
        const checkedItems = document.querySelectorAll('.checklist-checkbox:checked');
        const checkedCount = checkedItems.length;
        const progressPercentage = (checkedCount / totalItems) * 100;
        
        // Update progress bar
        progressFill.style.width = `${progressPercentage}%`;
        progressText.textContent = `${checkedCount}/${totalItems}`;
        
        // Update recommendation based on progress
        updateRecommendation(checkedCount, totalItems);
        
        // Add visual feedback
        if (checkedCount > 0) {
            progressFill.style.opacity = '1';
        }
    }
    
    function updateRecommendation(checked, total) {
        let recommendation = '';
        const percentage = (checked / total) * 100;
        
        if (percentage === 0) {
            recommendation = '请完成上述清单项目，我们将为您提供个性化建议。';
        } else if (percentage < 25) {
            recommendation = '🔍 <strong>开始评估</strong><br>您已经开始评估课程了！继续完成更多项目以获得更准确的建议。建议优先关注课程内容和讲师资质部分。';
        } else if (percentage < 50) {
            recommendation = '📈 <strong>继续深入</strong><br>不错的开始！您对课程有了初步了解。建议重点关注学习体验和技术支持，这些因素会直接影响您的学习效果。';
        } else if (percentage < 75) {
            recommendation = '✅ <strong>评估良好</strong><br>您的评估很全面！如果大部分项目都符合要求，这个课程值得考虑。建议最后确认价值保障部分，确保投资回报。';
        } else if (percentage < 100) {
            recommendation = '🎯 <strong>接近完成</strong><br>您的评估非常详细！完成剩余项目后，如果大部分答案为"是"，这个课程很可能适合您。准备好开始学习之旅吧！';
        } else {
            recommendation = '🏆 <strong>评估完成</strong><br>完美！您已经全面评估了课程。如果大部分项目都满足要求，恭喜您找到了优质课程。如果有多个不满足的项目，建议继续寻找更合适的选择。';
        }
        
        recommendationText.innerHTML = recommendation;
        
        // Add visual feedback to result section
        const resultSection = document.getElementById('checklist-result');
        if (percentage > 0) {
            resultSection.style.border = `2px solid var(--color-primary)`;
            resultSection.style.background = 'rgba(var(--color-success-rgb), 0.05)';
        } else {
            resultSection.style.border = '1px solid var(--color-card-border)';
            resultSection.style.background = 'var(--color-surface)';
        }
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80; // Account for sticky nav
                const elementPosition = targetSection.offsetTop;
                const offsetPosition = elementPosition - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Add visual feedback
                this.style.background = 'var(--color-primary)';
                this.style.color = 'var(--color-btn-primary-text)';
                
                setTimeout(() => {
                    this.style.background = '';
                    this.style.color = '';
                }, 300);
            }
        });
    });
}

// Highlight active navigation item based on scroll position
function initScrollHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
    
    function highlightNavigation() {
        let current = '';
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Add CSS for active state
    const style = document.createElement('style');
    style.textContent = `
        .nav-list a.active {
            background: var(--color-primary) !important;
            color: var(--color-btn-primary-text) !important;
        }
    `;
    document.head.appendChild(style);
    
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Initial call
}

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.principle-card, .platform-card, .tip-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-4px)';
        });
    });
});

// Add intersection observer for animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const elementsToAnimate = document.querySelectorAll('.principle-card, .pitfall-card, .platform-card, .tip-card, .checklist-category');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Add click tracking for platform cards
document.addEventListener('DOMContentLoaded', function() {
    const platformCards = document.querySelectorAll('.platform-card');
    
    platformCards.forEach(card => {
        card.addEventListener('click', function() {
            const platformName = this.querySelector('.platform-header h3').textContent;
            
            // Add visual feedback
            this.style.borderColor = 'var(--color-primary)';
            this.style.boxShadow = '0 0 0 3px rgba(var(--color-success-rgb), 0.2)';
            
            setTimeout(() => {
                this.style.borderColor = '';
                this.style.boxShadow = '';
            }, 1000);
            
            // Could add analytics tracking here
            console.log(`User clicked on platform: ${platformName}`);
        });
    });
});

// Add warning animations for pitfall cards
document.addEventListener('DOMContentLoaded', function() {
    const pitfallCards = document.querySelectorAll('.pitfall-card');
    
    pitfallCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const warningIcon = this.querySelector('.warning-icon');
            if (warningIcon) {
                warningIcon.style.animation = 'shake 0.5s ease-in-out';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const warningIcon = this.querySelector('.warning-icon');
            if (warningIcon) {
                warningIcon.style.animation = '';
            }
        });
    });
    
    // Add shake animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-2px); }
            75% { transform: translateX(2px); }
        }
    `;
    document.head.appendChild(style);
});

// Add progress celebration effect
function celebrateProgress(percentage) {
    if (percentage === 100) {
        // Create celebration effect
        const celebration = document.createElement('div');
        celebration.innerHTML = '🎉';
        celebration.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 4rem;
            z-index: 1000;
            animation: celebrate 2s ease-out forwards;
            pointer-events: none;
        `;
        
        document.body.appendChild(celebration);
        
        // Add celebration animation
        const celebrationStyle = document.createElement('style');
        celebrationStyle.textContent = `
            @keyframes celebrate {
                0% { 
                    opacity: 0; 
                    transform: translate(-50%, -50%) scale(0.5); 
                }
                50% { 
                    opacity: 1; 
                    transform: translate(-50%, -50%) scale(1.2); 
                }
                100% { 
                    opacity: 0; 
                    transform: translate(-50%, -50%) scale(1); 
                }
            }
        `;
        document.head.appendChild(celebrationStyle);
        
        setTimeout(() => {
            celebration.remove();
            celebrationStyle.remove();
        }, 2000);
    }
}

// Enhanced progress update with celebration
document.addEventListener('DOMContentLoaded', function() {
    const originalUpdateProgress = window.updateProgress;
    
    if (typeof updateProgress === 'function') {
        window.updateProgress = function() {
            originalUpdateProgress();
            
            const progressText = document.getElementById('progress-text');
            const [current, total] = progressText.textContent.split('/').map(Number);
            const percentage = (current / total) * 100;
            
            celebrateProgress(percentage);
        };
    }
});

// Add keyboard navigation support
document.addEventListener('DOMContentLoaded', function() {
    const checklistItems = document.querySelectorAll('.checklist-item');
    
    checklistItems.forEach(item => {
        item.setAttribute('tabindex', '0');
        
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const checkbox = this.querySelector('.checklist-checkbox');
                checkbox.checked = !checkbox.checked;
                checkbox.dispatchEvent(new Event('change'));
            }
        });
    });
});

// Add responsive behavior for mobile devices
document.addEventListener('DOMContentLoaded', function() {
    function handleMobileOptimizations() {
        const isMobile = window.innerWidth < 768;
        const heroVisual = document.querySelector('.hero-visual');
        
        if (isMobile && heroVisual) {
            // Reduce animation intensity on mobile for better performance
            heroVisual.style.animation = 'none';
        }
    }
    
    handleMobileOptimizations();
    window.addEventListener('resize', handleMobileOptimizations);
});

// Console welcome message
console.log(`
🎨 精明选择线上服装制作课程指南
📚 帮助您找到最适合的在线学习平台
✨ 祝您学习顺利！

如果您发现任何问题或有改进建议，欢迎反馈！
`);

// Export functions for potential external use
window.FashionCourseGuide = {
    updateProgress: updateProgress,
    celebrateProgress: celebrateProgress
};