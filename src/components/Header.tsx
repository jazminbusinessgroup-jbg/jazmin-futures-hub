import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-jazmin-dark/95 backdrop-blur-md border-b border-jazmin-border/50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src="/lovable-uploads/09df0feb-4add-4808-b30c-420a0364a90f.png" 
                alt="JBG Logo" 
                className="h-12 w-12 object-contain filter brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-jazmin-gold/20 to-transparent rounded-full blur-sm"></div>
            </div>
            <div className="text-white font-serif text-xl font-bold tracking-wide">
              <span className="text-gradient">Jazmin</span> Business Group
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { label: "Home", section: "home" },
              { label: "About", section: "about" },
              { label: "Subsidiaries", section: "subsidiaries" },
              { label: "Governance", section: "governance" },
              { label: "News", section: "news" },
              { label: "Contact", section: "contact" }
            ].map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="relative text-white hover:text-jazmin-gold transition-all duration-300 font-medium text-sm uppercase tracking-wider group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-jazmin-gold to-transparent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-jazmin-gold transition-colors p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-jazmin-dark/98 backdrop-blur-md border-b border-jazmin-border/50 shadow-premium">
          <nav className="container mx-auto px-6 py-8 space-y-6">
            {[
              { label: "Home", section: "home" },
              { label: "About", section: "about" },
              { label: "Subsidiaries", section: "subsidiaries" },
              { label: "Governance", section: "governance" },
              { label: "News", section: "news" },
              { label: "Contact", section: "contact" }
            ].map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="block w-full text-left text-white hover:text-jazmin-gold transition-all duration-300 font-medium py-3 text-lg uppercase tracking-wider border-b border-jazmin-border/30 hover:border-jazmin-gold/50"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;