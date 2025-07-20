import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Hero = () => {
  const [headlineText, setHeadlineText] = useState("Empowering Ideas.\nBuilding Futures.");
  const [headlinePos, setHeadlinePos] = useState({ x: 50, y: 40 });
  const [isDraggingHeadline, setIsDraggingHeadline] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = e.currentTarget.parentElement?.getBoundingClientRect();
    if (!containerRect) return;

    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });

    setIsDraggingHeadline(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingHeadline) return;
    
    const containerRect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - dragOffset.x - containerRect.left) / containerRect.width) * 100;
    const y = ((e.clientY - dragOffset.y - containerRect.top) / containerRect.height) * 100;

    setHeadlinePos({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  const handleMouseUp = () => {
    setIsDraggingHeadline(false);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen overflow-hidden select-none" 
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url('/lovable-uploads/c55d93a9-c049-41f4-9f36-df7f30a8239a.png')`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-jazmin-brown rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-jazmin-warm rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-jazmin-gold rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Draggable Main Headline */}
      <div
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-move ${isDraggingHeadline ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{
          left: `${headlinePos.x}%`,
          top: `${headlinePos.y}%`,
        }}
        onMouseDown={handleMouseDown}
      >
        <textarea
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white bg-transparent border-2 border-dashed border-transparent hover:border-white/30 focus:border-white/50 focus:outline-none resize-none text-center whitespace-pre-wrap"
          value={headlineText}
          onChange={(e) => setHeadlineText(e.target.value)}
          rows={2}
          style={{ 
            minWidth: '400px',
            lineHeight: '1.2'
          }}
        />
      </div>


      {/* CTAs - Fixed position */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;