import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const faqs = [
  {
    q: 'When was Rima MFB established?',
    h: 'Yaushe aka kafa Rima MFB?',
    a: 'Rima Microfinance Bank was established in 1992 and is headquartered in Gwaranyo LGA, Sokoto State, Nigeria. We are licensed and regulated by the Central Bank of Nigeria (CBN). With over 30 years of community banking experience, we are now executing a digital transformation to reach 500,000 customers in our first year.'
  },
  {
    q: 'What is Qard Hasan and how do I apply?',
    h: 'Mene ne Qard Hasan, kuma ta yaya zan nema shi?',
    a: 'Qard Hasan is an interest-free (riba-free) benevolent loan — one of the most important pillars of Islamic finance. Rima MFB provides this product to eligible individuals in genuine financial need. You repay only the principal amount with no interest, no fees, and no profit margin. To apply, visit any of our branches with a written request, valid ID, and BVN.'
  },
  {
    q: 'What is Murabaha and how is it different from a regular loan?',
    h: 'Mene ne Murabaha?',
    a: 'Murabaha is a Shariah-compliant trade finance product. Instead of lending you money (which would involve interest/riba), Rima MFB purchases the goods or asset you need and sells it to you at a disclosed profit margin. The profit margin is agreed upfront, making it fully transparent and halal. It is the Islamic alternative to a conventional loan for purchasing goods or assets.'
  },
  {
    q: 'What core banking system does Rima MFB use?',
    h: 'Wane tsarin fasaha ne Rima MFB ke amfani da shi?',
    a: 'Rima MFB operates on the CuteBanker core banking platform, integrated with NIBSS (Nigeria Inter-Bank Settlement System) for instant inter-bank transfers and Etranzact for payment processing including bill payments, airtime purchases, and merchant collections.'
  },
  {
    q: 'How do I use USSD banking?',
    h: 'Ta yaya zan yi amfani da bankin *737#?',
    a: 'Simply dial *737# on your registered phone number on any Nigerian network (MTN, Airtel, Glo, 9mobile). No internet is required — it works on any type of phone. Follow the prompts to register, set your 4-digit PIN, and start banking. You can transfer money, pay bills, buy airtime, check your balance, and get mini statements.'
  },
  {
    q: 'What is Rima MFB\'s target for Year 1 of digital transformation?',
    h: 'Mene ne burinta na shekara ta farko?',
    a: 'Rima MFB is targeting growth from its current 25,000 customers to 500,000 customers in Year 1 of its digital transformation. The focus markets are Abuja, Kaduna, Kano, and Sokoto. This will be achieved through mobile app and USSD banking rollout, the 2,000-terminal POS network, and agent banking expansion.'
  },
  {
    q: 'How many POS terminals does Rima MFB have?',
    h: 'Nawa ne na\'urar POS da Rima MFB ke da su?',
    a: 'Rima MFB has deployed 2,000 POS terminals across Northern Nigeria as part of its agent banking and financial inclusion strategy. These terminals support card payments and digital wallet transactions with instant settlement and low fees. In Year 2, the target is to expand to 5,000 terminals.'
  },
  {
    q: 'Is Rima MFB regulated and are deposits safe?',
    h: 'Shin Rima MFB an ba da izini? Shin kuɗina suna da aminci?',
    a: 'Yes. Rima Microfinance Bank Limited is fully licensed and regulated by the Central Bank of Nigeria (CBN). All customer deposits are protected under the Nigeria Deposit Insurance Corporation (NDIC) framework. Our technology infrastructure includes multi-factor authentication, encrypted transactions, and 24/7 fraud monitoring.'
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const { ref, visible } = useScrollReveal()

  return (
    <section className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a4a2e 0%, #061c12 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rima-gold/30 to-transparent" />
      <div className="absolute inset-0 pattern-overlay opacity-30 pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-rima-gold/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-rima-gold text-xs font-bold tracking-widest uppercase">
            Got Questions? · Kuna da Tambayoyi?
          </span>
          <h2 className="section-title mt-2 mb-3">
            Frequently Asked<br /><span className="gold-text">Questions</span>
          </h2>
          <div className="divider-gold" />
        </div>

        <div
          ref={ref}
          className={`flex flex-col gap-3 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`card-glass overflow-hidden transition-all duration-300 ${open === i ? 'border-rima-gold/40' : ''}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-start gap-4 text-left group"
              >
                <span className="w-6 h-6 rounded-full bg-rima-gold/15 border border-rima-gold/30
                                 flex items-center justify-center text-rima-gold text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm group-hover:text-rima-gold transition-colors">{faq.q}</p>
                  <p className="text-rima-gold/40 text-xs italic mt-0.5">{faq.h}</p>
                </div>
                <div className="text-rima-gold/60 flex-shrink-0 mt-0.5">
                  {open === i ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-400 ${open === i ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-5 pl-16 border-t border-rima-gold/10 pt-4">
                  <p className="text-white/65 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-white/40 text-sm mb-3">Still have questions? Call us or visit any branch.</p>
          <a href="/contact" className="btn-outline-gold text-sm">Contact Our Team</a>
        </div>
      </div>
    </section>
  )
}
