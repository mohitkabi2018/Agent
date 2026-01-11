 import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useData } from '../../../context/context';

const Hero = () => {
  const { data, loading } = useData();
  const heroData = data?.hero;

  if (loading) return null; // Or your loading component

  return (
    <section className="relative min-h-screen bg-[#1A1A1A]">
      {/* Hero Content */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Container */}
        <div className="min-h-screen flex flex-col justify-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 xl:gap-8 items-center py-8 lg:py-0">
            {/* Left Content */}
            <div className="flex flex-col justify-center w-full order-2 lg:order-1">
              <div className="text-center lg:text-left max-w-[440px] sm:max-w-[480px] lg:max-w-[500px] xl:max-w-[580px] mx-auto lg:mx-0 mt-0">
                <motion.div 
                  className="space-y-4 sm:space-y-5 md:space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="space-y-3">
                    <motion.span 
                      className="inline-block text-[#E8C9A3]/60 text-xs sm:text-sm tracking-[0.15em] uppercase"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                    >
                      {heroData?.tagline}
                    </motion.span>
                    
                    {/* Title container */}
                    <div className="relative">
                      <h1 
                        className="text-[#E8C9A3] tracking-[-0.04em] relative" 
                        style={{ 
                          fontFamily: 'Riking, system-ui, sans-serif',
                          fontSize: 'clamp(2.5rem, 8vw, 7rem)',
                          textShadow: '0 4px 40px rgba(0,0,0,0.3)',
                          lineHeight: '0.95'
                        }}
                      >
                        <motion.div className="flex flex-col items-center md:items-start">
                          <motion.span 
                            className="block text-white/95 drop-shadow-2xl leading-[0.85]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                          >
                            {heroData?.title.line1}
                          </motion.span>
                          <motion.span 
                            className="block text-[#E8C9A3]/70 drop-shadow-2xl leading-[0.85] relative"
                            style={{ marginTop: 'calc(-0.11em)' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                          >
                            {heroData?.title.line2}
                          </motion.span>
                        </motion.div>
                      </h1>
                    </div>
                  </div>

                  <motion.p 
                    className="text-[#E8C9A3]/80 text-xs sm:text-sm md:text-base leading-relaxed font-light mx-auto lg:mx-0 max-w-[260px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    {heroData?.description}
                  </motion.p>

                  {/* Buttons */}
                  <motion.div 
                    className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8 px-4 sm:px-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    {heroData?.buttons.map((button, index) => (
                      <motion.div
                        key={button.text}
                        className="flex-1 sm:flex-none"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link 
                          to={button.link}
                          className={`inline-flex w-full sm:w-auto items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 ${
                            index === 0 
                              ? "bg-[#E8C9A3]/10 text-[#E8C9A3]" 
                              : "border border-[#E8C9A3]/20 text-white hover:bg-[#E8C9A3]/10 hover:border-[#E8C9A3]/30"
                          } text-sm tracking-wide rounded-full transition-all duration-300 min-w-[140px] sm:min-w-[160px] backdrop-blur-sm`}
                        >
                          <span className="relative z-10">{button.text}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative flex items-center justify-center w-full h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[65vh] order-1 lg:order-2">
              <motion.div
                className="relative flex items-center justify-center w-full max-w-[260px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[460px] xl:max-w-[560px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Background Circle */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full"
                  style={{
                    width: 'min(560px, 80vw)',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 100%)',
                    backdropFilter: 'blur(40px)'
                  }}
                  initial={{ scale: 1.5, opacity: 0, rotate: -180 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    delay: 0.2
                  }}
                />
                
                {/* Coffee Cup Container */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <motion.img 
                    src={heroData?.heroImage}
                    alt="Iced Coffee Splash" 
                    className="w-[240px] sm:w-[280px] md:w-[340px] lg:w-[440px] xl:w-[520px] max-w-[80vw] h-auto object-contain -rotate-[25deg] drop-shadow-2xl brightness-95"
                    initial={{
                      y: 100,
                      x: -50,
                      rotate: 360,
                      opacity: 0,
                      scale: 0.2,
                      filter: 'brightness(0) blur(20px)'
                    }}
                    animate={{
                      y: 0,
                      x: 0,
                      rotate: -25,
                      opacity: 1,
                      scale: 1,
                      filter: 'brightness(0.95) blur(0px)'
                    }}
                    transition={{
                      duration: 1.8,
                      ease: [0.645, 0.045, 0.355, 1], // Using a valid cubic-bezier
                      delay: 0.4
                    }}
                    whileInView={{
                      y: [-10, 10, -10],
                      rotate: [-30, -20, -30],
                      scale: [1, 1.05, 1],
                      transition: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        repeatType: "reverse"
                      }
                    }}
                  />

                  {/* Floating Beans container */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none scale-75 sm:scale-85 md:scale-90 lg:scale-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    {heroData?.floatingBeans.map((bean, index) => (
                      <motion.img
                        key={index}
                        src={bean.image}
                        alt=""
                        className={`absolute ${bean.size} ${bean.position} aspect-square drop-shadow-xl`}
                        initial={{
                          x: 200,
                          y: -200,
                          rotate: 720,
                          scale: 0,
                          opacity: 0
                        }}
                        animate={{
                          x: 0,
                          y: 0,
                          rotate: 0,
                          scale: 1,
                          opacity: 1
                        }}
                        transition={{
                          duration: 1.2,
                          ease: [0.34, 1.56, 0.64, 1], // Custom cubic-bezier for bouncy effect
                          delay: index * 0.3 + 1.6
                        }}
                        whileInView={{
                          y: [0, -12, 0],
                          x: [0, 8, 0],
                          rotate: [0, 10, 0],
                          scale: [1, 1.1, 1],
                          transition: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;