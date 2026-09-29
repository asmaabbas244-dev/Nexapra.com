import useScrollAnimation from '../hooks/useScrollAnimation';
import './TechStack.css';

const technologies = [
  {
    name: 'React',
    color: '#61DAFB',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="4" fill="#61DAFB"/>
        <ellipse cx="24" cy="24" rx="20" ry="8" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
        <ellipse cx="24" cy="24" rx="20" ry="8" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 24 24)"/>
        <ellipse cx="24" cy="24" rx="20" ry="8" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 24 24)"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    color: '#68A063',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L42 14v20L24 44 6 34V14L24 4z" stroke="#68A063" strokeWidth="1.5" fill="none"/>
        <text x="24" y="29" textAnchor="middle" fill="#68A063" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">N</text>
      </svg>
    ),
  },
  {
    name: 'Python',
    color: '#3776AB',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6c-8 0-8 4-8 4v4h8v2H12s-6-.5-6 8 5 8.5 5 8.5h3v-4s0-5 5-5h8s5 .5 5-4V10s.5-4-8-4z" fill="#3776AB" opacity="0.8"/>
        <path d="M24 42c8 0 8-4 8-4v-4h-8v-2h12s6 .5 6-8-5-8.5-5-8.5h-3v4s0 5-5 5h-8s-5-.5-5 4v4.5S16 42 24 42z" fill="#FFD43B" opacity="0.8"/>
        <circle cx="18" cy="12" r="1.5" fill="#fff"/>
        <circle cx="30" cy="36" r="1.5" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    color: '#ffffff',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" stroke="#ffffff" strokeWidth="1.5" fill="none"/>
        <text x="24" y="30" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="800" fontFamily="Inter, sans-serif">N</text>
      </svg>
    ),
  },
  {
    name: 'AWS',
    color: '#FF9900',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 28c0 0 4-2 14-2s14 2 14 2" stroke="#FF9900" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 22c0-5 4.5-10 10-10s10 5 10 10" stroke="#FF9900" strokeWidth="1.5" fill="none"/>
        <path d="M18 22c0-3 2.7-6 6-6s6 3 6 6" stroke="#FF9900" strokeWidth="1.5" fill="none"/>
        <path d="M32 30l4-2" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    color: '#47A248',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6c0 0-1 4-1 10s1 14 1 14v12s-1 0-2-2c-3-4-9-10-9-18S20 6 24 6z" fill="#47A248" opacity="0.7"/>
        <path d="M24 6c0 0 1 4 1 10s-1 14-1 14v12s1 0 2-2c3-4 9-10 9-18S28 6 24 6z" fill="#47A248" opacity="0.5"/>
        <rect x="23" y="36" width="2" height="8" rx="1" fill="#47A248"/>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    color: '#3178C6',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="36" height="36" rx="4" fill="#3178C6" opacity="0.85"/>
        <text x="24" y="33" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif">TS</text>
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    color: '#336791',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="22" cy="20" rx="14" ry="12" stroke="#336791" strokeWidth="1.5" fill="none"/>
        <path d="M32 20c2 4 4 14 0 18s-6 2-6 2" stroke="#336791" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="2" fill="#336791"/>
        <circle cx="26" cy="18" r="2" fill="#336791"/>
        <path d="M18 24c0 0 2 3 6 0" stroke="#336791" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Docker',
    color: '#2496ED',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 22c2-2 5-2 7-1 1-3 4-4 6-4v0" stroke="#2496ED" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="12" y="17" width="5" height="4.5" rx="0.5" stroke="#2496ED" strokeWidth="1.2"/>
        <rect x="18" y="17" width="5" height="4.5" rx="0.5" stroke="#2496ED" strokeWidth="1.2"/>
        <rect x="24" y="17" width="5" height="4.5" rx="0.5" stroke="#2496ED" strokeWidth="1.2"/>
        <rect x="18" y="12" width="5" height="4.5" rx="0.5" stroke="#2496ED" strokeWidth="1.2"/>
        <rect x="24" y="12" width="5" height="4.5" rx="0.5" stroke="#2496ED" strokeWidth="1.2"/>
        <rect x="30" y="17" width="5" height="4.5" rx="0.5" stroke="#2496ED" strokeWidth="1.2"/>
        <path d="M6 24c0 0 2 14 18 14s20-10 20-14H6z" stroke="#2496ED" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'Figma',
    color: '#A259FF',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="6" width="10" height="10" rx="5" fill="#F24E1E" opacity="0.8"/>
        <rect x="24" y="6" width="10" height="10" rx="5" fill="#FF7262" opacity="0.8"/>
        <rect x="14" y="16" width="10" height="10" rx="5" fill="#A259FF" opacity="0.8"/>
        <circle cx="29" cy="21" r="5" fill="#1ABCFE" opacity="0.8"/>
        <rect x="14" y="26" width="10" height="10" rx="5" fill="#0ACF83" opacity="0.8"/>
      </svg>
    ),
  },
  {
  name: 'React Native',
  color: '#61DAFB',
  icon: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19Z" fill="#61DAFB"/>
      <path d="M41.48 18.02C40.63 15.65 37.91 13.56 34.02 12.33C30.06 11.08 25.7 10.82 22.02 11.64C17.39 12.67 12.59 15.42 10.04 19.34C8.75003 21.32 8.16003 23.49 8.35003 25.5C8.74003 29.54 11.97 33.2 17.11 35.34C21.14 37.02 25.74 37.45 29.6 36.5C34.33 35.34 39.11 32.44 41.53 28.38C42.75 26.33 43.25 24.1 42.97 22.03C42.78 20.6 42.27 19.24 41.48 18.02ZM23.44 34.79C16.34 35.53 11.37 31.84 10.63 25.29C10.5 24.14 10.74 22.86 11.38 21.65C13.25 18.15 17.5 15.53 22.56 14.65C25.5 14.14 28.98 14.37 32.22 15.4C37.3 17 39.94 19.89 40.58 22.69C41.33 25.96 39.46 29.98 35.54 32.26C32.18 34.2 27.65 34.71 23.44 34.79Z" fill="#61DAFB" opacity="0.8"/>
      <path d="M37.7 13.91C34.1 12.3 29.83 11.89 26.06 12.8C21.46 13.91 16.94 16.89 14.66 20.93C13.51 22.97 13.06 25.17 13.38 27.2C13.88 30.41 16.35 33.25 20.47 34.83C24.01 36.19 28.18 36.5 31.87 35.63C36.38 34.56 40.82 31.63 43.1 27.66C44.25 25.64 44.69 23.47 44.38 21.46C43.91 18.42 41.6 15.65 37.7 13.91Z" fill="#61DAFB" opacity="0.4"/>
    </svg>
  ),
},
{
  name: 'Flutter',
  color: '#02569B',
  icon: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35.2 4L14.4 24.8L22.4 32.8L43.2 12M43.2 12L35.2 4H27.2L14.4 16.8L22.4 24.8L35.2 12H43.2Z" fill="#45D1FD" />
      <path d="M22.4 24.8L14.4 16.8L4 27.2L12 35.2L22.4 24.8Z" fill="#02569B" opacity="0.8" />
      <path d="M22.4 24.8L12 35.2L20 43.2H28L38.4 32.8L22.4 24.8Z" fill="#0175C2" />
    </svg>
  ),
},
{
  name: 'Kotlin',
  color: '#7F52FF',
  icon: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M44 4H4V44H44L24 24L44 4Z" fill="#7F52FF" />
      <path d="M4 44L24 24L4 4V44Z" fill="#C711E1" opacity="0.8" />
      <path d="M24 24L44 44H4V24V44H44L24 24Z" fill="#E44857" opacity="0.9" />
    </svg>
  ),
},
{
  name: 'Unity',
  color: '#FFFFFF',
  icon: (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central Cube/Hexagon Style */}
      <path d="M24 4L41.32 14V34L24 44L6.68 34V14L24 4Z" stroke="#FFFFFF" strokeWidth="3" strokeLinejoin="round" opacity="0.9"/>
      <path d="M24 4V24M24 24L41.32 14M24 24L6.68 14M24 24V44" stroke="#FFFFFF" strokeWidth="2.5" strokeLinejoin="round" opacity="0.8"/>
      <circle cx="24" cy="24" r="3" fill="#FFFFFF" />
    </svg>
  ),
},
];

export default function TechStack() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="tech-stack" className="section tech-stack" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="tech-stack__header reveal">
          <span className="section-label">Technologies</span>
          <h2 className="section-title">
            Our <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            We use the best tools to build the best products
          </p>
        </div>

        {/* Grid */}
        <div className="tech-stack__grid">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`tech-stack__card glass-card reveal-scale delay-${
                (index % 5) + 1
              }`}
              id={`tech-${tech.name.toLowerCase().replace(/[.\s]/g, '-')}`}
              style={{ '--tech-color': tech.color }}
            >
              <div className="tech-stack__icon">{tech.icon}</div>
              <span className="tech-stack__name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="tech-stack__bg-grid" aria-hidden="true" />
    </section>
  );
}
