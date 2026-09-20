import {
  Target, Eye, Heart, Award, Users, TrendingUp,
  Landmark, ShieldCheck, Star, ArrowRight, Cpu, Globe
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import Logo from '../components/Logo'
import useScrollReveal from '../hooks/useScrollReveal'

const values = [
  {
    icon: Heart,
    title: 'Integrity',
    hausa: 'Gaskiya',
    desc: 'Honesty, transparency, and trust in every transaction, every relationship, and every decision we make.'
  },
  {
    icon: Cpu,
    title: 'Innovation',
    hausa: 'Sabbin Dabaru',
    desc: 'Leveraging technology — CuteBanker, NIBSS, mobile apps, USSD — to continuously enhance the customer experience.'
  },
  {
    icon: ShieldCheck,
    title: 'Ethical Banking',
    hausa: 'Bankin Halal',
    desc: 'Committed to Shariah-compliant and socially responsible finance. Our Qard Hasan and Murabaha products reflect this commitment.'
  },
  {
    icon: Users,
    title: 'Customer-Centricity',
    hausa: 'Abokin Ciniki a Gaba',
    desc: 'Putting customers first in every service design, product launch, and daily interaction across all our branches.'
  },
  {
    icon: Globe,
    title: 'Community Impact',
    hausa: 'Taimaka Al\'umma',
    desc: 'Supporting growth in underserved rural and urban areas of Northern Nigeria — extending banking to those who need it most.'
  },
  {
    icon: Star,
    title: 'Excellence',
    hausa: 'Ƙwazo',
    desc: 'We hold ourselves to the highest standards — in customer service, technology, compliance, and community impact.'
  },
]

const timeline = [
  {
    year: '1992',
    title: 'Foundation',
    desc: 'Rima Microfinance Bank was established in Gwaranyo LGA, Sokoto State — rooted in a vision to serve the unbanked communities of Northern Nigeria.'
  },
  {
    year: '2000s',
    title: 'Community Growth',
    desc: 'Expanded branch operations across Sokoto State, deepening relationships with traders, farmers, and civil servants in underserved communities.'
  },
  {
    year: '2010s',
    title: 'CBN Licensing',
    desc: 'Obtained full microfinance banking license from the Central Bank of Nigeria, formalising 20+ years of community banking operations.'
  },
  {
    year: '2020',
    title: 'Core Banking Upgrade',
    desc: 'Adopted the CuteBanker core banking platform, integrating with NIBSS and Etranzact for instant payments and real-time transaction processing.'
  },
  {
    year: '2022',
    title: 'Digital & USSD Launch',
    desc: 'Launched USSD banking and the Rima Mobile App on Android and iOS — making banking accessible on any phone, with or without internet.'
  },
  {
    year: '2023',
    title: 'POS Network Expansion',
    desc: 'Deployed 2,000 POS terminals across Northern Nigeria as part of an aggressive agent banking rollout to reach underserved communities.'
  },
  {
    year: '2024',
    title: 'Digital Transformation',
    desc: 'Launched full digital transformation programme targeting 500,000 customers in Year 1. Expanding to Abuja, Kaduna, Kano, and Sokoto.'
  },
]

const objectives = [
  {
    num: '01',
    title: 'Financial Inclusion',
    desc: 'Extend banking services to rural Northern Nigeria, reaching communities with no prior access to formal financial services.'
  },
  {
    num: '02',
    title: 'Digital Banking',
    desc: 'Provide mobile, USSD (*737#), and online banking services accessible on any device, anywhere.'
  },
  {
    num: '03',
    title: 'Shariah-Compliant Products',
    desc: 'Offer ethical financing options including Qard Hasan (interest-free loans) and Murabaha (trade finance).'
  },
  {
    num: '04',
    title: 'Agent & POS Network',
    desc: 'Deploy 2,000 POS terminals nationwide. Expand agent banking to rural areas where branches cannot reach.'
  },
  {
    num: '05',
    title: 'Support MSMEs',
    desc: 'Provide tailored financial solutions for micro, small, and medium enterprises to drive economic growth.'
  },
  {
    num: '06',
    title: 'Sustainable Profitability',
    desc: 'Balance community impact with financial sustainability — growing revenue through transactions, loans, and payments.'
  },
]

const growthPlan = [
  {
    year: 'Year 1',
    color: 'border-rima-gold',
    title: 'Digital Transformation',
    points: [
      'Grow from 25,000 to 500,000 customers',
      'Focus on Abuja, Kaduna, Kano, and Sokoto',
      'Full mobile app & USSD rollout',
      'Deploy 2,000 POS terminals',
    ]
  },
  {
    year: 'Year 2',
    color: 'border-blue-500/50',
    title: 'Product Expansion',
    points: [
      'Introduce Rima debit cards',
      'Expand to 5,000 POS terminals',
      'Launch micro-insurance products',
      'Deepen SME financing portfolio',
    ]
  },
  {
    year: 'Year 3',
    color: 'border-purple-500/50',
    title: 'National Scale',
    points: [
      'Nationwide coverage beyond the North',
      'Cross-border remittances',
      'SME e-commerce integration',
      'International banking partnerships',
    ]
  },
]

const stats = [
  { value: '1992',   label: 'Year Founded',        hausa: 'Shekarar Kafawa' },
  { value: '25K+',   label: 'Current Customers',   hausa: 'Masu Asusun Yanzu' },
  { value: '500K',   label: 'Year 1 Target',        hausa: 'Burin Shekara 1' },
  { value: '2,000',  label: 'POS Terminals',        hausa: 'Na\'urar POS' },
  { value: '30+',    label: 'Years of Service',     hausa: 'Shekaru na Hidima' },
  { value: '3',      label: 'Revenue Streams',      hausa: 'Hanyoyin Kuɗi' },
]

function RevealCard({ children, delay = 0 }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-rima-dark">
      <Navbar />
      <PageHero
        title="About Rima MFB"
        hausa="Game da Mu · Our Story Since 1992"
        subtitle="Over 30 years of community banking in Northern Nigeria — now going digital to reach 500,000 customers."
        breadcrumb={[{ label: 'About Us' }]}
      />

      {/* Mission & Vision */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              hausa: 'Manufarmu',
              text: 'To empower individuals, small businesses, and communities in Northern Nigeria by providing accessible, innovative, and Shariah-compliant financial solutions that promote economic growth, financial inclusion, and lasting prosperity.',
              bg: 'from-rima-green-mid to-rima-dark',
            },
            {
              icon: Eye,
              title: 'Our Vision',
              hausa: 'Mafarkinmu',
              text: 'To be the leading digital microfinance bank in Nigeria, recognized for bridging the financial gap for the unbanked and underbanked, while upholding integrity, innovation, and customer trust.',
              bg: 'from-rima-gold/10 to-rima-dark',
            },
          ].map(({ icon: Icon, title, hausa, text, bg }, i) => (
            <RevealCard key={title} delay={i * 150}>
              <div className={`card-glass p-8 h-full bg-gradient-to-br ${bg}`}>
                <div className="w-14 h-14 rounded-2xl bg-rima-gold/15 border border-rima-gold/30 flex items-center justify-center mb-5">
                  <Icon size={26} className="text-rima-gold" />
                </div>
                <p className="text-rima-gold/50 text-xs italic mb-1">{hausa}</p>
                <h2 className="font-display text-2xl font-bold text-white mb-4">{title}</h2>
                <p className="text-white/65 leading-relaxed">{text}</p>
              </div>
            </RevealCard>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {stats.map((s, i) => (
            <RevealCard key={s.label} delay={i * 80}>
              <div className="card-glass p-5 text-center">
                <p className="font-display text-3xl font-extrabold gold-text">{s.value}</p>
                <p className="text-white text-xs font-semibold mt-1">{s.label}</p>
                <p className="text-rima-gold/40 text-xs italic">{s.hausa}</p>
              </div>
            </RevealCard>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <RevealCard>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-rima-gold/10 blur-2xl scale-110" />
                <div className="relative w-72 h-72 rounded-3xl bg-gradient-to-br from-rima-green-mid to-rima-dark
                                border-2 border-rima-gold/30 flex items-center justify-center">
                  <Logo size={160} />
                  <div className="absolute -bottom-4 -right-4 bg-rima-gold text-rima-dark font-bold text-sm px-4 py-2 rounded-xl shadow-lg">
                    Est. 1992
                  </div>
                </div>
              </div>
            </div>
          </RevealCard>
          <RevealCard delay={200}>
            <span className="text-rima-gold text-xs font-bold tracking-widest uppercase">Our Story · Tarihinmu</span>
            <h2 className="font-display text-4xl font-bold text-white mt-3 mb-4">
              Born in Sokoto.<br /><span className="gold-text">Built for the North.</span>
            </h2>
            <div className="w-16 h-1 bg-gold-gradient rounded-full mb-5" />
            <p className="text-white/65 leading-relaxed mb-4">
              Rima Microfinance Bank was established in <strong className="text-white">1992</strong> in{' '}
              <strong className="text-white">Gwaranyo LGA, Sokoto State</strong> — a community that understood
              firsthand what it meant to be financially excluded. Our founders set out to change that.
            </p>
            <p className="text-white/55 leading-relaxed mb-4">
              For over 30 years, we have served traders, farmers, civil servants, and households across
              Northern Nigeria. Licensed by the <strong className="text-white">Central Bank of Nigeria (CBN)</strong>,
              we combine deep community trust with modern banking technology.
            </p>
            <p className="text-white/55 leading-relaxed">
              Today, powered by <span className="text-rima-gold font-semibold">CuteBanker</span> and integrated
              with <span className="text-rima-gold font-semibold">NIBSS & Etranzact</span>, we are executing
              an ambitious digital transformation to reach{' '}
              <strong className="text-white">500,000 customers in Year 1</strong> —
              because <em className="text-rima-gold not-italic font-semibold">"Made For Us By Us"</em> is not just a tagline. It's our promise.
            </p>
          </RevealCard>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-rima-gold text-xs font-bold tracking-widest uppercase">What We Stand For</span>
            <h2 className="font-display text-4xl font-bold text-white mt-2 mb-3">Our Core Values</h2>
            <div className="divider-gold" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <RevealCard key={v.title} delay={i * 100}>
                  <div className="card-glass p-6 h-full">
                    <div className="w-10 h-10 rounded-xl bg-rima-gold/10 border border-rima-gold/20 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-rima-gold" />
                    </div>
                    <p className="text-rima-gold/50 text-xs italic mb-1">{v.hausa}</p>
                    <h3 className="font-display font-bold text-white text-lg mb-2">{v.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </RevealCard>
              )
            })}
          </div>
        </div>

        {/* Strategic Objectives */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-rima-gold text-xs font-bold tracking-widest uppercase">Where We're Going</span>
            <h2 className="font-display text-4xl font-bold text-white mt-2 mb-3">Strategic Objectives</h2>
            <div className="divider-gold" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {objectives.map((obj, i) => (
              <RevealCard key={obj.num} delay={i * 80}>
                <div className="card-glass p-6 h-full flex gap-4">
                  <div className="font-display text-4xl font-extrabold text-rima-gold/20 leading-none flex-shrink-0">{obj.num}</div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg mb-2">{obj.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed">{obj.desc}</p>
                  </div>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>

        {/* Growth Plan */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-rima-gold text-xs font-bold tracking-widest uppercase">The Roadmap</span>
            <h2 className="font-display text-4xl font-bold text-white mt-2 mb-3">3-Year Growth Plan</h2>
            <div className="divider-gold" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {growthPlan.map((plan, i) => (
              <RevealCard key={plan.year} delay={i * 150}>
                <div className={`card-glass p-7 h-full border-t-2 ${plan.color}`}>
                  <p className="text-rima-gold font-display font-extrabold text-3xl mb-1">{plan.year}</p>
                  <h3 className="font-display font-bold text-white text-xl mb-4">{plan.title}</h3>
                  <ul className="flex flex-col gap-3">
                    {plan.points.map(pt => (
                      <li key={pt} className="flex items-start gap-2.5 text-white/65 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-rima-gold mt-1.5 flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-rima-gold text-xs font-bold tracking-widest uppercase">Our Journey</span>
            <h2 className="font-display text-4xl font-bold text-white mt-2 mb-3">From 1992 to Today</h2>
            <div className="divider-gold" />
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-rima-gold/20 -translate-x-1/2 hidden md:block" />
            <div className="flex flex-col gap-8">
              {timeline.map((item, i) => (
                <RevealCard key={item.year} delay={i * 80}>
                  <div className={`flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="card-glass p-5 inline-block w-full">
                        <p className="text-rima-gold font-display font-bold text-xl">{item.year}</p>
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-white/55 text-sm">{item.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-rima-gold border-4 border-rima-dark flex-shrink-0 mt-5 relative z-10" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </RevealCard>
              ))}
            </div>
          </div>
        </div>

        {/* Technology */}
        <RevealCard>
          <div className="card-glass p-10 mb-16">
            <div className="text-center mb-10">
              <span className="text-rima-gold text-xs font-bold tracking-widest uppercase">Technology & Infrastructure</span>
              <h2 className="font-display text-3xl font-bold text-white mt-2">Powered by Modern Technology</h2>
              <div className="divider-gold" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: 'CuteBanker',      sub: 'Core Banking Platform', desc: 'Real-time account management, loan tracking, and transaction processing.' },
                { title: 'NIBSS',           sub: 'Payment Integration',   desc: 'NIBSS Instant Payment (NIP) for instant inter-bank transfers across Nigeria.' },
                { title: 'Etranzact',       sub: 'Payment Gateway',       desc: 'Bill payments, airtime top-up, merchant collections and POS processing.' },
                { title: 'MFA + Encryption',sub: 'Security Infrastructure', desc: 'Multi-factor authentication, encrypted transactions, and 24/7 fraud monitoring.' },
              ].map(t => (
                <div key={t.title} className="bg-white/5 rounded-2xl p-5 border border-rima-gold/15 text-center">
                  <p className="font-display font-bold text-rima-gold text-xl mb-0.5">{t.title}</p>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-3">{t.sub}</p>
                  <p className="text-white/55 text-sm">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealCard>
      </section>

      {/* CBN compliance banner */}
      <div className="bg-rima-green-mid border-y border-rima-gold/20 py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-rima-gold text-xs font-bold uppercase tracking-widest mb-3">Regulatory Standing</p>
          <p className="text-white/70 text-sm leading-relaxed">
            Rima Microfinance Bank Limited is licensed by the{' '}
            <strong className="text-white">Central Bank of Nigeria (CBN)</strong>.
            Headquartered at <strong className="text-white">Gwaranyo LGA, Sokoto State, Nigeria</strong>.
            Core Banking: <strong className="text-white">CuteBanker</strong> |
            Integrations: <strong className="text-white">NIBSS & Etranzact</strong>.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
