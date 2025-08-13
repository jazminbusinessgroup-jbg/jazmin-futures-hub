import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Save, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

interface NewsAdminProps {
  onNewsUpdate?: (news: NewsItem[]) => void;
}

const NewsAdmin = ({ onNewsUpdate }: NewsAdminProps) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    category: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    // Load news from localStorage
    const savedNews = localStorage.getItem("jbg-news");
    if (savedNews) {
      const parsedNews = JSON.parse(savedNews);
      setNews(parsedNews);
    }
  }, []);

  const saveNews = (updatedNews: NewsItem[]) => {
    localStorage.setItem("jbg-news", JSON.stringify(updatedNews));
    setNews(updatedNews);
    onNewsUpdate?.(updatedNews);
  };

  const handleAdd = () => {
    if (!formData.title || !formData.content || !formData.author || !formData.category) {
      toast({
        title: "Please fill all fields",
        variant: "destructive"
      });
      return;
    }

    const newArticle: NewsItem = {
      id: Date.now().toString(),
      ...formData,
      date: new Date().toISOString().split('T')[0]
    };

    const updatedNews = [newArticle, ...news];
    saveNews(updatedNews);
    setFormData({ title: "", content: "", author: "", category: "" });
    setIsAdding(false);
    
    toast({
      title: "News article added successfully!",
    });
  };

  const handleEdit = (article: NewsItem) => {
    setEditingId(article.id);
    setFormData({
      title: article.title,
      content: article.content,
      author: article.author,
      category: article.category
    });
  };

  const handleUpdate = () => {
    if (!formData.title || !formData.content || !formData.author || !formData.category) {
      toast({
        title: "Please fill all fields",
        variant: "destructive"
      });
      return;
    }

    const updatedNews = news.map(article => 
      article.id === editingId 
        ? { ...article, ...formData }
        : article
    );
    
    saveNews(updatedNews);
    setEditingId(null);
    setFormData({ title: "", content: "", author: "", category: "" });
    
    toast({
      title: "News article updated successfully!",
    });
  };

  const handleDelete = (id: string) => {
    const updatedNews = news.filter(article => article.id !== id);
    saveNews(updatedNews);
    
    toast({
      title: "News article deleted successfully!",
    });
  };

  const resetForm = () => {
    setFormData({ title: "", content: "", author: "", category: "" });
    setIsAdding(false);
    setEditingId(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-jazmin-brown">News Administration</h1>
        {!isAdding && !editingId && (
          <Button 
            onClick={() => setIsAdding(true)}
            className="bg-jazmin-brown hover:bg-jazmin-warm"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add News
          </Button>
        )}
      </div>

      {/* Add/Edit Form */}
      {(isAdding || editingId) && (
        <Card className="mb-6 border-jazmin-beige">
          <CardHeader>
            <CardTitle className="text-jazmin-brown">
              {isAdding ? "Add New Article" : "Edit Article"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Article title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <Input
              placeholder="Category (e.g., Technology, Business, Education)"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            />
            <Input
              placeholder="Author name"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
            />
            <Textarea
              placeholder="Article content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={5}
            />
            <div className="flex gap-2">
              <Button 
                onClick={isAdding ? handleAdd : handleUpdate}
                className="bg-jazmin-brown hover:bg-jazmin-warm"
              >
                <Save className="h-4 w-4 mr-2" />
                {isAdding ? "Add Article" : "Update Article"}
              </Button>
              <Button 
                variant="outline" 
                onClick={resetForm}
                className="border-jazmin-beige"
              >
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* News List */}
      <div className="space-y-4">
        {news.length === 0 ? (
          <Card className="border-jazmin-beige">
            <CardContent className="p-6 text-center text-jazmin-warm">
              No news articles yet. Click "Add News" to create your first article.
            </CardContent>
          </Card>
        ) : (
          news.map((article) => (
            <Card key={article.id} className="border-jazmin-beige">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-jazmin-brown">{article.title}</CardTitle>
                    <p className="text-sm text-jazmin-warm mt-1">
                      {article.category} • {article.author} • {new Date(article.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleEdit(article)}
                      className="border-jazmin-beige"
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleDelete(article.id)}
                      className="border-jazmin-beige text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-jazmin-warm">{article.content}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default NewsAdmin;