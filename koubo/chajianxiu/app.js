document.addEventListener('DOMContentLoaded', function() {
    // Get all accordion headers
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    // Add click event listeners to each accordion header
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            const icon = this.querySelector('.accordion-icon');
            
            // Check if this accordion is currently active
            const isActive = this.classList.contains('active');
            
            // Close all other accordions first
            accordionHeaders.forEach(otherHeader => {
                const otherTargetId = otherHeader.getAttribute('data-target');
                const otherContent = document.getElementById(otherTargetId);
                const otherIcon = otherHeader.querySelector('.accordion-icon');
                
                if (otherHeader !== this && otherHeader.classList.contains('active')) {
                    otherHeader.classList.remove('active');
                    otherContent.classList.remove('active');
                    otherContent.style.maxHeight = '0';
                    otherIcon.textContent = '+';
                }
            });
            
            // Toggle current accordion
            if (isActive) {
                // Close current accordion
                this.classList.remove('active');
                targetContent.classList.remove('active');
                targetContent.style.maxHeight = '0';
                icon.textContent = '+';
            } else {
                // Open current accordion
                this.classList.add('active');
                targetContent.classList.add('active');
                // Set max-height to the scroll height to allow smooth transition
                targetContent.style.maxHeight = targetContent.scrollHeight + 'px';
                icon.textContent = '×';
            }
        });
        
        // Add keyboard support (Enter and Space keys)
        header.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.click();
            }
        });
    });
    
    // Initialize all accordion contents to be closed
    const accordionContents = document.querySelectorAll('.accordion-content');
    accordionContents.forEach(content => {
        content.style.maxHeight = '0';
    });
    
    // Add smooth scrolling for any anchor links (if needed in future)
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add intersection observer for fade-in animations (optional enhancement)
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
    
    // Observe principle items for subtle entrance animation
    const principleItems = document.querySelectorAll('.principle-item');
    principleItems.forEach((item, index) => {
        // Set initial state
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        // Observe for intersection
        observer.observe(item);
    });
    
    // Also observe the diagram section
    const diagramSection = document.querySelector('.diagram-section');
    if (diagramSection) {
        diagramSection.style.opacity = '0';
        diagramSection.style.transform = 'translateY(20px)';
        diagramSection.style.transition = 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s';
        observer.observe(diagramSection);
    }
    
    // Handle window resize for responsive adjustments
    window.addEventListener('resize', function() {
        // Reset any accordion max-heights on resize to ensure proper display
        const activeContents = document.querySelectorAll('.accordion-content.active');
        activeContents.forEach(content => {
            // Temporarily remove transition
            const originalTransition = content.style.transition;
            content.style.transition = 'none';
            // Reset and recalculate max-height
            content.style.maxHeight = 'auto';
            const naturalHeight = content.scrollHeight;
            content.style.maxHeight = '0';
            // Force a reflow
            content.offsetHeight;
            // Restore transition and set proper max-height
            content.style.transition = originalTransition;
            content.style.maxHeight = naturalHeight + 'px';
        });
    });
    
    // Add a subtle loading effect
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    
    // Fade in the page after a brief delay
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});