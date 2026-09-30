import React from 'react';
import { PageHero } from '../components/PageHero';
import { ContactForm } from '../components/ContactForm';
import { businessConfig, createWhatsAppLink, createPhoneLink } from '../config/businessConfig';
import { Phone, MessageCircle, MapPin, Clock, ExternalLink, Navigation, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="Retail Store &amp; Customer Support"
        title="Visit Bhakti Electronics"
        subtitle="We're here to help you find the right mobile device or electronics for your needs."
        breadcrumbs={[{ label: 'Store / Contact' }]}
        onNavigate={onNavigate}
        ctaElement={
          <a
            href={businessConfig.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Google Maps</span>
          </a>
        }
      />

      {/* Quick Action Cards (3 Large Cards) */}
      <section className="py-10 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: CALL US */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0A2540] text-amber-400 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">CALL US</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Speak with our team directly for immediate stock inquiries and pricing.
                </p>
                <p className="text-sm font-semibold text-slate-900 mt-3 tabular-nums">
                  {businessConfig.phone}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100">
                <a
                  href={createPhoneLink()}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-[#0A2540] hover:bg-[#07162C] rounded-lg transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Card 2: WHATSAPP */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">WHATSAPP</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Quick chat support to check device specs, photos, or check availability.
                </p>
                <p className="text-sm font-semibold text-emerald-800 mt-3 tabular-nums">
                  {businessConfig.phone}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100">
                <a
                  href={createWhatsAppLink("General Contact & Assistance")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Message Us</span>
                </a>
              </div>
            </div>

            {/* Card 3: VISIT STORE */}
            <div className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">VISIT STORE</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  See store location in Shalimar Bagh for hands-on device trials.
                </p>
                <p className="text-sm font-semibold text-slate-900 mt-3">
                  {businessConfig.hours}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100">
                <a
                  href={businessConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Layout: Left Details + Right Form */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Side: Store information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                  Physical Storefront
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07162C] tracking-tight mt-1">
                  Bhakti Electronics
                </h2>
                <p className="text-sm text-slate-500 font-semibold mt-0.5">Shalimar Bagh, Delhi</p>
              </div>

              <div className="bg-slate-50/80 rounded-xl border border-slate-200/90 p-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Official Store Address</h4>
                    <p className="text-sm text-slate-800 font-medium mt-1 leading-relaxed">
                      {businessConfig.address.shopNo},<br />
                      {businessConfig.address.plot}, {businessConfig.address.khataNo},<br />
                      {businessConfig.address.landmark},<br />
                      {businessConfig.address.village},<br />
                      {businessConfig.address.locality},<br />
                      {businessConfig.address.city} - {businessConfig.address.pincode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-200/70">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone &amp; WhatsApp</h4>
                    <p className="text-sm text-slate-900 font-bold mt-1 tabular-nums">
                      {businessConfig.phone}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Available during store opening hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-200/70">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Store Hours</h4>
                    <p className="text-sm text-slate-900 font-bold mt-1">
                      {businessConfig.hours}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{businessConfig.hoursDetail}</p>
                  </div>
                </div>
              </div>

              {/* Verified Partnership Badge */}
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-slate-900">{businessConfig.partnership}</span>
                  <p className="text-slate-600 mt-0.5">
                    Verified local electronics distributor serving Delhi technology buyers since {businessConfig.established}.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-slate-50 border-t border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                Navigation &amp; Transit
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Find Our Shalimar Bagh Store
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Conveniently located near INA Block, Shalimar Village, Delhi.
              </p>
            </div>

            <a
              href={businessConfig.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0A2540] hover:bg-[#07162C] rounded-lg transition-colors self-start sm:self-auto cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-200 relative aspect-[16/9] md:aspect-[21/9]">
            <iframe
              title="Bhakti Electronics Shalimar Bagh Delhi Location Map"
              src={businessConfig.maps.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
