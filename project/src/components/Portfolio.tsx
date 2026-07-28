import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO, type DemoProject } from '@/data/portfolio';
import { SectionHeading } from '@/components/SectionHeading';

const ALL = 'All';

function ProjectCard({ project, index }: { project: DemoProject; index: number }) {
  return (
    <article
      className="reveal group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-glow/40 hover:shadow-glow"
      style={{ transitionDelay: `${(index % 8) * 60}ms` }}
    >
      {/* Banner with hover-zoom */}
      <div className="relative h-40 overflow-hidden">
        <div
          className="absolute inset-0 scale-100 transition-transform duration-500 ease-out group-hover:scale-110"
          style={{
            backgroundImage: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
          }}
        >
          {/* texture overlay */}
          <div className="absolute inset-0 bg-grid-faint bg-grid opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
        </div>

        {/* emoji glyph */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
            {project.emoji}
          </span>
        </div>

        {/* category tag */}
        <span className="absolute right-3 top-3 rounded-full border border-cyan-glow/30 bg-ink-950/70 px-3 py-1 text-xs font-medium text-cyan-glow backdrop-blur">
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-glow to-brand-500 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-glow-cyan transition-all duration-300 hover:shadow-glow-lg hover:brightness-110"
        >
          Open Website
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}

export function Portfolio() {
  const categories = useMemo(() => {
    const set = new Set(PORTFOLIO.map((p) => p.category));
    return [ALL, ...Array.from(set)];
  }, []);

  const [filter, setFilter] = useState(ALL);

  const visible = useMemo(
    () => (filter === ALL ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="portfolio" className="relative px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Live demo <span className="gradient-text">portfolio</span>
            </>
          }
          subtitle="Every card below opens a fully built, live website. Click “Open Website” to explore any demo."
        />

        {/* Category filter */}
        <div className="reveal mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-glow to-brand-500 text-ink-950 shadow-glow-cyan'
                    : 'border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-glow/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
