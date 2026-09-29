import { useEffect, useRef } from 'react';

export function useScrollAnimation(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Optionally unobserve after revealing
            if (options.once !== false) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    // Observe the element itself and all children with reveal classes
    const revealElements = element.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );

    revealElements.forEach((el) => observer.observe(el));

    // Also observe the element if it has a reveal class
    if (
      element.classList.contains('reveal') ||
      element.classList.contains('reveal-left') ||
      element.classList.contains('reveal-right') ||
      element.classList.contains('reveal-scale')
    ) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.once]);

  return ref;
}

export default useScrollAnimation;
