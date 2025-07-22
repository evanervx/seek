// Hat Pattern Making Application JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initQuickCards();
    initMeasurementTool();
    initHatStructure();
    initHatTypes();
    initCalculator();
    initScrollEffects();
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section, .hero-section');
    
    // Handle navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                navLinks.forEach(nl => nl.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Quick navigation cards
function initQuickCards() {
    const quickCards = document.querySelectorAll('.quick-card');
    
    quickCards.forEach(card => {
        card.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const targetSection = document.getElementById(target);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Measurement tool functionality
function initMeasurementTool() {
    const headCircInput = document.getElementById('headCircumference');
    const sizeCategorySpan = document.getElementById('sizeCategory');
    const recommendedHeightSpan = document.getElementById('recommendedHeight');
    const brimRadiusSpan = document.getElementById('brimRadius');
    
    function updateMeasurements() {
        const headCirc = parseFloat(headCircInput.value) || 58;
        
        // Determine size category
        let category = '标准';
        if (headCirc < 52) category = '小';
        else if (headCirc < 55) category = '中小';
        else if (headCirc > 60) category = '大';
        else if (headCirc > 58) category = '中大';
        
        // Calculate recommended height (head height 25cm + 2cm)
        const recommendedHeight = 27;
        
        // Calculate brim radius (head circumference / (2 * π))
        const brimRadius = (headCirc / (2 * Math.PI)).toFixed(1);
        
        // Update display
        sizeCategorySpan.textContent = category;
        recommendedHeightSpan.textContent = recommendedHeight + 'cm';
        brimRadiusSpan.textContent = brimRadius + 'cm';
    }
    
    headCircInput.addEventListener('input', updateMeasurements);
    
    // Initialize with default values
    updateMeasurements();
}

// Hat structure interaction
function initHatStructure() {
    const interactiveParts = document.querySelectorAll('.interactive-part');
    const componentInfos = document.querySelectorAll('.component-info');
    
    interactiveParts.forEach(part => {
        part.addEventListener('click', function() {
            const component = this.getAttribute('data-component');
            
            // Remove active class from all parts and infos
            interactiveParts.forEach(p => p.classList.remove('active'));
            componentInfos.forEach(info => info.classList.remove('active'));
            
            // Add active class to clicked part and corresponding info
            this.classList.add('active');
            const targetInfo = document.getElementById(component + '-details');
            if (targetInfo) {
                targetInfo.classList.add('active');
            }
        });
    });
}

// Hat types switching
function initHatTypes() {
    const typeTabs = document.querySelectorAll('.type-tab');
    const typeInfos = document.querySelectorAll('.hat-type-info');
    
    typeTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetType = this.getAttribute('data-type');
            
            // Remove active class from all tabs and infos
            typeTabs.forEach(t => t.classList.remove('active'));
            typeInfos.forEach(info => info.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding info
            this.classList.add('active');
            const targetInfo = document.getElementById(targetType + '-info');
            if (targetInfo) {
                targetInfo.classList.add('active');
                targetInfo.classList.add('fade-in');
            }
        });
    });
}

// Calculator functionality
function initCalculator() {
    const calcHeadCirc = document.getElementById('calcHeadCirc');
    const crownPieces = document.getElementById('crownPieces');
    const ease = document.getElementById('ease');
    const brimWidth = document.getElementById('brimWidth');
    
    const pieceWidthSpan = document.getElementById('pieceWidth');
    const bandCircSpan = document.getElementById('bandCirc');
    const brimDiameterSpan = document.getElementById('brimDiameter');
    const brimAreaSpan = document.getElementById('brimArea');
    const crownPiecesVisual = document.getElementById('crownPiecesVisual');
    
    function updateCalculations() {
        const headCirc = parseFloat(calcHeadCirc.value) || 58;
        const pieces = parseInt(crownPieces.value) || 4;
        const easeAmount = parseFloat(ease.value) || 1.5;
        const brimWidthValue = parseFloat(brimWidth.value) || 8;
        
        // Calculate piece width
        const adjustedCirc = headCirc + easeAmount;
        const pieceWidth = (adjustedCirc / pieces).toFixed(1);
        
        // Calculate band circumference
        const bandCirc = adjustedCirc.toFixed(1);
        
        // Calculate brim diameter
        const headRadius = headCirc / (2 * Math.PI);
        const brimDiameter = ((headRadius + brimWidthValue) * 2).toFixed(1);
        
        // Calculate brim area (outer circle - inner circle)
        const outerRadius = headRadius + brimWidthValue;
        const brimArea = (Math.PI * (outerRadius * outerRadius - headRadius * headRadius)).toFixed(0);
        
        // Update display
        pieceWidthSpan.textContent = pieceWidth + 'cm';
        bandCircSpan.textContent = bandCirc + 'cm';
        brimDiameterSpan.textContent = brimDiameter + 'cm';
        brimAreaSpan.textContent = brimArea + 'cm²';
        
        // Update visual representation
        updateCrownPiecesVisual(pieces, pieceWidth);
    }
    
    function updateCrownPiecesVisual(pieces, pieceWidth) {
        crownPiecesVisual.innerHTML = '';
        
        for (let i = 1; i <= pieces; i++) {
            const piece = document.createElement('div');
            piece.className = 'crown-piece';
            piece.setAttribute('data-piece', `第${i}片`);
            
            // Adjust piece width visually based on calculation
            const visualWidth = Math.max(40, Math.min(80, pieceWidth * 3));
            piece.style.width = visualWidth + 'px';
            
            // Add some rotation for visual appeal
            if (pieces > 4) {
                const rotation = (i - 1) * (360 / pieces);
                piece.style.transform = `rotate(${rotation}deg)`;
            }
            
            crownPiecesVisual.appendChild(piece);
        }
    }
    
    // Add event listeners
    [calcHeadCirc, crownPieces, ease, brimWidth].forEach(input => {
        input.addEventListener('input', updateCalculations);
    });
    
    // Initialize with default values
    updateCalculations();
}

