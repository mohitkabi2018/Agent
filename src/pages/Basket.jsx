import { motion } from 'framer-motion';

const Basket = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1A1A1A] to-[#2C2C2C] pt-24 sm:pt-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Your Basket
          </motion.h1>

          {/* Empty State */}
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-[#E8C9A3]/80 text-lg mb-6">Your basket is empty</p>
            <button className="px-6 py-3 bg-[#E8C9A3]/10 text-[#E8C9A3] rounded-full hover:bg-[#E8C9A3]/20 transition-colors duration-300">
              Continue Shopping
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Basket; 