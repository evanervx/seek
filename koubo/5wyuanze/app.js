// Animation on Scroll Implementation
class AOS {
    constructor() {
        this.elements = [];
        this.options = {
            offset: 120,
            delay: 0,
            duration: 400,
            easing: 'ease',
            once: true,
            mirror: false
        };
        this.init();
    }
    init() {
        this.elements = Array.from(document.querySelectorAll('[data-aos]'));
        this.observer = new IntersectionObserver(
            this.handleIntersection.bind(this),
            {
                rootMargin: `-${this.options.offset}px 0px`,
                threshold: 0.1
            }
        );
        this.elements.forEach(el => this.observer.observe(el));
        this.refresh();
    }
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = parseInt(element.getAttribute('data-aos-delay')) || 0;
                setTimeout(() => {
                    element.classList.add('aos-animate');
                }, delay);
                if (this.options.once) this.observer.unobserve(element);
            } else if (this.options.mirror) {
                entry.target.classList.remove('aos-animate');
            }
        });
    }
    refresh() {
        const winH = window.innerHeight;
        this.elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < winH - this.options.offset) {
                const delay = parseInt(el.getAttribute('data-aos-delay')) || 0;
                setTimeout(() => el.classList.add('aos-animate'), delay);
            }
        });
    }
}

// Smooth scrolling
class SmoothScroll {
    constructor() {
        document.documentElement.style.scrollBehavior = 'smooth';
    }
}

// Card interactions and ripple
class CardInteractions {
    constructor() {
        this.init();
    }
    init() {
        const tags = document.querySelectorAll('.example-tag, .w-tag, .app-tag');
        tags.forEach(tag => {
            tag.addEventListener('click', e => this.createRipple(e, tag));
        });
    }
    createRipple(e, el) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
        el.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }
}

// Parallax effect for hero decoration
class ParallaxEffect {
    constructor() {
        this.decoration = document.querySelector('.hero-decoration');
        if (this.decoration) window.addEventListener('scroll', () => this.onScroll());
    }
    onScroll() {
        const offset = window.pageYOffset * -0.4;
        this.decoration.style.transform = `translateY(${offset}px)`;
    }
}

// Scroll progress bar
class ScrollProgress {
    constructor() {
        this.bar = document.createElement('div');
        this.bar.id = 'scroll-progress';
        this.bar.style.cssText = 'position:fixed;top:0;left:0;height:3px;width:0;background:linear-gradient(90deg,var(--color-teal-500),var(--color-teal-300));z-index:10000;transition:width 0.1s ease';
        document.body.appendChild(this.bar);
        window.addEventListener('scroll', () => this.update());
    }
    update() {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const percent = (window.pageYOffset / max) * 100;
        this.bar.style.width = percent + '%';
    }
}

// Typing cursor effect for hero title (simple blink)
function addTypingCursor() {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.cssText = 'color:var(--color-teal-300);animation:blink 1s infinite';
    const style = document.createElement('style');
    style.textContent = '@keyframes blink{0%,50%{opacity:1}51%,100%{opacity:0}}';
    document.head.appendChild(style);
    title.appendChild(cursor);
    setTimeout(() => cursor.remove(), 5000);
}

// Page loader
function setupLoader() {
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.style.cssText = 'position:fixed;inset:0;background:var(--color-background);display:flex;align-items:center;justify-content:center;z-index:9999;transition:opacity .4s ease';
    const spinner = document.createElement('div');
    spinner.style.cssText = 'width:48px;height:48px;border:3px solid var(--color-secondary);border-top:3px solid var(--color-primary);border-radius:50%;animation:spin 1s linear infinite';
    const keyframes = document.createElement('style');
    keyframes.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
    document.head.appendChild(keyframes);
    loader.appendChild(spinner);
    document.body.appendChild(loader);
    window.addEventListener('load',() => {
        setTimeout(()=>{loader.style.opacity='0';setTimeout(()=>loader.remove(),400);},800);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    new AOS();
    new SmoothScroll();
    new CardInteractions();
    new ParallaxEffect();
    new ScrollProgress();
    addTypingCursor();
    setupLoader();
});