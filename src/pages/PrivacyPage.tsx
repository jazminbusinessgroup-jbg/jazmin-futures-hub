import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-jazmin-brown mb-8">
                Privacy Policy
              </h1>
              <div className="w-24 h-1 bg-gradient-warm mb-12"></div>
              
              <div className="prose prose-lg max-w-none text-jazmin-warm">
                <p className="text-lg mb-6">
                  Last updated: January 2024
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  1. Information We Collect
                </h2>
                <p className="mb-4">
                  We collect information you provide directly to us, such as when you contact us through our website or subscribe to our updates.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="mb-4">
                  We use the information we collect to provide, maintain, and improve our services, respond to your inquiries, and communicate with you about our business.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  3. Information Sharing
                </h2>
                <p className="mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  4. Data Security
                </h2>
                <p className="mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  5. Contact Us
                </h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us through our Contact page.
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

export default PrivacyPage;