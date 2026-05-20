import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import SectionScrollButton from './components/SectionScrollButton'
import Hero from './sections/Hero'
import About from './sections/About'
import Resume from './sections/Resume'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  const [loaded, setLoaded] = useState(false)
 
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2600)
    return () => clearTimeout(timer)
  }, [])
 
  
  useEffect(() => {
    if (!loaded) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    )
    const els = document.querySelectorAll('.reveal')
    els.forEach(el => observer.observe(el))
    return () => els.forEach(el => observer.unobserve(el))
  }, [loaded])
 
  return (
    <>
      <Loader hide={loaded} />
      <Cursor />
      <Navbar visible={loaded} />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <SectionScrollButton />
      <footer className="site-footer">
        <span>© 2024 Bryan Martinez · Todos los derechos reservados</span>
      </footer>
    </>
  )
}