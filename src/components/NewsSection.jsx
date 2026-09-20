import { Calendar, ArrowRight, Tag } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const news = [
  {
    category: 'Digital Transformation',
    categoryColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    date: 'September 2024',
    title: 'Rima MFB Launches Digital Transformation: Targeting 500,000 Customers',
    excerpt: 'After 30+ years of community banking, Rima MFB launches its digital transformation programme — targeting growth from 25,000 to 500,000 customers, with focus on Abuja, Kaduna, Kano, and Sokoto.',
    readTime: '4 min read',
  },
  {
    category: 'Islamic Finance',
    categoryColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    date: 'August 2024',
    title: 'Rima MFB Strengthens Shariah-Compliant Product Range: Qard Hasan & Murabaha',
    excerpt: 'As the first-mover in digital Islamic banking in Northern Nigeria, Rima MFB expands its Qard Hasan and Murabaha product offerings — providing halal, riba-free financial solutions for Muslim customers.',
    readTime: '3 min read',
  },
  {
    category: 'Technology',
    categoryColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    date: 'July 2024',
    title: 'CuteBanker Integration: Rima MFB Goes Live with NIBSS and Etranzact',
    excerpt: 'Rima MFB completes full integration of the CuteBanker core banking platform with NIBSS for instant payments and Etranzact for bill payments, airtime, and merchant collections.',
    readTime: '3 min read',
  },
  {
    category: 'Agent Banking',
    categoryColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    date: 'June 2024',
    title: '2,000 POS Terminals Deployed Across Northern Nigeria',
    excerpt: 'Rima MFB reaches its Year 1 POS deployment target of 2,000 terminals across Northern Nigeria — bringing card and wallet payment acceptance to markets, farms, and communities where branches cannot reach.',
    readTime: '4 min read',
  },
  {
    category: 'Mobile Banking',
    categoryColor: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
    date: 'May 2024',
    title: 'Rima Mobile App Now Live on Android and iOS',
    excerpt: 'The Rima MFB mobile app — powered by the CuteBanker platform — is now available for download on the Google Play Store and Apple App Store, offering full banking features in English and Hausa.',
    readTime: '2 min read',
  },
  {
    category: 'Financial Inclusion',
    categoryColor: 'bg-lime-500/20 text-lime-400 border-lime-500/30',
    date: 'April 2024',
    title: 'Rima MFB Leads Financial Inclusion Drive in Rural Sokoto and Kebbi',
    excerpt: 'Through its USSD *737# banking service and agent network, Rima MFB has brought formal financial services to communities in rural Sokoto and Kebbi for the first time — no internet, no smartphone required.',
    readTime: '5 min read',
  },
]

function NewsCard({ article, delay }) {
  const { ref, visible } = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`card-glass group cursor-pointer overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-1 bg-gold-gradient" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-flex items-center gap-1.5 border text-xs font-semibold px-2.5 py-1 rounded-full ${article.categoryColor}`}>
            <Tag size={10} />{article.category}
          </span>
          <div className="flex items-center gap-1.5 text-white/30 text-xs">
            <Calendar size={11} />{article.date}
          </div>
        </div>
        <h3 className="font-display font-bold text-white text-base leading-snug mb-3 group-hover:text-rima-gold transition-colors">
          {article.title}
        </h3>
        <p className="text-white/55 text-sm leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-white/30 text-xs">{article.readTime}</span>
          <button className="flex items-center gap-1 text-rima-gold text-xs font-semibold hover:gap-2 transition-all">
            Read More <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function NewsSection() {
  return (
    <section className="relative py-24 bg-rima-dark overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rima-gold/30 to-transparent" />
      <div className="absolute inset-0 pattern-overlay opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-rima-gold text-xs font-bold tracking-widest uppercase">Latest Updates · Labarai na Yanzu</span>
            <h2 className="section-title mt-2">
              News & <span className="gold-text">Stories</span>
            </h2>
          </div>
          <a href="#" className="btn-outline-gold text-sm flex items-center gap-2">
            View All News <ArrowRight size={14} />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {news.map((article, i) => (
            <NewsCard key={article.title} article={article} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
