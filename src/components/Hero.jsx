import { useState, useEffect } from 'react'
import { ArrowRight, Shield, Wifi, Users, Play } from 'lucide-react'
import Logo from './Logo'

const rotatingWords = ['Traders', 'Farmers', 'Families', 'Students', 'Entrepreneurs', 'Everyone']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setWordIndex(i => (i + 1) % rotatingWords.length)
        setFade(true)
      }, 400)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-green-gradient"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-rima-gold/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-rima-green-light/20 blur-3xl" />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,162,39,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />
      <div className="absolute inset-0 pattern-overlay opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-rima-gold/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-rima-gold/10 border border-rima-gold/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-rima-gold-bright animate-pulse" />
            <span className="text-rima-gold text-xs font-semibold tracking-wider uppercase">
              CBN Licensed · Est. 1992 · Sokoto State
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            <span className="text-white">Banking Built</span>
            <br />
            <span className="text-white">for </span>
            <span
              className={`gold-text transition-all duration-400 inline-block ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
            >
              {rotatingWords[wordIndex]}
            </span>
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-3 max-w-lg">
            Rima MFB has been serving Northern Nigeria since 1992 — bringing accessible,
            Shariah-compliant financial services to individuals, traders, and small businesses.
          </p>
          <p className="text-rima-gold/60 italic text-base mb-8 max-w-lg">
            "Bankin ku — Made For Us By Us"
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="/contact" className="btn-gold flex items-center gap-2 text-base">
              Open Free Account <ArrowRight size={18} />
            </a>
            <a href="/services" className="btn-outline-gold flex items-center gap-2 text-base">
              <Play size={15} className="fill-current" /> Our Services
            </a>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { icon: Shield, label: 'CBN Licensed' },
              { icon: Wifi,   label: 'USSD Banking' },
              { icon: Users,  label: 'Shariah-Compliant' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/60 text-sm">
                <Icon size={15} className="text-rima-gold" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — floating logo card */}
        <div className="flex justify-center items-center">
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-full bg-rima-gold/20 blur-2xl scale-125" />
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl
                            bg-gradient-to-br from-rima-green-mid to-rima-dark
                            border-2 border-rima-gold/40
                            flex flex-col items-center justify-center gap-4
                            shadow-2xl shadow-black/60">
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-rima-gold rounded-tl-lg" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-rima-gold rounded-tr-lg" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-rima-gold rounded-bl-lg" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-rima-gold rounded-br-lg" />
              <Logo size={130} className="rounded-xl" />
              <div className="text-center px-4">
                <p className="font-display font-bold text-2xl text-rima-gold">RIMA MFB</p>
                <p className="text-rima-gold/60 text-xs tracking-[0.25em] uppercase mt-1">Made For Us By Us</p>
              </div>
              <div className="flex gap-2">
                {[0,1,2].map(i => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-rima-gold animate-pulse" style={{ animationDelay: `${i*0.3}s` }} />
                ))}
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-rima-gold text-rima-dark rounded-xl px-3 py-2 shadow-lg text-xs font-bold">
              ✓ CBN Approved
            </div>
            <div className="absolute -bottom-4 -left-4 bg-rima-green-mid border border-rima-gold/40 rounded-xl px-3 py-2 shadow-lg text-xs text-rima-gold font-semibold">
              📍 Gwaranyo, Sokoto
            </div>
          </div>
        </div>
      </div>

      {/* Live stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-t border-rima-gold/15 py-3 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-around gap-4 text-center">
          {[
            { label: 'Est.',              value: '1992' },
            { label: 'Current Customers', value: '25,000+' },
            { label: 'Target — Year 1',   value: '500,000' },
            { label: 'POS Terminals',     value: '2,000' },
            { label: 'USSD Code',         value: '*737#' },
          ].map(s => (
            <div key={s.label}>
              <p className="font-display font-bold text-rima-gold text-lg">{s.value}</p>
              <p className="text-white/40 text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
