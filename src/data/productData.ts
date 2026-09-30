import heroImg from '../assets/images/hero_electronics_delhi_1790786355486.jpg';
import smartphonesImg from '../assets/images/category_smartphones_1790786365705.jpg';
import tvImg from '../assets/images/category_smart_tv_1790786376197.jpg';
import fridgeImg from '../assets/images/category_refrigerator_1790786386520.jpg';
import washingImg from '../assets/images/category_washing_machine_1790786398981.jpg';
import kitchenImg from '../assets/images/category_kitchen_appliances_1790786425058.jpg';
import storeImg from '../assets/images/store_interior_delhi_1790786411971.jpg';

export { heroImg, smartphonesImg, tvImg, fridgeImg, washingImg, kitchenImg, storeImg };

export interface ProductCategory {
  id: string;
  number: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  ctaText: string;
  whatsappTopic: string;
  highlights: string[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "mobiles-accessories",
    number: "01",
    name: "Mobile Phones & Accessories",
    shortDesc: "Latest smartphones, earbuds, chargers, cables, cases, screen protectors and more.",
    fullDesc:
      "Discover the latest smartphones from major brands, from budget-friendly options to premium flagship devices, paired with genuine certified accessories.",
    image: smartphonesImg,
    features: [
      "Latest flagship smartphones",
      "Budget and mid-range options",
      "Wireless earbuds & headphones",
      "Chargers, cables & power banks",
      "Screen protectors & cases",
      "Smartwatches & fitness trackers",
    ],
    ctaText: "Ask About Smartphones",
    whatsappTopic: "Smartphones & Mobile Accessories",
    highlights: ["Official Brand Warranties", "Wide Range of Brands", "Expert Setup Assistance"],
  },
  {
    id: "led-tvs",
    number: "02",
    name: "LED TVs & Home Entertainment",
    shortDesc: "Smart TVs and LED televisions with Full HD and 4K options for modern living rooms.",
    fullDesc: "Enjoy immersive entertainment with modern LED and Smart TV options engineered with vivid displays and rich surround audio.",
    image: tvImg,
    features: [
      "Full HD to 4K Ultra HD options",
      "Smart TV functionality with streaming apps",
      "Multiple screen sizes (32″, 43″, 55″, 65″+)",
      "Energy-efficient panel technology",
      "Manufacturer warranty support",
      "Home delivery availability for Delhi area",
    ],
    ctaText: "Explore TVs",
    whatsappTopic: "LED & Smart TVs",
    highlights: ["Cinematic Displays", "Multiple Screen Sizes", "Delivery Support"],
  },
  {
    id: "refrigerators",
    number: "03",
    name: "Refrigerators",
    shortDesc: "Modern refrigerators with efficient cooling, digital inverter tech, and spacious storage.",
    fullDesc: "Efficient, stylish and durable refrigerators designed for modern Indian homes, keeping food fresh and energy bills low.",
    image: fridgeImg,
    features: [
      "Single-door options for compact spaces",
      "Double-door & multi-door options for families",
      "Advanced multi-airflow cooling technology",
      "Energy-efficient 3-star to 5-star inverter models",
      "Spacious vegetable crispers and toughened glass",
      "Manufacturer warranty coverage",
    ],
    ctaText: "Explore Refrigerators",
    whatsappTopic: "Refrigerators",
    highlights: ["Inverter Compressor Tech", "Optimal Energy Ratings", "Spacious Capacities"],
  },
  {
    id: "washing-machines",
    number: "04",
    name: "Washing Machines",
    shortDesc: "Top-load and front-load washing machines with modern wash programs and gentle fabric care.",
    fullDesc: "Modern washing machines designed for efficient and convenient laundry with smart wash programs and durable motors.",
    image: washingImg,
    features: [
      "Top-load fully automatic machines",
      "Front-load premium fabric-care models",
      "Multiple wash programs for delicate to heavy fabrics",
      "Quick wash cycle for everyday speed",
      "Water-efficient and eco-friendly operation",
      "Durable inverter motor technology",
    ],
    ctaText: "Explore Washing Machines",
    whatsappTopic: "Washing Machines",
    highlights: ["Gentle Fabric Care", "Low Water Consumption", "Long Motor Warranty"],
  },
  {
    id: "kitchen-appliances",
    number: "05",
    name: "Kitchen Appliances",
    shortDesc: "Microwave ovens, stoves, mixers, blenders, water purifiers and everyday culinary tools.",
    fullDesc: "Modern kitchen essentials designed to make everyday cooking faster, healthier, and hassle-free.",
    image: kitchenImg,
    features: [
      "Convection & grill microwave ovens",
      "Toughened glass top gas stoves",
      "Induction & electric cooktops",
      "Heavy-duty mixer grinders with multi jars",
      "High-speed blenders & food processors",
      "Multi-stage RO & UV water purifiers",
      "Daily cooking small appliances",
    ],
    ctaText: "Explore Kitchen Appliances",
    whatsappTopic: "Kitchen Appliances",
    highlights: ["Heavy-Duty Motors", "Food Grade Materials", "Trusted Home Brands"],
  },
  {
    id: "smart-accessories",
    number: "06",
    name: "Smart Accessories & Audio",
    shortDesc: "Smartwatches, fitness trackers, headphones, fast chargers and everyday tech essentials.",
    fullDesc: "Elevate your daily connectivity with certified chargers, true wireless stereo earbuds, and connected smart wearable gear.",
    image: smartphonesImg,
    features: [
      "Bluetooth calling smartwatches",
      "Active Noise Cancellation (ANC) earbuds",
      "Type-C PD fast chargers and durable braided cables",
      "High-capacity power banks (10,000mAh - 20,000mAh)",
      "Premium tempered glass & military-grade cases",
      "Car chargers & desktop mobile stands",
    ],
    ctaText: "Explore Accessories",
    whatsappTopic: "Smart Accessories & Audio",
    highlights: ["Fast Charging Certified", "Crisp Audio Clarity", "Durable Build Quality"],
  },
];

