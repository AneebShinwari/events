import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
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
            About Elite Event Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-purple-50 max-w-3xl mx-auto"
          >
            Passionate professionals dedicated to creating memorable experiences
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white" ref={ref}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">Our Story</h2>
            
            <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
              <p>
                Founded in 2010, Elite Event Solutions emerged from a simple belief: every event should be an 
                experience worth remembering. What started as a small team of dedicated event enthusiasts has 
                grown into a full-service agency managing events across multiple continents.
              </p>
              
              <p>
                Our journey has been defined by our commitment to excellence, innovation, and building genuine 
                partnerships with our clients. We don't just plan events—we craft experiences that resonate, 
                inspire, and deliver tangible results.
              </p>
              
              <p>
                Through passionate people with extensive event experience, a proven planning process, 
                cutting-edge technology, a creative and imaginative flair, and a drive to create memorable moments, 
                our award-winning team transforms your programs into engaging experiences for your audience from 
                start to finish.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            What <span className="text-gradient">Drives Us</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Our Mission',
                content: 'To deliver exceptional, personalized event management services globally that elevate brand communications and create lasting impressions. We strive to be the trusted partner for organizations seeking flawless event execution and strategic creative solutions.',
                gradient: 'gradient-purple',
              },
              {
                title: 'Our Promise',
                content: 'Client success comes first. We develop programs that align with your strategic objectives while maintaining the highest standards of quality and professionalism. Your event will exceed expectations and stand out from competitors.',
                gradient: 'gradient-pink',
              },
              {
                title: 'Our Approach',
                content: 'Collaborative partnership. Creative problem-solving. Meticulous attention to detail. We blend strategic thinking with flawless execution to transform your concepts into reality. Every decision is guided by your goals and brand identity.',
                gradient: 'gradient-blue',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`${item.gradient} text-white p-8 rounded-2xl shadow-xl card-hover`}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-900 leading-relaxed font-medium">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Meet Our <span className="text-gradient">Expert Team</span>
              </h2>
              <p className="text-xl text-gray-800 mb-6 leading-relaxed font-medium">
                A diverse group of creative professionals with specialized expertise
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                Our agency consists of seasoned professionals, each bringing unique talents across various disciplines. 
                From strategic planners to creative designers, logistics specialists to on-site coordinators—we function 
                as a cohesive unit, collaborating seamlessly to deliver outstanding results.
              </p>
              <p className="text-gray-800 leading-relaxed">
                Every team member is directly accessible throughout your project. No barriers, no delays. You communicate 
                directly with the specialists managing your event. Our staff remains available around the clock during 
                operational programs, providing after-hours contact information for every team member assigned to your event.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Team Meeting"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            Our <span className="text-gradient">Expertise</span>
          </h2>
          
          <p className="text-xl text-gray-800 mb-8 text-center leading-relaxed">
            With over a decade of industry experience, we bring comprehensive knowledge to every project. We've successfully managed:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Corporate conferences with 1,000+ attendees',
              'Intimate executive retreats and board meetings',
              'Product launches and brand activation campaigns',
              'Multi-day conventions and trade shows',
              'Virtual and hybrid event experiences',
              'Award ceremonies and gala dinners',
              'Team-building programs and corporate offsites',
              'International destination events across 5 continents',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <FaCheckCircle className="text-purple-600 text-xl mt-1 flex-shrink-0" />
                <span className="text-gray-800 text-lg font-medium">{item}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-800 text-center mt-8 leading-relaxed">
            Our portfolio spans diverse industries including technology, healthcare, finance, hospitality, and consumer goods. 
            This breadth of experience allows us to bring fresh perspectives and proven strategies to every engagement.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
