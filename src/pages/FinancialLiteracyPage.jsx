import { useState } from 'react'
import {
  BookOpen, Search, Clock, ChevronRight,
  PiggyBank, ShieldCheck, Smartphone, Users,
  TrendingUp, Banknote, ArrowRight, Tag
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import useScrollReveal from '../hooks/useScrollReveal'
import { useLang } from '../context/LanguageContext'

const categories = [
  { id: 'all',     label: 'All Articles',       labelHa: 'Dukkan Labarin',     Icon: BookOpen },
  { id: 'savings', label: 'Savings',            labelHa: 'Ajiya',              Icon: PiggyBank },
  { id: 'loans',   label: 'Loans & Finance',    labelHa: 'Lamuni',             Icon: Banknote },
  { id: 'shariah', label: 'Islamic Finance',    labelHa: 'Bankin Musulunci',   Icon: ShieldCheck },
  { id: 'digital', label: 'Digital Banking',    labelHa: 'Banki na Dijital',   Icon: Smartphone },
  { id: 'business',label: 'Business & SME',     labelHa: 'Kasuwanci',          Icon: TrendingUp },
  { id: 'basics',  label: 'Banking Basics',     labelHa: 'Asasin Banki',       Icon: Users },
]

const articles = [
  {
    id: 1,
    category: 'basics',
    title: 'What is a BVN and Why Do You Need One?',
    titleHa: 'Mene ne BVN? Me ya sa kake buƙatarsa?',
    readTime: '4 min',
    level: 'Beginner',
    levelColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    summary: 'BVN stands for Bank Verification Number — an 11-digit number that links all your bank accounts to your biometric data. It was introduced by the CBN in 2014 to reduce fraud and make banking safer for everyone in Nigeria.',
    summaryHa: 'BVN na nufin Lambar Tabbatar da Asusun Banki — lamba mai lamba 11 wacce ta haɗa dukkan asusunka da bayanan jikinka. An gabatar da ita ta CBN a shekarar 2014 don rage zamba.',
    content: [
      {
        heading: 'What exactly is a BVN?',
        body: 'Your BVN is an 11-digit number issued by the Central Bank of Nigeria through any bank. It stores your biometric data — fingerprints and photograph — and links to all your bank accounts across Nigeria. Think of it like a national banking identity card number.'
      },
      {
        heading: 'Why is it required by Rima MFB?',
        body: 'CBN regulations require all banks, including Rima MFB, to collect BVN before opening any account. This protects you — it prevents fraudsters from opening accounts in your name, and ensures that if you lose money to fraud, we can verify your identity quickly.'
      },
      {
        heading: 'How do I get a BVN?',
        body: 'Visit any bank branch in Nigeria (not just Rima MFB) with a valid ID. Your fingerprints will be captured and you will receive your BVN via SMS. It is free and takes about 10–15 minutes.'
      },
      {
        heading: 'Hausa: Me ya sa ake buƙatar BVN?',
        body: 'CBN ta bukaci dukkan bankunan Nijeriya, ciki har da Rima MFB, su tattara BVN kafin buɗe kowane asusu. Wannan na kare ku — yana hana masu zamba buɗe asusun a cikin sunanku, kuma yana tabbatar da asalinku da sauri idan an saci kuɗinku.'
      },
    ],
    tags: ['BVN', 'Identity', 'CBN', 'Account Opening'],
  },
  {
    id: 2,
    category: 'shariah',
    title: 'Understanding Murabaha: How Halal Trade Finance Works',
    titleHa: 'Fahimtar Murabaha: Yadda Kuɗin Kasuwanci na Halal ke Aiki',
    readTime: '6 min',
    level: 'Intermediate',
    levelColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    summary: 'Murabaha is one of the most widely used Islamic finance products in the world. Instead of a conventional interest-bearing loan, the bank purchases goods on your behalf and sells them to you at a disclosed profit margin — making it 100% halal.',
    summaryHa: 'Murabaha ɗaya ce daga cikin kayayyakin kuɗin Musulunci da ake amfani da su a duniya. Maimakon lamunin riba, bankin yana sayen kaya a madadinku kuma yana siyar muku da farashi da aka bayyana — wanda ke sa shi halal 100%.',
    content: [
      {
        heading: 'The Problem with Conventional Loans',
        body: 'A conventional bank loan involves the bank lending you money and charging interest (riba) on top. Islam prohibits riba because it allows money to generate money without real economic activity — creating inequality and exploitation. This is why many Muslims avoid conventional loans.'
      },
      {
        heading: 'How Murabaha Solves This',
        body: 'In Murabaha, you tell the bank what goods or assets you need. The bank purchases those goods directly from the seller and then sells them to you at the original cost plus a disclosed profit margin. You know exactly what the bank paid and what profit it is making — full transparency. The profit is fixed and cannot increase.'
      },
      {
        heading: 'A Real Example',
        body: 'Hajiya Aisha needs ₦500,000 worth of textile stock. Instead of giving her ₦500,000 and charging interest, Rima MFB buys the textiles from the supplier for ₦500,000 and sells them to Hajiya Aisha for ₦575,000 (cost + ₦75,000 profit margin, disclosed upfront). She repays ₦575,000 over 12 months. No riba — the bank made a legitimate trade profit.'
      },
      {
        heading: 'Why This Is Halal',
        body: 'The Quran (2:275) states: "Allah has permitted trade and forbidden riba." Murabaha is a trade transaction — the bank genuinely buys and sells goods. The profit is earned through legitimate commerce, not through the passage of time on money lent.'
      },
    ],
    tags: ['Murabaha', 'Islamic Finance', 'Halal', 'Trade Finance', 'Shariah'],
  },
  {
    id: 3,
    category: 'savings',
    title: 'How to Save Money on a Market Trader\'s Income',
    titleHa: 'Yadda Dan Kasuwa Zai Iya Ajiye Kuɗi',
    readTime: '5 min',
    level: 'Beginner',
    levelColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    summary: 'Saving money when your income is irregular and unpredictable can feel impossible. But with the right strategy, even a market trader earning ₦15,000 a week can build meaningful savings that protect their family and grow their business.',
    summaryHa: 'Ajiye kuɗi lokacin da kuɗin shigo ya canza kowace rana na iya zama da wahala. Amma da dabarar da ta dace, ko dan kasuwa mai samun ₦15,000 a mako zai iya gina ajiya mai ma\'ana.',
    content: [
      {
        heading: 'The 50-30-20 Rule (Adapted for Traders)',
        body: '50% of daily earnings for restocking and business expenses. 30% for household and family needs. 20% goes directly into your Rima MFB savings account. On a ₦15,000/week income, that is ₦3,000 saved every week — ₦156,000 per year without feeling it.'
      },
      {
        heading: 'The Daily Savings Habit',
        body: 'Instead of waiting to save a large amount at month-end (which rarely happens), save a fixed small amount every single day. Even ₦500 per day becomes ₦182,500 in a year. Use *737# to transfer to your savings account before you spend the money on anything else.'
      },
      {
        heading: 'Separate Business and Personal Money',
        body: 'Open two accounts — one current account for your business (stock purchases, sales receipts) and one savings account for personal/family money. Never mix the two. This single habit is the foundation of financial health for traders.'
      },
      {
        heading: 'Hausa: Hanya uku na Ajiya',
        body: '1. Ka ajiye wani ɓangare na kuɗin kasuwanci kowace rana kafin ka kashe kome. 2. Ka buɗe asusu biyu — ɗaya don kasuwanci, ɗayan don iyali. 3. Ka yi amfani da *737# don aika kuɗin ajiya nan da nan, kafin wata buƙata ta zo.'
      },
    ],
    tags: ['Savings', 'Traders', 'Budgeting', 'Financial Health', 'Hausa'],
  },
  {
    id: 4,
    category: 'basics',
    title: 'How NDIC Protects Your Money at Rima MFB',
    titleHa: 'Yadda NDIC ke Kare Kuɗinku a Rima MFB',
    readTime: '4 min',
    level: 'Beginner',
    levelColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    summary: 'The Nigeria Deposit Insurance Corporation (NDIC) is a government agency that protects your bank deposits. All deposits at Rima MFB are automatically insured up to ₦500,000 per depositor — at zero cost to you.',
    summaryHa: 'Hukumar Bada Inshorar Ajiya ta Nijeriya (NDIC) hukuma ce ta gwamnati da ke kare ajiyar banki. Dukkan ajiyar a Rima MFB an yi inshorar ta ta atomatik har zuwa ₦500,000 kowane mai asusu.',
    content: [
      {
        heading: 'What is NDIC?',
        body: 'The Nigeria Deposit Insurance Corporation (NDIC) was established by the Federal Government to protect depositors and maintain confidence in the banking system. It is similar to the FDIC in the USA or FSCS in the UK. If a bank fails, NDIC pays depositors up to the insured limit.'
      },
      {
        heading: 'How Much Am I Protected For?',
        body: 'At Rima MFB (a microfinance bank), NDIC covers up to ₦500,000 per depositor. This means if you have ₦400,000 in your account and something happens to the bank, NDIC will pay you back ₦400,000. If you have ₦700,000, NDIC covers ₦500,000 and you may recover the remaining through liquidation proceedings.'
      },
      {
        heading: 'Is This Automatic?',
        body: 'Yes. The moment you open an account at Rima MFB, your deposit is automatically insured by NDIC. You do not need to apply, pay any fee, or take any action. It is a built-in protection for every customer.'
      },
      {
        heading: 'Does This Apply to Shariah Accounts?',
        body: 'Yes. Both conventional and Shariah-compliant accounts at Rima MFB are protected by NDIC up to ₦500,000. The protection applies regardless of the account type.'
      },
    ],
    tags: ['NDIC', 'Deposit Insurance', 'Safety', 'CBN', 'Protection'],
  },
  {
    id: 5,
    category: 'digital',
    title: 'A Complete Guide to USSD Banking with *737#',
    titleHa: 'Jagoran Cikakke na Bankin USSD da *737#',
    readTime: '7 min',
    level: 'Beginner',
    levelColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    summary: 'USSD banking with *737# lets you send money, pay bills, buy airtime, and check your balance without any internet connection — on any phone, on any network. Here is everything you need to know.',
    summaryHa: 'Bankin USSD da *737# yana baka damar aika kuɗi, biyan kuɗi, siyan airtme, da duba asusunka ba tare da intanet ba — akan kowane waya, akan kowane hanyar sadarwa.',
    content: [
      {
        heading: 'What Can You Do With *737#?',
        body: 'Transfer money to any Nigerian bank account (up to ₦500,000 daily), pay electricity, water, and cable TV bills, buy airtime for MTN, Airtel, Glo, or 9mobile, check your account balance, get a mini statement of your last 5 transactions, and manage your account PIN.'
      },
      {
        heading: 'How to Get Started',
        body: 'Dial *737# on your registered phone number (the number linked to your Rima MFB account). Follow the on-screen menu to register — you will be asked to create a 4-digit PIN. Store this PIN safely and never share it with anyone — including Rima MFB staff.'
      },
      {
        heading: 'How to Transfer Money',
        body: 'Dial *737# → Select "Transfer" → Choose "To Other Banks" or "To Rima MFB" → Enter account number and bank → Enter amount → Confirm with your PIN. The transfer is instant. You will receive an SMS confirmation on your phone.'
      },
      {
        heading: 'Security Tips',
        body: 'Never share your USSD PIN with anyone. Rima MFB staff will NEVER ask for your PIN. If you suspect your PIN is compromised, dial *737# immediately and change it under "Account Settings". Report any suspicious activity to 0800-RIMA-MFB.'
      },
    ],
    tags: ['USSD', 'Mobile Banking', '*737#', 'Digital', 'Transfers'],
  },
  {
    id: 6,
    category: 'business',
    title: 'How to Grow Your Small Business with a Rima MFB Loan',
    titleHa: 'Yadda Ake Faɗaɗa Ƙaramin Kasuwanci da Lamunin Rima MFB',
    readTime: '6 min',
    level: 'Intermediate',
    levelColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    summary: 'Getting your first business loan can feel daunting. But the right loan, at the right time, can double or triple your business. Here is a practical guide to borrowing responsibly from Rima MFB.',
    summaryHa: 'Samun lamunin kasuwanci na farko na iya zama da wahala. Amma lamunin da ya dace, a lokacin da ya dace, na iya ninka kasuwancinka. Ga jagoran aiki na aro daga Rima MFB.',
    content: [
      {
        heading: 'Borrow for Revenue-Generating Purposes Only',
        body: 'Only take a business loan to invest in something that will directly generate more income — buying stock to sell, purchasing equipment to produce goods, expanding to a second location. Never take a business loan to cover personal expenses or pay rent. The loan must pay for itself.'
      },
      {
        heading: 'Calculate Your Repayment Capacity First',
        body: 'Before applying, calculate your monthly net income (revenue minus expenses). Your monthly loan repayment should not exceed 30–40% of your monthly net income. Use the Rima MFB loan calculator at rimamfb.com/loans to estimate your monthly payment before you apply.'
      },
      {
        heading: 'Start Small, Build Your Record',
        body: 'Your first loan with Rima MFB should be modest — even if you qualify for more. Repay it on time (or early). This builds your credit record and qualifies you for larger amounts in the future. Musa Dan-Asabe (see our Success Stories) started with ₦150,000 and graduated to ₦800,000 on his second loan because of his perfect repayment.'
      },
      {
        heading: 'Consider Murabaha for Stock Purchase',
        body: 'If you are Muslim and buying goods to resell, Murabaha is the ideal product. The bank buys the stock from your supplier and sells it to you at a disclosed markup — no riba. Your profit margin on resale should comfortably cover the Murabaha payment.'
      },
    ],
    tags: ['SME', 'Loans', 'Business', 'Growth', 'Murabaha'],
  },
  {
    id: 7,
    category: 'shariah',
    title: 'Qard Hasan: The Most Beautiful Loan in Islamic Finance',
    titleHa: 'Qard Hasan: Mafi Kyawun Lamuni a Bankin Musulunci',
    readTime: '5 min',
    level: 'Beginner',
    levelColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    summary: 'Qard Hasan literally means "a beautiful loan" in Arabic. It is the most charitable form of Islamic finance — an interest-free, fee-free loan where the borrower repays only what they borrowed. Rima MFB offers this to eligible customers.',
    summaryHa: 'Qard Hasan na nufin "aro mai kyau" a Larabci. Shi ne mafi karimcin nau\'in kuɗin Musulunci — lamuni ba tare da riba ba, inda mai aro ya mayar da abin da ya aro kawai.',
    content: [
      {
        heading: 'What Makes It "Beautiful"?',
        body: 'The Quran describes Qard Hasan as "lending to Allah" — an act of charity and trust. The lender (in this case Rima MFB) expects no profit. The borrower repays only the principal. There is no interest, no fees, and no hidden charges. It is purely to help someone in need.'
      },
      {
        heading: 'Who Qualifies for Qard Hasan at Rima MFB?',
        body: 'Qard Hasan is available to existing Rima MFB account holders who can demonstrate genuine financial need — a medical emergency, urgent family necessity, or short-term financial hardship. It is not for business expansion (that is Murabaha or SME loans). Our Shariah officer reviews each application.'
      },
      {
        heading: 'The Quranic Basis',
        body: '"Who is it that would loan Allah a goodly loan so He will multiply it for him and he will have a noble reward?" (Quran 57:11). By providing Qard Hasan, Rima MFB is fulfilling an Islamic social responsibility — redistributing wealth within the community without exploitation.'
      },
      {
        heading: 'How It Differs from Other Loans',
        body: 'Murabaha: Bank buys goods for you, earns a trade profit. SME Loan: For business purposes, carries a monthly profit rate. Qard Hasan: For personal hardship, zero profit, zero fees. Simply repay what you borrowed.'
      },
    ],
    tags: ['Qard Hasan', 'Islamic Finance', 'Interest-Free', 'Halal', 'Zakat'],
  },
  {
    id: 8,
    category: 'savings',
    title: 'Fixed Deposit vs Savings Account: Which is Right for You?',
    titleHa: 'Ajiyar Tsayayye ko Ajiyar Yau da Kullum: Wanne Ya Fi Muku?',
    readTime: '4 min',
    level: 'Beginner',
    levelColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    summary: 'Both savings accounts and fixed deposits help you grow your money — but they work differently. Choosing the right one depends on whether you need access to your money soon, or can afford to lock it away for a higher return.',
    summaryHa: 'Dukkan asusun ajiya da ajiyar tsayayye suna taimaka muku girma — amma suna aiki daban. Zaɓar na dace ya dogara ne akan ko kana buƙatar kuɗinka da sauri, ko za ka iya ajiye su na tsawo.',
    content: [
      {
        heading: 'Savings Account',
        body: 'Flexible — deposit and withdraw anytime. Lower return (6–7% p.a. at Rima MFB). Best for: emergency funds, day-to-day savings, traders who need liquidity. Minimum: ₦500.'
      },
      {
        heading: 'Fixed Deposit',
        body: 'You lock your money for a fixed period (30 to 365 days). Higher return (up to 12% p.a. at Rima MFB). Cannot withdraw early without penalty. Best for: money you will not need soon, annual savings, school fee reserves. Minimum: ₦50,000.'
      },
      {
        heading: 'The Smart Combination',
        body: 'Financial advisors recommend keeping 3–6 months of expenses in a liquid savings account (your emergency fund) and putting the rest in a fixed deposit for higher returns. This way you have protection and growth.'
      },
      {
        heading: 'Shariah Options Available',
        body: 'Both savings and fixed deposit accounts at Rima MFB are available in Shariah-compliant form. Instead of interest, returns are based on profit-sharing from the bank\'s halal investment activities. Ask for the "Non-Interest" option when opening your account.'
      },
    ],
    tags: ['Savings', 'Fixed Deposit', 'Interest', 'Returns', 'Planning'],
  },
]

function ArticleCard({ article, delay }) {
  const { ref, visible } = useScrollReveal()
  const { lang } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <div
      ref={ref}
      className={`card-glass overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-0.5 bg-gold-gradient" />
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${article.levelColor}`}>
            {article.level}
          </span>
          <div className="flex items-center gap-1.5 text-white/30 text-xs">
            <Clock size={11} />{article.readTime} read
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-white text-lg mb-1 leading-snug">
          {lang === 'ha' ? article.titleHa : article.title}
        </h3>
        <p className="text-rima-gold/50 text-xs italic mb-3">
          {lang === 'ha' ? article.title : article.titleHa}
        </p>

        {/* Summary */}
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          {lang === 'ha' ? article.summaryHa : article.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {article.tags.slice(0, 3).map(tag => (
            <span key={tag} className="flex items-center gap-1 text-rima-gold/50 text-xs bg-rima-gold/5 border border-rima-gold/15 px-2 py-0.5 rounded-full">
              <Tag size={9} />{tag}
            </span>
          ))}
        </div>

        {/* Read more */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 text-rima-gold text-sm font-semibold hover:gap-2.5 transition-all"
        >
          {open
            ? (lang === 'ha' ? 'Rufe ↑' : 'Read less ↑')
            : (lang === 'ha' ? 'Karanta Gaba →' : 'Read full article →')
          }
          {!open && <ChevronRight size={14} />}
        </button>
      </div>

      {/* Full article */}
      <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 border-t border-rima-gold/10 pt-5">
          {article.content.map((section, i) => (
            <div key={i} className="mb-5 last:mb-0">
              <h4 className="font-display font-semibold text-rima-gold text-base mb-2">
                {section.heading}
              </h4>
              <p className="text-white/65 text-sm leading-relaxed">{section.body}</p>
            </div>
          ))}
          {/* All tags */}
          <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-rima-gold/10">
            {article.tags.map(tag => (
              <span key={tag} className="flex items-center gap-1 text-rima-gold/40 text-xs bg-rima-gold/5 border border-rima-gold/10 px-2.5 py-0.5 rounded-full">
                <Tag size={9} />{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FinancialLiteracyPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const { lang } = useLang()

  const filtered = articles.filter(a => {
    const matchCat = activeCategory === 'all' || a.category === activeCategory
    const q = searchQuery.toLowerCase()
    const matchSearch = !q || a.title.toLowerCase().includes(q) ||
      a.titleHa.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.tags.some(t => t.toLowerCase().includes(q))
    return matchCat && matchSearch
  })

  return (
    <div className="min-h-screen bg-rima-dark">
      <Navbar />
      <PageHero
        title="Financial Literacy Hub"
        hausa="Cibiyar Ilimin Kuɗi · Learn & Grow"
        subtitle="Simple guides in English and Hausa to help you understand banking, saving, loans, and Islamic finance — whether you're new to banking or want to grow your knowledge."
        breadcrumb={[{ label: 'Financial Literacy' }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { v: `${articles.length}`,    l: 'Articles',          s: 'And growing' },
            { v: '2',                     l: 'Languages',          s: 'English & Hausa' },
            { v: categories.length - 1,   l: 'Topics Covered',    s: 'From basics to Islamic finance' },
            { v: 'Free',                  l: 'Always',             s: 'No subscription needed' },
          ].map(s => (
            <div key={s.l} className="card-glass p-4 text-center">
              <p className="font-display text-2xl font-extrabold gold-text">{s.v}</p>
              <p className="text-white text-xs font-semibold mt-1">{s.l}</p>
              <p className="text-white/30 text-xs">{s.s}</p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="relative mb-8 max-w-xl">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-rima-gold/50" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={lang === 'ha' ? 'Bincika labarin...' : 'Search articles...'}
            className="w-full bg-white/5 border border-rima-gold/20 rounded-2xl pl-11 pr-4 py-3
                       text-white placeholder-white/30 text-sm outline-none focus:border-rima-gold/50 transition-all"
          />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => {
            const Icon = cat.Icon
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold transition-all
                  ${activeCategory === cat.id
                    ? 'bg-rima-gold/20 border-rima-gold/60 text-rima-gold'
                    : 'bg-white/5 border-white/10 text-white/60 hover:border-rima-gold/30 hover:text-white'
                  }`}
              >
                <Icon size={12} />
                {lang === 'ha' ? cat.labelHa : cat.label}
              </button>
            )
          })}
        </div>

        {/* Articles */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen size={40} className="text-rima-gold/30 mx-auto mb-3" />
            <p className="text-white/50">No articles found. Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {filtered.map((article, i) => (
              <ArticleCard key={article.id} article={article} delay={i * 60} />
            ))}
          </div>
        )}

        {/* Suggest topic */}
        <div className="card-glass p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 pattern-overlay opacity-30 pointer-events-none" />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              {lang === 'ha' ? 'Kuna da Tambaya?' : 'Have a Topic You Want Covered?'}
            </h3>
            <p className="text-white/50 mb-5 text-sm max-w-md mx-auto">
              {lang === 'ha'
                ? 'Aika mana saƙo kuma za mu rubuta labarin da ke amsa tambayarku — cikin Hausa ko Turanci.'
                : 'Send us a message and we will write an article answering your question — in English or Hausa.'
              }
            </p>
            <a href="/contact" className="btn-gold inline-flex items-center gap-2">
              {lang === 'ha' ? 'Tuntube Mu' : 'Suggest a Topic'}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
