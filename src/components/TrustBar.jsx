import './TrustBar.css';

/* SVG text logos — lightweight, no image assets needed */
const LOGOS = [
  { name: 'TechFlow', color: '#4ade80' },
  { name: 'DataSync', color: '#06b6d4' },
  { name: 'CloudNex', color: '#8b5cf6' },
  { name: 'AppForge', color: '#f59e0b' },
  { name: 'CyberCore', color: '#ef4444' },
  { name: 'InnoVex', color: '#ec4899' },
  { name: 'PixelAI', color: '#14b8a6' },
  { name: 'Synthera', color: '#f97316' },
  { name: 'Quantix', color: '#6366f1' },
  { name: 'NovaByte', color: '#22d3ee' },
];

function LogoSVG({ name, color }) {
  return (
    <svg viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={name}>
      <text x="65" y="23" textAnchor="middle" fill={color} fontFamily="Inter, sans-serif" fontSize="18" fontWeight="700" letterSpacing="0.5">
        {name}
      </text>
    </svg>
  );
}

export default function TrustBar() {
  /* Duplicate logos for seamless infinite scroll */
  const allLogos = [...LOGOS, ...LOGOS];

  return (
    <section className="trust-bar" id="trust-bar">
      <div className="container">
        <p className="trust-bar__header">Trusted by innovators worldwide</p>
      </div>

      <div className="trust-bar__marquee">
        <div className="trust-bar__marquee-track">
          {allLogos.map(({ name, color }, index) => (
            <div
              className="trust-bar__logo"
              key={`${name}-${index}`}
              id={index < LOGOS.length ? `trust-logo-${name.toLowerCase()}` : undefined}
            >
              <LogoSVG name={name} color={color} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
