import { Check } from 'lucide-react';
import { SERVICES } from '@/data';
import { whatsappLink } from '@/lib/hooks';
import SectionHeading from './SectionHeading';

export default function Services() {
  return (
    <section id="services" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 rounded-full bg-neon-blue/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Signage for <span className="text-neon-blue">every</span>{' '}
              <span className="text-neon-green">space</span>
            </>
          }
          subtitle="From Islamic calligraphy to business storefronts, home decor to event statements — we design and build neon signs for every occasion."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const isBlue = service.accent === 'blue';
            return (
              <article
                key={service.id}
                className={`group relative overflow-hidden rounded-3xl border bg-ink-950 transition-all duration-500 hover:-translate-y-2 ${
                  isBlue
                    ? 'border-white/8 hover:border-neon-blue/50'
                    : 'border-white/8 hover:border-neon-green/50'
                }`}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${
                      isBlue
                        ? 'bg-neon-blue/15 text-neon-blue ring-1 ring-neon-blue/30'
                        : 'bg-neon-green/15 text-neon-green ring-1 ring-neon-green/30'
                    }`}
                  >
                    {service.tagline}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-white/75">
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            isBlue ? 'bg-neon-blue/15 text-neon-blue' : 'bg-neon-green/15 text-neon-green'
                          }`}
                        >
                          <Check className="h-3 w-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink(`Hi! I'm interested in your "${service.title}" service. Can you share more details?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                      isBlue ? 'text-neon-blue hover:text-white' : 'text-neon-green hover:text-white'
                    }`}
                  >
                    Get a quote
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>

                {/* Glow line on hover */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${
                    isBlue ? 'bg-neon-blue shadow-neonBlue' : 'bg-neon-green shadow-neonGreen'
                  }`}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
