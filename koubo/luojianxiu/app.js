// Dropped Shoulder Sleeve Application JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation functionality
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.getElementById('back-to-top');

    // Calculator elements
    const bustInput = document.getElementById('bust');
    const easeInput = document.getElementById('ease');
    const dropInput = document.getElementById('drop');
    const calculateBtn = document.getElementById('calculate-btn');
    
    // Result elements
    const armholeDepthEl = document.getElementById('armhole-depth');
    const frontWidthEl = document.getElementById('front-width');
    const backWidthEl = document.getElementById('back-width');
    const armpitWidthEl = document.getElementById('armpit-width');
    const sleeveCapEl = document.getElementById('sleeve-cap');
    const armholePerimeterEl = document.getElementById('armhole-perimeter');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                // Close mobile menu if open
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });

    // Mobile navigation toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Navbar scroll effects
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class to navbar
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Show/hide back to top button
        if (scrollTop > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        // Update active navigation link based on scroll position
        updateActiveNavLink();
    });

    // Back to top button functionality
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Update active navigation link based on current section
    function updateActiveNavLink() {
        const sections = ['relationships', 'parameters', 'principles', 'formulas', 'calculator'];
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            const navLink = document.querySelector(`a[href="#${sectionId}"]`);
            
            if (section && navLink) {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    }

    // Calculator functionality
    calculateBtn.addEventListener('click', calculateParameters);
    
    // Auto-calculate on input change
    bustInput.addEventListener('input', calculateParameters);
    easeInput.addEventListener('input', calculateParameters);
    dropInput.addEventListener('input', calculateParameters);

    function calculateParameters() {
        const bust = parseFloat(bustInput.value) || 88;
        const ease = parseFloat(easeInput.value) || 4;
        const drop = parseFloat(dropInput.value) || 3;

        // Calculate parameters using the provided formulas
        const armholeDepth = (bust / 10) + 2.2 + ease;
        const frontWidth = bust * 0.18;
        const backWidth = bust * 0.18;
        const armpitWidth = bust * 0.14;
        
        // Calculate suggested sleeve cap height (decreases with drop amount)
        const baseSleeveCap = 12; // Base sleeve cap height
        const sleeveCapReduction = drop * 0.8; // Reduction factor
        const sleeveCap = Math.max(baseSleeveCap - sleeveCapReduction, 6); // Minimum 6cm
        
        // Calculate armhole perimeter (approximate)
        const armholePerimeter = (frontWidth + backWidth + armpitWidth) * 1.2;

        // Update display with calculated values
        armholeDepthEl.textContent = armholeDepth.toFixed(1) + ' cm';
        frontWidthEl.textContent = frontWidth.toFixed(1) + ' cm';
        backWidthEl.textContent = backWidth.toFixed(1) + ' cm';
        armpitWidthEl.textContent = armpitWidth.toFixed(1) + ' cm';
        sleeveCapEl.textContent = sleeveCap.toFixed(1) + ' cm';
        armholePerimeterEl.textContent = armholePerimeter.toFixed(1) + ' cm';

        // Add visual feedback
        animateResults();
    }

    function animateResults() {
        const results = document.querySelectorAll('.result-item span');
        results.forEach((result, index) => {
            result.style.transform = 'scale(1.1)';
            result.style.color = 'var(--color-success)';
            
            setTimeout(() => {
                result.style.transform = 'scale(1)';
                result.style.color = 'var(--color-primary)';
            }, 200 + (index * 50));
        });
    }

    // Relationship cards interaction
    const relationshipCards = document.querySelectorAll('.relationship-card');
    relationshipCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-4px) scale(1)';
            }, 150);

            // Show detailed information (could be expanded to show modal)
            showRelationshipDetails(index);
        });

        // Add keyboard support
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    function showRelationshipDetails(index) {
        const relationships = [
            {
                cause: "落肩量增加",
                effect: "袖山高降低", 
                description: "当肩线延长超过自然肩宽时，袖山高度相应降低，形成更平缓的袖山弧线",
                technical: "通常每增加1cm落肩量，袖山高降低0.5-0.8cm"
            },
            {
                cause: "袖山高降低",
                effect: "袖肥增加",
                description: "袖山高度减少直接导致袖子宽松度增加，提供更大的活动空间",
                technical: "袖山高每降低1cm，袖肥增加约1.5-2cm"
            },
            {
                cause: "袖窿深度增加",
                effect: "手臂活动量增加",
                description: "加深袖窿可以提供更大的手臂活动范围，增强穿着舒适性",
                technical: "袖窿深度增加1cm，手臂活动角度增加约5-8度"
            },
            {
                cause: "肩线下移",
                effect: "袖窿宽度扩大",
                description: "肩线位置下移使得袖窿开口更宽，形成宽松的廓形效果",
                technical: "肩线每下移1cm，袖窿宽度增加约0.8cm"
            },
            {
                cause: "胸围放松量",
                effect: "袖窿形状变化",
                description: "胸围放松量的变化直接影响袖窿的整体形状和尺寸比例",
                technical: "放松量每增加2cm，袖窿周长增加约3-4cm"
            }
        ];

        const relationship = relationships[index];
        
        // Create and show notification
        showNotification(
            `${relationship.cause} → ${relationship.effect}`,
            `${relationship.description}\n\n💡 技术要点：${relationship.technical}`
        );
    }

    function showNotification(title, message) {
        // Remove existing notifications
        const existing = document.querySelector('.notification');
        if (existing) {
            existing.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <div class="notification-content">
                <h4>${title}</h4>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <button class="notification-close">×</button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--color-surface);
            border: 1px solid var(--color-card-border);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            max-width: 400px;
            z-index: 2000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            padding: 0;
        `;

        const content = notification.querySelector('.notification-content');
        content.style.cssText = `
            padding: var(--space-20);
        `;

        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 15px;
            background: none;
            border: none;
            font-size: 20px;
            cursor: pointer;
            color: var(--color-text-secondary);
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 10);

        // Auto remove after 5 seconds
        setTimeout(() => {
            removeNotification(notification);
        }, 5000);

        // Close button functionality
        closeBtn.addEventListener('click', () => {
            removeNotification(notification);
        });
    }

    function removeNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    // Parameter cards hover effects
    const parameterCards = document.querySelectorAll('.parameter-card');
    parameterCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--color-primary)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'var(--color-card-border)';
        });
    });

    // Formula cards interaction
    const formulaCards = document.querySelectorAll('.formula-card');
    formulaCards.forEach(card => {
        card.addEventListener('click', function() {
            const formula = this.querySelector('.formula').textContent;
            const name = this.querySelector('h3').textContent;
            
            // Copy formula to clipboard if supported
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(formula).then(() => {
                    showNotification(
                        '公式已复制',
                        `${name} 公式：${formula} 已复制到剪贴板`
                    );
                }).catch(() => {
                    showFormulaDetail(name, formula);
                });
            } else {
                showFormulaDetail(name, formula);
            }
        });

        // Add visual feedback
        card.style.cursor = 'pointer';
        card.setAttribute('title', '点击复制公式');
    });

    function showFormulaDetail(name, formula) {
        showNotification(
            `${name} 公式详情`,
            `公式：${formula}\n\n💡 提示：此公式适用于标准体型，实际应用时需要根据具体情况进行微调。`
        );
    }

    // Principle items animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, observerOptions);

    // Observe principle items
    const principleItems = document.querySelectorAll('.principle-item');
    principleItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // Observe step items
    const stepItems = document.querySelectorAll('.step-item');
    stepItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.6s ease ${index * 0.15}s`;
        observer.observe(item);
    });

    // Initialize calculator with default values
    calculateParameters();

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Press 'C' to focus calculator
        if (e.key.toLowerCase() === 'c' && !e.ctrlKey && !e.altKey) {
            const calculatorSection = document.getElementById('calculator');
            if (calculatorSection && !bustInput.matches(':focus')) {
                e.preventDefault();
                calculatorSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => bustInput.focus(), 500);
            }
        }

        // Press 'T' to go to top
        if (e.key.toLowerCase() === 't' && !e.ctrlKey && !e.altKey) {
            const activeElement = document.activeElement;
            if (activeElement.tagName !== 'INPUT' && activeElement.tagName !== 'TEXTAREA') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    });

    // Add loading states for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.remove('loading');
        });

        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.warn('Failed to load image:', this.src);
        });

        // Add loading class initially
        if (!img.complete) {
            img.classList.add('loading');
        }
    });

    // Performance optimization: Throttle scroll events
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollElements);
            ticking = true;
        }
    }

    function updateScrollElements() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Update navbar
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Update back to top button
        if (scrollTop > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        // Update active nav link
        updateActiveNavLink();
        
        ticking = false;
    }

    // Replace the direct scroll event listener
    window.removeEventListener('scroll', arguments.callee);
    window.addEventListener('scroll', requestTick, { passive: true });

    console.log('落肩袖版型制作应用已成功初始化');
    console.log('键盘快捷键：C - 跳转到计算器，T - 返回顶部');
});