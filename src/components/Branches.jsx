import { MapPin, Clock, Phone } from 'lucide-react'

const branches = [
  {
    state: 'Sokoto (Head Office)',
    address: 'Gwaranyo LGA, Sokoto State',
    phone: '+234 803 000 0001',
    hours: 'Mon–Fri: 8am–5pm | Sat: 9am–2pm',
  },
  {
    state: 'Sokoto City',
    address: 'Sultan Abubakar Road, Sokoto',
    phone: '+234 803 000 0002',
    hours: 'Mon–Fri: 8am–5pm | Sat: 9am–2pm',
  },
  {
    state: 'Kebbi',
    address: 'Birnin Kebbi Main Market Road, Kebbi',
    phone: '+234 803 000 0003',
    hours: 'Mon–Fri: 8am–5pm | Sat: 9am–2pm',
  },
  {
    state: 'Zamfara',
    address: 'Ibrahim Aliyu Way, Gusau, Zamfara',
    phone: '+234 803 000 0004',
    hours: 'Mon–Fri: 8am–5pm | Sat: 9am–2pm',
  },
]

const comingSoon = ['Kaduna', 'Kano', 'Abuja']

export default function Branches() {
  return (
    <section id="branches" className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #061c12 0%, #0a4a2e 30%, #061c12 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rima-gold/30 to-transparent" />
      <div className="absolute inset-0 pattern-overlay pointer-events-none opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-rima-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Find Us · Nemi Mu
          </span>
          <h2 className="section-title mb-4">
            Branches Across<br />
            <span className="gold-text">Northern Nigeria</span>
          </h2>
          <div className="divider-gold" />
          <p className="text-white/60 text-base max-w-xl mx-auto mt-4">
            Headquartered in Gwaranyo, Sokoto State since 1992. Expanding to Kaduna, Kano, and Abuja in Year 1.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {branches.map(b => (
            <div key={b.state} className="card-glass p-6">
              <div className="inline-flex items-center gap-1.5 bg-rima-gold/15 border border-rima-gold/30 rounded-full px-3 py-1 mb-4">
                <MapPin size={12} className="text-rima-gold" />
                <span className="text-rima-gold text-xs font-bold">{b.state}</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">{b.address}</p>
              <div className="flex flex-col gap-2 border-t border-rima-gold/15 pt-4">
                <div className="flex items-center gap-2 text-white/50 text-xs">
                  <Phone size={12} className="text-rima-gold/70" />{b.phone}
                </div>
                <div className="flex items-start gap-2 text-white/50 text-xs">
                  <Clock size={12} className="text-rima-gold/70 mt-0.5 flex-shrink-0" />{b.hours}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon */}
        <div className="card-glass p-5 flex flex-wrap items-center gap-4 mb-10">
          <div className="flex items-center gap-2 text-rima-gold">
            <MapPin size={16} />
            <span className="font-semibold text-sm">Expanding in Year 1:</span>
          </div>
          <div className="flex gap-3">
            {comingSoon.map(city => (
              <span key={city} className="bg-rima-gold/10 border border-rima-gold/20 text-rima-gold/70 text-xs px-3 py-1 rounded-full font-semibold">
                {city} — Coming Soon
              </span>
            ))}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="rounded-2xl border border-rima-gold/20 overflow-hidden h-56 bg-rima-green-mid/30 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={36} className="text-rima-gold mx-auto mb-3 animate-bounce" />
            <p className="text-rima-gold font-semibold">Interactive Map Coming Soon</p>
            <p className="text-white/50 text-sm mt-1">Find your nearest Rima MFB branch</p>
          </div>
        </div>
      </div>
    </section>
  )
}
