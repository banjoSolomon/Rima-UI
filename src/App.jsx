import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import HomePage              from './pages/HomePage'
import ServicesPage          from './pages/ServicesPage'
import AboutPage             from './pages/AboutPage'
import PersonalPage          from './pages/PersonalPage'
import BusinessPage          from './pages/BusinessPage'
import LoansPage             from './pages/LoansPage'
import ContactPage           from './pages/ContactPage'
import SuccessStoriesPage    from './pages/SuccessStoriesPage'
import LoanApplicationPage   from './pages/LoanApplicationPage'
import OpenAccountPage       from './pages/OpenAccountPage'
import ShariahPage           from './pages/ShariahPage'
import CareersPage           from './pages/CareersPage'
import FinancialLiteracyPage from './pages/FinancialLiteracyPage'
import WhatsAppButton        from './components/WhatsAppButton'
import CookieBanner          from './components/CookieBanner'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-rima-dark font-body">
        <ScrollToTop />
        <Routes>
          <Route path="/"                  element={<HomePage />} />
          <Route path="/services"          element={<ServicesPage />} />
          <Route path="/about"             element={<AboutPage />} />
          <Route path="/personal"          element={<PersonalPage />} />
          <Route path="/business"          element={<BusinessPage />} />
          <Route path="/loans"             element={<LoansPage />} />
          <Route path="/loans/apply"       element={<LoanApplicationPage />} />
          <Route path="/open-account"      element={<OpenAccountPage />} />
          <Route path="/contact"           element={<ContactPage />} />
          <Route path="/success-stories"   element={<SuccessStoriesPage />} />
          <Route path="/shariah"           element={<ShariahPage />} />
          <Route path="/careers"           element={<CareersPage />} />
          <Route path="/learn"             element={<FinancialLiteracyPage />} />
          <Route path="*"                  element={<HomePage />} />
        </Routes>
        <WhatsAppButton />
        <CookieBanner />
      </div>
    </BrowserRouter>
  )
}
