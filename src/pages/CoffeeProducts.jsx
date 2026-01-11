import { motion } from 'framer-motion';
import { useData } from '../context/context';

const CoffeeProducts = () => {
  const { data, loading } = useData();
  const productsData = data?.coffeeProducts;

  if (loading) {
    return (
      <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  if (!productsData) {
    return (
      <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center">
        <p className="text-white">Error loading products. Please try again later.</p>
      </div>
    );
  }

  return (
    <section className="w-full min-h-[calc(100vh-80px)] py-12 sm:py-16">
      <div className="container mx-auto max-w-[1440px] px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {productsData?.header.title}
          </motion.h1>
          <motion.p 
            className="text-[#E8C9A3]/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {productsData?.header.description}
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 max-w-[1440px] mx-auto">
          {productsData?.items.map((product, index) => (
            <motion.div 
              key={product.id}
              className="bg-[#E8C9A3]/5 rounded-lg p-3 sm:p-4 hover:bg-[#E8C9A3]/10 transition-all duration-300 group h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
            >
              <div className="aspect-[4/3] rounded-md overflow-hidden mb-3">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg text-white font-semibold mb-1">{product.name}</h3>
                <p className="text-[#E8C9A3]/70 text-xs sm:text-sm mb-2 line-clamp-2">{product.description}</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-white font-medium text-sm sm:text-base">₹{product.price}</span>
                <button className="px-3 py-1.5 bg-[#E8C9A3]/10 text-[#E8C9A3] text-xs sm:text-sm rounded-full hover:bg-[#E8C9A3]/20 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeProducts;