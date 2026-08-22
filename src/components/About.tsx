import { useReveal } from '@/lib/hooks';
import { STATS, PROCESS } from '@/data';

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative bg-ink-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-neon-green/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} grid gap-14 lg:grid-cols-2 lg:gap-20`}
        >
          {/* Left: copy */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-neon-blue">
              About Us
            </p>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Crafting light that <span className="text-neon-blue">tells</span> your{' '}
              <span className="text-neon-green">story</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              BUKHARI NEON is a Pakistan-based signage studio specialising in premium
              LED neon signs, acrylic letters, and 3D sign boards. For over seven years
              we have helped businesses, homes, restaurants, and event planners across
              the country shine brighter.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Every sign is hand-finished with precision-cut materials and energy-efficient
              LED technology — built to glow beautifully for years.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/8 bg-ink-900/60 p-4 text-center transition-colors hover:border-neon-blue/40"
                >
                  <p className="font-display text-3xl font-extrabold text-neon-blue">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: process */}
          <div className="lg:pl-6">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-neon-green">
              How It Works
            </p>
            <div className="space-y-5">
              {PROCESS.map((p) => (
                <div
                  key={p.step}
                  className="group flex gap-5 rounded-2xl border border-white/8 bg-ink-900/50 p-5 transition-all hover:border-neon-blue/40 hover:bg-ink-900"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neon-blue/40 bg-ink-950 font-display text-lg font-extrabold text-neon-blue">
                    {p.step}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/65">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
