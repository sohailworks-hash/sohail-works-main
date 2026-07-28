import { Check } from 'lucide-react';
import { SERVICES, type Service } from '@/data/services';
import { SectionHeading } from '@/components/SectionHeading';

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <article
      className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-glow/40 hover:bg-white/[0.05] hover:shadow-glow sm:p-7"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      {/* hover glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(420px_circle_at_var(--x,50%)_0%,rgba(0,242,254,0.10),transparent_60%)]" />

      <div className="relative">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-glow/20 bg-cyan-glow/5 text-cyan-glow transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow">
          <Icon className="h-6 w-6" />
        </div>

        <h3 className="font-display text-lg font-bold text-white">{service.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
          {service.description}
        </p>

        <ul className="mt-5 space-y-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
              <Check className="h-4 w-4 shrink-0 text-cyan-glow" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="services" className="relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What I Do"
          title={
            <>
              Premium services, <span className="gradient-text">end to end</span>
            </>
          }
          subtitle="From first wireframe to launch day, every project gets the same obsessive attention to detail — design, development, performance and SEO."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
