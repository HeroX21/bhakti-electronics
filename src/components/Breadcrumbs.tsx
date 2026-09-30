import React from 'react';
import { Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: Array<{
    label: string;
    path?: string;
  }>;
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumbs" className="text-xs text-slate-500 py-3">
      <ol className="flex items-center flex-wrap gap-1.5">
        <li className="flex items-center">
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-1 hover:text-slate-900 transition-colors focus-visible:outline-2 focus-visible:outline-amber-500 rounded cursor-pointer"
            aria-label="Home"
          >
            <Home className="w-3.5 h-3.5 text-slate-400" />
            <span>Home</span>
          </button>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <li aria-hidden="true" className="text-slate-400">/</li>
              <li className="flex items-center">
                {isLast || !item.path ? (
                  <span className="font-semibold text-slate-800" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <button
                    onClick={() => onNavigate(item.path!)}
                    className="hover:text-slate-900 transition-colors focus-visible:outline-2 focus-visible:outline-amber-500 rounded cursor-pointer"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
