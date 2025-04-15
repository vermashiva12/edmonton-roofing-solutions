
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-roofing-900">
                Roof<span className="text-accent-orange">Masters</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <Link to="/" className="font-medium text-gray-700 hover:text-accent-orange transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="font-medium text-gray-700 hover:text-accent-orange transition-colors">
                    About
                  </Link>
                </li>
                <li className="relative group">
                  <Link to="/services" className="font-medium text-gray-700 hover:text-accent-orange transition-colors">
                    Services
                  </Link>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg p-4 w-60 top-full left-0 z-50 rounded-md">
                    <ul className="space-y-2">
                      <li>
                        <Link to="/services/residential-roofing" className="block py-2 px-3 hover:bg-gray-50 rounded-md text-gray-700 hover:text-accent-orange">
                          Residential Roofing
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/commercial-roofing" className="block py-2 px-3 hover:bg-gray-50 rounded-md text-gray-700 hover:text-accent-orange">
                          Commercial Roofing
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/roof-repairs" className="block py-2 px-3 hover:bg-gray-50 rounded-md text-gray-700 hover:text-accent-orange">
                          Roof Repairs
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/roof-maintenance" className="block py-2 px-3 hover:bg-gray-50 rounded-md text-gray-700 hover:text-accent-orange">
                          Roof Maintenance
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="/contact" className="font-medium text-gray-700 hover:text-accent-orange transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center">
              <Button className="bg-accent-orange hover:bg-accent-orangeDark text-white font-semibold">
                <Phone className="h-4 w-4 mr-2" />
                <span>780-123-4567</span>
              </Button>
            </div>
          </div>

          <div className="flex md:hidden">
            <button onClick={toggleMenu} type="button">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-6 pt-2 pb-4 space-y-4">
            <Link
              to="/"
              className="block py-2 text-base font-medium text-gray-700 hover:text-accent-orange"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-base font-medium text-gray-700 hover:text-accent-orange"
              onClick={toggleMenu}
            >
              About
            </Link>
            <div>
              <button
                className="block w-full text-left py-2 text-base font-medium text-gray-700 hover:text-accent-orange"
              >
                Services
              </button>
              <div className="pl-4 mt-2 space-y-2">
                <Link
                  to="/services/residential-roofing"
                  className="block py-2 text-sm text-gray-700 hover:text-accent-orange"
                  onClick={toggleMenu}
                >
                  Residential Roofing
                </Link>
                <Link
                  to="/services/commercial-roofing"
                  className="block py-2 text-sm text-gray-700 hover:text-accent-orange"
                  onClick={toggleMenu}
                >
                  Commercial Roofing
                </Link>
                <Link
                  to="/services/roof-repairs"
                  className="block py-2 text-sm text-gray-700 hover:text-accent-orange"
                  onClick={toggleMenu}
                >
                  Roof Repairs
                </Link>
                <Link
                  to="/services/roof-maintenance"
                  className="block py-2 text-sm text-gray-700 hover:text-accent-orange"
                  onClick={toggleMenu}
                >
                  Roof Maintenance
                </Link>
              </div>
            </div>
            <Link
              to="/contact"
              className="block py-2 text-base font-medium text-gray-700 hover:text-accent-orange"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button className="w-full bg-accent-orange hover:bg-accent-orangeDark text-white font-medium">
              <Phone className="h-4 w-4 mr-2" />
              <span>780-123-4567</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
