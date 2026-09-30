/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { OffersPage } from './pages/OffersPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { businessConfig } from './config/businessConfig';

export default function App() {
  // Normalize initial pathname
  const getInitialPath = () => {
    const rawPath = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
    // Allow clean URLs
    if (['', '/', '/about', '/products', '/contact', '/offers'].includes(rawPath)) {
      return rawPath === '' ? '/' : rawPath;
    }
    return rawPath;
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);

  // Sync route changes with browser history and document title
  const navigateTo = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
  };

  // Listen to popstate (browser back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const rawPath = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      setCurrentPath(rawPath === '' ? '/' : rawPath);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync document title and canonical meta dynamically per page for SEO
  useEffect(() => {
    let title = 'Bhakti Electronics | Mobile Phones & Electronics Store in Delhi';
    let description =
      'Bhakti Electronics is a trusted electronics retailer in Delhi offering smartphones, accessories, LED TVs, refrigerators, washing machines and kitchen appliances.';

    switch (currentPath) {
      case '/about':
        title = 'About Bhakti Electronics | Trusted Electronics Retailer in Delhi';
        description =
          'Discover Bhakti Electronics, serving Delhi since 2021 as a JioMart Digital Partner providing authentic smartphones and home appliances.';
        break;
      case '/products':
        title = 'Mobile Phones & Electronics | Bhakti Electronics Delhi';
        description =
          'Explore smartphones, smart TVs, refrigerators, washing machines, kitchen appliances and accessories at Bhakti Electronics Delhi.';
        break;
      case '/contact':
        title = 'Contact Bhakti Electronics | Shalimar Bagh Delhi';
        description =
          'Visit Bhakti Electronics in Shalimar Bagh, Delhi. Phone: +91 99999 04774. Open daily till 8:00 PM for genuine electronics and after-sales support.';
        break;
      case '/offers':
        title = 'Offers & Deals | Bhakti Electronics Delhi';
        description =
          'Find genuine seasonal deals and bundle offers on smartphones, accessories and home appliances at Bhakti Electronics Delhi.';
        break;
      default:
        if (currentPath !== '/') {
          title = 'Page Not Found | Bhakti Electronics Delhi';
        }
        break;
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }
  }, [currentPath]);

  // Render current view
  const renderCurrentView = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={navigateTo} />;
      case '/about':
        return <AboutPage onNavigate={navigateTo} />;
      case '/products':
        return <ProductsPage onNavigate={navigateTo} />;
      case '/contact':
        return <ContactPage onNavigate={navigateTo} />;
      case '/offers':
        return businessConfig.features.showOffersPage ? (
          <OffersPage onNavigate={navigateTo} />
        ) : (
          <NotFoundPage onNavigate={navigateTo} />
        );
      default:
        return <NotFoundPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 antialiased selection:bg-amber-100 selection:text-amber-900 pb-16 md:pb-0">
      <Header currentPath={currentPath} onNavigate={navigateTo} />
      <main className="flex-1 focus:outline-none" id="main-content">
        {renderCurrentView()}
      </main>
      <Footer onNavigate={navigateTo} />
      <FloatingWhatsApp />
    </div>
  );
}
