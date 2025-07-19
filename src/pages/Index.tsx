import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Subsidiaries from "@/components/Subsidiaries";
import Governance from "@/components/Governance";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Subsidiaries />
      <Governance />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
