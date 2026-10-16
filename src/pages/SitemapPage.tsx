import { Link } from 'react-router-dom';
import { MapPin, Zap, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import FinalCTA from '@/components/FinalCTA';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { localBusinessSchema } from '@/components/StructuredData';

export default function SitemapPage() {
  const mainPages = [
    { title: 'Home', path: '/', description: 'Nobles Electrical Services homepage with overview of services, service areas, and company information.' },
    { title: 'All Services', path: '/services', description: 'Directory of all residential and commercial electrical services offered in Zachary, LA and surrounding areas.' },
    { title: 'Service Areas', path: '/service-areas', description: 'Communities we serve throughout Louisiana with local service details.' },
    { title: 'Customer Reviews', path: '/reviews', description: 'Read all 30 verified 5-star Google reviews from homeowners and businesses.' },
    { title: 'About Us', path: '/about', description: 'Learn about Nobles Electrical Services, our standards, experience, and commitment to electrical safety.' },
    { title: 'Contact Us', path: '/contact', description: 'Get in touch for quotes, service inquiries, and appointments.' },
    { title: 'Frequently Asked Questions (FAQs)', path: '/faqs', description: 'Answers to common questions about our electrical repairs, panel work, and service process.' },
    { title: 'HTML Sitemap Directory', path: '/sitemap', description: 'Visitor navigation directory linking to all services, service areas, reviews, and company information.' },
  ];

  return (
    <>
      <SEO
        title="HTML Sitemap & Site Directory | Nobles Electrical Services"
        description="Helpful visitor HTML sitemap for Nobles Electrical Services. Complete navigation directory of all residential, commercial, and local Louisiana service area pages. For search engine crawlers, view our XML sitemap."
        canonicalPath="sitemap"
        structuredData={localBusinessSchema}
      />

      <Breadcrumbs crumbs={[{ label: 'Sitemap' }]} />

      {/* Hero */}
      <section className="bg-navy-950 py-12 lg:py-16 text-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <FileText className="h-3.5 w-3.5" />
              Visitor Site Directory
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Website Sitemap &amp; Navigation Directory
            </h1>
            <p className="mt-4 text-base text-graphite-200 sm:text-lg">
              A helpful visual directory for visitors to quickly browse all electrical services, local service areas, and customer resources on {business.name}.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-graphite-300">
              <span className="font-semibold text-amber-400">Search Engine Crawlers:</span>
              <span>This is an HTML directory for human visitors. For our machine-readable search engine index, access the</span>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="font-bold text-amber-400 underline hover:text-amber-300">
                XML Sitemap (/sitemap.xml) &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sitemap Sections */}
      <section className="section-pad bg-white">
        <div className="container-x space-y-16">
          {/* Main Pages */}
          <div>
            <div className="flex items-center gap-3 border-b border-graphite-200 pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-amber-500">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900">Main Pages</h2>
                <p className="text-xs text-graphite-500">Core company and resource pages</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mainPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="card-hover group flex flex-col justify-between rounded-xl border border-graphite-100 bg-graphite-50 p-5 transition-all hover:border-amber-400/40 hover:bg-white"
                >
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-900 group-hover:text-amber-600 transition-colors">
                      {page.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-graphite-600">
                      {page.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-amber-600">
                    <span>Visit Page</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Service Pages */}
          <div>
            <div className="flex items-center gap-3 border-b border-graphite-200 pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-amber-500">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900">Electrical Services (10 Services)</h2>
                <p className="text-xs text-graphite-500">Dedicated pages for our electrical solutions</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className="card-hover group flex flex-col justify-between rounded-xl border border-graphite-100 bg-white p-5 transition-all hover:border-amber-400/40 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {s.shortTitle}
                    </div>
                    <h3 className="mt-2 font-display text-base font-bold text-navy-900 group-hover:text-amber-600 transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-graphite-600">
                      {s.summary}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-amber-600">
                    <span>/{s.slug}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Location / Service Area Pages */}
          <div>
            <div className="flex items-center gap-3 border-b border-graphite-200 pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 text-amber-500">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900">Communities &amp; Service Areas (10 Areas)</h2>
                <p className="text-xs text-graphite-500">Localized pages across Louisiana</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  to={`/${loc.serviceSlug}-${loc.slug}`}
                  className="card-hover group flex flex-col justify-between rounded-xl border border-graphite-100 bg-white p-5 transition-all hover:border-amber-400/40 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600">
                      <MapPin className="h-3.5 w-3.5" />
                      {loc.city}, {loc.stateAbbr}
                    </div>
                    <h3 className="mt-2 font-display text-base font-bold text-navy-900 group-hover:text-amber-600 transition-colors">
                      {loc.h1}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-graphite-600">
                      {loc.intro.slice(0, 110)}...
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-amber-600">
                    <span>/{loc.serviceSlug}-{loc.slug}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
