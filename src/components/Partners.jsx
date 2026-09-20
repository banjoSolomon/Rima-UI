import { ShieldCheck, ExternalLink } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import useScrollReveal from '../hooks/useScrollReveal'

const partners = [
  {
    name: 'Central Bank of Nigeria',
    short: 'CBN',
    role: 'Regulatory Authority',
    roleHa: 'Mai Kula da Banki',
    desc: 'Fully licensed microfinance bank regulated by the CBN under the Microfinance Policy Framework.',
    color: 'from-green-700/30 to-green-900/20',
    border: 'border-green-600/30',
    href: 'https://www.cbn.gov.ng',
  },
  {
    name: 'Nigeria Deposit Insurance Corp.',
    short: 'NDIC',
    role: 'Deposit Protection',
    roleHa: 'Tsaron Ajiyar Kuɗi',
    desc: 'All customer deposits insured up to ₦500,000 per depositor by the NDIC.',
    color: 'from-blue-700/30 to-blue-900/20',
    border: 'border-blue-600/30',
    href: 'https://www.ndic.gov.ng',
  },
  {
    name: 'NIBSS Instant Payment',
    short: 'NIBSS',
    role: 'Instant Transfers',
    roleHa: 'Aikawa Kuɗi Nan Take',
    desc: 'Nigeria Inter-Bank Settlement System integration for real-time inter-bank payment processing.',
    color: 'from-purple-700/30 to-purple-900/20',
    border: 'border-purple-600/30',
    href: 'https://www.nibss-plc.com.ng',
  },
  {
    name: 'Etranzact International',
    short: 'Etranzact',
    role: 'Payment Gateway',
    roleHa: 'Ƙofar Biyan Kuɗi',
    desc: 'Powers bill payments, airtime top-up, merchant collections, and POS transaction processing.',
    color: 'from-orange-700/30 to-orange-900/20',
    border: 'border-orange-600/30',
    href: 'https://www.etranzact.com',
  },
  {
    name: 'CuteBanker',
    short: 'CuteBanker',
    role: 'Core Banking Platform',
    roleHa: 'Tsarin Banki na Dijital',
    desc: 'End-to-end core banking software powering accounts, loans, transactions, and reporting.',
    color: 'from-teal-700/30 to-teal-900/20',
    border: 'border-teal-600/30',
    href: '#',
  },
]

export default function Partners() {
  const { t, lang } = useLang()
  const { ref, visible } = useScrollReveal()

  return (
    <section className="relative py-20 bg-rima-dark overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rima-gold/30 to-transparent" />
      <div className="absolute inset-0 pattern-overlay opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-rima-gold text-xs font-bold tracking-widest uppercase">
            {t('partners_badge')}
          </span>
          <h2 className="font-display text-4xl font-bold text-white mt-2 mb-3">
            {t('partners_title')}
          </h2>
          <div className="divider-gold" />
          <p className="text-white/55 text-base max-w-xl mx-auto mt-4">
            {t('partners_desc')}
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-5 gap-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {partners.map((p, i) => (
            <a
              key={p.short}
              href={p.href}
              target={p.href !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`card-glass p-5 text-center group bg-gradient-to-b ${p.color} border ${p.border}
                          hover:scale-105 transition-all duration-300`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Shield icon */}
              <div className="w-12 h-12 rounded-full bg-white/5 border border-rima-gold/20 flex items-center justify-center mx-auto mb-3
                              group-hover:border-rima-gold/50 transition-colors">
                <ShieldCheck size={20} className="text-rima-gold" />
              </div>

              {/* Short name */}
              <p className="font-display font-extrabold text-xl text-rima-gold mb-0.5">{p.short}</p>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                {lang === 'ha' ? p.roleHa : p.role}
              </p>
              <p className="text-white/50 text-xs leading-relaxed hidden lg:block">{p.desc}</p>

              {p.href !== '#' && (
                <ExternalLink size={11} className="text-rima-gold/30 mx-auto mt-2 group-hover:text-rima-gold/60 transition-colors" />
              )}
            </a>
          ))}
        </div>

        {/* Compliance strip */}
        <div className="mt-8 card-glass p-4 flex flex-wrap items-center justify-center gap-3 text-center">
          <ShieldCheck size={16} className="text-rima-gold flex-shrink-0" />
          <p className="text-white/50 text-xs">
            {lang === 'ha'
              ? 'Rima Microfinance Bank Limited · Lasisi CBN · Gwaranyo LGA, Jihar Sakkwato · An kafa 1992 · Ajiyar ku an daure shi da NDIC'
              : 'Rima Microfinance Bank Limited · CBN Licensed · Gwaranyo LGA, Sokoto State · Est. 1992 · Deposits protected by NDIC'
            }
          </p>
        </div>
      </div>
    </section>
  )
}
