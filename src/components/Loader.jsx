const WORD = "Bienvenido"

export default function Loader({ hide }) {
  return (
    <div className={`loader${hide ? ' hide' : ''}`}>
      <div className="loader-word">
        {[...WORD].map((char, i) => (
          <span
            key={i}
            style={{ animationDelay: `${0.05 + i * 0.05}s` }}
          >
            {char}
          </span>
        ))}
      </div>
      <div className="loader-line" />
      <p className="loader-subtitle">Mi Portafolio</p>
    </div>
  )
}