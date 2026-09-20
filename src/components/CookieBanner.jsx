import { useState, useEffect } from 'react'
import { Cookie, X, ShieldCheck, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('rima_cookie_consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('rima_cookie_consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('rima_cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-fade-up">
      <div className="max-w-4xl mx-auto bg-rima-dark border border-rima-gold/30 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden">
        {/* Gold top line */}
        <div className="h-0.5 bg-gold-gradient" />

        <div className="p-5 md:p-6">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-rima-gold/10 border border-rima-gold/20 flex items-center justify-center flex-shrink-0">
              <Cookie size={18} className="text-rima-gold" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-white font-semibold text-sm">We Use Cookies</h3>
                  <p className="text-white/40 text-xs italic">Muna amfani da Kukis</p>
                </div>
                <button onClick={decline} className="text-white/30 hover:text-white/60 transition-colors flex-shrink-0">
                  <X size={16} />
                </button>
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-3">
                Rima MFB uses cookies to improve your experience, remember your language preference,
                and analyse site traffic. We do not sell your data.
                See our{' '}
                <Link to="/privacy" className="text-rima-gold hover:underline">Privacy Policy</Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-rima-gold hover:underline">Cookie Policy</Link>.
              </p>

              {/* Details toggle */}
              {showDetails && (
                <div className="grid sm:grid-cols-3 gap-3 mb-4">
                  {[
                    { name: 'Essential', desc: 'Required for the site to work. Cannot be disabled.', required: true },
                    { name: 'Functional', desc: 'Remembers your language choice (English/Hausa) and preferences.', required: false },
                    { name: 'Analytics', desc: 'Helps us understand how visitors use the site to improve it.', required: false },
                  ].map(c => (
                    <div key={c.name} className="bg-white/5 rounded-xl p-3 border border-rima-gold/10">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-white text-xs font-semibold">{c.name}</p>
                        <span className={`text-xs font-bold ${c.required ? 'text-rima-gold' : 'text-white/40'}`}>
                          {c.required ? 'Required' : 'Optional'}
                        </span>
                      </div>
                      <p className="text-white/40 text-xs">{c.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button onClick={accept} className="btn-gold text-xs px-5 py-2 flex items-center gap-1.5">
                  <ShieldCheck size={13} /> Accept All
                </button>
                <button onClick={decline}
                  className="border border-white/20 text-white/60 hover:border-rima-gold/40 hover:text-white
                             text-xs px-5 py-2 rounded-full transition-all duration-200">
                  Essential Only
                </button>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-rima-gold/60 hover:text-rima-gold text-xs transition-colors flex items-center gap-1"
                >
                  {showDetails ? 'Hide details' : 'Cookie details'}
                  <ExternalLink size={10} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
