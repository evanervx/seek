// Interactive functionality for the clothing tech vs aesthetics comparison app

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const viewToggleButtons = document.querySelectorAll('.toggle-btn');
    const dimensionButtons = document.querySelectorAll('.dimension-btn');
    const comparisonContainer = document.querySelector('.comparison-container');
    const sidePanels = document.querySelectorAll('.side-panel');
    const sectionCards = document.querySelectorAll('.section-card');

    // State management
    let currentView = 'comparison';
    let currentDimension = 'all';
    let activePanelIndex = 0;

    // Initialize the application
    init();

    function init() {
        setupViewToggle();
        setupDimensionSelector();
        setupCardAnimations();
        setupHoverEffects();
        
        // Add initial animation delay to cards
        animateCardsIn();
    }

    // View Toggle Functionality
    function setupViewToggle() {
        viewToggleButtons.forEach(button => {
            button.addEventListener('click', function() {
                const view = this.dataset.view;
                switchView(view);
                updateActiveToggleButton(this);
            });
        });
    }

    function switchView(view) {
        currentView = view;
        
        if (view === 'comparison') {
            comparisonContainer.classList.remove('separate-view');
            sidePanels.forEach(panel => {
                panel.classList.remove('active');
                panel.style.display = '';
            });
        } else if (view === 'separate') {
            comparisonContainer.classList.add('separate-view');
            showActivePanel();
            
            // Auto-switch between panels in separate view
            startPanelRotation();
        }
    }

    function updateActiveToggleButton(activeButton) {
        viewToggleButtons.forEach(btn => btn.classList.remove('active'));
        activeButton.classList.add('active');
    }

    function showActivePanel() {
        sidePanels.forEach((panel, index) => {
            panel.classList.remove('active');
            if (index === activePanelIndex) {
                panel.classList.add('active');
            }
        });
    }

    function startPanelRotation() {
        // Only rotate panels in separate view
        if (currentView === 'separate') {
            setTimeout(() => {
                activePanelIndex = (activePanelIndex + 1) % sidePanels.length;
                showActivePanel();
                
                // Continue rotation
                if (currentView === 'separate') {
                    startPanelRotation();
                }
            }, 5000); // Switch every 5 seconds
        }
    }

    // Dimension Selector Functionality
    function setupDimensionSelector() {
        dimensionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const dimension = this.dataset.dimension;
                switchDimension(dimension);
                updateActiveDimensionButton(this);
            });
        });
    }

    function switchDimension(dimension) {
        currentDimension = dimension;
        comparisonContainer.setAttribute('data-dimension', dimension);
        
        // Add fade effect during transition
        comparisonContainer.style.opacity = '0.7';
        
        setTimeout(() => {
            comparisonContainer.style.opacity = '1';
            // Re-animate visible cards
            const visibleCards = document.querySelectorAll('.section-card:not([style*="display: none"])');
            animateCards(visibleCards);
        }, 200);
    }

    function updateActiveDimensionButton(activeButton) {
        dimensionButtons.forEach(btn => btn.classList.remove('active'));
        activeButton.classList.add('active');
    }

    // Card Animations
    function setupCardAnimations() {
        // Add intersection observer for scroll animations
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

        sectionCards.forEach(card => {
            observer.observe(card);
        });
    }

    function animateCardsIn() {
        sectionCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    function animateCards(cards) {
        cards.forEach((card, index) => {
            card.style.transform = 'scale(0.95)';
            card.style.opacity = '0.7';
            
            setTimeout(() => {
                card.style.transition = 'all 0.4s ease';
                card.style.transform = 'scale(1)';
                card.style.opacity = '1';
            }, index * 50);
        });
    }

    // Enhanced Hover Effects
    function setupHoverEffects() {
        // Add enhanced hover effects to career items
        const careerItems = document.querySelectorAll('.career-item');
        careerItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(10px) scale(1.02)';
                this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0) scale(1)';
                this.style.boxShadow = '';
            });
        });

        // Add hover effects to tags
        const tags = document.querySelectorAll('.tag');
        tags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1) rotate(2deg)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
            });
        });

        // Add hover effects to recommendation cards
        const recCards = document.querySelectorAll('.rec-card');
        recCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Add click effect to dimension buttons
        dimensionButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Add ripple effect
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255,255,255,0.6)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                ripple.style.left = '50%';
                ripple.style.top = '50%';
                ripple.style.width = '20px';
                ripple.style.height = '20px';
                ripple.style.marginLeft = '-10px';
                ripple.style.marginTop = '-10px';
                
                this.style.position = 'relative';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // Add smooth scrolling for navigation
    function smoothScrollTo(element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key >= '1' && e.key <= '5') {
            const index = parseInt(e.key) - 1;
            if (dimensionButtons[index]) {
                dimensionButtons[index].click();
            }
        }
        
        if (e.key === 'Tab' && currentView === 'separate') {
            // Switch panels with Tab in separate view
            setTimeout(() => {
                activePanelIndex = (activePanelIndex + 1) % sidePanels.length;
                showActivePanel();
            }, 100);
        }
    });

    // Add loading animation for images
    const radarChart = document.querySelector('.radar-chart');
    if (radarChart) {
        radarChart.addEventListener('load', function() {
            this.style.opacity = '0';
            this.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                this.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                this.style.opacity = '1';
                this.style.transform = 'scale(1)';
            }, 100);
        });
    }

    // Add dynamic content highlighting based on scroll position
    function setupScrollEffects() {
        const sections = document.querySelectorAll('.section-card, .summary-section, .chart-section');
        
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        }, {
            threshold: 0.3
        });

        sections.forEach(section => {
            scrollObserver.observe(section);
        });
    }

    setupScrollEffects();

    // Add performance optimization for animations
    let ticking = false;
    
    function updateAnimations() {
        // Batch animation updates
        requestAnimationFrame(() => {
            ticking = false;
        });
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    });

    // Add error handling for image loading
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.warn('Failed to load image:', this.src);
        });
    });

    // Export functions for potential external use
    window.clothingApp = {
        switchView,
        switchDimension,
        getCurrentView: () => currentView,
        getCurrentDimension: () => currentDimension
    };

    console.log('制衣技术与穿衣审美对比应用已加载完成！');
});

// CSS for additional animations
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .in-view {
        transform: translateY(0) !important;
        opacity: 1 !important;
    }
    
    .section-card {
        transition: all 0.3s ease;
    }
    
    .section-card:not(.in-view) {
        transform: translateY(20px);
        opacity: 0.7;
    }
`;

document.head.appendChild(style);