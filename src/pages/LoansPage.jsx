import { useState } from 'react'
import {
  ShieldCheck, Store, Banknote, Home, Sprout, GraduationCap,
  Calculator, CheckCircle2, ArrowRight, AlertCircle, Clock
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import useScrollReveal from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'

const loanProducts = [
  {
    icon: ShieldCheck,
    title: 'Qard Hasan',
    hausa: 'Lamunin Alheri',
    badge: 'Interest-Free',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    range: 'Up to ₦200,000',
    rate: '0% — No Interest',
    tenor: 'Flexible',
    turnaround: '3 – 5 days',
    color: 'from-purple-600/20 to-violet-800/10',
    isSharia: true,
    desc: 'A benevolent, interest-free loan (riba-free) provided to individuals in genuine financial need. You repay only the principal — no profit, no fees. This is the purest form of Islamic finance.',
    requirements: ['Genuine financial need demonstrated', 'Rima MFB account holder', 'Valid ID & BVN', 'Good standing / no bad debt'],
  },
  {
    icon: Store,
    title: 'Murabaha Finance',
    hausa: 'Kuɗin Murabaha',
    badge: 'Shariah-Compliant',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    range: '₦50,000 – ₦10,000,000',
    rate: 'Fixed profit margin (disclosed)',
    tenor: '3 – 36 months',
    turnaround: '3 – 7 days',
    color: 'from-emerald-600/20 to-green-800/10',
    isSharia: true,
    desc: 'Shariah-compliant trade finance. Rima MFB purchases goods or assets on your behalf and sells to you at a disclosed profit margin — making it halal, transparent, and fully compliant with Islamic finance principles.',
    requirements: ['Pro-forma invoice from supplier', 'Valid ID & BVN', 'Rima MFB account (min 3 months)', 'Guarantor or collateral for larger amounts'],
  },
  {
    icon: Banknote,
    title: 'Micro Business Loan',
    hausa: 'Lamunin Ƙaramin Kasuwanci',
    badge: 'Most Popular',
    badgeColor: 'bg-rima-gold/20 text-rima-gold border-rima-gold/30',
    range: '₦10,000 – ₦500,000',
    rate: 'From 2% / month',
    tenor: '1 – 12 months',
    turnaround: '24 – 48 hours',
    color: 'from-amber-600/20 to-yellow-800/10',
    isSharia: false,
    desc: 'Fast, accessible working capital for market traders, artisans, transporters, and small business owners. Minimal documentation, fast turnaround, and repayment tied to your business cycle.',
    requirements: ['Valid ID & BVN', 'Evidence of business/trade', '3 months bank statement', 'One guarantor'],
  },
  {
    icon: Banknote,
    title: 'SME Business Loan',
    hausa: 'Lamunin Kasuwanci na Matsakaici',
    badge: 'For Businesses',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    range: '₦500,000 – ₦10,000,000',
    rate: 'From 2.5% / month',
    tenor: '3 – 24 months',
    turnaround: '3 – 5 days',
    color: 'from-blue-600/20 to-indigo-800/10',
    isSharia: false,
    desc: 'Tailored financing for registered small and medium enterprises. Working capital, equipment purchase, stock financing, and business expansion — all under one roof.',
    requirements: ['CAC business registration', '6 months bank statement', 'Valid ID & BVN of directors', 'Audited financials (above ₦2M)'],
  },
  {
    icon: Sprout,
    title: 'Agricultural / Farm Loan',
    hausa: 'Lamunin Noma',
    badge: 'Seasonal Repayment',
    badgeColor: 'bg-lime-500/20 text-lime-300 border-lime-500/30',
    range: '₦30,000 – ₦5,000,000',
    rate: 'Subsidized rates',
    tenor: '6 – 18 months',
    turnaround: '5 – 7 days',
    color: 'from-lime-600/20 to-green-800/10',
    isSharia: false,
    desc: 'Designed for farmers, agro-dealers, and rural cooperatives. Repayment is structured around planting and harvest seasons. Field assessment conducted by our dedicated agri-officers.',
    requirements: ['Proof of farmland (ownership or lease)', 'Valid ID & BVN', 'Cooperative membership (preferred)', 'Field assessment required'],
  },
  {
    icon: GraduationCap,
    title: 'Education Loan',
    hausa: 'Lamunin Karatu',
    badge: 'For Students',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    range: '₦20,000 – ₦500,000',
    rate: 'From 2% / month',
    tenor: '3 – 12 months',
    turnaround: '24 – 48 hours',
    color: 'from-teal-600/20 to-emerald-800/10',
    isSharia: false,
    desc: "School fees, WAEC, JAMB, NECO, and university expenses. Don't let money be the reason education stops. Fast disbursement with flexible repayment for parents and guardians.",
    requirements: ['Admission or school fee letter', 'Parent/guardian as guarantor', 'Valid ID & BVN', 'Proof of income or salary'],
  },
  {
    icon: Home,
    title: 'Home Improvement Loan',
    hausa: 'Lamunin Gida',
    badge: 'For Homeowners',
    badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
    range: '₦100,000 – ₦3,000,000',
    rate: 'From 2% / month',
    tenor: '6 – 36 months',
    turnaround: '5 – 7 days',
    color: 'from-rose-600/20 to-red-800/10',
    isSharia: false,
    desc: 'Renovate, furnish, or expand your home with manageable monthly repayments. Available to homeowners and long-term tenants with proof of property.',
    requirements: ['Property ownership doc or tenancy agreement', 'Valid ID & BVN', '6 months bank statement', 'One guarantor required'],
  },
]

function LoanCalculator() {
  const [amount, setAmount] = useState(500000)
  const [months, setMonths] = useState(12)
  const [rate,   setRate]   = useState(2.5)

  const monthlyRate = rate / 100
  const monthly  = amount * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1)
  const total    = monthly * months
  const interest = total - amount
  const fmt      = n => '₦' + Math.round(n).toLocaleString()

  return (
    <div className="card-glass p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-rima-gold/15 border border-rima-gold/30 flex items-center justify-center">
          <Calculator size={18} className="text-rima-gold" />
        </div>
        <div>
          <h3 className="font-display font-bold text-white text-xl">Loan Repayment Calculator</h3>
          <p className="text-white/40 text-xs">Masasshiyar Lamuni · For conventional loans only — Qard Hasan & Murabaha are different</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="text-white/60 text-xs uppercase tracking-wider block mb-2">Loan Amount</label>
          <input type="range" min={10000} max={10000000} step={10000}
            value={amount} onChange={e => setAmount(+e.target.value)}
            className="w-full accent-rima-gold mb-1" />
          <div className="flex justify-between text-xs text-white/40">
            <span>₦10K</span>
            <span className="text-rima-gold font-bold text-sm">{fmt(amount)}</span>
            <span>₦10M</span>
          </div>
        </div>
        <div>
          <label className="text-white/60 text-xs uppercase tracking-wider block mb-2">Repayment Period</label>
          <input type="range" min={1} max={36} step={1}
            value={months} onChange={e => setMonths(+e.target.value)}
            className="w-full accent-rima-gold mb-1" />
          <div className="flex justify-between text-xs text-white/40">
            <span>1 mo.</span>
            <span className="text-rima-gold font-bold text-sm">{months} months</span>
            <span>36 mo.</span>
          </div>
        </div>
        <div>
          <label className="text-white/60 text-xs uppercase tracking-wider block mb-2">Monthly Rate</label>
          <input type="range" min={1} max={5} step={0.5}
            value={rate} onChange={e => setRate(+e.target.value)}
            className="w-full accent-rima-gold mb-1" />
          <div className="flex justify-between text-xs text-white/40">
            <span>1%</span>
            <span className="text-rima-gold font-bold text-sm">{rate}% / month</span>
            <span>5%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        {[
          { label: 'Monthly Payment', value: fmt(monthly), highlight: true },
          { label: 'Total Interest',  value: fmt(interest) },
          { label: 'Total Repayment', value: fmt(total) },
        ].map(item => (
          <div key={item.label} className={`rounded-2xl p-4 text-center ${item.highlight ? 'bg-rima-gold/20 border border-rima-gold/40' : 'bg-white/5 border border-white/10'}`}>
            <p className={`font-display font-extrabold text-xl ${item.highlight ? 'text-rima-gold' : 'text-white'}`}>{item.value}</p>
            <p className="text-white/50 text-xs mt-0.5">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="flex items-start gap-2 text-white/40 text-xs mb-4">
        <AlertCircle size={12} className="mt-0.5 flex-shrink-0 text-rima-gold/50" />
        This is an estimate only. Qard Hasan is 0% interest. Murabaha uses a fixed profit margin agreed upfront.
      </div>

      <Link to="/contact" className="btn-gold flex items-center justify-center gap-2 w-full">
        Apply for a Loan <ArrowRight size={16} />
      </Link>
    </div>
  )
}

function RevealCard({ children, delay = 0 }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function LoansPage() {
  return (
    <div className="min-h-screen bg-rima-dark">
      <Navbar />
      <PageHero
        title="Loans & Financing"
        hausa="Lamuni da Tallafi · Halal & Accessible"
        subtitle="From interest-free Qard Hasan to Murabaha trade finance and SME loans — Rima MFB offers ethical, affordable financing for every need."
        breadcrumb={[{ label: 'Loans' }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-6">
        {/* Shariah highlight */}
        <RevealCard>
          <div className="card-glass p-6 mb-12 border border-rima-gold/40 flex flex-wrap items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-rima-gold/15 border border-rima-gold/30 flex items-center justify-center flex-shrink-0">
              <ShieldCheck size={28} className="text-rima-gold" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-rima-gold font-bold text-lg font-display">Shariah-Compliant Financing Available</p>
              <p className="text-white/65 text-sm mt-1">
                Rima MFB offers <strong className="text-white">Qard Hasan</strong> (0% interest-free loans) and{' '}
                <strong className="text-white">Murabaha</strong> (trade finance with disclosed profit margin) —
                approved by our Shariah supervisory board. No riba. No hidden charges. 100% halal.
              </p>
            </div>
            <Link to="/contact" className="btn-gold text-sm px-5 py-2 flex-shrink-0">
              Apply Now
            </Link>
          </div>
        </RevealCard>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: 'Loan Products',   value: '7+' },
            { label: 'Min. Loan',       value: '₦10K' },
            { label: 'Max. Loan',       value: '₦10M' },
            { label: 'Fastest Approval',value: '24 hrs' },
          ].map((s, i) => (
            <RevealCard key={s.label} delay={i * 80}>
              <div className="card-glass p-5 text-center">
                <p className="font-display text-3xl font-extrabold gold-text">{s.value}</p>
                <p className="text-white/60 text-sm mt-1">{s.label}</p>
              </div>
            </RevealCard>
          ))}
        </div>

        {/* Calculator */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-white">Calculate Your Repayment</h2>
            <div className="divider-gold" />
          </div>
          <RevealCard><LoanCalculator /></RevealCard>
        </div>

        {/* Loan cards */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-bold text-white">All Loan Products</h2>
          <div className="divider-gold" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {loanProducts.map((loan, i) => {
            const Icon = loan.icon
            return (
              <RevealCard key={loan.title} delay={i * 80}>
                <div className={`card-glass p-6 h-full bg-gradient-to-b ${loan.color} group`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-rima-gold/10 border border-rima-gold/20 flex items-center justify-center
                                    group-hover:scale-110 transition-transform">
                      <Icon size={22} className="text-rima-gold" />
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${loan.badgeColor}`}>
                      {loan.badge}
                    </span>
                  </div>

                  {loan.isSharia && (
                    <div className="inline-flex items-center gap-1.5 bg-rima-gold/10 border border-rima-gold/20 rounded-full px-2.5 py-0.5 mb-3">
                      <ShieldCheck size={10} className="text-rima-gold" />
                      <span className="text-rima-gold text-xs font-semibold">Shariah-Compliant</span>
                    </div>
                  )}

                  <p className="text-rima-gold/50 text-xs italic mb-0.5">{loan.hausa}</p>
                  <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-rima-gold transition-colors">{loan.title}</h3>
                  <p className="text-white/55 text-sm mb-4">{loan.desc}</p>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      { l: 'Range',      v: loan.range },
                      { l: 'Rate',       v: loan.rate },
                      { l: 'Tenor',      v: loan.tenor },
                      { l: 'Turnaround', v: loan.turnaround },
                    ].map(m => (
                      <div key={m.l} className="bg-white/5 rounded-lg p-2">
                        <p className="text-white/40 text-xs">{m.l}</p>
                        <p className="text-rima-gold text-xs font-semibold">{m.v}</p>
                      </div>
                    ))}
                  </div>

                  <details className="mb-4">
                    <summary className="text-rima-gold/70 text-xs cursor-pointer hover:text-rima-gold flex items-center gap-1">
                      <Clock size={11} /> Requirements
                    </summary>
                    <ul className="mt-2 space-y-1">
                      {loan.requirements.map(r => (
                        <li key={r} className="flex items-start gap-2 text-white/50 text-xs">
                          <CheckCircle2 size={10} className="text-rima-gold/60 mt-0.5 flex-shrink-0" />{r}
                        </li>
                      ))}
                    </ul>
                  </details>

                  <Link to="/contact" className="btn-gold text-xs py-2 flex items-center justify-center gap-1">
                    Apply Now <ArrowRight size={12} />
                  </Link>
                </div>
              </RevealCard>
            )
          })}
        </div>

        {/* Apply process */}
        <RevealCard>
          <div className="card-glass p-10 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-2">How to Apply</h2>
            <p className="text-white/50 mb-10 text-sm">Simple steps · Matakai masu sauƙi</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                { n: 1, t: 'Choose Loan',      d: 'Select the product that matches your need — Qard Hasan, Murabaha, or a conventional loan.' },
                { n: 2, t: 'Submit Documents', d: 'Visit any branch with your ID, BVN, and required documents. Our team will guide you.' },
                { n: 3, t: 'Assessment',       d: 'Credit and Shariah review completed in 24 hours to 5 days depending on loan type.' },
                { n: 4, t: 'Disbursement',     d: 'Funds credited directly to your Rima MFB account. Start using them immediately.' },
              ].map(s => (
                <div key={s.n} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-rima-gold/15 border-2 border-rima-gold/40 flex items-center justify-center mx-auto mb-3">
                    <span className="font-display font-extrabold text-2xl text-rima-gold">{s.n}</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{s.t}</h3>
                  <p className="text-white/50 text-sm">{s.d}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/contact" className="btn-gold flex items-center gap-2">Apply Now <ArrowRight size={16} /></Link>
              <a href="tel:08000000000" className="btn-outline-gold">Speak to a Loan Officer</a>
            </div>
          </div>
        </RevealCard>
      </section>
      <Footer />
    </div>
  )
}
