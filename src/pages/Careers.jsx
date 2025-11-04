import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Careers = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    startDate: '',
    availability: '',
    additionalInfo: '',
    resume: null,
  });

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your application! We will review it and get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      startDate: '',
      availability: '',
      additionalInfo: '',
      resume: null,
    });
  };

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
            Join Our Growing Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-purple-50 max-w-3xl mx-auto"
          >
            Build your career with a dynamic, creative event management company
          </motion.p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              We Don't Just Plan Events. <span className="text-gradient">We Create Careers.</span>
            </h2>
            <p className="text-xl text-gray-800 mb-6 leading-relaxed">
              At Elite Event Solutions, we've invested over a decade building exceptional events—and exceptional careers. 
              We create trust, meaningful moments, and a legacy of excellence. From high-stakes corporate conferences to 
              transformative brand experiences, our team excels in dynamic, fast-paced environments.
            </p>
            <p className="text-xl text-gray-900 font-bold mb-8">And that's your opportunity.</p>
            
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Are You Ready for This Challenge?</h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              Do you excel under pressure, enjoy turning big ideas into reality, and know how to transform complexity into 
              seamless experiences? Whether you're an emerging talent or experienced professional, we seek driven individuals 
              who think creatively, work collaboratively, and never settle for mediocrity.
            </p>
            <p className="text-lg text-gray-900 mt-4 leading-relaxed font-bold">
              We're not here to simply fill positions—we're building a powerhouse team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why <span className="text-gradient">Elite Event Solutions?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Industry Leaders', desc: 'The premier event management firm in the region with a proven track record of excellence' },
              { title: 'Global Impact', desc: 'Projects spanning multiple countries and continents—work on events that matter' },
              { title: 'Cultural Excellence', desc: 'We prioritize people, passion, and purpose in everything we do' },
              { title: 'Creative Autonomy', desc: 'Your voice, ideas, and vision matter on every project' },
              { title: 'Dynamic Environment', desc: 'Fast-paced, rewarding work with tangible results and immediate impact' },
              { title: 'Professional Development', desc: 'Continuous learning opportunities, industry certifications, and career advancement' },
              { title: 'Work-Life Balance', desc: 'Flexible scheduling during non-event periods and comprehensive benefits package' },
              { title: 'Collaborative Team', desc: 'Work alongside talented professionals who support and inspire each other' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <FaCheckCircle className="text-purple-600 text-2xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-800">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Current Opportunities</h2>
          <p className="text-lg text-gray-800 mb-8">
            We seek problem-solvers, detail enthusiasts, and team collaborators. Roles may include:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              'Event Coordinators & On-Site Staff',
              'Venue and Logistics Specialists',
              'Creative Designers & Concept Developers',
              'Project Managers & Operations Leaders',
              'Client Relations Specialists',
              'Technical Production Coordinators',
              'Marketing & Communications Professionals',
              'Virtual Event Technology Specialists',
              'Finance & Budget Coordinators',
              'Interns with Ambition and Dedication',
            ].map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <FaCheckCircle className="text-purple-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{position}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-800 italic font-medium">
            If you possess the skills—or the passion to develop them—we'd like to connect. Experience matters, 
            but attitude and drive matter more.
          </p>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="section-padding bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="container-custom max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Who We're Looking For</h2>
          <p className="text-xl text-purple-50 mb-8">
            We value problem-solvers, detail-lovers, and team players. Our ideal candidates demonstrate:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Exceptional organizational skills and attention to detail',
              'Ability to thrive under pressure and adapt to changing circumstances',
              'Creative thinking and innovative problem-solving capabilities',
              'Strong communication and interpersonal skills',
              'Passion for creating memorable experiences',
              'Collaborative mindset and team-oriented approach',
              'Commitment to excellence in everything you do',
              'Flexibility and willingness to work non-traditional hours during events',
              'Positive attitude and professional demeanor',
            ].map((quality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <FaCheckCircle className="text-white flex-shrink-0" />
                <span className="text-white">{quality}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Apply Now</h2>
            <p className="text-gray-800 mb-8">Ready to join our team? Submit your application below.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Position of Interest *</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                  >
                    <option value="">Select Position</option>
                    <option value="Event Coordinator">Event Coordinator</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="Logistics Specialist">Logistics Specialist</option>
                    <option value="Creative Designer">Creative Designer</option>
                    <option value="Client Relations">Client Relations</option>
                    <option value="Technical Production">Technical Production</option>
                    <option value="Marketing Professional">Marketing Professional</option>
                    <option value="Internship">Internship</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Estimated Start Date *</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Please list 3 available dates and times you are available for an interview: *
                </label>
                <textarea
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  rows="3"
                  placeholder="Example: Thursday (Sept 19th at 10:00 AM), Tuesday (Sept 24 at 9:00 AM), Monday (Sept 30th at 1:00 PM)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Additional Information</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Tell us about yourself, your relevant experience, why you're interested in this position, and what makes you a great fit for our team."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Upload Resume *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-600 transition-colors">
                  <input
                    type="file"
                    name="resume"
                    onChange={handleChange}
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full"
                  />
                  <p className="text-gray-500 text-sm mt-2">
                    Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
                  </p>
                </div>
              </div>

              <button type="submit" className="w-full btn-primary">
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
