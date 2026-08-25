import { ArrowRight, Sparkles } from 'lucide-react';
import { whatsappLink } from '@/lib/hooks';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-ink-950">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-neon-blue/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-neon-green/15 blur-[120px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-5 pt-28 pb-16 text-center sm:px-8">
        <div className="reveal is-visible mb-6 inline-flex items-center gap-2 rounded-full border border-neon-blue/30 bg-neon-blue/5 px-4 py-2 text-xs font-medium tracking-wide text-neon-blue">
          <Sparkles className="h-3.5 w-3.5" />
          Pakistan&apos;s Premium Neon Sign Studio
        </div>

        <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl">
          <span className="block animate-flicker text-neon-blue">BUKHARI</span>
          <span className="block text-neon-green">NEON</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
          We craft premium <span className="text-neon-blue">LED neon signs</span>,{' '}
          <img src="/Logonew.svg" alt="Bukhari Neon" className="mx-auto w-72 h-auto" />
          home, and events unforgettable.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={whatsappLink("Assalam o Alaikum! I'd like to order a custom neon sign. Please share details.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-green px-8 py-4 text-base font-semibold text-ink-950 shadow-neonBlue transition-all hover:scale-105 hover:shadow-neonGreen"
          >
            Order on WhatsApp
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-neon-blue/50 hover:text-neon-blue"
          >
            View Our Work
          </a>
        </div>

        {/* Floating neon preview cards */}
        <div className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Islamic Signs', color: 'green' as const },
            { label: 'Business Signs', color: 'blue' as const },
            { label: 'Home Decor', color: 'blue' as const },
            { label: 'Event Decor', color: 'green' as const },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`animate-floatY rounded-2xl border bg-ink-900/60 px-4 py-5 backdrop-blur-sm ${
                item.color === 'blue' ? 'border-neon-blue/30' : 'border-neon-green/30'
              }`}
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              <p
                className={`text-sm font-semibold ${
                  item.color === 'blue' ? 'text-neon-blue' : 'text-neon-green'
                }`}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ink-950 to-transparent" />
    </section>
  );
}
