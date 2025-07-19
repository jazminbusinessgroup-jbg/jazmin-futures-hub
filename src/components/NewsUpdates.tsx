import { useState } from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NewsItem {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

const NewsUpdates = () => {
  const [news] = useState<NewsItem[]>([
    {
      id: "1",
      title: "JBG Announces Strategic Expansion into African Markets",
      content: "Jazmin Business Group LLC is pleased to announce our strategic expansion into African markets through our GPEC Ethiopia subsidiary. This expansion represents our commitment to global education and professional development.",
      author: "Romario Mesfen",
      date: "2024-01-15",
      category: "Business Expansion"
    },
    {
      id: "2",
      title: "Easy Code Pro LLC Launches AI-Powered Website Builder",
      content: "Our technology subsidiary Easy Code Pro LLC has successfully launched its revolutionary AI-powered website and application builder, making digital solutions accessible to businesses and individuals worldwide.",
      author: "Technology Team",
      date: "2024-01-10",
      category: "Technology"
    },
    {
      id: "3",
      title: "Start Easy App LLC Partners with Leading Universities",
      content: "Start Easy App LLC has established partnerships with top universities across three continents to streamline the educational consulting process for international students.",
      author: "Education Team",
      date: "2024-01-08",
      category: "Education"
    },
    {
      id: "4",
      title: "IBLI Global LLC Introduces Advanced Learning Modules",
      content: "IBLI Global LLC has launched new interactive learning modules featuring AI-powered personalized learning paths and real-time progress tracking for enhanced educational outcomes.",
      author: "Development Team",
      date: "2024-01-05",
      category: "Education"
    },
    {
      id: "5",
      title: "Jazi Care LLC Receives Healthcare Innovation Recognition",
      content: "Jazi Care LLC has been recognized for its innovative maternal care tracking app, helping thousands of expecting mothers monitor their pregnancy journey with professional medical guidance.",
      author: "Healthcare Team",
      date: "2024-01-03",
      category: "Healthcare"
    },
    {
      id: "6",
      title: "Baytul Kitab LLC Publishes New Educational Series",
      content: "Baytul Kitab LLC has released a comprehensive educational series focusing on contemporary learning methodologies and cultural preservation through digital publishing.",
      author: "Publishing Team",
      date: "2024-01-01",
      category: "Publishing"
    },
    {
      id: "7",
      title: "Travel Assist Services LLC Expands VFS Network",
      content: "Travel Assist Services LLC has expanded its Visa Facilitation Service (VFS) network to include 15 new countries, making global mobility assistance more accessible worldwide.",
      author: "Travel Team",
      date: "2023-12-28",
      category: "Travel Services"
    },
    {
      id: "8",
      title: "Dana Knowledge Center Launches Online Islamic University",
      content: "Dana Knowledge Center has officially launched its comprehensive online Islamic university platform, offering accredited courses and research opportunities to students globally.",
      author: "Academic Team",
      date: "2023-12-25",
      category: "Education"
    },
    {
      id: "9",
      title: "GPEC Ethiopia Achieves International Certification Standards",
      content: "Global Prep & Exam Center Ethiopia has achieved international certification standards for IELTS, TOEFL, and GRE testing facilities, ensuring world-class examination services.",
      author: "Certification Team",
      date: "2023-12-22",
      category: "Education"
    },
    {
      id: "10",
      title: "Admission 1 2 3 LLC Simplifies Global University Applications",
      content: "Admission 1 2 3 LLC has launched a streamlined platform that simplifies university application processes for students seeking admission to institutions worldwide.",
      author: "Admissions Team",
      date: "2023-12-20",
      category: "Education"
    }
  ]);


  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-jazmin-brown mb-6">
            News & Updates
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto mb-8"></div>
          <p className="text-lg text-jazmin-warm max-w-3xl mx-auto leading-relaxed">
            Stay informed about the latest developments, achievements, and innovations 
            across the Jazmin Business Group portfolio.
          </p>
        </div>


        {/* News Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article) => (
            <Card 
              key={article.id} 
              className="border-jazmin-beige shadow-elegant hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-jazmin-gold bg-jazmin-cream px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <CardTitle className="font-serif text-lg text-jazmin-brown leading-tight">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-jazmin-warm text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.content}
                </p>
                
                <div className="flex items-center justify-between text-xs text-jazmin-warm">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full mt-4 text-jazmin-brown hover:text-jazmin-warm group"
                >
                  Read More
                  <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;