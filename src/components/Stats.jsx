import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

const STATS_DATA = [
  { label: 'Projects Completed', value: 27, suffix: '+' },
  { label: 'Client Satisfaction', value: 98, suffix: '%' },
  { label: 'Global Partners', value: 15, suffix: '+' },
  { label: 'Team Members', value: 20, suffix: '+' },
];

function AnimatedCounter({ endValue, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let startTime;
    let animationFrame;
    const duration = 2000; // 2 seconds

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      
      // Easing out function
      const easeOut = 1 - Math.pow(1 - percent, 3);
      setCount(Math.floor(easeOut * endValue));

      if (percent < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrame = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [endValue]);

  return (
    <div className="stat-number" ref={ref}>
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats-section" id="stats">
      <div className="container">
        <div className="stats-grid">
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <AnimatedCounter endValue={stat.value} suffix={stat.suffix} />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
