import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useData } from '../../../context/context';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="border-b border-[#3A3A3A] last:border-b-0"
  >
    <button
      onClick={onClick}
      className="w-full py-6 flex items-center justify-between gap-4 text-left group"
      aria-expanded={isOpen}
    >
      <span className="text-lg font-medium text-white/90 group-hover:text-[#E8C9A3] 
        transition-colors duration-300 flex items-center gap-3"
      >
        <span className="hidden sm:block text-sm text-[#E8C9A3]/60 font-light">
          {String(question.id).padStart(2, '0')}
        </span>
        {question.question}
      </span>
      <motion.div
        initial={false}
        animate={{ rotate: isOpen ? 180 : 0 }}
        className="flex-shrink-0 w-8 h-8 rounded-full 
          bg-gradient-to-br from-[#2C2C2C] to-[#1A1A1A] 
          flex items-center justify-center
          group-hover:from-[#E8C9A3]/20 group-hover:to-[#9B6E3F]/20 
          transition-all duration-300 border border-[#3A3A3A]
          group-hover:border-[#E8C9A3]/30"
      >
        {isOpen ? (
          <FaMinus className="w-3.5 h-3.5 text-[#E8C9A3]" />
        ) : (
          <FaPlus className="w-3.5 h-3.5 text-[#E8C9A3]" />
        )}
      </motion.div>
    </button>
    <motion.div
      initial={false}
      animate={{
        height: isOpen ? 'auto' : 0,
        opacity: isOpen ? 1 : 0,
        marginBottom: isOpen ? '1.5rem' : 0
      }}
      className="overflow-hidden"
    >
      <div className="bg-gradient-to-br from-[#2C2C2C]/50 to-[#1A1A1A]/50 
        rounded-xl p-6 border border-[#3A3A3A]/50"
      >
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-400 leading-relaxed relative"
        >
          {/* Decorative Elements */}
          <span className="absolute -top-3 -left-3 w-6 h-6 
            bg-gradient-to-br from-[#E8C9A3]/10 to-[#9B6E3F]/10 
            rounded-full blur-lg"
          />
          <span className="absolute -bottom-3 -right-3 w-6 h-6 
            bg-gradient-to-br from-[#9B6E3F]/10 to-[#E8C9A3]/10 
            rounded-full blur-lg"
          />
          
          {/* Answer Content */}
          <span className="relative z-10">
            {answer}
          </span>
        </motion.p>
      </div>
    </motion.div>
  </motion.div>
);

const FAQ = () => {
  const [openId, setOpenId] = useState(1);
  const { data, loading } = useData();
  const faqData = data?.faq;

  if (loading) return null; // Or your loading component

  return (
    <section className="relative bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] bg-repeat opacity-5" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] 
            bg-gradient-to-br from-[#E8C9A3]/5 to-[#9B6E3F]/5 
            rounded-full blur-[100px]
            transform translate-x-1/2 -translate-y-1/2"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] 
            bg-gradient-to-br from-[#9B6E3F]/5 to-[#E8C9A3]/5 
            rounded-full blur-[100px]
            transform -translate-x-1/2 translate-y-1/2"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#E8C9A3]/80 text-sm font-light tracking-wider mb-2 block">
            {faqData?.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 
            bg-clip-text text-transparent mb-4"
          >
            {faqData?.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {faqData?.description}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E8C9A3] to-[#9B6E3F] mx-auto mt-6" />
        </motion.div>

        {/* FAQ Container */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#2C2C2C]/30 to-[#1A1A1A]/30 
              backdrop-blur-sm rounded-2xl p-6 sm:p-8
              border border-[#3A3A3A] shadow-xl"
          >
            {faqData?.items.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))}
          </motion.div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            {faqData?.contactCTA.text}
          </p>
          <Link
            to={faqData?.contactCTA.buttonLink}
            className="inline-flex items-center justify-center px-8 py-3 
              bg-gradient-to-r from-[#E8C9A3] to-[#9B6E3F] 
              text-white rounded-full font-medium
              hover:shadow-lg hover:shadow-[#E8C9A3]/20 
              transition-all duration-300 transform hover:scale-105
              border border-[#E8C9A3]/20"
          >
            {faqData?.contactCTA.buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;