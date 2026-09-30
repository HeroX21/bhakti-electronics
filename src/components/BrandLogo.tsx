import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'mark-only' | 'text-only';
  inverted?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  inverted = false,
}) => {
  const iconDimensions = {
    sm: { width: 34, height: 34 },
    md: { width: 44, height: 44 },
    lg: { width: 56, height: 56 },
  }[size];

  const textSizes = {
    sm: { title: 'text-lg', sub: 'text-[9px] tracking-[0.28em]' },
    md: { title: 'text-2xl', sub: 'text-[11px] tracking-[0.32em]' },
    lg: { title: 'text-3xl', sub: 'text-xs tracking-[0.36em]' },
  }[size];

  const Mark = (
    <svg
      width={iconDimensions.width}
      height={iconDimensions.height}
      viewBox="0 0 100 100"
      className="shrink-0 transition-transform duration-200 group-hover:scale-105"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="logoBgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0F2848" />
          <stop offset="100%" stopColor="#061324" />
        </radialGradient>
        <linearGradient id="logoGoldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="50%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
        <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#00F0FF" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* Gold Ring Medallion */}
      <circle cx="50" cy="50" r="46" fill="url(#logoBgGlow)" stroke="url(#logoGoldBorder)" strokeWidth="4.5" />
      <circle cx="50" cy="50" r="41" fill="none" stroke="#F59E0B" strokeWidth="1.2" opacity="0.8" />

      {/* Outer Petals */}
      <path
        d="M50 44 C34 40 24 50 24 64 C34 66 44 64 50 62"
        fill="none"
        stroke="#38BDF8"
        strokeWidth="1.8"
        filter="url(#cyanGlow)"
      />
      <path
        d="M50 44 C66 40 76 50 76 64 C66 66 56 64 50 62"
        fill="none"
        stroke="#38BDF8"
        strokeWidth="1.8"
        filter="url(#cyanGlow)"
      />
      <circle cx="24" cy="64" r="1.5" fill="#FCD34D" />
      <circle cx="76" cy="64" r="1.5" fill="#FCD34D" />

      {/* Inner Petals with circuit stems */}
      <path
        d="M50 36 C42 30 36 38 34 50 C40 54 46 54 50 54"
        fill="none"
        stroke="#00F0FF"
        strokeWidth="2"
      />
      <path
        d="M50 36 C58 30 64 38 66 50 C60 54 54 54 50 54"
        fill="none"
        stroke="#00F0FF"
        strokeWidth="2"
      />
      <circle cx="34" cy="50" r="1.4" fill="#FCD34D" />
      <circle cx="66" cy="50" r="1.4" fill="#FCD34D" />

      {/* Central Crown Petal */}
      <path
        d="M50 18 C45 31 45 43 50 56 C55 43 55 31 50 18 Z"
        fill="none"
        stroke="#00F0FF"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="50" cy="20" r="1.8" fill="#FCD34D" />

      {/* Golden Base Support */}
      <path d="M28 66 Q40 74 50 74 Q60 74 72 66" fill="none" stroke="#F59E0B" strokeWidth="2.2" />
      <path d="M34 71 Q42 77 50 77 Q58 77 66 71" fill="none" stroke="#FBBF24" strokeWidth="1.5" />

      {/* Sacred Om Symbol in Pure Gold */}
      <text
        x="50"
        y="53"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontWeight="900"
        fontSize="14"
        fill="#FCD34D"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        ॐ
      </text>
    </svg>
  );

  if (variant === 'mark-only') {
    return <div className={`inline-flex items-center ${className}`}>{Mark}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {variant !== 'text-only' && Mark}
      <div className="flex flex-col leading-none">
        <span
          className={`font-extrabold tracking-tight font-sans ${textSizes.title} bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-xs`}
        >
          BHAKTI
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="w-2.5 h-[1.5px] bg-cyan-400 rounded-full"></span>
          <span
            className={`font-semibold uppercase ${textSizes.sub} ${
              inverted ? 'text-slate-200' : 'text-slate-700'
            }`}
          >
            ELECTRONICS
          </span>
          <span className="w-2.5 h-[1.5px] bg-cyan-400 rounded-full"></span>
        </div>
      </div>
    </div>
  );
};
