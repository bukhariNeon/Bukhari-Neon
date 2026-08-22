import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useActiveSection } from '@/lib/hooks';
import { COMPANY } from '@/data';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-2.5" aria-label="BUKHARI NEON home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-neon-blue/60 bg-ink-900 glow-blue">
            <span className="text-neon-blue font-display text-lg font-extrabold">B</span>
          </span>
          <span className="font-display text-base font-extrabold tracking-[0.18em] text-white sm:text-lg">
            BUKHARI<span className="text-neon-blue"> NEON</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === item.id
                    ? 'text-neon-blue'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {active === item.id && (
                  <span className="absolute inset-0 rounded-full bg-neon-blue/10 ring-1 ring-neon-blue/30" />
                )}
                <span className="relative">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
              "Assalam o Alaikum! I'd like to order a custom neon sign.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-green px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-neonBlue transition-transform hover:scale-105 sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
            Order Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out lg:hidden ${
          open ? 'max-h-[480px]' : 'max-h-0'
        }`}
      >
        <ul className="mx-auto mt-3 max-w-7xl space-y-1 px-5 pb-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                  active === item.id
                    ? 'bg-neon-blue/10 text-neon-blue ring-1 ring-neon-blue/30'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon-blue to-neon-green px-5 py-3 text-base font-semibold text-ink-950"
            >
              <MessageCircle className="h-5 w-5" />
              Order on WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
