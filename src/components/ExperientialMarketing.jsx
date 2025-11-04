import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaAward, FaHandshake } from 'react-icons/fa';

const ExperientialMarketing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    { number: '01', title: 'Write the Screenplay', subtitle: 'Develop the Plan' },
    { number: '02', title: 'Build The Set', subtitle: 'Produce Graphics and Displays' },
    { number: '03', title: 'Cast Auditions', subtitle: 'Assign Staff and Select Vendors' },
    { number: '04', title: 'Rehearse', subtitle: 'Create Day of Plan and Go Through Run of Show' },
    { number: '05', title: 'Observe and Adjust', subtitle: 'Make any necessary adjustments' },
    { number: '06', title: 'Re-Rehearse', subtitle: 'Go through it all again and when the moment comes, we deliver a brilliant performance.' },
  ];

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-purple-100 text-purple-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              MOMENT IN TIME TO A MEMORY TO INFLUENCE
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">EXPERIENTIAL</span>
              <br />
              <span className="text-gray-900">MARKETING</span>
            </h2>

            <p className="text-xl text-gray-900 mb-8 leading-relaxed font-bold">
              Every event is a live performance. We only get one shot. We treat each event as though we are putting on a show.
            </p>

            <div className="space-y-6 mb-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-300 to-pink-300 flex items-center justify-center text-gray-800 font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{step.title}</h4>
                    <p className="text-gray-800">{step.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-800 leading-relaxed">
              We know that a great idea doesn't always translate into results, and amazing results don't happen by accident. 
              It takes a great team masterfully coordinating and synchronizing the in-between to create a truly successful campaign.
            </p>
          </motion.div>

          {/* Image and Awards Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-purple-300 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop"
                alt="Speaker Presentation"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>

            {/* Award Badges */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-300 to-purple-400 p-6 rounded-xl text-center shadow-md"
              >
                <FaTrophy className="text-4xl text-white mx-auto mb-2" />
                <p className="text-gray-900 text-sm font-bold">Best Places to Work</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-pink-300 to-pink-400 p-6 rounded-xl text-center shadow-md"
              >
                <FaAward className="text-4xl text-white mx-auto mb-2" />
                <p className="text-gray-900 text-sm font-bold">RISE Awards Winner</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-indigo-300 to-indigo-400 p-6 rounded-xl text-center shadow-md"
              >
                <FaHandshake className="text-4xl text-white mx-auto mb-2" />
                <p className="text-gray-900 text-sm font-bold">BBB Torch Awards</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperientialMarketing;

