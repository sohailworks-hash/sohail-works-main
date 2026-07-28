import type { ReactNode } from 'react';

type Props = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: Props) {
  return (
    <div
      id={id}
      className={`reveal max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-glow/20 bg-cyan-glow/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-glow">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow shadow-glow" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
