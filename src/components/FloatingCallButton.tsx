import { Phone } from 'lucide-react';
import { business } from '@/data/business';

export default function FloatingCallButton() {
  return (
    <a
      href={business.phoneHref}
      id="floating-call-btn"
      aria-label={`Call Nobles Electrical Services at ${business.phone}`}
      className="floating-call-btn"
    >
      <span className="floating-call-icon">
        <Phone className="h-6 w-6" fill="currentColor" />
      </span>
      <span className="floating-call-label">Call Now</span>
      <span className="floating-call-number">{business.phone}</span>

      {/* Pulse ring animation */}
      <span className="floating-call-pulse" aria-hidden="true" />
    </a>
  );
}
