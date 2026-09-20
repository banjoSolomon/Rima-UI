import Navbar          from '../components/Navbar'
import Hero            from '../components/Hero'
import Partners        from '../components/Partners'
import RegulatoryTicker from '../components/RegulatoryTicker'
import Services        from '../components/Services'
import About           from '../components/About'
import DashboardDemo   from '../components/DashboardDemo'
import AppDownload     from '../components/AppDownload'
import Testimonials    from '../components/Testimonials'
import NewsSection     from '../components/NewsSection'
import FAQ             from '../components/FAQ'
import Newsletter      from '../components/Newsletter'
import Branches        from '../components/Branches'
import Contact         from '../components/Contact'
import Footer          from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <RegulatoryTicker />
        <Services />
        <About />
        <DashboardDemo />
        <AppDownload />
        <Testimonials />
        <NewsSection />
        <FAQ />
        <Newsletter />
        <Branches />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
