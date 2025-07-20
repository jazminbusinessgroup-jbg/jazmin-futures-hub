import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Subsidiaries from "@/components/Subsidiaries";
import Governance from "@/components/Governance";
import NewsUpdates from "@/components/NewsUpdates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Subsidiaries />
      <Governance />
      <NewsUpdates />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
