import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Governance from "@/components/Governance";

const GovernancePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Governance />
      </div>
      <Footer />
    </div>
  );
};

export default GovernancePage;