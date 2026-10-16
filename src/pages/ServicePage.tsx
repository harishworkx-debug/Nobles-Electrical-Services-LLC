import { Navigate, Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import {
  ArrowRight, CheckCircle2, ChevronRight, Star, Shield,
  DollarSign, AlertTriangle, MapPin, Phone, MessageSquare,
} from 'lucide-react';
import SEO from '@/components/SEO';
import CallCTA from '@/components/CallCTA';
import FinalCTA from '@/components/FinalCTA';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import ServiceCard from '@/components/ServiceCard';
import { business } from '@/data/business';
import { services, ServiceData } from '@/data/services';
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/components/StructuredData';

export default function ServicePage({ serviceSlug }: { serviceSlug?: string }) {
  const slug = serviceSlug;
  const service = services.find((s) => s.slug === slug) as ServiceData | undefined;

  if (!service) return <Navigate to="/services" replace />;

  const crumbs = [
    { label: 'Services', path: '/services' },
    { label: service.shortTitle, path: `/${service.slug}` },
  ];

  const structuredData = [
    serviceSchema(service.title, `/${service.slug}`, service.metaDescription),
    faqSchema(service.faqs),
    breadcrumbSchema(crumbs),
  ];

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={service.slug}
        ogImage={service.image}
        structuredData={structuredData}
      />

      <Breadcrumbs crumbs={crumbs} />

      {/* 1. Hero Section with Service-Specific H1 */}
      <section className="relative overflow-hidden bg-navy-950 py-14 lg:py-22">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/95 to-navy-900/60" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <MapPin className="h-3.5 w-3.5" />
              {business.primaryCity}, {business.primaryStateAbbr} &amp; Surrounding Parishes
            </div>

            <h1 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl text-balance">
              {service.h1}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite-200 text-balance">
              {service.summary}
            </p>

            {/* Click-to-call and Estimate Request CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row items-stretch sm:items-center">
              <CallCTA variant="primary" label={`Call ${business.phone}`} className="px-8 py-4 text-base" />
              <Link to="/contact" className="btn-secondary px-8 py-4 text-base">
                Request an Estimate
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Google Rating Trust Badge */}
            <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-display text-sm font-bold text-white">5.0 Star Rating</span>
              <span className="text-graphite-400">·</span>
              <Link to="/reviews" className="text-xs font-medium text-amber-300 hover:text-amber-200 underline underline-offset-4">
                30 Verified Google Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview & Common Electrical Problems */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Service Overview</span>
              <h2 className="mt-2 font-display text-2xl font-bold text-navy-900 sm:text-3xl text-balance">
                Professional {service.shortTitle} in {business.primaryCity}, LA
              </h2>
              <p className="mt-4 text-base leading-relaxed text-graphite-600">{service.intro}</p>

              {/* Common Electrical Problems We Address */}
              <div className="mt-10 rounded-2xl border border-graphite-200/80 bg-graphite-50 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">
                      Common Electrical Problems We Address
                    </h3>
                    <p className="text-xs text-graphite-500">
                      Symptoms that indicate your system needs professional attention:
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3.5">
                  {service.commonIssues.map((issue, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                      <span className="text-sm text-graphite-700 leading-snug">{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl shadow-xl shadow-navy-900/15">
                <img
                  src={service.galleryImages[0]?.url || service.image}
                  alt={service.galleryImages[0]?.alt || service.imageAlt}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
              </div>

              {/* Quick Contact & Estimate Card */}
              <div className="mt-6 rounded-2xl bg-navy-900 p-6 text-white shadow-xl">
                <h3 className="font-display text-lg font-bold">Need {service.shortTitle}?</h3>
                <p className="mt-2 text-sm text-graphite-300">
                  Speak directly with Mickel Nobles. Fast dispatch throughout Zachary and surrounding areas.
                </p>
                <div className="mt-5">
                  <CallCTA variant="primary" label={`Call ${business.phone}`} className="w-full justify-center" />
                </div>
                <Link
                  to="/contact"
                  className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300"
                >
                  Or Request Online Estimate
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Main City Page Quick Link */}
              <div className="mt-6 rounded-2xl border border-graphite-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
                  <MapPin className="h-4 w-4" />
                  Local Service Area
                </div>
                <h4 className="mt-1 font-display text-base font-bold text-navy-900">
                  Based in Zachary, Louisiana
                </h4>
                <p className="mt-1.5 text-xs text-graphite-600 leading-relaxed">
                  We are headquartered in Zachary, LA, serving homeowners and businesses locally with rapid response.
                </p>
                <Link
                  to="/electrician-zachary-la"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-navy-900 hover:text-amber-600 transition-colors"
                >
                  Visit our Zachary Electrician Page
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Verified Customer Feedback Card */}
              <div className="mt-6 rounded-2xl border border-graphite-200/80 bg-graphite-50 p-5 shadow-sm">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 text-xs font-bold text-navy-900">5.0 / 5.0 Rating</span>
                </div>
                <p className="mt-2.5 text-xs italic text-graphite-700 leading-relaxed">
                  &ldquo;{service.testimonial.quote}&rdquo;
                </p>
                <div className="mt-3 flex items-center justify-between border-t border-graphite-200 pt-2.5">
                  <div>
                    <span className="block text-[11px] font-bold text-navy-900">{service.testimonial.author}</span>
                    <span className="text-[10px] text-graphite-500">{service.testimonial.role}</span>
                  </div>
                  <Link to="/reviews" className="text-[11px] font-semibold text-amber-600 hover:text-amber-500">
                    30 Reviews &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Available Solutions (What We Handle) */}
      <section className="section-pad bg-graphite-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Available Solutions</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Solutions We Provide for {service.shortTitle}
            </h2>
            <p className="mt-4 text-base text-graphite-600">
              Targeted, code-compliant solutions engineered for safety and durability.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {service.needs.map((need, i) => {
              const Icon = (Icons[need.icon as keyof typeof Icons] || Icons.Zap) as Icons.LucideIcon;
              return (
                <div key={i} className="rounded-2xl border border-graphite-200/80 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{need.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite-600">{need.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. How the Work is Performed (Service Process) */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Our Service Process</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              How the Work is Performed
            </h2>
            <p className="mt-4 text-base text-graphite-600">
              Our systematic approach guarantees safety, code compliance, and complete peace of mind.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <div key={i} className="relative rounded-2xl border border-graphite-200/80 bg-graphite-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-amber-500 font-display text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite-600">{step.description}</p>
                {i < service.process.length - 1 && (
                  <ChevronRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-graphite-300 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What Affects Cost & 6. Safety Considerations */}
      <section className="section-pad bg-graphite-50 border-y border-graphite-200/60">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* What Affects Cost */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700">
                  <DollarSign className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Pricing Transparency</span>
                  <h2 className="font-display text-2xl font-bold text-navy-900">
                    What Affects the Cost?
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-graphite-600">
                We believe in upfront, transparent pricing without hidden surprises. For {service.shortTitle.toLowerCase()} in the Zachary area, the primary factors influencing project cost include:
              </p>
              <div className="mt-6 space-y-4">
                {service.costFactors.map((factor, i) => (
                  <div key={i} className="rounded-xl border border-graphite-200/80 bg-white p-4 shadow-sm">
                    <h3 className="font-display text-sm font-bold text-navy-900">{factor.title}</h3>
                    <p className="mt-1 text-xs text-graphite-600 leading-relaxed">{factor.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Considerations */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-amber-500">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Electrical Safety</span>
                  <h2 className="font-display text-2xl font-bold text-navy-900">
                    Safety Considerations &amp; Code
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-graphite-600">
                Electrical work carries inherent risks of fire and electrocution if performed improperly. Our work adheres strictly to the National Electrical Code (NEC):
              </p>
              <div className="mt-6 space-y-4">
                {service.safetyConsiderations.map((safety, i) => (
                  <div key={i} className="rounded-xl border border-graphite-200/80 bg-white p-4 shadow-sm">
                    <h3 className="font-display text-sm font-bold text-navy-900">{safety.title}</h3>
                    <p className="mt-1 text-xs text-graphite-600 leading-relaxed">{safety.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Actual Project Photos Gallery */}
      {service.galleryImages.length > 0 && (
        <section className="section-pad bg-white">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Workmanship Gallery</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
                Our Work in the Field
              </h2>
              <p className="mt-4 text-base text-graphite-600">
                A look at actual electrical installations, panel work, and wiring projects.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {service.galleryImages.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-2xl shadow-xl shadow-navy-900/10">
                  <img
                    src={img.url}
                    alt={img.alt}
                    loading="lazy"
                    className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="p-3 bg-graphite-50 text-xs text-graphite-600 text-center border-t border-graphite-100">
                    {img.alt}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Relevant Customer FAQs */}
      <section className="section-pad bg-graphite-50">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Frequently Asked Questions</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              {service.shortTitle} FAQs
            </h2>
            <p className="mt-4 text-base text-graphite-600">
              Clear answers to the most common questions our Zachary customers ask.
            </p>
          </div>
          <div className="mt-10 max-w-3xl mx-auto">
            <FAQAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* 9. Main City Page & Service Area Connection Banner */}
      <section className="bg-navy-900 py-12 text-white">
        <div className="container-x">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <MapPin className="h-4 w-4" />
                Serving Zachary, LA &amp; Surrounding Communities
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold">
                Looking for a Trusted Electrician in Zachary, Louisiana?
              </h3>
              <p className="mt-2 text-sm text-graphite-300 max-w-xl">
                Nobles Electrical Services is proud to call Zachary home. Explore our local services, community coverage, and local customer reviews.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/electrician-zachary-la"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-semibold text-navy-950 transition-all hover:bg-amber-400"
              >
                Zachary, LA Electrician Page
                <ArrowRight className="h-4 w-4" />
              </Link>
              <CallCTA variant="secondary" label={`Call ${business.phone}`} />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Related Services (Internal Linking) */}
      <section className="section-pad bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-600">Explore More Services</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-900 sm:text-4xl text-balance">
              Related Electrical Services
            </h2>
            <p className="mt-4 text-base text-graphite-600">
              Frequently requested alongside {service.shortTitle.toLowerCase()} in Zachary, LA.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.relatedServices.map((relSlug) => (
              <ServiceCard key={relSlug} slug={relSlug} compact />
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <FinalCTA />
    </>
  );
}
