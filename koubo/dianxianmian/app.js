// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有导航卡片和内容区域
    const navCards = document.querySelectorAll('.nav-card');
    const contentSections = document.querySelectorAll('.content-section');
    const closeBtns = document.querySelectorAll('.close-btn');
    const contentArea = document.querySelector('.content-area');

    // 当前活跃的section
    let currentActiveSection = null;

    // 初始化图片加载效果
    initImageLoading();

    // 为每个导航卡片添加点击事件
    navCards.forEach(card => {
        card.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            toggleSection(sectionId, this);
        });

        // 键盘导航支持
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const sectionId = this.getAttribute('data-section');
                toggleSection(sectionId, this);
            }
        });

        // 使导航卡片可聚焦
        card.setAttribute('tabindex', '0');
    });

    // 为关闭按钮添加事件
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            closeSection(sectionId);
        });
    });

    // 切换section显示状态
    function toggleSection(sectionId, cardElement) {
        const targetSection = document.getElementById(`section-${sectionId}`);
        
        if (!targetSection) return;

        // 如果点击的是当前活跃的section，则关闭它
        if (currentActiveSection === sectionId) {
            closeSection(sectionId);
            return;
        }

        // 关闭当前活跃的section（如果有）
        if (currentActiveSection) {
            closeSection(currentActiveSection);
        }

        // 打开新的section
        openSection(sectionId, cardElement);
    }

    // 打开section
    function openSection(sectionId, cardElement) {
        const targetSection = document.getElementById(`section-${sectionId}`);
        
        // 更新导航卡片状态
        navCards.forEach(card => card.classList.remove('active'));
        cardElement.classList.add('active');

        // 显示内容区域
        targetSection.style.display = 'block';
        
        // 平滑滚动到内容区域
        setTimeout(() => {
            targetSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
            });
        }, 100);

        // 更新当前活跃section
        currentActiveSection = sectionId;

        // 触发动画
        targetSection.style.animation = 'none';
        targetSection.offsetHeight; // 强制重绘
        targetSection.style.animation = 'slideInUp 0.3s ease-out';
    }

    // 关闭section
    function closeSection(sectionId) {
        const targetSection = document.getElementById(`section-${sectionId}`);
        const cardElement = document.querySelector(`[data-section="${sectionId}"]`);

        if (!targetSection) return;

        // 添加关闭动画
        targetSection.style.animation = 'slideOutDown 0.3s ease-out';
        
        setTimeout(() => {
            targetSection.style.display = 'none';
            targetSection.style.animation = '';
        }, 300);

        // 移除导航卡片的active状态
        if (cardElement) {
            cardElement.classList.remove('active');
        }

        // 重置当前活跃section
        currentActiveSection = null;
    }

    // 图片加载效果
    function initImageLoading() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', function() {
                    this.classList.add('loaded');
                });
                
                img.addEventListener('error', function() {
                    // 如果图片加载失败，仍然显示占位符
                    this.classList.add('loaded');
                    this.style.opacity = '0.3';
                });
            }
        });
    }

    // 添加关闭动画样式
    const slideOutKeyframes = `
        @keyframes slideOutDown {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(30px);
            }
        }
    `;

    // 动态添加CSS动画
    const style = document.createElement('style');
    style.textContent = slideOutKeyframes;
    document.head.appendChild(style);

    // ESC键关闭当前section
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && currentActiveSection) {
            closeSection(currentActiveSection);
        }
    });

    // 点击内容区域外部关闭section（可选功能）
    document.addEventListener('click', function(e) {
        // 如果点击的不是导航卡片、内容区域或其子元素，则关闭当前section
        if (currentActiveSection && 
            !e.target.closest('.nav-card') && 
            !e.target.closest('.content-section') && 
            !e.target.closest('.close-btn')) {
            // 这个功能可能会影响用户体验，所以暂时注释
            // closeSection(currentActiveSection);
        }
    });

    // 添加平滑滚动增强
    function smoothScrollTo(element, duration = 300) {
        const targetPosition = element.offsetTop - 100; // 留出一些顶部空间
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // 添加导航卡片hover音效（可选，需要音频文件）
    function addHoverEffects() {
        navCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                if (!this.classList.contains('active')) {
                    this.style.transform = 'translateY(0) scale(1)';
                }
            });
        });
    }

    // 初始化hover效果
    addHoverEffects();

    // 添加触摸设备支持
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    });

    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // 向上滑动 - 可以添加特定功能
                console.log('Swipe up');
            } else {
                // 向下滑动 - 可以添加特定功能
                console.log('Swipe down');
            }
        }
    }

    // 性能优化：延迟加载非关键图片
    function lazyLoadImages() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // 初始化延迟加载（如果需要）
    if ('IntersectionObserver' in window) {
        lazyLoadImages();
    }

    console.log('Fashion Design Visual Language App initialized successfully!');
});