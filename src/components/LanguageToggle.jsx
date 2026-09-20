import { useLang } from '../context/LanguageContext'

export default function LanguageToggle({ className = '' }) {
  const { lang, toggle } = useLang()
  return (
    <button
      onClick={toggle}
      className={`flex items-center gap-1.5 bg-rima-gold/10 border border-rima-gold/30 rounded-full px-3 py-1.5
                  hover:bg-rima-gold/20 transition-all duration-200 group ${className}`}
      title={lang === 'en' ? 'Switch to Hausa' : 'Switch to English'}
    >
      <span className="text-base leading-none">{lang === 'en' ? '🇳🇬' : '🇬🇧'}</span>
      <span className="text-rima-gold font-bold text-xs tracking-wider">
        {lang === 'en' ? 'HA' : 'EN'}
      </span>
      <span className="text-white/40 text-xs hidden sm:inline">
        {lang === 'en' ? 'Hausa' : 'English'}
      </span>
    </button>
  )
}
