import { Target, User, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-jazmin-brown mb-6">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <Card className="border-jazmin-beige shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-jazmin-cream p-3 rounded-full">
                    <Target className="h-6 w-6 text-jazmin-brown" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-jazmin-brown mb-3">
                      Mission Statement
                    </h3>
                    <p className="text-jazmin-warm leading-relaxed">
                      At JBG, we lead ethical and growth-oriented businesses that empower 
                      individuals and communities globally. Our commitment to integrity and 
                      innovation drives everything we do.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-jazmin-beige shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-jazmin-cream p-3 rounded-full">
                    <User className="h-6 w-6 text-jazmin-brown" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-jazmin-brown mb-3">
                      Founder & CEO
                    </h3>
                    <p className="text-jazmin-warm leading-relaxed">
                      <span className="font-medium text-jazmin-brown">Romario Mesfen</span> leads 
                      our organization with vision and dedication, ensuring that each subsidiary 
                      operates with the highest standards of excellence and ethical conduct.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="bg-gradient-cream rounded-2xl p-8 shadow-warm">
              <div className="text-center space-y-6">
                <div className="bg-jazmin-brown/10 p-4 rounded-full inline-block">
                  <Heart className="h-12 w-12 text-jazmin-brown" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-jazmin-brown">
                  Our Values
                </h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-jazmin-gold rounded-full"></div>
                    <span className="text-jazmin-warm">Integrity & Transparency</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-jazmin-gold rounded-full"></div>
                    <span className="text-jazmin-warm">Innovation & Excellence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-jazmin-gold rounded-full"></div>
                    <span className="text-jazmin-warm">Community Empowerment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-jazmin-gold rounded-full"></div>
                    <span className="text-jazmin-warm">Global Impact</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-jazmin-gold rounded-full"></div>
                    <span className="text-jazmin-warm">Ethical Business Practices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;