import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '@/data';
import SectionHeading from './SectionHeading';
import { whatsappLink } from '@/lib/hooks';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <section id="faq" className="relative bg-ink-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute right-10 top-1/4 h-72 w-72 rounded-full bg-neon-green/10 blur-[120px]" />
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions? <span className="text-neon-blue">We&apos;ve got</span>{' '}
              <span className="text-neon-green">answers</span>
            </>
          }
          subtitle="Everything you need to know about ordering a custom neon sign from us."
        />

        <div className="mt-14 space-y-3">
          {FAQS.map((faq) => {
            const isOpen = open === faq.id;
            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-neon-blue/40 bg-ink-900'
                    : 'border-white/8 bg-ink-900/50 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={`font-display text-base font-semibold sm:text-lg ${isOpen ? 'text-neon-blue' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isOpen
                        ? 'border-neon-blue/50 bg-neon-blue/10 text-neon-blue'
                        : 'border-white/15 text-white/70'
                    }`}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-white/70">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-white/60">
          Still have questions?{' '}
          <a
            href={whatsappLink('Hi! I have a question about custom neon signs.')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-neon-blue hover:text-neon-green"
          >
            Chat with us on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
