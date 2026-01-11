import { motion } from 'framer-motion';
import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { 
  HiMiniHome, 
  HiMiniBeaker, 
  HiMiniExclamationCircle 
} from 'react-icons/hi2';

const Error = () => {
  const error = useRouteError();
  
  // Determine error type and message
  const getErrorContent = () => {
    if (isRouteErrorResponse(error)) {
      if (error.status === 404) {
        return {
          title: "Oops! Page Not Found",
          message: "Looks like this page has been filtered out. Let's brew up something else!"
        };
      }
    }
    
    return {
      title: "Something Went Wrong",
      message: "We're having trouble brewing this page. Please try again later."
    };
  };

  const { title, message } = getErrorContent();

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#2C2C2C]">
      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-10 w-40 h-40 bg-[#E8C9A3]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-[#E8C9A3]/5 rounded-full blur-3xl" />
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Error Animation */}
            <motion.div
              className="mb-8 sm:mb-12"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative inline-block">
                {error?.status === 404 ? (
                  <motion.div
                    className="text-[#E8C9A3] text-7xl sm:text-8xl md:text-9xl lg:text-[150px] font-bold"
                    animate={{ 
                      rotate: [0, -3, 3, -3, 0],
                      y: [0, -5, 0, -5, 0] 
                    }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  >
                    4
                    <motion.span
                      className="inline-block mx-2 sm:mx-4"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0] 
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut" 
                      }}
                    >
                      <HiMiniBeaker className="transform -translate-y-4" />
                    </motion.span>
                    4
                  </motion.div>
                ) : (
                  <motion.div
                    className="text-[#E8C9A3] text-7xl sm:text-8xl md:text-9xl lg:text-[150px]"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 3, 0, -3, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  >
                    <HiMiniExclamationCircle />
                  </motion.div>
                )}
                
                {/* Steam Animation */}
                <motion.div 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: [0, 0.5, 0],
                    y: [-10, -25, -10] 
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  <div className="w-0.5 sm:w-1 h-10 sm:h-16 bg-gradient-to-t from-[#E8C9A3]/30 to-transparent rounded-full transform -rotate-12" />
                </motion.div>
              </div>
            </motion.div>

            {/* Error Message */}
            <motion.div
              className="max-w-lg mx-auto mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                {title}
              </h1>
              <p className="text-[#E8C9A3]/80 text-sm sm:text-base md:text-lg leading-relaxed px-4">
                {message}
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link 
                to="/"
                className="w-full sm:w-auto group flex items-center justify-center px-6 sm:px-8 py-3 
                           bg-[#E8C9A3]/10 hover:bg-[#E8C9A3]/15 text-[#E8C9A3] rounded-xl
                           transition-all duration-300 backdrop-blur-sm hover:shadow-lg"
              >
                <HiMiniHome className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm font-medium tracking-wide">Back to Home</span>
              </Link>
              <Link 
                to="/coffee-products"
                className="w-full sm:w-auto group flex items-center justify-center px-6 sm:px-8 py-3 
                           bg-[#E8C9A3]/10 hover:bg-[#E8C9A3]/15 text-[#E8C9A3] rounded-xl
                           transition-all duration-300 backdrop-blur-sm hover:shadow-lg"
              >
                <HiMiniBeaker className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm font-medium tracking-wide">Browse Coffee</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Error; 