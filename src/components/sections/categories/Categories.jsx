import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useData } from '../../../context/context';

const Categories = () => {
  const { data, loading } = useData();
  const categoryData = data?.categories;

  if (loading) return null; // Or your loading component

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F3EDE6] to-[#F8F5F1]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
      
      <div className="relative max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-medium text-[#2C2C2C] mb-3 sm:mb-4">
            {categoryData?.title}
          </h2>
          <p className="text-[#2C2C2C]/60 max-w-xl mx-auto text-sm sm:text-base px-4">
            {categoryData?.description}
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {categoryData?.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <Link 
                to={item.link}
                className="group block"
              >
                <div className="relative aspect-square rounded-full overflow-hidden mb-4 sm:mb-6 bg-[#E8DFD8] shadow-xl">
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
                  
                  {/* Image */}
                  <div className="absolute inset-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110" 
                      loading="lazy"
                    />
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#E8C9A3]/20 to-transparent" />
                </div>

                {/* Text Content */}
                <div className="text-center space-y-1 sm:space-y-2 transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <h3 className="text-sm sm:text-[15px] text-[#2C2C2C] font-medium group-hover:text-[#9B6E3F] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2C2C2C]/60 transition-colors duration-300 group-hover:text-[#2C2C2C]/80">
                    {item.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Decorative Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-20 h-[1px] bg-gradient-to-r from-transparent via-[#2C2C2C]/10 to-transparent"
        />
      </div>
    </section>
  );
};

export default Categories;