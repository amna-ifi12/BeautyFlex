import { Product } from '../types';

export const COFFEE_ACNE_SOAP: Product = {
  id: 'beautyflex-coffee-acne-soap',
  name: 'Coffee Acne Soap',
  tagline: 'Gentle Care for Clear, Confident Skin',
  subhead: 'Made for acne-prone skin · Daily cleansing made simple · 100% Organic',
  organicCertification: '100% ORGANIC',
  images: [
    {
      id: 'jar-podium',
      url: '/assets/aistudio/WhatsApp_Image_2026-10-08_at_12.51.09_AM_042c3fdc.jpeg',
      alt: 'BeautyFlex Coffee Acne Soap Jar presented on warm terracotta studio pedestal',
      title: 'Studio Showcase & Jar Presentation',
      badge: 'Signature Presentation'
    },
    {
      id: 'bar-and-jar',
      url: '/assets/aistudio/WhatsApp_Image_2026-10-08_at_12.51.08_AM_cf8cd159.jpeg',
      alt: 'BeautyFlex Anti-Acne Soap jar with artisanal wrapped bar and Thank You seal',
      title: 'Artisanal Soap Bar & Packaging',
      badge: 'Complete Set'
    },
    {
      id: 'original-twine-jar',
      url: '/assets/aistudio/WhatsApp_Image_2026-10-03_at_6.30.43_PM_444972cc.jpeg',
      alt: 'BeautyFlex 100% Organic Coffee Acne Soap original artisanal glass jar with twine tie',
      title: 'Original Artisanal Packaging',
      badge: '100% Organic Jar'
    }
  ],
  priceNotice: 'Price provided upon order confirmation',
  unitPrice: null, // Price not provided in brief; strictly adhering to prompt instruction
  currencySymbol: '$',
  features: [
    {
      title: '100% Organic Formulation',
      description: 'Crafted with certified organic ingredients and natural coffee grounds designed to nurture your skin barrier.',
      icon: 'sparkles'
    },
    {
      title: 'Made for Acne-Prone Skin',
      description: 'Specially targeted for breakouts and blemishes without harsh synthetic chemicals or aggressive drying agents.',
      icon: 'shield-check'
    },
    {
      title: 'Daily Cleansing Made Simple',
      description: 'Gentle enough for morning and evening routines, melting away daily oil, impurities, and dead skin cells.',
      icon: 'droplets'
    },
    {
      title: 'Natural Coffee Antioxidants',
      description: 'Invigorating coffee extract delivers gentle micro-exfoliation and soothing warmth with an uplifting natural aroma.',
      icon: 'coffee'
    }
  ],
  usageSteps: [
    {
      step: '01',
      title: 'Moisten & Lather',
      instruction: 'Splash face with lukewarm water. Rub the soap between clean hands with a few drops of water until a rich, silky foam forms.'
    },
    {
      step: '02',
      title: 'Gentle Circular Massage',
      instruction: 'Apply the lather gently across the face and areas prone to acne. Massage softly for 30–60 seconds in upward circles. Do not scrub hard.'
    },
    {
      step: '03',
      title: 'Rinse & Pat Dry',
      instruction: 'Rinse thoroughly with lukewarm water until completely clean. Gently pat your face dry with a clean, soft towel.'
    },
    {
      step: '04',
      title: 'Follow with Hydration',
      instruction: 'Follow immediately with your favorite gentle moisturizer or sunscreen. Enjoy the refreshed, clean, and balanced feeling.'
    }
  ],
  specifications: [
    { label: 'Product Name', value: 'Coffee Acne Soap' },
    { label: 'Brand', value: 'BeautyFlex' },
    { label: 'Skin Type', value: 'Acne-prone, oily, blemish-prone & sensitive skin' },
    { label: 'Organic Status', value: '100% Organic' },
    { label: 'Form', value: 'Handcrafted solid bar in protective packaging' },
    { label: 'Ritual', value: 'Daily facial cleansing (AM & PM)' },
    { label: 'Texture', value: 'Rich, comforting lather with fine micro-coffee particles' }
  ],
  faqs: [
    {
      question: 'Is this soap gentle enough for everyday use?',
      answer: 'Yes. BeautyFlex Coffee Acne Soap is formulated for daily cleansing. Its organic base creates a soft, comforting lather that removes excess sebum and surface debris without over-stripping natural moisture.'
    },
    {
      question: 'Will this soap dry out or irritate my skin?',
      answer: 'Unlike conventional harsh chemical soaps, our organic formula is balanced to cleanse without creating that tight, uncomfortable sensation. We recommend always following with a gentle hydrator.'
    },
    {
      question: 'How does ordering work if price is confirmed upon checkout?',
      answer: 'You can select your desired quantity and submit an official order request directly through our site. Our BeautyFlex care team verifies batch freshness, applies direct delivery confirmation, and coordinates payment via Cash on Delivery (COD) or direct transfer.'
    },
    {
      question: 'How should I store the soap bar between uses?',
      answer: 'Keep the soap bar on a well-draining soap dish away from sitting water, or store it in its original BeautyFlex container after letting it air dry. This preserves the organic bar for longer.'
    }
  ]
};
