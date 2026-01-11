import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaInstagram, FaPinterest, FaYoutube, FaLinkedin, FaCoffee, FaTruck, FaUsers } from 'react-icons/fa';
import { useState } from 'react';
import Categories from '../components/sections/categories/Categories';
import Products from '../components/sections/products/Products';
import Trust from '../components/sections/trust/Trust';
import Hero from '../components/sections/hero/Hero';
import Features from '../components/sections/features/Features';
import Testimonials from '../components/sections/testimonials/Testimonials';
import FAQ from '../components/sections/faq/FAQ';
import Chatbot from "../components/common/Chatbot";

// Animation variants
const variants = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 }
  },
  fadeInScale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 }
  }
};

// Data Constants
const NAVIGATION_LINKS = [
  { to: '/coffee-hub', label: 'Coffee Hub' },
  { to: '/coffee-products', label: 'Coffee Products' },
  { to: '/about', label: 'About' }
];

const CATEGORY_ITEMS = [
  { 
    title: 'Iced Coffee', 
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&q=80' 
  },
  { 
    title: 'Coffee Cake', 
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&q=80' 
  },
  { 
    title: 'Croissant', 
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&q=80' 
  },
  { 
    title: 'Coffee Beans', 
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&q=80' 
  },
  { 
    title: 'Coffee Shops', 
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&q=80' 
  },
];

const COFFEE_PRODUCTS = [
  { 
    title: 'Vanilla Croissant', 
    price: '£10.00', 
    image: 'https://images.unsplash.com/photo-1578312225889-9565c35d5c00?w=500&q=80' 
  },
  { 
    title: 'Croissant Pistachio', 
    price: '£10.00', 
    image: 'https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=500&q=80' 
  },
  { 
    title: 'Croissant Chocolate', 
    price: '£10.00', 
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=500&q=80' 
  },
  { 
    title: 'Croissant Strawberry', 
    price: '£10.00', 
    image: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=500&q=80' 
  },
];

const FEATURE_ITEMS = [
  { icon: FaCoffee, text: 'Get 10% Off Your First Order' },
  { icon: FaTruck, text: 'Free Delivery in The UK' },
  { icon: FaUsers, text: 'Taste For Everyone' },
];

const TRUST_POINTS = [
  { text: 'Naturally Sourced Coffee Flavours' },
  { text: 'Seasoned professionals with deep knowledge' },
  { text: 'We deliver exceptional service that exceeds your expectations' },
];

const SOCIAL_LINKS = [
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaYoutube, href: '#', label: 'Youtube' },
  { icon: FaPinterest, href: '#', label: 'Pinterest' },
];

// Component
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.main 
      className="min-h-screen w-full"
      initial="initial"
      animate="animate"
    >
      <Hero />
      <Features />
      <Categories />
      <Products />
      <Testimonials />
      <Trust />
      <FAQ />
      <Chatbot />
    </motion.main>
  );
};

export default Home; 