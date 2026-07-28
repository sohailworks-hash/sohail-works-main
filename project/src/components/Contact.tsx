import { useState } from 'react';
import {
  Send,
  CheckCircle2,
  Loader2,
  AlertTriangle,
  Phone,
  MessageCircle,
  MapPin,
} from 'lucide-react';
import { STUDIO } from '@/data/studio';
import { SectionHeading } from '@/components/SectionHeading';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function Contact() {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setStatus('error');
      setErrorMsg('Please enter your name.');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    // Build the WhatsApp message (same shape as the original site).
    let text = `Hi, I'm ${name.trim()}.`;
    if (business.trim()) text += ` My business type: ${business.trim()}.`;
    if (message.trim()) text += ` ${message.trim()}`;
    const waUrl = `https://wa.me/${STUDIO.whatsapp}?text=${encodeURIComponent(text)}`;

    // Persist the inquiry so the studio owner has a record (best-effort,
    // non-blocking — the WhatsApp send is the primary UX).
    try {
      if (supabase) {
        await supabase.from('inquiries').insert({
          name: name.trim(),
          business_type: business.trim() || null,
          message: message.trim() || null,
          source: 'contact_form',
        });
      }
    } catch {
      // Logging failure must never block the WhatsApp handoff.
    }

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setStatus('sent');
    setName('');
    setBusiness('');
    setMessage('');
  };

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-cyan-glow/50 focus:ring-2 focus:ring-cyan-glow/20';

  return (
    <section id="contact" className="relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Get your website <span className="gradient-text">built</span>
            </>
          }
          subtitle="Fill this in and it goes straight to my WhatsApp — no waiting, no spam."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Form card */}
          <div className="reveal lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 shadow-card sm:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="cName" className="mb-2 block text-sm font-medium text-slate-300">
                    Name
                  </label>
                  <input
                    id="cName"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    required
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="cBusiness" className="mb-2 block text-sm font-medium text-slate-300">
                    Business Type
                  </label>
                  <input
                    id="cBusiness"
                    type="text"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    placeholder="e.g. Restaurant, Gym, Clinic"
                    className={inputClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="cMessage" className="mb-2 block text-sm font-medium text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="cMessage"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    rows={4}
                    className={`${inputClass} resize-y`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25d366] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(37,211,102,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(37,211,102,0.55)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Opening WhatsApp…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send on WhatsApp
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === 'sent' && (
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  WhatsApp opened with your message ready to send. I'll reply shortly!
                </div>
              )}
              {status === 'error' && (
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
                  <AlertTriangle className="h-4 w-4 shrink-0" />
                  {errorMsg || 'Something went wrong. Please try again.'}
                </div>
              )}
            </form>
          </div>

          {/* Info card */}
          <div className="reveal lg:col-span-2" style={{ transitionDelay: '120ms' }}>
            <div className="glass flex h-full flex-col gap-5 rounded-2xl p-6 shadow-card sm:p-8">
              <h3 className="font-display text-lg font-bold text-white">
                Prefer to reach out directly?
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                I'm based in {STUDIO.city} and work with businesses across the globe.
                Pick whatever's easiest for you.
              </p>

              <div className="mt-auto flex flex-col gap-3">
                <a
                  href={`tel:${STUDIO.phoneRaw}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm transition-all duration-300 hover:border-cyan-glow/40 hover:bg-white/10"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/20 text-brand-400">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">Call</span>
                    <span className="font-medium text-white">{STUDIO.phoneDisplay}</span>
                  </span>
                </a>

                <a
                  href={`https://wa.me/${STUDIO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/10"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#25d366]/20 text-[#25d366]">
                    <MessageCircle className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">WhatsApp</span>
                    <span className="font-medium text-white">{STUDIO.phoneDisplay}</span>
                  </span>
                </a>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-glow/20 text-cyan-glow">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">Location</span>
                    <span className="font-medium text-white">{STUDIO.city}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
