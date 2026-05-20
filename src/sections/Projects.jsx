import { FiShoppingCart, FiBarChart2, FiCpu, FiArrowRight, FiCoffee } from 'react-icons/fi'
import { IoSchool } from "react-icons/io5";

const PROJECTS = [
  {
    icon: <IoSchool size={28} />,
    color: 'p-blue',
    tags: ['Next.JS', 'css3'],
    name: 'Web Institucional',
    desc: 'Participación en el desarrollo de un sitio web institucional para una organización educativa.',
    link: 'https://instituto-vicario.netlify.app/',
    delay: '',
  },
  {
    icon: <FiCoffee size={28} />,
    color: 'p-green',
    tags: ['React.JS', 'Nest.JS', 'css'],
    name: 'Cafetería Sooty',
    desc: 'Colaboración en el desarrollo de una plataforma de comercio electrónico para una cafetería local, con catálogo de productos, carrito de compras y pasarela de pago.',
    link: 'https://proyecto-cafeteria-sooty.vercel.app/home',
    delay: 'reveal-d1',
  },
  {
    icon: <FiCpu size={28} />,
    color: 'p-purple',
    tags: ['SEO', 'Auditoría', 'Posicionamiento'],
    name: 'SEO Audit ',
    desc: 'Proyecto de auditoría SEO y posicionamiento web, optimizando contenido, velocidad y visibilidad para mejorar el tráfico orgánico.',
    delay: 'reveal-d2',
  },
]

const ArrowIcon = () => (
  <FiArrowRight />
)

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <p className="section-label reveal">Trabajo selecto</p>
        <h2 className="section-title reveal reveal-d1">Proyectos destacados</h2>
      </div>

      <div className="projects-grid">
        {PROJECTS.map(p => (
          <article key={p.name} className={`project-card reveal ${p.delay}`}>
            <div className={`project-thumb ${p.color}`}>
              <div className="project-thumb-inner">{p.icon}</div>
            </div>
            <div className="project-body">
              <div className="project-tags">
                {p.tags.map(t => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>
              {p.link ? (
                <a
                  href={p.link}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Ver proyecto <ArrowIcon />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}