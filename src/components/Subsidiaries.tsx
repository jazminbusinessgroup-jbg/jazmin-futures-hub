import { GraduationCap, Smartphone, Code, Plane, Heart, BookOpen, FileText, Users, Globe, School } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Subsidiaries = () => {
  const subsidiaries = [
    {
      name: "Start Easy App LLC",
      description: "Educational consulting made simple for global learners.",
      icon: GraduationCap,
      category: "Education"
    },
    {
      name: "IBLI Global LLC",
      description: "A digital platform for online education and skill-building.",
      icon: Globe,
      category: "Education"
    },
    {
      name: "Easy Code Pro LLC",
      description: "AI-powered website and application builder for businesses and individuals.",
      icon: Code,
      category: "Technology"
    },
    {
      name: "Jasmin Travel Solution LLC",
      description: "End-to-end travel booking and management services.",
      icon: Plane,
      category: "Travel"
    },
    {
      name: "Jazi Care LLC",
      description: "Maternal care and pregnancy tracking app designed for expecting mothers.",
      icon: Heart,
      category: "Healthcare"
    },
    {
      name: "Baytul Kitab LLC",
      description: "Publishing house for educational and cultural content.",
      icon: BookOpen,
      category: "Publishing"
    },
    {
      name: "Travel Assist Services LLC",
      description: "Expert support for visa applications, travel documentation, and global mobility assistance through our Visa Facilitation Service (VFS).",
      icon: FileText,
      category: "Travel Services"
    },
    {
      name: "Dana Knowledge Center",
      description: "An Online Islamic University offering accessible Islamic education, research, and knowledge dissemination.",
      icon: School,
      category: "Education"
    },
    {
      name: "GPEC Ethiopia",
      description: "Global Professional Education Center providing comprehensive training and examination services for IELTS, Duolingo, TOEFL, and GRE with state-of-the-art facilities.",
      icon: Users,
      category: "Education"
    },
    {
      name: "Admission 1 2 3 LLC",
      description: "Simplified student admissions consulting for universities worldwide.",
      icon: Smartphone,
      category: "Education"
    }
  ];

  const categories = [...new Set(subsidiaries.map(sub => sub.category))];

  return (
    <section id="subsidiaries" className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-jazmin-brown mb-6">
            Our Subsidiaries
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto mb-8"></div>
          <p className="text-lg text-jazmin-warm max-w-3xl mx-auto leading-relaxed">
            Discover our diverse portfolio of companies, each dedicated to excellence 
            in their respective fields and united by our commitment to innovation and integrity.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h3 className="font-serif text-2xl font-semibold text-jazmin-brown mb-6 text-center">
              {category}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subsidiaries
                .filter(sub => sub.category === category)
                .map((subsidiary, index) => (
                  <Card 
                    key={index} 
                    className="border-jazmin-beige shadow-elegant hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-background"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="bg-gradient-warm p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <subsidiary.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="font-serif text-lg text-jazmin-brown leading-tight">
                        {subsidiary.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-jazmin-warm text-center leading-relaxed">
                        {subsidiary.description}
                      </p>
                    </CardContent>
                  </Card>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Subsidiaries;