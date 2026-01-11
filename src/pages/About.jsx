import { motion } from 'framer-motion';
import { useData } from '../context/context';

const About = () => {
  const { data, loading } = useData();
  const aboutData = data?.about;

  if (loading) {
    return (
      <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  if (!aboutData || !aboutData.header) {
    return (
      <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center">
        <p className="text-white">Error loading content. Please try again later.</p>
      </div>
    );
  }

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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {aboutData.header?.title}
          </motion.h1>
          <motion.p 
            className="text-[#E8C9A3]/80 text-lg sm:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {aboutData.header?.subtitle}
          </motion.p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {/* Story Section */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center max-w-[1440px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src={aboutData.story?.image}
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {aboutData.story?.title}
              </h2>
              <p className="text-[#E8C9A3]/80 text-base sm:text-lg leading-relaxed">
                {aboutData.story?.description}
              </p>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 max-w-[1440px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {aboutData?.values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-[#E8C9A3]/5 rounded-2xl p-6 hover:bg-[#E8C9A3]/10 transition-all duration-300 group"
              >
                <div className="aspect-video rounded-xl overflow-hidden mb-6">
                  <img 
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl text-white font-semibold mb-3">{value.title}</h3>
                <p className="text-[#E8C9A3]/70">{value.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;