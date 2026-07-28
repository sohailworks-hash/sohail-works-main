import { Phone, MessageCircle } from 'lucide-react';
import { STUDIO } from '@/data/studio';

/**
 * Persistent floating call + WhatsApp buttons, bottom-right.
 * Preserved from the original site with a cleaner, modern look.
 */
export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`tel:${STUDIO.phoneRaw}`}
        aria-label="Call Sohail Studio"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white shadow-[0_8px_24px_rgba(37,99,235,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(37,99,235,0.7)]"
      >
        <Phone className="h-5 w-5" />
        <span className="absolute right-14 hidden whitespace-nowrap rounded-lg bg-ink-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-card transition-opacity duration-300 group-hover:opacity-100 sm:block">
          Call now
        </span>
      </a>
      <a
        href={`https://wa.me/${STUDIO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Sohail Studio"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(37,211,102,0.7)]"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-30" />
        <MessageCircle className="relative h-5 w-5" />
        <span className="absolute right-14 hidden whitespace-nowrap rounded-lg bg-ink-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-card transition-opacity duration-300 group-hover:opacity-100 sm:block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
