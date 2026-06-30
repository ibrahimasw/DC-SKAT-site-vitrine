/* ════════════════════════════════════════════════════
   MAIN.JS — DC SKAT — Scripts communs
   Importé par toutes les pages du site
   ════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── BURGER MENU MOBILE ──────────────────────────────
  const burgerBtn = document.getElementById('burgerBtn');
  const navMobile = document.getElementById('navMobile');

  if (burgerBtn && navMobile) {
    burgerBtn.addEventListener('click', () => {
      const isOpen = navMobile.classList.toggle('open');
      burgerBtn.classList.toggle('open', isOpen);
      burgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Fermer au clic sur un lien
    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMobile.classList.remove('open');
        burgerBtn.classList.remove('open');
        burgerBtn.setAttribute('aria-expanded', false);
      });
    });
  }

  // ─── LIEN ACTIF DANS LA NAV ──────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href').replace('/', '');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ─── HEADER COMPACT AU SCROLL ────────────────────────
  const header = document.querySelector('.header');
  if (header) {
    const toggleScrolled = () => {
      header.classList.toggle('scrolled', window.scrollY > 12);
    };
    toggleScrolled();
    window.addEventListener('scroll', toggleScrolled, { passive: true });
  }

});
