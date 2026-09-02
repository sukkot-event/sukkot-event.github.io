'use client';

import { useEffect } from 'react';

/**
 * Progressive enhancement only:
 *  - marks <html> with `.js` so reveal styles apply solely when JS runs
 *  - toggles a solid header once the page is scrolled
 *  - reveals `[data-reveal]` blocks as they enter the viewport
 */
export function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>('.site-header');
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    );
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    // Anything already on screen must not blink when `.js` is applied.
    const viewportBottom = window.innerHeight;
    for (const el of targets) {
      if (el.getBoundingClientRect().top < viewportBottom) {
        el.classList.add('is-visible');
      }
    }
    root.classList.add('js');

    const onScroll = () => {
      header?.classList.toggle('is-scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    let observer: IntersectionObserver | undefined;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      for (const el of targets) el.classList.add('is-visible');
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer?.unobserve(entry.target);
            }
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
      );
      for (const el of targets) {
        if (!el.classList.contains('is-visible')) observer.observe(el);
      }
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer?.disconnect();
    };
  }, []);

  return null;
}
