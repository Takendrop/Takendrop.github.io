// ========================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ========================================

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - 100) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  
  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

// ========================================
// BACK TO TOP BUTTON
// ========================================

function toggleBackToTop() {
  const backToTop = document.querySelector('.back-to-top');
  
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// ========================================
// EVENT LISTENERS
// ========================================

// Scroll events
window.addEventListener('scroll', () => {
  updateActiveNav();
  revealOnScroll();
  toggleBackToTop();
});

// Back to top button click
document.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', scrollToTop);
  }
  
  // Run once on load
  updateActiveNav();
  revealOnScroll();
});

// Smooth scroll for nav links (extra smooth with offset)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});