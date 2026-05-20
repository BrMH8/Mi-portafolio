export default function Hero() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-noise" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* Content */}
      <div className="hero-content">
        <p className="hero-eyebrow reveal">Desarrollador Web</p>
        <h1 className="hero-title reveal reveal-d1">
          Diseño <em>Web</em><br />
        </h1>
        <p className="hero-desc reveal reveal-d2">
         Desarrollador Jr con pasión por desarrollar y gestionar experiencias digitales atractivas y funcionales. 
         Combino habilidades técnicas y creativas para desarrollar sitios web y aplicaciones que no solo se ven bien, 
         sino que también ofrecen una experiencia de usuario excepcional.
        </p>
        <div className="hero-actions reveal reveal-d3">
          <button
            className="btn-primary"
            onClick={() => scrollTo('#projects')}
          >
            Ver proyectos
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className="btn-outline"
            onClick={() => scrollTo('#contact')}
          >
            Contactar
          </button>
        </div>
      </div>

      {/* Card visual */}
      <div className="hero-visual reveal reveal-d2">
        <div className="hero-card">
          <div className="hero-card-glow" />
          <div className="hero-card-bg" />
          <div className="card-avatar">B</div>
          <div className="hero-card-inner">
            <div className="card-tags">
              <span className="card-tag">React</span>
              <span className="card-tag">Node.js</span>
              <span className="card-tag">Design</span>
            </div>
            <div className="card-name">Bryan Martinez</div>
            <div className="card-role">Desarrollador Web · Diseñador UI</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none"
          stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="1" width="14" height="22" rx="7" />
          <circle cx="8" cy="8" r="2" fill="currentColor" stroke="none">
            <animate attributeName="cy" values="8;14;8" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
        Scroll
      </div>
    </section>
  )
}