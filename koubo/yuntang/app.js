// 小白熨烫指南 - JavaScript 交互功能

document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    initMobileMenu();
    
    // 平滑滚动导航
    initSmoothScrolling();
    
    // FAQ 手风琴功能
    initAccordion();
    
    // 滚动时高亮当前导航项
    initScrollHighlight();
    
    // 添加滚动动画效果
    initScrollAnimations();
});

// 移动端菜单功能
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');
    
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function() {
            navList.classList.toggle('active');
            
            // 切换汉堡菜单图标动画
            menuToggle.classList.toggle('active');
        });
        
        // 点击导航链接后关闭移动菜单
        const navLinks = navList.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navList.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
        
        // 点击外部区域关闭菜单
        document.addEventListener('click', function(event) {
            if (!menuToggle.contains(event.target) && !navList.contains(event.target)) {
                navList.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }
}

// 平滑滚动导航
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// FAQ 手风琴功能
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains('active');
            
            // 关闭所有手风琴项
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // 如果当前项未激活，则激活它
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });
}

// 滚动时高亮当前导航项
function initScrollHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightCurrentSection() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // 移除所有导航链接的激活状态
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // 添加当前部分对应导航链接的激活状态
                const currentNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (currentNavLink) {
                    currentNavLink.classList.add('active');
                }
            }
        });
    }
    
    // 监听滚动事件
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(highlightCurrentSection, 10);
    });
    
    // 初始化时执行一次
    highlightCurrentSection();
}

// 滚动动画效果
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // 观察所有卡片和主要内容区域
    const animatedElements = document.querySelectorAll('.card, .hero-content, .section-title');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// 添加卡片悬停效果增强
function initCardInteractions() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// 添加表格响应式处理
function initResponsiveTables() {
    const tables = document.querySelectorAll('.fabric-table');
    
    tables.forEach(table => {
        // 为移动端添加滚动容器
        if (window.innerWidth <= 768) {
            const wrapper = document.createElement('div');
            wrapper.style.overflowX = 'auto';
            wrapper.style.webkitOverflowScrolling = 'touch';
            
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        }
    });
}

// 处理窗口大小变化
window.addEventListener('resize', function() {
    // 重新处理响应式表格
    initResponsiveTables();
    
    // 如果窗口变大，关闭移动菜单
    if (window.innerWidth > 768) {
        const navList = document.getElementById('navList');
        const menuToggle = document.getElementById('menuToggle');
        
        if (navList && menuToggle) {
            navList.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    }
});

// 添加键盘导航支持
function initKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // ESC 键关闭移动菜单
        if (e.key === 'Escape') {
            const navList = document.getElementById('navList');
            const menuToggle = document.getElementById('menuToggle');
            
            if (navList && menuToggle && navList.classList.contains('active')) {
                navList.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
        
        // Enter 或 Space 键触发手风琴
        if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('accordion-header')) {
            e.preventDefault();
            e.target.click();
        }
    });
}

// 添加无障碍功能
function initAccessibility() {
    // 为手风琴添加 ARIA 属性
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach((header, index) => {
        header.setAttribute('aria-expanded', 'false');
        header.setAttribute('aria-controls', `content-${index}`);
        
        const content = header.nextElementSibling;
        if (content) {
            content.setAttribute('id', `content-${index}`);
            content.setAttribute('role', 'region');
        }
    });
    
    // 更新手风琴状态时更新 ARIA 属性
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('accordion-header')) {
            const accordionItem = e.target.parentElement;
            const isActive = accordionItem.classList.contains('active');
            e.target.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        }
    });
}

// 添加返回顶部功能
function initBackToTop() {
    // 创建返回顶部按钮
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', '返回顶部');
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--color-primary);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // 监听滚动显示/隐藏按钮
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // 点击返回顶部
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScrolling();
    initAccordion();
    initScrollHighlight();
    initScrollAnimations();
    initCardInteractions();
    initResponsiveTables();
    initKeyboardNavigation();
    initAccessibility();
    initBackToTop();
});

// CSS 动画类（通过 JavaScript 添加）
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
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
    
    .nav-link.active {
        background: rgba(255, 255, 255, 0.2);
        font-weight: var(--font-weight-semibold);
    }
    
    .back-to-top:hover {
        background: var(--color-primary-hover);
        transform: translateY(-2px);
    }
    
    .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);