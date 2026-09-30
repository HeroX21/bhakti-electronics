import React from 'react';
import { Home, ArrowLeft, Phone, MessageCircle } from 'lucide-react';
import { businessConfig, createWhatsAppLink, createPhoneLink } from '../config/businessConfig';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-20 md:py-28 bg-slate-50 min-h-[60vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <span className="text-6xl font-black text-slate-300 font-sans tracking-tight">404</span>
        <h1 className="text-2xl font-bold text-slate-900">Page Not Found</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The page you are looking for doesn't exist or has moved. Explore our genuine electronics collection or contact our Shalimar Bagh store team directly.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0A2540] hover:bg-[#07162C] rounded-lg transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>

          <button
            onClick={() => onNavigate('/products')}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <span>View Products</span>
          </button>
        </div>

        <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
          <span>Need help? Call store: </span>
          <a href={createPhoneLink()} className="font-semibold text-slate-800 hover:text-amber-600 underline">
            {businessConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
};
