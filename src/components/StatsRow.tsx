import React from 'react';
import { businessConfig } from '../config/businessConfig';
import { Package, Users, Star, Store, Calendar } from 'lucide-react';

interface StatsRowProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const StatsRow: React.FC<StatsRowProps> = ({
  className = '',
  variant = 'light',
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'products':
        return <Package className="w-5 h-5 text-amber-500" />;
      case 'customers':
        return <Users className="w-5 h-5 text-cyan-500" />;
      case 'rating':
        return <Star className="w-5 h-5 text-amber-400 fill-amber-400" />;
      case 'locations':
        return <Store className="w-5 h-5 text-emerald-500" />;
      default:
        return <Calendar className="w-5 h-5 text-indigo-400" />;
    }
  };

  const isDark = variant === 'dark';

  return (
    <div
      className={`rounded-2xl border ${
        isDark
          ? 'bg-[#08182E] border-slate-800 text-white'
          : 'bg-white border-slate-200/80 shadow-sm text-slate-900'
      } p-6 sm:p-8 ${className}`}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 sm:divide-slate-200/60 dark:divide-slate-800">
        {businessConfig.stats.slice(0, 4).map((stat, idx) => (
          <div
            key={stat.id}
            className={`flex flex-col items-center text-center ${
              idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
            }`}
          >
            <div className="mb-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60">
              {getIcon(stat.id)}
            </div>
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans tabular-nums bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-400 dark:to-amber-200 bg-clip-text text-transparent">
              {stat.value}
            </span>
            <span
              className={`text-sm font-semibold mt-1 ${
                isDark ? 'text-slate-200' : 'text-slate-800'
              }`}
            >
              {stat.label}
            </span>
            {stat.sublabel && (
              <span className="text-xs text-slate-400 mt-0.5 max-w-[140px] truncate">
                {stat.sublabel}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
