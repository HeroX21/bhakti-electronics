import React from 'react';
import { PageHero } from '../components/PageHero';
import { StoreCTASection } from '../components/StoreCTASection';
import { featuredOffers } from '../data/productData';
import { businessConfig, createWhatsAppLink } from '../config/businessConfig';
import { MessageCircle, Check, Tag, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface OffersPageProps {
  onNavigate: (path: string) => void;
}

export const OffersPage: React.FC<OffersPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="Festive &amp; Seasonal Inquiries"
        title="Latest Offers &amp; Deals"
        subtitle="Discover current offers across smartphones, accessories and home electronics."
        breadcrumbs={[{ label: 'Offers & Deals' }]}
        onNavigate={onNavigate}
        ctaElement={
          <a
            href={createWhatsAppLink("Offers & Daily Pricing Inquiry")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-slate-900" />
            <span>Ask for Today's Best Price</span>
          </a>
        }
      />

      {/* Transparency Note */}
      <section className="bg-amber-50/70 border-b border-amber-200/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>Authentic Pricing Policy:</strong> We do not publish artificial strike-through prices or invented discounts. Electronics prices and exchange bonuses fluctuate frequently. Contact our store team via WhatsApp for genuine, verified prices and instant availability.
          </span>
        </div>
      </section>

      {/* Offers Cards Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              Verified Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07162C] tracking-tight mt-1">
              Active Category Promotions
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Inquire directly about current manufacturer bundle deals, card installment terms, and in-store bonuses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredOffers.map((offer, idx) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.42,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded">
                      {offer.category}
                    </span>
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded">
                      Ask for Latest Price
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mt-2">
                    {offer.title}
                  </h3>

                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {offer.subtitle}
                  </p>

                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Promotion Details
                    </h4>
                    {offer.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <span className="text-xs text-slate-500 italic">
                    * Available at Shalimar Bagh store
                  </span>

                  <a
                    href={createWhatsAppLink(offer.inquiryTopic)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors whitespace-nowrap shadow-xs"
                    aria-label={`Check availability for ${offer.title}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{offer.ctaLabel}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Consultation Assurance */}
          <div className="mt-14 p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-center max-w-2xl mx-auto space-y-3">
            <Sparkles className="w-6 h-6 text-amber-500 mx-auto" />
            <h3 className="text-base font-bold text-slate-900">Looking for a specific model not listed?</h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Through our direct manufacturer sourcing and JioMart Digital Partner network, we can arrange availability for most smartphone variants and home appliances quickly.
            </p>
            <a
              href={createWhatsAppLink("Custom Model Request")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 underline"
            >
              <span>Ask Our Team for Custom Sourcing</span>
              <MessageCircle className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Store CTA */}
      <StoreCTASection onNavigate={onNavigate} />
    </div>
  );
};
