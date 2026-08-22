import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { COMPANY } from '@/data';
import { whatsappLink } from '@/lib/hooks';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New order enquiry%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${text}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-neon-blue/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact Us"
          title={
            <>
              Let&apos;s build your <span className="text-neon-blue">perfect</span>{' '}
              <span className="text-neon-green">sign</span>
            </>
          }
          subtitle="Send us your idea and we'll reply with a design preview and quote — usually within a few hours."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Info column */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {[
                { icon: MapPin, label: 'Visit Us', value: COMPANY.address },
                { icon: Phone, label: 'Call Us', value: COMPANY.phone },
                { icon: Mail, label: 'Email Us', value: COMPANY.email },
                { icon: Clock, label: 'Working Hours', value: COMPANY.hours },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-4 rounded-2xl border border-white/8 bg-ink-950 p-5 transition-colors hover:border-neon-blue/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neon-blue/30 bg-neon-blue/10 text-neon-blue">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                      {c.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink('Assalam o Alaikum! I would like to discuss a custom neon sign order.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-neon-blue to-neon-green px-6 py-4 font-semibold text-ink-950 shadow-neonBlue transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Form column */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/8 bg-ink-950 p-7 sm:p-9"
            >
              <div className="grid gap-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Your Name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Ahmed Khan"
                    className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-neon-blue/60 focus:ring-1 focus:ring-neon-blue/40"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Phone Number
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="e.g. 0300 1234567"
                    className="w-full rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-neon-blue/60 focus:ring-1 focus:ring-neon-blue/40"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    Tell us about your sign
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe the design, size, colour, and where it will be placed..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-ink-900 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-neon-blue/60 focus:ring-1 focus:ring-neon-blue/40"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon-blue to-neon-green px-6 py-3.5 font-semibold text-ink-950 shadow-neonBlue transition-all hover:scale-[1.01]"
                >
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  Send via WhatsApp
                </button>
                {sent && (
                  <p className="rounded-xl border border-neon-green/40 bg-neon-green/10 px-4 py-3 text-center text-sm font-medium text-neon-green">
                    Opening WhatsApp with your details...
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
