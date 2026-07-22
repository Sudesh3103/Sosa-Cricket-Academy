import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 480)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        const target = document.querySelector(location.hash)

        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.hash, location.pathname])

  const handleScroll = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      type="button"
      onClick={handleScroll}
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white text-[#08150e] shadow-xl shadow-black/20 transition-all sm:right-6 ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'}`}
    >
      <ArrowUp size={20} />
    </button>
  )
}

export default ScrollToTop
