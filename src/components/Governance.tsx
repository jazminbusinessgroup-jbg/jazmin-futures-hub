import { Shield, Eye, Users, Lock, AlertTriangle, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Governance = () => {
  const ethicsPoints = [
    {
      title: "Integrity & Honesty",
      description: "We conduct all business with the highest standards of honesty and transparency.",
      icon: Shield
    },
    {
      title: "Non-Discrimination & Respect",
      description: "We foster an inclusive environment that respects diversity and promotes equality.",
      icon: Users
    },
    {
      title: "Conflict of Interest Disclosure",
      description: "We maintain transparency in all potential conflicts and ensure ethical decision-making.",
      icon: Eye
    },
    {
      title: "Confidentiality & Data Privacy",
      description: "We protect sensitive information and respect the privacy of all stakeholders.",
      icon: Lock
    },
    {
      title: "Whistleblower Protection",
      description: "We provide safe channels for reporting concerns and protect those who speak up.",
      icon: AlertTriangle
    },
    {
      title: "Global Compliance",
      description: "We adhere to all applicable laws and international standards in our operations.",
      icon: Scale
    }
  ];

  return (
    <section id="governance" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-jazmin-brown mb-6">
            Governance & Ethics
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto mb-8"></div>
          <p className="text-lg text-jazmin-warm max-w-3xl mx-auto leading-relaxed">
            Our commitment to ethical business practices and robust governance ensures 
            trust, transparency, and accountability across all our operations.
          </p>
        </div>

        <div className="mb-12">
          <Card className="border-jazmin-beige shadow-warm bg-gradient-cream">
            <CardHeader className="text-center">
              <CardTitle className="font-serif text-2xl text-jazmin-brown">
                Internal Governance Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-jazmin-warm leading-relaxed mb-6">
                Our comprehensive governance framework ensures responsible management, 
                strategic oversight, and sustainable growth across all subsidiaries.
              </p>
              <div className="bg-jazmin-brown/10 rounded-lg p-4">
                <p className="text-jazmin-brown font-medium">
                  "Excellence in governance is not just about compliance—it's about 
                  building lasting trust with our stakeholders and communities."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h3 className="font-serif text-2xl font-semibold text-jazmin-brown mb-8 text-center">
            Code of Conduct & Ethics
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ethicsPoints.map((point, index) => (
              <Card 
                key={index} 
                className="border-jazmin-beige shadow-elegant hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-gold p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <point.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-serif text-lg text-jazmin-brown leading-tight">
                    {point.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-jazmin-warm text-center leading-relaxed text-sm">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Card className="border-jazmin-beige shadow-elegant bg-jazmin-cream/50">
            <CardContent className="p-8">
              <h4 className="font-serif text-xl font-semibold text-jazmin-brown mb-4">
                Commitment to Excellence
              </h4>
              <p className="text-jazmin-warm leading-relaxed mb-4">
                We maintain the highest standards of corporate governance and ethical conduct, 
                ensuring compliance with global laws and regulations while fostering a culture 
                of integrity and accountability.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-jazmin-brown text-white px-3 py-1 rounded-full">
                  ISO Compliant
                </span>
                <span className="bg-jazmin-warm text-white px-3 py-1 rounded-full">
                  GDPR Ready
                </span>
                <span className="bg-jazmin-gold text-white px-3 py-1 rounded-full">
                  SOX Compliant
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Governance;