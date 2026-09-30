import React from 'react';
import { Phone, ArrowRight, MessageCircle, ShieldCheck, Tv, Smartphone, Sparkles, Refrigerator } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { businessConfig, createPhoneLink, createWhatsAppLink } from '../config/businessConfig';
import { heroImg, productCategories } from '../data/productData';
import { StatsRow } from '../components/StatsRow';
import { TrustSection } from '../components/TrustSection';
import { ProductCategoryCard } from '../components/ProductCategoryCard';
import { SmartphoneSection } from '../components/SmartphoneSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { StoreCTASection } from '../components/StoreCTASection';

const categoryContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <section className="relative bg-[#07162C] text-white overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold uppercase tracking-wider text-amber-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>TRUSTED ELECTRONICS RETAILER • DELHI</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight balance">
                Your One-Stop Shop for Mobile Phones &amp; Electronics
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                We bring you the latest smartphones, genuine accessories, home appliances and expert guidance to help you find the right technology for your lifestyle.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    onNavigate('/products');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-300"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={createPhoneLink()}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
                  aria-label={`Call ${businessConfig.phone}`}
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call {businessConfig.phone}</span>
                </a>

                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 text-xs font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-800/50 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Verification & Trust markers */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{businessConfig.partnership}</span>
                </div>
                <span>·</span>
                <span>Authorized Warranties</span>
                <span>·</span>
                <span>Shalimar Bagh, Delhi</span>
              </div>
            </div>

            {/* Right Hero Image Composition with Floating Cards */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-900">
                <img
                  src={heroImg}
                  alt="Premium smartphones, wireless audio, and modern electronics at Bhakti Electronics Delhi"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Subtle Floating Card 1: Smartphones */}
                <div className="absolute top-4 left-4 p-2.5 rounded-lg bg-slate-900/85 backdrop-blur-md border border-slate-700/80 shadow-md flex items-center gap-2.5 max-w-[190px]">
                  <div className="w-7 h-7 rounded-md bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] font-bold text-white leading-none">Smartphones</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 truncate">5G &amp; Flagship</p>
                  </div>
                </div>

                {/* Subtle Floating Card 2: LED TVs & Appliances */}
                <div className="absolute bottom-4 right-4 p-2.5 rounded-lg bg-slate-900/85 backdrop-blur-md border border-slate-700/80 shadow-md flex items-center gap-2.5 max-w-[210px]">
                  <div className="w-7 h-7 rounded-md bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <Tv className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] font-bold text-white leading-none">LED TVs &amp; Appliances</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 truncate">4K Smart, Washers, Fridges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row inside Hero container */}
          <div className="mt-12 lg:mt-16">
            <StatsRow variant="dark" />
          </div>
        </div>
      </section>

      {/* 2. Trust Section */}
      <TrustSection />

      {/* 3. Product Categories Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              Complete Electronics Range
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07162C] tracking-tight mt-1">
              Explore Our Product Categories
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Everything you need for your connected lifestyle, under one roof.
            </p>
          </div>

          <motion.div
            variants={categoryContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {productCategories.map((category, idx) => (
              <ProductCategoryCard
                key={category.id}
                category={category}
                index={idx}
                onSelectCategory={() => {
                  onNavigate('/products');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <button
              onClick={() => {
                onNavigate('/products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#0A2540] hover:bg-[#07162C] rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <span>View All Products &amp; Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Mobile Phone Showcase Section */}
      <SmartphoneSection />

      {/* 5. Why Bhakti Electronics Split Section */}
      <WhyChooseUs onNavigate={onNavigate} />

      {/* 6. Ready to Upgrade Store CTA */}
      <StoreCTASection onNavigate={onNavigate} />
    </div>
  );
};
