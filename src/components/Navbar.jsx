import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import LanguageToggle from './LanguageToggle'
import { useLang } from '../context/LanguageContext'
import GlobalSearch from './GlobalSearch'

export default function Navbar() {
  const [open, setOpen]         = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdown, setDropdown] = useState(null)
  const location = useLocation()
  const { t } = useLang()

  const navLinks = [
    { label: t('nav_home'), href: '/' },
    {
      label: t('nav_banking'),
      children: [
        { label: t('nav_personal'),  href: '/personal',  sub: t('nav_personal_sub') },
        { label: t('nav_business'),  href: '/business',  sub: t('nav_business_sub') },
        { label: t('nav_loans'),     href: '/loans',     sub: t('nav_loans_sub') },
        { label: t('nav_shariah'),   href: '/shariah',   sub: 'Qard Hasan · Murabaha' },
      ]
    },
    { label: t('nav_services'), href: '/services' },
    {
      label: 'More',
      children: [
        { label: 'About Us',           href: '/about',           sub: 'Est. 1992 · Our story' },
        { label: 'Success Stories',    href: '/success-stories', sub: 'Real customer results' },
        { label: 'Financial Literacy', href: '/learn',           sub: 'Learn in English & Hausa' },
        { label: 'Careers',            href: '/careers',         sub: '6 open positions' },
      ]
    },
    { label: t('nav_contact'), href: '/contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); setDropdown(null) }, [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-rima-dark/95 backdrop-blur-md shadow-lg shadow-black/40 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <Logo size={44} className="transition-transform duration-300 group-hover:scale-110" />
          <div>
            <p className="font-display font-bold text-xl text-rima-gold leading-none">RIMA MFB</p>
            <p className="text-xs text-rima-gold/60 tracking-widest uppercase">Made For Us By Us</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-5">
          {navLinks.map(link => (
            <li key={link.label} className="relative">
              {link.children ? (
                <div>
                  <button
                    onClick={() => setDropdown(dropdown === link.label ? null : link.label)}
                    onMouseEnter={() => setDropdown(link.label)}
                    className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-rima-gold transition-colors"
                  >
                    {link.label}
                    <ChevronDown size={13} className={`transition-transform ${dropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdown === link.label && (
                    <div
                      onMouseLeave={() => setDropdown(null)}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-rima-dark/98
                                 border border-rima-gold/20 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden backdrop-blur-md z-50"
                    >
                      {link.children.map(child => (
                        <Link key={child.href} to={child.href}
                          className="block px-4 py-3 hover:bg-rima-gold/10 transition-colors border-b border-rima-gold/10 last:border-0">
                          <p className="text-white text-sm font-medium">{child.label}</p>
                          <p className="text-white/40 text-xs">{child.sub}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link to={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative
                             after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5
                             after:bg-rima-gold after:transition-all after:duration-300
                             hover:after:w-full hover:text-rima-gold
                             ${location.pathname === link.href ? 'text-rima-gold after:w-full' : 'text-white/80'}`}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right: Search + Lang toggle + CTAs */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <GlobalSearch />
          <LanguageToggle />
          <Link to="/open-account" className="btn-outline-gold text-xs px-4 py-2">{t('nav_login')}</Link>
          <Link to="/open-account" className="btn-gold text-xs px-4 py-2">{t('nav_open')}</Link>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-3">
          <LanguageToggle />
          <button onClick={() => setOpen(!open)} className="text-rima-gold p-2" aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`lg:hidden transition-all duration-400 overflow-hidden ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-rima-dark/98 backdrop-blur-md px-6 pb-6 pt-2 border-t border-rima-gold/20">
          <ul className="flex flex-col gap-2 mb-6">
            {navLinks.map(link => (
              <li key={link.label}>
                {link.children ? (
                  <div>
                    <p className="text-rima-gold/50 text-xs font-bold uppercase tracking-wider py-2">{link.label}</p>
                    {link.children.map(c => (
                      <Link key={c.href} to={c.href}
                        className={`block py-1.5 pl-3 text-sm transition-colors ${
                          location.pathname === c.href ? 'text-rima-gold' : 'text-white/70 hover:text-rima-gold'
                        }`}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link to={link.href}
                    className={`block py-2 font-medium transition-colors ${
                      location.pathname === link.href ? 'text-rima-gold' : 'text-white/80 hover:text-rima-gold'
                    }`}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <Link to="/open-account" className="btn-outline-gold text-center text-sm">{t('nav_login')}</Link>
            <Link to="/open-account" className="btn-gold text-center text-sm">{t('nav_open')}</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
