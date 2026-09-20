import { useState, useEffect } from 'react'
import { Bell, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import { useLang } from '../context/LanguageContext'

const steps = [
  {
    id: 'home',
    label: 'Dashboard',
    labelHa: 'Babban Shafi',
    screen: 'dashboard',
  },
  {
    id: 'transfer',
    label: 'Send Money',
    labelHa: 'Aika Kuɗi',
    screen: 'transfer',
  },
  {
    id: 'loan',
    label: 'Apply for Loan',
    labelHa: 'Nemi Lamuni',
    screen: 'loan',
  },
  {
    id: 'success',
    label: 'Confirmed',
    labelHa: 'An Tabbata',
    screen: 'success',
  },
]

function PhoneScreen({ screen, lang }) {
  if (screen === 'dashboard') return (
    <div className="flex flex-col h-full p-4 pt-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-white/40 text-xs">{lang === 'ha' ? 'Barka da safe' : 'Good morning'}</p>
          <p className="text-white font-bold text-sm">{lang === 'ha' ? 'Malam Yusuf 👋' : 'Alhaji Yusuf 👋'}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-rima-gold/20 border border-rima-gold/30 flex items-center justify-center">
          <Bell size={14} className="text-rima-gold" />
        </div>
      </div>
      <div className="rounded-2xl bg-gold-gradient p-4 mb-4">
        <p className="text-rima-dark text-xs font-medium">{lang === 'ha' ? 'Jimlar Ajiyar' : 'Total Balance'}</p>
        <p className="text-rima-dark font-display font-extrabold text-2xl">₦85,200.00</p>
        <p className="text-rima-dark/60 text-xs mt-1">Rima MFB · **** 4821</p>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {(lang === 'ha' ? ['Aika','Biya','Lamuni','Sauran'] : ['Send','Pay','Loans','More']).map(a => (
          <div key={a} className="flex flex-col items-center gap-1">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
              <div className="w-3 h-3 rounded bg-rima-gold/60" />
            </div>
            <p className="text-white/50 text-xs">{a}</p>
          </div>
        ))}
      </div>
      <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
        {lang === 'ha' ? 'Na Ƙarshe' : 'Recent'}
      </p>
      {[
        { n: lang === 'ha' ? 'Lamunin Murabaha' : 'Murabaha Finance', a: '+₦200,000', c: 'text-green-400' },
        { n: lang === 'ha' ? 'Biya Wuta' : 'Electricity Bill',  a: '-₦5,500',   c: 'text-red-400' },
        { n: lang === 'ha' ? 'Aika Kuɗi' : 'Transfer Out',     a: '-₦15,000',  c: 'text-red-400' },
      ].map(tx => (
        <div key={tx.n} className="flex justify-between py-2 border-b border-white/5">
          <p className="text-white/60 text-xs">{tx.n}</p>
          <p className={`text-xs font-semibold ${tx.c}`}>{tx.a}</p>
        </div>
      ))}
    </div>
  )

  if (screen === 'transfer') return (
    <div className="flex flex-col h-full p-4 pt-10">
      <p className="text-white font-bold text-base mb-4">
        {lang === 'ha' ? 'Aika Kuɗi' : 'Send Money'}
      </p>
      <div className="bg-white/5 rounded-xl p-3 mb-3">
        <p className="text-white/40 text-xs mb-1">{lang === 'ha' ? 'Mai karɓa' : 'Recipient'}</p>
        <p className="text-white text-sm font-semibold">Hajiya Aisha Bello</p>
        <p className="text-white/40 text-xs">Rima MFB · **** 2244</p>
      </div>
      <div className="bg-white/5 rounded-xl p-3 mb-3">
        <p className="text-white/40 text-xs mb-1">{lang === 'ha' ? 'Adadi' : 'Amount'}</p>
        <p className="text-rima-gold font-display font-extrabold text-3xl">₦50,000</p>
      </div>
      <div className="bg-white/5 rounded-xl p-3 mb-4">
        <p className="text-white/40 text-xs mb-1">{lang === 'ha' ? 'Taƙaitaccen bayani' : 'Narration'}</p>
        <p className="text-white text-xs">{lang === 'ha' ? 'Kuɗin kaya' : 'Goods payment'}</p>
      </div>
      <div className="flex items-center justify-between mb-4 text-xs text-white/50">
        <span>{lang === 'ha' ? 'Kuɗin aika' : 'Transfer fee'}</span>
        <span className="text-rima-gold font-semibold">₦10.00</span>
      </div>
      <button className="btn-gold py-3 text-sm flex items-center justify-center gap-2">
        {lang === 'ha' ? 'Tabbatar da Aika' : 'Confirm Transfer'} <ArrowRight size={14} />
      </button>
    </div>
  )

  if (screen === 'loan') return (
    <div className="flex flex-col h-full p-4 pt-10">
      <p className="text-white font-bold text-base mb-4">
        {lang === 'ha' ? 'Nemi Lamuni' : 'Apply for Loan'}
      </p>
      <div className="space-y-2 mb-4">
        {[
          { label: lang === 'ha' ? 'Nau\'in Lamuni' : 'Loan Type', value: 'Murabaha Finance', active: false },
          { label: lang === 'ha' ? 'Adadin Kuɗi' : 'Amount',     value: '₦500,000',          active: false },
          { label: lang === 'ha' ? 'Tsawon Lokaci' : 'Tenor',     value: lang === 'ha' ? 'Watanni 12' : '12 months', active: true },
          { label: lang === 'ha' ? 'Manufa' : 'Purpose',          value: lang === 'ha' ? 'Siyan kaya' : 'Stock purchase', active: false },
        ].map(f => (
          <div key={f.label} className={`rounded-xl p-3 border ${f.active ? 'border-rima-gold/60 bg-rima-gold/10' : 'border-white/10 bg-white/5'}`}>
            <p className="text-white/40 text-xs">{f.label}</p>
            <p className={`text-sm font-semibold ${f.active ? 'text-rima-gold' : 'text-white'}`}>{f.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-rima-gold/10 border border-rima-gold/30 rounded-xl p-3 mb-4">
        <p className="text-rima-gold text-xs font-bold">{lang === 'ha' ? 'Biyan Wata-wata' : 'Monthly Payment'}</p>
        <p className="text-white font-display font-extrabold text-2xl">₦46,250</p>
        <p className="text-white/40 text-xs">{lang === 'ha' ? 'Riba 0% — Musulunci' : '0% riba — Shariah-compliant'}</p>
      </div>
      <button className="btn-gold py-3 text-sm flex items-center justify-center gap-2">
        {lang === 'ha' ? 'Ƙaddamar da Buƙata' : 'Submit Application'} <ArrowRight size={14} />
      </button>
    </div>
  )

  if (screen === 'success') return (
    <div className="flex flex-col h-full p-4 pt-10 items-center justify-center text-center">
      <div className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500/50 flex items-center justify-center mb-5">
        <CheckCircle2 size={40} className="text-green-400" />
      </div>
      <p className="text-white font-display font-bold text-xl mb-2">
        {lang === 'ha' ? 'An Tabbata!' : 'Success!'}
      </p>
      <p className="text-rima-gold font-extrabold text-2xl mb-1">₦50,000</p>
      <p className="text-white/60 text-xs mb-4">
        {lang === 'ha' ? 'An aika wa Hajiya Aisha' : 'Sent to Hajiya Aisha Bello'}
      </p>
      <div className="bg-white/5 rounded-xl p-3 w-full mb-4 text-left">
        <div className="flex justify-between text-xs mb-1.5">
          <span className="text-white/40">{lang === 'ha' ? 'Lambar Aiki' : 'Transaction ID'}</span>
          <span className="text-white font-mono">RMB-2024-88421</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-white/40">{lang === 'ha' ? 'Lokaci' : 'Time'}</span>
          <span className="text-white">14:32:05 WAT</span>
        </div>
      </div>
      <p className="text-white/40 text-xs">
        {lang === 'ha' ? 'SMS an aika wa lambar yatsanku' : 'SMS alert sent to your phone'}
      </p>
    </div>
  )
}

export default function DashboardDemo() {
  const [activeStep, setActiveStep] = useState(0)
  const [auto, setAuto] = useState(true)
  const { ref, visible } = useScrollReveal()
  const { lang } = useLang()

  useEffect(() => {
    if (!auto || !visible) return
    const t = setInterval(() => {
      setActiveStep(s => (s + 1) % steps.length)
    }, 3000)
    return () => clearInterval(t)
  }, [auto, visible])

  return (
    <section className="relative py-24 overflow-hidden bg-rima-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rima-gold/30 to-transparent" />
      <div className="absolute inset-0 pattern-overlay opacity-20 pointer-events-none" />
      <div className="absolute left-0 top-1/3 w-96 h-96 rounded-full bg-rima-gold/5 blur-3xl pointer-events-none" />

      <div
        ref={ref}
        className={`relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* Left — step navigation */}
        <div>
          <span className="text-rima-gold text-xs font-bold tracking-widest uppercase">
            {lang === 'ha' ? 'Gwada App ɗin' : 'App Preview · See How It Works'}
          </span>
          <h2 className="font-display text-4xl font-bold text-white mt-2 mb-4">
            {lang === 'ha' ? <>Banking Mai Sauƙi<br /><span className="gold-text">A Wayar Hannu</span></> : <>Banking Made<br /><span className="gold-text">Simple on Mobile</span></>}
          </h2>
          <div className="w-16 h-1 bg-gold-gradient rounded-full mb-6" />
          <p className="text-white/60 mb-8 leading-relaxed">
            {lang === 'ha'
              ? 'Duba yadda app ɗin Rima MFB ke aiki — daga duba asusunka zuwa aika kuɗi da neman lamuni. Cikin Hausa ko Turanci.'
              : 'See how the Rima MFB app works — from checking your balance to sending money and applying for a Murabaha loan. Available in English and Hausa.'}
          </p>

          <div className="flex flex-col gap-3">
            {steps.map((step, i) => (
              <button
                key={step.id}
                onClick={() => { setActiveStep(i); setAuto(false) }}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 text-left
                  ${activeStep === i
                    ? 'border-rima-gold/50 bg-rima-gold/10'
                    : 'border-white/10 bg-white/3 hover:border-rima-gold/30'
                  }`}
              >
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 font-bold text-sm transition-colors
                  ${activeStep === i ? 'border-rima-gold bg-rima-gold text-rima-dark' : 'border-white/20 text-white/40'}`}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <p className={`font-semibold text-sm transition-colors ${activeStep === i ? 'text-rima-gold' : 'text-white/70'}`}>
                    {lang === 'ha' ? step.labelHa : step.label}
                  </p>
                </div>
                {activeStep === i && <ChevronRight size={16} className="text-rima-gold flex-shrink-0" />}
              </button>
            ))}
          </div>

          <button
            onClick={() => setAuto(!auto)}
            className="mt-5 text-xs text-white/30 hover:text-rima-gold transition-colors"
          >
            {auto
              ? (lang === 'ha' ? '⏸ Tsaya' : '⏸ Pause auto-play')
              : (lang === 'ha' ? '▶ Ci gaba' : '▶ Resume auto-play')
            }
          </button>
        </div>

        {/* Right — phone */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-[3rem] bg-rima-gold/15 blur-3xl scale-105" />
            <div className="relative w-64 h-[520px] rounded-[3rem] bg-gradient-to-b from-rima-dark to-rima-green-mid
                            border-2 border-rima-gold/40 overflow-hidden shadow-2xl shadow-black/60">
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-rima-dark rounded-full z-20" />
              {/* Screen */}
              <div className="absolute inset-0 overflow-hidden">
                <div
                  key={steps[activeStep].screen}
                  className="h-full animate-fade-in"
                >
                  <PhoneScreen screen={steps[activeStep].screen} lang={lang} />
                </div>
              </div>
              {/* Step dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setActiveStep(i); setAuto(false) }}
                    className={`rounded-full transition-all duration-300 ${i === activeStep ? 'w-4 h-1.5 bg-rima-gold' : 'w-1.5 h-1.5 bg-white/20'}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating labels */}
            <div className="absolute -top-3 -right-8 bg-rima-gold text-rima-dark font-bold text-xs px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap">
              {lang === 'ha' ? 'CuteBanker + NIBSS' : 'CuteBanker Powered'}
            </div>
            <div className="absolute -bottom-3 -left-8 bg-rima-dark border border-rima-gold/40 text-rima-gold text-xs px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap font-semibold">
              {lang === 'ha' ? 'Hausa & Turanci' : 'English & Hausa'}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
