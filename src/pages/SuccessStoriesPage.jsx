import { useState } from 'react'
import { TrendingUp, ArrowRight, Star, Quote, MapPin } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import useScrollReveal from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'

const stories = [
  {
    name: 'Hajiya Aisha Umar-Faruk',
    location: 'Birnin Kebbi, Kebbi State',
    occupation: 'Textile Trader',
    product: 'Murabaha Finance',
    productColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    avatar: 'AU',
    avatarColor: 'from-amber-600 to-yellow-800',
    quote: '"Rima MFB ta ba ni damar siyan kaya ta hanyar Murabaha — ba riba, halal ne. Na fara da ɗan ƙaramin kantin kayan zane, yanzu ina da shago uku a kasuwa."',
    quoteEn: '"Rima MFB gave me the opportunity to purchase stock through Murabaha — no interest, completely halal. I started with a small textile stall, now I have three shops in the market."',
    before: {
      income: '₦45,000/month',
      staff: '1 (herself)',
      shops: '1 stall',
      stock: '₦80,000',
    },
    after: {
      income: '₦280,000/month',
      staff: '4 employees',
      shops: '3 shops',
      stock: '₦1,200,000',
    },
    loan: 'Murabaha — ₦500,000',
    duration: '18 months',
    growth: '+522%',
    story: `Hajiya Aisha had been selling textiles in Birnin Kebbi market for over 8 years, but growth was always limited by her inability to stock up adequately. As a devout Muslim, she refused conventional bank loans because of the riba (interest) element.

When she heard about Rima MFB's Murabaha product, she was initially skeptical. "I thought it was just a normal loan with a different name," she recalls. But after meeting with our Shariah officer who explained the structure — the bank purchases goods and sells to her at a disclosed margin — she felt confident it was truly halal.

With her ₦500,000 Murabaha facility, Hajiya Aisha was able to stock up ahead of Ramadan and Eid season — the biggest trading periods. Her revenue tripled in the first year. She used her profits to expand into two additional stalls and hired four employees from her community.

"Rima MFB understands us. They speak our language, they respect our religion, and they helped my business in a way I never thought possible," she says.`,
  },
  {
    name: 'Malam Haruna Marafan-Rimi',
    location: 'Gwaranyo LGA, Sokoto State',
    occupation: 'Rice Farmer',
    product: 'Agricultural Loan',
    productColor: 'bg-lime-500/20 text-lime-300 border-lime-500/30',
    avatar: 'HM',
    avatarColor: 'from-green-700 to-green-900',
    quote: '"Ni manomi ne tun lokacin iyayena. Amma ba zan iya faɗaɗa gonata ba saboda kuɗi. Rima MFB ta ba ni lamunin noma, kuma an tsara biyan kuɗin bayan girbi."',
    quoteEn: '"I have been a farmer since my parents\' time. But I could never expand my farm due to finances. Rima MFB gave me an agricultural loan, with repayment structured after the harvest."',
    before: {
      income: '₦120,000/season',
      farmSize: '2 hectares',
      yield: '8 bags/hectare',
      workers: '2',
    },
    after: {
      income: '₦480,000/season',
      farmSize: '7 hectares',
      yield: '14 bags/hectare',
      workers: '8',
    },
    loan: 'Agricultural Loan — ₦300,000',
    duration: '12 months (harvest cycle)',
    growth: '+300%',
    story: `Malam Haruna has been farming rice in Gwaranyo LGA — the same area where Rima MFB was founded — for over 20 years. Despite decades of experience, his farm remained at just 2 hectares because he had no access to credit for fertilizers, improved seeds, and hired labour.

"Conventional banks asked for title documents, guarantors, and monthly repayments. No farmer can repay monthly — we only earn at harvest," he explains.

Rima MFB's agricultural loan was different. A field officer visited his farm, assessed the land, and structured a ₦300,000 loan with full repayment due 3 months after the expected harvest date. No monthly instalments during the growing season.

The results were transformative. Malam Haruna expanded to 7 hectares, used certified improved rice seeds, and hired 8 farm workers — all from his local community. His yield per hectare nearly doubled and his seasonal income quadrupled.

"I have been banking with Rima MFB since they were small. Now we are both growing together," he says with a smile.`,
  },
  {
    name: 'Musa Dan-Asabe',
    location: 'Gusau, Zamfara State',
    occupation: 'Motorcycle Parts Dealer',
    product: 'Micro Business Loan',
    productColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    avatar: 'MD',
    avatarColor: 'from-blue-700 to-blue-900',
    quote: '"Na koma makaranta na karanta kasuwanci saboda Rima MFB ta ba ni lamuni kuma tana ba ni shawarwari kyauta. Ba bankuna ne kawai — sun damu da ci gaban nawa ne."',
    quoteEn: '"I went back to school to study business because of Rima MFB\'s support. They\'re not just a bank — they genuinely care about my growth."',
    before: {
      income: '₦55,000/month',
      inventory: '₦150,000',
      location: '1 roadside stall',
      staff: 'None',
    },
    after: {
      income: '₦310,000/month',
      inventory: '₦1,800,000',
      location: '1 proper shop + online',
      staff: '3 employees',
    },
    loan: 'Micro Loan ₦150,000 → SME ₦800,000',
    duration: '3 years relationship',
    growth: '+464%',
    story: `Musa started selling motorcycle spare parts from a roadside stall in Gusau after secondary school. He had no formal banking relationship and kept his savings in a tin at home.

His first interaction with Rima MFB was through the *737# USSD service — he used it to check if a payment had come in. He was impressed by how easy it was and decided to open a savings account.

Six months later, he applied for his first micro loan of ₦150,000 to increase his inventory before the rainy season (when motorcycle repairs peak). He repaid in 8 months — two months early.

On the strength of that repayment record, Rima MFB approved an SME loan of ₦800,000 — enabling him to rent a proper shop, build stock across 20 motorcycle brands, and hire three staff. He also enrolled in part-time business management classes at a local college.

"My relationship manager calls me every month to check how business is going. When has a bank ever cared like that?" he says.`,
  },
  {
    name: 'Ƴan\'uwa Women\'s Cooperative',
    location: 'Sokoto State',
    occupation: '25-Member Women\'s Thrift Group',
    product: 'Cooperative Group Loan',
    productColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    avatar: 'YC',
    avatarColor: 'from-teal-700 to-emerald-900',
    quote: '"Mun zo Rima MFB a matsayin ƙungiya. Sun ba mu lamunin Qard Hasan. Babu riba. Kowanmu ta fara ko ta kara kasuwancinta. Allah ya ba mu renomewa."',
    quoteEn: '"We came to Rima MFB as a cooperative. They gave us a Qard Hasan loan. No interest. Every member started or expanded her business. God has blessed us with growth."',
    before: {
      members: '25 women',
      avgIncome: '₦18,000/month each',
      totalCapital: '₦450,000',
      businesses: '12 active',
    },
    after: {
      members: '25 women (+ 8 new)',
      avgIncome: '₦67,000/month each',
      totalCapital: '₦3,800,000',
      businesses: '25 active',
    },
    loan: 'Qard Hasan — ₦1,250,000 (group)',
    duration: '24 months',
    growth: '+272% avg income',
    story: `The Ƴan'uwa Women's Cooperative was formed in 2021 by 25 women from the same community in Sokoto State — mostly petty traders, seamstresses, and food vendors. They had been practising traditional "adashe" (thrift savings) for years but needed formal credit to grow.

They approached Rima MFB as a group. Our team worked with them to formalise their cooperative structure, open a group account, and apply for a Qard Hasan facility — the interest-free Islamic loan.

The ₦1,250,000 facility (₦50,000 per member on average) was disbursed to individual members based on their specific business needs. Repayment was structured monthly over 24 months with no interest charged.

The results exceeded all expectations. Within 18 months, every member had expanded her business. 8 new women joined the cooperative, inspired by the visible success. The group's total capital grew from ₦450,000 to ₦3.8 million.

"We pray for Rima MFB every day," says the cooperative chairwoman. "They gave us money without asking for riba. That is not just banking — that is an act of faith."`,
  },
]

