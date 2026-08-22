import { Instagram, Facebook } from 'lucide-react';
import { COMPANY } from '@/data';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-ink-950 pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-neon-blue/60 bg-ink-900 glow-blue">
                <span className="text-neon-blue font-display text-lg font-extrabold">B</span>
              </span>
              <span className="font-display text-lg font-extrabold tracking-[0.18em] text-white">
                BUKHARI<span className="text-neon-blue"> NEON</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Premium LED neon signs, acrylic letters, and 3D sign boards crafted in
              Pakistan. Lighting up businesses, homes, and events since 2018.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={COMPANY.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-neon-blue/50 hover:text-neon-blue"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={COMPANY.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-neon-blue/50 hover:text-neon-blue"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="text-sm text-white/60 transition-colors hover:text-neon-blue"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              <li>{COMPANY.address}</li>
              <li>
                <a href={`tel:${COMPANY.phoneRaw}`} className="transition-colors hover:text-neon-blue">
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-neon-blue">
                  {COMPANY.email}
                </a>
              </li>
              <li>{COMPANY.hours}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/8 py-7 sm:flex-row">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} BUKHARI NEON. All rights reserved.
          </p>
          <p className="text-xs text-white/45">
            Designed & crafted with light in Pakistan.
          </p>
        </div>
      </div>
    </footer>
  );
}
