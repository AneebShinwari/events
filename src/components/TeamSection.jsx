import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    { 
      title: 'Event Planning & Management',
      col: 1 
    },
    { 
      title: 'On-Site Event Management',
      col: 2 
    },
    { 
      title: 'Creative Design & Concept Development',
      col: 1 
    },
    { 
      title: 'Venue Selection & Layout Design',
      col: 2 
    },
    { 
      title: 'Logistics Coordination',
      col: 1 
    },
    { 
      title: 'Vendor Coordination',
      col: 2 
    },
    { 
      title: 'Brand Activation',
      col: 1 
    },
    { 
      title: 'Global Event Execution',
      col: 2 
    },
  ];

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Team Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                alt="Event Leadership Team"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-8 right-8 bg-white rounded-full p-6 shadow-xl">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-300 to-indigo-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gray-800 font-bold text-xs leading-tight">
                      INSPIRING<br/>CREATIVITY<br/>BUILDING TRUST
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-purple-500 text-sm font-semibold mb-3 tracking-wider">
              EVENT LEADERSHIP TEAM
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Global Excellence,<br />Local Expertise
            </h2>

            <p className="text-gray-800 leading-relaxed text-lg mb-8">
              At Event Logistics Inc., we are your strategic partners in crafting unforgettable experiences. 
              Driven by an obsession for delivering impressive and unique experiences, we align ourselves as 
              an extension of your team to achieve shared goals and missions.
            </p>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-800 font-medium">{service.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

