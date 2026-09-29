import { useState, useEffect, useCallback } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote:
      'NexAppra transformed our outdated platform into a modern, scalable solution. The team\'s expertise in React and cloud architecture was exceptional.',
    name: 'Sarah Chen',
    role: 'CTO at TechFlow',
    initials: 'SC',
  },
  {
    id: 2,
    quote:
      'Working with NexAppra was a game-changer. They delivered our mobile app 3 weeks ahead of schedule with incredible quality.',
    name: 'Marcus Johnson',
    role: 'Founder of HealthPulse',
    initials: 'MJ',
  },
  {
    id: 3,
    quote:
      'The AI solution NexAppra built for us automated 70% of our manual processes. ROI was visible within the first month.',
    name: 'Priya Sharma',
    role: 'VP Engineering at DataSync',
    initials: 'PS',
  },
  {
    id: 4,
    quote:
      'From design to deployment, NexAppra\'s attention to detail and communication was outstanding. Highly recommend!',
    name: 'James Wilson',
    role: 'CEO at ShopStream',
    initials: 'JW',
  },
];

/* SVG star icon */
function StarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 1.5l2.47 5.01L17 7.34l-4 3.9.94 5.51L9 14.26l-4.94 2.49.94-5.51-4-3.9 5.53-.83L9 1.5z"
        fill="var(--color-primary)"
      />
    </svg>
  );
}

export default function Testimonials() {
  const sectionRef = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;

  const goTo = useCallback(
    (index) => {
      setActiveIndex(((index % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  /* Auto-advance every 5 seconds */
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  return (
    <section id="testimonials" className="section testimonials" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="testimonials__header reveal">
          <span className="section-label">Client Love</span>
          <h2 className="section-title">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>

        {/* Slider */}
        <div
          className="testimonials__slider reveal delay-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="testimonials__track">
            {testimonials.map((t, index) => {
              let position = 'testimonials__card--hidden';
              if (index === activeIndex) position = 'testimonials__card--active';

              return (
                <article
                  key={t.id}
                  className={`testimonials__card glass-card ${position}`}
                  id={`testimonial-card-${t.id}`}
                  aria-hidden={index !== activeIndex}
                >
                  {/* Decorative quote marks */}
                  <span className="testimonials__quote-mark" aria-hidden="true">
                    &ldquo;
                  </span>

                  {/* Quote */}
                  <blockquote className="testimonials__quote">
                    {t.quote}
                  </blockquote>

                  {/* Stars */}
                  <div className="testimonials__stars" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="testimonials__author">
                    <div className="testimonials__avatar">
                      {t.initials}
                    </div>
                    <div className="testimonials__author-info">
                      <span className="testimonials__name">{t.name}</span>
                      <span className="testimonials__role">{t.role}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Arrows */}
          <button
            className="testimonials__arrow testimonials__arrow--prev"
            onClick={prev}
            id="testimonials-prev"
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="testimonials__arrow testimonials__arrow--next"
            onClick={next}
            id="testimonials-next"
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="testimonials__dots reveal delay-3">
          {testimonials.map((t, index) => (
            <button
              key={t.id}
              className={`testimonials__dot ${
                index === activeIndex ? 'testimonials__dot--active' : ''
              }`}
              onClick={() => goTo(index)}
              id={`testimonial-dot-${t.id}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="testimonials__bg-glow" aria-hidden="true" />
    </section>
  );
}
