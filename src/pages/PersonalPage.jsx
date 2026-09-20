import {
  PiggyBank, CreditCard, Smartphone, ShieldCheck,
  ArrowRight, CheckCircle2, Star, Gift, Users, Zap
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import useScrollReveal from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'

const accounts = [
  {
    name: 'Starter Savings',
    hausa: 'Ajiyar Farawa',
    badge: 'Most Popular',
    badgeColor: 'bg-rima-gold text-rima-dark',
    minBalance: '₦500',
    interest: '6% p.a.',
    cardFee: 'Free',
    icon: PiggyBank,
    color: 'from-emerald-600/20 to-green-800/10',
    perks: [
      'Open with just ₦500',
      'Free debit card',
      'USSD banking *737#',
      'SMS alerts in English & Hausa',
      'No monthly fees',
      'Shariah-compliant option',
    ],
  },
  {
    name: 'Premium Savings',
    hausa: 'Ajiyar Daraja',
    badge: 'Best Rates',
    badgeColor: 'bg-blue-500 text-white',
    minBalance: '₦10,000',
    interest: '10% p.a.',
    cardFee: 'Free',
    icon: Star,
    color: 'from-blue-600/20 to-indigo-800/10',
    perks: [
      'Higher interest rate',
      'Priority customer service',
      'Free fund transfers (5/month)',
      'Quarterly account review',
      'Exclusive loan pre-approval',
      'Birthday bonus benefit',
    ],
  },
  {
    name: 'Youth Account',
    hausa: 'Asusun Matasa',
    badge: 'Ages 16–35',
    badgeColor: 'bg-rose-500 text-white',
    minBalance: '₦200',
    interest: '7% p.a.',
    cardFee: 'Free',
    icon: Gift,
    color: 'from-rose-600/20 to-pink-800/10',
    perks: [
      'Lowest minimum balance',
      'Zero card maintenance fee',
      'Student loan eligibility',
      'Financial literacy workshops',
      'Campus ambassador benefits',
      'Upgrade path to Premium',
    ],
  },
  {
    name: 'Joint / Family Account',
    hausa: 'Asusun Iyali',
    badge: 'For Families',
    badgeColor: 'bg-amber-500 text-white',
    minBalance: '₦2,000',
    interest: '7.5% p.a.',
    cardFee: 'Free × 2',
    icon: Users,
    color: 'from-amber-600/20 to-yellow-800/10',
    perks: [
      'Up to 4 signatories',
      '2 free debit cards',
      'Shared transaction visibility',
      'Family savings goals feature',
      'Priority dispute resolution',
      'Group loan eligibility',
    ],
  },
]

const features = [
  { icon: Smartphone,  title: 'USSD Banking',       desc: 'Dial *737# anytime on any phone. No internet, no hassle. Transfer, pay bills, check balance — all via USSD.' },
  { icon: ShieldCheck, title: 'NDIC Insurance',      desc: 'Every kobo you save with us is protected up to ₦500,000 by the Nigeria Deposit Insurance Corporation.' },
  { icon: Zap,         title: 'Instant Alerts',      desc: 'Real-time SMS notifications for every debit and credit — in English or Hausa, your choice.' },
  { icon: CreditCard,  title: 'Free Debit Card',     desc: 'Visa-powered debit card accepted at ATMs and POS nationwide. No issuance fee, no annual charge.' },
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

export default function PersonalPage() {
  return (
    <div className="min-h-screen bg-rima-dark">
      <Navbar />
      <PageHero
        title="Personal Banking"
        hausa="Bankin Mutum · For You & Your Family"
        subtitle="Savings accounts, debit cards, and digital banking services designed to fit your life — whether you're a student, trader, worker, or homemaker."
        breadcrumb={[{ label: 'Personal Banking' }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-6">
        {/* Account comparison */}
        <div className="text-center mb-12">
          <span className="text-rima-gold text-xs font-bold tracking-widest uppercase">Choose Your Account</span>
          <h2 className="font-display text-4xl font-bold text-white mt-2 mb-3">
            Find the Right Fit
          </h2>
          <div className="divider-gold" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {accounts.map((acc, i) => {
            const Icon = acc.icon
            return (
              <RevealCard key={acc.name} delay={i * 100}>
                <div className={`card-glass p-6 h-full flex flex-col bg-gradient-to-b ${acc.color} group`}>
                  {/* Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-rima-gold/10 border border-rima-gold/20 flex items-center justify-center
                                    group-hover:scale-110 transition-transform">
                      <Icon size={22} className="text-rima-gold" />
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${acc.badgeColor}`}>{acc.badge}</span>
                  </div>

                  <p className="text-rima-gold/50 text-xs italic mb-0.5">{acc.hausa}</p>
                  <h3 className="font-display font-bold text-white text-xl mb-4 group-hover:text-rima-gold transition-colors">
                    {acc.name}
                  </h3>

                  {/* Key metrics */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {[
                      { label: 'Min. Balance', value: acc.minBalance },
                      { label: 'Interest Rate', value: acc.interest },
                    ].map(m => (
                      <div key={m.label} className="bg-white/5 rounded-lg p-2.5 text-center">
                        <p className="text-rima-gold font-bold text-base">{m.value}</p>
                        <p className="text-white/40 text-xs">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Perks */}
                  <ul className="flex flex-col gap-2 flex-1 mb-5">
                    {acc.perks.map(p => (
                      <li key={p} className="flex items-start gap-2 text-white/60 text-xs">
                        <CheckCircle2 size={12} className="text-rima-gold mt-0.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="btn-gold text-xs text-center py-2.5 flex items-center justify-center gap-1">
                    Open This Account <ArrowRight size={13} />
                  </Link>
                </div>
              </RevealCard>
            )
          })}
        </div>

        {/* Features strip */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-bold text-white">Everything You Need to Bank Smarter</h2>
          <div className="divider-gold" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <RevealCard key={f.title} delay={i * 100}>
                <div className="card-glass p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-rima-gold/10 border border-rima-gold/20 flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-rima-gold" />
                  </div>
                  <h3 className="font-display font-semibold text-white mb-2">{f.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </RevealCard>
            )
          })}
        </div>

        {/* How to open */}
        <div className="card-glass p-10">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-white">Open an Account in 4 Steps</h2>
            <p className="text-white/50 mt-2">As easy as buying credit on your phone</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Choose Account',   desc: 'Pick the account type that fits your needs from the options above.' },
              { step: 2, title: 'Submit Documents', desc: 'Provide a valid ID (NIN, voter\'s card, passport) and your BVN.' },
              { step: 3, title: 'Make Deposit',     desc: 'Fund your account with the minimum opening balance.' },
              { step: 4, title: 'Start Banking',    desc: 'Receive your debit card and activate USSD/mobile banking.' },
            ].map((s, i) => (
              <RevealCard key={s.step} delay={i * 100}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-rima-gold/15 border-2 border-rima-gold/40 flex items-center justify-center mx-auto mb-3">
                    <span className="font-display font-extrabold text-2xl text-rima-gold">{s.step}</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-white/50 text-sm">{s.desc}</p>
                </div>
              </RevealCard>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2">
              Get Started Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
