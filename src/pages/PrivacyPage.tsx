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
                <div className="mb-6">
                  <p className="mb-4">
                    <strong>Personal Information:</strong> We collect personal information you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
                    <li>Name, email address, phone number when you contact us or use our services</li>
                    <li>Professional information for educational consulting services</li>
                    <li>Payment information for transactions (processed securely through third-party providers)</li>
                    <li>Communication preferences and feedback</li>
                  </ul>
                  <p className="mb-4">
                    <strong>Automatically Collected Information:</strong> We collect certain information automatically when you visit our website, including IP address, browser type, device information, and usage patterns.
                  </p>
                </div>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  2. How We Use Your Information
                </h2>
                <div className="mb-6">
                  <p className="mb-4">We use collected information to:</p>
                  <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
                    <li>Provide and maintain our services across all JBG subsidiaries</li>
                    <li>Process transactions and communicate about services</li>
                    <li>Improve our websites and services based on user feedback</li>
                    <li>Send important updates and marketing communications (with consent)</li>
                    <li>Comply with legal obligations and protect our rights</li>
                    <li>Provide customer support and respond to inquiries</li>
                  </ul>
                </div>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  3. Information Sharing and Disclosure
                </h2>
                <div className="mb-6">
                  <p className="mb-4">JBG does not sell or rent personal information to third parties. We may share information in limited circumstances:</p>
                  <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
                    <li>Between JBG subsidiaries to provide integrated services</li>
                    <li>With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
                    <li>When required by law or to protect our rights and safety</li>
                    <li>In connection with business transfers (with user notification)</li>
                    <li>With your explicit consent for specific purposes</li>
                  </ul>
                </div>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  4. Data Security and Retention
                </h2>
                <p className="mb-4">
                  We implement industry-standard security measures including encryption, secure data transmission, regular security audits, and restricted access controls. We retain personal information only as long as necessary for the purposes outlined in this policy or as required by law. Users may request deletion of their personal data subject to legal and business requirements.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  5. Your Rights and Choices
                </h2>
                <div className="mb-6">
                  <p className="mb-4">You have the right to:</p>
                  <ul className="list-disc list-inside ml-4 mb-4 space-y-2">
                    <li>Access, update, or delete your personal information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request data portability where applicable</li>
                    <li>Lodge complaints with relevant data protection authorities</li>
                    <li>Withdraw consent where processing is based on consent</li>
                  </ul>
                </div>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  6. Cookies and Tracking Technologies
                </h2>
                <p className="mb-4">
                  We use cookies and similar technologies to enhance user experience, analyze website performance, and provide personalized content. You can control cookie settings through your browser preferences. Essential cookies remain necessary for basic website functionality.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  7. International Data Transfers
                </h2>
                <p className="mb-4">
                  As JBG operates globally through subsidiaries in multiple countries, personal data may be transferred internationally. We ensure appropriate safeguards are in place for such transfers in compliance with applicable data protection laws.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  8. Updates to This Policy
                </h2>
                <p className="mb-4">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify users of significant changes through email or website notice.
                </p>
                
                <h2 className="font-serif text-2xl font-semibold text-jazmin-brown mt-8 mb-4">
                  9. Contact Information
                </h2>
                <p className="mb-4">
                  For privacy-related questions or to exercise your rights, contact us at:<br />
                  Email: privacy@jazminbusinessgroup.com<br />
                  Address: Jazmin Business Group LLC, Louisville, KY, USA<br />
                  Effective Date: January 1, 2024<br />
                  Last Updated: January 1, 2024
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