import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLightbulb, FaCheckCircle, FaPalette, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: 'Strategic Planning',
      description: 'From concept development to execution roadmap, we create detailed strategies that align with your goals and deliver measurable results.',
      bgGradient: 'from-purple-400/20 via-purple-300/20 to-blue-400/20',
      iconBg: 'from-purple-600 to-blue-600',
      shadowColor: 'shadow-purple-200',
      accentColor: 'text-purple-700',
    },
    {
      icon: <FaCheckCircle className="text-4xl" />,
      title: 'Flawless Execution',
      description: 'Our experienced team manages every logistical element, ensuring smooth operations from registration to final wrap-up.',
      bgGradient: 'from-pink-400/20 via-rose-300/20 to-purple-400/20',
      iconBg: 'from-pink-600 to-purple-600',
      shadowColor: 'shadow-pink-200',
      accentColor: 'text-pink-700',
    },
    {
      icon: <FaPalette className="text-4xl" />,
      title: 'Creative Design',
      description: 'We transform spaces into immersive environments that reflect your brand identity and leave lasting impressions on attendees.',
      bgGradient: 'from-blue-400/20 via-cyan-300/20 to-indigo-400/20',
      iconBg: 'from-blue-600 to-indigo-600',
      shadowColor: 'shadow-blue-200',
      accentColor: 'text-blue-700',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-semibold uppercase tracking-wider">
              Our Approach
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Comprehensive Event{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
              Solutions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our team of experienced meeting planners bring brand visions to life through strategic creative thinking, 
            clear messaging, distinctive design, and unparalleled experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card with gradient background */}
              <div className={`relative h-full bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm rounded-3xl p-8 border border-white/60 shadow-xl ${service.shadowColor} hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* White overlay for text readability */}
                <div className="absolute inset-0 bg-white/70 rounded-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <motion.div
                    className="mb-6"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.iconBg} rounded-2xl shadow-lg text-white transform group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <Link to="/services">
                    <motion.div
                      className={`inline-flex items-center gap-2 ${service.accentColor} font-bold group/link`}
                      whileHover={{ gap: "1rem" }}
                      transition={{ duration: 0.3 }}
                    >
                      Learn More 
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <FaArrowRight className="text-lg" />
                      </motion.div>
                    </motion.div>
                  </Link>
                </div>

                {/* Decorative corner element */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.iconBg} opacity-10 rounded-bl-full`}></div>
              </div>

              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;

