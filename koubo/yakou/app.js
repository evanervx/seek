// Sewing Guide Interactive Functions

// Global state
let isDemoFlipped = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeScrollEffects();
    initializeInteractiveElements();
});

// Toggle the fabric demo animation
function toggleDemo() {
    const fabricDemo = document.getElementById('fabricDemo');
    const seamAllowance = document.getElementById('seamAllowance');
    const button = document.querySelector('.demo-btn');
    
    if (!fabricDemo || !seamAllowance || !button) return;
    
    isDemoFlipped = !isDemoFlipped;
    
    if (isDemoFlipped) {
        // Show flipped state - demonstrate why clipping is needed
        fabricDemo.classList.add('flipped');
        seamAllowance.style.transform = 'rotateY(180deg) translateY(-10px)';
        seamAllowance.style.background = 'rgba(139, 115, 85, 0.8)';
        button.textContent = '显示原始状态';
        button.classList.add('btn--secondary');
        button.classList.remove('btn--primary');
        
        // Add animation to clips to show they help with the flip
        const clips = seamAllowance.querySelectorAll('.clip');
        clips.forEach((clip, index) => {
            setTimeout(() => {
                clip.style.transform = 'scaleY(1.5)';
                clip.style.background = 'var(--color-accent)';
            }, index * 100);
        });
    } else {
        // Show original state
        fabricDemo.classList.remove('flipped');
        seamAllowance.style.transform = 'none';
        seamAllowance.style.background = 'rgba(139, 115, 85, 0.3)';
        button.textContent = '查看翻转效果';
        button.classList.add('btn--primary');
        button.classList.remove('btn--secondary');
        
        // Reset clips
        const clips = seamAllowance.querySelectorAll('.clip');
        clips.forEach(clip => {
            clip.style.transform = 'none';
            clip.style.background = 'var(--color-background)';
        });
    }
}

// Initialize scroll-based animations
function initializeScrollEffects() {
    // Create intersection observer for fade-in animations
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
    
    // Observe all cards for scroll animations
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize other interactive elements
function initializeInteractiveElements() {
    // Add hover effects to curve visuals
    const curveVisuals = document.querySelectorAll('.curve-visual');
    curveVisuals.forEach(visual => {
        visual.addEventListener('mouseenter', () => {
            const clips = visual.querySelectorAll('.straight-clip, .triangle-notch');
            clips.forEach((clip, index) => {
                setTimeout(() => {
                    clip.style.transform += ' scale(1.2)';
                    clip.style.transition = 'transform 0.2s ease';
                }, index * 50);
            });
        });
        
        visual.addEventListener('mouseleave', () => {
            const clips = visual.querySelectorAll('.straight-clip, .triangle-notch');
            clips.forEach(clip => {
                clip.style.transform = clip.style.transform.replace(' scale(1.2)', '');
            });
        });
    });
    
    // Add click interactions to tip cards
    const tipCards = document.querySelectorAll('.tip-card');
    tipCards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'translateY(-2px) scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'translateY(-1px)';
            }, 150);
        });
    });
    
    // Add pulse effect to reason items
    const reasonItems = document.querySelectorAll('.reason-item');
    reasonItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.animation = `fadeInUp 0.5s ease forwards`;
        }, index * 100);
    });
}

// Initialize entrance animations
function initializeAnimations() {
    // Animate header on load
    const header = document.querySelector('.header');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-20px)';
        header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Stagger animation for application items
    const appItems = document.querySelectorAll('.application-item');
    appItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 200 + (index * 100));
    });
}

// Smooth scrolling for anchor links (if any are added)
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add visual feedback for form interactions
function addFormFeedback() {
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(control => {
        control.addEventListener('focus', () => {
            control.parentElement.style.transform = 'scale(1.02)';
        });
        
        control.addEventListener('blur', () => {
            control.parentElement.style.transform = 'scale(1)';
        });
    });
}

// Utility function to create visual emphasis
function emphasizeElement(element, duration = 1000) {
    if (!element) return;
    
    const originalBackground = element.style.backgroundColor;
    const originalTransform = element.style.transform;
    
    element.style.backgroundColor = 'var(--color-accent-light)';
    element.style.transform = 'scale(1.05)';
    element.style.transition = 'all 0.3s ease';
    
    setTimeout(() => {
        element.style.backgroundColor = originalBackground;
        element.style.transform = originalTransform;
    }, duration);
}

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Add keyboard shortcut for demo toggle (spacebar when focused on demo button)
    if (e.code === 'Space' && e.target.classList.contains('demo-btn')) {
        e.preventDefault();
        toggleDemo();
    }
    
    // Add arrow key navigation for tip cards
    if (e.code === 'ArrowRight' || e.code === 'ArrowLeft') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('tip-card')) {
            const tipCards = [...document.querySelectorAll('.tip-card')];
            const currentIndex = tipCards.indexOf(focusedElement);
            let nextIndex;
            
            if (e.code === 'ArrowRight') {
                nextIndex = (currentIndex + 1) % tipCards.length;
            } else {
                nextIndex = (currentIndex - 1 + tipCards.length) % tipCards.length;
            }
            
            tipCards[nextIndex].focus();
            e.preventDefault();
        }
    }
});

// Make tip cards focusable for accessibility
document.addEventListener('DOMContentLoaded', () => {
    const tipCards = document.querySelectorAll('.tip-card');
    tipCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `提示: ${card.querySelector('h4').textContent}`);
    });
});

// Add performance monitoring
function logPerformance() {
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`页面加载时间: ${loadTime}ms`);
    }
}

// Call performance logging after page load
window.addEventListener('load', logPerformance);

// Export functions for potential external use
window.sewingGuide = {
    toggleDemo,
    smoothScroll,
    emphasizeElement
};