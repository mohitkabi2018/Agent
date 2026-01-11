import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { FaQuoteRight, FaStar, FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';
import { useData } from '../../../context/context';

const ITEMS_PER_PAGE = 6;
const AUTO_SCROLL_INTERVAL = 5000;

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
      >
        <FaStar
          className={`w-4 h-4 transition-colors duration-300 ${
            index < rating ? 'text-[#E8C9A3]' : 'text-gray-700'
          }`}
        />
      </motion.div>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, isActive, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    className={`group relative w-full bg-gradient-to-b from-[#2C2C2C]/90 to-[#252525]/90 
      rounded-2xl p-6 sm:p-8 border border-[#3A3A3A] 
      hover:border-[#E8C9A3]/20 transition-all duration-500 
      ${isActive ? 'ring-2 ring-[#E8C9A3]/30 scale-[1.02]' : 'hover:scale-[1.01]'}
      shadow-lg hover:shadow-xl hover:shadow-[#E8C9A3]/5`}
  >
    {/* Animated Background Gradient */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#E8C9A3]/5 to-[#9B6E3F]/5 
      opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
    />

    {/* Quote Icon */}
    <motion.div 
      className="absolute top-6 right-6"
      whileHover={{ scale: 1.1, rotate: 15 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative w-10 h-10 rounded-full 
        bg-gradient-to-br from-[#E8C9A3]/20 to-[#9B6E3F]/20 
        flex items-center justify-center"
      >
        <FaQuoteRight className="text-[#E8C9A3] w-5 h-5 opacity-80" />
      </div>
    </motion.div>

    {/* Content */}
    <div className="relative z-10 space-y-6">
      {/* Author Info */}
      <div className="flex items-start gap-4">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#E8C9A3]/20 flex-shrink-0"
        >
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-full h-full object-cover transform transition-transform duration-500 
              group-hover:scale-110"
            loading="lazy"
          />
        </motion.div>
        <div>
          <motion.h3 
            className="text-[#E8C9A3] font-medium text-lg mb-1"
            whileHover={{ x: 5 }}
          >
            {testimonial.name}
          </motion.h3>
          <p className="text-gray-400 text-sm">{testimonial.role}</p>
          <div className="flex items-center gap-1 text-gray-500 text-xs mt-1">
            <FaMapMarkerAlt className="w-3 h-3" />
            <span>{testimonial.location}</span>
          </div>
          <div className="mt-3">
            <StarRating rating={testimonial.rating} />
          </div>
        </div>
      </div>

      {/* Quote */}
      <motion.div whileHover={{ x: 5 }}>
        <p className="text-gray-300 text-lg leading-relaxed
          group-hover:text-white transition-colors duration-500"
        >
          "{testimonial.quote}"
        </p>
      </motion.div>
    </div>
  </motion.div>
);

const NavigationButton = ({ direction, onClick, disabled }) => (
  <motion.button
    onClick={onClick}
    disabled={disabled}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={`nav-button pointer-events-auto transform 
      ${direction === 'prev' ? '-translate-x-1/2' : 'translate-x-1/2'}
      text-white/80 hover:text-white backdrop-blur-sm
      shadow-lg hover:shadow-xl hover:shadow-[#E8C9A3]/5`}
    aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} page`}
  >
    {direction === 'prev' ? (
      <FaChevronLeft className="w-5 h-5" />
    ) : (
      <FaChevronRight className="w-5 h-5" />
    )}
  </motion.button>
);

const PageDot = ({ isActive, onClick, index }) => (
  <button
    onClick={onClick}
    className="group focus:outline-none focus:ring-2 focus:ring-[#E8C9A3]/50 rounded-full p-1"
    aria-label={`Go to page ${index + 1}`}
  >
    <div className={`h-2 rounded-full transition-all duration-300 ${
      isActive 
        ? 'w-8 bg-gradient-to-r from-[#E8C9A3] to-[#9B6E3F]' 
        : 'w-2 bg-gray-700 group-hover:bg-[#E8C9A3]/40'
    }`} />
  </button>
);

const Testimonials = () => {
  const { data, loading } = useData();
  const testimonialData = data?.testimonials;
  const [currentPage, setCurrentPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const totalPages = Math.ceil(testimonialData?.items.length / ITEMS_PER_PAGE) || 0;
  const currentTestimonials = testimonialData?.items.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  ) || [];

  const handlePageChange = useCallback((newPage) => {
    setCurrentPage(newPage);
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        if (current === ITEMS_PER_PAGE - 1) {
          handlePageChange((currentPage + 1) % totalPages);
          return 0;
        }
        return (current + 1) % ITEMS_PER_PAGE;
      });
    }, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(interval);
  }, [currentPage, totalPages, handlePageChange]);

  if (loading) return null; // Or your loading component

  return (
    <section className="relative bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] py-24 isolate">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] bg-repeat opacity-5" />
      </div>

      {/* Gradient Orbs - Fixed positioning */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] 
            bg-[#E8C9A3]/5 rounded-full blur-[100px]
            transform -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-[-20%] right-[20%] w-[600px] h-[600px] 
            bg-[#9B6E3F]/5 rounded-full blur-[100px]
            transform translate-x-1/2 translate-y-1/2"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 
            bg-clip-text text-transparent mb-4"
          >
            {testimonialData?.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {testimonialData?.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E8C9A3] to-[#9B6E3F] mx-auto mt-6" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="relative mx-auto max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {currentTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  isActive={index === activeIndex}
                  delay={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12">
            <NavigationButton 
              direction="prev" 
              onClick={() => handlePageChange((currentPage - 1 + totalPages) % totalPages)}
              disabled={currentPage === 0}
            />
            <div className="flex items-center gap-3">
              {[...Array(totalPages)].map((_, index) => (
                <PageDot
                  key={index}
                  index={index}
                  isActive={currentPage === index}
                  onClick={() => handlePageChange(index)}
                />
              ))}
            </div>
            <NavigationButton 
              direction="next" 
              onClick={() => handlePageChange((currentPage + 1) % totalPages)}
              disabled={currentPage === totalPages - 1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;