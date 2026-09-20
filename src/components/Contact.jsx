import { Phone, Mail, MapPin, Send, Smartphone } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-24 bg-rima-dark overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rima-gold/30 to-transparent" />
      <div className="absolute inset-0 pattern-overlay pointer-events-none opacity-20" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-rima-gold/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-rima-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Get In Touch · Tuntube Mu
          </span>
          <h2 className="section-title mb-4">
            Ready to Start<br />
            <span className="gold-text">Banking Smarter?</span>
          </h2>
          <div className="divider-gold" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              We're Here for You
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              Whether you want to open an account, apply for a loan, or just ask a question — 
              our team is ready to help you in English or Hausa.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-5 mb-10">
              {[
                { icon: Phone, label: 'Call Us', value: '+234 800 RIMA MFB (0800-746-2632)', sub: 'Mon–Sat, 8am–6pm' },
                { icon: Mail, label: 'Email Us', value: 'info@rimamfb.com', sub: 'We reply within 24 hours' },
                { icon: MapPin, label: 'Head Office', value: 'Sultan Abubakar Road, Sokoto', sub: 'Sokoto State, Nigeria' },
              ].map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-rima-gold/10 border border-rima-gold/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-rima-gold" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider">{label}</p>
                    <p className="text-white font-medium text-sm">{value}</p>
                    <p className="text-white/40 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* USSD Quick access */}
            <div className="card-glass p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-rima-gold/20 flex items-center justify-center flex-shrink-0">
                <Smartphone size={22} className="text-rima-gold" />
              </div>
              <div>
                <p className="text-white font-bold">Quick USSD Banking</p>
                <p className="text-rima-gold text-2xl font-display font-extrabold tracking-widest">
                  *737#
                </p>
                <p className="text-white/50 text-xs">No internet needed · Works on all phones</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card-glass p-8">
            <h3 className="font-display text-xl font-bold text-rima-gold mb-6">
              Send Us a Message
            </h3>

            {sent && (
              <div className="mb-4 p-4 rounded-xl bg-rima-green-light/20 border border-rima-green-bright/40 text-rima-gold-bright text-sm">
                ✓ Message sent! We'll get back to you shortly. Nagode!
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {[
                { name: 'name',  type: 'text',  placeholder: 'Your Full Name' },
                { name: 'phone', type: 'tel',   placeholder: 'Phone Number (e.g. 0803...)' },
                { name: 'email', type: 'email', placeholder: 'Email Address (optional)' },
              ].map((field) => (
                <input
                  key={field.name}
                  {...field}
                  value={form[field.name]}
                  onChange={handleChange}
                  required={field.name !== 'email'}
                  className="bg-white/5 border border-rima-gold/20 rounded-xl px-4 py-3 text-white
                             placeholder-white/30 text-sm outline-none focus:border-rima-gold/60
                             focus:bg-white/10 transition-all duration-200"
                />
              ))}

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Your message or enquiry..."
                className="bg-white/5 border border-rima-gold/20 rounded-xl px-4 py-3 text-white
                           placeholder-white/30 text-sm outline-none focus:border-rima-gold/60
                           focus:bg-white/8 transition-all duration-200 resize-none"
              />

              <button
                type="submit"
                className="btn-gold flex items-center justify-center gap-2 w-full"
              >
                <Send size={16} />
                Send Message · Aika Saƙo
              </button>
            </form>
            <div className="mt-4 text-center">
              <Link to="/contact" className="text-rima-gold/60 hover:text-rima-gold text-xs transition-colors">
                Visit full contact page →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
