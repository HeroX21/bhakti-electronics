import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  breadcrumbs: Array<{ label: string; path?: string }>;
  onNavigate: (path: string) => void;
  ctaElement?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  onNavigate,
  ctaElement,
}) => {
  return (
    <div className="relative bg-[#07162C] text-white overflow-hidden border-b border-slate-800">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="mb-4">
          <Breadcrumbs items={breadcrumbs} onNavigate={onNavigate} />
        </div>

        <div className="max-w-3xl">
          {eyebrow && (
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>{eyebrow}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white balance">
            {title}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          {ctaElement && <div className="mt-6 flex flex-wrap gap-3">{ctaElement}</div>}
        </div>
      </div>
    </div>
  );
};
