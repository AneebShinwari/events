import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ClientLogos = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clients = [
    'TECHCORP',
    'SUMMIT FINANCE',
    'PRESTIGE BRANDS',
    'INNOVATION LABS',
    'GLOBAL HOTELS',
    'ELITE CONSULTING',
    'VISIONARY MEDIA',
    'METROPOLITAN GROUP',
  ];

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Trusted By <span className="text-gradient">Leading Organizations</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl flex items-center justify-center hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-700 group-hover:text-gradient transition-all duration-300">
                  {client}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;

