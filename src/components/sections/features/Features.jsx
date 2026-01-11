import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import { useData } from '../../../context/context';

const FeatureCard = ({ item, index }) => {
  const IconComponent = FaIcons[item.iconName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="w-full flex items-center justify-center"
    >
      <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-[#E8C9A3]/5 transition-all duration-300 w-full">
        <div className={`w-14 h-14 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0 mb-4 transition-transform duration-300 hover:scale-110`}>
          {IconComponent && <IconComponent className="text-[#E8C9A3] text-2xl" />}
        </div>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/90 font-medium text-base sm:text-lg">
            {item.title}
          </span>
          <span className="text-[#E8C9A3]/60 text-sm sm:text-base max-w-[200px]">
            {item.text}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const { data, loading } = useData();
  const featureData = data?.features;

  if (loading) return null; // Or your loading component

  return (
    <section className="relative bg-[#2C2C2C] w-full flex items-center justify-center py-8 sm:py-10 md:py-12">
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {featureData?.items.map((item, index) => (
            <FeatureCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-40 bg-[#E8C9A3]/5 rounded-full blur-3xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-40 bg-[#E8C9A3]/5 rounded-full blur-3xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default Features;