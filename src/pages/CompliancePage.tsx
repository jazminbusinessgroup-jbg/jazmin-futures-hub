import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CompliancePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-jazmin-brown mb-8">
                Compliance
              </h1>
              <div className="w-24 h-1 bg-gradient-warm mb-12"></div>
              
              <div className="prose prose-lg max-w-none text-jazmin-warm">
                <p className="text-lg mb-6">
                  Last updated: January 2024
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  1. Regulatory Compliance
                </h2>
                <p className="mb-4">
                  Jazmin Business Group LLC and all its subsidiaries are committed to full compliance with all applicable laws, regulations, and industry standards in each jurisdiction where we operate.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  2. Corporate Governance
                </h2>
                <p className="mb-4">
                  We maintain robust corporate governance practices to ensure transparency, accountability, and ethical decision-making at all levels of our organization.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  3. Data Protection
                </h2>
                <p className="mb-4">
                  We comply with applicable data protection laws and regulations, including GDPR, CCPA, and other regional privacy laws, to protect personal information.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  4. Anti-Corruption
                </h2>
                <p className="mb-4">
                  We have zero tolerance for corruption, bribery, and unethical business practices. All our operations are conducted with the highest standards of integrity.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  5. Regular Audits
                </h2>
                <p className="mb-4">
                  We conduct regular internal and external audits to ensure ongoing compliance with all applicable requirements and continuous improvement of our practices.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  6. Contact for Compliance Matters
                </h2>
                <p className="mb-4">
                  For any compliance-related questions or concerns, please contact us through our Contact page.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CompliancePage;