import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full
                 bg-rima-green-mid border border-rima-gold/40
                 flex items-center justify-center
                 text-rima-gold shadow-lg shadow-black/40
                 hover:bg-rima-gold hover:text-rima-dark
                 transition-all duration-300 hover:scale-110
                 animate-fade-up"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  )
}
