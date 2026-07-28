import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { STUDIO } from '@/data/studio';
import { PORTFOLIO } from '@/data/portfolio';
import { useCountUp } from '@/hooks/useCountUp';

type Stat = { value: number; suffix: string; label: string };

const STATS: Stat[] = [
  { value: 13, suffix: '', label: 'Live Demo Sites' },
  { value: 11, suffix: '+', label: 'Industries Covered' },
  { value: 5, suffix: '★', label: 'Client Rating' },
  { value: 100, suffix: '%', label: 'Responsive' },
];

function StatCard({ stat, delay }: { stat: Stat; delay: number }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div
      className="reveal group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-glow/40 hover:bg-white/[0.05]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        <span ref={ref} className="gradient-text">
          {value}
          {stat.suffix}
        </span>
      </div>
      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
        {stat.label}
      </p>
    </div>
  );
}

export function Hero() {
  const hireHref = `https://wa.me/${STUDIO.whatsapp}`;

  return (
    <section id="home" className="relative px-5 pt-32 sm:px-8 sm:pt-40 lg:pt-44">
      <div className="mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-cyan-glow/20 bg-cyan-glow/5 px-4 py-1.5 text-xs font-semibold text-cyan-glow backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" />
          {PORTFOLIO.length} Live Demo Websites
        </div>

        {/* Headline */}
        <h1
          className="reveal mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          style={{ transitionDelay: '80ms' }}
        >
          Modern Websites That Help{' '}
          <span className="gradient-text">Businesses Grow</span>
        </h1>

        {/* Tagline */}
        <p
          className="reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 text-balance"
          style={{ transitionDelay: '160ms' }}
        >
          I design and build fast, modern, premium websites for restaurants, hotels,
          clinics, gyms, schools and every kind of local business. Browse real demos
          below.
        </p>

        {/* CTAs */}
        <div
          className="reveal mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ transitionDelay: '240ms' }}
        >
          <a
            href="#portfolio"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-glow to-brand-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-glow-cyan transition-all duration-300 hover:shadow-glow-lg hover:brightness-110 sm:w-auto"
          >
            View All Demos
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:border-cyan-glow/50 hover:bg-white/10 hover:shadow-glow sm:w-auto"
          >
            Send a Message
          </a>
        </div>

        {/* Social proof */}
        <div
          className="reveal mt-8 flex items-center justify-center gap-2 text-sm text-amber-300"
          style={{ transitionDelay: '320ms' }}
        >
          <span className="flex" aria-hidden>
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-4 w-4 fill-amber-300 text-amber-300" />
            ))}
          </span>
          <span className="text-slate-300">Trusted by 50+ businesses worldwide</span>
        </div>

        {/* Stats */}
        <div
          className="reveal mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4"
          style={{ transitionDelay: '400ms' }}
        >
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 80} />
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="mt-16 flex justify-center" aria-hidden>
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1.5">
          <span className="h-2 w-1 rounded-full bg-cyan-glow/80 animate-floatY" />
        </div>
      </div>
    </section>
  );
}
