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

  // ---- 6. Read-more modals ----------------------------------------------
  // Tracks whichever element had focus before a modal opened, so it can be
  // restored on close instead of dropping keyboard users back at the top.
  let modalTrigger = null;

  const getFocusable = (modal) =>
    Array.from(modal.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    ));

  const openModal = (modal, trigger) => {
    modalTrigger = trigger || document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    const closeBtn = modal.querySelector('[data-modal-close]');
    if (closeBtn) closeBtn.focus();
  };
  const closeModal = (modal) => {
    modal.hidden = true;
    document.body.style.overflow = '';
    if (modalTrigger) {
      modalTrigger.focus();
      modalTrigger = null;
    }
  };

  document.querySelectorAll('[data-modal-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = document.getElementById(btn.dataset.modalOpen);
      if (modal) openModal(modal, btn);
    });
  });

  document.querySelectorAll('[data-modal-backdrop]').forEach((backdrop) => {
    // Click on the backdrop itself (not its content box) closes it.
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal(backdrop);
    });
    const closeBtn = backdrop.querySelector('[data-modal-close]');
    if (closeBtn) closeBtn.addEventListener('click', () => closeModal(backdrop));
  });

  document.addEventListener('keydown', (e) => {
    const openBackdrop = document.querySelector('[data-modal-backdrop]:not([hidden])');
    if (!openBackdrop) return;

    if (e.key === 'Escape') {
      closeModal(openBackdrop);
      return;
    }

    // Trap Tab focus inside the open dialog so it can't wander into the page behind it.
    if (e.key === 'Tab') {
      const focusable = getFocusable(openBackdrop);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // ---- 7. Homepage hero photo rotation -----------------------------------
  // Crossfades between the hero photos in place. The opacity transition is
  // already collapsed to near-zero by the prefers-reduced-motion rule above,
  // so this degrades to an instant swap for those users automatically.
  const heroRotate = document.querySelector('[data-hero-rotate]');
  if (heroRotate) {
    const heroPhotos = heroRotate.querySelectorAll('.hero-photo');
    if (heroPhotos.length > 1) {
      let heroIndex = 0;
      setInterval(() => {
        heroPhotos[heroIndex].classList.remove('is-active');
        heroIndex = (heroIndex + 1) % heroPhotos.length;
        heroPhotos[heroIndex].classList.add('is-active');
      }, 150000); // 2 minutes 30 seconds
    }
  }
})();
