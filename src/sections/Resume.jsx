import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FiEye, FiX } from 'react-icons/fi'

const CERTIFICATIONS = [
  {
    year: 'Mayo 2024',
    title: 'Scrum Master Foundation',
    issuer: 'CertiProf',
    src: '/certs/cer_SM.jpg',
  },
  {
    year: 'Jul 2024',
    title: 'Remote Work',
    issuer: 'CertiProf',
    src: '/certs/cer_RW.jpg',
  },
  {
    year: 'Jul 2024',
    title: 'Flutter Flow',
    issuer: 'Certificación en manejo de Flutter Flow',
    src: '/certs/di_FF.jpg',
  },
]

export default function Resume() {
  const [activeCert, setActiveCert] = useState(null)

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setActiveCert(null)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    document.body.style.overflow = activeCert ? 'hidden' : ''
  }, [activeCert])

  return (
    <section id="resume">
      <div className="section-header">
        <p className="section-label reveal">Formación</p>
        <h2 className="section-title reveal reveal-d1">Formación y certificaciones</h2>
      </div>

      <div className="resume-grid">
        <div className="resume-card reveal reveal-d2">
          <h3>Formación académica</h3>
          <div className="resume-item">
            <span className="resume-year">2024 - 2026</span>
            <div className="resume-body">
              <strong>Ing. Desarrollo y Gestión de Software</strong>
              <p>Universidad Tecnológica de la Sierra Hidalguense</p>
            </div>
          </div>
          <div className="resume-item">
            <span className="resume-year">2022 - 2024</span>
            <div className="resume-body">
              <strong>Tsu. Tecnologías de la Información area DGS</strong>
              <p>Universidad Tecnológica de la Sierra Hidalguense</p>
            </div>
          </div>
          <div className="resume-item">
            <span className="resume-year">2019 - 2022</span>
            <div className="resume-body">
              <strong>Técnico en Programación</strong>
              <p>Tecnológico Industrial y de Servicios No.5</p>
            </div>
          </div>
        </div>

        <div className="resume-card reveal reveal-d3">
          <h3>Certificaciones</h3>
          {CERTIFICATIONS.map(cert => (
            <div key={cert.src} className="resume-item">
              <span className="resume-year">{cert.year}</span>
              <div className="resume-body">
                <strong>{cert.title}</strong>
                <p>{cert.issuer}</p>
              </div>
              <button
                type="button"
                className="resume-link"
                onClick={() => setActiveCert(cert)}
              >
                <FiEye /> Ver
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeCert && createPortal(
        <div className="resume-modal" onClick={() => setActiveCert(null)}>
          <div className="resume-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="resume-modal-close"
              onClick={() => setActiveCert(null)}
            >
              <FiX />
            </button>
            <div className="resume-modal-header">
              <span>{activeCert.year}</span>
              <h3>{activeCert.title}</h3>
              <p>{activeCert.issuer}</p>
            </div>
            <div className="resume-modal-content">
              <img src={activeCert.src} alt={activeCert.title} />
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  )
}
