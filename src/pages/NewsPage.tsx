import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsUpdates from "@/components/NewsUpdates";

const NewsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <NewsUpdates />
      </div>
      <Footer />
    </div>
  );
};

export default NewsPage;