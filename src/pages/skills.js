import './skills.css';
import React, { useState } from 'react';

const skills = [
  {
    title: 'Cloud & Data Tools',
    items: ['Microsoft Fabric', 'Azure Synapse Analytics', 'Azure Data Factory', 'Power BI', 'Snowflake', 'BigQuery', 'Git/GitHub', 'Excel']
  },
  { title: 'Programming', items: ['Python', 'SQL', 'R', 'JavaScript', 'HTML5', 'CSS'] },
  {
    title: 'Libraries',
    items: ['TensorFlow', 'Keras', 'PyTorch', 'OpenCV', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'FastAPI']
  },
  { title: 'Frameworks', items: ['React.js', 'Node.js', 'Flask'] },
  { title: 'Databases', items: ['SQL Server', 'MySQL', 'MongoDB'] },
];

const certifications = [
  { title: 'Microsoft Fabric Data Engineer Associate', year: '2026' },
  { title: 'Snowflake Data Engineering Professional', year: '2026' },
  { title: 'Getting Started with Data Analytics in AWS', year: '2023' },
  { title: 'Microsoft Azure AI Fundamentals', year: '2022' },
];

function Sparkle({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* Cloud-shaped speech bubble that works as a button */
function BubbleButton({ label, id, active, onClick, controls }) {
  const filterId = `sc-paper-${id}`;
  return (
    <button
      type="button"
      className={`sc-bubble ${active ? 'is-active' : ''}`}
      aria-pressed={active}
      aria-controls={controls}
      onClick={onClick}
    >
      <svg viewBox="0 0 320 260" aria-hidden="true">
        <defs>
          {/* crumpled-paper texture */}
          <filter id={filterId} x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="4" seed="7" result="noise" />
            <feDiffuseLighting in="noise" lightingColor="#ffffff" surfaceScale="1.4" result="light">
              <feDistantLight azimuth="45" elevation="60" />
            </feDiffuseLighting>
            <feComposite in="light" in2="SourceGraphic" operator="in" result="lit" />
            <feBlend in="SourceGraphic" in2="lit" mode="multiply" />
          </filter>
        </defs>
        <g fill="#f0b45e" filter={`url(#${filterId})`}>
          <circle cx="112" cy="88" r="62" />
          <circle cx="192" cy="82" r="55" />
          <circle cx="72" cy="142" r="60" />
          <circle cx="246" cy="138" r="60" />
          <circle cx="160" cy="150" r="78" />
          <ellipse cx="120" cy="178" rx="78" ry="48" />
          <ellipse cx="218" cy="176" rx="72" ry="48" />
          <path d="M84 200 L64 254 L138 212 Z" />
        </g>
      </svg>
      <span className={`sc-bubble-label ${label.length > 8 ? 'sc-bubble-label--long' : ''}`}>
        {label}
      </span>
    </button>
  );
}

function Card({ index, children, link }) {
  const content = (
    <>
      <span className="sc-card-tab" />
      <div className="sc-card-body">{children}</div>
      <Sparkle className="sc-card-sparkle" />
    </>
  );
  return link ? (
    <a className="sc-card" href={link} target="_blank" rel="noreferrer" style={{ '--i': index }}>
      {content}
    </a>
  ) : (
    <article className="sc-card" style={{ '--i': index }}>
      {content}
    </article>
  );
}

export default function SkillsCerts() {
  const [activeSection, setActiveSection] = useState('skills');

  return (
    <section className="sc-section" id="skills">
      <div className="sc-layout">
        <div className="sc-bubbles" role="group" aria-label="Skills and certifications">
          <BubbleButton
            label="Skills"
            id="skills"
            controls="skills-panel"
            active={activeSection === 'skills'}
            onClick={() => setActiveSection('skills')}
          />
          <BubbleButton
            label="Certifications"
            id="certs"
            controls="certifications-panel"
            active={activeSection === 'certifications'}
            onClick={() => setActiveSection('certifications')}
          />
        </div>

        {activeSection === 'skills' && (
          <div className="sc-tab-panel" id="skills-panel">
            <div className="sc-cards">
              {skills.map((s, i) => (
                <Card key={s.title} index={i}>
                  <h3 className="sc-card-title">{s.title}</h3>
                  <ul className="sc-chips">
                    {s.items.map((item) => (
                      <li key={item} className="sc-chip">{item}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'certifications' && (
          <div className="sc-tab-panel" id="certifications-panel">
            <div className="sc-cards">
              {certifications.map((c, i) => (
                <Card key={c.title} index={i}>
                  <h3 className="sc-card-title">{c.title}</h3>
                  <p className="sc-card-meta">{c.year}</p>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}