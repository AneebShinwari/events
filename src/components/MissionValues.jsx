import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MissionValues = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding gradient-purple relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-white/70 text-purple-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
            PROMISE, MISSION & GOAL
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Makes Us Different
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Our Team"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Content Side */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-300 to-purple-400 p-8 rounded-2xl shadow-lg"
            >
              <div className="text-purple-900 text-sm font-bold mb-2">OUR MISSION</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">High Quality, Reliable</h3>
              <p className="text-gray-900 leading-relaxed font-medium">
                Provide high quality, reliable, individualized meeting, event planning and specialty marketing 
                services worldwide that enhance the communications programs and reputations of our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="gradient-orange p-8 rounded-2xl shadow-lg"
            >
              <div className="text-orange-900 text-sm font-bold mb-2">OUR PROMISE</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Company Objectives First</h3>
              <p className="text-gray-900 leading-relaxed font-medium">
                To fulfill—or surpass—your expectations. Your event will stand out from those of your competitors. 
                We promise that the program we develop will reflect the goals and objectives of your marketing efforts.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;

