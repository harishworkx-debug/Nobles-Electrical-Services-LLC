import { useState, useMemo } from 'react';
import { Star, CheckCircle, ExternalLink, MessageSquare, ShieldCheck, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { reviews, reviewsSummary, Review } from '@/data/reviews';
import { business } from '@/data/business';

interface ReviewsSectionProps {
  initialCount?: number;
  showFilters?: boolean;
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

// Google "G" multi-color SVG icon
function GoogleIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

// Generate consistent avatar background gradients based on author name
function getAvatarGradient(name: string): string {
  const gradients = [
    'from-amber-500 to-amber-700 text-white',
    'from-navy-700 to-navy-950 text-amber-400',
    'from-emerald-600 to-teal-800 text-white',
    'from-blue-600 to-indigo-800 text-white',
    'from-slate-700 to-slate-900 text-amber-300',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradients[Math.abs(hash) % gradients.length];
}

export default function ReviewsSection({
  initialCount = 6,
  showFilters = true,
  title = 'Real Reviews From Real Customers',
  subtitle = 'Discover why homeowners, property managers, realtors, and inspectors across Zachary and Louisiana consistently rate Nobles Electrical Services 5.0 out of 5 stars.',
  compact = false,
}: ReviewsSectionProps) {
  const [activeTag, setActiveTag] = useState<string>('all');
  const [expanded, setExpanded] = useState<boolean>(false);

  const filteredReviews = useMemo(() => {
    if (activeTag === 'all') return reviews;
    return reviews.filter((r) => r.tags.includes(activeTag));
  }, [activeTag]);

  const displayedReviews = expanded ? filteredReviews : filteredReviews.slice(0, initialCount);

  return (
    <section className="section-pad bg-graphite-50 relative overflow-hidden" id="reviews">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-navy-600/5 blur-3xl" />

      <div className="container-x relative">
        {/* Section Heading & Trust Scoreboard */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700">
            <GoogleIcon className="h-4 w-4" />
            Verified Google Reviews · 5.0 Rating
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy-900 sm:text-4xl lg:text-5xl text-balance">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-graphite-600 sm:text-lg text-balance">
            {subtitle}
          </p>
        </div>

        {/* Google Trust Banner Card */}
        <div className="mt-10 mx-auto max-w-4xl rounded-2xl border border-graphite-200/80 bg-white p-6 shadow-xl shadow-navy-900/5 sm:p-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {/* Left: Overall Rating */}
            <div className="flex items-center gap-5 text-center sm:text-left">
              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 border border-amber-500/20">
                <span className="font-display text-4xl font-extrabold text-navy-950">5.0</span>
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="mt-1 flex items-center justify-center sm:justify-start gap-1.5 text-sm font-bold text-navy-900">
                  <GoogleIcon className="h-4 w-4" />
                  <span>30 Google Reviews</span>
                  <span className="text-graphite-400 font-normal">· 100% 5-Star Rating</span>
                </div>
                <p className="text-xs text-graphite-500 mt-0.5">
                  100% authentic feedback from verified Louisiana customers
                </p>
              </div>
            </div>

            {/* Right: Write Review CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href={business.mapsListing}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-navy-800 hover:shadow-lg"
              >
                <GoogleIcon className="h-4 w-4" />
                Write a Review on Google
                <ExternalLink className="h-3.5 w-3.5 opacity-70" />
              </a>
              <a
                href={business.mapsListing}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl border border-graphite-200 bg-graphite-50 px-4 py-3 text-sm font-medium text-graphite-700 transition-colors hover:bg-white hover:text-navy-900"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Trust Value Badges */}
          <div className="mt-6 pt-6 border-t border-graphite-100 grid grid-cols-2 gap-3 sm:grid-cols-4 text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-graphite-700">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>100% 5-Star Track Record</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-graphite-700">
              <CheckCircle className="h-4 w-4 text-amber-500" />
              <span>Prompt &amp; Dependable</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-graphite-700">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span>Fair, Upfront Pricing</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-graphite-700">
              <MessageSquare className="h-4 w-4 text-amber-600" />
              <span>Clear Explanations</span>
            </div>
          </div>
        </div>

        {/* Filter Chips by Popular Google Topics */}
        {showFilters && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-graphite-500">
                Filter by Customer Mention ({reviewsSummary.reviewCount} total):
              </span>
              {activeTag !== 'all' && (
                <button
                  onClick={() => setActiveTag('all')}
                  className="text-xs font-semibold text-amber-600 hover:text-amber-500"
                >
                  Reset filter
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {reviewsSummary.reviewTags.map((tag) => {
                const isActive = activeTag === tag.id;
                return (
                  <button
                    key={tag.id}
                    onClick={() => {
                      setActiveTag(tag.id);
                      setExpanded(false);
                    }}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-navy-900 text-white shadow-sm ring-2 ring-navy-900'
                        : 'border border-graphite-200 bg-white text-graphite-700 hover:border-graphite-300 hover:bg-graphite-50'
                    }`}
                  >
                    <span>{tag.label}</span>
                    <span
                      className={`ml-1 rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                        isActive ? 'bg-amber-400 text-navy-950' : 'bg-graphite-100 text-graphite-600'
                      }`}
                    >
                      {tag.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedReviews.map((review: Review) => {
            const initials = review.author
              .split(' ')
              .map((n) => n[0])
              .slice(0, 2)
              .join('')
              .toUpperCase();

            return (
              <div
                key={review.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-graphite-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-xl hover:shadow-navy-900/5"
              >
                <div>
                  {/* Top: Avatar, Name, Stars, Time */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br font-display text-sm font-bold shadow-sm ${getAvatarGradient(
                          review.author
                        )}`}
                      >
                        {initials}
                      </div>
                      <div className="leading-tight">
                        <div className="font-display text-base font-bold text-navy-900 group-hover:text-amber-600 transition-colors">
                          {review.author}
                        </div>
                        <div className="text-xs text-graphite-500 line-clamp-1 mt-0.5">
                          {review.authorMeta}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 rounded-md bg-graphite-50 px-2 py-1 text-[11px] font-medium text-graphite-500">
                      <GoogleIcon className="h-3.5 w-3.5" />
                      <span>{review.timeAgo}</span>
                    </div>
                  </div>

                  {/* 5-Star Row */}
                  <div className="mt-3.5 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="ml-1.5 text-xs font-bold text-navy-900">5.0</span>
                    {review.isLocalGuide && (
                      <span className="ml-2 inline-flex items-center rounded bg-amber-50 px-1.5 py-0.5 text-[10px] font-bold text-amber-800">
                        Local Guide
                      </span>
                    )}
                  </div>

                  {/* Review Text */}
                  <div className="mt-3.5 text-sm leading-relaxed text-graphite-700">
                    <p className="whitespace-pre-line font-normal italic text-graphite-800">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Footer attributes: Positive tags and Services */}
                <div className="mt-4 pt-3.5 border-t border-graphite-100 space-y-2">
                  {review.positiveAttributes && review.positiveAttributes.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-graphite-400">
                        Positive:
                      </span>
                      {review.positiveAttributes.map((attr) => (
                        <span
                          key={attr}
                          className="rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-800 border border-emerald-200/50"
                        >
                          {attr}
                        </span>
                      ))}
                    </div>
                  )}

                  {review.servicesMentioned && review.servicesMentioned.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-graphite-400">
                        Services:
                      </span>
                      {review.servicesMentioned.slice(0, 3).map((svc) => (
                        <span
                          key={svc}
                          className="rounded-md bg-navy-50 px-2 py-0.5 text-[11px] font-medium text-navy-800 border border-navy-100"
                        >
                          {svc}
                        </span>
                      ))}
                      {review.servicesMentioned.length > 3 && (
                        <span className="text-[10px] text-graphite-500 font-medium">
                          +{review.servicesMentioned.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Expand / Show More Toggle */}
        {filteredReviews.length > initialCount && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 rounded-xl bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-navy-800 hover:shadow-lg"
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Show Fewer Reviews
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Show All {filteredReviews.length} Verified Reviews
                </>
              )}
            </button>
            <p className="mt-2 text-xs text-graphite-500">
              Showing {displayedReviews.length} of {filteredReviews.length} reviews
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
