import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { businessConfig, createWhatsAppLink, createPhoneLink } from '../config/businessConfig';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !/^\S+@\S+\.\S+$/.test(newsletterEmail)) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }
    setNewsletterError('');
    setSubscribed(true);
    setNewsletterEmail('');
  };

  const handleLink = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#051122] text-slate-300 border-t border-slate-800">
      {/* Top Banner inside Footer: JioMart Digital Partner & Trust */}
      <div className="border-b border-slate-800/80 bg-[#08182E]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              Authorized Retailer &amp; <strong className="text-white font-semibold">{businessConfig.partnership}</strong>
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>100% Genuine Products</span>
            <span aria-hidden="true">·</span>
            <span>Manufacturer Warranties</span>
            <span aria-hidden="true">·</span>
            <span>Local Delhi Store</span>
          </div>
        </div>
      </div>

      {/* Main 4 Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <button
              onClick={() => handleLink('/')}
              className="text-left focus-visible:outline-2 focus-visible:outline-amber-400 rounded-md cursor-pointer"
            >
              <BrandLogo size="md" variant="full" inverted={true} />
            </button>

            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted destination for genuine smartphones, electronics, accessories and home appliances in Delhi. Serving customers with integrity and expert advice since {businessConfig.established}.
            </p>

            <div className="pt-1">
              <span className="inline-block text-xs font-medium text-amber-400 bg-amber-950/40 border border-amber-800/40 px-3 py-1 rounded">
                {businessConfig.partnership}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLink('/')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/about')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/products')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Products &amp; Services
                </button>
              </li>
              {businessConfig.features.showOffersPage && (
                <li>
                  <button
                    onClick={() => handleLink('/offers')}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Offers &amp; Deals
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={() => handleLink('/contact')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Store &amp; Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Product Categories</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleLink('/products')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Mobile Phones
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/products')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Smart Accessories &amp; Audio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/products')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  LED &amp; Smart TVs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/products')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Refrigerators
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/products')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Washing Machines
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/products')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Kitchen Appliances
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Store Contact</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {businessConfig.address.shopNo}, {businessConfig.address.landmark}, {businessConfig.address.locality}, {businessConfig.address.city} - {businessConfig.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={createPhoneLink()}
                  className="text-slate-300 hover:text-amber-400 transition-colors font-medium tabular-nums"
                >
                  {businessConfig.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{businessConfig.hours}</span>
              </div>
            </div>

            {/* Newsletter: Get Latest Offers */}
            <div className="pt-2">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wide mb-2">Get Latest Offers</h4>
              {subscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 p-2.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! We'll keep you updated with new arrivals.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex items-center rounded-lg border border-slate-700 bg-slate-900/80 overflow-hidden focus-within:border-amber-400">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 text-xs text-white bg-transparent placeholder-slate-500 focus:outline-none"
                      aria-label="Email for offers"
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 text-xs font-medium text-white bg-[#0A2540] hover:bg-amber-600 transition-colors shrink-0 cursor-pointer"
                      aria-label="Subscribe"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {newsletterError && (
                    <p className="text-xs text-rose-400">{newsletterError}</p>
                  )}
                </form>
              )}
            </div>

            {/* Direct Connect Options */}
            <div className="pt-1 flex items-center gap-2">
              <a
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/40 rounded transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={createPhoneLink()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded transition-colors"
                aria-label="Call Store"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Store</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Bhakti Electronics. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Authentic Electronics Retail · Delhi</span>
            <span aria-hidden="true">·</span>
            <span>{businessConfig.address.locality}, Delhi - {businessConfig.address.pincode}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
