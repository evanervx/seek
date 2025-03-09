// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  
  // Prevent zooming on the webpage
  window.addEventListener("wheel", (e)=> {
    const isPinching = e.ctrlKey;
    if(isPinching) e.preventDefault();
  }, { passive: false });
  
  // Add hover effects to cards
  const cards = document.querySelectorAll('.glass-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
  
  // Add subtle animation to gradient elements
  const gradientElements = document.querySelectorAll('.bg-gradient-to-r');
  gradientElements.forEach(element => {
    element.classList.add('animate-pulse');
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Simple dark mode toggle (for future implementation)
function toggleDarkMode() {
  document.body.classList.toggle('light-mode');
}

// Add some subtle parallax effect to hero section
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const heroSection = document.querySelector('.hero-section');
  
  if (heroSection) {
    const parallaxElements = heroSection.querySelectorAll('.glow-card');
    
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${scrollPosition * 0.05}px)`;
    });
  }
});
