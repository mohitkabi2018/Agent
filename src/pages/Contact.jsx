import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { useData } from '../context/context';

const Contact = () => {
  const { data, loading } = useData();
  const contactData = data?.contact;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  if (loading) {
    return (
      <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  if (!contactData) {
    return (
      <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center">
        <p className="text-white">Error loading content. Please try again later.</p>
      </div>
    );
  }

  const iconComponents = {
    HiOutlineMail,
    HiOutlinePhone,
    HiOutlineLocationMarker
  };

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
            {contactData?.header.title}
          </motion.h1>
          <motion.p 
            className="text-[#E8C9A3]/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {contactData?.header.description}
          </motion.p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            className="bg-[#E8C9A3]/5 rounded-2xl p-6 sm:p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {contactData?.form.fields.map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-white text-sm font-medium mb-2">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      rows="4"
                      className="w-full px-4 py-3 bg-[#E8C9A3]/10 border border-[#E8C9A3]/20 rounded-lg text-white placeholder-[#E8C9A3]/50 focus:outline-none focus:border-[#E8C9A3]/50 resize-none"
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      className="w-full px-4 py-3 bg-[#E8C9A3]/10 border border-[#E8C9A3]/20 rounded-lg text-white placeholder-[#E8C9A3]/50 focus:outline-none focus:border-[#E8C9A3]/50"
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#E8C9A3]/10 text-[#E8C9A3] rounded-lg hover:bg-[#E8C9A3]/20 transition-colors duration-300 font-medium"
              >
                {contactData?.form.submitButton}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {/* Contact Cards */}
            {Object.entries(contactData?.info || {}).map(([key, info]) => {
              const Icon = iconComponents[info.icon];
              return (
                <div key={key} className="bg-[#E8C9A3]/5 rounded-2xl p-6 flex items-start space-x-4">
                  <div className="bg-[#E8C9A3]/10 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-[#E8C9A3]" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{info.title}</h3>
                    {info.items.map((item, index) => (
                      <p key={index} className="text-[#E8C9A3]/70">{item}</p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Business Hours */}
            <div className="bg-[#E8C9A3]/5 rounded-2xl p-6">
              <h3 className="text-white font-medium mb-4">{contactData?.hours.title}</h3>
              <div className="space-y-2">
                {contactData?.hours.schedule.map((item, index) => (
                  <div key={index} className="flex justify-between text-[#E8C9A3]/70">
                    <span>{item.days}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;