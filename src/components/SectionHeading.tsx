import type { ReactNode } from 'react';
import { useReveal } from '@/lib/hooks';

type Props = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
};

export default function SectionHeading({ eyebrow, title, subtitle }: Props) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal mx-auto max-w-2xl text-center ${visible ? 'is-visible' : ''}`}
    >
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-neon-blue">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg leading-relaxed text-white/65">{subtitle}</p>
      )}
    </div>
  );
}
