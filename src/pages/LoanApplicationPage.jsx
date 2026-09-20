import { useState } from 'react'
import {
  CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Upload, Copy,
  PiggyBank, Store, Banknote, Building2, Sprout, GraduationCap, Home
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'

const loanTypes = [
  { id: 'qard',     label: 'Qard Hasan',           sub: 'Interest-free · 0% riba',        Icon: ShieldCheck, color: 'text-purple-400', sharia: true  },
  { id: 'murabaha', label: 'Murabaha Finance',      sub: 'Halal trade finance',             Icon: Store,       color: 'text-emerald-400', sharia: true  },
  { id: 'micro',    label: 'Micro Business Loan',   sub: '₦10K – ₦500K · Fast approval',  Icon: PiggyBank,   color: 'text-amber-400',   sharia: false },
  { id: 'sme',      label: 'SME Business Loan',     sub: '₦500K – ₦10M',                  Icon: Building2,   color: 'text-blue-400',    sharia: false },
  { id: 'agri',     label: 'Agricultural Loan',     sub: 'Harvest-cycle repayment',        Icon: Sprout,      color: 'text-lime-400',    sharia: false },
  { id: 'edu',      label: 'Education Loan',        sub: 'School fees & WAEC/JAMB',        Icon: GraduationCap, color: 'text-teal-400', sharia: false },
  { id: 'home',     label: 'Home Improvement',      sub: 'Renovate or furnish your home',  Icon: Home,        color: 'text-rose-400',    sharia: false },
]

const STEPS = ['Loan Type', 'Personal Info', 'Loan Details', 'Documents', 'Review & Submit']

export default function LoanApplicationPage() {
  const [step, setStep]       = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [refNum] = useState(() => 'RMB-LOAN-' + Math.floor(100000 + Math.random() * 900000))

  const [data, setData] = useState({
    loanType: '',
    firstName: '', lastName: '', phone: '', email: '',
    dob: '', bvn: '', address: '', state: '',
    amount: '', tenor: '', purpose: '', employment: '',
    idType: '', idFile: null, utilityFile: null, statementFile: null,
  })

  const set = (k, v) => setData(d => ({ ...d, [k]: v }))

  const next = () => setStep(s => Math.min(s + 1, 4))
  const back = () => setStep(s => Math.max(s - 1, 0))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) return (
    <div className="min-h-screen bg-rima-dark">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-6 py-32">
        <div className="card-glass p-12 max-w-lg w-full text-center">
          <div className="w-24 h-24 rounded-full bg-green-500/20 border-2 border-green-500/40 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={48} className="text-green-400" />
          </div>
          <h2 className="font-display text-3xl font-bold text-white mb-2">Application Submitted!</h2>
          <p className="text-white/50 mb-6">Buƙatarku an karɓa. Nagode!</p>

          <div className="bg-rima-gold/10 border border-rima-gold/30 rounded-2xl p-5 mb-6">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Your Reference Number</p>
            <div className="flex items-center justify-center gap-3">
              <p className="font-display font-extrabold text-2xl text-rima-gold tracking-widest">{refNum}</p>
              <button onClick={() => navigator.clipboard?.writeText(refNum)}
                className="text-rima-gold/50 hover:text-rima-gold transition-colors">
                <Copy size={16} />
              </button>
            </div>
            <p className="text-white/30 text-xs mt-1">Save this number to track your application</p>
          </div>

          <div className="text-left space-y-2 mb-8">
            {[
              { s: '1', t: 'Application received and logged in our system' },
              { s: '2', t: 'Credit & Shariah assessment within 24–72 hours' },
              { s: '3', t: 'Our team will call you on the number provided' },
              { s: '4', t: 'Disbursement upon approval — directly to your account' },
            ].map(i => (
              <div key={i.s} className="flex items-start gap-3 text-white/60 text-sm">
                <span className="w-5 h-5 rounded-full bg-rima-gold/20 text-rima-gold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">{i.s}</span>
                {i.t}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <Link to="/" className="btn-gold flex items-center justify-center gap-2">Back to Home</Link>
            <Link to="/contact" className="btn-outline-gold text-center">Contact Us</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )

  return (
    <div className="min-h-screen bg-rima-dark">
      <Navbar />
      <PageHero
        title="Loan Application"
        hausa="Neman Lamuni · Apply Online"
        subtitle="Apply for any Rima MFB loan product online. Qard Hasan, Murabaha, Micro Loans, and more."
        breadcrumb={[{ label: 'Loans', href: '/loans' }, { label: 'Apply' }]}
      />

      <section className="py-16 max-w-3xl mx-auto px-6">
        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-3">
            {STEPS.map((s, i) => (
              <div key={s} className="flex flex-col items-center gap-1 flex-1">
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all
                  ${i < step ? 'bg-rima-gold border-rima-gold text-rima-dark' :
                    i === step ? 'border-rima-gold text-rima-gold' :
                    'border-white/20 text-white/30'}`}>
                  {i < step ? '✓' : i + 1}
                </div>
                <p className={`text-xs hidden sm:block text-center ${i === step ? 'text-rima-gold' : 'text-white/30'}`}>{s}</p>
              </div>
            ))}
          </div>
          <div className="w-full bg-white/10 rounded-full h-1.5">
            <div className="bg-gold-gradient h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }} />
          </div>
        </div>

        <div className="card-glass p-8">
          {/* STEP 0 — Loan type */}
          {step === 0 && (
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">Choose Loan Type</h3>
              <p className="text-white/40 text-xs mb-6 italic">Zaɓi nau\'in lamunin da kuke so</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {loanTypes.map(lt => (
                  <button
                    key={lt.id}
                    onClick={() => set('loanType', lt.id)}
                    className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all
                      ${data.loanType === lt.id ? 'border-rima-gold/60 bg-rima-gold/10' : 'border-white/10 hover:border-rima-gold/30'}`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border transition-colors
                      ${data.loanType === lt.id ? 'bg-rima-gold/15 border-rima-gold/30' : 'bg-white/5 border-white/10'}`}>
                      <lt.Icon size={19} className={lt.color} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-sm">{lt.label}</p>
                      <p className="text-white/40 text-xs">{lt.sub}</p>
                    </div>
                    {lt.sharia && (
                      <ShieldCheck size={14} className="text-rima-gold flex-shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 1 — Personal info */}
          {step === 1 && (
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">Personal Information</h3>
              <p className="text-white/40 text-xs mb-6 italic">Bayanin Sirri</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { k: 'firstName', label: 'First Name *',   type: 'text',  placeholder: 'e.g. Yusuf' },
                  { k: 'lastName',  label: 'Surname *',      type: 'text',  placeholder: 'e.g. Danmusa' },
                  { k: 'phone',     label: 'Phone Number *', type: 'tel',   placeholder: '0803 000 0000' },
                  { k: 'email',     label: 'Email',          type: 'email', placeholder: 'optional' },
                  { k: 'dob',       label: 'Date of Birth *',type: 'date',  placeholder: '' },
                  { k: 'bvn',       label: 'BVN *',          type: 'text',  placeholder: '11-digit BVN', maxLength: 11 },
                ].map(f => (
                  <div key={f.k}>
                    <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">{f.label}</label>
                    <input type={f.type} value={data[f.k]} onChange={e => set(f.k, e.target.value)}
                      placeholder={f.placeholder} maxLength={f.maxLength}
                      className="w-full bg-white/5 border border-rima-gold/20 rounded-xl px-4 py-3 text-white placeholder-white/20
                                 text-sm outline-none focus:border-rima-gold/60 transition-all" />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">Home Address *</label>
                  <input type="text" value={data.address} onChange={e => set('address', e.target.value)}
                    placeholder="Street, LGA, State"
                    className="w-full bg-white/5 border border-rima-gold/20 rounded-xl px-4 py-3 text-white placeholder-white/20
                               text-sm outline-none focus:border-rima-gold/60 transition-all" />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 — Loan details */}
          {step === 2 && (
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">Loan Details</h3>
              <p className="text-white/40 text-xs mb-6 italic">Bayanan Lamunin</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">Loan Amount (₦) *</label>
                  <input type="number" value={data.amount} onChange={e => set('amount', e.target.value)}
                    placeholder="e.g. 500000"
                    className="w-full bg-white/5 border border-rima-gold/20 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none focus:border-rima-gold/60 transition-all" />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">Repayment Period *</label>
                  <select value={data.tenor} onChange={e => set('tenor', e.target.value)}
                    className="w-full bg-rima-dark border border-rima-gold/20 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-rima-gold/60 transition-all">
                    <option value="">Select tenor</option>
                    {['3 months','6 months','12 months','18 months','24 months'].map(t => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">Employment Status *</label>
                  <select value={data.employment} onChange={e => set('employment', e.target.value)}
                    className="w-full bg-rima-dark border border-rima-gold/20 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-rima-gold/60 transition-all">
                    <option value="">Select status</option>
                    {['Self-employed / Trader','Salary Earner','Farmer','Student','Unemployed'].map(s => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">Loan Purpose *</label>
                  <textarea value={data.purpose} onChange={e => set('purpose', e.target.value)}
                    rows={3} placeholder="Describe what you will use the loan for..."
                    className="w-full bg-white/5 border border-rima-gold/20 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none focus:border-rima-gold/60 transition-all resize-none" />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 — Documents */}
          {step === 3 && (
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">Upload Documents</h3>
              <p className="text-white/40 text-xs mb-6 italic">Loda Takardun Shaidar · PDF or image, max 5MB each</p>
              <div className="flex flex-col gap-5">
                {[
                  { k: 'idFile',        label: 'Valid ID (NIN, Voter Card, Passport) *', required: true },
                  { k: 'utilityFile',   label: 'Utility Bill (not older than 3 months)',  required: false },
                  { k: 'statementFile', label: 'Bank Statement (3–6 months)',              required: false },
                ].map(doc => (
                  <div key={doc.k}>
                    <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">{doc.label}</label>
                    <label className={`flex items-center gap-4 p-4 rounded-2xl border-2 border-dashed cursor-pointer transition-all
                      ${data[doc.k] ? 'border-rima-gold/60 bg-rima-gold/10' : 'border-white/15 hover:border-rima-gold/30'}`}>
                      <div className="w-10 h-10 rounded-xl bg-rima-gold/10 flex items-center justify-center flex-shrink-0">
                        {data[doc.k] ? <CheckCircle2 size={18} className="text-green-400" /> : <Upload size={18} className="text-rima-gold" />}
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">
                          {data[doc.k] ? data[doc.k].name : 'Click to upload or drag & drop'}
                        </p>
                        <p className="text-white/30 text-xs">PDF, JPG, PNG — max 5MB</p>
                      </div>
                      <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png"
                        onChange={e => set(doc.k, e.target.files[0])} />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4 — Review */}
          {step === 4 && (
            <form onSubmit={handleSubmit}>
              <h3 className="font-display text-2xl font-bold text-white mb-1">Review & Submit</h3>
              <p className="text-white/40 text-xs mb-6 italic">Duba kafin aika · Review before submitting</p>
              <div className="space-y-3 mb-6">
                {[
                  { l: 'Loan Type',    v: loanTypes.find(t => t.id === data.loanType)?.label || data.loanType },
                  { l: 'Full Name',    v: `${data.firstName} ${data.lastName}` },
                  { l: 'Phone',        v: data.phone },
                  { l: 'BVN',          v: data.bvn ? `***${data.bvn.slice(-4)}` : '—' },
                  { l: 'Amount',       v: data.amount ? `₦${Number(data.amount).toLocaleString()}` : '—' },
                  { l: 'Tenor',        v: data.tenor || '—' },
                  { l: 'Employment',   v: data.employment || '—' },
                  { l: 'Purpose',      v: data.purpose || '—' },
                ].map(r => (
                  <div key={r.l} className="flex justify-between gap-4 py-2 border-b border-rima-gold/10">
                    <span className="text-white/40 text-sm">{r.l}</span>
                    <span className="text-white text-sm font-medium text-right">{r.v}</span>
                  </div>
                ))}
              </div>
              <div className="bg-rima-gold/10 border border-rima-gold/30 rounded-xl p-4 mb-6 text-xs text-white/60 leading-relaxed">
                By submitting this application, I confirm that all information provided is accurate and true. I consent to Rima MFB
                conducting credit and identity checks. I understand this is an application, not a guarantee of approval.
              </div>
              <button type="submit" className="btn-gold flex items-center justify-center gap-2 w-full py-4">
                Submit Application · Ƙaddamar <ArrowRight size={16} />
              </button>
            </form>
          )}

          {/* Navigation buttons */}
          {step < 4 && (
            <div className="flex justify-between mt-8">
              <button onClick={back} disabled={step === 0}
                className="btn-outline-gold flex items-center gap-2 text-sm disabled:opacity-30 disabled:cursor-not-allowed">
                <ArrowLeft size={15} /> Back
              </button>
              <button onClick={next}
                disabled={(step === 0 && !data.loanType)}
                className="btn-gold flex items-center gap-2 text-sm disabled:opacity-40 disabled:cursor-not-allowed">
                Next <ArrowRight size={15} />
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  )
}
