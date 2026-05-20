import { useState } from 'react'

const LINKS = [
  { href: '#hero',     label: 'Inicio' },
  { href: '#about',    label: 'Sobre mí' },
  { href: '#resume',   label: 'Formación' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact',  label: 'Contacto' },
]

export default function Navbar({ visible }) {
  const [open, setOpen] = useState(false)

  const close = () => {
    setOpen(false)
    document.body.style.overflow = ''
  }

  const toggle = () => {
    const next = !open
    setOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const scrollTo = (href) => {
    close()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar${visible ? ' visible' : ''}`}>
        <button className="nav-logo" onClick={() => scrollTo('#hero')}>
          Bryan<em>.</em>Dev
        </button>

        <ul className="nav-links">
          {LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => { e.preventDefault(); scrollTo(l.href) }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="nav-cta"
          onClick={e => { e.preventDefault(); scrollTo('#contact') }}
        >
          Hablemos
        </a>

        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={toggle}
          aria-label="Menú"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {LINKS.map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={e => { e.preventDefault(); scrollTo(l.href) }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
} 