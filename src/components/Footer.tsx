import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-jazmin-brown text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/09df0feb-4add-4808-b30c-420a0364a90f.png" 
                alt="Jazmin Business Group Logo" 
                className="h-10 w-10 object-contain"
              />
              <div>
                <h3 className="font-serif text-xl font-semibold">
                  Jazmin Business Group LLC
                </h3>
                <p className="text-sm text-jazmin-cream">JBG</p>
              </div>
            </div>
            <p className="text-jazmin-cream leading-relaxed mb-4">
              Empowering ideas and building futures through our diverse portfolio 
              of companies across education, technology, care, travel, and publishing.
            </p>
            <p className="text-sm text-jazmin-beige">
              Registered in Kentucky, USA
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-jazmin-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about"
                  className="text-jazmin-beige hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/companies"
                  className="text-jazmin-beige hover:text-white transition-colors duration-300"
                >
                  Our Companies
                </Link>
              </li>
              <li>
                <Link 
                  to="/governance"
                  className="text-jazmin-beige hover:text-white transition-colors duration-300"
                >
                  Governance
                </Link>
              </li>
              <li>
                <Link 
                  to="/news"
                  className="text-jazmin-beige hover:text-white transition-colors duration-300"
                >
                  News & Updates
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="text-jazmin-beige hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-jazmin-cream mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-jazmin-beige hover:text-white transition-colors duration-300">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-jazmin-beige hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/code-of-conduct" className="text-jazmin-beige hover:text-white transition-colors duration-300">
                  Code of Conduct
                </Link>
              </li>
              <li>
                <Link to="/compliance" className="text-jazmin-beige hover:text-white transition-colors duration-300">
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-jazmin-warm mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-jazmin-beige text-sm">
              © 2024 Jazmin Business Group LLC. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-jazmin-beige mt-4 sm:mt-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>for a better future</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;