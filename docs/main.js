document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const isHome = header && header.classList.contains('header-home');

  // ── Header scroll (home page only) ──────────────────────────────────────
  if (isHome) {
    let isFixed = false;

    function updateHeader() {
      if (window.scrollY > 700 && !isFixed && !mobileMenu.classList.contains('open')) {
        isFixed = true;
        header.classList.add('scrolled');
      } else if (window.scrollY <= 700 && isFixed && !mobileMenu.classList.contains('open')) {
        isFixed = false;
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  // ── Hamburger / mobile menu ──────────────────────────────────────────────
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const opening = !mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open', opening);
      hamburger.classList.toggle('open', opening);

      if (isHome && opening) {
        header.classList.add('scrolled');
      } else if (isHome && !opening && window.scrollY <= 700) {
        header.classList.remove('scrolled');
      }
    });

    // Close on link click (mobile)
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        if (isHome && window.scrollY <= 700) {
          header.classList.remove('scrolled');
        }
      });
    });
  }

  // ── Active nav link ──────────────────────────────────────────────────────
  var current = window.location.pathname.split('/').pop() || 'index.html';
  if (current === '') current = 'index.html';

  document.querySelectorAll('.nav-desktop a, .mobile-menu a').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    if (href === current || (current === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});
