import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, Suspense, lazy } from 'react'
import WhatsAppButton        from './components/WhatsAppButton'
import CookieBanner          from './components/CookieBanner'
import BackToTop             from './components/BackToTop'
import { PageLoader }        from './components/Skeleton'

const HomePage              = lazy(() => import('./pages/HomePage'))
const ServicesPage          = lazy(() => import('./pages/ServicesPage'))
const AboutPage             = lazy(() => import('./pages/AboutPage'))
const PersonalPage          = lazy(() => import('./pages/PersonalPage'))
const BusinessPage          = lazy(() => import('./pages/BusinessPage'))
const LoansPage             = lazy(() => import('./pages/LoansPage'))
const ContactPage           = lazy(() => import('./pages/ContactPage'))
const SuccessStoriesPage    = lazy(() => import('./pages/SuccessStoriesPage'))
const LoanApplicationPage   = lazy(() => import('./pages/LoanApplicationPage'))
const OpenAccountPage       = lazy(() => import('./pages/OpenAccountPage'))
const ShariahPage           = lazy(() => import('./pages/ShariahPage'))
const CareersPage           = lazy(() => import('./pages/CareersPage'))
const FinancialLiteracyPage = lazy(() => import('./pages/FinancialLiteracyPage'))
const PrivacyPage           = lazy(() => import('./pages/PrivacyPage'))

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
        <Suspense fallback={<PageLoader />}>
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
            <Route path="/privacy"           element={<PrivacyPage />} />
            <Route path="*"                  element={<HomePage />} />
          </Routes>
        </Suspense>
        <WhatsAppButton />
        <BackToTop />
        <CookieBanner />
      </div>
    </BrowserRouter>
  )
}
