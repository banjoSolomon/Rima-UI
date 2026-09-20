import { useState } from 'react'
import { CheckCircle2, ArrowRight, ArrowLeft, Upload, Copy, PiggyBank, Star, GraduationCap, CreditCard, Store, Users, ShieldCheck, Building2, Smartphone, Landmark } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'
import { Link } from 'react-router-dom'

const accountTypes = [
  { id: 'starter',  label: 'Starter Savings',   sub: '₦500 min · Free card · Shariah option', Icon: PiggyBank,    rate: '6%',   color: 'text-emerald-400' },
  { id: 'premium',  label: 'Premium Savings',    sub: '₦10,000 min · 10% interest p.a.',       Icon: Star,         rate: '10%',  color: 'text-amber-400' },
  { id: 'youth',    label: 'Youth Account',      sub: 'Ages 16–35 · ₦200 min · 7%',            Icon: GraduationCap,rate: '7%',   color: 'text-blue-400' },
  { id: 'current',  label: 'Current Account',    sub: '₦5,000 min · Unlimited transactions',   Icon: CreditCard,   rate: 'N/A',  color: 'text-purple-400' },
  { id: 'business', label: 'Business Account',   sub: 'For traders & SMEs · CAC required',     Icon: Store,        rate: 'N/A',  color: 'text-orange-400' },
  { id: 'joint',    label: 'Joint / Family',     sub: '₦2,000 min · Up to 4 signatories',      Icon: Users,        rate: '7.5%', color: 'text-teal-400' },
]

const STEPS = ['Account Type', 'Personal Details', 'ID Verification', 'Initial Deposit', 'Confirmation']

