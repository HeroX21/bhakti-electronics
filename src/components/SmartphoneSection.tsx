import React, { useState } from 'react';
import { smartphoneTiers, smartphonesImg } from '../data/productData';
import { businessConfig, createWhatsAppLink } from '../config/businessConfig';
import { MessageCircle, Check, Smartphone, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const SmartphoneSection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('all');

  const filteredTiers =
    selectedTier === 'all'
      ? smartphoneTiers
      : smartphoneTiers.filter((t) => t.id === selectedTier);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              Mobile Devices &amp; Upgrades
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07162C] tracking-tight mt-1">
              Find Your Next Smartphone
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              From high-durability budget smartphones to revolutionary flagship devices, our Shalimar Bagh store connects you with the right device and authentic warranty.
            </p>
          </motion.div>

          {/* Interactive Tier Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100/90 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setSelectedTier('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedTier === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Tiers
            </button>
            {smartphoneTiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedTier === tier.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tier.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTiers.map((tier, idx) => (
              <motion.div
                key={tier.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-slate-50/70 hover:bg-white rounded-xl border border-slate-200/90 p-6 transition-colors duration-200 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-100/70 text-amber-700 flex items-center justify-center">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                      {tier.priceNote}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">{tier.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{tier.description}</p>

                  <div className="space-y-1.5 mb-6">
                    {tier.popularFor.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={createWhatsAppLink(`Smartphone: ${tier.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
                  aria-label={`Ask about availability for ${tier.name}`}
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Ask About Availability</span>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Brands Banner (strictly popular brands available, editable from central config) */}
        <div className="mt-12 rounded-xl bg-slate-100/80 border border-slate-200/80 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Popular Brands Available</span>
            </div>
            <p className="text-sm text-slate-700">
              We stock and source genuine units with official manufacturer warranty cards.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {businessConfig.brandsAvailable.slice(0, 6).map((brand) => (
              <span
                key={brand}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200/90 rounded-md shadow-2xs"
              >
                {brand}
              </span>
            ))}
            <span className="text-xs text-slate-500 pl-1">&amp; more</span>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 text-center mt-3">
          * Specific model stock and color variations vary daily. Contact our store team via WhatsApp or phone to confirm immediate shelf availability.
        </p>
      </div>
    </section>
  );
};
