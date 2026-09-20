import {
  Building2, Banknote, BarChart3, Users, CreditCard,
  FileText, ArrowRight, CheckCircle2, Truck, Sprout, Store
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import useScrollReveal from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'

const businessTypes = [
  {
    icon: Store,
    title: 'Traders & Market Sellers',
    hausa: 'Yan kasuwa',
    desc: 'Current accounts with daily transaction flexibility, POS terminals for your stall, and working capital loans to stock up before market days.',
    products: ['Business Current Account', 'Market Trader Loans', 'POS Terminal', 'Daily Collection Service'],
  },
  {
    icon: Building2,
    title: 'SMEs & Businesses',
    hausa: 'Ƙananan Kamfanoni',
    desc: 'Full-service business banking with overdrafts, payroll management, bulk payments, and a dedicated relationship manager.',
    products: ['SME Current Account', 'Overdraft Facility', 'Payroll Management', 'Business Loans'],
  },
  {
    icon: Sprout,
    title: 'Farmers & Agro-Dealers',
    hausa: 'Manoma da Yan Noma',
    desc: 'Seasonal crop loans, equipment financing, and cooperative banking designed around the farming calendar.',
    products: ['Agricultural Loans', 'Equipment Finance', 'Cooperative Accounts', 'Input Supply Financing'],
  },
  {
    icon: Users,
    title: 'Cooperatives & Groups',
    hausa: 'Ƙungiyoyi',
    desc: 'Group savings and lending products for thrift cooperatives, women groups, and community associations.',
    products: ['Group Savings Account', 'Cooperative Loans', 'Multi-Signatory Access', 'Regular Group Meetings'],
  },
  {
    icon: Truck,
    title: 'Transporters & Logistics',
    hausa: 'Masu Sufuri',
    desc: 'Asset finance for vehicle purchase, fleet expansion loans, and current accounts built for high-frequency transactions.',
    products: ['Vehicle Asset Finance', 'Fleet Expansion Loans', 'High-Volume Transfers', 'Business Debit Cards'],
  },
  {
    icon: FileText,
    title: 'Freelancers & Professionals',
    hausa: 'Ƙwararrun Mutane',
    desc: 'Sole proprietor accounts, invoice financing, and savings products for consultants, teachers, and healthcare workers.',
    products: ['Professional Account', 'Invoice Financing', 'Professional Loans', 'Tax Savings Account'],
  },
]

const whyBusiness = [
  { icon: BarChart3,  title: 'Business Analytics',    desc: 'Monthly reports on your transactions, income, and spending to help you make smarter decisions.' },
  { icon: CreditCard, title: 'POS & Payment Solutions', desc: 'Accept card payments at your business with our affordable POS terminals — low settlement fees.' },
  { icon: Banknote,   title: 'Working Capital Loans',  desc: 'Get up to ₦10M in business financing with flexible repayment terms and no hidden charges.' },
  { icon: Users,      title: 'Dedicated RM',           desc: 'Every business customer gets a dedicated relationship manager who understands your industry.' },
]

function RevealCard({ children, delay = 0 }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-rima-dark">
      <Navbar />
      <PageHero
        title="Business Banking"
        hausa="Banki na Kasuwanci · Grow Your Business"
        subtitle="Tailored financial solutions for every type of business in Northern Nigeria — from market traders to SMEs and cooperatives."
        breadcrumb={[{ label: 'Business Banking' }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-6">
        {/* Business types */}
        <div className="text-center mb-12">
          <span className="text-rima-gold text-xs font-bold tracking-widest uppercase">We Serve Every Business</span>
          <h2 className="font-display text-4xl font-bold text-white mt-2 mb-3">Who Is This For?</h2>
          <div className="divider-gold" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {businessTypes.map((type, i) => {
            const Icon = type.icon
            return (
              <RevealCard key={type.title} delay={i * 80}>
                <div className="card-glass p-6 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-rima-gold/10 border border-rima-gold/20 flex items-center justify-center mb-4
                                  group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} className="text-rima-gold" />
                  </div>
                  <p className="text-rima-gold/50 text-xs italic mb-0.5">{type.hausa}</p>
                  <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-rima-gold transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-4">{type.desc}</p>
                  <ul className="flex flex-col gap-1.5">
                    {type.products.map(p => (
                      <li key={p} className="flex items-center gap-2 text-white/50 text-xs">
                        <CheckCircle2 size={11} className="text-rima-gold flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealCard>
            )
          })}
        </div>

        {/* Why Rima for business */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-white">Why Businesses Choose Rima MFB</h2>
            <div className="divider-gold" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyBusiness.map((w, i) => {
              const Icon = w.icon
              return (
                <RevealCard key={w.title} delay={i * 100}>
                  <div className="card-glass p-6 text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-rima-gold/10 border border-rima-gold/20 flex items-center justify-center mx-auto mb-4">
                      <Icon size={20} className="text-rima-gold" />
                    </div>
                    <h3 className="font-display font-semibold text-white mb-2">{w.title}</h3>
                    <p className="text-white/55 text-sm">{w.desc}</p>
                  </div>
                </RevealCard>
              )
            })}
          </div>
        </div>

        {/* Documents needed */}
        <RevealCard>
          <div className="card-glass p-10 mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-rima-gold text-xs font-bold uppercase tracking-widest">What You Need</span>
                <h2 className="font-display text-3xl font-bold text-white mt-2 mb-4">
                  Documents Required
                </h2>
                <p className="text-white/55 mb-6">For a business account opening, please prepare the following documents:</p>
                <ul className="flex flex-col gap-3">
                  {[
                    'CAC Certificate of Incorporation or Business Name Registration',
                    'Valid government-issued ID of all directors/signatories',
                    'Utility bill (not older than 3 months)',
                    'BVN of all signatories',
                    'Board resolution authorising account opening',
                    'Passport photographs (2 each)',
                    'Tax Identification Number (TIN) — for larger businesses',
                  ].map(doc => (
                    <li key={doc} className="flex items-start gap-3 text-white/65 text-sm">
                      <FileText size={14} className="text-rima-gold mt-0.5 flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <div className="card-glass p-6 border border-rima-gold/30">
                  <p className="text-rima-gold font-bold text-lg font-display mb-1">POS Terminal</p>
                  <p className="text-white/60 text-sm mb-3">Accept card payments at your shop or stall. Settlement in 24 hours.</p>
                  <p className="text-white/40 text-xs">Setup fee: <span className="text-rima-gold font-semibold">₦10,000 (waivable)</span></p>
                  <p className="text-white/40 text-xs">Transaction fee: <span className="text-rima-gold font-semibold">0.5% per transaction</span></p>
                </div>
                <div className="card-glass p-6 border border-rima-gold/30">
                  <p className="text-rima-gold font-bold text-lg font-display mb-1">Business Loan</p>
                  <p className="text-white/60 text-sm mb-3">Up to ₦10M for established businesses with flexible repayment.</p>
                  <p className="text-white/40 text-xs">Interest from: <span className="text-rima-gold font-semibold">2% per month</span></p>
                  <p className="text-white/40 text-xs">Tenor: <span className="text-rima-gold font-semibold">3 – 24 months</span></p>
                </div>
                <Link to="/contact" className="btn-gold flex items-center justify-center gap-2">
                  Open Business Account <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </RevealCard>
      </section>

      <Footer />
    </div>
  )
}
