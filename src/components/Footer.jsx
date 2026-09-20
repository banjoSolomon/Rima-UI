import { Facebook, Twitter, Instagram, Youtube, ArrowUp, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const footerLinks = {
  'Products': [
    'Savings Account',
    'Current Account',
    'Fixed Deposit',
    'Qard Hasan',
    'Murabaha Finance',
    'Micro & SME Loans',
  ],
  'Digital Banking': [
    'USSD Banking *737#',
    'Mobile App (Android)',
    'Mobile App (iOS)',
    'Agent Banking',
    'POS Terminals',
    'Bill Payments',
  ],
  'Company': [
    'About Us',
    'Islamic Banking',
    'Success Stories',
    'Careers',
    'News & Updates',
    'Financial Literacy',
  ],
  'Support': [
    'Help Centre',
    'FAQs',
    'Contact Us',
    'Privacy Policy',
    'Report Fraud',
    'Cookie Policy',
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
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Smartphone size={22} className="text-rima-gold" />
            <div>
              <p className="text-white font-semibold text-sm">Bank Anytime, Anywhere</p>
              <p className="text-white/50 text-xs">No internet? No problem. Dial our USSD code on any phone.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-display text-3xl font-extrabold gold-text tracking-widest">*737#</span>
            <Link to="/contact" className="btn-gold text-sm px-5 py-2">Get Started</Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <Logo size={40} />
              <div>
                <p className="font-display font-bold text-lg text-rima-gold">RIMA MFB</p>
                <p className="text-xs text-rima-gold/50 tracking-widest uppercase">Made For Us By Us</p>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-2 max-w-xs">
              Rima Microfinance Bank — serving Northern Nigeria since{' '}
              <span className="text-rima-gold font-semibold">1992</span>.
            </p>
            <p className="text-white/35 text-xs mb-2">
              📍 Gwaranyo LGA, Sokoto State, Nigeria
            </p>
            <p className="text-rima-gold/50 italic text-xs mb-5">
              "Bankin ku — Made For Us By Us"
            </p>

            {/* Powered by */}
            <div className="bg-white/5 rounded-xl p-3 mb-5 border border-rima-gold/10">
              <p className="text-white/30 text-xs uppercase tracking-wider mb-2">Powered By</p>
              <div className="flex flex-wrap gap-2">
                {['CuteBanker', 'NIBSS', 'Etranzact'].map(t => (
                  <span key={t} className="text-rima-gold/70 text-xs font-semibold bg-rima-gold/10 px-2 py-0.5 rounded-md">{t}</span>
                ))}
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-full border border-rima-gold/30 flex items-center justify-center
                             text-white/50 hover:text-rima-gold hover:border-rima-gold transition-all duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-rima-gold font-semibold text-sm mb-4 uppercase tracking-wider">{title}</p>
              <ul className="flex flex-col gap-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-white/50 hover:text-rima-gold text-sm transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-rima-gold/15 pt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="text-white/30 text-xs space-y-1">
            <p>© {new Date().getFullYear()} Rima Microfinance Bank Limited. All rights reserved.</p>
            <p>
              Licensed by the Central Bank of Nigeria (CBN) ·
              Headquartered in Gwaranyo LGA, Sokoto State, Nigeria ·
              Est. 1992
            </p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full border border-rima-gold/30 flex items-center justify-center
                       text-rima-gold hover:bg-rima-gold hover:text-rima-dark transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
