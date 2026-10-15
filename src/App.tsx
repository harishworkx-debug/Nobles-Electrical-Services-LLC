import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DynamicPage from '@/pages/DynamicPage';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

const HomePage = lazy(() => import('@/pages/HomePage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const ServiceAreasPage = lazy(() => import('@/pages/ServiceAreasPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const FAQsPage = lazy(() => import('@/pages/FAQsPage'));
const SitemapPage = lazy(() => import('@/pages/SitemapPage'));

function PageLoader() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-3 border-navy-200 border-t-amber-500" />
    </div>
  );
}

function ServiceRedirect() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const match = services.find((s) => s.baseSlug === serviceSlug || s.slug === serviceSlug);
  if (match) {
    return <Navigate to={`/${match.slug}`} replace />;
  }
  return <Navigate to={`/${serviceSlug || 'services'}`} replace />;
}

function ServiceAreaRedirect() {
  const { locationSlug } = useParams<{ locationSlug: string }>();
  const match = locations.find((l) => l.slug === locationSlug);
  if (match) {
    return <Navigate to={`/${match.serviceSlug}-${match.slug}`} replace />;
  }
  return <Navigate to="/service-areas" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceSlug" element={<ServiceRedirect />} />
              <Route path="/service-areas" element={<ServiceAreasPage />} />
              <Route path="/service-areas/:locationSlug" element={<ServiceAreaRedirect />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faqs" element={<FAQsPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="/:pageSlug" element={<DynamicPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
