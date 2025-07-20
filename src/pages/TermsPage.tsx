import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-jazmin-brown mb-8">
                Terms of Use
              </h1>
              <div className="w-24 h-1 bg-gradient-warm mb-12"></div>
              
              <div className="prose prose-lg max-w-none text-jazmin-warm">
                <p className="text-lg mb-6">
                  Last updated: January 2024
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="mb-4">
                  By accessing and using the website and services of Jazmin Business Group LLC ("JBG", "we", "us", or "our"), you agree to be bound by these Terms of Use. These terms apply to all visitors, users, and others who access or use our services through our subsidiaries and affiliated companies.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  2. Company Information
                </h2>
                <p className="mb-4">
                  Jazmin Business Group LLC is a Limited Liability Company organized under the laws of Kentucky, USA. Our headquarters are located in Louisville, KY. We operate a diverse portfolio of subsidiaries including Start Easy App LLC, IBLI Global LLC, Easy Code Pro LLC, Jazi Care LLC, Baytul Kitab LLC, Travel Assist Services LLC, Dana Knowledge Center, GPEC Ethiopia, and Admission 1 2 3 LLC.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  3. Services Provided
                </h2>
                <p className="mb-4">
                  JBG provides management and oversight for our portfolio companies operating in education, technology, healthcare, travel services, and publishing sectors. Each subsidiary operates under its own terms of service for specific offerings including educational consulting, software development, maternal care apps, travel documentation assistance, and educational content publishing.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  4. User Responsibilities
                </h2>
                <p className="mb-4">
                  Users must provide accurate information when using our services, comply with all applicable laws and regulations, respect intellectual property rights, and use our services in good faith. You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  5. Intellectual Property
                </h2>
                <p className="mb-4">
                  All content, materials, and intellectual property on this website and our services are owned by JBG or our subsidiaries and are protected by copyright, trademark, and other intellectual property laws. Users may not reproduce, distribute, or create derivative works without express written permission.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  6. Privacy and Data Protection
                </h2>
                <p className="mb-4">
                  We collect and process personal data in accordance with our Privacy Policy and applicable data protection laws. By using our services, you consent to our data collection and processing practices as outlined in our Privacy Policy.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  7. Limitation of Liability
                </h2>
                <p className="mb-4">
                  To the fullest extent permitted by law, JBG and its subsidiaries shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business interruption. Our total liability shall not exceed the amount paid by you for the specific service in question.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  8. Governing Law and Jurisdiction
                </h2>
                <p className="mb-4">
                  These Terms of Use are governed by the laws of the Commonwealth of Kentucky, USA, without regard to conflict of law principles. Any disputes arising from these terms shall be resolved in the courts of Jefferson County, Kentucky.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  9. Changes to Terms
                </h2>
                <p className="mb-4">
                  JBG reserves the right to modify these terms at any time. Users will be notified of significant changes, and continued use of our services constitutes acceptance of the modified terms.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  10. Contact Information
                </h2>
                <p className="mb-4">
                  For questions about these Terms of Use, please contact us at:<br />
                  Email: info@jazminbusinessgroup.com<br />
                  Address: Louisville, KY, USA<br />
                  Effective Date: January 1, 2024
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

export default TermsPage;