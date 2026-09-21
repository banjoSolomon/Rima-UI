import { Shield, Lock, Eye, FileText, Mail, Phone, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'

const sections = [
  {
    id: 'overview',
    icon: Shield,
    title: '1. Overview',
    content: [
      {
        heading: 'Who We Are',
        body: 'Rima Microfinance Bank Limited ("Rima MFB", "we", "us", "our") is a licensed microfinance bank regulated by the Central Bank of Nigeria (CBN). Our registered address is Gwaranyo LGA, Sokoto State, Nigeria. We operate the website rimabank.ng and all associated digital platforms.',
      },
      {
        heading: 'Our Commitment',
        body: 'Rima MFB is committed to protecting your personal information in accordance with the Nigeria Data Protection Regulation (NDPR) 2019, the CBN Consumer Protection Framework, and all applicable Nigerian laws. This policy explains how we collect, use, store, and protect your data.',
      },
      {
        heading: 'Hausa — Taƙaitaccen Bayani',
        body: 'Rima MFB tana kiyaye sirrin bayananku bisa dokokin kare bayanai na Nijeriya (NDPR 2019) da kuma ka\'idojin CBN. Wannan manufar tana bayyana yadda muke tattara, amfani da, da kare bayananku.',
      },
    ],
  },
  {
    id: 'data-collected',
    icon: FileText,
    title: '2. Information We Collect',
    content: [
      {
        heading: 'Personal Identification Data',
        body: 'Full name, date of birth, gender, national identification number (NIN), Bank Verification Number (BVN), passport photograph, government-issued ID (voter\'s card, international passport, driver\'s licence).',
      },
      {
        heading: 'Contact Information',
        body: 'Phone number, email address, residential address, state and local government area.',
      },
      {
        heading: 'Financial Information',
        body: 'Account numbers, transaction history, loan applications and repayment records, income information, bank statements, and other financial data necessary for credit assessment.',
      },
      {
        heading: 'Digital & Technical Data',
        body: 'IP address, browser type, device information, cookies and session data, USSD session logs, mobile app usage data, and interaction data with our digital platforms.',
      },
      {
        heading: 'Information from Third Parties',
        body: 'Credit bureau reports, BVN verification data from NIBSS, transaction data from Etranzact, and other data from regulated third-party service providers used in the provision of our services.',
      },
    ],
  },
  {
    id: 'how-we-use',
    icon: Eye,
    title: '3. How We Use Your Information',
    content: [
      {
        heading: 'Service Delivery',
        body: 'To open and manage your account, process transactions, disburse loans, and provide all banking services you have requested from Rima MFB.',
      },
      {
        heading: 'Regulatory Compliance',
        body: 'To comply with CBN Know Your Customer (KYC) requirements, Anti-Money Laundering (AML) obligations, the Financial Action Task Force (FATF) standards, NDIC requirements, and all other applicable regulations.',
      },
      {
        heading: 'Credit Assessment',
        body: 'To evaluate loan applications, assess creditworthiness, verify identity, and make lending decisions. This may include sharing data with licensed credit bureaux.',
      },
      {
        heading: 'Communication',
        body: 'To send transaction alerts via SMS and email, notify you of new products, respond to your enquiries, and send important account updates. You may opt out of marketing communications at any time.',
      },
      {
        heading: 'Fraud Prevention & Security',
        body: 'To detect, investigate, and prevent fraudulent transactions and other illegal activities. To protect the security of your account and our systems.',
      },
      {
        heading: 'Product Improvement',
        body: 'To analyse usage patterns on our website and mobile app to improve our services, develop new products, and enhance the customer experience.',
      },
    ],
  },
  {
    id: 'legal-basis',
    icon: Shield,
    title: '4. Legal Basis for Processing',
    content: [
      {
        heading: 'Contractual Necessity',
        body: 'Processing is necessary for the performance of the banking contract between you and Rima MFB — including account management, loan processing, and transaction execution.',
      },
      {
        heading: 'Legal Obligation',
        body: 'Processing is required to comply with CBN regulations, NDIC requirements, AML/KYC obligations, court orders, and other legal requirements placed on licensed financial institutions.',
      },
      {
        heading: 'Legitimate Interests',
        body: 'Processing for fraud prevention, security monitoring, and internal analytics where our legitimate business interests do not override your rights.',
      },
      {
        heading: 'Consent',
        body: 'Where we rely on consent — such as for marketing communications or optional cookies — you may withdraw consent at any time by contacting us or using the unsubscribe option in our communications.',
      },
    ],
  },
  {
    id: 'data-sharing',
    icon: Lock,
    title: '5. Data Sharing & Third Parties',
    content: [
      {
        heading: 'Regulatory Bodies',
        body: 'We share data with the Central Bank of Nigeria (CBN), Nigeria Deposit Insurance Corporation (NDIC), Nigerian Financial Intelligence Unit (NFIU), and other regulators as required by law.',
      },
      {
        heading: 'Technology Partners',
        body: 'We share necessary data with CuteBanker (core banking platform), NIBSS (payment infrastructure), and Etranzact (payment gateway) strictly for service delivery purposes. All partners are contractually bound to protect your data.',
      },
      {
        heading: 'Credit Bureaux',
        body: 'Loan applicant data may be shared with licensed credit bureaux (e.g. CRC Credit Bureau, FirstCentral Credit Bureau) for credit assessment purposes, as permitted by CBN regulations.',
      },
      {
        heading: 'What We Never Do',
        body: 'We never sell your personal data to third parties. We never share your data with advertisers. We never share your PIN, OTP, or password with anyone — including our own staff.',
      },
    ],
  },
  {
    id: 'data-security',
    icon: Lock,
    title: '6. Data Security',
    content: [
      {
        heading: 'Technical Measures',
        body: 'All data is encrypted in transit using TLS 1.2+ and at rest using AES-256 encryption. Our core banking platform (CuteBanker) implements multi-factor authentication, role-based access controls, and audit logging.',
      },
      {
        heading: 'Operational Measures',
        body: 'Staff access to customer data is strictly limited on a need-to-know basis. All staff undergo data protection training. Security incidents are investigated and reported in accordance with NDPR requirements.',
      },
      {
        heading: 'Fraud Monitoring',
        body: '24/7 automated fraud monitoring on all accounts. Suspicious transactions are flagged for review. We will never ask for your PIN, OTP, password, or BVN via phone, SMS, or email.',
      },
    ],
  },
  {
    id: 'retention',
    icon: FileText,
    title: '7. Data Retention',
    content: [
      {
        heading: 'Active Accounts',
        body: 'We retain your personal data for the duration of your relationship with Rima MFB and for a minimum of 6 years after account closure, in accordance with CBN record-keeping requirements.',
      },
      {
        heading: 'Loan Records',
        body: 'Loan application and repayment records are retained for a minimum of 7 years as required by the CBN and AML regulations.',
      },
      {
        heading: 'Marketing Data',
        body: 'If you have consented to marketing communications, we retain your contact details until you withdraw consent or unsubscribe.',
      },
    ],
  },
  {
    id: 'your-rights',
    icon: Shield,
    title: '8. Your Rights (NDPR)',
    content: [
      {
        heading: 'Right of Access',
        body: 'You have the right to request a copy of the personal data we hold about you. We will respond within 30 days of your request.',
      },
      {
        heading: 'Right to Rectification',
        body: 'You have the right to request correction of inaccurate or incomplete personal data. Visit any branch or contact us to update your information.',
      },
      {
        heading: 'Right to Erasure',
        body: 'You may request deletion of your data where we no longer need it and are not legally required to retain it. Note that CBN regulations require us to keep certain records regardless.',
      },
      {
        heading: 'Right to Object',
        body: 'You have the right to object to processing based on legitimate interests or for direct marketing purposes.',
      },
      {
        heading: 'Right to Data Portability',
        body: 'You may request your data in a structured, commonly used format for transfer to another service provider.',
      },
      {
        heading: 'How to Exercise Your Rights',
        body: 'Submit a written request to: dataprotection@rimabank.ng or visit any Rima MFB branch. We will respond within 30 days.',
      },
    ],
  },
  {
    id: 'cookies',
    icon: FileText,
    title: '9. Cookies Policy',
    content: [
      {
        heading: 'What Are Cookies',
        body: 'Cookies are small text files placed on your device when you visit our website. They help us remember your preferences (e.g. language choice between English and Hausa) and understand how visitors use our site.',
      },
      {
        heading: 'Types We Use',
        body: 'Essential cookies (required for the site to function), functional cookies (remember your language and session preferences), and analytics cookies (understand site usage patterns — only with your consent).',
      },
      {
        heading: 'Your Choices',
        body: 'You can manage cookie preferences through the cookie banner on our site, or by adjusting your browser settings. Note that disabling essential cookies may affect site functionality.',
      },
    ],
  },
  {
    id: 'ndpr',
    icon: Shield,
    title: '10. NDPR Compliance',
    content: [
      {
        heading: 'Our Data Protection Officer',
        body: 'Rima MFB has appointed a Data Protection Officer (DPO) as required by the NDPR. Contact: dpo@rimabank.ng',
      },
      {
        heading: 'Data Protection Compliance Organisation',
        body: 'We engage a NITDA-registered Data Protection Compliance Organisation (DPCO) to conduct annual data protection audits as required by the NDPR.',
      },
      {
        heading: 'Complaints',
        body: 'If you believe we have handled your data improperly, you may lodge a complaint with the National Information Technology Development Agency (NITDA) at: nitda.gov.ng or +234 9 223 2220.',
      },
    ],
  },
  {
    id: 'changes',
    icon: FileText,
    title: '11. Changes to This Policy',
    content: [
      {
        heading: 'Updates',
        body: 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify customers of material changes via SMS, email, or a notice on our website. The date of the most recent update is shown below.',
      },
      {
        heading: 'Last Updated',
        body: 'This Privacy Policy was last updated on 1 October 2024.',
      },
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-rima-dark">
      <Navbar />
      <PageHero
        title="Privacy Policy"
        hausa="Manufar Sirri · NDPR Compliant"
        subtitle="How Rima MFB collects, uses, and protects your personal data — in accordance with the Nigeria Data Protection Regulation (NDPR) 2019 and CBN guidelines."
        breadcrumb={[{ label: 'Privacy Policy' }]}
      />

      <section className="py-16 max-w-5xl mx-auto px-6">

        {/* Quick nav */}
        <div className="card-glass p-6 mb-12">
          <p className="text-rima-gold text-xs font-bold uppercase tracking-widest mb-4">Quick Navigation</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`}
                className="flex items-center gap-2 text-white/55 hover:text-rima-gold text-xs transition-colors py-1">
                <ChevronRight size={11} className="text-rima-gold/50 flex-shrink-0" />
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* Compliance badges */}
        <div className="flex flex-wrap gap-3 mb-12">
          {[
            { label: 'NDPR 2019 Compliant',        color: 'bg-green-500/10 border-green-500/20 text-green-400' },
            { label: 'CBN Licensed',                color: 'bg-blue-500/10 border-blue-500/20 text-blue-400' },
            { label: 'NDIC Insured',                color: 'bg-purple-500/10 border-purple-500/20 text-purple-400' },
            { label: 'NITDA Registered DPCO',       color: 'bg-amber-500/10 border-amber-500/20 text-amber-400' },
          ].map(b => (
            <span key={b.label} className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${b.color} flex items-center gap-1.5`}>
              <Shield size={10} />
              {b.label}
            </span>
          ))}
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-8">
          {sections.map(section => {
            const Icon = section.icon
            return (
              <div key={section.id} id={section.id} className="card-glass p-7 scroll-mt-24">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-rima-gold/10 border border-rima-gold/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-rima-gold" />
                  </div>
                  <h2 className="font-display font-bold text-white text-xl pt-1.5">{section.title}</h2>
                </div>

                <div className="flex flex-col gap-5">
                  {section.content.map((item, i) => (
                    <div key={i}>
                      <h3 className="text-rima-gold font-semibold text-sm mb-1.5">{item.heading}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact block */}
        <div className="card-glass p-8 mt-10 border border-rima-gold/30">
          <h3 className="font-display font-bold text-white text-xl mb-4">Contact Our Data Protection Officer</h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Mail,  label: 'DPO Email',   value: 'dpo@rimabank.ng' },
              { icon: Mail,  label: 'Privacy Team', value: 'dataprotection@rimabank.ng' },
              { icon: Phone, label: 'Phone',        value: '0800-RIMA-MFB' },
            ].map(c => {
              const Icon = c.icon
              return (
                <div key={c.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rima-gold/10 border border-rima-gold/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-rima-gold" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider">{c.label}</p>
                    <p className="text-white text-sm font-medium">{c.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-5 pt-5 border-t border-rima-gold/10 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-gold text-xs px-5 py-2">Submit a Data Request</Link>
            <a href="https://nitda.gov.ng" target="_blank" rel="noopener noreferrer"
              className="btn-outline-gold text-xs px-5 py-2">NITDA — Lodge a Complaint</a>
          </div>
        </div>

        <p className="text-white/25 text-xs text-center mt-8">
          Last updated: 1 October 2024 · Rima Microfinance Bank Limited · Gwaranyo LGA, Sokoto State, Nigeria
        </p>
      </section>

      <Footer />
    </div>
  )
}
