import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { businessConfig, createWhatsAppLink, createPhoneLink } from '../config/businessConfig';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <aside
        aria-label="Quick contact widget"
        className="hidden md:block fixed bottom-6 right-6 z-40"
      >
        <a
          href={createWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg shadow-emerald-900/25 transition-all duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-emerald-400"
          aria-label="Chat with Bhakti Electronics on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />

          {/* Desktop Hover Tooltip */}
          <span className="pointer-events-none absolute right-full mr-3 px-3 py-1.5 bg-[#07162C] text-white text-xs font-medium rounded-md shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150">
            Chat with Bhakti Electronics
          </span>
        </a>
      </aside>

      {/* Mobile Bottom Sticky Bar (Strictly <= 15% viewport height) */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2.5 shadow-lg flex items-center gap-2"
        style={{ maxHeight: '64px' }}
      >
        <a
          href={createPhoneLink()}
          className="flex-1 flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-lg transition-colors border border-slate-200/80"
          aria-label="Call Store"
        >
          <Phone className="w-4 h-4 text-[#0A2540]" />
          <span>Call Store</span>
        </a>

        <a
          href={createWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg transition-colors shadow-xs"
          aria-label="WhatsApp Store"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};
