import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '@/data';
import SectionHeading from './SectionHeading';

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/3 top-0 h-72 w-72 rounded-full bg-neon-blue/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Customer Reviews"
          title={
            <>
              Loved by clients <span className="text-neon-blue">across</span>{' '}
              <span className="text-neon-green">Pakistan</span>
            </>
          }
          subtitle="Real words from real customers who trusted us with their signage."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.id}
              className="group relative flex flex-col rounded-3xl border border-white/8 bg-ink-950 p-7 transition-all hover:-translate-y-1 hover:border-neon-blue/40"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-neon-blue/15" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-neon-green text-neon-green" />
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-white/75">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-neon-blue to-neon-green font-display text-sm font-bold text-ink-950">
                  {r.initials}
                </span>
                <div>
                  <p className="font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-white/55">{r.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
