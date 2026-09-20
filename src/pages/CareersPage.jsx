import { useState } from 'react'
import {
  MapPin, Clock, Briefcase, Users, TrendingUp, Heart,
  ShieldCheck, Star, ArrowRight, Upload, CheckCircle2, ChevronDown, ChevronUp
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import useScrollReveal from '../hooks/useScrollReveal'

const openRoles = [
  {
    id: 1,
    title: 'Branch Manager',
    dept: 'Operations',
    location: 'Sokoto State',
    type: 'Full-time',
    level: 'Senior',
    color: 'text-emerald-400',
    border: 'border-emerald-500/20',
    desc: 'Lead daily branch operations, manage a team of 8–15 staff, drive customer acquisition targets, and ensure full CBN regulatory compliance across all banking activities.',
    responsibilities: [
      'Oversee all branch operations and customer service delivery',
      'Drive retail and SME customer acquisition',
      'Manage credit quality and loan recovery',
      'Ensure regulatory compliance and reporting',
      'Mentor and develop branch staff',
      'Achieve monthly deposit and loan disbursement targets',
    ],
    requirements: [
      "Bachelor's degree in Banking, Finance, or related field",
      'Minimum 5 years banking experience, 2 in management',
      'Strong understanding of CBN microfinance regulations',
      'Excellent communication in English and Hausa',
      'Proficiency in core banking software (CuteBanker preferred)',
    ],
  },
  {
    id: 2,
    title: 'Digital Banking Officer',
    dept: 'Technology',
    location: 'Sokoto / Remote',
    type: 'Full-time',
    level: 'Mid-level',
    color: 'text-blue-400',
    border: 'border-blue-500/20',
    desc: 'Drive adoption of Rima MFB digital channels — USSD, mobile app, and agent banking. Work with the tech team to improve customer experience on the CuteBanker platform.',
    responsibilities: [
      'Monitor USSD *737# transaction volumes and resolve issues',
      'Train branch staff and agents on digital products',
      'Analyse customer usage data and identify improvement areas',
      'Coordinate with CuteBanker/NIBSS/Etranzact on integrations',
      'Support mobile app testing and feature rollouts',
      'Produce weekly digital banking performance reports',
    ],
    requirements: [
      "Bachelor's degree in IT, Computer Science, or related field",
      '2+ years experience in digital banking or fintech',
      'Knowledge of USSD, mobile banking, and payment systems',
      'Familiarity with NIBSS NIP and Etranzact APIs',
      'Strong analytical and problem-solving skills',
    ],
  },
  {
    id: 3,
    title: 'Loan / Credit Officer',
    dept: 'Credit',
    location: 'Kebbi / Zamfara',
    type: 'Full-time',
    level: 'Mid-level',
    color: 'text-amber-400',
    border: 'border-amber-500/20',
    desc: 'Assess, process, and monitor micro and SME loan applications. Conduct field visits, evaluate creditworthiness, and ensure timely repayment for our growing loan portfolio.',
    responsibilities: [
      'Process and assess individual, business, and agricultural loan applications',
      'Conduct field visits and business assessments',
      'Prepare credit appraisal reports and present to credit committee',
      'Monitor loan repayment and manage delinquencies',
      'Grow the loan portfolio while maintaining credit quality',
      'Provide financial advisory to SME customers',
    ],
    requirements: [
      "Bachelor's degree in Finance, Accounting, or Economics",
      '2+ years experience in credit/loan processing',
      'Understanding of Shariah-compliant financing (Murabaha, Qard Hasan)',
      'Strong field assessment and documentation skills',
      'Proficiency in MS Excel and core banking systems',
    ],
  },
  {
    id: 4,
    title: 'Customer Service Representative',
    dept: 'Retail Banking',
    location: 'All Branches',
    type: 'Full-time',
    level: 'Entry-level',
    color: 'text-teal-400',
    border: 'border-teal-500/20',
    desc: 'Serve as the first point of contact for Rima MFB customers. Open accounts, process transactions, resolve complaints, and champion our "Made For Us By Us" customer culture.',
    responsibilities: [
      'Open and maintain customer accounts (savings, current, fixed deposit)',
      'Process deposits, withdrawals, and transfers',
      'Resolve customer complaints professionally and promptly',
      'Educate customers on USSD *737#, mobile app, and products',
      'Achieve daily customer satisfaction and sales targets',
      'Maintain accurate records and daily transaction reports',
    ],
    requirements: [
      'OND/HND/BSc in any field',
      'Excellent communication in English and Hausa (mandatory)',
      'Strong customer service orientation',
      'Basic computer skills (MS Office)',
      'Honest, reliable, and community-oriented',
    ],
  },
  {
    id: 5,
    title: 'POS / Agent Banking Officer',
    dept: 'Agent Network',
    location: 'Sokoto, Kebbi, Zamfara, Katsina',
    type: 'Full-time',
    level: 'Mid-level',
    color: 'text-purple-400',
    border: 'border-purple-500/20',
    desc: 'Recruit, onboard, and manage Rima MFB POS agents across Northern Nigeria. Drive transaction volumes across our 2,000-terminal network and expand into underserved communities.',
    responsibilities: [
      'Recruit and onboard new POS agents in target areas',
      'Train agents on terminal operations and compliance',
      'Monitor agent transaction performance and resolve issues',
      'Ensure agents maintain minimum float and liquidity',
      'Expand agent network in rural and semi-urban areas',
      'Generate weekly agent performance reports',
    ],
    requirements: [
      "Bachelor's degree or HND in any field",
      '2+ years in agent banking, mobile money, or field sales',
      'Ability to work independently across multiple locations',
      'Strong knowledge of Northern Nigeria geography and communities',
      'Own a vehicle (motorcycle or car) — preferred',
    ],
  },
  {
    id: 6,
    title: 'Shariah Compliance Officer',
    dept: 'Compliance',
    location: 'Sokoto (Head Office)',
    type: 'Full-time',
    level: 'Senior',
    color: 'text-rose-400',
    border: 'border-rose-500/20',
    desc: 'Ensure all Rima MFB products and operations comply with Shariah principles as approved by the Shariah Supervisory Board. Review new products, train staff, and report to the Board.',
    responsibilities: [
      'Review all new products for Shariah compliance before launch',
      'Prepare Shariah audit reports for the Supervisory Board',
      'Train staff on Islamic finance principles and Shariah compliance',
      'Monitor Murabaha and Qard Hasan transactions for compliance',
      'Liaise with CBN and external Shariah advisory bodies',
      'Develop Shariah compliance policies and procedures',
    ],
    requirements: [
      "Bachelor's or Master's degree in Islamic Finance, Fiqh, or related",
      'Certified Islamic Finance Practitioner (CIFP) or equivalent',
      '3+ years experience in Shariah compliance at a financial institution',
      'Deep knowledge of Fiqh Muamalat',
      'Fluent in Arabic, English, and Hausa',
    ],
  },
]

const perks = [
  { icon: TrendingUp,  title: 'Career Growth',       desc: 'Clear progression paths from entry to senior management as we scale toward 500K customers.' },
  { icon: Heart,       title: 'Health Insurance',    desc: 'Comprehensive HMO coverage for you and your immediate family.' },
  { icon: ShieldCheck, title: 'Job Security',        desc: 'Stable employment in a CBN-licensed, community-rooted institution since 1992.' },
  { icon: Star,        title: 'Performance Bonus',   desc: 'Quarterly and annual bonuses tied to individual and branch performance targets.' },
  { icon: Users,       title: 'Team Culture',        desc: 'A collaborative, inclusive environment rooted in Northern Nigerian community values.' },
  { icon: Briefcase,   title: 'Training & Development', desc: 'Regular CBN-accredited training, Islamic finance certification support, and digital skills programmes.' },
]

function JobCard({ job }) {
  const [open, setOpen] = useState(false)
  const [applying, setApplying] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', cv: null, cover: '' })
  const [submitted, setSubmitted] = useState(false)
  const { ref, visible } = useScrollReveal()

  const handleApply = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setApplying(false); setSubmitted(false) }, 3000)
  }

  return (
    <div
      ref={ref}
      className={`card-glass overflow-hidden transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Header */}
      <button onClick={() => setOpen(!open)} className="w-full p-6 flex items-start gap-4 text-left group">
        <div className={`w-12 h-12 rounded-xl bg-white/5 border ${job.border} flex items-center justify-center flex-shrink-0
                         group-hover:scale-110 transition-transform`}>
          <Briefcase size={20} className={job.color} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-white text-lg group-hover:text-rima-gold transition-colors">
            {job.title}
          </h3>
          <div className="flex flex-wrap gap-3 mt-1.5">
            <span className="flex items-center gap-1 text-white/40 text-xs">
              <Briefcase size={10} />{job.dept}
            </span>
            <span className="flex items-center gap-1 text-white/40 text-xs">
              <MapPin size={10} />{job.location}
            </span>
            <span className="flex items-center gap-1 text-white/40 text-xs">
              <Clock size={10} />{job.type}
            </span>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-white/5 border ${job.border} ${job.color}`}>
              {job.level}
            </span>
          </div>
        </div>
        <div className="text-rima-gold/50 flex-shrink-0 mt-1">
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      {/* Expanded */}
      <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 border-t border-rima-gold/10 pt-5">
          <p className="text-white/65 text-sm leading-relaxed mb-6">{job.desc}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-rima-gold text-xs font-bold uppercase tracking-wider mb-3">Responsibilities</p>
              <ul className="space-y-2">
                {job.responsibilities.map(r => (
                  <li key={r} className="flex items-start gap-2 text-white/60 text-xs">
                    <span className="w-1 h-1 rounded-full bg-rima-gold mt-1.5 flex-shrink-0" />{r}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-rima-gold text-xs font-bold uppercase tracking-wider mb-3">Requirements</p>
              <ul className="space-y-2">
                {job.requirements.map(r => (
                  <li key={r} className="flex items-start gap-2 text-white/60 text-xs">
                    <CheckCircle2 size={11} className="text-rima-gold/60 mt-0.5 flex-shrink-0" />{r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Apply button / form */}
          {!applying ? (
            <button onClick={() => setApplying(true)} className="btn-gold flex items-center gap-2 text-sm">
              Apply for This Role <ArrowRight size={15} />
            </button>
          ) : (
            <div className="bg-white/5 rounded-2xl border border-rima-gold/20 p-6">
              {submitted ? (
                <div className="text-center py-4">
                  <CheckCircle2 size={36} className="text-green-400 mx-auto mb-3" />
                  <p className="text-white font-semibold">Application submitted!</p>
                  <p className="text-white/50 text-xs mt-1">We'll be in touch within 5 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleApply} className="flex flex-col gap-4">
                  <p className="text-rima-gold font-semibold text-sm">Apply: {job.title}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { k: 'name',  label: 'Full Name *',    type: 'text',  ph: 'Your full name' },
                      { k: 'phone', label: 'Phone Number *', type: 'tel',   ph: '0803 000 0000' },
                      { k: 'email', label: 'Email Address *',type: 'email', ph: 'you@email.com' },
                    ].map(f => (
                      <div key={f.k}>
                        <label className="text-white/40 text-xs block mb-1">{f.label}</label>
                        <input type={f.type} required placeholder={f.ph}
                          value={form[f.k]} onChange={e => setForm(d => ({ ...d, [f.k]: e.target.value }))}
                          className="w-full bg-white/5 border border-rima-gold/20 rounded-xl px-3 py-2.5 text-white
                                     placeholder-white/20 text-sm outline-none focus:border-rima-gold/60 transition-all" />
                      </div>
                    ))}
                    <div>
                      <label className="text-white/40 text-xs block mb-1">Upload CV/Resume *</label>
                      <label className={`flex items-center gap-2 p-2.5 rounded-xl border-2 border-dashed cursor-pointer transition-all
                        ${form.cv ? 'border-rima-gold/50 bg-rima-gold/5' : 'border-white/10 hover:border-rima-gold/30'}`}>
                        <Upload size={14} className="text-rima-gold flex-shrink-0" />
                        <span className="text-white/50 text-xs truncate">{form.cv ? form.cv.name : 'PDF or Word doc'}</span>
                        <input type="file" className="hidden" accept=".pdf,.doc,.docx"
                          onChange={e => setForm(d => ({ ...d, cv: e.target.files[0] }))} />
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="text-white/40 text-xs block mb-1">Cover Letter / Why Rima MFB?</label>
                    <textarea rows={3} value={form.cover}
                      onChange={e => setForm(d => ({ ...d, cover: e.target.value }))}
                      placeholder="Tell us why you want to work at Rima MFB..."
                      className="w-full bg-white/5 border border-rima-gold/20 rounded-xl px-3 py-2.5 text-white
                                 placeholder-white/20 text-sm outline-none focus:border-rima-gold/60 transition-all resize-none" />
                  </div>
                  <div className="flex gap-3">
                    <button type="submit" className="btn-gold text-sm px-6 py-2.5 flex items-center gap-2">
                      Submit Application <ArrowRight size={14} />
                    </button>
                    <button type="button" onClick={() => setApplying(false)}
                      className="btn-outline-gold text-sm px-5 py-2.5">Cancel</button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-rima-dark">
      <Navbar />
      <PageHero
        title="Join Our Team"
        hausa="Shiga Tawagar Mu · Grow With Rima"
        subtitle="Be part of the digital transformation of banking in Northern Nigeria. We're growing from 25,000 to 500,000 customers — and we need great people to make it happen."
        breadcrumb={[{ label: 'Careers' }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-6">
        {/* Why join */}
        <div className="text-center mb-12">
          <span className="text-rima-gold text-xs font-bold tracking-widest uppercase">Why Work at Rima MFB</span>
          <h2 className="font-display text-4xl font-bold text-white mt-2 mb-3">
            More Than a Job —<br /><span className="gold-text">A Mission</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-white/55 max-w-xl mx-auto mt-4">
            At Rima MFB you are not just processing transactions — you are bringing financial dignity to people
            who have been excluded from banking for generations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {perks.map((p, i) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="card-glass p-6">
                <div className="w-10 h-10 rounded-xl bg-rima-gold/10 border border-rima-gold/20 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-rima-gold" />
                </div>
                <h3 className="font-display font-semibold text-white text-base mb-2">{p.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { v: '200+',    l: 'Team Members',      s: 'And growing' },
            { v: '25K→500K', l: 'Customer Growth',  s: 'Year 1 target' },
            { v: '4',       l: 'States',             s: 'Sokoto, Kebbi, Zamfara, Katsina' },
            { v: '1992',    l: 'Est.',               s: '30+ years community banking' },
          ].map(s => (
            <div key={s.l} className="card-glass p-5 text-center">
              <p className="font-display text-2xl font-extrabold gold-text">{s.v}</p>
              <p className="text-white text-xs font-semibold mt-1">{s.l}</p>
              <p className="text-white/30 text-xs">{s.s}</p>
            </div>
          ))}
        </div>

        {/* Open roles */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-white">Open Positions</h2>
            <p className="text-white/50 text-sm mt-1">Mukamai da ke buɗe · {openRoles.length} roles available</p>
            <div className="divider-gold" />
          </div>
          <div className="flex flex-col gap-4">
            {openRoles.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>

        {/* Spontaneous application */}
        <div className="card-glass p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 pattern-overlay opacity-30 pointer-events-none" />
          <div className="relative">
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Don't See Your Role?
            </h3>
            <p className="text-white/50 mb-5 max-w-md mx-auto text-sm">
              We're always looking for talented people. Send your CV to{' '}
              <a href="mailto:careers@rimamfb.com" className="text-rima-gold hover:underline">
                careers@rimamfb.com
              </a>{' '}
              with the subject line "Spontaneous Application".
            </p>
            <a href="mailto:careers@rimamfb.com" className="btn-gold inline-flex items-center gap-2">
              Send Your CV <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