export interface SmartphoneTier {
  id: string;
  name: string;
  description: string;
  priceNote: string;
  popularFor: string[];
}

export const smartphoneTiers: SmartphoneTier[] = [
  {
    id: "budget",
    name: "Budget Everyday",
    description: "Reliable daily performance with long battery life and crisp displays for calling, messaging, and media.",
    priceNote: "Ask for latest store price",
    popularFor: ["Long Battery Life", "Clear Displays", "Dual SIM Support"],
  },
  {
    id: "mid-range",
    name: "Mid-Range Performers",
    description: "High refresh-rate AMOLED displays, 5G connectivity, and multi-lens camera setups with fast charging.",
    priceNote: "Ask for latest store price",
    popularFor: ["High-speed 5G", "OIS Cameras", "Fast Charging Tech"],
  },
  {
    id: "premium",
    name: "Premium Tier",
    description: "Flagship processors, elegant glass-metal industrial designs, and studio-grade photographic capabilities.",
    priceNote: "Ask for latest store price",
    popularFor: ["Flagship Processors", "Premium Materials", "Advanced Video Capture"],
  },
  {
    id: "flagship",
    name: "Ultra Flagship",
    description: "Top-tier mobile engineering featuring revolutionary zoom cameras, titanium craftsmanship, and maximum storage.",
    priceNote: "Ask for latest store price",
    popularFor: ["Titanium Chassis", "Periscope Zoom", "All-Day Intensive Computing"],
  },
];

export interface OfferCard {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  details: string[];
  ctaLabel: string;
  inquiryTopic: string;
}

export const featuredOffers: OfferCard[] = [
  {
    id: "offer-smartphones",
    title: "Smartphone Festive & Seasonal Deals",
    category: "Mobile Phones",
    subtitle: "Attractive exchange benefits and special bundle pricing across popular 5G smartphones.",
    details: [
      "Official manufacturer warranty on all devices",
      "Guidance on finance and card installment options in-store",
      "Complimentary data transfer assistance",
    ],
    ctaLabel: "Check Availability",
    inquiryTopic: "Smartphone Offers & Bundles",
  },
  {
    id: "offer-accessories",
    title: "Mobile Accessories Combo Savings",
    category: "Accessories",
    subtitle: "Pair your smartphone with certified high-speed PD adapters, braided cables, and tempered screen glass.",
    details: [
      "100% genuine brand chargers and cables",
      "Precision tempered glass application in store",
      "Special combo pricing when purchased with a phone",
    ],
    ctaLabel: "Check Availability",
    inquiryTopic: "Accessories Combo Deals",
  },
  {
    id: "offer-tv",
    title: "Smart TV Upgrades & In-Store Guidance",
    category: "LED TVs",
    subtitle: "Experience 4K visuals and smart audio in your living room with trusted Delhi delivery guidance.",
    details: [
      "Display sizes from 32″ to 65″ ready for inquiry",
      "Brand-authorized warranty cards provided",
      "Wall mount bracket guidance available",
    ],
    ctaLabel: "Check Availability",
    inquiryTopic: "Smart TV In-Store Offers",
  },
  {
    id: "offer-appliances",
    title: "Home Appliances Value Packages",
    category: "Refrigerators & Washers",
    subtitle: "Energy-efficient 5-star inverter refrigerators and washing machines for modern Delhi households.",
    details: [
      "Inverter compressor & motor models",
      "Official brand service network in Delhi NCR",
      "In-store consultation to match your family size",
    ],
    ctaLabel: "Check Availability",
    inquiryTopic: "Home Appliances Special Inquiries",
  },
];
