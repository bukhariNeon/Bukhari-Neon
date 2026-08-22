export const COMPANY = {
  name: 'BUKHARI NEON',
  tagline: 'Premium LED Neon Signs & 3D Signage',
  phone: '+92 300 1234567',
  phoneRaw: '923001234567',
  email: 'orders@bukharineon.pk',
  address: 'Main Boulevard, Lahore, Pakistan',
  hours: 'Mon – Sat: 10:00 AM – 9:00 PM',
  whatsapp: '923001234567',
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tiktok: 'https://tiktok.com',
  },
};

export type ServiceCategory = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  accent: 'blue' | 'green';
};

export const SERVICES: ServiceCategory[] = [
  {
    id: 'islamic',
    title: 'Islamic Neon Signs',
    tagline: 'Faith illuminated',
    description:
      'Beautifully crafted Islamic neon signs featuring Quranic verses, names of Allah, and geometric Islamic patterns — perfect for homes, mosques, and Islamic events.',
    image: 'https://images.pexels.com/photos/10675694/pexels-photo-10675694.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Custom Arabic calligraphy', 'Mosque & madrasah signage', 'Ramadan & Eid decor', 'Gold + neon combinations'],
    accent: 'green',
  },
  {
    id: 'business',
    title: 'Business Signs',
    tagline: 'Stand out, day & night',
    description:
      'Eye-catching LED business signage that pulls customers in — storefronts, logos, shop names, and 3D channel letters built to last outdoors.',
    image: 'https://images.pexels.com/photos/6954312/pexels-photo-6954312.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['3D channel letters', 'Storefront logo signs', 'Illuminated shop boards', 'Weatherproof outdoor build'],
    accent: 'blue',
  },
  {
    id: 'home',
    title: 'Home Decoration',
    tagline: 'Light up your space',
    description:
      'Custom neon signs for living rooms, bedrooms, nurseries, and weddings. Personalised names, quotes, and shapes that make a house feel like home.',
    image: 'https://images.pexels.com/photos/11256801/pexels-photo-11256801.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Personalised names & quotes', 'Bedroom & nursery decor', 'Wedding & engagement signs', 'Battery or plug-in options'],
    accent: 'blue',
  },
  {
    id: 'restaurant',
    title: 'Restaurant & Cafe Signs',
    tagline: 'Set the mood',
    description:
      'Atmospheric neon signage for restaurants, cafes, and food trucks — menu boards, brand signs, and statement pieces that customers love to photograph.',
    image: 'https://images.pexels.com/photos/12955523/pexels-photo-12955523.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Menu & open signs', 'Brand logo neon', 'Instagrammable wall art', 'Food truck signage'],
    accent: 'green',
  },
  {
    id: 'events',
    title: 'Event Decorations',
    tagline: 'Make it unforgettable',
    description:
      'Statement neon pieces for weddings, corporate events, birthdays, and exhibitions. Custom text, names, and themed designs delivered on time.',
    image: 'https://images.pexels.com/photos/20295007/pexels-photo-20295007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Wedding name signs', 'Corporate event branding', 'Birthday & party pieces', 'Exhibition booth signage'],
    accent: 'blue',
  },
  {
    id: 'acrylic-3d',
    title: 'Acrylic Letters & 3D Boards',
    tagline: 'Dimensional craftsmanship',
    description:
      'Precision-cut acrylic letters and 3D sign boards with edge-lit LED illumination. Premium finish for offices, clinics, showrooms, and luxury brands.',
    image: 'https://images.pexels.com/photos/8879105/pexels-photo-8879105.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Edge-lit acrylic letters', '3D logo sign boards', 'Office & clinic signage', 'Gold / silver / rose gold finish'],
    accent: 'green',
  },
];

export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

