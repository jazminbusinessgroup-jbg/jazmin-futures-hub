import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsAdmin from "@/components/admin/NewsAdmin";

const AdminPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <NewsAdmin />
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;