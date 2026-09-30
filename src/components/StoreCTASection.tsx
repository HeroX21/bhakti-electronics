import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { businessConfig, createWhatsAppLink, createPhoneLink } from '../config/businessConfig';

interface StoreCTASectionProps {
  onNavigate?: (path: string) => void;
}

export const StoreCTASection: React.FC<StoreCTASectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative py-16 bg-[#07162C] text-white overflow-hidden">
      {/* Visual accents */}
      <div className="absolute inset-0 bg-radial from-slate-800/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
          Shalimar Bagh, Delhi Showroom
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mt-2 balance">
          Ready to Upgrade Your Technology?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Visit Bhakti Electronics in Shalimar Bagh or speak with our team to find the right product with verified warranty and competitive pricing.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={businessConfig.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-slate-900" />
            <span>Get Directions</span>
          </a>

          <a
            href={createPhoneLink()}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>Call Now: {businessConfig.phone}</span>
          </a>

          <a
            href={createWhatsAppLink("General Store Visit & Inquiries")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
