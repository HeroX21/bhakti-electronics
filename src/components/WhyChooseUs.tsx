import React from 'react';
import { CheckCircle2, MapPin, ArrowRight } from 'lucide-react';
import { storeImg } from '../data/productData';
import { businessConfig } from '../config/businessConfig';

interface WhyChooseUsProps {
  onNavigate: (path: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavigate }) => {
  const points = [
    { title: 'Genuine products', desc: 'Direct sourcing with authentic manufacturer warranty documentation.' },
    { title: 'Manufacturer warranty', desc: 'Full warranty support and guidance for hassle-free authorized service.' },
    { title: 'Expert assistance', desc: 'Decades of combined retail tech expertise to guide your choice.' },
    { title: 'Competitive pricing', desc: 'Transparent, competitive market pricing without hidden fees.' },
    { title: 'Personalized support', desc: 'Attentive, friendly service from initial setup to post-purchase questions.' },
    { title: 'Convenient Delhi location', desc: 'Easily accessible ground floor store in Shalimar Bagh with dedicated support.' },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Store Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src={storeImg}
                alt="Bhakti Electronics Retail Store in Shalimar Bagh Delhi"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Shalimar Bagh, Delhi</span>
                </div>
                <h3 className="text-lg font-bold">Bhakti Electronics Showroom</h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Serving Delhi technology buyers with trust and dedication since {businessConfig.established}.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Why Choose Us Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                The Retail Difference
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07162C] tracking-tight mt-1">
                Why Customers Choose Bhakti Electronics
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                We believe buying a phone or home appliance should be transparent, straightforward, and backed by people you can speak with face-to-face.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{point.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onNavigate('/contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0A2540] hover:bg-[#07162C] rounded-lg transition-colors shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-amber-500"
              >
                <span>Visit Our Store</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
