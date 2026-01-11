import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';
import { useData } from '../../../context/context';

const ProductCard = ({ product, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ 
      duration: 0.6,
      delay: index * 0.1,
      ease: "easeOut"
    }}
    className="group w-full"
  >
    <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-[#E8DFD8] mb-4 sm:mb-6">
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
      
      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        loading="lazy"
      />

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#E8C9A3]/20 to-transparent" />
      
      {/* Price Tag */}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
        <span className="bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[#2C2C2C] text-sm sm:text-base font-medium">
        ₹{product.price.toFixed(2)}
        </span>
      </div>
    </div>

    <div className="space-y-3 sm:space-y-4">
      <div className="text-center space-y-1 sm:space-y-2 transition-transform duration-300 group-hover:translate-y-[-4px]">
        <h3 className="text-base sm:text-[17px] text-[#2C2C2C] font-medium group-hover:text-[#9B6E3F] transition-colors duration-300">
          {product.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#2C2C2C]/60 transition-colors duration-300 group-hover:text-[#2C2C2C]/80">
          {product.description}
        </p>
      </div>

      <button
        className="w-full bg-[#2C2C2C] hover:bg-[#1A1A1A] text-white rounded-full py-2.5 sm:py-3 flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-lg"
        aria-label={`Add ${product.title} to cart`}
      >
        <FaShoppingCart className="text-xs sm:text-sm" />
        <span className="text-xs sm:text-sm font-medium tracking-wide">Add to Basket</span>
      </button>
    </div>
  </motion.div>
);

const Products = () => {
  const { data, loading } = useData();
  const productsData = data?.products;

  if (loading) return null; // Or your loading component

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F3EDE6] to-[#F8F5F1]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
      
      <div className="relative max-w-[1440px] mx-auto space-y-16 sm:space-y-20 lg:space-y-24">
        {/* Tang-Tastic Coffee */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-medium text-[#2C2C2C] mb-3 sm:mb-4">
              {productsData?.coffee.title}
            </h2>
            <p className="text-[#2C2C2C]/60 max-w-xl mx-auto text-sm sm:text-base px-4">
              {productsData?.coffee.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {productsData?.coffee.items.map((product, index) => (
              <ProductCard
                key={product.title}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* To Go With Coffee */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-medium text-[#2C2C2C] mb-3 sm:mb-4">
              {productsData?.croissants.title}
            </h2>
            <p className="text-[#2C2C2C]/60 max-w-xl mx-auto text-sm sm:text-base px-4">
              {productsData?.croissants.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {productsData?.croissants.items.map((product, index) => (
              <ProductCard
                key={product.title}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Decorative Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[#2C2C2C]/10 to-transparent"
        />
      </div>
    </section>
  );
};

export default Products;