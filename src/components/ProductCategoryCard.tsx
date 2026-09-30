import React from 'react';
import { ArrowRight, MessageCircle, Check } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { ProductCategory } from '../data/productData';
import { createWhatsAppLink } from '../config/businessConfig';

export const productCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

interface ProductCategoryCardProps {
  category: ProductCategory;
  onSelectCategory?: (categoryId: string) => void;
  index?: number;
}

export const ProductCategoryCard: React.FC<ProductCategoryCardProps> = ({
  category,
  onSelectCategory,
  index = 0,
}) => {
  return (
    <motion.article
      variants={productCardVariants}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
    >
      {/* Image Area with fallback */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

        {/* Editorial Number */}
        <span className="absolute top-3 left-3 px-2 py-0.5 text-xs font-bold tracking-wider text-white bg-slate-900/80 backdrop-blur-xs rounded">
          {category.number}
        </span>

        {/* Category Overlay Title */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="text-lg font-bold tracking-tight text-white drop-shadow-xs">
            {category.name}
          </h3>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            {category.shortDesc}
          </p>

          {/* Key items */}
          <ul className="space-y-1.5 mb-5">
            {category.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          {onSelectCategory ? (
            <button
              onClick={() => onSelectCategory(category.id)}
              className="text-xs font-semibold text-[#0A2540] hover:text-amber-600 inline-flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <span className="text-xs font-semibold text-slate-500">In-Store &amp; Order</span>
          )}

          <a
            href={createWhatsAppLink(category.whatsappTopic)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-lg transition-colors whitespace-nowrap"
            aria-label={`Ask about ${category.name} on WhatsApp`}
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
};

