'use client';

import { useEffect } from 'react';

/** gap between items that enter the viewport together */
const STAGGER_MS = 70;
/** never let a stagger grow past this many steps, however many items land at once */
const STAGGER_MAX_STEPS = 4;
/** reveal transition (700ms) + the longest stagger, with headroom */
const SETTLE_FALLBACK_MS = 1200;

/**
 * Progressive enhancement only:
 *  - marks <html> with `.js` so reveal styles apply solely when JS runs
 *  - toggles a solid header once the page is scrolled
 *  - reveals `[data-reveal]` blocks as they enter the viewport. Items that
 *    arrive in the same frame get a short stagger; a lone item gets none,
 *    so nothing ever waits on a sibling that is already on screen.
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
    const timers = new Set<number>();

    // once the drift has finished the element gives its compositor layer back
    // and its hover transitions take over (see `.is-settled` in globals.css)
    const reveal = (el: HTMLElement, step: number) => {
      const delay = Math.min(step, STAGGER_MAX_STEPS) * STAGGER_MS;
      el.style.setProperty('--reveal-delay', `${delay}ms`);
      el.classList.add('is-visible');

      const settle = (event?: TransitionEvent) => {
        if (event && event.target !== el) return; // a child's transition, not ours
        el.removeEventListener('transitionend', settle);
        window.clearTimeout(fallback);
        timers.delete(fallback);
        el.classList.add('is-settled');
      };
      const fallback = window.setTimeout(settle, SETTLE_FALLBACK_MS);
      timers.add(fallback);
      el.addEventListener('transitionend', settle);
    };

    // Anything already on screen must not blink when `.js` is applied.
    const viewportBottom = window.innerHeight;
    for (const el of targets) {
      if (el.getBoundingClientRect().top < viewportBottom) {
        el.classList.add('is-visible', 'is-settled');
      }
    }
    root.classList.add('js');

    let scrolled: boolean | undefined;
    const onScroll = () => {
      const next = window.scrollY > 24;
      if (next === scrolled) return;
      scrolled = next;
      header?.classList.toggle('is-scrolled', next);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    let observer: IntersectionObserver | undefined;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      for (const el of targets) el.classList.add('is-visible', 'is-settled');
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          let step = 0;
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            reveal(entry.target as HTMLElement, step);
            step += 1;
            observer?.unobserve(entry.target);
          }
        },
        { rootMargin: '0px 0px -6% 0px', threshold: 0.1 },
      );
      for (const el of targets) {
        if (!el.classList.contains('is-visible')) observer.observe(el);
      }
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer?.disconnect();
      for (const timer of timers) window.clearTimeout(timer);
    };
  }, []);

  return null;
}
