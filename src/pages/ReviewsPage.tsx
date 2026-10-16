import { Star, ShieldCheck, Award, ThumbsUp, ExternalLink, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CallCTA from '@/components/CallCTA';
import FinalCTA from '@/components/FinalCTA';
import ReviewsSection from '@/components/ReviewsSection';
import { business } from '@/data/business';
import { reviewsSummary } from '@/data/reviews';
import { localBusinessSchema } from '@/components/StructuredData';

export default function ReviewsPage() {
  return (
    <>
      <SEO
        title={`Customer Reviews | 5.0 Stars (30 Google Reviews) | ${business.name}`}
        description={`Read all 30 verified 5-star Google reviews for Nobles Electrical Services in Zachary, LA. Discover why homeowners, home inspectors, and realtors trust Mickel Nobles for repairs, panels, and wiring.`}
        canonicalPath="reviews"
        structuredData={localBusinessSchema}
      />

      <Breadcrumbs crumbs={[{ label: 'Reviews' }]} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 py-16 lg:py-24 text-white">
        {/* Background glow */}
        <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-navy-700/30 blur-3xl" />

        <div className="container-x relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-300">
              <Star className="h-3.5 w-3.5 fill-amber-300" />
              Verified Google Customer Reviews
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-balance">
              What Our Customers Say About Us
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite-200 text-balance">
              Read genuine, unfiltered Google reviews from homeowners, business owners, licensed realtors, and home inspectors who have experienced our promptness, honest pricing, and high quality electrical work.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row items-stretch sm:items-center">
              <CallCTA variant="primary" label={`Call ${business.phone}`} className="px-8 py-4 text-base" />
              <a
                href={business.mapsListing}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-4 text-base"
              >
                Write a Review on Google
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="border-b border-graphite-200 bg-white py-8">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
            <div className="p-4">
              <div className="font-display text-4xl font-extrabold text-navy-900">5.0 / 5.0</div>
              <div className="mt-1 flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-graphite-500">
                Average Rating
              </p>
            </div>

            <div className="p-4">
              <div className="font-display text-4xl font-extrabold text-navy-900">30</div>
              <p className="mt-2 text-sm font-bold text-navy-800">Verified Reviews</p>
              <p className="text-xs text-graphite-500">On Google Maps</p>
            </div>

            <div className="p-4">
              <div className="font-display text-4xl font-extrabold text-emerald-600">100%</div>
              <p className="mt-2 text-sm font-bold text-navy-800">5-Star Satisfaction</p>
              <p className="text-xs text-graphite-500">Zero Negative Reviews</p>
            </div>

            <div className="p-4">
              <div className="font-display text-4xl font-extrabold text-amber-500">Top</div>
              <p className="mt-2 text-sm font-bold text-navy-800">Local Electrician</p>
              <p className="text-xs text-graphite-500">Zachary, LA &amp; Surrounds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials Spotlight */}
      <section className="section-pad bg-navy-900 text-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-amber-400">
              Professional Endorsements
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl text-balance">
              Trusted by Local Inspectors &amp; Real Estate Agents
            </h2>
            <p className="mt-4 text-base text-graphite-300">
              When industry professionals who inspect and sell homes choose an electrician, their endorsement speaks volumes.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Inspector */}
            <div className="rounded-2xl border border-navy-800 bg-navy-950/80 p-8 shadow-xl">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-graphite-200 italic">
                &ldquo;I highly recommend Nobles Electrical Services. Mickel is so knowledgeable, ethical, and he makes sure the job is done correctly. I'm a home inspector and I don't hesitate to refer my clients to him for repairs or upgrades. I've also used his services personally.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-navy-800 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-navy-950 font-bold">
                  RM
                </div>
                <div>
                  <div className="font-display font-bold text-white">Ryan McNabb</div>
                  <div className="text-xs text-amber-400 font-medium">Home Inspector · 9 Google Reviews</div>
                </div>
              </div>
            </div>

            {/* Realtor */}
            <div className="rounded-2xl border border-navy-800 bg-navy-950/80 p-8 shadow-xl">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-graphite-200 italic">
                &ldquo;As a licensed real estate agent, trust worthy referrals are important. Nobles Electric is my Geaux to for all of my clients needs for electrical work. Highly recommend.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-navy-800 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-navy-950 font-bold">
                  TW
                </div>
                <div>
                  <div className="font-display font-bold text-white">Tammy Jo Williams</div>
                  <div className="text-xs text-amber-400 font-medium">Licensed Real Estate Agent · 2 Google Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Reviews Component with All 30 Reviews */}
      <ReviewsSection
        initialCount={30}
        showFilters={true}
        title="All 30 Verified Google Reviews"
        subtitle="Filter by customer keywords or browse every review we have received on Google."
      />

      <FinalCTA />
    </>
  );
}