// Scroll effects and animations
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Special handling for cards
                if (entry.target.classList.contains('card')) {
                    setTimeout(() => {
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.opacity = '1';
                    }, 100);
                }
            }
        });
    }, observerOptions);
    
    // Observe cards and sections
    const elementsToAnimate = document.querySelectorAll('.card, .quick-card, .tip-card');
    elementsToAnimate.forEach(element => {
        // Set initial state
        element.style.transform = 'translateY(20px)';
        element.style.opacity = '0.8';
        element.style.transition = 'all 0.6s ease';
        
        observer.observe(element);
    });
}

// Utility functions for data formatting and validation
function validateInput(value, min, max, defaultValue) {
    const num = parseFloat(value);
    if (isNaN(num)) return defaultValue;
    return Math.max(min, Math.min(max, num));
}

function formatSize(size) {
    return parseFloat(size).toFixed(1) + 'cm';
}

// Hat data and formulas (from the provided JSON data)
const hatData = {
    measurements: {
        headCircumference: {
            adultFemale: [55, 60],
            adultMale: [57, 62],
            child: [50, 54],
            standard: 58
        },
        headHeight: {
            standard: 25,
            hatHeightBasis: 2
        },
        headArcLength: {
            average: 35
        }
    },
    
    hatTypes: {
        baseball_cap: {
            circumference: [56, 60],
            brimWidth: 7,
            crownHeight: 14,
            structure: "多片拼接+鸭舌帽檐"
        },
        bucket_hat: {
            circumference: [54, 58],
            brimWidth: [7, 9],
            crownHeight: [15, 20],
            structure: "圆形帽顶+圆形帽檐"
        },
        beret: {
            circumference: [54, 58],
            structure: "6-8片拼接",
            feature: "包子形状，可装帽腰或帽檐"
        },
        fedora: {
            circumference: [55, 62],
            brimWidth: [8, 12],
            structure: "圆柱形帽身+平帽顶+圆形帽檐"
        }
    }
};

// Advanced calculation functions
function calculateCrownPieces(headCirc, pieces, ease = 1.5) {
    const adjustedCirc = headCirc + ease;
    return {
        pieceWidth: adjustedCirc / pieces,
        totalCircumference: adjustedCirc,
        pieceAngle: 360 / pieces
    };
}

function calculateBrimDimensions(headCirc, brimWidth) {
    const headRadius = headCirc / (2 * Math.PI);
    const totalRadius = headRadius + brimWidth;
    
    return {
        innerRadius: headRadius,
        outerRadius: totalRadius,
        diameter: totalRadius * 2,
        area: Math.PI * (totalRadius * totalRadius - headRadius * headRadius)
    };
}

// Export functions for potential external use
window.HatPatternApp = {
    hatData,
    calculateCrownPieces,
    calculateBrimDimensions,
    validateInput,
    formatSize
};

// Handle window resize for responsive adjustments
window.addEventListener('resize', function() {
    // Recalculate any position-dependent elements
    const hatDiagrams = document.querySelectorAll('.hat-diagram');
    hatDiagrams.forEach(diagram => {
        // Ensure diagrams remain centered and properly sized
        const containerWidth = diagram.parentElement.offsetWidth;
        if (containerWidth < 300) {
            diagram.style.transform = 'scale(0.8)';
        } else {
            diagram.style.transform = 'scale(1)';
        }
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Allow keyboard navigation for tabs
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const activeTab = document.querySelector('.type-tab.active');
        if (activeTab) {
            const tabs = Array.from(document.querySelectorAll('.type-tab'));
            const currentIndex = tabs.indexOf(activeTab);
            let nextIndex;
            
            if (e.key === 'ArrowRight') {
                nextIndex = (currentIndex + 1) % tabs.length;
            } else {
                nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
            }
            
            tabs[nextIndex].click();
            tabs[nextIndex].focus();
        }
    }
});

// Add touch support for mobile devices
function addTouchSupport() {
    const interactiveElements = document.querySelectorAll('.interactive-part, .quick-card, .type-tab');
    
    interactiveElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

// Initialize touch support on mobile devices
if ('ontouchstart' in window) {
    addTouchSupport();
}

// Performance optimization: Debounce function for input events
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

// Apply debouncing to calculator inputs for better performance
document.addEventListener('DOMContentLoaded', function() {
    const calculatorInputs = document.querySelectorAll('#calcHeadCirc, #ease, #brimWidth');
    calculatorInputs.forEach(input => {
        const originalHandler = input._handler;
        if (originalHandler) {
            input.removeEventListener('input', originalHandler);
            input.addEventListener('input', debounce(originalHandler, 300));
        }
    });
});