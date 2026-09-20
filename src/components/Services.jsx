import {
  PiggyBank, CreditCard, Smartphone, Banknote,
  ShieldCheck, Wallet, Store, ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: PiggyBank,
    title: 'Savings Account',
    hausa: 'Ajiyar Kuɗi',
    desc: 'Open a savings account from ₦500. Earn competitive returns while keeping your money safe, accessible, and Shariah-compliant.',
    color: 'from-emerald-500/20 to-green-600/10',
  },
  {
    icon: CreditCard,
    title: 'Current Account',
    hausa: 'Asusun Kasuwanci',
    desc: 'Unlimited daily transactions for active businesses and professionals. Includes chequebook, overdraft facility, and multi-signatory access.',
    color: 'from-yellow-500/20 to-amber-600/10',
  },
  {
    icon: Banknote,
    title: 'Fixed Deposit',
    hausa: 'Ajiyar Tsayayye',
    desc: 'Lock in your funds for a fixed period and earn higher returns. Ideal for disciplined savings and long-term financial planning.',
    color: 'from-blue-500/20 to-cyan-600/10',
  },
  {
    icon: ShieldCheck,
    title: 'Qard Hasan',
    hausa: 'Lamunin Alheri',
    desc: 'Interest-free benevolent loans for individuals in need — a core pillar of our Shariah-compliant product range. No profit charged.',
    color: 'from-purple-500/20 to-violet-600/10',
  },
  {
    icon: Store,
    title: 'Murabaha Finance',
    hausa: 'Kuɗin Murabaha',
    desc: 'Shariah-compliant trade finance — we purchase goods on your behalf and sell to you at a disclosed profit margin. Halal and transparent.',
    color: 'from-rose-500/20 to-red-600/10',
  },
  {
    icon: Banknote,
    title: 'Micro & SME Loans',
    hausa: 'Lamunin ƙananan Kasuwanci',
    desc: 'Tailored financing for small businesses, traders, farmers, and artisans. Flexible terms, fast approval, and dedicated relationship managers.',
    color: 'from-lime-500/20 to-green-600/10',
  },
  {
    icon: Smartphone,
    title: 'USSD & Mobile Banking',
    hausa: 'Bankin Wayar Hannu',
    desc: 'Bank anywhere via *737# — no internet needed. Full mobile app on Android & iOS for transfers, payments, airtime, and account management.',
    color: 'from-teal-500/20 to-emerald-600/10',
  },
  {
    icon: Wallet,
    title: 'Agent Banking & POS',
    hausa: 'Wakilan Banki da POS',
    desc: '2,000 POS terminals deployed across Northern Nigeria. Accept card and wallet payments, with instant settlement and low transaction fees.',
    color: 'from-orange-500/20 to-amber-600/10',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-rima-dark overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rima-gold/40 to-transparent" />
      <div className="absolute inset-0 pattern-overlay pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-rima-green/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-rima-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Our Products · Ayyukanmu
          </span>
          <h2 className="section-title mb-4">
            Shariah-Compliant Banking<br />
            <span className="gold-text">Built for the North</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-white/60 text-lg max-w-2xl mx-auto mt-4">
            From Qard Hasan and Murabaha financing to digital USSD banking and a 2,000-terminal POS network — 
            Rima MFB is your complete, ethical financial partner.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="card-glass p-6 group cursor-pointer"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color}
                                 border border-rima-gold/20 flex items-center justify-center mb-4
                                 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-rima-gold" />
                </div>
                <h3 className="font-display font-semibold text-white text-base mb-0.5 group-hover:text-rima-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-rima-gold/50 text-xs mb-3 italic">{service.hausa}</p>
                <p className="text-white/55 text-sm leading-relaxed">{service.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-rima-gold/0 group-hover:text-rima-gold transition-all duration-300 text-sm font-medium">
                  Learn more <ArrowRight size={14} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Tech strip */}
        <div className="mt-14 card-glass p-6 flex flex-wrap items-center justify-center gap-8 text-center">
          <p className="text-white/40 text-xs uppercase tracking-widest w-full mb-2">Powered By</p>
          {[
            { label: 'CuteBanker', sub: 'Core Banking Platform' },
            { label: 'NIBSS',      sub: 'Instant Payment Integration' },
            { label: 'Etranzact',  sub: 'Payment Gateway' },
            { label: '*737#',      sub: 'USSD Banking' },
          ].map(t => (
            <div key={t.label} className="flex flex-col items-center gap-1">
              <p className="font-display font-bold text-rima-gold text-lg">{t.label}</p>
              <p className="text-white/40 text-xs">{t.sub}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="btn-gold inline-flex items-center gap-2">
            Explore All Products <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
