import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import premiumCityscape from "@/assets/premium-cityscape.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-jazmin-dark">
      {/* Premium Background with multiple layers */}
      <div className="absolute inset-0">
        {/* Cityscape background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${premiumCityscape})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Logo background with overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/lovable-uploads/3713ac4b-61df-41f1-a1f6-6c02dba8c01a.png')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Dark gradient overlay for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-jazmin-dark via-jazmin-dark/95 to-jazmin-surface"></div>
        {/* Gold accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-jazmin-gold/5"></div>
      </div>

      {/* Floating decorative elements with premium styling */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-jazmin-gold/30 rounded-full animate-float glow-gold"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-jazmin-gold/40 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 border border-jazmin-gold/50 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        
        {/* Additional luxury elements */}
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-jazmin-gold rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-jazmin-gold rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      </div>

      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Premium Logo with enhanced styling */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-jazmin-gold/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img 
                src="/lovable-uploads/09df0feb-4add-4808-b30c-420a0364a90f.png" 
                alt="Jazmin Business Group Logo" 
                className="relative h-24 w-24 sm:h-32 sm:w-32 object-contain animate-fade-in filter brightness-110 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Premium Headline with gradient text */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in leading-tight">
            <span className="text-gradient">Empowering Ideas.</span>
            <br />
            <span className="text-white">Building Futures.</span>
          </h1>

          {/* Enhanced Subheadline */}
          <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in font-light">
            Jazmin Business Group LLC (JBG) manages a diverse portfolio of companies across education, 
            technology, care, travel, and publishing—<span className="text-jazmin-gold font-medium">united by integrity and innovation.</span>
          </p>

          {/* Premium Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 animate-fade-in">
            <Button 
              onClick={() => scrollToSection("subsidiaries")}
              size="lg" 
              className="relative bg-gradient-to-r from-jazmin-gold to-jazmin-gold/80 hover:from-jazmin-gold/90 hover:to-jazmin-gold text-jazmin-dark font-bold px-10 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-gold group overflow-hidden"
            >
              <span className="relative z-10">Explore Our Companies</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline" 
              size="lg" 
              className="relative border-2 border-jazmin-gold text-jazmin-gold hover:bg-jazmin-gold hover:text-jazmin-dark font-bold px-10 py-4 text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/5 hover:shadow-gold group"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-jazmin-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-20"></div>
            </Button>
          </div>

          {/* Premium Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-12 border-2 border-jazmin-gold/70 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-1 h-4 bg-gradient-to-b from-jazmin-gold to-transparent rounded-full mt-2 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-jazmin-gold/20 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;