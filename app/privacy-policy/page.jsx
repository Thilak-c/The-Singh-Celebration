// app/privacy-policy/page.js

export const metadata = {
    title: "Privacy Policy | The Singh Celebration Guest House",
    description: "Learn how The Singh Celebration Guest House handles your personal information and privacy.",
  };
  
  export default function PrivacyPolicyPage() {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="mb-4">
            <strong>Effective Date:</strong> January 15, 2025
          </p>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p>
              The Singh Celebration Guest House ("we," "our," "us") values your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard the information you provide to us.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
            <ul className="list-disc ml-5">
              <li><strong>Personal Information:</strong> Name, contact details (email, phone number), address, and ID proof.</li>
              <li><strong>Booking Details:</strong> Date of stay, special requests, and preferences.</li>
              <li><strong>Payment Information:</strong> Credit card or bank details for reservations or purchases.</li>
              <li><strong>Device Information:</strong> IP address, browser type, and usage patterns when visiting our website.</li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
            <p>We use your information for:</p>
            <ul className="list-disc ml-5">
              <li>Processing bookings and payments.</li>
              <li>Personalizing your experience during your stay.</li>
              <li>Communicating important updates, confirmations, and promotional offers.</li>
              <li>Ensuring the security of our premises.</li>
              <li>Complying with legal and regulatory requirements.</li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">4. Sharing Your Information</h2>
            <p>
              We do not sell or rent your personal information. However, we may share your information with:
            </p>
            <ul className="list-disc ml-5">
              <li><strong>Service Providers:</strong> Third-party vendors who assist in payment processing, IT support, and marketing.</li>
              <li><strong>Law Enforcement or Legal Authorities:</strong> When required by law or to protect our rights and safety.</li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">5. Security of Your Information</h2>
            <p>
              We implement industry-standard measures to secure your personal information. Despite these measures, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc ml-5">
              <li>Access the personal information we hold about you.</li>
              <li>Request corrections to inaccurate or incomplete data.</li>
              <li>Opt out of marketing communications.</li>
              <li>Request deletion of your personal data, subject to legal obligations.</li>
            </ul>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">7. Cookies and Tracking</h2>
            <p>
              Our website uses cookies to improve functionality and user experience. By using our website, you agree to our use of cookies. You can manage your cookie preferences in your browser settings.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">8. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites. We are not responsible for the privacy practices of these third-party sites.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">9. Updates to This Policy</h2>
            <p>
              We may update this policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
          </section>
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
            <p>
              If you have any questions or concerns about this privacy policy, please contact us at:
            </p>
            <address className="mt-4">
              <p><strong>The Singh Celebration Guest House</strong></p>
              <p>[Address Placeholder]</p>
              <p>Email: [Email Placeholder]</p>
              <p>Phone: [Phone Placeholder]</p>
            </address>
          </section>
        </div>
      </div>
    );
  }
  