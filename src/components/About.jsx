import { CheckCircle2, TrendingUp, MapPin, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import useCounter from '../hooks/useCounter'

const pillars = [
  'Shariah-compliant products: Qard Hasan & Murabaha',
  'Powered by CuteBanker core banking platform',
  'NIBSS & Etranzact integrated for instant payments',
  'Mobile app on Android & iOS',
  'USSD banking — no internet required',
  '2,000 POS terminals across Northern Nigeria',
  'Agent banking in underserved rural areas',
  'Multi-factor authentication & fraud monitoring',
]

function StatCounter({ target, suffix = '', prefix = '', label, sub }) {
  const { count, ref } = useCounter(target, 2000)
  return (
    <div ref={ref} className="text-center p-6 card-glass">
      <p className="font-display text-4xl md:text-5xl font-extrabold gold-text mb-1">
        {prefix}{count.toLocaleString()}{suffix}
      </p>
      <p className="text-white font-semibold text-sm">{label}</p>
      <p className="text-rima-gold/50 text-xs italic mt-0.5">{sub}</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #061c12 0%, #0a4a2e 50%, #061c12 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rima-gold/30 to-transparent" />
      <div className="absolute inset-0 pattern-overlay pointer-events-none opacity-40" />
      <div className="absolute left-0 top-1/4 w-72 h-72 rounded-full bg-rima-gold/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Animated stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          <StatCounter target={1992}  label="Year Established"    sub="Kafa a shekara" />
          <StatCounter target={25000} suffix="+" label="Current Customers" sub="Masu Asusun" />
          <StatCounter target={500}   suffix="K" label="Year 1 Target"     sub="Burin shekara ta 1" />
          <StatCounter target={2000}  label="POS Terminals"      sub="Na'urar POS" />
        </div>

        {/* Two column story */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-rima-gold/10 blur-2xl scale-110" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-rima-gold/30
                              flex items-center justify-center bg-gradient-to-br from-rima-green-mid to-rima-dark">
                <Logo size={160} />
              </div>
              <div className="absolute -top-2 -right-2 bg-rima-gold rounded-2xl px-4 py-2 shadow-xl text-rima-dark font-bold text-sm">
                <TrendingUp size={14} className="inline mr-1" />Est. 1992
              </div>
              <div className="absolute -bottom-2 -left-2 bg-rima-dark border border-rima-gold/40 rounded-2xl px-4 py-2 shadow-xl text-rima-gold font-semibold text-sm">
                <Award size={14} className="inline mr-1" />CBN Licensed
              </div>
              <div className="absolute top-1/2 -right-16 -translate-y-1/2 bg-rima-green-mid border border-rima-gold/30 rounded-2xl px-3 py-2 shadow-xl text-white text-sm">
                <MapPin size={12} className="inline mr-1 text-rima-gold" />Sokoto State
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block text-rima-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              About Rima MFB · Game da Mu
            </span>
            <h2 className="section-title mb-4">
              30+ Years of<br />
              <span className="gold-text">Community Banking</span><br />
              in the North
            </h2>
            <div className="w-16 h-1 bg-gold-gradient rounded-full mb-6" />
            <p className="text-white/70 leading-relaxed mb-4">
              Established in <strong className="text-white">1992</strong> and headquartered in{' '}
              <strong className="text-white">Gwaranyo LGA, Sokoto State</strong>, Rima Microfinance Bank
              has spent over three decades building trust with Northern Nigerian communities. Licensed and
              regulated by the <strong className="text-white">Central Bank of Nigeria (CBN)</strong>.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              With <strong className="text-white">25,000+ existing customers</strong> and an ambitious
              digital transformation targeting <strong className="text-white">500,000 customers in Year 1</strong>,
              Rima MFB blends decades of community banking experience with modern technology —
              powered by the <span className="text-rima-gold font-semibold">CuteBanker</span> core banking
              platform and integrated with <span className="text-rima-gold font-semibold">NIBSS</span> and{' '}
              <span className="text-rima-gold font-semibold">Etranzact</span>.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {pillars.map(item => (
                <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                  <CheckCircle2 size={16} className="text-rima-gold mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 btn-gold">
              Our Full Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
