/**
 * Bhakti Electronics — Central Business Configuration
 * Single source of truth for all contact, location, branding, and content values.
 */

export interface BusinessConfig {
  name: string;
  legalName: string;
  tagline: string;
  type: string;
  established: string;
  servingSinceText: string;
  partnership: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  emailPlaceholder: string;
  hours: string;
  hoursDetail: string;
  address: {
    shopNo: string;
    plot: string;
    khataNo: string;
    landmark: string;
    village: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    formatted: string;
  };
  maps: {
    directionsUrl: string;
    embedUrl: string;
  };
  stats: Array<{
    id: string;
    label: string;
    value: string;
    sublabel?: string;
  }>;
  secondLocationPlaceholder: {
    title: string;
    status: string;
    description: string;
    isConfigured: boolean;
  };
  brandsAvailable: string[];
  features: {
    showOffersPage: boolean;
    showSecondLocationPlaceholder: boolean;
  };
  social: {
    hasFacebook: boolean;
    hasInstagram: boolean;
    hasTwitter: boolean;
    facebookUrl: string;
    instagramUrl: string;
    twitterUrl: string;
  };
}

export const businessConfig: BusinessConfig = {
  name: "Bhakti Electronics",
  legalName: "Bhakti Electronics",
  tagline: "Your One-Stop Shop for Mobile Phones & Electronics in Delhi",
  type: "Mobile Phones & Electronics Retailer",
  established: "2021",
  servingSinceText: "Serving Delhi Since 2021",
  partnership: "JioMart Digital Partner",
  phone: "+91 99999 04774",
  phoneRaw: "+919999904774",
  whatsapp: "+919999904774",
  emailPlaceholder: "contact@bhaktielectronics.com", // Clean placeholder, editable
  hours: "Open daily till 8:00 PM",
  hoursDetail: "Monday – Sunday: 10:00 AM – 8:00 PM",
  address: {
    shopNo: "Shop No. 1, Ground Floor",
    plot: "Plot B-3",
    khataNo: "KH No. 289",
    landmark: "Near INA Block",
    village: "Shalimar Village",
    locality: "Shalimar Bagh",
    city: "Delhi",
    state: "Delhi",
    pincode: "110088",
    country: "India",
    formatted:
      "Shop No. 1, Ground Floor, Plot B-3, KH No. 289, Near INA Block, Shalimar Village, Shalimar Bagh, Delhi - 110088",
  },
  maps: {
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bhakti+Electronics+Plot+B-3+KH+No+289+Shalimar+Village+Shalimar+Bagh+Delhi+110088",
    embedUrl:
      "https://maps.google.com/maps?q=Shop%20No.%201,%20Plot%20B-3,%20KH%20No.%20289,%20Shalimar%20Village,%20Shalimar%20Bagh,%20Delhi%20110088&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  stats: [
    { id: "products", label: "Products", value: "500+", sublabel: "Smartphones & appliances" },
    { id: "customers", label: "Customers", value: "10K+", sublabel: "Satisfied Delhi buyers" },
    { id: "rating", label: "Rating", value: "4.7+", sublabel: "Customer satisfaction" },
    { id: "locations", label: "Locations", value: "2+", sublabel: "Retail touchpoints" },
    { id: "serving", label: "Serving Since", value: "2021", sublabel: "Years of trusted service" },
  ],
  secondLocationPlaceholder: {
    title: "Location 2 — Delhi NCR",
    status: "Upcoming Retail Point / Expansion",
    description:
      "Our second retail branch details will be officially published here soon. For all immediate sales, product consultations, and store visits, please visit our main Shalimar Bagh showroom.",
    isConfigured: false,
  },
  brandsAvailable: [
    "Apple",
    "Samsung",
    "OnePlus",
    "Xiaomi",
    "Realme",
    "POCO",
    "Vivo",
    "Oppo",
    "LG",
    "Whirlpool",
    "Haier",
    "Sony",
  ],
  features: {
    showOffersPage: true, // Optional Page 5 can easily be toggled here!
    showSecondLocationPlaceholder: true,
  },
  social: {
    // Only real verified URLs should be enabled. By default false to not invent fake profiles.
    hasFacebook: false,
    hasInstagram: false,
    hasTwitter: false,
    facebookUrl: "",
    instagramUrl: "",
    twitterUrl: "",
  },
};

/**
 * Helper to build verified WhatsApp links with domain-specific prefilled messages.
 */
export function createWhatsAppLink(subject?: string): string {
  const cleanNumber = businessConfig.whatsapp.replace(/[^0-9]/g, "");
  const defaultText =
    "Hello Bhakti Electronics, I would like to inquire about product availability and the latest pricing.";
  const customizedText = subject
    ? `Hello Bhakti Electronics, I am interested in ${subject}. Please share the latest price and availability.`
    : defaultText;

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(customizedText)}`;
}

/**
 * Helper for tel: links
 */
export function createPhoneLink(): string {
  const cleanNumber = businessConfig.phoneRaw.replace(/[^0-9+]/g, "");
  return `tel:${cleanNumber}`;
}
