import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheckCircle, FaLightbulb, FaPalette, FaVideo, FaCog } from 'react-icons/fa';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-purple py-32">
        <div className="container-custom px-4 md:px-8 lg:px-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Comprehensive Event Management Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-purple-50 max-w-3xl mx-auto"
          >
            End-to-end solutions for every type of event, from concept to completion
          </motion.p>
        </div>
      </section>

      {/* Service 1: Event Strategy */}
      <section className="section-padding bg-white" ref={ref}>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6">
                <FaLightbulb className="text-3xl text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Strategic Event Planning & Consulting
              </h2>
              <p className="text-xl text-gray-900 mb-6 font-semibold">
                Years of event management expertise available to guide your success. We provide the insights and 
                strategic direction you need to achieve optimal results.
              </p>
              <p className="text-gray-800 mb-6 leading-relaxed">
                We meet with your team to assess your overall objectives and requirements. From that foundation, 
                we guide you through proven planning processes, offering our knowledge as a comprehensive support 
                system for your event needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {[
                'Concept Development & Creative Ideation',
                'Budget Planning & Financial Management',
                'Venue Selection & Site Inspections',
                'Vendor Recommendations & Management',
                'Timeline Development & Project Management',
                'Risk Assessment & Contingency Planning',
                'Attendee Experience Design',
                'Technology Platform Selection',
                'Sustainability & CSR Integration',
                'Post-Event Analysis & ROI Measurement',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-purple-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service 2: Event Production */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center mb-6 mx-auto">
              <FaPalette className="text-3xl text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Immersive Event Production & Creative Design
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto font-medium">
              Every event tells a story. We make it unforgettable.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-gray-800 leading-relaxed mb-6">
              We approach each event as a live production. Excellence is our only standard. Every event represents 
              your brand, your values, and your vision.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Our creative team transforms concepts into captivating experiences through thoughtful design, 
              innovative technology, and meticulous attention to detail. From intimate gatherings to large-scale 
              productions, we craft environments that engage, inspire, and leave lasting impressions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Stage Design & Production',
              'Lighting & Audio/Visual Coordination',
              'Décor & Environmental Design',
              'Registration & Attendee Management',
              'Entertainment & Speaker Coordination',
              'Branding & Signage Solutions',
              'Interactive Technology Integration',
              'Live Streaming & Broadcast Production',
              'Photography & Videography Coordination',
              'Green Room & VIP Management',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <FaCheckCircle className="text-purple-600 text-xl mb-3" />
                <p className="text-gray-800 font-semibold">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service 3: Logistics */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop"
                alt="Event Logistics"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                <FaCog className="text-3xl text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Seamless Logistics & Operational Management
              </h2>
              <p className="text-gray-800 leading-relaxed mb-6">
                Behind every successful event lies meticulous logistical coordination. The details matter, and we manage them all.
              </p>
              <p className="text-gray-800 leading-relaxed mb-6">
                From transportation to catering, technical requirements to security protocols—our operations team ensures 
                every element functions smoothly. We anticipate challenges, prepare contingencies, and execute with precision 
                so you can focus on engaging with your guests.
              </p>
              <div className="space-y-3">
                {[
                  'Transportation & Shuttle Services',
                  'Accommodation Arrangements',
                  'Catering Coordination',
                  'Technical Equipment & AV Support',
                  'On-Site Staffing & Coordination',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-purple-600 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Virtual Events */}
      <section className="section-padding bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="container-custom text-center">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 mx-auto">
            <FaVideo className="text-3xl text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Virtual & Hybrid Event Solutions</h2>
          <p className="text-xl text-purple-50 max-w-3xl mx-auto mb-12">
            Engage audiences anywhere in the world with cutting-edge virtual and hybrid event platforms.
          </p>
          <p className="text-white max-w-3xl mx-auto leading-relaxed">
            The digital landscape has transformed how we connect. Our virtual event expertise ensures your online 
            experiences are just as engaging, interactive, and impactful as in-person gatherings. Whether fully 
            virtual or hybrid, we create seamless digital experiences that keep attendees engaged and connected.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
