import { useState } from 'react'
import { Phone, Mail, MapPin, Send, Smartphone, Clock, MessageCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHero from '../components/PageHero'

const branches = [
  { state: 'Sokoto (Head Office)', address: 'Gwaranyo LGA, Sokoto State, Nigeria',         phone: '+234 803 000 0001' },
  { state: 'Sokoto City Branch',   address: 'Sultan Abubakar Road, Sokoto',                 phone: '+234 803 000 0002' },
  { state: 'Kebbi',                address: 'Birnin Kebbi Main Market Road, Kebbi State',   phone: '+234 803 000 0003' },
  { state: 'Zamfara',              address: 'Ibrahim Aliyu Way, Gusau, Zamfara State',      phone: '+234 803 000 0004' },
  { state: 'Katsina',              address: 'No. 7 Nagogo Road, Katsina City',              phone: '+234 803 000 0005' },
  { state: 'Kaduna (Coming Soon)', address: 'Kawo, Kaduna State — Opening Year 1',          phone: 'TBC' },
]

export default function ContactPage() {
  const [form, setForm]     = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const [sent, setSent]     = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setForm({ name: '', phone: '', email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-rima-dark">
      <Navbar />
      <PageHero
        title="Contact Us"
        hausa="Tuntube Mu · We Speak English & Hausa"
        subtitle="Reach our team at our head office in Gwaranyo, Sokoto State — or visit any of our branches across Northern Nigeria."
        breadcrumb={[{ label: 'Contact' }]}
      />

      <section className="py-20 max-w-7xl mx-auto px-6">
        {/* Contact channels */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {[
            { icon: Phone,         label: 'Call Us',       value: '0800-RIMA-MFB',     sub: 'Mon–Sat, 8am–6pm',   href: 'tel:08000000000',          color: 'text-green-400' },
            { icon: MessageCircle, label: 'WhatsApp',      value: '+234 800 000 0000',  sub: 'Quick responses',    href: '#',                         color: 'text-emerald-400' },
            { icon: Mail,          label: 'Email Us',      value: 'info@rimamfb.com',   sub: 'Reply within 24h',   href: 'mailto:info@rimamfb.com',   color: 'text-blue-400' },
            { icon: Smartphone,    label: 'USSD Banking',  value: '*737#',              sub: 'Any phone, always',  href: '#',                         color: 'text-rima-gold' },
          ].map(({ icon: Icon, label, value, sub, href, color }) => (
            <a key={label} href={href}
              className="card-glass p-6 flex items-start gap-4 group hover:border-rima-gold/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-rima-gold/10 border border-rima-gold/20 flex items-center justify-center flex-shrink-0
                              group-hover:scale-110 transition-transform">
                <Icon size={18} className={color} />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider">{label}</p>
                <p className="text-white font-semibold text-sm mt-0.5">{value}</p>
                <p className="text-white/40 text-xs">{sub}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="card-glass p-8">
            <h2 className="font-display text-2xl font-bold text-rima-gold mb-1">Send a Message</h2>
            <p className="text-white/40 text-xs italic mb-6">Aika Saƙo — in English or Hausa</p>

            {sent && (
              <div className="mb-5 p-4 rounded-xl bg-rima-green-light/20 border border-rima-green-bright/40 text-rima-gold-bright text-sm">
                ✓ Message received! We'll respond within 24 hours. Nagode sosai!
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" value={form.name} onChange={handleChange} required
                  placeholder="Full Name *"
                  className="bg-white/5 border border-rima-gold/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-rima-gold/60 transition-all" />
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} required
                  placeholder="Phone Number *"
                  className="bg-white/5 border border-rima-gold/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-rima-gold/60 transition-all" />
              </div>
              <input name="email" type="email" value={form.email} onChange={handleChange}
                placeholder="Email Address (optional)"
                className="bg-white/5 border border-rima-gold/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-rima-gold/60 transition-all" />
              <select name="subject" value={form.subject} onChange={handleChange} required
                className="bg-rima-dark border border-rima-gold/20 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-rima-gold/60 transition-all">
                <option value="">Select Subject *</option>
                <option>Open New Account</option>
                <option>Qard Hasan Application</option>
                <option>Murabaha Finance Enquiry</option>
                <option>Micro / SME Loan Application</option>
                <option>USSD Banking Help (*737#)</option>
                <option>POS / Agent Banking</option>
                <option>Account Issue / Complaint</option>
                <option>Other</option>
              </select>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                placeholder="Your message... (in English or Hausa / cikin Turanci ko Hausa)"
                className="bg-white/5 border border-rima-gold/20 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-rima-gold/60 transition-all resize-none" />
              <button type="submit" disabled={loading}
                className="btn-gold flex items-center justify-center gap-2 w-full disabled:opacity-60">
                {loading
                  ? <><span className="w-4 h-4 border-2 border-rima-dark/40 border-t-rima-dark rounded-full animate-spin" /> Sending...</>
                  : <><Send size={16} /> Send Message · Aika Saƙo</>}
              </button>
            </form>
          </div>

          {/* Info panels */}
          <div className="flex flex-col gap-6">
            {/* Head office */}
            <div className="card-glass p-6 border border-rima-gold/30">
              <h3 className="font-display text-lg font-bold text-rima-gold mb-3 flex items-center gap-2">
                <MapPin size={16} className="text-rima-gold" /> Head Office
              </h3>
              <p className="text-white font-semibold text-sm">Rima Microfinance Bank Limited</p>
              <p className="text-white/60 text-sm mt-1">Gwaranyo LGA, Sokoto State, Nigeria</p>
              <p className="text-white/40 text-xs mt-1">Established 1992 · CBN Licensed</p>
            </div>

            {/* Branches */}
            <div className="card-glass p-6">
              <h3 className="font-display text-lg font-bold text-white mb-4">Our Branches</h3>
              <div className="flex flex-col gap-3">
                {branches.map(b => (
                  <div key={b.state} className="flex items-start gap-3 pb-3 border-b border-rima-gold/10 last:border-0 last:pb-0">
                    <div className="w-7 h-7 rounded-lg bg-rima-gold/10 border border-rima-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={12} className="text-rima-gold" />
                    </div>
                    <div>
                      <p className="text-rima-gold font-semibold text-xs">{b.state}</p>
                      <p className="text-white/55 text-xs">{b.address}</p>
                      {b.phone !== 'TBC' && (
                        <a href={`tel:${b.phone}`} className="text-white/30 text-xs hover:text-rima-gold transition-colors">{b.phone}</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="card-glass p-5">
              <h3 className="font-display text-base font-bold text-white mb-3 flex items-center gap-2">
                <Clock size={15} className="text-rima-gold" /> Banking Hours
              </h3>
              {[
                { day: 'Monday – Friday',          time: '8:00 AM – 5:00 PM' },
                { day: 'Saturday',                  time: '9:00 AM – 2:00 PM' },
                { day: 'Sunday / Public Holidays',  time: 'Closed' },
              ].map(h => (
                <div key={h.day} className="flex justify-between py-2 border-b border-rima-gold/10 last:border-0">
                  <span className="text-white/60 text-xs">{h.day}</span>
                  <span className="text-rima-gold text-xs font-semibold">{h.time}</span>
                </div>
              ))}
              <p className="text-white/30 text-xs mt-2">*USSD *737# available 24/7, 365 days</p>
            </div>

            {/* USSD */}
            <div className="card-glass p-5 bg-rima-green-mid/30 border border-rima-gold/30 text-center">
              <Smartphone size={28} className="text-rima-gold mx-auto mb-2" />
              <p className="text-white font-bold mb-1">24/7 USSD Banking</p>
              <p className="text-rima-gold font-display font-extrabold text-3xl tracking-widest">*737#</p>
              <p className="text-white/50 text-xs mt-1">Works on all phones · No internet · All networks</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
