const STATS = [
  { num: '1+',  label: 'Años de exp' },
  { num: '12+', label: 'Proyectos' },
  { num: '5+',  label: 'Colaboraciones' },
]

const SKILLS = [
  'React', 'TypeScript', 'Node.js', 'Next.js',
  'Firebase', 'MongoDB', 'Flutter',
  'AWS', 'Figma', 'Bootstrap', 'Tailwind', 'Git Hub', 'Git','SEO Semrush', 'Posicionamiento Web',
  'Figma','Screaming Frog','Notion','Slack'
]

export default function About() {
  return (
    <section id="about">
      {/* Left column */}
      <div>
        <p className="about-label reveal">Sobre mí</p>
        <h2 className="about-title reveal reveal-d1">
          Desarrollando,<br />una línea a la vez
        </h2>
        <p className="about-text reveal reveal-d2">
          Desarrollador junior creando
          aplicaciones web modernas. Me especializo en React, Node.js y diseño
          UX, siempre buscando el equilibrio perfecto entre funcionalidad y
          estética.
        </p>
        <div className="stats-grid reveal reveal-d3">
          {STATS.map(s => (
            <div key={s.label} className="stat-box">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        
      </div>

      {/* Right column */}
      <div>
        <p className="about-label reveal">Stack tecnológico</p>
        <h3 className="skills-title reveal reveal-d1">
          Herramientas que domino
        </h3>
        <div className="skills-list reveal reveal-d2">
          {SKILLS.map(sk => (
            <span key={sk} className="skill-pill">{sk}</span>
          ))}
        </div>
      </div>
    </section>
  )
}