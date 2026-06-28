import { GalleryItem, ServicePackage, BlogPost, FAQItem, Testimonial, TeamMember, CinematographyItem, VideographyItem } from './types';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'w1',
    title: 'The Gilded Symphony',
    category: 'wedding',
    imageUrl: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1200&auto=format&fit=crop',
    description: 'A spectacular royal wedding held in the grand palaces of Jaipur. Highlighting exquisite hand-woven royal couture and heritage jewelry.',
    location: 'Suryagarh Palace, Jaisalmer',
    year: '2025'
  },
  {
    id: 'w2',
    title: 'Whispering Silks',
    category: 'wedding',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    description: 'A deeply personal moment framed under thousands of cascading crystal lights.',
    location: 'The Leela Palace, Udaipur',
    year: '2026'
  },
  {
    id: 'w3',
    title: 'Ethereal Shadows',
    category: 'wedding',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
    description: 'Dramatic lighting casting timeless silhouettes over the hand-crafted veil.',
    location: 'Oberoi Udaivilas, India',
    year: '2025'
  },
  {
    id: 'w4',
    title: 'Laughter in Jaipur',
    category: 'wedding',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
    description: 'Raw, unscripted Joy shared during the Anand Karaj vows.',
    location: 'Taj Rambagh Palace, Jaipur',
    year: '2026'
  },
  {
    id: 'pw1',
    title: 'Golden Hour Embrace',
    category: 'prewedding',
    imageUrl: 'assets/images_and_videos/prewedding/pre_wedding_1_cover_photo.jpg',
    description: 'Ethereal warm glow wrapping around a timeless pre-wedding cinematic shot in the dunes.',
    location: 'Sam Sand Dunes, Jodhpur',
    year: '2026'
  },
  {
    id: 'pw2',
    title: 'The Royal Corridor',
    category: 'prewedding',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop',
    description: 'A timeless, cinematic frame captured within the heritage arches of a majestic fort.',
    location: 'Bhadrajung Fort, Jharkhand',
    year: '2025'
  },
  {
    id: 'pw3',
    title: 'Misty Lake Reverie',
    category: 'prewedding',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
    description: 'Enigmatic morning haze casting a dreamlike glow over an intimate walk by the lakeside.',
    location: 'Patratu Valley, Jharkhand',
    year: '2026'
  },
  {
    id: 'pw4',
    title: 'The Imperial Grandeur',
    category: 'prewedding',
    imageUrl: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1200&auto=format&fit=crop',
    description: 'Soft golden light outlining a breathtaking silhouette under ancient heritage banyan trees.',
    location: 'Netarhat Hills, Jharkhand',
    year: '2026'
  },
  {
    id: 'c1',
    title: 'Chasing the Sunset',
    category: 'couple',
    imageUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1200&auto=format&fit=crop',
    description: 'An intimate portrait capturing raw chemistry in neutral editorial tones.',
    location: 'Amalfi Coast, Italy',
    year: '2025'
  },
  {
    id: 'm1',
    title: 'Maternal Grace',
    category: 'maternity',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop',
    description: 'Exquisite fine-art portrait celebrating new life. Structured black & gold velvet background styling.',
    location: 'Studio Luxe, Mumbai',
    year: '2026'
  },
  {
    id: 'm2',
    title: 'Nature\'s Cradle',
    category: 'maternity',
    imageUrl: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop',
    description: 'A soft, backlit natural embrace amidst tall golden wild grass.',
    location: 'Lonavala Hills',
    year: '2025'
  },
  {
    id: 'b1',
    title: 'Innocence Incarnate',
    category: 'baby',
    imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1200&auto=format&fit=crop',
    description: 'Macro detail focusing on pure textures, tiny fingers, and soft light.',
    location: 'Studio Luxe, Mumbai',
    year: '2026'
  },
  {
    id: 'b2',
    title: 'Golden Slumber',
    category: 'baby',
    imageUrl: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1200&auto=format&fit=crop',
    description: 'Capturing the deep peace of a newborn resting within rich velvet fabrics.',
    location: 'Home Shoot, Delhi NCR',
    year: '2026'
  },
  {
    id: 'f1',
    title: 'Vogue Editorial',
    category: 'fashion',
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
    description: 'High-fashion structural styling for luxury wedding designers.',
    location: 'Mehrangarh Fort, Jodhpur',
    year: '2025'
  },
  {
    id: 'f2',
    title: 'Velvet Noir',
    category: 'fashion',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1200&auto=format&fit=crop',
    description: 'Chiaroscuro studio photography featuring dramatic side-lighting and deep shadows.',
    location: 'Studio Noir, Mumbai',
    year: '2026'
  },
  {
    id: 'p1',
    title: 'Luminous Portrait',
    category: 'portrait',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
    description: 'Raw high-contrast close-up portrait of natural human expression and beauty.',
    location: 'The Studio, Juhu',
    year: '2025'
  },
  {
    id: 'dr1',
    title: 'The Aerial Frame',
    category: 'drone',
    imageUrl: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop',
    description: 'Unparalleled cinematic overhead canvas of grand destination wedding layouts.',
    location: 'Kumarakom Lake Resort, Kerala',
    year: '2025'
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'pkg-silver',
    name: 'Silver Package',
    price: '₹1,50,000',
    category: 'Wedding',
    tagline: 'Perfect for intimate weddings and celebrations',
    features: [
      '1 Senior Lead Photographer + 1 Assistant',
      'Up to 8 hours of continuous coverage',
      '300 Fully post-processed high-resolution images',
      'Elegant Digital Delivery via Cloud Gallery',
      'Pre-wedding consultation & timeline planning',
      'Sneak peek photos delivered in 72 hours'
    ]
  },
  {
    id: 'pkg-gold',
    name: 'Gold Package',
    price: '₹2,80,000',
    category: 'Wedding & Cinema',
    tagline: 'Our most popular comprehensive visual narrative',
    features: [
      '2 Lead Photographers + 1 Cinematographer',
      'Full day coverage (Up to 12 hours)',
      '500+ Luxury color-graded signature portraits',
      '4K Cinematic Highlights Film (3-5 minutes)',
      '1 Premium Handcrafted Leather Layflat Album (40 pages)',
      'Full Drone aerial video coverage (weather permitting)',
      'Dedicated wedding coordinator for the shoot'
    ],
    isPopular: true
  },
  {
    id: 'pkg-platinum',
    name: 'Platinum Package',
    price: '₹4,50,000',
    category: 'Royal Luxury Elite',
    tagline: 'Vogue-quality magazine layout & legacy cinema files',
    features: [
      'The Founder (Kashif) as Lead Director/Photographer',
      '3 Photographers + 2 Cinematographers + Drone Operator',
      'Multi-day festival coverage (Up to 3 days)',
      'Artistic 4K Full Wedding documentary film (30-40 minutes)',
      '2 Deluxe Grand Layflat Albums inside customized velvet cases',
      'Complimentary ultra-premium Pre-Wedding Cinematic session',
      'Next-day express teaser for social media sharing',
      'Immersive digital live-gallery during the events'
    ]
  },
  {
    id: 'pkg-prewedding',
    name: 'Premium Pre-Wedding Package',
    price: '₹95,000',
    category: 'Pre-Wedding',
    tagline: 'A romantic fairytale visual session before the big day',
    features: [
      '1 Lead Editorial Photographer + 1 Cinematography director',
      'Up to 6 hours of high-fashion pre-wedding styling support',
      '2 Exclusive locations within the city bounds',
      '40 Fine-art edited portraits matching luxury color tones',
      'A Cinematic pre-wedding love story teaser film (2 mins)',
      'Gorgeous slow-motion drone flybys included'
    ]
  },
  {
    id: 'pkg-maternity',
    name: 'Maternity & Baby Bloom',
    price: '₹75,000',
    category: 'Portraits & Milestones',
    tagline: 'Graceful documentation of the sweetest transitions',
    features: [
      '1 Lead Maternity specialist female-friendly photographer',
      '3 Hours relaxed studio or luxury home setup session',
      'Access to premium couture gown collection & backdrops',
      '30 Curated and color-perfected heirloom portraits',
      'Premium linen mini-keepsake book (20 pages)',
      'Gentle, warm lighting styled with soft velvet tones'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'bp1',
    title: 'A Royal Heritage Affair in Udaipur: Aditya & Tanya\'s Fairytale',
    excerpt: 'From dramatic sunrise portraits on the steps of Oberoi Udaivilas to breathtaking sunset vows overlooking Lake Pichola, experience their grand royal saga.',
    content: 'The morning mist over Lake Pichola had barely lifted when our team set up the prime camera gears on the grand dome-pavilions of Oberoi Udaivilas. For Aditya & Tanya, Udaipur was not just a destination; it was the sacred ground where their multi-generation families would unite in a luxurious visual masterpiece.\n\nTanya wore an exquisite custom crimson-gold lehenga that trailed majestically across the marble courtyard, catching the early amber spotlights. Aditya, looking noble in a hand-loomed ivory sherwani, shared a quiet, emotional moment during their first look in the private palace gardens. The three-dimensional depth captured by our cinematic lenses during this intimate sequence was nothing short of poetry.\n\nAs the afternoon transitioned into golden hour, the pheras began on a floating floral mandap. Our drone pilot executed delicate, sweeping flybys, framing the couple against the shimmering water reflections and the historic Taj Lake Palace. The celebration concluded with a spectacular fireworks display under the starlit sky, creating a cinematic crescendo that will remain etched in their handcrafted luxury Italian layflat album forever.',
    category: 'Palace Weddings',
    date: 'June 18, 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Kashif Ali',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop'
    },
    tags: ['Udaipur', 'Heritage Wedding', 'Royal Mandap', 'Cinematic Portrait']
  },
  {
    id: 'bp2',
    title: 'Sun-Kissed Vows & Coastal Dreams: Kabir & Riya\'s Goan Celebration',
    excerpt: 'Set against the historic, sun-kissed ramparts of Taj Fort Aguada, Goa, this celebration beautifully blended high-fashion editorial portraits with heartfelt coastal intimacy.',
    content: 'Kabir & Riya wanted their celebration to feel like a high-fashion breeze—carefree yet dripping with coastal luxury. The venue, Taj Fort Aguada, provided a majestic backdrop where historic stone architecture met the endless, deep blue Arabian Sea.\n\nOur session began at 4:30 PM, exactly during the soft, diffused golden hour. Riya stepped out in a lightweight, hand-embroidered blush lehenga that moved gracefully with the ocean winds. We guided them into unposed, genuine interactions along the cliff edges, letting the natural chemistry flow. Kabir\'s laughter and Riya\'s warm gaze were immortalized in our high-contrast portrait style.\n\nThe reception was an open-air forest of fairy lights on the beach. As the couple shared their first dance, our cinematographers utilized anamorphic lenses to capture the light flares, creating a warm, cozy cinematic look reminiscent of a classic romance film. Every laugh, every sandy step, and every tear of joy has been meticulously color-graded to match their sunny, loving energy.',
    category: 'Coastal Celebrations',
    date: 'May 12, 2026',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Vikram Sengupta',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop'
    },
    tags: ['Goa', 'Beach Wedding', 'Golden Hour', 'Outdoor Reception']
  },
  {
    id: 'bp3',
    title: 'Chiaroscuro Romance: Zayn & Alisha\'s Majestic Mumbai Evening',
    excerpt: 'Captured with deep velvet tones and sparkling crystal chandeliers at the Taj Mahal Palace, Mumbai, their evening was a masterpiece of classic luxury.',
    content: 'There is an unmatched grandeur about the Taj Mahal Palace in Mumbai. For Zayn & Alisha\'s evening reception, the historic ballroom was transformed into an ethereal wonderland of white orchids and grand crystal chandeliers.\n\nOur visual strategy for this event leaned heavily on chiaroscuro—the dramatic contrast between deep, velvety shadows and bright, sparkling highlights. Zayn wore a bespoke midnight-blue velvet tuxedo, while Alisha stunned the guests in a shimmering silver-diamond gown that caught every speck of light.\n\nRather than using harsh, direct flash, we worked with the ambient warmth of the ballroom and highly sensitive prime lenses. This allowed us to preserve the authentic, intimate atmosphere of the night. The resulting frames look like vintage Hollywood cinema—elegant, timeless, and deeply romantic. This detailed story of urban sophistication represents the pinnacle of modern fine-art wedding filmmaking.',
    category: 'Grand Ballroom',
    date: 'April 05, 2026',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Kashif Ali',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop'
    },
    tags: ['Mumbai', 'Grand Ballroom', 'Chiaroscuro', 'Luxury Reception']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rohan & Meera Singhania',
    role: 'Bride & Groom (Taj Palace Mumbai)',
    rating: 5,
    quote: 'The Creative Picture did not just click pictures; they created breathtaking cinema. Kashif and his team worked like unseen, respectful ninjas. The colors in our layflat albums look so breathtakingly luxury, it feels like we were featured on the cover of Harper\'s Bazaar!',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=150&auto=format&fit=crop',
    category: 'Wedding'
  },
  {
    id: 't2',
    name: 'Aishwarya & Dev Goel',
    role: 'Destination Wedding (Udaipur)',
    rating: 5,
    quote: 'Absolutely flawless. Every drone shot felt incredibly cinematic, tracing the lake waves as we exchanged rings. Their speed of editing was shocking—we received our 3-minute teaser before our honeymoon ended!',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=150&auto=format&fit=crop',
    category: 'Destination'
  },
  {
    id: 't3',
    name: 'Natasha Kapoor',
    role: 'Fashion Designer & Founder (Luxe Label)',
    rating: 5,
    quote: 'For our festive editorial catalog, The Creative Picture delivered lighting quality and dramatic angles that rivals global Vogue productions. The high contrast chiaroscuro studio portraits helped boost our launch conversions significantly!',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=150&auto=format&fit=crop',
    category: 'Fashion'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'How can I secure my booking date?',
    answer: 'Bookings are secured exclusively upon the signing of our digital contract and a 40% retainer fee. Because we only capture one premium grand wedding per weekend to guarantee the absolute highest artistic focus, dates usually book out 6 to 12 months in advance.',
    category: 'Booking'
  },
  {
    id: 'faq2',
    question: 'How much do translation/travel packages cost?',
    answer: 'For events outside of Mumbai/Delhi, all travel, lodging, and local transport for our crew are covered by the client. We bundle these transparently into a flat-rate custom proposal so there are no surprises later.',
    category: 'Pricing'
  },
  {
    id: 'faq3',
    question: 'When will the final photos and cinema files be delivered?',
    answer: 'We deliver a stunning 15-photo "first-look" teaser within 72 hours of your wedding. Your curated, fully graded and mastered digital final gallery is delivered within 4-6 weeks, and custom Italian handcrafted legacy albums are shipped to your doorstep in 8 weeks.',
    category: 'Delivery'
  },
  {
    id: 'faq4',
    question: 'Can I fully customize the packages?',
    answer: 'Absolutely. We understand that every family saga is distinct. During our initial luxury private consultation call, we can tweak hours, add drone coverage, extend coverage days, or add bespoke editorial pre-wedding shoots as required.',
    category: 'Customization'
  },
  {
    id: 'faq5',
    question: 'Do you provide raw untouched footage or files?',
    answer: 'Consistent with fine-art global standards, we do not ship unedited RAW photographs, as they represent unfinished paintings. Our craft includes the meticulous curation, color grading, and selective lighting mastery that makes each picture look luxury. However, for cinema, we can provide all raw raw video archives on a physical SSD for a customized storage retrieval fee.',
    category: 'Policy'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Kashif Ali',
    role: 'Founder & Head Creative Director',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    bio: 'With over 10 years of visual storytelling across 15 countries, Kashif blends high-fashion editorial styling with raw photojournalistic emotion.'
  },
  {
    id: 'tm2',
    name: 'Vikram Sengupta',
    role: 'Chief Cinematographer & Drone Pilot',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    bio: 'Vikram manages the heavy gear. His composition skills and creative use of space turn wedding highlight reels into legendary Hollywood style screenplays.'
  },
  {
    id: 'tm3',
    name: 'Anjali Deshmukh',
    role: 'Senior Retoucher & Color Grading Master',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    bio: 'Anjali is the scientific eye behind our signature golden velvet colors. She spends hours perfecting skin tones to feel lifelike and majestic.'
  }
];

