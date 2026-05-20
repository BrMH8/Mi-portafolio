const SOCIALS = [
  {
    title: 'GitHub',
    href: 'https://github.com/BrMH8',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    title: 'WhatsApp',
    href: 'https://wa.me/527712999057',
    icon: (
      <svg width="16" height="16" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 3.2C9.2 3.2 3.6 8.8 3.6 15.6c0 2.8.8 5.4 2.4 7.6L3.2 28l4.8-2c2 1.4 4.4 2.2 7.2 2.2 6.8 0 12.4-5.6 12.4-12.4S22.8 3.2 16 3.2Zm6.8 18.4c-.3.8-1.4 1.5-2.2 1.7-.6.2-1.3.2-2.2.2-1.4 0-2.8-.3-4.2-.9-2.2-1-3.8-2.6-4.8-4.8-.6-1.4-.9-2.8-.9-4.2 0-.8 0-1.6.2-2.2.2-.8.9-1.9 1.7-2.2.4-.2.8-.3 1.2-.2.4 0 .8.1 1.2.3.4.2.7.6.9 1.1.2.4.2.8 0 1.3-.1.3-.2.5-.4.7-.1.1-.2.3-.3.4-.1.1-.3.2-.5.3-.4.2-.9.4-1.1.5-.1.1-.2.2-.2.3-.1.2-.2.4-.1.6.1 1.3.9 3.3 2.6 5.1 1.8 1.8 3.8 2.5 5.1 2.6.2 0 .4 0 .6-.1.1 0 .2-.1.3-.2.1-.2.3-.7.5-1.1.1-.2.2-.4.3-.5.1-.1.2-.3.4-.4.2-.1.5-.3.7-.4.5-.2.8-.2 1.3 0 .4.2.8.5 1.1.9.2.4.3.8.3 1.2 0 .4 0 .8-.2 1.2Z" />
      </svg>
    ),
  },
  {
    title: 'Twitter / X',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    title: 'Dribbble',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-inner">
        <p className="section-label reveal">Trabajemos juntos</p>
        <h2 className="contact-title reveal reveal-d1">
          ¿Tienes un <em>proyecto</em><br />en mente?
        </h2>
        <p className="contact-sub reveal reveal-d2">
          Estoy disponible para proyectos personales, emprendimientos, colaboraciones y
          oportunidades de tiempo completo. Hablemos.
        </p>
        <a href="mailto:bryanmh.it@gmail.com" className="contact-email reveal reveal-d3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          bryanmh.it@gmail.com
        </a>
        <div className="social-links reveal reveal-d4">
          {SOCIALS.map(s => (
            <a
              key={s.title}
              href={s.href}
              className="social-link"
              title={s.title}
              target="_blank"
              rel="noreferrer noopener"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}