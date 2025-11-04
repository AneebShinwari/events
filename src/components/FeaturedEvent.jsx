import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaArrowRight } from 'react-icons/fa';

const FeaturedEvent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-300 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
              alt="Annual Tech Summit 2024"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block bg-gradient-to-r from-purple-300 to-pink-300 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              FEATURED EVENT
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              ANNUAL TECH SUMMIT 2024
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-gray-800">
                <FaCalendarAlt className="text-purple-600 text-xl" />
                <span className="text-lg font-medium">March 15-17, 2024</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <FaMapMarkerAlt className="text-purple-600 text-xl" />
                <span className="text-lg font-medium">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800">
                <FaUsers className="text-purple-600 text-xl" />
                <span className="text-lg font-medium">500+ Attendees</span>
              </div>
            </div>

            <p className="text-gray-800 text-lg leading-relaxed mb-8">
              A three-day conference bringing together industry leaders for keynotes, workshops, and networking 
              experiences. We managed complete event production including venue selection, speaker coordination, 
              registration management, and on-site logistics to deliver a seamless experience for all participants.
            </p>

            <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-purple-600 font-bold text-lg hover:gap-4 transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              View Case Study <FaArrowRight />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvent;

