import React, { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { StoreCTASection } from '../components/StoreCTASection';
import { productCategories, ProductCategory } from '../data/productData';
import { createWhatsAppLink } from '../config/businessConfig';
import {
  MessageCircle,
  Check,
  Truck,
  HelpCircle,
  ShieldCheck,
  Headphones,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';

interface ProductsPageProps {
  onNavigate: (path: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const filteredCategories =
    activeCategoryFilter === 'all'
      ? productCategories
      : productCategories.filter((c) => c.id === activeCategoryFilter);

  const services = [
    {
      title: 'PRODUCT CONSULTATION',
      desc: 'Help customers choose products according to their needs and budget without sales pressure.',
      icon: HelpCircle,
    },
    {
      title: 'GENUINE PRODUCTS',
      desc: 'Authentic products from recognized manufacturers with verifiable serial numbers and seals.',
      icon: ShieldCheck,
    },
    {
      title: 'WARRANTY SUPPORT',
      desc: 'Manufacturer warranty information and guidance for authorized brand repair networks.',
      icon: Sparkles,
    },
    {
      title: 'DIGITAL ORDERING',
      desc: 'Support through the JioMart Digital Partner ecosystem for extended catalog access.',
      icon: ShoppingBag,
    },
    {
      title: 'AFTER-SALES ASSISTANCE',
      desc: 'Dedicated customer support after purchase for device queries, initial setup, and accessories.',
      icon: Headphones,
    },
    {
      title: 'HOME DELIVERY',
      desc: 'Delivery availability for selected large home appliances within Delhi and Shalimar Bagh areas.',
      icon: Truck,
    },
  ];

  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="Genuine Electronics &amp; Home Appliances"
        title="Best Deals on Mobile Phones &amp; Home Appliances"
        subtitle="Authentic products, expert guidance and competitive pricing."
        breadcrumbs={[{ label: 'Products & Services' }]}
        onNavigate={onNavigate}
        ctaElement={
          <button
            onClick={() => {
              onNavigate('/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
          >
            Visit Store
          </button>
        }
      />

      {/* Filter Tabs */}
      <section className="bg-slate-50 border-b border-slate-200/80 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setActiveCategoryFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategoryFilter === 'all'
                  ? 'bg-[#0A2540] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              All Categories
            </button>
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryFilter(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategoryFilter === cat.id
                    ? 'bg-[#0A2540] text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Product Categories Showcases */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredCategories.map((category, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={category.id}
                id={category.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden scroll-mt-24"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-center`}>
                  {/* Category Image */}
                  <div className={`lg:col-span-6 relative aspect-[4/3] bg-slate-100 ${isReversed ? 'lg:order-2' : ''}`}>
                    <img
                      src={category.image}
                      alt={category.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-4 left-4 px-2.5 py-1 text-xs font-bold tracking-wider text-white bg-slate-900/80 rounded">
                      Category {category.number}
                    </span>
                  </div>

                  {/* Category Content */}
                  <div className={`lg:col-span-6 p-6 sm:p-10 space-y-6 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                          Verified Retail Lineup
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07162C] tracking-tight">
                        {category.name}
                      </h2>
                      <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {category.fullDesc}
                      </p>
                    </div>

                    {/* Features list */}
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3">
                        Key Available Specifications &amp; Range
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {category.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Highlights row */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                      {category.highlights.map((hl, hIdx) => (
                        <span
                          key={hIdx}
                          className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <a
                        href={createWhatsAppLink(category.whatsappTopic)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>{category.ctaText} on WhatsApp</span>
                      </a>

                      <button
                        onClick={() => {
                          onNavigate('/contact');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                      >
                        Visit Store for Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services & Benefits Section: "More Than Just a Store" */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              Customer Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07162C] tracking-tight mt-1">
              More Than Just a Store
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Dedicated retail assistance before, during, and after your technology purchase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 tracking-wide mb-2">{srv.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{srv.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Store CTA */}
      <StoreCTASection onNavigate={onNavigate} />
    </div>
  );
};
