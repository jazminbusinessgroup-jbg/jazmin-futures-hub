import { useState, useEffect } from "react";
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
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Load news from localStorage, with fallback to default news
    const savedNews = localStorage.getItem("jbg-news");
    if (savedNews) {
      setNews(JSON.parse(savedNews));
    } else {
      // Default news items
      const defaultNews = [
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
        }
      ];
      setNews(defaultNews);
    }
  }, []);


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