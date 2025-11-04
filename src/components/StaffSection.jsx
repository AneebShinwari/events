import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StaffSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-gray-50" ref={ref}>
      <div className="container-custom">
        {/* Coordinators Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-purple-600 text-sm font-semibold mb-2">ABOUT OUR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Coordinators &<br />
              On-Site Staff
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-800 leading-relaxed text-lg">
              Elite Event Solutions, Inc. handpicks a team of on-site coordinators matched to your program's needs. 
              Whether they are onsite registration clerks, preparation staff, manual laborers, or event managers, 
              Elite Event Solutions, Inc., understands the importance of consistently portraying your company's 
              reputation and program message.
            </p>
            <p className="text-gray-800 leading-relaxed text-lg">
              Coordinators arrive prior to the meeting and/or event to reconfirm program components with all vendors, 
              prepare for the arrival of your guests and attendees and will remain with you to the full and successful 
              conclusion of your program.
            </p>
          </motion.div>
        </div>

        {/* Management Team Section */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-purple-600 text-sm font-semibold mb-2">ABOUT OUR</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Management<br />
              Team
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-800 leading-relaxed text-lg">
              Elite Event Solutions consists of a core group of individuals, each possessing creative talent in various disciplines. 
              We each function in many different roles providing synergy and cost effectiveness for our clients.
            </p>
            <p className="text-gray-800 leading-relaxed text-lg">
              Every member of our team is always accessible to you, no layers to go through.
            </p>
            <p className="text-gray-800 leading-relaxed text-lg">
              You speak directly to the source you need, when you need them. Our staff is on call 24 hours a day during 
              each operational program. We will give you the after-hours home and cell phone numbers of each staff person 
              working on your event.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StaffSection;

