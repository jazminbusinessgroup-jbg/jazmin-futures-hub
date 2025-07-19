import { useState } from "react";
import { Calendar, User, ArrowRight, Plus, Edit, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface NewsItem {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
}

const NewsUpdates = () => {
  const [news, setNews] = useState<NewsItem[]>([
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
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    category: ""
  });
  const { toast } = useToast();

  const categories = ["Business Expansion", "Technology", "Healthcare", "Education", "Travel", "Publishing"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingNews) {
      // Update existing news
      setNews(news.map(item => 
        item.id === editingNews.id 
          ? { ...item, ...formData }
          : item
      ));
      toast({
        title: "News Updated",
        description: "The news article has been successfully updated.",
      });
    } else {
      // Add new news
      const newNews: NewsItem = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toISOString().split('T')[0]
      };
      setNews([newNews, ...news]);
      toast({
        title: "News Added",
        description: "New news article has been successfully added.",
      });
    }

    setFormData({ title: "", content: "", author: "", category: "" });
    setEditingNews(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (newsItem: NewsItem) => {
    setEditingNews(newsItem);
    setFormData({
      title: newsItem.title,
      content: newsItem.content,
      author: newsItem.author,
      category: newsItem.category
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setNews(news.filter(item => item.id !== id));
    toast({
      title: "News Deleted",
      description: "The news article has been successfully deleted.",
    });
  };

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

        {/* Admin Controls */}
        <div className="max-w-4xl mx-auto mb-8">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                onClick={() => {
                  setEditingNews(null);
                  setFormData({ title: "", content: "", author: "", category: "" });
                }}
                className="bg-jazmin-brown hover:bg-jazmin-warm text-white shadow-warm"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add News Article
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="font-serif text-jazmin-brown">
                  {editingNews ? "Edit News Article" : "Add New Article"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-jazmin-brown mb-2">
                    Title
                  </label>
                  <Input
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="border-jazmin-beige focus:ring-jazmin-brown focus:border-jazmin-brown"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-jazmin-brown mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-jazmin-beige rounded-md px-3 py-2 focus:ring-jazmin-brown focus:border-jazmin-brown"
                  >
                    <option value="">Select a category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-jazmin-brown mb-2">
                    Author
                  </label>
                  <Input
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    required
                    className="border-jazmin-beige focus:ring-jazmin-brown focus:border-jazmin-brown"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-jazmin-brown mb-2">
                    Content
                  </label>
                  <Textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="border-jazmin-beige focus:ring-jazmin-brown focus:border-jazmin-brown"
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    type="submit"
                    className="bg-jazmin-brown hover:bg-jazmin-warm text-white"
                  >
                    {editingNews ? "Update Article" : "Add Article"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
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
                  <div className="flex gap-1">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleEdit(article)}
                      className="h-8 w-8 p-0 text-jazmin-warm hover:text-jazmin-brown"
                    >
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDelete(article.id)}
                      className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
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