import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { useData } from '../../../context/context';

// Define animation variants
const variants = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Trust = () => {
  const { data, loading } = useData();
  const trustData = data?.trust;

  if (loading) return null; // Or your loading component

  return (
    <section className="relative bg-gradient-to-b from-[#F3EDE6] to-[#F8F5F1] px-3 xs:px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
      
      <div className="relative max-w-[2000px] mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={variants.fadeInUp}
          className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src={trustData?.backgroundImage}
            alt="Coffee brewing process"
            className="w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/95 via-[#2C2C2C]/60 to-[#2C2C2C]/20" />
          <div className="absolute inset-0 flex flex-col justify-end p-5 xs:p-6 sm:p-8 lg:p-10 xl:p-12">
            <motion.div 
              variants={variants.fadeInUp}
              className="max-w-4xl"
            >
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 xs:mb-4 sm:mb-5 lg:mb-6 text-[#E8C9A3] leading-tight">
                {trustData?.title}
              </h2>
              <p className="text-[#E8C9A3]/80 text-base xs:text-lg sm:text-xl lg:text-2xl mb-5 xs:mb-6 sm:mb-8 lg:mb-10 max-w-3xl leading-relaxed">
                {trustData?.description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 lg:gap-8 max-w-4xl">
                {trustData?.points.map((point, index) => (
                  <motion.li
                    key={point}
                    variants={variants.fadeInLeft}
                    custom={index}
                    className="flex items-center gap-3 xs:gap-4 group"
                  >
                    <span className="flex-shrink-0 w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8 bg-[#E8C9A3] text-[#2C2C2C] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <FaCheck className="text-xs xs:text-sm sm:text-base" />
                    </span>
                    <span className="text-[#E8C9A3]/90 text-sm xs:text-base sm:text-lg lg:text-xl group-hover:text-[#E8C9A3] transition-colors duration-300 leading-snug">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 
                      w-32 xs:w-40 sm:w-48 lg:w-56 
                      h-32 xs:h-40 sm:h-48 lg:h-56 
                      bg-[#E8C9A3]/5 rounded-full blur-3xl" 
        />
        <div className="absolute -right-10 top-1/2 -translate-y-1/2 
                      w-32 xs:w-40 sm:w-48 lg:w-56 
                      h-32 xs:h-40 sm:h-48 lg:h-56 
                      bg-[#E8C9A3]/5 rounded-full blur-3xl" 
        />
      </div>
    </section>
  );
};

export default Trust;