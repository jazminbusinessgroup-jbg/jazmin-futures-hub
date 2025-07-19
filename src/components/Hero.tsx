import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/lovable-uploads/3713ac4b-61df-41f1-a1f6-6c02dba8c01a.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-jazmin-brown rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-jazmin-warm rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-jazmin-gold rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/09df0feb-4add-4808-b30c-420a0364a90f.png" 
              alt="Jazmin Business Group Logo" 
              className="h-32 w-32 object-contain animate-fade-in"
            />
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Empowering Ideas.
            <br />
            <span className="text-jazmin-cream">Building Futures.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in">
            Jazmin Business Group LLC (JBG) manages a diverse portfolio of companies across education, 
            technology, care, travel, and publishing—united by integrity and innovation.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              onClick={() => scrollToSection("subsidiaries")}
              className="bg-jazmin-brown hover:bg-jazmin-warm text-white px-8 py-3 text-lg font-medium shadow-warm transition-all duration-300 hover:shadow-elegant group"
            >
              Explore Our Companies
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-jazmin-brown text-jazmin-brown hover:bg-jazmin-brown hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 group"
            >
              Contact Us
              <Sparkles className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;