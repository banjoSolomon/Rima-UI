import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const translations = {
  en: {
    // Navbar
    nav_home:       'Home',
    nav_banking:    'Banking',
    nav_personal:   'Personal Banking',
    nav_personal_sub: 'Savings, cards & more',
    nav_business:   'Business Banking',
    nav_business_sub: 'For traders & SMEs',
    nav_loans:      'Loans & Finance',
    nav_loans_sub:  'Affordable borrowing',
    nav_services:   'Services',
    nav_about:      'About Us',
    nav_shariah:    'Islamic Banking',
    nav_contact:    'Contact',
    nav_login:      'Login',
    nav_open:       'Open Account',

    // Hero
    hero_badge:     'CBN Licensed · Est. 1992 · Sokoto State',
    hero_for:       'for',
    hero_tagline:   '"Bankin ku — Made For Us By Us"',
    hero_desc:      'Rima MFB has been serving Northern Nigeria since 1992 — bringing accessible, Shariah-compliant financial services to individuals, traders, and small businesses.',
    hero_cta1:      'Open Free Account',
    hero_cta2:      'Our Services',
    hero_trust1:    'CBN Licensed',
    hero_trust2:    'USSD Banking',
    hero_trust3:    'Shariah-Compliant',
    hero_stat1:     'Est.',
    hero_stat2:     'Current Customers',
    hero_stat3:     'Target — Year 1',
    hero_stat4:     'POS Terminals',

    // About
    about_badge:    'About Rima MFB',
    about_title1:   '30+ Years of',
    about_title2:   'Community Banking',
    about_title3:   'in the North',
    about_desc1:    'Established in 1992 and headquartered in Gwaranyo LGA, Sokoto State, Rima MFB has spent over three decades building trust with Northern Nigerian communities.',
    about_desc2:    'With 25,000+ existing customers and an ambitious digital transformation targeting 500,000 customers in Year 1, Rima MFB blends decades of community banking with modern technology.',
    about_cta:      'Our Full Story →',
    about_stat1:    'Year Established',
    about_stat2:    'Current Customers',
    about_stat3:    'Year 1 Target',
    about_stat4:    'POS Terminals',

    // Services
    services_badge: 'Our Products',
    services_title1:'Shariah-Compliant Banking',
    services_title2:'Built for the North',
    services_desc:  'From Qard Hasan and Murabaha financing to digital USSD banking and a 2,000-terminal POS network — Rima MFB is your complete, ethical financial partner.',
    services_cta:   'Explore All Products',
    powered_by:     'Powered By',

    // Partners
    partners_badge: 'Our Partners & Regulators',
    partners_title: 'Backed by Trust',
    partners_desc:  'Rima MFB operates under the highest standards of regulation, security, and financial integrity.',

    // CTA footer section
    cta_title:      'Ready to Start Banking?',
    cta_desc:       'Join 25,000+ customers across Northern Nigeria. Open your account in minutes.',
    cta_btn1:       'Open Account',
    cta_btn2:       'Learn More',
  },

  ha: {
    // Navbar
    nav_home:       'Gida',
    nav_banking:    'Banki',
    nav_personal:   'Bankin Mutum',
    nav_personal_sub: 'Ajiya, kati da sauransu',
    nav_business:   'Bankin Kasuwanci',
    nav_business_sub: 'Don yan kasuwa da SMEs',
    nav_loans:      'Lamuni da Tallafi',
    nav_loans_sub:  'Lamuni mai araha',
    nav_services:   'Ayyuka',
    nav_about:      'Game da Mu',
    nav_shariah:    'Bankin Musulunci',
    nav_contact:    'Tuntuɓe Mu',
    nav_login:      'Shiga',
    nav_open:       'Buɗe Asusu',

    // Hero
    hero_badge:     'Lasisi na CBN · Kafa a 1992 · Jihar Sakkwato',
    hero_for:       'don',
    hero_tagline:   '"Bankin ku — An yi shi domin mu, ta hannunmu"',
    hero_desc:      'Rima MFB ta kasance tana hidima ga Arewacin Nijeriya tun 1992 — tana kawo ayyukan banki masu araha, na Musulunci, ga daidaikun mutane, yan kasuwa, da ƙananan kasuwanci.',
    hero_cta1:      'Buɗe Asusu Kyauta',
    hero_cta2:      'Ayyukanmu',
    hero_trust1:    'Lasisi na CBN',
    hero_trust2:    'Bankin USSD',
    hero_trust3:    'Na Musulunci',
    hero_stat1:     'An kafa',
    hero_stat2:     'Masu Asusun Yanzu',
    hero_stat3:     'Buri — Shekara ta 1',
    hero_stat4:     'Na\'urar POS',

    // About
    about_badge:    'Game da Rima MFB',
    about_title1:   'Fiye da shekaru 30 na',
    about_title2:   'Bankin Al\'umma',
    about_title3:   'a Arewa',
    about_desc1:    'An kafa a shekarar 1992 kuma hedikwatanmu yana a Gwaranyo LGA, Jihar Sakkwato. Rima MFB ta kashe fiye da shekaru talatin tana gina amana da al\'ummar Arewacin Nijeriya.',
    about_desc2:    'Da abokan ciniki fiye da 25,000 a yanzu da wani babban shiri na dijital wanda ke nufin abokan ciniki 500,000 a shekara ta farko, Rima MFB tana haɗa ƙwarewar bankin al\'umma da fasaha ta zamani.',
    about_cta:      'Dubi Tarihinmu →',
    about_stat1:    'Shekarar Kafawa',
    about_stat2:    'Masu Asusun Yanzu',
    about_stat3:    'Buri na Shekara ta 1',
    about_stat4:    'Na\'urar POS',

    // Services
    services_badge: 'Kayayyakinmu',
    services_title1:'Banki na Musulunci',
    services_title2:'An Gina don Arewa',
    services_desc:  'Daga Qard Hasan da Murabaha zuwa bankin USSD na dijital da hanyar POS ta na\'ura 2,000 — Rima MFB ita ce abokin kuɗin ku gaba ɗaya, na halal.',
    services_cta:   'Duba Dukkan Kayayyaki',
    powered_by:     'Ana amfani da',

    // Partners
    partners_badge: 'Abokan hulɗarmu da Masu Kula',
    partners_title: 'Wanda Amana ta Goyi Bayansa',
    partners_desc:  'Rima MFB tana aiki ƙarƙashin mafi girman ƙa\'idodi na tsari, aminci, da ɗaukar nauyin kuɗi.',

    // CTA
    cta_title:      'Kana shirye don fara banki?',
    cta_desc:       'Haɗu da abokan ciniki fiye da 25,000 a Arewacin Nijeriya. Buɗe asusunka a cikin mintuna.',
    cta_btn1:       'Buɗe Asusu',
    cta_btn2:       'Ƙara Koyo',
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const t = (key) => translations[lang][key] || translations['en'][key] || key
  const toggle = () => setLang(l => l === 'en' ? 'ha' : 'en')
  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
