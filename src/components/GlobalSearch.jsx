import { useState, useEffect, useRef } from 'react'
import { Search, X, ArrowRight, BookOpen, Banknote, Users, ShieldCheck, Building2, Phone, Briefcase } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const searchIndex = [
  // Pages
  { type: 'page', icon: Building2,  title: 'Home',               sub: 'Rima MFB homepage',             href: '/',                tags: ['home', 'rima', 'mfb', 'bank'] },
  { type: 'page', icon: ShieldCheck,title: 'About Us',            sub: 'Est. 1992 · Our story',         href: '/about',           tags: ['about', 'history', 'story', 'founded', '1992', 'sokoto', 'gwaranyo'] },
  { type: 'page', icon: Banknote,   title: 'Personal Banking',    sub: 'Savings, cards & more',         href: '/personal',        tags: ['personal', 'savings', 'account', 'debit', 'card'] },
  { type: 'page', icon: Building2,  title: 'Business Banking',    sub: 'For traders & SMEs',            href: '/business',        tags: ['business', 'sme', 'trader', 'cooperative', 'pos'] },
  { type: 'page', icon: Banknote,   title: 'Loans & Finance',     sub: 'Qard Hasan, Murabaha & more',   href: '/loans',           tags: ['loan', 'lamuni', 'borrow', 'finance', 'credit'] },
  { type: 'page', icon: ShieldCheck,title: 'Islamic Banking',     sub: 'Qard Hasan · Murabaha · Halal', href: '/shariah',         tags: ['shariah', 'islamic', 'halal', 'murabaha', 'qard', 'hasan', 'riba'] },
  { type: 'page', icon: Building2,  title: 'Our Services',        sub: 'All banking products',          href: '/services',        tags: ['services', 'products', 'ussd', '737', 'agent'] },
  { type: 'page', icon: Users,      title: 'Success Stories',     sub: 'Real customer results',         href: '/success-stories', tags: ['success', 'stories', 'customers', 'case study'] },
  { type: 'page', icon: Briefcase,  title: 'Careers',             sub: '6 open positions',              href: '/careers',         tags: ['careers', 'jobs', 'work', 'vacancies', 'employment'] },
  { type: 'page', icon: BookOpen,   title: 'Financial Literacy',  sub: 'Learn banking in Hausa & English', href: '/learn',        tags: ['learn', 'literacy', 'bvn', 'ndic', 'ussd', 'education'] },
  { type: 'page', icon: Phone,      title: 'Contact Us',          sub: 'Get in touch with Rima MFB',    href: '/contact',         tags: ['contact', 'phone', 'email', 'branch', 'support'] },
  { type: 'page', icon: ShieldCheck,title: 'Privacy Policy',      sub: 'NDPR compliant data policy',    href: '/privacy',         tags: ['privacy', 'policy', 'ndpr', 'data', 'cookies'] },

  // Products
  { type: 'product', icon: Banknote,   title: 'Starter Savings Account', sub: '₦500 min · Free card · Shariah option', href: '/personal',    tags: ['savings', 'ajiya', 'starter', 'account', '500'] },
  { type: 'product', icon: Banknote,   title: 'Current Account',         sub: 'Unlimited transactions · ₦5,000 min',   href: '/personal',    tags: ['current', 'account', 'business', 'unlimited'] },
  { type: 'product', icon: Banknote,   title: 'Fixed Deposit',           sub: 'Higher returns · Lock your funds',       href: '/services',    tags: ['fixed', 'deposit', 'investment', 'interest'] },
  { type: 'product', icon: ShieldCheck,title: 'Qard Hasan',              sub: '0% interest-free loan · Shariah',        href: '/shariah',     tags: ['qard', 'hasan', 'interest free', 'halal', 'lamuni alheri'] },
  { type: 'product', icon: ShieldCheck,title: 'Murabaha Finance',        sub: 'Halal trade finance · No riba',          href: '/shariah',     tags: ['murabaha', 'trade', 'halal', 'finance', 'goods'] },
  { type: 'product', icon: Banknote,   title: 'Micro Business Loan',     sub: '₦10K – ₦500K · Fast approval',          href: '/loans',       tags: ['micro', 'loan', 'business', 'trader', 'small'] },
  { type: 'product', icon: Banknote,   title: 'Agricultural Loan',       sub: 'Harvest-cycle repayment · For farmers',  href: '/loans',       tags: ['agri', 'farm', 'noma', 'farmer', 'harvest', 'crop'] },
  { type: 'product', icon: Building2,  title: 'USSD Banking *737#',      sub: 'No internet · Any phone · Any network',  href: '/services',    tags: ['ussd', '737', 'mobile', 'phone', 'transfer', 'airtime'] },
  { type: 'product', icon: Building2,  title: 'POS / Agent Banking',     sub: '2,000 terminals across Northern Nigeria',href: '/services',    tags: ['pos', 'agent', 'terminal', 'payment', 'card'] },

  // Apply CTAs
  { type: 'action', icon: ArrowRight, title: 'Apply for a Loan',   sub: 'Start your loan application',   href: '/loans/apply',    tags: ['apply', 'loan', 'application', 'form'] },
  { type: 'action', icon: ArrowRight, title: 'Open an Account',    sub: 'Join 25,000+ customers',        href: '/open-account',   tags: ['open', 'account', 'register', 'join', 'start'] },
]