export const GALLERY: GalleryItem[] = [
  { id: 1, src: 'https://images.pexels.com/photos/5820036/pexels-photo-5820036.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Glowing neon lightning bolt sign', category: 'home' },
  { id: 2, src: 'https://images.pexels.com/photos/20295007/pexels-photo-20295007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Neon YES sign in dim light', category: 'events' },
  { id: 3, src: 'https://images.pexels.com/photos/18441150/pexels-photo-18441150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Neon taco sign at night', category: 'restaurant' },
  { id: 4, src: 'https://images.pexels.com/photos/10675694/pexels-photo-10675694.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Neon sign with inspirational light text', category: 'islamic' },
  { id: 5, src: 'https://images.pexels.com/photos/5605376/pexels-photo-5605376.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'But First Ramen neon sign', category: 'restaurant' },
  { id: 6, src: 'https://images.pexels.com/photos/8879105/pexels-photo-8879105.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Neon LABORATORY lettering', category: 'business' },
  { id: 7, src: 'https://images.pexels.com/photos/11256801/pexels-photo-11256801.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Pink good vibes only neon sign', category: 'home' },
  { id: 8, src: 'https://images.pexels.com/photos/6954313/pexels-photo-6954313.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Red neon Open sign', category: 'business' },
  { id: 9, src: 'https://images.pexels.com/photos/29373552/pexels-photo-29373552.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Blue-green SKY neon sign', category: 'home' },
  { id: 10, src: 'https://images.pexels.com/photos/36173259/pexels-photo-36173259.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Momo is my mojo neon sign on brick', category: 'restaurant' },
  { id: 11, src: 'https://images.pexels.com/photos/8296426/pexels-photo-8296426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Believe in your dreams neon sign', category: 'home' },
  { id: 12, src: 'https://images.pexels.com/photos/27430154/pexels-photo-27430154.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Green neon coffee quote sign', category: 'restaurant' },
  { id: 13, src: 'https://images.pexels.com/photos/5820039/pexels-photo-5820039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Pink neon flamingo sign on brick', category: 'events' },
  { id: 14, src: 'https://images.pexels.com/photos/12259337/pexels-photo-12259337.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'All we have is now neon sign', category: 'home' },
  { id: 15, src: 'https://images.pexels.com/photos/10168341/pexels-photo-10168341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Central Cafe neon sign at night', category: 'restaurant' },
  { id: 16, src: 'https://images.pexels.com/photos/2914550/pexels-photo-2914550.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Neon pizza sign on brick wall', category: 'restaurant' },
  { id: 17, src: 'https://images.pexels.com/photos/13434035/pexels-photo-13434035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Neon seahorse sign glowing', category: 'home' },
  { id: 18, src: 'https://images.pexels.com/photos/3637215/pexels-photo-3637215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Green neon lettering on newspaper backdrop', category: 'business' },
];

export const GALLERY_FILTERS = [
  { id: 'all', label: 'All Work' },
  { id: 'islamic', label: 'Islamic' },
  { id: 'business', label: 'Business' },
  { id: 'home', label: 'Home Decor' },
  { id: 'restaurant', label: 'Restaurant & Cafe' },
  { id: 'events', label: 'Events' },
];

export type Review = {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  initials: string;
};

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Ahmed Raza',
    role: 'Restaurant Owner, Lahore',
    text: 'The neon sign for my cafe is absolutely stunning. Customers constantly take photos in front of it. Excellent craftsmanship and fast delivery.',
    rating: 5,
    initials: 'AR',
  },
  {
    id: 2,
    name: 'Fatima Khan',
    role: 'Home Decor Enthusiast',
    text: 'I ordered a personalised neon sign with my children\'s names for the living room. The quality is premium and the glow is so beautiful at night.',
    rating: 5,
    initials: 'FK',
  },
  {
    id: 3,
    name: 'Bilal Hussain',
    role: 'Business Owner, Karachi',
    text: 'My storefront 3D channel letters look incredible. The team understood my brand and delivered exactly what I wanted. Highly recommended.',
    rating: 5,
    initials: 'BH',
  },
  {
    id: 4,
    name: 'Ayesha Malik',
    role: 'Wedding Planner',
    text: 'We used BUKHARI NEON for three wedding events this season. Every piece was delivered on time and looked magical. Our clients were thrilled.',
    rating: 5,
    initials: 'AM',
  },
  {
    id: 5,
    name: 'Usman Tariq',
    role: 'Clinic Director, Islamabad',
    text: 'The acrylic 3D logo board for my clinic looks so professional. Clean edges, bright even lighting, and the gold finish is exactly as promised.',
    rating: 5,
    initials: 'UT',
  },
  {
    id: 6,
    name: 'Sana Iqbal',
    role: 'Cafe Owner, Islamabad',
    text: 'From design to installation the whole process was smooth. The neon menu sign has become the signature feature of my cafe. Thank you!',
    rating: 5,
    initials: 'SI',
  },
];

export type FAQ = {
  id: number;
  question: string;
  answer: string;
};

export const FAQS: FAQ[] = [
  {
    id: 1,
    question: 'How long does it take to make a custom neon sign?',
    answer: 'Standard custom signs take 5–7 working days after design approval. Larger or complex 3D sign boards may take 7–10 days. Rush orders are available — message us on WhatsApp for urgent requests.',
  },
  {
    id: 2,
    question: 'Do you deliver across Pakistan?',
    answer: 'Yes, we deliver nationwide. Lahore orders can be delivered and installed by our team. For other cities we securely pack and ship via reliable couriers, with installation guidance provided.',
  },
  {
    id: 3,
    question: 'Are LED neon signs safe and energy efficient?',
    answer: 'Absolutely. Our signs use low-voltage LED neon tubes that stay cool to the touch, consume minimal electricity, and last up to 50,000 hours. They are safe for homes, shops, and events.',
  },
  {
    id: 4,
    question: 'Can I get a sign in my own design or language?',
    answer: 'Yes. We create custom designs including English, Urdu, Arabic, and calligraphy. Share your idea, logo, or text on WhatsApp and our designers will prepare a digital preview before production.',
  },
  {
    id: 5,
    question: 'What is the price of a custom neon sign?',
    answer: 'Pricing depends on size, design complexity, and material. Signs start from PKR 4,000. Share your requirements on WhatsApp and we will send a detailed quote with no obligation.',
  },
  {
    id: 6,
    question: 'Do you offer a warranty?',
    answer: 'Yes, all our LED neon signs come with a 12-month warranty covering the LED modules and power supply. Acrylic and 3D boards carry a 6-month workmanship warranty.',
  },
];

export const STATS = [
  { value: '500+', label: 'Signs Crafted' },
  { value: '7', label: 'Years of Craft' },
  { value: '300+', label: 'Happy Clients' },
  { value: '15+', label: 'Cities Served' },
];

export const PROCESS = [
  { step: '01', title: 'Share Your Idea', text: 'Tell us your design, text, or logo on WhatsApp. We discuss size, colour, and placement.' },
  { step: '02', title: 'Digital Preview', text: 'Our designers send a digital mockup so you see exactly how your sign will look.' },
  { step: '03', title: 'Crafting', text: 'We precision-build your sign using premium LED neon and acrylic materials.' },
  { step: '04', title: 'Delivery & Install', text: 'We deliver nationwide and install in Lahore, with guidance for other cities.' },
];
