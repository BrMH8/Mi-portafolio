import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef   = useRef(null)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    let mx = 0, my = 0
    let rx = 0, ry = 0
    let rafId

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = mx + 'px'
        cursorRef.current.style.top  = my + 'px'
      }
    }

    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top  = ry + 'px'
      }
      rafId = requestAnimationFrame(animate)
    }

    const addHover = () => setHover(true)
    const rmHover  = () => setHover(false)

    const interactives = document.querySelectorAll(
      'a, button, .project-card, .skill-pill, .stat-box, .social-link'
    )

    document.addEventListener('mousemove', onMove)
    interactives.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', rmHover)
    })

    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', rmHover)
      })
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef}   className={`cursor-ring${hover ? ' hover' : ''}`} />
    </>
  )
}