import { ShieldCheck, AlertTriangle, Info } from 'lucide-react'

const messages = [
  { icon: ShieldCheck,  text: 'CBN Licensed Microfinance Bank · License No: MFB/000001',                           color: 'text-green-400',  bg: 'bg-green-500/10 border-green-500/20' },
  { icon: ShieldCheck,  text: 'All deposits insured by NDIC up to ₦500,000 per depositor',                        color: 'text-blue-400',   bg: 'bg-blue-500/10 border-blue-500/20' },
  { icon: AlertTriangle,text: 'Fraud Alert: Rima MFB will NEVER ask for your PIN, OTP, or password',              color: 'text-amber-400',  bg: 'bg-amber-500/10 border-amber-500/20' },
  { icon: AlertTriangle,text: 'Gargadi: Rima MFB ba za ta taɓa tambayar PIN ko OTP ɗinku ba',                    color: 'text-amber-400',  bg: 'bg-amber-500/10 border-amber-500/20' },
  { icon: Info,         text: 'Report fraud: 0800-RIMA-MFB · complaints@rimamfb.com',                             color: 'text-white/60',   bg: 'bg-white/5 border-white/10' },
  { icon: ShieldCheck,  text: 'Est. 1992 · Gwaranyo LGA, Sokoto State · Regulated by CBN',                        color: 'text-green-400',  bg: 'bg-green-500/10 border-green-500/20' },
]

export default function RegulatoryTicker() {
  return (
    <section className="relative py-10 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #040f07 0%, #061c12 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rima-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rima-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-rima-gold text-xs font-bold tracking-widest uppercase">
            Regulatory Compliance · Tsarin Doka
          </span>
          <h2 className="font-display text-2xl font-bold text-white mt-1">
            Licensed. Insured. <span className="gold-text">Trusted.</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {messages.map((msg, i) => {
            const Icon = msg.icon
            return (
              <div
                key={i}
                className={`flex items-start gap-3 p-4 rounded-2xl border ${msg.bg} transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={15} className={msg.color} />
                </div>
                <p className={`text-sm leading-relaxed font-medium ${msg.color}`}>
                  {msg.text}
                </p>
              </div>
            )
          })}
        </div>

        {/* Scrolling ticker below */}
        <div className="mt-6 overflow-hidden rounded-xl bg-white/3 border border-rima-gold/10 py-2 relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-rima-dark/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-rima-dark/80 to-transparent z-10 pointer-events-none" />
          <div className="flex animate-[ticker_35s_linear_infinite] whitespace-nowrap">
            {[
              'CBN Licensed · ',
              'NDIC Insured up to ₦500,000 · ',
              'Rima MFB will NEVER ask for your PIN or OTP · ',
              'CuteBanker Core Banking · NIBSS Integrated · Etranzact Powered · ',
              'Est. 1992 · Gwaranyo LGA, Sokoto State · ',
              'Report fraud: 0800-RIMA-MFB · ',
              'Bankin ku — Made For Us By Us · ',
            ].flatMap((t, i) => [
              <span key={`a${i}`} className="inline-flex items-center gap-2 px-4 text-white/40 text-xs">
                <span className="w-1 h-1 rounded-full bg-rima-gold/40 flex-shrink-0" />
                {t}
              </span>
            ]).concat(
              [
                'CBN Licensed · ',
                'NDIC Insured up to ₦500,000 · ',
                'Rima MFB will NEVER ask for your PIN or OTP · ',
                'CuteBanker Core Banking · NIBSS Integrated · Etranzact Powered · ',
                'Est. 1992 · Gwaranyo LGA, Sokoto State · ',
                'Report fraud: 0800-RIMA-MFB · ',
                'Bankin ku — Made For Us By Us · ',
              ].map((t, i) => (
                <span key={`b${i}`} className="inline-flex items-center gap-2 px-4 text-white/40 text-xs">
                  <span className="w-1 h-1 rounded-full bg-rima-gold/40 flex-shrink-0" />
                  {t}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
