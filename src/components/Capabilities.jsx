import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Capabilities = () => {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: 'Destination Management',
      description: 'Seamlessly coordinating all logistics to ensure a flawless event experience.',
      gradient: 'from-purple-100 to-blue-50',
      borderGradient: 'from-purple-200 to-blue-200'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Special Events',
      description: 'Crafting memorable experiences that leave a lasting impression on every guest.',
      gradient: 'from-blue-100 to-cyan-50',
      borderGradient: 'from-blue-200 to-cyan-200'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Strategic Meetings',
      description: 'Aligning your meetings with your goals for maximum efficiency and success.',
      gradient: 'from-cyan-100 to-teal-50',
      borderGradient: 'from-cyan-200 to-teal-200'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Corporate Sponsorships',
      description: "Maximizing your brand's impact through strategic sponsorship opportunities.",
      gradient: 'from-purple-100 to-pink-50',
      borderGradient: 'from-purple-200 to-pink-200'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Consulting Services',
      description: 'Offering expert advice to optimize your event planning and execution.',
      gradient: 'from-blue-100 to-indigo-50',
      borderGradient: 'from-blue-200 to-indigo-200'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      title: 'Creative Design Services',
      description: "Creating visually stunning designs that capture your event's essence perfectly.",
      gradient: 'from-indigo-100 to-purple-50',
      borderGradient: 'from-indigo-200 to-purple-200'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-pink-50/30 via-purple-50/30 to-blue-50/30">
      <div className="container-custom mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-sm font-bold tracking-wider text-gray-800 mb-3 uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Capabilities
          </motion.p>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Event Management{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500">
              Services
            </span>
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
            >
              <div className={`h-full bg-gradient-to-br ${service.gradient} rounded-3xl p-8 border-2 border-white/40 hover:border-white/60 transition-all duration-500 shadow-lg hover:shadow-2xl backdrop-blur-sm relative overflow-hidden`}>
                {/* White overlay for better text contrast */}
                <div className="absolute inset-0 bg-white/50 rounded-3xl"></div>
                
                {/* Content wrapper with relative positioning */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-6 inline-block"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                      {service.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-800 leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <Link to="/services">
                    <motion.button
                      className="px-6 py-2.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 text-white rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn more
                      <svg 
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </Link>
                </div>
              </div>

              {/* Hover Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.borderGradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;

