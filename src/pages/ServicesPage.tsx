import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Phone, Home, Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import FinalCTA from '@/components/FinalCTA';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceCard from '@/components/ServiceCard';
import { business, images } from '@/data/business';
import { services } from '@/data/services';
import { localBusinessSchema } from '@/components/StructuredData';

export default function ServicesPage() {
  const residentialServices = services.filter((s) => s.slug !== 'commercial-electrical-zachary-la');
  const commercialService = services.find((s) => s.slug === 'commercial-electrical-zachary-la');

  return (
    <>
      <SEO
        title="Residential & Commercial Electrical Services | Zachary, LA | Nobles Electrical"
        description="Comprehensive residential and commercial electrical services in Zachary, LA and surrounding areas. Troubleshooting, repairs, panel upgrades, wiring, lighting, EV chargers & safety inspections. Call 225-545-1284."
        canonicalPath="services"
        structuredData={localBusinessSchema}
      />

      <Breadcrumbs crumbs={[{ label: 'Services' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-24">
        <img
          src={images.heroPanel}
          alt="Residential and commercial electrical services in Zachary, LA"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/60" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <Zap className="h-3.5 w-3.5" />
              Full-Service Electrical Contractor
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl text-balance">
              Residential &amp; Commercial Electrical Services in Zachary, LA
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite-200 text-balance">
              From fast emergency repairs and 200A panel upgrades to tenant improvements and commercial lighting retrofits, Nobles Electrical Services delivers code-compliant, reliable electrical solutions across Zachary and Greater Baton Rouge.
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <CallCTA variant="primary" label={`Call ${business.phone}`} className="px-8 py-4 text-base" />
              <Link to="/contact" className="btn-secondary px-8 py-4 text-base">
                Request an Estimate
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Overview: Residential vs Commercial */}
      <section className="section-pad bg-graphite-50 border-b border-graphite-200/60">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Electrical Solutions</span>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Residential &amp; Commercial Electrical Overview
            </h2>
            <p className="mt-4 text-base text-graphite-600">
              Whether you are troubleshooting a tripped breaker at home or expanding power distribution in a commercial facility, we bring licensed expertise and meticulous craftsmanship to every job.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Residential Focus */}
            <div className="rounded-2xl border border-graphite-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                  <Home className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-900">Residential Electrical Services</h3>
                  <p className="text-xs text-graphite-500">Homeowners, Remodels, &amp; Rental Properties</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-graphite-600">
                Safe, dependable power for everyday living. We protect your home and family with thorough diagnostics, NEC code updates, modern breaker panels, and clean lighting installations.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  'Panel replacements, 200A service upgrades & surge protection',
                  'Flickering light, dead outlet & emergency circuit troubleshooting',
                  'Indoor recessed lighting, ceiling fans & outdoor security fixtures',
                  'Dedicated 240V circuits for EV chargers, HVAC & kitchen appliances',
                  'Comprehensive pre-purchase and real estate safety inspections',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-graphite-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-graphite-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-graphite-500">9 Core Residential Offerings</span>
                <a href="#all-services" className="text-xs font-bold text-amber-600 hover:text-amber-500 flex items-center gap-1">
                  Browse Residential Pages <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Commercial Focus */}
            <div className="rounded-2xl border border-graphite-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-amber-500">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-900">Commercial Electrical Services</h3>
                  <p className="text-xs text-graphite-500">Offices, Retail, Restaurants, &amp; Facilities</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-graphite-600">
                Dependable electrical distribution engineered to minimize downtime and keep your commercial property compliant, energy-efficient, and secure.
              </p>
              <ul className="mt-5 space-y-2.5">
                {[
                  'Light-commercial electrical maintenance & troubleshooting',
                  'Commercial breaker panel upgrades & subpanel distribution',
                  'LED commercial lighting conversions, high-bay & sign wiring',
                  'Dedicated power drops for point-of-sale, server racks & machinery',
                  'Emergency exit lighting, code corrections & safety compliance',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-graphite-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy-800" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-graphite-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-graphite-500">Dedicated Commercial Service</span>
                <Link to="/commercial-electrical-zachary-la" className="text-xs font-bold text-navy-900 hover:text-amber-600 flex items-center gap-1">
                  View Commercial Service Page <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section id="all-services" className="section-pad bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Complete Directory</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Explore All 10 Electrical Services
            </h2>
            <p className="mt-4 text-base text-graphite-600">
              Select any specialized service below to review detailed diagnostic scopes, common problems solved, step-by-step processes, and local Zachary, LA FAQs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} slug={s.slug} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