function StoryCard({ story, delay }) {
  const { ref, visible } = useScrollReveal()
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      ref={ref}
      className={`card-glass overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${story.avatarColor}
                           border-2 border-rima-gold/30 flex items-center justify-center
                           font-display font-bold text-white text-lg flex-shrink-0`}>
            {story.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-white text-lg leading-tight">{story.name}</h3>
            <p className="text-white/50 text-xs">{story.occupation}</p>
            <div className="flex items-center gap-1 text-white/30 text-xs mt-0.5">
              <MapPin size={10} className="flex-shrink-0" />{story.location}
            </div>
          </div>
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full border flex-shrink-0 ${story.productColor}`}>
            {story.product}
          </span>
        </div>

        {/* Growth badge */}
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-500/20 border border-green-500/30 rounded-xl px-3 py-1.5 flex items-center gap-1.5">
            <TrendingUp size={14} className="text-green-400" />
            <span className="text-green-400 font-bold text-sm">{story.growth}</span>
            <span className="text-green-400/70 text-xs">growth</span>
          </div>
          <div className="text-white/40 text-xs">
            {story.loan} · {story.duration}
          </div>
        </div>

        {/* Quote */}
        <div className="relative pl-4 border-l-2 border-rima-gold/40 mb-5">
          <Quote size={16} className="text-rima-gold/30 absolute -left-2 -top-1" />
          <p className="text-white/65 text-sm italic leading-relaxed">{story.quoteEn}</p>
        </div>

        {/* Before / After */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { label: 'Before', data: story.before, bg: 'bg-red-500/5 border-red-500/20', titleColor: 'text-red-400' },
            { label: 'After',  data: story.after,  bg: 'bg-green-500/5 border-green-500/20', titleColor: 'text-green-400' },
          ].map(side => (
            <div key={side.label} className={`rounded-xl p-3 border ${side.bg}`}>
              <p className={`font-bold text-xs uppercase tracking-wider mb-2 ${side.titleColor}`}>{side.label}</p>
              {Object.entries(side.data).map(([k, v]) => (
                <div key={k} className="flex justify-between gap-2 mb-1">
                  <span className="text-white/40 text-xs capitalize">{k.replace(/([A-Z])/g,' $1')}</span>
                  <span className="text-white text-xs font-semibold text-right">{v}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={13} className="text-rima-gold fill-rima-gold" />
          ))}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-rima-gold text-xs font-semibold hover:text-rima-gold-bright transition-colors flex items-center gap-1"
        >
          {expanded ? 'Read less ↑' : 'Read full story →'}
        </button>
      </div>

      {/* Full story */}
      <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 border-t border-rima-gold/10 pt-4">
          {story.story.split('\n\n').map((para, i) => (
            <p key={i} className="text-white/60 text-sm leading-relaxed mb-3 last:mb-0">{para}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-rima-dark">
      <Navbar />
      <PageHero
        title="Success Stories"
        hausa="Labaran Nasara · Real People, Real Growth"
        subtitle="How Rima MFB customers across Northern Nigeria transformed their lives and businesses with Shariah-compliant financial solutions."
        breadcrumb={[{ label: 'Success Stories' }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-6">
        {/* Impact strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: '₦4.2B+', label: 'Total Disbursed',    sub: 'Jimlar Lamunin da aka Biya' },
            { value: '18K+',   label: 'Businesses Supported', sub: 'Kasuwanci da Muka Taimaka' },
            { value: '94%',    label: 'Repayment Rate',      sub: 'Dawowa da Kyau' },
            { value: '4.9★',   label: 'Customer Rating',     sub: 'Ƙimar Abokan Ciniki' },
          ].map((s, i) => (
            <div key={s.label} className="card-glass p-5 text-center">
              <p className="font-display text-3xl font-extrabold gold-text">{s.value}</p>
              <p className="text-white text-xs font-semibold mt-1">{s.label}</p>
              <p className="text-rima-gold/40 text-xs italic">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Story cards */}
        <div className="flex flex-col gap-8 mb-16">
          {stories.map((story, i) => (
            <StoryCard key={story.name} story={story} delay={i * 100} />
          ))}
        </div>

        {/* CTA */}
        <div className="card-glass p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 pattern-overlay opacity-30 pointer-events-none" />
          <div className="relative">
            <p className="text-rima-gold text-xs font-bold uppercase tracking-widest mb-3">
              Your Story Starts Here
            </p>
            <h3 className="font-display text-3xl font-bold text-white mb-3">
              Write Your Own Success Story
            </h3>
            <p className="text-white/50 mb-6 max-w-md mx-auto text-sm">
              Whether you need a Qard Hasan loan, Murabaha finance, or a micro business loan —
              Rima MFB is ready to help you grow.
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              <Link to="/loans/apply" className="btn-gold flex items-center gap-2">
                Apply for a Loan <ArrowRight size={16} />
              </Link>
              <Link to="/open-account" className="btn-outline-gold">Open an Account</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
