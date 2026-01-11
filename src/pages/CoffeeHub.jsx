import { motion } from 'framer-motion';
import { IMAGES } from '../constants/images';

const CoffeeHub = () => {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] py-16 sm:py-20 md:py-24">
      <div className="container mx-auto max-w-[1440px] px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Coffee Hub
          </motion.h1>
          <motion.p 
            className="text-[#E8C9A3]/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Discover our coffee community, brewing tips, and latest trends
          </motion.p>
        </motion.div>

        {/* Featured Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 md:gap-10 max-w-[1440px] mx-auto">
          {/* Cards with improved responsiveness */}
          <motion.div 
            className="bg-[#E8C9A3]/5 rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-[#E8C9A3]/10 transition-all duration-300 group h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="aspect-video rounded-xl overflow-hidden mb-4 sm:mb-5 md:mb-6">
              <img 
                src={IMAGES.brewing_guide}
                alt="Brewing Guide"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg sm:text-xl text-white font-semibold mb-2 sm:mb-3">Brewing Guides</h3>
            <p className="text-[#E8C9A3]/70 text-sm sm:text-base mb-4 flex-1">Master the art of coffee brewing with our expert guides</p>
            <button className="text-[#E8C9A3] text-sm sm:text-base hover:text-[#E8C9A3]/80 transition-colors duration-300 mt-auto">
              Learn More →
            </button>
          </motion.div>

          {/* Community Card */}
          <motion.div 
            className="bg-[#E8C9A3]/5 rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-[#E8C9A3]/10 transition-all duration-300 group h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="aspect-video rounded-xl overflow-hidden mb-4 sm:mb-5 md:mb-6">
              <img 
                src={IMAGES.community}
                alt="Coffee Community"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg sm:text-xl text-white font-semibold mb-2 sm:mb-3">Coffee Community</h3>
            <p className="text-[#E8C9A3]/70 text-sm sm:text-base mb-4 flex-1">Join discussions with fellow coffee enthusiasts</p>
            <button className="text-[#E8C9A3] text-sm sm:text-base hover:text-[#E8C9A3]/80 transition-colors duration-300 mt-auto">
              Join Now →
            </button>
          </motion.div>

          {/* Events Card */}
          <motion.div 
            className="bg-[#E8C9A3]/5 rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-[#E8C9A3]/10 transition-all duration-300 group h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="aspect-video rounded-xl overflow-hidden mb-4 sm:mb-5 md:mb-6">
              <img 
                src={IMAGES.events}
                alt="Coffee Events"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg sm:text-xl text-white font-semibold mb-2 sm:mb-3">Coffee Events</h3>
            <p className="text-[#E8C9A3]/70 text-sm sm:text-base mb-4 flex-1">Discover upcoming coffee tastings and workshops</p>
            <button className="text-[#E8C9A3] text-sm sm:text-base hover:text-[#E8C9A3]/80 transition-colors duration-300 mt-auto">
              View Events →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeHub; 