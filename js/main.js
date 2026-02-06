// ========================================
// CONFIG
// ========================================

const CONFIG = {
  navOffset: 80,          // wysokość navbaru
  revealOffset: 150,      // kiedy pokazać element
  backToTopOffset: 300    // kiedy pokazać przycisk
};

// ========================================
// SELECTORS
// ========================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const reveals = document.querySelectorAll('.reveal');
const backToTopBtn = document.querySelector('.back-to-top');

// ========================================
// ACTIVE NAVIGATION
// ========================================

function updateActiveNav(scrollY) {
  let currentSection = null;

  sections.forEach(section => {
    const top = section.offsetTop - CONFIG.navOffset;
    const bottom = top + section.offsetHeight;

    if (scrollY >= top && scrollY < bottom) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      'active',
      link.getAttribute('href') === `#${currentSection}`
    );
  });
}

// ========================================
// SCROLL REVEAL
// ========================================

function handleReveal() {
  reveals.forEach(element => {
    const rect = element.getBoundingClientRect();

    if (rect.top < window.innerHeight - CONFIG.revealOffset) {
      element.classList.add('active');
    }
  });
}

// ========================================
// BACK TO TOP
// ========================================

function toggleBackToTop(scrollY) {
  backToTopBtn?.classList.toggle(
    'visible',
    scrollY > CONFIG.backToTopOffset
  );
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// SCROLL HANDLER (ONE SOURCE OF TRUTH)
// ========================================

function onScroll() {
  const scrollY = window.scrollY;

  updateActiveNav(scrollY);
  handleReveal();
  toggleBackToTop(scrollY);
}

// ========================================
// SMOOTH NAV SCROLL
// ========================================

function setupNavLinks() {
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;

      const targetY =
        target.offsetTop - CONFIG.navOffset + 1;

      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
    });
  });
}

// ========================================
// INIT
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', onScroll);
  onScroll(); // initial state

  setupNavLinks();

  backToTopBtn?.addEventListener('click', scrollToTop);
});
