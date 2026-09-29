import gsap from "gsap";

/**
 * Animate a counter from 0 to target value
 */
export function animateCounter(element, target, duration = 2, suffix = "") {
  const obj = { value: 0 };
  gsap.to(obj, {
    value: target,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      element.textContent = Math.round(obj.value).toLocaleString() + suffix;
    },
  });
}

/**
 * Staggered reveal for a list of elements
 */
export function staggerReveal(elements, options = {}) {
  return gsap.fromTo(
    elements,
    { y: options.y || 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: options.duration || 0.8,
      stagger: options.stagger || 0.15,
      ease: options.ease || "power3.out",
      delay: options.delay || 0,
      clearProps: "transform", // FIX: Removed 'opacity' so the element stays visible
    },
  );
}

/**
 * Parallax effect on mouse move
 */
export function setupParallax(container, elements, intensity = 0.02) {
  const handleMouseMove = (e) => {
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * intensity;
    const y = (e.clientY - rect.top - rect.height / 2) * intensity;

    elements.forEach((el, i) => {
      const factor = (i + 1) * 0.5;
      gsap.to(el, {
        x: x * factor,
        y: y * factor,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  };

  container.addEventListener("mousemove", handleMouseMove);
  return () => container.removeEventListener("mousemove", handleMouseMove);
}

/**
 * Smooth text reveal animation
 */
export function textReveal(element, options = {}) {
  return gsap.fromTo(
    element,
    { y: options.y || 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: options.duration || 1,
      ease: options.ease || "power3.out",
      delay: options.delay || 0,
      clearProps: "transform", // FIX: Removed 'opacity' here as well
    },
  );
}