export default function OpenAccountPage() {
  const [step, setStep]           = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [refNum] = useState(() => 'RMB-ACC-' + Math.floor(100000 + Math.random() * 900000))

  const [data, setData] = useState({
    accountType: '',
    firstName: '', lastName: '', middleName: '', phone: '', email: '',
    dob: '', gender: '', bvn: '', nin: '', address: '', state: '', lga: '',
    idType: '', idFile: null, selfieFile: null,
    depositMethod: '', referral: '',
    shariah: false,
  })

  const set = (k, v) => setData(d => ({ ...d, [k]: v }))
  const next = () => setStep(s => Math.min(s + 1, 4))
  const back = () => setStep(s => Math.max(s - 1, 0))
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  if (submitted) return (
    <div className="min-h-screen bg-rima-dark">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-6 py-32">
        <div className="card-glass p-12 max-w-lg w-full text-center">
          <div className="w-24 h-24 rounded-full bg-green-500/20 border-2 border-green-500/40 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={48} className="text-green-400" />
          </div>
          <h2 className="font-display text-3xl font-bold text-white mb-2">Account Application Submitted!</h2>
          <p className="text-white/50 mb-2">An karɓa buƙatarku. Nagode!</p>

          <div className="bg-rima-gold/10 border border-rima-gold/30 rounded-2xl p-5 mb-6">
            <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Application Reference</p>
            <div className="flex items-center justify-center gap-3">
              <p className="font-display font-extrabold text-2xl text-rima-gold tracking-widest">{refNum}</p>
              <button onClick={() => navigator.clipboard?.writeText(refNum)}
                className="text-rima-gold/50 hover:text-rima-gold">
                <Copy size={16} />
              </button>
            </div>
          </div>

          <div className="text-left space-y-3 mb-8">
            {[
              { n: '1', t: 'Application received — confirmation SMS sent to your phone' },
              { n: '2', t: 'Our team will verify your details within 24 hours' },
              { n: '3', t: 'Visit any branch with your original ID to finalise' },
              { n: '4', t: 'Account number issued + debit card dispatched within 3 days' },
            ].map(i => (
              <div key={i.n} className="flex items-start gap-3 text-white/60 text-sm">
                <span className="w-5 h-5 rounded-full bg-rima-gold/20 text-rima-gold text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">{i.n}</span>
                {i.t}
              </div>
            ))}
          </div>

          <div className="card-glass p-4 text-center mb-6">
            <p className="text-white/50 text-xs mb-1">Or activate USSD banking immediately</p>
            <p className="font-display font-extrabold text-3xl text-rima-gold">*737#</p>
          </div>

          <Link to="/" className="btn-gold flex items-center justify-center gap-2 w-full">
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )

  return (
    <div className="min-h-screen bg-rima-dark">
      <Navbar />
      <PageHero
        title="Open an Account"
        hausa="Buɗe Asusu · Join 25,000+ Customers"
        subtitle="Open your Rima MFB account online in minutes. Shariah-compliant options available on all savings products."
        breadcrumb={[{ label: 'Open Account' }]}
      />

      <section className="py-16 max-w-3xl mx-auto px-6">
        {/* Progress */}
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
          {/* STEP 0 — Account type */}
          {step === 0 && (
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">Choose Account Type</h3>
              <p className="text-white/40 text-xs mb-6 italic">Zaɓi nau\'in asusun da kuke so</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {accountTypes.map(at => (
                  <button key={at.id}
                    onClick={() => set('accountType', at.id)}
                    className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all
                      ${data.accountType === at.id ? 'border-rima-gold/60 bg-rima-gold/10' : 'border-white/10 hover:border-rima-gold/30'}`}>
                    <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0
                                    ${data.accountType === at.id ? 'border-rima-gold/30 bg-rima-gold/10' : ''}`}>
                      <at.Icon size={20} className={at.color} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-sm">{at.label}</p>
                      <p className="text-white/40 text-xs">{at.sub}</p>
                    </div>
                    {at.rate !== 'N/A' && (
                      <span className="text-rima-gold font-bold text-xs flex-shrink-0">{at.rate}</span>
                    )}
                  </button>
                ))}
              </div>
              {/* Shariah toggle */}
              <div className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-all
                ${data.shariah ? 'border-rima-gold/60 bg-rima-gold/10' : 'border-white/10'}`}
                onClick={() => set('shariah', !data.shariah)}>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all
                  ${data.shariah ? 'bg-rima-gold border-rima-gold' : 'border-white/30'}`}>
                  {data.shariah && <span className="text-rima-dark text-xs font-bold">✓</span>}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rima-gold/10 border border-rima-gold/20 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={15} className="text-rima-gold" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Request Shariah-Compliant Account</p>
                    <p className="text-white/40 text-xs">Non-interest, profit-sharing basis (Halal)</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 1 — Personal details */}
          {step === 1 && (
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">Personal Details</h3>
              <p className="text-white/40 text-xs mb-6 italic">Bayanan Sirri</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { k: 'firstName',  label: 'First Name *',       type: 'text',  ph: 'e.g. Yusuf' },
                  { k: 'lastName',   label: 'Surname *',           type: 'text',  ph: 'e.g. Abdullahi' },
                  { k: 'middleName', label: 'Middle Name',         type: 'text',  ph: 'optional' },
                  { k: 'phone',      label: 'Phone Number *',      type: 'tel',   ph: '0803 000 0000' },
                  { k: 'email',      label: 'Email',               type: 'email', ph: 'optional' },
                  { k: 'dob',        label: 'Date of Birth *',     type: 'date',  ph: '' },
                ].map(f => (
                  <div key={f.k}>
                    <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">{f.label}</label>
                    <input type={f.type} value={data[f.k]} onChange={e => set(f.k, e.target.value)}
                      placeholder={f.ph}
                      className="w-full bg-white/5 border border-rima-gold/20 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none focus:border-rima-gold/60 transition-all" />
                  </div>
                ))}
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">Gender *</label>
                  <select value={data.gender} onChange={e => set('gender', e.target.value)}
                    className="w-full bg-rima-dark border border-rima-gold/20 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-rima-gold/60 transition-all">
                    <option value="">Select</option>
                    <option>Male</option><option>Female</option>
                  </select>
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">State *</label>
                  <select value={data.state} onChange={e => set('state', e.target.value)}
                    className="w-full bg-rima-dark border border-rima-gold/20 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-rima-gold/60 transition-all">
                    <option value="">Select state</option>
                    {['Sokoto','Kebbi','Zamfara','Katsina','Kaduna','Kano','Niger','Abuja (FCT)','Other'].map(s => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">Home Address *</label>
                  <input type="text" value={data.address} onChange={e => set('address', e.target.value)}
                    placeholder="Street, LGA, State"
                    className="w-full bg-white/5 border border-rima-gold/20 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none focus:border-rima-gold/60 transition-all" />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 — ID verification */}
          {step === 2 && (
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">Identity Verification</h3>
              <p className="text-white/40 text-xs mb-6 italic">Tabbatar da Asalin Ku · KYC Required by CBN</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">BVN *</label>
                  <input type="text" value={data.bvn} onChange={e => set('bvn', e.target.value)}
                    placeholder="11-digit BVN" maxLength={11}
                    className="w-full bg-white/5 border border-rima-gold/20 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none focus:border-rima-gold/60 transition-all" />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">NIN</label>
                  <input type="text" value={data.nin} onChange={e => set('nin', e.target.value)}
                    placeholder="11-digit NIN" maxLength={11}
                    className="w-full bg-white/5 border border-rima-gold/20 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none focus:border-rima-gold/60 transition-all" />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">ID Type *</label>
                  <select value={data.idType} onChange={e => set('idType', e.target.value)}
                    className="w-full bg-rima-dark border border-rima-gold/20 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-rima-gold/60 transition-all">
                    <option value="">Select ID type</option>
                    {["National ID (NIN slip)", "Voter's Card", "International Passport", "Driver's Licence"].map(t => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              {[
                { k: 'idFile',     label: 'Upload ID Document *',       hint: 'Clear photo or scan of your ID' },
                { k: 'selfieFile', label: 'Upload Passport Photo *',     hint: 'Clear, recent photo on white background' },
              ].map(doc => (
                <div key={doc.k} className="mb-4">
                  <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">{doc.label}</label>
                  <label className={`flex items-center gap-4 p-4 rounded-2xl border-2 border-dashed cursor-pointer transition-all
                    ${data[doc.k] ? 'border-rima-gold/60 bg-rima-gold/10' : 'border-white/15 hover:border-rima-gold/30'}`}>
                    <div className="w-10 h-10 rounded-xl bg-rima-gold/10 flex items-center justify-center flex-shrink-0">
                      {data[doc.k] ? <CheckCircle2 size={18} className="text-green-400" /> : <Upload size={18} className="text-rima-gold" />}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{data[doc.k] ? data[doc.k].name : doc.hint}</p>
                      <p className="text-white/30 text-xs">JPG, PNG, PDF — max 5MB</p>
                    </div>
                    <input type="file" className="hidden" accept=".jpg,.jpeg,.png,.pdf"
                      onChange={e => set(doc.k, e.target.files[0])} />
                  </label>
                </div>
              ))}
            </div>
          )}

          {/* STEP 3 — Deposit */}
          {step === 3 && (
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">Initial Deposit</h3>
              <p className="text-white/40 text-xs mb-6 italic">Kuɗin Buɗewa</p>
              <div className="card-glass p-5 mb-6">
                <p className="text-rima-gold font-bold text-sm mb-2">Minimum Opening Deposit</p>
                <p className="text-white text-3xl font-display font-extrabold">
                  {accountTypes.find(a => a.id === data.accountType)?.id === 'youth' ? '₦200'
                   : accountTypes.find(a => a.id === data.accountType)?.id === 'starter' ? '₦500'
                   : accountTypes.find(a => a.id === data.accountType)?.id === 'current' ? '₦5,000'
                   : '₦2,000'}
                </p>
              </div>
              <p className="text-white/50 text-sm mb-4">How would you like to make your opening deposit?</p>
              <div className="grid sm:grid-cols-3 gap-3 mb-6">
                {[
                  { id: 'branch',   label: 'Pay at Branch',  Icon: Landmark },
                  { id: 'transfer', label: 'Bank Transfer',   Icon: CreditCard },
                  { id: 'ussd',     label: 'USSD *737#',      Icon: Smartphone },
                ].map(m => (
                  <button key={m.id}
                    onClick={() => set('depositMethod', m.id)}
                    className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all
                      ${data.depositMethod === m.id ? 'border-rima-gold/60 bg-rima-gold/10' : 'border-white/10 hover:border-rima-gold/30'}`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors
                      ${data.depositMethod === m.id ? 'bg-rima-gold/15 border-rima-gold/40' : 'bg-white/5 border-white/10'}`}>
                      <m.Icon size={22} className={data.depositMethod === m.id ? 'text-rima-gold' : 'text-white/50'} />
                    </div>
                    <p className="text-white text-xs font-semibold">{m.label}</p>
                  </button>
                ))}
              </div>
              <div>
                <label className="text-white/50 text-xs uppercase tracking-wider block mb-1.5">Referral Code (optional)</label>
                <input type="text" value={data.referral} onChange={e => set('referral', e.target.value)}
                  placeholder="e.g. RMB-REF-12345"
                  className="w-full bg-white/5 border border-rima-gold/20 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none focus:border-rima-gold/60 transition-all" />
              </div>
            </div>
          )}

          {/* STEP 4 — Review */}
          {step === 4 && (
            <form onSubmit={handleSubmit}>
              <h3 className="font-display text-2xl font-bold text-white mb-1">Confirm & Submit</h3>
              <p className="text-white/40 text-xs mb-6 italic">Tabbata kafin aika</p>
              <div className="space-y-2 mb-6">
                {[
                  { l: 'Account Type',  v: accountTypes.find(a => a.id === data.accountType)?.label || data.accountType },
                  { l: 'Shariah',       v: data.shariah ? 'Yes — Halal/Non-interest' : 'Standard' },
                  { l: 'Full Name',     v: `${data.firstName} ${data.middleName} ${data.lastName}` },
                  { l: 'Phone',         v: data.phone },
                  { l: 'BVN',           v: data.bvn ? `***${data.bvn.slice(-4)}` : '—' },
                  { l: 'State',         v: data.state || '—' },
                  { l: 'Deposit Method',v: data.depositMethod || '—' },
                ].map(r => (
                  <div key={r.l} className="flex justify-between gap-4 py-2 border-b border-rima-gold/10">
                    <span className="text-white/40 text-sm">{r.l}</span>
                    <span className="text-white text-sm font-medium text-right">{r.v}</span>
                  </div>
                ))}
              </div>
              <div className="bg-rima-gold/10 border border-rima-gold/30 rounded-xl p-4 mb-6 text-xs text-white/55 leading-relaxed">
                By submitting, I confirm all details are accurate. I consent to Rima MFB verifying my identity and BVN as required by CBN KYC guidelines. I understand I must visit a branch with my original ID to complete account activation.
              </div>
              <button type="submit" className="btn-gold flex items-center justify-center gap-2 w-full py-4">
                Submit Application · Ƙaddamar <ArrowRight size={16} />
              </button>
            </form>
          )}

          {step < 4 && (
            <div className="flex justify-between mt-8">
              <button onClick={back} disabled={step === 0}
                className="btn-outline-gold flex items-center gap-2 text-sm disabled:opacity-30 disabled:cursor-not-allowed">
                <ArrowLeft size={15} /> Back
              </button>
              <button onClick={next}
                disabled={step === 0 && !data.accountType}
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
