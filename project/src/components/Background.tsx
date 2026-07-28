export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Deep base */}
      <div className="absolute inset-0 bg-ink-950" />

      {/* Faint grid */}
      <div className="absolute inset-0 bg-grid-faint bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Ambient glows */}
      <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px] animate-pulseGlow" />
      <div className="absolute top-1/3 -left-40 h-[30rem] w-[30rem] rounded-full bg-cyan-glow/10 blur-[120px] animate-pulseGlow [animation-delay:1.5s]" />
      <div className="absolute bottom-0 -right-40 h-[34rem] w-[34rem] rounded-full bg-brand-600/15 blur-[130px] animate-pulseGlow [animation-delay:3s]" />

      {/* Subtle top sheen */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/40 to-transparent" />
    </div>
  );
}