const typeColors = {
  page:    'bg-blue-500/15 text-blue-400 border-blue-500/20',
  product: 'bg-rima-gold/15 text-rima-gold border-rima-gold/20',
  action:  'bg-green-500/15 text-green-400 border-green-500/20',
}

export default function GlobalSearch() {
  const [open, setOpen]     = useState(false)
  const [query, setQuery]   = useState('')
  const [cursor, setCursor] = useState(0)
  const inputRef            = useRef(null)
  const navigate            = useNavigate()

  const results = query.length < 2 ? [] : searchIndex.filter(item => {
    const q = query.toLowerCase()
    return (
      item.title.toLowerCase().includes(q) ||
      item.sub.toLowerCase().includes(q) ||
      item.tags.some(t => t.includes(q))
    )
  }).slice(0, 8)

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(o => !o)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setQuery('')
      setCursor(0)
    }
  }, [open])

  // Arrow key navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setCursor(c => Math.min(c + 1, results.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setCursor(c => Math.max(c - 1, 0)) }
    if (e.key === 'Enter' && results[cursor]) go(results[cursor].href)
  }

  const go = (href) => {
    navigate(href)
    setOpen(false)
    setQuery('')
  }

  if (!open) return (
    <button
      onClick={() => setOpen(true)}
      className="hidden md:flex items-center gap-2 bg-white/5 border border-rima-gold/20 rounded-xl
                 px-3 py-1.5 text-white/40 hover:text-white hover:border-rima-gold/40 transition-all text-xs"
      aria-label="Search"
    >
      <Search size={13} />
      <span>Search...</span>
      <span className="ml-2 bg-white/10 px-1.5 py-0.5 rounded text-[10px] font-mono">Ctrl K</span>
    </button>
  )

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200]"
        onClick={() => setOpen(false)}
      />

      {/* Search modal */}
      <div className="fixed top-[10%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-[201] px-4">
        <div className="bg-rima-dark border border-rima-gold/30 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden">
          {/* Input */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-rima-gold/15">
            <Search size={18} className="text-rima-gold flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={e => { setQuery(e.target.value); setCursor(0) }}
              onKeyDown={handleKeyDown}
              placeholder="Search pages, products, services..."
              className="flex-1 bg-transparent text-white placeholder-white/30 outline-none text-base"
            />
            {query && (
              <button onClick={() => setQuery('')} className="text-white/30 hover:text-white transition-colors">
                <X size={16} />
              </button>
            )}
            <button onClick={() => setOpen(false)}
              className="text-white/30 hover:text-white transition-colors text-xs border border-white/15 px-2 py-1 rounded-lg">
              Esc
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {query.length < 2 && (
              <div className="px-5 py-8 text-center">
                <Search size={32} className="text-rima-gold/20 mx-auto mb-3" />
                <p className="text-white/30 text-sm">Type at least 2 characters to search</p>
                <p className="text-white/20 text-xs mt-1">Products · Pages · Services · Articles</p>
              </div>
            )}

            {query.length >= 2 && results.length === 0 && (
              <div className="px-5 py-8 text-center">
                <p className="text-white/40 text-sm">No results for "<span className="text-rima-gold">{query}</span>"</p>
                <p className="text-white/20 text-xs mt-1">Try: savings, loan, ussd, murabaha, contact</p>
              </div>
            )}

            {results.map((item, i) => {
              const Icon = item.icon
              return (
                <button
                  key={item.title + item.href}
                  onClick={() => go(item.href)}
                  onMouseEnter={() => setCursor(i)}
                  className={`w-full flex items-center gap-4 px-5 py-3.5 text-left transition-colors border-b border-rima-gold/5 last:border-0
                    ${cursor === i ? 'bg-rima-gold/10' : 'hover:bg-white/5'}`}
                >
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-rima-gold/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-rima-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium">{item.title}</p>
                    <p className="text-white/40 text-xs truncate">{item.sub}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border capitalize flex-shrink-0 ${typeColors[item.type]}`}>
                    {item.type}
                  </span>
                  <ArrowRight size={13} className={`flex-shrink-0 transition-colors ${cursor === i ? 'text-rima-gold' : 'text-white/20'}`} />
                </button>
              )
            })}
          </div>

          {/* Footer hint */}
          <div className="px-5 py-2.5 border-t border-rima-gold/10 flex items-center gap-4 text-white/25 text-xs">
            <span>↑↓ navigate</span>
            <span>↵ open</span>
            <span>Esc close</span>
          </div>
        </div>
      </div>
    </>
  )
}
