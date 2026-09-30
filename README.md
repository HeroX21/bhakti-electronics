# Bhakti Electronics

<p align="center">
  <strong>Premium Electronics Retail Experience for Delhi</strong><br/>
  A modern, responsive and conversion-focused website for Bhakti Electronics.
</p>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#features">Features</a> •
  <a href="#pages">Pages</a> •
  <a href="#technology">Technology</a> •
  <a href="#setup">Setup</a> •
  <a href="#configuration">Configuration</a>
</p>

---

## Overview

**Bhakti Electronics** is a premium digital storefront and local-business website designed for a Delhi-based retailer specializing in mobile phones, electronics, home appliances and accessories.

The project transforms the traditional electronics-store website into a polished digital experience focused on:

- Premium Indian retail branding
- Product discovery
- WhatsApp-based product enquiries
- Store visits and directions
- Mobile-first usability
- Local SEO
- Fast performance
- Accessibility
- Clear conversion paths

The design language combines **deep navy, refined gold and technology-inspired cyan** with the Bhakti Electronics lotus-and-circuit identity.

> **Brand principle:** Trust • Technology • Guidance • Convenience

---

## Business Information

| Field | Details |
|---|---|
| **Business** | Bhakti Electronics |
| **Category** | Mobile Phones & Electronics Retailer |
| **Location** | Shalimar Bagh, Delhi, India |
| **Serving Since** | 2021 |
| **Partnership** | JioMart Digital Partner |
| **Products** | Smartphones, accessories, TVs, refrigerators, washing machines, kitchen appliances |
| **Phone** | +91 99999 04774 |
| **Store Hours** | Open daily till 8:00 PM |

### Store Address

**Bhakti Electronics — Shalimar Bagh**  
Shop No. 1, Ground Floor,  
Plot B-3, KH No. 289,  
Near INA Block,  
Shalimar Village,  
Shalimar Bagh,  
Delhi — 110088

---

## Design Direction

The website is intentionally designed to feel like a **professional established electronics brand**, rather than a generic AI-generated template.

### Visual Language

- Premium
- Modern
- Minimal
- Technology-focused
- Trustworthy
- Indian retail oriented
- Conversion focused
- Clean typography
- High-quality product photography
- Restrained animation
- Strong whitespace and hierarchy

### Brand Palette

| Role | Color |
|---|---|
| Primary | Deep Navy |
| Secondary | Dark Tech Blue |
| Accent | Electric Cyan / Turquoise |
| Premium Accent | Metallic Gold |
| Background | White / Soft Gray |
| Text | Charcoal / Near Black |

The visual identity is based on the existing **lotus + electronic circuit + ॐ** concept while simplifying the presentation for digital use.

---

## Features

### Customer Experience

- Responsive desktop, tablet and mobile layouts
- Premium homepage hero
- Product category discovery
- Mobile phone showcase
- Electronics and appliance categories
- Store information
- Contact form
- Google Maps integration point
- Click-to-call actions
- WhatsApp enquiry flow
- Floating WhatsApp CTA
- Mobile sticky contact actions
- Smooth scrolling
- Scroll-reveal animations
- Accessible navigation

### Business & Conversion

- Product enquiry instead of fake e-commerce checkout
- Pre-filled WhatsApp messages
- Product availability enquiries
- Store visit CTA
- Get Directions CTA
- Centralized business configuration
- Editable product/category content
- Editable offers
- Configurable second-location placeholder

### SEO & Performance

- Semantic HTML
- Page-specific metadata
- Local SEO structure
- `LocalBusiness` structured data
- `WebSite` structured data
- `BreadcrumbList` structured data
- Open Graph metadata
- Sitemap-ready routing
- Robots configuration
- Lazy-loaded images
- WebP/AVIF-ready image pipeline
- Responsive image sizing
- Lighthouse-conscious performance
- Accessible forms and controls

---

## Pages

### 01 — Home

The primary conversion page.

Sections include:

- Premium hero
- Trust statistics
- Technology trust section
- Product categories
- Smartphone discovery
- Why Bhakti Electronics
- Store CTA
- WhatsApp conversion points

### 02 — About

Introduces the business and its positioning.

Sections include:

- Company introduction
- Serving Delhi since 2021
- JioMart Digital Partner section
- Core values
- Business journey
- Business statistics

### 03 — Products & Services

Dedicated product and service discovery page.

Categories include:

- Mobile Phones & Accessories
- LED TVs
- Refrigerators
- Washing Machines
- Kitchen Appliances
- Smart Accessories
- Product consultation
- Genuine products
- Warranty support
- Digital ordering
- After-sales assistance

### 04 — Contact / Store

Designed primarily for local conversion.

Includes:

- Store address
- Phone
- Opening information
- Contact form
- Google Maps integration
- Call CTA
- WhatsApp CTA
- Directions CTA

### 05 — Offers *(Optional)*

A configurable promotional page for:

- Smartphone offers
- Accessory offers
- TV deals
- Home appliance offers

No fake prices or discounts are displayed. Offers can be populated with real business data later.

