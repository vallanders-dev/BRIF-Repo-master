// =========================================================================
// BRIF — client interactions. No dependencies. Progressive enhancement:
// everything works without JS; this adds polish on top.
// Respects prefers-reduced-motion throughout.
// =========================================================================
(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- 1. Tactile ripple on buttons ------------------------------------
  function attachRipple(el) {
    el.addEventListener('pointerdown', (e) => {
      if (reduceMotion) return;
      const rect = el.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      el.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  }
  document.querySelectorAll('.btn, .lang-pill a').forEach(attachRipple);

  // ---- 2. Header shadow on scroll --------------------------------------
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---- 3. Scroll-reveal for sections -----------------------------------
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (revealEls.length && !reduceMotion && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    // No JS-motion: show everything immediately.
    revealEls.forEach((el) => el.classList.add('is-revealed'));
  }

  // ---- 4. Animated counters --------------------------------------------
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && !reduceMotion && 'IntersectionObserver' in window) {
    const animate = (el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const dur = 1400;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        el.textContent = prefix + Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = prefix + target + suffix;
      };
      requestAnimationFrame(tick);
    };
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach((el) => cio.observe(el));
  }

  // ---- 5. FAQ / accordion (used on admissions) -------------------------
  document.querySelectorAll('[data-accordion] > .acc-item > .acc-q').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('is-open');
      // close siblings for a clean single-open accordion
      const group = btn.closest('[data-accordion]');
      group.querySelectorAll('.acc-item.is-open').forEach((el) => {
        if (el !== item) el.classList.remove('is-open');
      });
      item.classList.toggle('is-open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });
})();
