import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export default function PageHero({ title, subtitle, hausa, breadcrumb = [] }) {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-green-gradient">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />

      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-rima-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-rima-green-light/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 pattern-overlay opacity-40 pointer-events-none" />

      {/* Animated geometric lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-rima-gold/20 to-transparent w-full"
            style={{ top: `${20 + i * 18}%`, animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-1.5 text-white/40 text-xs mb-6 flex-wrap">
          <Link to="/" className="flex items-center gap-1 hover:text-rima-gold transition-colors">
            <Home size={11} /> Home
          </Link>
          {breadcrumb.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight size={11} />
              {crumb.href
                ? <Link to={crumb.href} className="hover:text-rima-gold transition-colors">{crumb.label}</Link>
                : <span className="text-rima-gold/70">{crumb.label}</span>
              }
            </span>
          ))}
        </nav>

        {/* Title */}
        <div className="inline-flex items-center gap-2 bg-rima-gold/10 border border-rima-gold/30 rounded-full px-4 py-1.5 mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-rima-gold animate-pulse" />
          <span className="text-rima-gold text-xs font-semibold tracking-widest uppercase">{hausa}</span>
        </div>

        <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          {title}
        </h1>
        <div className="divider-gold" />
        {subtitle && (
          <p className="text-white/60 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="#061c12" />
        </svg>
      </div>
    </section>
  )
}
