import './App.css';
import './about.css';
import React, { useEffect, useRef, useState } from 'react';
import AdiImg from './Adithi.png';
import FeaturedProjects from './pages/project.js';
import Timeline from './pages/exp.js';
import SkillsCerts from './pages/skills.js';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

/* ================= About page content (edit here) ================= */
const NAME = 'Adithi Madduluri';
const EMAIL = 'adithim003@gmail.com';
const ROLES = ['Data Analyst', 'Data Engineer', 'Data Science Enthusiast'];

/* ================================================================== */

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function useTypewriter(words, { typeSpeed = 80, deleteSpeed = 40, pause = 1600 } = {}) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timer;
    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((n) => n + 1);
    } else {
      timer = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

function Sparkle({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo">Adithi Madduluri</div>
      <nav className="nav">
        <a href="/" className="nav-link">About</a>
        <a href="/projects" className="nav-link">Projects</a>
        <a href="/experience" className="nav-link">Experience</a>
        <a href="/skills" className="nav-link">Skills</a>
      </nav>
    </header>
  );
}

function HomePage() {
  const navigate = useNavigate();
  const typed = useTypewriter(ROLES);
  const reduced = prefersReducedMotion();

  const copyTimer = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/AdithiResume.pdf';
    link.setAttribute('download', 'Adithi_Madduluri_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  let letterIndex = 0;

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="container">
        <Header />

        <div className="about">
          {/* Hero Section */}
          <section className="hero">
            <div className="hero-content">
              <div className="label about-role">
                <span className="about-sr">Data Analyst &amp; Engineer</span>
                <span aria-hidden="true">
                  {reduced ? 'Data Analyst & Engineer' : typed}
                  <span className="about-caret" />
                </span>
              </div>

              <h1 className="heading about-name" aria-label={NAME}>
                {NAME.split(' ').map((word, w) => (
                  <span className="about-word" key={w} aria-hidden="true">
                    {word.split('').map((ch) => {
                      const i = letterIndex++;
                      return (
                        <span className="about-letter" key={i} style={{ '--d': i }}>
                          {ch}
                        </span>
                      );
                    })}
                  </span>
                ))}
              </h1>

              <p className="description">
                I'm a data analyst and engineer with an <strong>M.S. in Data Science</strong> from{' '}
<strong>UMass Dartmouth</strong>. For the past year, I've been building data pipelines and
Power BI dashboards, mostly in Python and SQL. I'm certified in <strong>Snowflake</strong> and{' '}
<strong>Microsoft Fabric</strong>.
              </p>

              <div className="button-group">
                <button className="btn" onClick={downloadResume}>Resume</button>
                <button className="btn" onClick={() => window.open('https://www.linkedin.com/in/adithim/', '_blank')}>LinkedIn</button>
                <button className="btn" onClick={() => window.open('https://github.com/Adi-113', '_blank')}>GitHub</button>
                <button className="btn" onClick={() => window.open('https://medium.com/@adithim003', '_blank')}>Medium</button>
              </div>

              <div className="hero-contact">
                <div className="hero-contact-item">
                  <h2 className="hero-contact-label">Email</h2>
                  <button
                    type="button"
                    className={`hero-contact-email about-copy ${copied ? 'is-copied' : ''}`}
                    onClick={copyEmail}
                    aria-label={`Copy email address ${EMAIL}`}
                    data-tip={copied ? 'Copied!' : 'Click to copy'}
                  >
                    {EMAIL}
                  </button>
                </div>
                <div className="hero-contact-item">
                  <h2 className="hero-contact-label">Location</h2>
                  <p className="hero-contact-location">Centreville, VA</p>
                </div>
              </div>
              <span className="about-live" role="status">{copied ? 'Email copied to clipboard' : ''}</span>
            </div>

            <div className="hero-image-section">
              <img src={AdiImg} alt="Adithi Madduluri" className="hero-image" />
            </div>
          </section>

          
        </div>
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="container">
        <Header />
        <FeaturedProjects />
      </div>
    </div>
  );
}

function ExpPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="container">
        <Header />
        <Timeline />
      </div>
    </div>
  );
}

function SkillsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="container">
        <Header />
        <SkillsCerts />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExpPage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
    </Router>
  );
}

export default App;