import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY } from '@/data';

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);
  const [bubble, setBubble] = useState(true);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {bubble && (
        <div className="relative max-w-[220px] rounded-2xl rounded-br-sm border border-neon-green/30 bg-ink-900/95 p-4 shadow-neonGreen backdrop-blur-md">
          <button
            onClick={() => setBubble(false)}
            aria-label="Dismiss"
            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-ink-700 text-white/70 hover:text-white"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <p className="text-sm font-medium text-white">
            Need a custom sign? <span className="text-neon-green">Let&apos;s chat!</span>
          </p>
          <p className="mt-1 text-xs text-white/55">Quick replies on WhatsApp.</p>
        </div>
      )}

      <a
        href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
          "Assalam o Alaikum! I'd like to order a custom neon sign.",
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-neon-green to-neon-blue text-ink-950 shadow-neonGreen transition-all hover:scale-110"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-neon-green/30" />
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
