import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import LoadingSpinner from "@/components/LoadingSpinner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // In a real application, you would send this to your backend
      // For demo purposes, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate potential server error (10% chance)
      if (Math.random() < 0.1) {
        throw new Error("Server error");
      }
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly at info@jazminbusinessgroup.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-jazmin-brown mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-warm mx-auto mb-8"></div>
          <p className="text-lg text-jazmin-warm max-w-3xl mx-auto leading-relaxed">
            Ready to explore opportunities with Jazmin Business Group? 
            We'd love to hear from you and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-jazmin-beige shadow-elegant">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-jazmin-brown flex items-center">
                  <Mail className="h-6 w-6 mr-3 text-jazmin-warm" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-jazmin-cream p-2 rounded-full">
                    <Mail className="h-4 w-4 text-jazmin-brown" />
                  </div>
                  <div>
                    <p className="font-medium text-jazmin-brown">Email</p>
                    <a href="mailto:info@jazminbusinessgroup.com" className="text-jazmin-warm hover:text-jazmin-brown transition-colors">
                      info@jazminbusinessgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-jazmin-cream p-2 rounded-full">
                    <MapPin className="h-4 w-4 text-jazmin-brown" />
                  </div>
                  <div>
                    <p className="font-medium text-jazmin-brown">Headquarters</p>
                    <p className="text-jazmin-warm">Richmond, KY, USA</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-jazmin-cream p-2 rounded-full">
                    <Clock className="h-4 w-4 text-jazmin-brown" />
                  </div>
                  <div>
                    <p className="font-medium text-jazmin-brown">Business Hours</p>
                    <p className="text-jazmin-warm">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-jazmin-beige shadow-elegant bg-jazmin-cream/50">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-semibold text-jazmin-brown mb-4">
                  Business Inquiries
                </h3>
                <p className="text-jazmin-warm leading-relaxed mb-4">
                  Whether you're interested in partnerships, investment opportunities, 
                  or learning more about our subsidiaries, we're here to help.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-jazmin-brown" />
                    <span className="text-sm text-jazmin-warm">Partnership Opportunities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-jazmin-brown" />
                    <span className="text-sm text-jazmin-warm">Investment Inquiries</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-jazmin-brown" />
                    <span className="text-sm text-jazmin-warm">Media & Press</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-jazmin-brown" />
                    <span className="text-sm text-jazmin-warm">General Questions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-jazmin-beige shadow-warm bg-background">
            <CardHeader>
              <CardTitle className="font-serif text-xl text-jazmin-brown">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-jazmin-brown mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-jazmin-beige focus:ring-jazmin-brown focus:border-jazmin-brown"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-jazmin-brown mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-jazmin-beige focus:ring-jazmin-brown focus:border-jazmin-brown"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-jazmin-brown mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="border-jazmin-beige focus:ring-jazmin-brown focus:border-jazmin-brown"
                    placeholder="Tell us about your inquiry or how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-jazmin-brown hover:bg-jazmin-warm text-white py-3 font-medium shadow-warm transition-all duration-300 hover:shadow-elegant disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <LoadingSpinner size="sm" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;