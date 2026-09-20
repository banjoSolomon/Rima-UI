import { useState } from 'react'
import { Mail, Send, CheckCircle2, Globe } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import { useLang } from '../context/LanguageContext'

const benefits = [
  { en: 'New product launches & rate updates', ha: 'Sabbin kayayyaki da ƙimar ajiya' },
  { en: 'Financial tips in English & Hausa',    ha: 'Shawarwarin kuɗi cikin Hausa & Turanci' },
  { en: 'Exclusive offers for subscribers',     ha: 'Tanade-tanade na musamman' },
  { en: 'Islamic finance insights',             ha: 'Bayanai game da bankin Musulunci' },
]

export default function Newsletter() {
  const [email, setEmail]     = useState('')
  const [phone, setPhone]     = useState('')
  const [lang, setLang]       = useState('both')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { ref, visible }      = useScrollReveal()
  const { lang: siteLang }    = useLang()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email && !phone) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <section className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #061c12 0%, #0a4a2e 50%, #061c12 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rima-gold/30 to-transparent" />
      <div className="absolute inset-0 pattern-overlay opacity-30 pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-rima-gold/5 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`relative max-w-4xl mx-auto px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-rima-gold/10 border border-rima-gold/30 rounded-full px-4 py-1.5 mb-5">
              <Mail size={13} className="text-rima-gold" />
              <span className="text-rima-gold text-xs font-semibold tracking-wider uppercase">
                {siteLang === 'ha' ? 'Shiga Jerin Labarai' : 'Stay Informed'}
              </span>
            </div>

            <h2 className="font-display text-4xl font-bold text-white mb-3 leading-tight">
              {siteLang === 'ha'
                ? <><span className="gold-text">Labarai & Shawarwari</span><br />Kai Tsaye Wajenka</>
                : <>Get <span className="gold-text">Financial Tips</span><br />in Your Language</>
              }
            </h2>

            <p className="text-white/60 mb-6 leading-relaxed">
              {siteLang === 'ha'
                ? 'Karɓi labarai game da kayayyakin Rima MFB, ƙimar ajiya, da shawarwarin kuɗi — cikin Hausa ko Turanci, kai tsaye a wayarka.'
                : 'Get product updates, savings rate changes, financial literacy tips, and Islamic finance insights — in English, Hausa, or both.'
              }
            </p>

            <ul className="space-y-2.5">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-2.5 text-white/65 text-sm">
                  <CheckCircle2 size={14} className="text-rima-gold flex-shrink-0" />
                  {siteLang === 'ha' ? b.ha : b.en}
                </li>
              ))}
            </ul>

            <p className="text-white/30 text-xs mt-5">
              {siteLang === 'ha'
                ? 'Ba za a taɓa sayar da bayananku ba. Ana iya cire kur\'din kowane lokaci.'
                : 'We never sell your data. Unsubscribe anytime.'
              }
            </p>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="card-glass p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500/40 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-green-400" />
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-2">
                  {siteLang === 'ha' ? 'An yi rajista!' : "You're subscribed!"}
                </h3>
                <p className="text-white/50 text-sm">
                  {siteLang === 'ha'
                    ? 'Za ku fara karɓar labarai nan ba da jimawa ba. Nagode!'
                    : "You'll start receiving updates shortly. Thank you!"
                  }
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-glass p-7">
                <h3 className="font-display font-bold text-white text-lg mb-5">
                  {siteLang === 'ha' ? 'Yi Rajista' : 'Subscribe Free'}
                </h3>

                <div className="flex flex-col gap-4">
                  {/* Email */}
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">
                      {siteLang === 'ha' ? 'Adireshin Email' : 'Email Address'}
                    </label>
                    <input
                      type="email" value={email} onChange={e => setEmail(e.target.value)}
                      placeholder={siteLang === 'ha' ? 'misali@gmail.com' : 'yourname@gmail.com'}
                      className="w-full bg-white/5 border border-rima-gold/20 rounded-xl px-4 py-3 text-white
                                 placeholder-white/20 text-sm outline-none focus:border-rima-gold/60 transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">
                      {siteLang === 'ha' ? 'Ko Lambar Waya (SMS)' : 'Or Phone Number (SMS Updates)'}
                    </label>
                    <input
                      type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                      placeholder="0803 000 0000"
                      className="w-full bg-white/5 border border-rima-gold/20 rounded-xl px-4 py-3 text-white
                                 placeholder-white/20 text-sm outline-none focus:border-rima-gold/60 transition-all"
                    />
                  </div>

                  {/* Language preference */}
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">
                      <Globe size={11} className="inline mr-1" />
                      {siteLang === 'ha' ? 'Harshen da kuke so' : 'Preferred Language'}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'en',   label: 'English' },
                        { id: 'ha',   label: 'Hausa' },
                        { id: 'both', label: siteLang === 'ha' ? 'Dukkansu' : 'Both' },
                      ].map(l => (
                        <button
                          key={l.id} type="button"
                          onClick={() => setLang(l.id)}
                          className={`py-2 rounded-xl border text-xs font-semibold transition-all
                            ${lang === l.id
                              ? 'bg-rima-gold/20 border-rima-gold/60 text-rima-gold'
                              : 'bg-white/5 border-white/10 text-white/50 hover:border-rima-gold/30'
                            }`}
                        >
                          {l.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || (!email && !phone)}
                    className="btn-gold flex items-center justify-center gap-2 w-full py-3 disabled:opacity-40"
                  >
                    {loading
                      ? <><span className="w-4 h-4 border-2 border-rima-dark/40 border-t-rima-dark rounded-full animate-spin" /> Subscribing...</>
                      : <><Send size={15} /> {siteLang === 'ha' ? 'Yi Rajista' : 'Subscribe Now'}</>
                    }
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