---

## Product Categories

The website supports the following core categories:

### Mobile Phones & Accessories

- Smartphones
- Wireless earbuds
- Headphones
- Chargers
- Cables
- Power banks
- Cases
- Screen protectors
- Smartwatches
- Fitness trackers

### LED TVs

- Smart TVs
- Full HD
- 4K
- Multiple screen sizes
- Energy-efficient models

### Refrigerators

- Single-door
- Double-door
- Advanced cooling
- Energy-efficient models
- Spacious storage

### Washing Machines

- Top-load
- Front-load
- Fully automatic
- Multiple wash programs
- Quick wash
- Inverter technology

### Kitchen Appliances

- Microwave ovens
- Gas stoves
- Electric stoves
- Blenders
- Mixers
- Water purifiers
- Cooking appliances

---

## Conversion Strategy

This website is intentionally **not a fake marketplace**.

The primary customer journey is:

```text
Discover Product
      ↓
Explore Category
      ↓
Ask About Availability
      ↓
WhatsApp / Call
      ↓
Store Visit or Purchase
```

### Primary CTA

**WhatsApp Enquiry**

Example generated message:

> Hello Bhakti Electronics, I am interested in [PRODUCT/CATEGORY]. Please share the latest price and availability.

### Secondary CTA

**Call Store**

### Tertiary CTA

**Get Directions**

---

## Technology

The implementation can be built with a modern component-based frontend architecture.

Recommended stack:

- React
- TypeScript
- Vite or Next.js
- Tailwind CSS
- Lucide React / equivalent icon system
- Responsive CSS
- Semantic HTML
- Structured data / JSON-LD

### Architecture Principles

- Reusable components
- Centralized configuration
- Page-specific SEO metadata
- Component-driven UI
- Mobile-first CSS
- Minimal dependencies
- No unnecessary backend complexity
- Easy content maintenance

---

## Suggested Project Structure

```text
bhakti-electronics-website/
├── public/
│   ├── images/
│   ├── favicon/
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── components/
│   │   ├── Header
│   │   ├── MobileMenu
│   │   ├── Hero
│   │   ├── Stats
│   │   ├── ProductCategoryCard
│   │   ├── ProductCard
│   │   ├── TrustCard
│   │   ├── FeatureCard
│   │   ├── ContactForm
│   │   ├── MapSection
│   │   ├── WhatsAppButton
│   │   ├── CTASection
│   │   ├── Footer
│   │   └── Breadcrumbs
│   │
│   ├── pages/
│   │   ├── Home
│   │   ├── About
│   │   ├── Products
│   │   ├── Contact
│   │   └── Offers
│   │
│   ├── config/
│   │   └── business.ts
│   │
│   ├── data/
│   │   ├── products.ts
│   │   ├── categories.ts
│   │   └── offers.ts
│   │
│   ├── lib/
│   │   ├── whatsapp.ts
│   │   ├── seo.ts
│   │   └── maps.ts
│   │
│   ├── assets/
│   ├── App.tsx
│   └── main.tsx
│
├── README.md
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Central Configuration

Business information should be managed from one configuration object.

Example:

```ts
export const businessConfig = {
  name: "Bhakti Electronics",
  phone: "+91 99999 04774",
  whatsapp: "+919999904774",
  established: "2021",
  city: "Delhi",
  area: "Shalimar Bagh",
  postalCode: "110088",

  address:
    "Shop No. 1, Ground Floor, Plot B-3, KH No. 289, Near INA Block, Shalimar Village, Shalimar Bagh, Delhi - 110088",

  hours: "Open daily till 8:00 PM",

  partnership: "JioMart Digital Partner",

  stats: {
    products: "500+",
    customers: "10K+",
    rating: "4.7+",
    locations: "2+"
  }
};
```

This prevents business information from being duplicated throughout the application.

---

## Content Integrity

The website follows a strict content rule:

### Never invent

- Customer testimonials
- Reviews
- Discounts
- Product prices
- Product stock
- Certifications
- Awards
- Employee names
- Social media URLs
- Second-store address
- Warranty terms
- Unsupported product claims

When information is unavailable, use an **editable placeholder** instead.

This keeps the website commercially professional and factually reliable.

---

## SEO

### Homepage

**Title**

```text
Bhakti Electronics | Mobile Phones & Electronics Store in Delhi
```

**Description**

```text
Bhakti Electronics is a trusted electronics retailer in Delhi offering smartphones, accessories, LED TVs, refrigerators, washing machines and kitchen appliances.
```

### About

```text
About Bhakti Electronics | Trusted Electronics Retailer in Delhi
```

### Products

```text
Mobile Phones & Electronics | Bhakti Electronics Delhi
```

### Contact

```text
Contact Bhakti Electronics | Shalimar Bagh Delhi
```

### Local Search Topics

- Bhakti Electronics
- Mobile shop Shalimar Bagh
- Mobile phone shop Delhi
- Electronics shop Shalimar Bagh
- Smartphone shop Delhi
- LED TV shop Delhi
- Refrigerator shop Delhi
- Washing machine shop Delhi
- Kitchen appliances Delhi
- Mobile accessories Shalimar Bagh

Avoid keyword stuffing.

---

## Accessibility

The website is designed with accessibility as a first-class requirement.

Includes:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Accessible form labels
- Appropriate ARIA labels
- Sufficient color contrast
- Touch-friendly controls
- Meaningful image alt text
- Logical heading hierarchy
- No critical information embedded only inside images

---

## Responsive Breakpoints

### Desktop

```text
≥ 1200px
```

Optimized for large screens and 1440px layouts.

### Tablet

```text
768px – 1199px
```

Adaptive grid and navigation.

### Mobile

```text
320px – 767px
```

Includes:

- Hamburger menu
- Stacked hero
- Full-width CTAs
- Mobile product cards
- Sticky call/WhatsApp actions
- No horizontal overflow
- Touch-friendly controls

---

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/bhakti-electronics-website.git
cd bhakti-electronics-website
```

