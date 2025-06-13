document.addEventListener('DOMContentLoaded', function() {
    // Initialize expandable category cards
    initCategoryCards();
    
    // Handle form submissions
    initFormHandlers();
    
    // Image loading effects
    initImageLoading();
    
    // Fade-in animations for sections
    initFadeInAnimations();
});

/**
 * Initialize expandable category cards
 */
function initCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        // Make cards accessible via keyboard
        card.setAttribute('tabindex', '0');
        
        // Add click event listener
        card.addEventListener('click', function() {
            toggleCategoryCard(this);
        });
        
        // Add keyboard event listener (Enter key)
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleCategoryCard(this);
            }
        });
    });
}

/**
 * Toggle category card expansion
 */
function toggleCategoryCard(card) {
    // Check if the card is already active
    const isActive = card.classList.contains('active');
    
    // First close all cards
    const allCards = document.querySelectorAll('.category-card');
    allCards.forEach(c => c.classList.remove('active'));
    
    // If the clicked card wasn't active, open it
    if (!isActive) {
        card.classList.add('active');
    }
}

/**
 * Initialize form handlers
 */
function initFormHandlers() {
    const newsletterForm = document.querySelector('.newsletter__form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (validateEmail(email)) {
                // Show success message
                showFormMessage(newsletterForm, '感谢您的订阅！', 'success');
                emailInput.value = '';
            } else {
                // Show error message
                showFormMessage(newsletterForm, '请输入有效的邮箱地址', 'error');
            }
        });
    }
}

/**
 * Validate email format
 */
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Show form success or error message
 */
function showFormMessage(form, message, type) {
    // Remove any existing message
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type === 'success' ? 'form-message--success' : 'form-message--error'}`;
    messageElement.textContent = message;
    
    // Add message after the form
    form.insertAdjacentElement('afterend', messageElement);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 3000);
}

/**
 * Initialize image loading effects
 */
function initImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // When image loads, add loaded class
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // If image is already loaded (from cache)
        if (img.complete) {
            img.classList.add('loaded');
        }
    });
}

/**
 * Initialize fade-in animations for sections
 */
function initFadeInAnimations() {
    // Elements to animate
    const animatedElements = [
        ...document.querySelectorAll('.section-title'),
        ...document.querySelectorAll('.category-card'),
        ...document.querySelectorAll('.tip-card'),
        ...document.querySelectorAll('.chart-container'),
        ...document.querySelectorAll('.cta__content')
    ];
    
    // Set initial opacity to 0
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
        el.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Create IntersectionObserver to detect when elements enter viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all animated elements
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

/**
 * Add CSS class for form message styling
 */
const style = document.createElement('style');
style.textContent = `
  .form-message {
    margin-top: var(--space-8);
    padding: var(--space-8) var(--space-12);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-sm);
    text-align: center;
  }
  
  .form-message--success {
    background-color: rgba(var(--color-success-rgb), 0.1);
    color: var(--color-success);
    border: 1px solid rgba(var(--color-success-rgb), 0.2);
  }
  
  .form-message--error {
    background-color: rgba(var(--color-error-rgb), 0.1);
    color: var(--color-error);
    border: 1px solid rgba(var(--color-error-rgb), 0.2);
  }
`;
document.head.appendChild(style);