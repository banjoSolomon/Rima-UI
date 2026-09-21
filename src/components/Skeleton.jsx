// Reusable skeleton shimmer component

function Shimmer({ className = '' }) {
  return (
    <div
      className={`relative overflow-hidden bg-white/5 rounded-lg ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmerSlide_1.5s_infinite]
                      bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </div>
  )
}

// Generic card skeleton
export function CardSkeleton({ lines = 3 }) {
  return (
    <div className="card-glass p-6 flex flex-col gap-3">
      <Shimmer className="w-10 h-10 rounded-xl" />
      <Shimmer className="h-5 w-3/4" />
      <Shimmer className="h-3 w-1/2" />
      {[...Array(lines)].map((_, i) => (
        <Shimmer key={i} className={`h-3 ${i === lines - 1 ? 'w-2/3' : 'w-full'}`} />
      ))}
    </div>
  )
}

// Hero skeleton
export function HeroSkeleton() {
  return (
    <div className="min-h-screen bg-green-gradient flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 w-full">
        <div className="flex flex-col gap-5">
          <Shimmer className="h-6 w-48 rounded-full" />
          <Shimmer className="h-16 w-full" />
          <Shimmer className="h-16 w-4/5" />
          <Shimmer className="h-5 w-full" />
          <Shimmer className="h-5 w-3/4" />
          <div className="flex gap-4 mt-3">
            <Shimmer className="h-12 w-40 rounded-full" />
            <Shimmer className="h-12 w-40 rounded-full" />
          </div>
        </div>
        <div className="flex justify-center">
          <Shimmer className="w-80 h-80 rounded-3xl" />
        </div>
      </div>
    </div>
  )
}

// Service grid skeleton
export function ServicesSkeleton() {
  return (
    <div className="py-24 bg-rima-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center gap-3">
          <Shimmer className="h-4 w-32" />
          <Shimmer className="h-10 w-72" />
          <Shimmer className="h-1 w-20" />
          <Shimmer className="h-4 w-96 max-w-full" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[...Array(8)].map((_, i) => <CardSkeleton key={i} lines={2} />)}
        </div>
      </div>
    </div>
  )
}

// Page hero skeleton (inner pages)
export function PageHeroSkeleton() {
  return (
    <div className="relative pt-36 pb-20 bg-green-gradient">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-4">
        <Shimmer className="h-4 w-40 rounded-full" />
        <Shimmer className="h-14 w-80 max-w-full" />
        <Shimmer className="h-1 w-20" />
        <Shimmer className="h-4 w-[500px] max-w-full" />
        <Shimmer className="h-4 w-96 max-w-full" />
      </div>
    </div>
  )
}

// Testimonial skeleton
export function TestimonialSkeleton() {
  return (
    <div className="card-glass p-6 flex flex-col gap-4">
      <Shimmer className="h-5 w-8" />
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => <Shimmer key={i} className="w-4 h-4 rounded" />)}
      </div>
      <Shimmer className="h-4 w-full" />
      <Shimmer className="h-4 w-5/6" />
      <Shimmer className="h-4 w-4/5" />
      <div className="h-px bg-rima-gold/10" />
      <div className="flex items-center gap-3">
        <Shimmer className="w-10 h-10 rounded-full flex-shrink-0" />
        <div className="flex flex-col gap-1.5 flex-1">
          <Shimmer className="h-3.5 w-32" />
          <Shimmer className="h-3 w-24" />
        </div>
      </div>
    </div>
  )
}

// Page loader — full screen
export function PageLoader() {
  return (
    <div className="min-h-screen bg-rima-dark flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Animated logo placeholder */}
        <div className="w-16 h-16 rounded-2xl bg-rima-green-mid border-2 border-rima-gold/40
                        flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 animate-[shimmerSlide_1.5s_infinite]
                          bg-gradient-to-r from-transparent via-rima-gold/20 to-transparent -translate-x-full" />
          <span className="font-display font-bold text-rima-gold text-xs">RIMA</span>
        </div>
        <div className="flex gap-1.5">
          {[0,1,2].map(i => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-rima-gold animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
        <p className="text-white/30 text-xs">Loading Rima MFB...</p>
      </div>
    </div>
  )
}
