import { useMemo, useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { GALLERY, GALLERY_FILTERS } from '@/data';
import SectionHeading from './SectionHeading';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const items = useMemo(
    () => (filter === 'all' ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter],
  );

  return (
    <section id="gallery" className="relative bg-ink-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute right-1/4 top-10 h-72 w-72 rounded-full bg-neon-green/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              Our recent <span className="text-neon-blue">glowing</span>{' '}
              <span className="text-neon-green">creations</span>
            </>
          }
          subtitle="A selection of neon signs, acrylic letters, and 3D boards we've crafted for clients across Pakistan."
        />

        {/* Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-2.5">
          {GALLERY_FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                filter === f.id
                  ? 'bg-gradient-to-r from-neon-blue to-neon-green text-ink-950 shadow-neonBlue'
                  : 'border border-white/10 bg-white/5 text-white/70 hover:border-neon-blue/40 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => setLightbox(item.src)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-white/8 bg-ink-900"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink-950/50 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-neon-blue/50 bg-ink-950/80 text-neon-blue">
                  <ZoomIn className="h-5 w-5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/90 p-5 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Enlarged gallery image"
            className="max-h-[85vh] max-w-full rounded-2xl border border-neon-blue/30 shadow-neonBlue"
          />
        </div>
      )}
    </section>
  );
}
