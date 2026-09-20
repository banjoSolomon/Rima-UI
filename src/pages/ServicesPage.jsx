import { useState } from 'react'
import {
  PiggyBank, CreditCard, Banknote, Smartphone, Wallet,
  Store, ShieldCheck, CheckCircle2, ArrowRight,
  ChevronDown, ChevronUp, Users, Clock, FileText, Cpu
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import useScrollReveal from '../hooks/useScrollReveal'

const services = [
  {
    id: 'savings',
    icon: PiggyBank,
    title: 'Savings Account',
    hausa: 'Ajiyar Kuɗi',
    tagline: 'Save from as little as ₦500',
    color: 'from-emerald-500/20 to-green-700/10',
    accent: '#22a05a',
    desc: 'Our flagship savings account is designed for individuals, households, traders, and students across Northern Nigeria. Fully Shariah-compliant with competitive returns.',
    features: [
      'Minimum opening balance: ₦500',
      'Competitive profit-sharing returns',
      'Free ATM/Debit card',
      'USSD access via *737#',
      'Instant SMS & email alerts',
      'No monthly maintenance fee',
      'Shariah-compliant — no riba',
      'Mobile app management (Android & iOS)',
    ],
    eligibility: [
      'Nigerian citizen or resident',
      'Valid government-issued ID (NIN, voter card, passport)',
      'BVN registration',
      'Minimum age 18 (or guardian for minors)',
    ],
    steps: ['Visit any branch with valid ID & BVN', 'Complete account opening form', 'Make opening deposit of ₦500', 'Receive debit card & activate *737#'],
  },
  {
    id: 'current',
    icon: CreditCard,
    title: 'Current Account',
    hausa: 'Asusun Kasuwanci',
    tagline: 'Unlimited transactions for businesses',
    color: 'from-yellow-500/20 to-amber-700/10',
    accent: '#c9a227',
    desc: 'A full-featured current account for active businesses, traders, and professionals. No transaction limits, overdraft access, and integration with our CuteBanker-powered banking system.',
    features: [
      'Unlimited daily transactions',
      'Free chequebook (first 25 leaves)',
      'Overdraft facility available',
      'Internet & mobile banking',
      'Monthly account statements',
      'Multi-signatory configuration',
      'Bulk payment and payroll',
      'Integrated with NIBSS & Etranzact',
    ],
    eligibility: [
      'Individual or registered business',
      'CAC certificate (for businesses)',
      'Valid ID of all signatories',
      'Utility bill (not older than 3 months)',
    ],
    steps: ['Submit ID, CAC docs & BVN', 'Complete KYC verification', 'Fund with minimum ₦5,000', 'Activate internet banking'],
  },
  {
    id: 'fixed',
    icon: Banknote,
    title: 'Fixed Deposit Account',
    hausa: 'Ajiyar Tsayayye',
    tagline: 'Higher returns for disciplined savers',
    color: 'from-blue-500/20 to-indigo-700/10',
    accent: '#3b82f6',
    desc: 'Lock your funds for a fixed tenor and earn higher profit-sharing returns. Ideal for long-term financial planning, business reserves, and disciplined saving.',
    features: [
      'Tenors: 30, 60, 90, 180, 365 days',
      'Higher profit rates than savings accounts',
      'Automatic rollover option',
      'Early liquidation available (with conditions)',
      'Available to individuals and businesses',
      'Certificate of deposit issued',
    ],
    eligibility: ['Existing Rima MFB account holder', 'Minimum deposit: ₦50,000', 'Valid ID & BVN'],
    steps: ['Request fixed deposit at any branch', 'Choose tenor and deposit amount', 'Sign fixed deposit agreement', 'Receive certificate of deposit'],
  },
  {
    id: 'qard',
    icon: ShieldCheck,
    title: 'Qard Hasan',
    hausa: 'Lamunin Alheri — Lamunin Kyauta',
    tagline: 'Interest-free benevolent finance',
    color: 'from-purple-500/20 to-violet-700/10',
    accent: '#8b5cf6',
    desc: 'Qard Hasan is an interest-free (riba-free) benevolent loan — one of the most important pillars of Islamic finance. Rima MFB offers this product to eligible individuals who need financial support without incurring interest charges.',
    features: [
      'Zero interest — 100% Shariah-compliant',
      'For individuals in genuine financial need',
      'Repay only the principal amount',
      'Approved by our Shariah advisory board',
      'No hidden fees or profit margins',
      'Flexible repayment schedule',
    ],
    eligibility: [
      'Rima MFB account holder',
      'Demonstrate genuine financial need',
      'Good repayment history (for repeat borrowers)',
      'Valid ID & BVN',
    ],
    steps: ['Apply at any branch with a written request', 'Shariah & credit review (2–3 days)', 'Approval and documentation', 'Disbursement to your account'],
  },
  {
    id: 'murabaha',
    icon: Store,
    title: 'Murabaha Finance',
    hausa: 'Kuɗin Murabaha',
    tagline: 'Halal trade financing',
    color: 'from-rose-500/20 to-red-700/10',
    accent: '#f43f5e',
    desc: 'Murabaha is a Shariah-compliant trade finance product. Rima MFB purchases goods or assets on your behalf and sells them to you at a disclosed profit margin — making it halal, transparent, and free from conventional interest.',
    features: [
      'Halal alternative to conventional loans',
      'Disclosed profit margin upfront — no surprises',
      'For purchase of goods, equipment, or assets',
      'Fixed repayment schedule',
      'Approved by Shariah supervisory board',
      'Available to individuals and businesses',
    ],
    eligibility: [
      'Valid ID & BVN',
      'Pro-forma invoice for the goods/asset',
      'Rima MFB account holder',
      'Minimum 6 months banking relationship preferred',
    ],
    steps: ['Submit application with pro-forma invoice', 'Shariah & credit assessment', 'Bank purchases goods from supplier', 'Goods delivered, repayment begins'],
  },
  {
    id: 'sme',
    icon: Banknote,
    title: 'Micro & SME Loans',
    hausa: 'Lamunin Ƙananan Kasuwanci',
    tagline: 'Fuel your business growth',
    color: 'from-lime-500/20 to-green-700/10',
    accent: '#84cc16',
    desc: 'Tailored financial solutions for micro, small, and medium enterprises across Northern Nigeria. From market traders and farmers to artisans and cooperatives — we understand your business and structure loans around your needs.',
    features: [
      'Loans from ₦10,000 to ₦10,000,000',
      'Flexible repayment: 3 to 24 months',
      'Working capital and asset finance',
      'Agricultural and seasonal loans',
      'Cooperative group lending',
      'Dedicated SME relationship manager',
      'Fast approval: 2–5 business days',
    ],
    eligibility: [
      'Valid ID & BVN',
      'Business evidence (registration or trade)',
      '3–6 months bank statement',
      'Guarantor or collateral (for larger amounts)',
    ],
    steps: ['Consult SME relationship manager', 'Submit application & documents', 'Credit assessment in 2–5 days', 'Disbursement upon approval'],
  },
  {
    id: 'digital',
    icon: Smartphone,
    title: 'USSD & Mobile Banking',
    hausa: 'Bankin Wayar Hannu — *737#',
    tagline: 'Bank anywhere, any phone, anytime',
    color: 'from-teal-500/20 to-emerald-700/10',
    accent: '#14b8a6',
    desc: 'Our *737# USSD banking works on any phone — smart or basic — across all Nigerian networks. No internet needed. The Rima Mobile App on Android and iOS brings full banking features to your fingertips.',
    features: [
      'USSD: Dial *737# on any network',
      'Transfers up to ₦500,000 daily via USSD',
      'Pay bills: electricity, water, TV subscriptions',
      'Buy airtime and data for all networks',
      'Balance check & mini statement',
      'Mobile app: Android & iOS',
      'Available 24/7, 365 days',
      'Works on 2G, 3G, and 4G',
    ],
    eligibility: ['Active Rima MFB account', 'Registered phone number on account', 'BVN verified'],
    steps: ['Dial *737# on your registered number', 'Follow prompts to register USSD', 'Set your 4-digit PIN', 'Download app from Play Store / App Store'],
  },
  {
    id: 'pos',
    icon: Wallet,
    title: 'Agent Banking & POS Network',
    hausa: 'Wakilan Banki da Na\'urar POS',
    tagline: '2,000 terminals across Northern Nigeria',
    color: 'from-orange-500/20 to-amber-700/10',
    accent: '#f97316',
    desc: 'Rima MFB has deployed 2,000 POS terminals across Northern Nigeria — bringing banking services to underserved communities where physical branches cannot reach. Accept card and wallet payments with instant settlement.',
    features: [
      '2,000 POS terminals deployed',
      'Card and digital wallet acceptance',
      'Instant settlement within 24 hours',
      'Low transaction fees for merchants',
      'Agent banking for cash-in/cash-out',
      'Bill payments at agent locations',
      'Airtime and data sales',
      'Real-time transaction monitoring',
    ],
    eligibility: ['Business owner or sole trader', 'Valid ID & BVN', 'Active bank account', 'Minimum monthly transaction volume'],
    steps: ['Apply for POS at any branch', 'Submit business documents', 'Terminal deployed within 5 business days', 'Training provided on first day'],
  },
  {
    id: 'payments',
    icon: Cpu,
    title: 'Bill Payments & Collections',
    hausa: 'Biyan Kuɗi da Tattara Kuɗi',
    tagline: 'Powered by Etranzact',
    color: 'from-cyan-500/20 to-blue-700/10',
    accent: '#06b6d4',
    desc: 'Pay all your bills, buy airtime and data, and collect merchant payments through our Etranzact-powered payment gateway. Earn net revenue of ₦200 per bill payment and ₦50 per POS transaction.',
    features: [
      'Electricity (NEPA/PHCN) bill payment',
      'Water board payments',
      'DSTV, GoTV, Startimes subscriptions',
      'Airtime and data for all networks',
      'School fees and government payments',
      'Merchant payment collections',
      'Powered by Etranzact gateway',
      'NIBSS-integrated for instant confirmation',
    ],
    eligibility: ['Rima MFB account holder', 'Mobile app or USSD access', 'Any registered agent'],
    steps: ['Log in via app or dial *737#', 'Select Bills & Payments', 'Enter payment details', 'Confirm with PIN — done in seconds'],
  },
]

function ServiceCard({ service, expanded, onToggle }) {
  const { ref, visible } = useScrollReveal()
  const Icon = service.icon
  return (
    <div
      ref={ref}
      className={`card-glass overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <button onClick={onToggle} className="w-full p-6 flex items-start gap-4 text-left group">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color}
                         border border-rima-gold/20 flex items-center justify-center flex-shrink-0
                         group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={26} style={{ color: service.accent }} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-white text-lg group-hover:text-rima-gold transition-colors">
            {service.title}
          </h3>
          <p className="text-rima-gold/50 text-xs italic mb-1">{service.hausa}</p>
          <p className="text-white/50 text-sm">{service.tagline}</p>
        </div>
        <div className="text-rima-gold/60 mt-1 flex-shrink-0">
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 border-t border-rima-gold/10 pt-5">
          <p className="text-white/65 text-sm leading-relaxed mb-6">{service.desc}</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-rima-gold text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 size={13} /> Features
              </p>
              <ul className="space-y-2">
                {service.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-white/60 text-xs">
                    <span className="w-1 h-1 rounded-full bg-rima-gold mt-1.5 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-rima-gold text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                <Users size={13} /> Eligibility
              </p>
              <ul className="space-y-2">
                {service.eligibility.map(e => (
                  <li key={e} className="flex items-start gap-2 text-white/60 text-xs">
                    <span className="w-1 h-1 rounded-full bg-rima-gold/50 mt-1.5 flex-shrink-0" />{e}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-rima-gold text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                <FileText size={13} /> How to Apply
              </p>
              <ol className="space-y-2">
                {service.steps.map((s, i) => (
                  <li key={s} className="flex items-start gap-2 text-white/60 text-xs">
                    <span className="w-4 h-4 rounded-full bg-rima-gold/20 border border-rima-gold/40
                                     flex items-center justify-center text-rima-gold font-bold flex-shrink-0 text-[10px]">
                      {i + 1}
                    </span>{s}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="mt-6 flex gap-3 flex-wrap">
            <a href="/contact" className="btn-gold text-xs px-5 py-2 flex items-center gap-1.5">Apply Now <ArrowRight size={12} /></a>
            <a href="/contact" className="btn-outline-gold text-xs px-5 py-2">Enquire</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [expanded, setExpanded] = useState('savings')
  const toggle = id => setExpanded(expanded === id ? null : id)

  return (
    <div className="min-h-screen bg-rima-dark">
      <Navbar />
      <PageHero
        title="Our Products & Services"
        hausa="Ayyukanmu · Shariah-Compliant Banking"
        subtitle="From Qard Hasan and Murabaha to USSD banking and a 2,000-terminal POS network — every product at Rima MFB is built for the people of Northern Nigeria."
        breadcrumb={[{ label: 'Services' }]}
      />

      <section className="py-20 max-w-5xl mx-auto px-6">
        {/* Tech powered strip */}
        <div className="card-glass p-5 flex flex-wrap items-center justify-center gap-8 mb-12 text-center">
          <p className="text-white/40 text-xs uppercase tracking-widest w-full">Technology Backbone</p>
          {[
            { label: 'CuteBanker', sub: 'Core Banking' },
            { label: 'NIBSS',      sub: 'Instant Payments' },
            { label: 'Etranzact',  sub: 'Payment Gateway' },
            { label: '*737#',      sub: 'USSD Banking' },
          ].map(t => (
            <div key={t.label}>
              <p className="font-display font-bold text-rima-gold text-lg">{t.label}</p>
              <p className="text-white/40 text-xs">{t.sub}</p>
            </div>
          ))}
        </div>

        {/* Intro strip */}
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {[
            { icon: Clock,        label: 'Fast Onboarding',     sub: 'Accounts opened same day' },
            { icon: ShieldCheck,  label: 'Shariah-Compliant',   sub: 'Qard Hasan & Murabaha' },
            { icon: Users,        label: '25,000+ Customers',   sub: 'Growing to 500K in Year 1' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="card-glass p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-rima-gold/10 border border-rima-gold/20 flex items-center justify-center">
                <Icon size={18} className="text-rima-gold" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{label}</p>
                <p className="text-white/40 text-xs">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-4 mb-16">
          {services.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
              expanded={expanded === service.id}
              onToggle={() => toggle(service.id)}
            />
          ))}
        </div>

        {/* Revenue model */}
        <div className="card-glass p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-bold text-white">How Rima MFB Earns Revenue</h3>
            <p className="text-white/50 text-sm mt-1">Transparent, Shariah-compliant revenue streams</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { stream: 'POS Transactions',      amount: '₦50 net',  sub: 'Per transaction' },
              { stream: 'Bill Payments / Airtime',amount: '₦200 net', sub: 'Per transaction' },
              { stream: 'Murabaha Profit Share', amount: 'Variable',  sub: 'Disclosed upfront' },
              { stream: 'Inter-bank Transfers',  amount: 'Fee-based', sub: 'App & USSD' },
            ].map(r => (
              <div key={r.stream} className="bg-white/5 rounded-xl p-4 text-center border border-rima-gold/15">
                <p className="font-display font-bold text-rima-gold text-xl mb-0.5">{r.amount}</p>
                <p className="text-white text-xs font-semibold">{r.stream}</p>
                <p className="text-white/40 text-xs">{r.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="card-glass p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 pattern-overlay opacity-30 pointer-events-none" />
          <div className="relative">
            <p className="text-rima-gold text-xs font-bold uppercase tracking-widest mb-3">Get Started Today · Fara Yanzu</p>
            <h3 className="font-display text-3xl font-bold text-white mb-3">Open Your Account</h3>
            <p className="text-white/50 mb-6 max-w-md mx-auto text-sm">
              Visit any branch in Sokoto, Kebbi, Zamfara, or Katsina — or call us on{' '}
              <span className="text-rima-gold font-semibold">0800-RIMA-MFB</span>
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              <a href="/contact" className="btn-gold flex items-center gap-2">
                Open Account <ArrowRight size={16} />
              </a>
              <a href="tel:08000000000" className="btn-outline-gold">Call Us Now</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
