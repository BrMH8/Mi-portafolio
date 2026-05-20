import { useEffect, useState } from 'react'
import { FiChevronUp } from 'react-icons/fi'

const SECTION_IDS = ['hero', 'about', 'resume', 'projects', 'contact']
const SECTION_LABELS = {
  hero: 'Inicio',
  about: 'Sobre mí',
  resume: 'Formación',
  projects: 'Proyectos',
  contact: 'Contacto',
}

export default function SectionScrollButton() {
  const [visible, setVisible] = useState(false)
  const [nextSection, setNextSection] = useState('Inicio')

  useEffect(() => {
    const updateState = () => {
      const sections = SECTION_IDS
        .map(id => document.getElementById(id))
        .filter(Boolean)

      if (!sections.length) {
        setVisible(false)
        return
      }

      const currentIndex = sections.reduce((activeIndex, section, idx) => {
        const top = section.getBoundingClientRect().top
        return top <= 120 ? idx : activeIndex
      }, 0)

      const targetIndex = currentIndex > 0 ? currentIndex - 1 : 0
      setNextSection(SECTION_LABELS[sections[targetIndex]?.id] || 'Inicio')
      setVisible(window.scrollY > 240)
    }

    updateState()
    window.addEventListener('scroll', updateState, { passive: true })
    return () => window.removeEventListener('scroll', updateState)
  }, [])

  const handleClick = () => {
    const sections = SECTION_IDS
      .map(id => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return

    const currentIndex = sections.reduce((activeIndex, section, idx) => {
      const top = section.getBoundingClientRect().top
      return top <= 120 ? idx : activeIndex
    }, 0)

    const targetIndex = currentIndex > 0 ? currentIndex - 1 : 0
    sections[targetIndex]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <button
      type="button"
      className="section-scroll-btn"
      onClick={handleClick}
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }}
      aria-label="Ir a la sección anterior"
    >
      <span className="section-scroll-label">Subir a {nextSection}</span>
      <FiChevronUp size={18} />
    </button>
  )
}
