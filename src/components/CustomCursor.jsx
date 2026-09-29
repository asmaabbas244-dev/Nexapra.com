import { useEffect, useRef, useCallback } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);
  const isHovering = useRef(false);
  const isClicking = useRef(false);

  const updateCursorPosition = (element, x, y) => {
    if (element) {
      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  };

  /* Check if device supports hover */
  const isTouchDevice = useCallback(() => {
    return window.matchMedia('(hover: none)').matches || 
           window.matchMedia('(pointer: coarse)').matches ||
           window.innerWidth <= 768;
  }, []);

  useEffect(() => {
    if (isTouchDevice()) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add('has-custom-cursor');

    /* Interactive element selectors */
    const interactiveSelector = 'a, button, [role="button"], input, textarea, select, .btn, .glass-card, .option-card, .case-studies__card, .navbar__link, .footer__link, .footer__social';

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      updateCursorPosition(dot, e.clientX, e.clientY);
      if (ringPos.current.x === -100 && ringPos.current.y === -100) {
        ringPos.current = { x: e.clientX, y: e.clientY };
        updateCursorPosition(ring, e.clientX, e.clientY);
      }
    };

    const onMouseOver = (e) => {
      if (e.target.closest(interactiveSelector)) {
        if (!isHovering.current) {
          isHovering.current = true;
          dot.classList.add('hovering');
          ring.classList.add('hovering');
        }
      }
    };

    const onMouseOut = (e) => {
      if (e.target.closest(interactiveSelector)) {
        isHovering.current = false;
        dot.classList.remove('hovering');
        ring.classList.remove('hovering');
      }
    };

    const onMouseDown = () => {
      isClicking.current = true;
      ring.classList.add('clicking');
    };

    const onMouseUp = () => {
      isClicking.current = false;
      ring.classList.remove('clicking');
    };

    /* Lerp the ring position for a smooth trailing effect */
    const animateRing = () => {
      const lerp = 0.28;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

      updateCursorPosition(ring, ringPos.current.x, ringPos.current.y);

      rafId.current = requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    rafId.current = requestAnimationFrame(animateRing);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isTouchDevice]);

  /* Don't render on touch/mobile devices */
  if (typeof window !== 'undefined' && 
      (window.matchMedia('(hover: none)').matches || window.innerWidth <= 768)) {
    return null;
  }

  return (
    <>
      <div className="custom-cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="custom-cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