// ==========================================
// CINEMATOGRAPHY & VIDEOGRAPHY ITEMS
// ==========================================
// You can replace the urls here with local video paths like "/assets/images_and_videos/wedding/my-video.mp4"
// or external YouTube embed URLs like "https://www.youtube.com/embed/..."

export const CINEMATOGRAPHY_ITEMS: CinematographyItem[] = [
  {
    id: 'ep1',
    title: 'The Suryagarh Romance',
    sub: 'A Royal Destination Saga in Jaisalmer',
    duration: '4:22 mins',
    cover: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    director: 'Kashif Ali',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1'
  },
  {
    id: 'ep2',
    title: 'Echoes of Udaipur',
    sub: 'An intimate sunset exchange along Lake Pichola',
    duration: '5:10 mins',
    cover: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=800&auto=format&fit=crop',
    director: 'Vikram Sengupta',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1'
  },
  {
    id: 'ep3',
    title: 'Monochrome Symphony',
    sub: 'Fine-Art wedding couture pre-shoot film in Venice',
    duration: '3:15 mins',
    cover: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
    director: 'Kashif Ali',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1'
  }
];

export const VIDEOGRAPHY_ITEMS: VideographyItem[] = [
  { 
    id: 'v1', 
    title: 'Golden sands pre-wedding cinematic', 
    location: 'Jodhpur Dunes', 
    img: 'assets/images_and_videos/prewedding/pre_wedding_1_cover_photo.jpg',
    videoUrl: 'assets/images_and_videos/prewedding/pre_wedding_1.mp4'
  },
  { 
    id: 'v2', 
    title: 'Suryagarh palace grand arrival', 
    location: 'Jaipur', 
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1'
  },
  { 
    id: 'v3', 
    title: 'Haldi traditional slow motion sequence', 
    location: 'Delhi Castle', 
    img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=600&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1'
  }
];
