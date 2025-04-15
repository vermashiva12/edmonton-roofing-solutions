
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-roofing-900 text-white">
      <div className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">
                Roof<span className="text-accent-orange">Masters</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-6">
              Edmonton's leading roofing company providing quality services for over 15 years. We specialize in residential and commercial roofing solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/residential-roofing" className="text-gray-300 hover:text-accent-orange transition-colors">
                  Residential Roofing
                </Link>
              </li>
              <li>
                <Link to="/services/commercial-roofing" className="text-gray-300 hover:text-accent-orange transition-colors">
                  Commercial Roofing
                </Link>
              </li>
              <li>
                <Link to="/services/roof-repairs" className="text-gray-300 hover:text-accent-orange transition-colors">
                  Roof Repairs
                </Link>
              </li>
              <li>
                <Link to="/services/roof-maintenance" className="text-gray-300 hover:text-accent-orange transition-colors">
                  Roof Maintenance
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent-orange transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-orange transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-300 hover:text-accent-orange transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-accent-orange transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent-orange mt-1 mr-3" />
                <span className="text-gray-300">
                  1234 Roofing Way<br />Edmonton, AB T5J 2R4
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent-orange mr-3" />
                <span className="text-gray-300">780-123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent-orange mr-3" />
                <a href="mailto:info@roofmastersedmonton.ca" className="text-gray-300 hover:text-accent-orange transition-colors">
                  info@roofmastersedmonton.ca
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="container mx-auto py-6 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Roof Masters Edmonton. All rights reserved.
            </p>
            <div className="flex mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-accent-orange mx-3">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-accent-orange mx-3">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
