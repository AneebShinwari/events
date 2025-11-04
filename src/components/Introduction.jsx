import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Introduction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Creating Moments That Matter{' '}
            <span className="text-gradient">Since 2010</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.p
              className="text-xl md:text-2xl text-gray-900 leading-relaxed font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We are a comprehensive event management agency specializing in corporate events, conferences, 
              and brand experiences worldwide. For over a decade, we've collaborated with industry leaders, 
              organizations, and international brands to conceptualize, organize, and execute events that 
              build connections, captivate audiences, and strengthen brand identity.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-800 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our team operates as a seamless extension of yours—handling every detail, managing complexities, 
              and allowing you to concentrate on your core objectives. You have your expertise. Let us handle ours. 
              We manage the planning, coordination, and implementation so your event runs flawlessly, not stressfully.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;

