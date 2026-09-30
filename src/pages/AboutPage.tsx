import React from 'react';
import { PageHero } from '../components/PageHero';
import { StatsRow } from '../components/StatsRow';
import { StoreCTASection } from '../components/StoreCTASection';
import { businessConfig, createWhatsAppLink, createPhoneLink } from '../config/businessConfig';
import { storeImg } from '../data/productData';
import { ShieldCheck, Award, HeartHandshake, Lightbulb, CheckCircle2, MapPin, Store } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const values = [
    {
      title: 'QUALITY',
      description: 'Only genuine products with authentic warranties.',
      icon: Award,
      accent: 'text-amber-600 bg-amber-50 border-amber-200/60',
    },
    {
      title: 'CUSTOMER FIRST',
      description: 'Personalized assistance and after-sales support.',
      icon: HeartHandshake,
      accent: 'text-rose-600 bg-rose-50 border-rose-200/60',
    },
    {
      title: 'EXPERT ADVICE',
      description: 'Professional guidance to help customers choose suitable products.',
      icon: Lightbulb,
      accent: 'text-cyan-700 bg-cyan-50 border-cyan-200/60',
    },
    {
      title: 'TRUST',
      description: 'Transparent product information and dependable retail service.',
      icon: ShieldCheck,
      accent: 'text-emerald-700 bg-emerald-50 border-emerald-200/60',
    },
  ];

  const journeySteps = [
    {
      period: '2021',
      title: 'Founded in Delhi',
      detail: 'Started serving customers in Delhi with a commitment to authentic mobile devices and personal service.',
    },
    {
      period: 'Growth',
      title: 'Category Expansion',
      detail: 'Expanded product categories across smartphones, LED televisions, refrigerators, washing machines, and kitchen appliances.',
    },
    {
      period: 'Today',
      title: 'A Trusted Delhi Retailer',
      detail: 'Serving thousands of customers with a broad electronics selection, verified warranties, and dependable after-sales care.',
    },
  ];

  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="Company Profile &amp; Heritage"
        title="About Bhakti Electronics"
        subtitle="Trusted electronics retail in Delhi since 2021."
        breadcrumbs={[{ label: 'About Us' }]}
        onNavigate={onNavigate}
        ctaElement={
          <>
            <button
              onClick={() => {
                onNavigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
            >
              Visit Our Store
            </button>
            <a
              href={createWhatsAppLink("About Us Inquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              Contact Team
            </a>
          </>
        }
      />

      {/* Main Story & Retail Philosophy */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                Our Story &amp; Dedication
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07162C] tracking-tight">
                Authentic Electronics, Grounded in Local Trust
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                Bhakti Electronics is a dedicated mobile phone and electronics retailer serving customers in Delhi since 2021. We specialize in smartphones, accessories, televisions, refrigerators, washing machines and kitchen appliances.
              </p>

              <p className="text-base text-slate-700 leading-relaxed">
                Our focus is simple: provide genuine products, practical guidance, competitive pricing and dependable customer support. We take the stress out of technology shopping by providing direct advice tailored to your household requirements and budget.
              </p>

              {/* JioMart Section */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-500" />
                  <h3 className="text-base font-bold text-slate-900">{businessConfig.partnership}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  As a JioMart Digital Partner, Bhakti Electronics is committed to offering genuine products, competitive pricing and convenient digital ordering backed by recognized brand distribution.
                </p>
              </div>
            </div>

            {/* Right Side: Store Showcase Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src={storeImg}
                  alt="Bhakti Electronics Showroom Interior"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 object-cover"
                />
                <div className="p-5 bg-white">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <Store className="w-4 h-4 text-amber-500" />
                    <span>Shalimar Bagh Retail Showroom</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {businessConfig.address.formatted}
                  </p>
                  <p className="text-xs text-emerald-700 font-semibold mt-2">
                    ● {businessConfig.hours}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07162C] tracking-tight mt-1">
              Our Values
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              The operational foundation that guides every customer interaction at Bhakti Electronics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className={`w-11 h-11 rounded-lg border flex items-center justify-center mb-4 ${val.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 tracking-wide mb-2">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Stats Counter Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Measurable Customer Trust
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              Serving Delhi Since {businessConfig.established}
            </h2>
          </div>
          <StatsRow variant="light" />
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
              Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07162C] tracking-tight mt-1">
              Our Journey
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Steadily growing by putting genuine products and transparent customer relationships first.
            </p>
          </div>

          <div className="space-y-6">
            {journeySteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-xs flex flex-col sm:flex-row items-start gap-5"
              >
                <div className="w-16 h-12 rounded-lg bg-[#07162C] text-amber-400 font-extrabold text-sm flex items-center justify-center shrink-0">
                  {step.period}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Store Placeholder (Explicit instruction compliant) */}
      {businessConfig.features.showSecondLocationPlaceholder && (
        <section className="py-12 bg-white border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 rounded-xl border border-dashed border-slate-300 bg-slate-50/70 text-center space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Network Information
              </span>
              <h3 className="text-base font-bold text-slate-800">
                {businessConfig.secondLocationPlaceholder.title} ({businessConfig.secondLocationPlaceholder.status})
              </h3>
              <p className="text-xs text-slate-600 max-w-xl mx-auto leading-relaxed">
                {businessConfig.secondLocationPlaceholder.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Store CTA */}
      <StoreCTASection onNavigate={onNavigate} />
    </div>
  );
};
