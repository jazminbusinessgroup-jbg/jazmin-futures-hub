import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-jazmin-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/09df0feb-4add-4808-b30c-420a0364a90f.png" 
              alt="Jazmin Business Group Logo" 
              className="h-10 w-10 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="font-serif text-xl font-semibold text-jazmin-brown">
                Jazmin Business Group
              </h1>
              <p className="text-xs text-jazmin-warm -mt-1">LLC</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-jazmin-warm hover:text-jazmin-brown transition-colors duration-300"
            >
              Home
            </Link>
            <Link 
              to="/about"
              className="text-jazmin-warm hover:text-jazmin-brown transition-colors duration-300"
            >
              About
            </Link>
            <Link 
              to="/companies"
              className="text-jazmin-warm hover:text-jazmin-brown transition-colors duration-300"
            >
              Companies
            </Link>
            <button 
              onClick={() => scrollToSection("governance")}
              className="text-jazmin-warm hover:text-jazmin-brown transition-colors duration-300"
            >
              Governance
            </button>
            <Link 
              to="/news"
              className="text-jazmin-warm hover:text-jazmin-brown transition-colors duration-300"
            >
              News
            </Link>
            <Link 
              to="/contact"
              className="text-jazmin-warm hover:text-jazmin-brown transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-jazmin-brown"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-background border-t border-jazmin-beige">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/"
                className="text-left text-jazmin-warm hover:text-jazmin-brown transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about"
                className="text-left text-jazmin-warm hover:text-jazmin-brown transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/companies"
                className="text-left text-jazmin-warm hover:text-jazmin-brown transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Companies
              </Link>
              <button 
                onClick={() => scrollToSection("governance")}
                className="text-left text-jazmin-warm hover:text-jazmin-brown transition-colors duration-300 py-2"
              >
                Governance
              </button>
              <Link 
                to="/news"
                className="text-left text-jazmin-warm hover:text-jazmin-brown transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link 
                to="/contact"
                className="text-left text-jazmin-warm hover:text-jazmin-brown transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;