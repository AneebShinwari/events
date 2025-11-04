import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom px-4 md:px-8 lg:px-16 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
                {/* Logo Icon - Elegant "E" design */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-500 rounded-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all" />
                <div className="relative z-10 font-bold text-white text-2xl">E</div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">Elite Event Solutions</span>
                <span className="text-xs text-gray-400 leading-tight">Inc.</span>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating Meetings<br />
              and Events for<br />
              <span className="text-3xl font-bold text-gradient">15 YEARS</span>
            </p>

            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-400 transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-400 transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-colors"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Submit RFP
              </Link>
              <Link to="/careers" className="block text-gray-300 hover:text-white transition-colors">
                Work with Us
              </Link>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-purple-300 mt-1 flex-shrink-0" />
                <div className="text-gray-200 text-sm">
                  2450 West Avenue, Suite 2100<br />
                  Nashville, TN 37205
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-purple-300 flex-shrink-0" />
                <a href="tel:615-789-4500" className="text-gray-200 text-sm hover:text-white transition-colors">
                  615-789-4500
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-purple-300 flex-shrink-0" />
                <a href="mailto:info@eliteeventsolutions.com" className="text-gray-200 text-sm hover:text-white transition-colors">
                  info@eliteeventsolutions.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              ©2025 ELITE EVENT SOLUTIONS, INC | ALL RIGHTS RESERVED
            </p>
            <div className="flex gap-6 text-sm text-gray-300">
              <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link to="#" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
