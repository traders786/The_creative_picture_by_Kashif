export type Category = 
  | 'wedding' 
  | 'prewedding' 
  | 'couple' 
  | 'baby' 
  | 'maternity' 
  | 'fashion' 
  | 'portrait' 
  | 'drone' 
  | 'corporate';

export interface GalleryItem {
  id: string;
  title: string;
  category: Category;
  imageUrl: string;
  description?: string;
  location?: string;
  year?: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  category: string;
  tagline: string;
  features: string[];
  isPopular?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Booking {
  id: string;
  name: string;
  phone: string;
  email: string;
  eventDate: string;
  location: string;
  shootType: Category;
  packageId: string;
  message?: string;
  referenceImages?: string[]; // stored local urls
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  image: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface CinematographyItem {
  id: string;
  title: string;
  sub: string;
  duration: string;
  cover: string;
  director: string;
  videoUrl: string;
}

export interface VideographyItem {
  id: string;
  title: string;
  location: string;
  img: string;
  videoUrl: string;
}
