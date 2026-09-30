import React from 'react';
import { ShieldCheck, HelpCircle, BadgePercent, Headphones } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
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

export const TrustSection: React.FC = () => {
  const trustCards = [
    {
      icon: ShieldCheck,
      title: '100% Genuine Products',
      description: 'Shop authentic products with verified manufacturer warranties from brand-authorized distributors.',
      accent: 'border-amber-500/20 text-amber-600 bg-amber-50/60',
    },
    {
      icon: HelpCircle,
      title: 'Expert Guidance',
      description: 'Get practical advice to choose the right device for your needs and budget without sales pressure.',
      accent: 'border-cyan-500/20 text-cyan-700 bg-cyan-50/60',
    },
    {
      icon: BadgePercent,
      title: 'Competitive Pricing',
      description: 'Explore competitive prices, value packages, and genuine seasonal benefits across all product categories.',
      accent: 'border-emerald-500/20 text-emerald-700 bg-emerald-50/60',
    },
    {
      icon: Headphones,
      title: 'After-Sales Support',
      description: 'Get dependable assistance even after your purchase for setup, warranty service guidance, and tips.',
      accent: 'border-indigo-500/20 text-indigo-700 bg-indigo-50/60',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
            Uncompromising Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07162C] tracking-tight mt-1">
            Technology You Can Trust
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            From everyday essentials to premium electronics, Bhakti Electronics helps you choose genuine products backed by trusted brands and professional assistance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-4 ${card.accent}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

