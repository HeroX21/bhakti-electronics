import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck, MapPin } from 'lucide-react';
import { businessConfig, createWhatsAppLink, createPhoneLink } from '../config/businessConfig';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products & Services', path: '/products' },
    ...(businessConfig.features.showOffersPage ? [{ label: 'Offers', path: '/offers' }] : []),
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#07162C] text-slate-300 text-xs border-b border-slate-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-slate-200">
              Trusted Electronics Retailer in Delhi · Serving Since {businessConfig.established}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 shrink-0 text-slate-300">
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Shalimar Bagh, Delhi</span>
            </div>
            <span className="text-slate-600" aria-hidden="true">|</span>
            <div className="flex items-center gap-1.5 text-xs text-slate-300">
              <span className="text-amber-400 font-semibold">{businessConfig.partnership}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 bg-white/95 backdrop-blur-md ${
          isScrolled
            ? 'shadow-md shadow-slate-900/5 border-b border-slate-200/80 py-2.5'
            : 'border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center text-left focus-visible:outline-2 focus-visible:outline-amber-500 rounded-md cursor-pointer group"
            aria-label="Bhakti Electronics Home"
          >
            <BrandLogo size="md" variant="full" />
          </button>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600"
          >
            {navLinks.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleLinkClick(item.path)}
                  className={`relative py-1.5 transition-colors cursor-pointer text-sm whitespace-nowrap focus-visible:outline-2 focus-visible:outline-amber-500 rounded ${
                    isActive
                      ? 'text-[#07162C] font-semibold'
                      : 'hover:text-[#0A2540]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-cyan-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Direct Actions (WhatsApp & Call Now) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-emerald-600"
              aria-label="Chat with Bhakti Electronics on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href={createPhoneLink()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#0A2540] hover:bg-[#07162C] rounded-lg transition-colors shadow-sm whitespace-nowrap focus-visible:outline-2 focus-visible:outline-amber-500"
              aria-label={`Call Bhakti Electronics at ${businessConfig.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Right Controls: Fast Call, WhatsApp, and Hamburger */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg focus-visible:outline-2 focus-visible:outline-emerald-500"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <a
              href={createPhoneLink()}
              className="p-2 text-[#0A2540] hover:bg-slate-100 rounded-lg focus-visible:outline-2 focus-visible:outline-[#0A2540]"
              aria-label="Call Store"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus-visible:outline-2 focus-visible:outline-amber-500"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Flyout / Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navLinks.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleLinkClick(item.path)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-amber-50 text-[#07162C] font-semibold border-l-4 border-amber-500'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-3 border-t border-slate-100 space-y-2">
                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-emerald-800 bg-emerald-50 rounded-lg border border-emerald-200"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  Chat on WhatsApp
                </a>

                <a
                  href={createPhoneLink()}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-white bg-[#0A2540] rounded-lg"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  Call {businessConfig.phone}
                </a>

                <div className="pt-2 text-center text-xs text-slate-500">
                  <span>{businessConfig.hours}</span>
                  <span className="mx-1.5">·</span>
                  <span>Shalimar Bagh, Delhi</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
