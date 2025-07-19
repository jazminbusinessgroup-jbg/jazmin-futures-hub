import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CodeOfConductPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-jazmin-brown mb-8">
                Code of Conduct
              </h1>
              <div className="w-24 h-1 bg-gradient-warm mb-12"></div>
              
              <div className="prose prose-lg max-w-none text-jazmin-warm">
                <p className="text-lg mb-6">
                  Last updated: January 2024
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  1. Our Values
                </h2>
                <p className="mb-4">
                  Jazmin Business Group LLC is committed to maintaining the highest standards of integrity, respect, and professionalism in all our business dealings.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  2. Ethical Business Practices
                </h2>
                <p className="mb-4">
                  We conduct our business with honesty, transparency, and accountability. We comply with all applicable laws and regulations in our operations.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  3. Respect and Inclusion
                </h2>
                <p className="mb-4">
                  We foster an environment of mutual respect and inclusion, where all individuals are treated with dignity regardless of their background, beliefs, or characteristics.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  4. Confidentiality
                </h2>
                <p className="mb-4">
                  We protect confidential information and respect the privacy of our clients, partners, and stakeholders.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  5. Reporting Violations
                </h2>
                <p className="mb-4">
                  If you become aware of any violation of this Code of Conduct, please report it through our Contact page or appropriate channels.
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

export default CodeOfConductPage;