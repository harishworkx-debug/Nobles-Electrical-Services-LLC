import { Navigate, Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle2, Star, Clock, Zap, ShieldCheck, Wrench } from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import FinalCTA from '@/components/FinalCTA';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import { business } from '@/data/business';
import { locations, LocationData } from '@/data/locations';
import { services } from '@/data/services';
import { breadcrumbSchema, faqSchema } from '@/components/StructuredData';

export default function LocationPage({ locSlug }: { locSlug?: string }) {
  const location = locations.find((l) => `${l.serviceSlug}-${l.slug}` === locSlug) as LocationData | undefined;

  if (!location) return <Navigate to="/service-areas" replace />;

  const currentService = services.find((s) => s.slug === location.serviceSlug || s.baseSlug === location.serviceSlug);
  const pagePath = `/${location.serviceSlug}-${location.slug}`;

  const crumbs = [
    { label: 'Service Areas', path: '/service-areas' },
    { label: `${location.city}, ${location.stateAbbr}`, path: pagePath },
  ];

  const structuredData = [breadcrumbSchema(crumbs), faqSchema(location.faqs)];

  return (
    <>
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        canonicalPath={`${location.serviceSlug}-${location.slug}`}
        ogImage={location.image}
        structuredData={structuredData}
      />

      <Breadcrumbs crumbs={crumbs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 py-14 lg:py-20">
        <img
          src={location.image}
          alt={location.imageAlt}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-900/60" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <MapPin className="h-3.5 w-3.5" />
              {location.city}, {location.stateAbbr}
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl text-balance">
              {location.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite-200 text-balance">
              {location.intro}
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <CallCTA variant="primary" label={`Call ${business.phone}`} className="px-8 py-4 text-base" />
              <Link to="/contact" className="btn-secondary px-8 py-4 text-base">
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Dispatch Bar */}
      <section className="border-b border-graphite-200 bg-graphite-50 py-6">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-graphite-500">Parish Coverage</div>
                <div className="text-sm font-semibold text-navy-900">{location.parish}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-graphite-500">Dispatch Transparency</div>
                <div className="text-xs leading-relaxed text-graphite-700">Dispatched from Zachary, LA</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-graphite-500">Electric Utilities</div>
                <div className="text-xs font-semibold text-navy-900">{location.utilityProviders.join(', ')}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-graphite-500">Licensing &amp; Code</div>
                <div className="text-xs leading-relaxed text-graphite-700">Fully Licensed LA Electrician</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2">
              {/* Local Dispatch Transparency Box */}
              <div className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-5 text-sm text-navy-950">
                <div className="flex items-center gap-2 font-bold text-navy-900">
                  <CheckCircle2 className="h-4 w-4 text-amber-600" />
                  Confirmed Service Availability in {location.city}, {location.stateAbbr}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-graphite-700">
                  {location.dispatchInfo} We do not operate a fake branch office in {location.city}; our licensed technicians and fully equipped service trucks operate out of our permanent shop in Zachary, delivering honest pricing, direct accountability, and prompt response across {location.parish}.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl text-balance">
                  Electrical Infrastructure &amp; Challenges in {location.city}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-graphite-600">{location.localContext}</p>
              </div>

              {/* Local Challenges Cards */}
              <div className="mt-8 space-y-4">
                <h3 className="font-display text-lg font-bold text-navy-900">
                  Common Electrical Issues We Solve in {location.city}
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {location.localElectricalChallenges.map((challenge, idx) => (
                    <div key={idx} className="rounded-xl border border-graphite-200 bg-graphite-50/70 p-5">
                      <div className="flex items-center gap-2.5 font-display text-base font-bold text-navy-900">
                        <Wrench className="h-4 w-4 text-amber-600" />
                        {challenge.title}
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-graphite-600">
                        {challenge.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Most Requested Services */}
              <div className="mt-10 rounded-2xl border border-graphite-200 bg-white p-6 shadow-sm">
                <h3 className="font-display text-base font-bold text-navy-900">
                  Most Requested Electrical Services in {location.city}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {location.popularServicesInArea.map((svc, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1.5 rounded-lg bg-navy-50 px-3 py-1.5 text-xs font-semibold text-navy-900">
                      <CheckCircle2 className="h-3.5 w-3.5 text-amber-500" />
                      {svc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Electrical Services Directory */}
              <div className="mt-10">
                <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Available Electrical Solutions</span>
                <h3 className="mt-2 font-display text-2xl font-bold text-navy-900">
                  All Electrical Services Offered in {location.city}, {location.stateAbbr}
                </h3>
                <p className="mt-3 text-sm text-graphite-600">
                  Click any service below to explore complete diagnostic scopes, step-by-step processes, and upfront cost factors:
                </p>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/${s.slug}`}
                      className="flex items-center gap-3 rounded-xl border border-graphite-100 bg-white p-3.5 transition-all hover:border-navy-200 hover:shadow-md group"
                    >
                      <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-amber-500" />
                      <span className="text-sm font-medium text-navy-800 group-hover:text-amber-600 transition-colors">{s.shortTitle}</span>
                    </Link>
                  ))}
                </div>
                <div className="mt-6">
                  <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-500">
                    View Complete Services Overview
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="overflow-hidden rounded-2xl shadow-xl shadow-navy-900/15">
                <img
                  src={location.image}
                  alt={location.imageAlt}
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
              </div>

              {/* Nearby Communities We Also Serve */}
              <div className="mt-6 rounded-2xl border border-graphite-100 bg-white p-5">
                <h3 className="font-display text-base font-bold text-navy-900">Nearby Communities Served</h3>
                <ul className="mt-3 space-y-2">
                  {location.nearbyAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2 text-sm text-graphite-600">
                      <MapPin className="h-4 w-4 text-amber-500" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Card */}
              <div className="mt-6 rounded-2xl bg-navy-900 p-6">
                <h3 className="font-display text-lg font-bold text-white">Call an Electrician in {location.city}</h3>
                <p className="mt-2 text-xs text-graphite-300 leading-relaxed">
                  Technicians dispatched directly from Zachary. Call {business.phone} to schedule repairs or request an upfront estimate.
                </p>
                <div className="mt-4">
                  <CallCTA variant="primary" label={`Call ${business.phone}`} className="w-full" />
                </div>
                <Link
                  to="/contact"
                  className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300"
                >
                  Or Contact Us Online
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Customer Rating Card */}
              <div className="mt-6 rounded-2xl border border-graphite-100 bg-graphite-50 p-5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 text-xs font-bold text-navy-900">5.0 Star Electrician</span>
                </div>
                <p className="mt-2 text-xs text-graphite-600">
                  Rated 5.0 out of 5 across 30 verified Google reviews. Prompt, fairly priced, and dependable electrical service in {location.city} and surrounding communities.
                </p>
                <div className="mt-3">
                  <Link to="/reviews" className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 hover:text-amber-500">
                    Read Customer Reviews &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad bg-graphite-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">FAQs</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              {location.city} Electrical Service FAQs
            </h2>
          </div>
          <div className="mt-10">
            <FAQAccordion faqs={location.faqs} />
          </div>
        </div>
      </section>

      {/* Links back */}
      <section className="bg-navy-900 py-10">
        <div className="container-x">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/service-areas" className="text-sm font-semibold text-amber-400 hover:text-amber-300">
                All Service Areas
              </Link>
              <span className="text-graphite-600">|</span>
              <Link to="/services" className="text-sm font-semibold text-amber-400 hover:text-amber-300">
                All Electrical Services
              </Link>
              <span className="text-graphite-600">|</span>
              <Link to="/contact" className="text-sm font-semibold text-amber-400 hover:text-amber-300">
                Contact Page
              </Link>
            </div>
            <CallCTA variant="primary" label={`Call ${business.phone}`} />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
