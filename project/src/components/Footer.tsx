import { Phone, MessageCircle } from 'lucide-react';
import { NAV_ITEMS, STUDIO } from '@/data/studio';

export function Footer() {
  const hireHref = `https://wa.me/${STUDIO.whatsapp}`;

  return (
    <footer className="relative border-t border-white/5 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-glow to-brand-500 font-display text-base font-extrabold text-ink-950">
                S
              </span>
              <span className="font-display text-base font-extrabold text-white">
                Sohail<span className="gradient-text"> Studio</span>
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-slate-400">
              Modern websites that help businesses grow — built with care, delivered fast.
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-400 transition-colors hover:text-cyan-glow"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${STUDIO.phoneRaw}`}
              aria-label="Call Sohail Studio"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-brand-400/50 hover:text-brand-400"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href={hireHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Sohail Studio"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-emerald-400/50 hover:text-[#25d366]"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>
            &copy; {STUDIO.year} Sohail Studio &mdash; {STUDIO.city}
          </p>
          <p>Crafted with care. Modern web, done right.</p>
        </div>
      </div>
    </footer>
  );
}
