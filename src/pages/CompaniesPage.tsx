import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Subsidiaries from "@/components/Subsidiaries";

const CompaniesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Subsidiaries />
      </div>
      <Footer />
    </div>
  );
};

export default CompaniesPage;