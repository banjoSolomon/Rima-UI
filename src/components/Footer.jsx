import { Facebook, Twitter, Instagram, Youtube, ArrowUp, Smartphone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const links = {
  'Banking': [
    { label: 'Personal Banking',  href: '/personal' },
    { label: 'Business Banking',  href: '/business' },
    { label: 'Loans & Finance',   href: '/loans' },
    { label: 'Islamic Banking',   href: '/shariah' },
  ],
  'Company': [
    { label: 'About Us',          href: '/about' },
    { label: 'Careers',           href: '/careers' },
    { label: 'Success Stories',   href: '/success-stories' },
    { label: 'Financial Literacy',href: '/learn' },
  ],
  'Support': [
    { label: 'Contact Us',        href: '/contact' },
    { label: 'Open Account',      href: '/open-account' },
    { label: 'Apply for Loan',    href: '/loans/apply' },
    { label: 'Privacy Policy',    href: '/privacy' },
    { label: 'Report Fraud',      href: '/contact' },
  ],
}

const socials = [
  { icon: Facebook,  href: '#', label: 'Facebook' },
  { icon: Twitter,   href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube,   href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative bg-rima-dark border-t border-rima-gold/20">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-gradient" />

      {/* USSD banner */}
      <div className="bg-rima-green-mid border-b border-rima-gold/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Smartphone size={20} className="text-rima-gold" />
            <div>
              <p className="text-white font-semibold text-sm">Bank Anytime — No Internet Needed</p>
              <p className="text-white/40 text-xs">Dial on any phone, any network</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-display text-2xl font-extrabold gold-text tracking-widest">*737#</span>
            <Link to="/open-account" className="btn-gold text-xs px-4 py-2">Open Account</Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <Logo size={36} />
              <div>
                <p className="font-display font-bold text-base text-rima-gold leading-none">RIMA MFB</p>
                <p className="text-xs text-rima-gold/50 tracking-widest uppercase">Est. 1992</p>
              </div>
            </Link>
            <p className="text-white/45 text-xs leading-relaxed mb-3">
              CBN Licensed Microfinance Bank serving Northern Nigeria.
            </p>
            <div className="flex items-center gap-1.5 text-white/30 text-xs mb-4">
              <MapPin size={11} className="text-rima-gold/50 flex-shrink-0" />
              Gwaranyo LGA, Sokoto State
            </div>
            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-8 h-8 rounded-full border border-rima-gold/25 flex items-center justify-center
                             text-white/40 hover:text-rima-gold hover:border-rima-gold transition-all duration-200">
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <p className="text-rima-gold font-semibold text-xs mb-3 uppercase tracking-wider">{title}</p>
              <ul className="flex flex-col gap-2">
                {items.map(item => (
                  <li key={item.label}>
                    <Link to={item.href}
                      className="text-white/45 hover:text-rima-gold text-xs transition-colors duration-200">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-rima-gold/10 pt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-white/25 text-xs">
              © {new Date().getFullYear()} Rima Microfinance Bank Limited · CBN Licensed · NDIC Insured
            </p>
            <span className="text-white/15 hidden sm:inline">·</span>
            <Link to="/privacy" className="text-white/30 hover:text-rima-gold text-xs transition-colors">
              Privacy Policy
            </Link>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-8 h-8 rounded-full border border-rima-gold/25 flex items-center justify-center
                       text-rima-gold/60 hover:bg-rima-gold hover:text-rima-dark transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
