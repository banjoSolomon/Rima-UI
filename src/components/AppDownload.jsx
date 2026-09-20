import { Smartphone, Star, Download, Wifi, Bell, Shield, Cpu } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const appFeatures = [
  { icon: Wifi,     label: 'USSD *737# — no internet needed' },
  { icon: Bell,     label: 'Real-time SMS & push alerts' },
  { icon: Shield,   label: 'Multi-factor authentication' },
  { icon: Cpu,      label: 'Powered by CuteBanker platform' },
  { icon: Download, label: 'Free on Android & iOS' },
  { icon: Smartphone, label: 'English & Hausa interface' },
]

export default function AppDownload() {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #061c12 0%, #0a4a2e 60%, #0d5c38 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rima-gold/40 to-transparent" />
      <div className="absolute inset-0 pattern-overlay opacity-40 pointer-events-none" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-rima-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-rima-green-bright/10 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-rima-gold/10 border border-rima-gold/30 rounded-full px-4 py-1.5 mb-6">
            <Smartphone size={13} className="text-rima-gold" />
            <span className="text-rima-gold text-xs font-semibold tracking-wider uppercase">
              Rima Mobile App · Bankin Wayar Hannu
            </span>
          </div>

          <h2 className="font-display text-5xl font-extrabold text-white leading-tight mb-5">
            Bank on the Go<br />
            <span className="gold-text">Any Phone. Anywhere.</span>
          </h2>

          <p className="text-white/65 text-lg leading-relaxed mb-3">
            The Rima MFB mobile app — powered by <strong className="text-white">CuteBanker</strong> and
            integrated with <strong className="text-white">NIBSS & Etranzact</strong> — puts full banking
            power in your pocket. Available in English and Hausa.
          </p>
          <p className="text-white/50 text-sm mb-6">
            No smartphone? No problem. Dial <span className="text-rima-gold font-bold text-lg">*737#</span> on
            any basic phone — no internet required.
          </p>

          <ul className="grid grid-cols-2 gap-3 mb-8">
            {appFeatures.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-white/70 text-sm">
                <div className="w-8 h-8 rounded-lg bg-rima-gold/10 border border-rima-gold/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={14} className="text-rima-gold" />
                </div>
                {label}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-rima-gold fill-rima-gold" />
              ))}
            </div>
            <span className="text-white/60 text-sm">Rated 4.8 / 5 by our customers</span>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Google Play */}
            <a href="#"
              className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3
                         hover:bg-rima-gold/20 hover:border-rima-gold/40 transition-all duration-200 group">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white group-hover:fill-rima-gold transition-colors">
                <path d="M3.18 23.5c.37.21.8.22 1.19.04l12.6-7.3-2.64-2.64L3.18 23.5zm16.4-9.5L17 12.46l2.58-2.58L22 11.16a1.5 1.5 0 0 1 0 2.68L19.58 14zM3.18.5L14.33 10.4 11.7 13.04.37.54C.14.78 0 1.12 0 1.5v21c0 .38.14.72.37.96L3.18.5zM4.37.46l12.6 7.3-2.64 2.64L4.37.46z"/>
              </svg>
              <div>
                <p className="text-white/50 text-xs">Get it on</p>
                <p className="text-white font-semibold text-sm">Google Play</p>
              </div>
            </a>
            {/* App Store */}
            <a href="#"
              className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3
                         hover:bg-rima-gold/20 hover:border-rima-gold/40 transition-all duration-200 group">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white group-hover:fill-rima-gold transition-colors">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div>
                <p className="text-white/50 text-xs">Download on the</p>
                <p className="text-white font-semibold text-sm">App Store</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right — phone mockup */}
        <div className="flex justify-center items-center">
          <div className="relative animate-float">
            <div className="absolute inset-0 rounded-[3rem] bg-rima-gold/20 blur-3xl scale-110" />
            <div className="relative w-64 h-[520px] rounded-[3rem] bg-gradient-to-b from-rima-dark to-rima-green-mid
                            border-2 border-rima-gold/40 overflow-hidden shadow-2xl shadow-black/60">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-rima-dark rounded-full z-10" />
              <div className="absolute inset-0 pt-10 px-4 pb-4 flex flex-col">
                <div className="flex items-center justify-between mb-4 pt-2">
                  <div>
                    <p className="text-white/40 text-xs">Barka da safe,</p>
                    <p className="text-white font-bold text-sm">Malam Yusuf 👋</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-rima-gold/20 border border-rima-gold/30 flex items-center justify-center">
                    <Bell size={14} className="text-rima-gold" />
                  </div>
                </div>
                <div className="rounded-2xl bg-gold-gradient p-4 mb-4">
                  <p className="text-rima-dark text-xs font-medium mb-0.5">Jimlar Ajiyar</p>
                  <p className="text-rima-dark font-display font-extrabold text-2xl">₦85,200.00</p>
                  <p className="text-rima-dark/60 text-xs mt-1">Rima MFB · **** 4821</p>
                </div>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {['Aika', 'Biya', 'Lamuni', 'Sauran'].map(action => (
                    <div key={action} className="flex flex-col items-center gap-1">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                        <div className="w-3 h-3 rounded bg-rima-gold/60" />
                      </div>
                      <p className="text-white/50 text-xs">{action}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-2 uppercase tracking-wider">Na Ƙarshe</p>
                  {[
                    { name: 'Lamunin Murabaha', amt: '+₦200,000', col: 'text-green-400' },
                    { name: 'Biya Wuta (NEPA)',  amt: '-₦5,500',  col: 'text-red-400' },
                    { name: 'Aikawa Kuɗi',       amt: '-₦15,000', col: 'text-red-400' },
                  ].map(tx => (
                    <div key={tx.name} className="flex items-center justify-between py-2 border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-rima-gold/20 text-rima-gold text-xs flex items-center justify-center font-bold">
                          {tx.name[0]}
                        </div>
                        <p className="text-white/70 text-xs">{tx.name}</p>
                      </div>
                      <p className={`text-xs font-semibold ${tx.col}`}>{tx.amt}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/20 rounded-full" />
            </div>
            <div className="absolute -top-3 -right-6 bg-rima-gold text-rima-dark font-bold text-xs px-3 py-1.5 rounded-xl shadow-lg">
              Powered by CuteBanker
            </div>
            <div className="absolute -bottom-3 -left-6 bg-rima-dark border border-rima-gold/40 text-rima-gold font-semibold text-xs px-3 py-1.5 rounded-xl shadow-lg">
              NIBSS + Etranzact
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
