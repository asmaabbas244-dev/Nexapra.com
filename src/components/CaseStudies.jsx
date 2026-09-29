import useScrollAnimation from '../hooks/useScrollAnimation';
import './CaseStudies.css';

import drawingThoughtsImg from '../assets/projects/drawing-thoughts.png';
import expenseTrackerImg from '../assets/projects/expense-tracker.jpg';
import unimatchImg from '../assets/projects/unimatch.png';
import hunarmandImg from '../assets/projects/hunarmand-logo.png';
import quraniumImg from '../assets/projects/quranium-app.jpeg';

const projects = [
  {
    id: 'project-drawing-thoughts',
    title: 'Drawing Thoughts',
    category: 'Creative / Productivity App',
    problem: 'Users needed a unified space to sketch, take notes, and create mind maps digitally,quickly and easily ',
    solution: 'Built a feature-rich drawing app with customizable brushes, colors, mind maps, and organizational tools',
    result: '5,000+ downloads on Google Play with 4.5★ rating',
    tags: ['Android', 'Kotlin', 'Canvas API'],
    image: drawingThoughtsImg,
    gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
    accent: '#4ade80',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.yasadevs.drawingthoughts'
  },
  {
    id: 'project-expense-tracker',
    title: 'Expense Tracker App',
    category: 'Fintech / Finance App',
    problem: 'People struggled to track daily expenses and understand their spending habits',
    solution: 'Developed a clean finance app with dashboard overview, expense tracking, budget management, and smart analytics',
    result: '5.0★ rating on Google Play with 1,000+ active users',
    tags: ['Android', 'Kotlin', 'MPAndroidChart', 'Room DB'],
    image: expenseTrackerImg,
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accent: '#06b6d4',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nexappra.expensetrackerapp'
  },
  {
    id: 'project-unimatch',
    title: 'UniMatch',
    category: 'EdTech / Career Guidance',
    problem: 'Students were confused about career paths and finding the right university',
    solution: 'Created an AI-powered educational counselor to recommend best-fit universities and career paths',
    result: 'Featured on Google Play with growing user base across Pakistan',
    tags: ['Android', 'AI/ML', 'Psychometrics', 'Firebase'],
    image: unimatchImg,
    gradient: 'linear-gradient(135deg, #0d0d1a 0%, #1a0d2e 50%, #2d1b69 100%)',
    accent: '#a78bfa',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.nexappra.unimatch'
  },
  {
    id: 'project-hunarmand',
    title: 'Hunarmand App',
    category: 'Home Services / Marketplace',
    problem: 'Finding reliable and skilled home service professionals was difficult, time-consuming, and lacked trust.',
    solution: 'Built a digital marketplace connecting customers with verified electricians, plumbers, and cleaners.',
    result: '500+ verified professionals • 8 cities • 4.8/5 average rating',
    tags: ['Android', 'Flutter', 'Firebase', 'Marketplace'],
    image: hunarmandImg,
    gradient: 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e1b4b 100%)',
    accent: '#3b82f6',
    webUrl: 'https://hunarmand.tech/',
  },
 {
  id: 'project-quranium',
  title: 'Quranium: Quran & Prayer Times',
  category: 'Islamic / Lifestyle App',
 problem: 'Needed a clean, distraction-free app combining accurate prayer times and Quran audio.',
  solution: 'Created an Islamic companion app featuring precise prayer alarms, full Quran text, and daily duas.',
  result: 'Reliable daily utility for seamless prayer tracking and Quranic study.',
  tags: ['Android', 'React.js', 'Lifestyle', 'Audio API'],
  image: quraniumImg, 
  gradient: 'linear-gradient(135deg, #065f46 0%, #047857 50%, #064e3b 100%)',
  accent: '#34d399',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.quranium.quran.prayertimes',
},
];

export default function CaseStudies() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="projects" className="section case-studies" ref={sectionRef}>
      <div className="container">
        <header className="case-studies__header reveal">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real problems. Real solutions. Real results.
          </p>
        </header>

        <div className="case-studies__grid">
          {projects.map((project, index) => (
            <a
             key={project.id}
             href={project.playStoreUrl|| project.webUrl}
             target="_blank"
             rel="noopener noreferrer"
             style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
           >
            <article
              key={project.id}
              id={project.id}
              className={`case-studies__card reveal delay-${index + 1}`}
            >
              {/* Banner */}
              <div
                className="case-studies__banner"
                style={{ background: project.gradient }}
              >
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="case-studies__banner-img"
                  />
                ) : (
                  <div
                    className="case-studies__banner-art"
                    style={{ '--art-accent': project.accent }}
                  >
                    <div className="case-studies__art-circle case-studies__art-circle--lg"></div>
                    <div className="case-studies__art-circle case-studies__art-circle--sm"></div>
                    <div className="case-studies__art-line"></div>
                  </div>
                )}
                <span className="case-studies__badge">{project.category}</span>
              </div>

              {/* Body */}
              <div className="case-studies__body">
                <h3 className="case-studies__title">{project.title}</h3>

                <ul className="case-studies__details">
                  <li className="case-studies__detail">
                    <span className="case-studies__detail-icon case-studies__detail-icon--problem" aria-label="Problem">✕</span>
                    <div>
                      <span className="case-studies__detail-label">Problem</span>
                      <p className="case-studies__detail-text">{project.problem}</p>
                    </div>
                  </li>
                  <li className="case-studies__detail">
                    <span className="case-studies__detail-icon case-studies__detail-icon--solution" aria-label="Solution">✓</span>
                    <div>
                      <span className="case-studies__detail-label">Solution</span>
                      <p className="case-studies__detail-text">{project.solution}</p>
                    </div>
                  </li>
                  <li className="case-studies__detail">
                    <span className="case-studies__detail-icon case-studies__detail-icon--result" aria-label="Result">↑</span>
                    <div>
                      <span className="case-studies__detail-label">Result</span>
                      <p className="case-studies__detail-text">{project.result}</p>
                    </div>
                  </li>
                </ul>

                <div className="case-studies__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="case-studies__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}