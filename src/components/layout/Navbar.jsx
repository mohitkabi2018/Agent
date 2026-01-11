import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/coffee-products', label: 'Coffee Products' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact US' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 py-4 sm:py-5 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? 'border-b border-white/5 bg-[#1A1A1A]/90 backdrop-blur-sm'
            : 'border-none bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <Link 
                to="/" 
                className="flex items-center gap-2.5 hover:opacity-90 transition-all duration-300"
                aria-label="Go to homepage"
              >
                <motion.img 
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  src="/images/bean.png"
                  alt="Smoky Brand Logo" 
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain brightness-200"
                />
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  className="text-[#E8C9A3] text-sm sm:text-base tracking-tight"
                >
                  Smoky Brand
                </motion.span>
              </Link>
            </motion.div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-10 text-white">
              {NAV_LINKS.map(({ path, label }, index) => (
                <motion.div
                  key={path}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                >
                  <Link 
                    to={path} 
                    className="text-[#E8C9A3]/70 text-[13px] tracking-wide hover:text-[#E8C9A3] transition-colors duration-300"
                  >
                    <span className="text-white">{label}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.9,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              >
                <Link 
                  to="/basket" 
                  className={`px-5 py-2 text-[#E8C9A3] text-[13px] tracking-wide rounded-full transition-all duration-300 ${
                    isScrolled 
                      ? 'bg-[#E8C9A3]/10 hover:bg-[#E8C9A3]/20' 
                      : 'bg-black/20 hover:bg-black/30'
                  }`}
                  aria-label="View your basket"
                >
                  <span className="text-[#E8C9A3]">Your Basket</span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={handleMobileMenuToggle}
              className="lg:hidden p-2 text-[#E8C9A3] hover:bg-[#E8C9A3]/10 rounded-full transition-colors duration-300"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden overflow-hidden"
            onClick={handleMobileMenuToggle}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 z-50 w-[280px] h-[100dvh] bg-[#1A1A1A] shadow-xl lg:hidden overflow-hidden"
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              onClick={handleMobileMenuToggle}
              className="absolute top-4 right-4 p-2 text-[#E8C9A3] hover:bg-[#E8C9A3]/10 rounded-full transition-colors duration-300"
              aria-label="Close menu"
            >
              <FiX className="w-6 h-6" />
            </motion.button>

            {/* Brand Logo in Menu */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-4 left-6"
            >
              <Link 
                to="/" 
                onClick={handleMobileMenuToggle}
                className="flex items-center gap-2.5"
              >
                <img 
                  src="/images/bean.png"
                  alt="Smoky Brand Logo" 
                  className="w-6 h-6 object-contain brightness-200"
                />
                <span className="text-[#E8C9A3] text-sm tracking-tight">
                  Smoky Brand
                </span>
              </Link>
            </motion.div>

            <div className="flex flex-col h-full pt-20 pb-6">
              <div className="flex-1 overflow-y-auto px-6">
                <nav className="space-y-2">
                  {NAV_LINKS.map(({ path, label }, index) => (
                    <motion.div
                      key={path}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <Link
                        to={path}
                        onClick={handleMobileMenuToggle}
                        className="block py-3 text-[15px] text-white/90 hover:text-[#E8C9A3] transition-colors duration-300"
                      >
                        {label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="px-6 pt-6 border-t border-white/10"
              >
                <Link
                  to="/basket"
                  onClick={handleMobileMenuToggle}
                  className="flex items-center justify-center w-full py-3 text-[#E8C9A3] text-[13px] tracking-wide rounded-full bg-[#E8C9A3]/10 hover:bg-[#E8C9A3]/20 transition-all duration-300"
                >
                  Your Basket
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 