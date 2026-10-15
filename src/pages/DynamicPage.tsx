import { useParams, Navigate } from 'react-router-dom';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import ServicePage from '@/pages/ServicePage';
import LocationPage from '@/pages/LocationPage';

export default function DynamicPage() {
  const { pageSlug } = useParams<{ pageSlug: string }>();

  if (!pageSlug) return <Navigate to="/" replace />;

  // Try service page first (slug matches exactly)
  const service = services.find((s) => s.slug === pageSlug);
  if (service) return <ServicePage serviceSlug={pageSlug} />;

  // If pageSlug matches a base service slug (e.g. electrical-installation), redirect to its location slug (e.g. electrical-installation-zachary-la)
  const baseService = services.find((s) => s.baseSlug === pageSlug);
  if (baseService) return <Navigate to={`/${baseService.slug}`} replace />;

  // Try location page (format: electrician-locationSlug, e.g. electrician-zachary-la)
  const location = locations.find((l) => `${l.serviceSlug}-${l.slug}` === pageSlug);
  if (location) return <LocationPage locSlug={pageSlug} />;

  // Support /electrical-<locationSlug> by redirecting to /electrician-<locationSlug>
  if (pageSlug.startsWith('electrical-')) {
    const locPart = pageSlug.replace(/^electrical-/, '');
    const locMatch = locations.find((l) => l.slug === locPart);
    if (locMatch) return <Navigate to={`/electrician-${locMatch.slug}`} replace />;
  }

  // Redirect any legacy service-area URLs (e.g. /electrical-panel-services-baker-la) to /electrician-<locationSlug>
  const legacyLoc = locations.find((l) => pageSlug.endsWith(`-${l.slug}`) && pageSlug !== `electrician-${l.slug}`);
  if (legacyLoc) return <Navigate to={`/electrician-${legacyLoc.slug}`} replace />;

  return <Navigate to="/" replace />;
}
