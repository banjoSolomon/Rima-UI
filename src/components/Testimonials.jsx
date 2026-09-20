import { Star, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'

const testimonials = [
  {
    name: 'Alhaji Yusuf Dansadau',
    role: 'Grain Trader, Sokoto Market',
    hausa: 'Dan kasuwa, kasuwar Sokoto',
    stars: 5,
    eng: '"Rima MFB ta ba ni lamuni ta hanyar Murabaha don siyan kaya. Ba riba — halal ne! Tsarin yana da sauƙi sosai, kuma an biya kuɗin cikin kwanaki uku. Nagode, Rima!"',
    avatar: 'YD',
    color: 'from-green-700 to-green-900',
  },
  {
    name: 'Hajiya Aisha Umar-Faruk',
    role: 'Women Cooperative Leader, Kebbi',
    hausa: 'Shugabar ƙungiyar mata, Kebbi',
    stars: 5,
    eng: '"Our women\'s cooperative received a group loan from Rima MFB. The process was fast, the staff spoke Hausa, and repayment was structured around our market schedule. This bank truly understands us."',
    avatar: 'AU',
    color: 'from-amber-700 to-yellow-900',
  },
  {
    name: 'Malam Sule Marafan-Sokoto',
    role: 'Farmer, Gwaranyo LGA',
    hausa: 'Manomi, Gwaranyo LGA, Sokoto',
    stars: 5,
    eng: '"I used USSD *737# for the first time to pay for fertilizer. No internet, no smartphone needed — just my basic phone. Rima MFB really thought about farmers like me. Allah ya saka muku da alheri!"',
    avatar: 'SM',
    color: 'from-teal-700 to-emerald-900',
  },
  {
    name: 'Ibrahim Aliyu-Zamfara',
    role: 'Civil Servant, Gusau',
    hausa: 'Ma\'aikacin gwamnati, Gusau, Zamfara',
    stars: 5,
    eng: '"I received a Qard Hasan — interest-free loan — from Rima MFB to cover a family emergency. I repaid only what I borrowed. No interest. No extra charges. This is what Islamic banking should look like."',
    avatar: 'IA',
    color: 'from-blue-700 to-blue-900',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-rima-dark overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rima-gold/30 to-transparent" />
      <div className="absolute inset-0 pattern-overlay pointer-events-none opacity-30" />
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-rima-gold/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-rima-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Customer Voices · Abin da Abokan Ciniki Suke Cewa
          </span>
          <h2 className="section-title mb-4">
            Trusted for Over<br />
            <span className="gold-text">30 Years</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-white/50 text-base max-w-xl mx-auto mt-4">
            From Gwaranyo to Gusau — real stories from real customers across Northern Nigeria.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map(t => (
            <div key={t.name} className="card-glass p-6 flex flex-col gap-4">
              <Quote size={24} className="text-rima-gold/30" />
              <div className="flex gap-1">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={14} className="text-rima-gold fill-rima-gold" />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed flex-1 italic">{t.eng}</p>
              <div className="w-full h-px bg-rima-gold/15" />
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color}
                                 flex items-center justify-center font-bold text-white text-sm flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-rima-gold/60 text-xs">{t.role}</p>
                  <p className="text-white/30 text-xs italic">{t.hausa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="text-white/50 mb-4 text-sm">
            Join 25,000+ customers — growing to 500,000 in our digital transformation
          </p>
          <Link to="/contact" className="btn-gold">Open Your Account Today</Link>
        </div>
      </div>
    </section>
  )
}