Install dependencies:

```bash
npm install
```

Start development:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Environment Configuration

If external services are enabled, create:

```text
.env
```

Example:

```env
VITE_GOOGLE_MAPS_URL=
VITE_WHATSAPP_NUMBER=919999904774
VITE_SITE_URL=
```

Never commit private API keys or secrets.

---

## WhatsApp Integration

WhatsApp enquiry URLs should be generated dynamically.

Example:

```ts
const message =
  "Hello Bhakti Electronics, I am interested in Mobile Phones. Please share the latest price and availability.";

const url =
  `https://wa.me/919999904774?text=${encodeURIComponent(message)}`;
```

Product and category names should be inserted dynamically.

---

## Maps Integration

The Google Maps destination should be configurable rather than hard-coded throughout the application.

Use the verified store address:

```text
Bhakti Electronics,
Shop No. 1, Ground Floor,
Plot B-3, KH No. 289,
Near INA Block,
Shalimar Village,
Shalimar Bagh,
Delhi - 110088
```

---

## Brand Identity

The visual identity should use the Bhakti Electronics logo concept:

**Lotus + Electronic Circuit + ॐ**

The logo should be treated as a premium technology/cultural identity rather than a heavy 3D emblem.

Recommended website usage:

- Compact horizontal logo in navigation
- Full emblem in hero/brand areas
- Simplified lotus/circuit icon for favicon
- Light version on dark backgrounds
- Dark version on light backgrounds

### Logo Requirements

The production logo should be:

- Vector-based
- Symmetrical
- Scalable
- Clean at 32–48px
- Suitable for print
- Suitable for digital
- Free from excessive bevels
- Free from excessive 3D effects
- Legible on both light and dark backgrounds

---

## Performance Goals

Target a fast experience even on Indian mobile networks.

### Requirements

- Lazy-load below-the-fold images
- Prefer WebP/AVIF
- Use responsive image dimensions
- Avoid oversized hero assets
- Minimize JavaScript
- Optimize fonts
- Avoid unnecessary dependencies
- Use CSS efficiently
- Prevent layout shift
- Keep interactive elements responsive

---

## Quality Checklist

Before deployment, verify:

- [ ] All navigation links work
- [ ] All CTAs work
- [ ] Mobile navigation works
- [ ] Contact form validates correctly
- [ ] WhatsApp links work
- [ ] Phone link works
- [ ] Directions link works
- [ ] Map destination is correct
- [ ] Responsive layouts work
- [ ] No horizontal scrolling
- [ ] Images have appropriate alt text
- [ ] SEO metadata is present
- [ ] JSON-LD is valid
- [ ] Open Graph metadata is present
- [ ] Sitemap is configured
- [ ] Robots configuration is present
- [ ] 404 page exists
- [ ] Loading states are polished
- [ ] Business information is centralized
- [ ] No unsupported claims are displayed
- [ ] Shalimar Bagh address is preserved exactly
- [ ] WhatsApp number is configurable
- [ ] Second location remains a placeholder until verified

---

## Production Philosophy

Bhakti Electronics should feel like a **real premium retail brand with a strong local presence**, not a generic template.

The experience should communicate:

> **TRUST**  
> Genuine products and dependable service.

> **TECHNOLOGY**  
> Modern smartphones, electronics and appliances.

> **EXPERTISE**  
> Practical product guidance.

> **CONVENIENCE**  
> Fast WhatsApp enquiries, calls and directions.

> **LOCAL PRESENCE**  
> A physical electronics destination in Shalimar Bagh, Delhi.

---

## Repository

**Suggested repository name:**

```text
bhakti-electronics-website
```

**Short description:**

```text
Premium responsive website for Bhakti Electronics — a Delhi-based mobile, electronics and home-appliance retailer.
```

---

## License

Unless otherwise specified by the project owner, the source code and brand assets are proprietary to **Bhakti Electronics**.

Third-party libraries remain subject to their respective licenses.

---

<p align="center">
  <strong>Bhakti Electronics</strong><br/>
  <em>Technology You Can Trust.</em>
</p>
