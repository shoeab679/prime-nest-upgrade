'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function PrivacyPolicy() {
  const sections = [
    {
      title: '1. Introduction',
      content: `Prime Nest Interiors ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with our policies and practices, please do not use our website or services.`,
    },
    {
      title: '2. Information We Collect',
      content: `We collect information in various ways, including:

Information You Provide Directly:
• Name, email address, and phone number when you fill out our consultation form
• Project details, budget information, and property specifications
• Messages and inquiries sent through our contact forms
• Payment information for services (processed securely through third-party providers)
• Any other information you voluntarily provide to us

Information Collected Automatically:
• Browser type and version
• Operating system
• Referring URL and pages visited
• IP address and device information
• Cookies and similar tracking technologies
• Usage patterns and interaction data`,
    },
    {
      title: '3. How We Use Your Information',
      content: `We use the information we collect for various purposes:

• Providing and improving our interior design services
• Processing consultation requests and project inquiries
• Sending you project updates, quotes, and service-related communications
• Responding to your questions and addressing your concerns
• Analyzing website usage to improve user experience
• Complying with legal obligations and regulations
• Preventing fraudulent activities and ensuring website security
• Marketing and promotional purposes (only with your consent)
• Creating and maintaining your client profile
• Sending WhatsApp messages for project updates and communications`,
    },
    {
      title: '4. Information Sharing and Disclosure',
      content: `We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:

With Service Providers: We may share information with third-party service providers who assist us in operating our website and conducting our business, including email service providers (EmailJS), payment processors, and hosting providers.

Legal Requirements: We may disclose your information when required by law or when we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others.

Business Transfers: If Prime Nest Interiors is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.

With Your Consent: We may share your information with third parties when you explicitly consent to such sharing.`,
    },
    {
      title: '5. Data Security',
      content: `We implement comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:

• Secure socket layer (SSL) encryption for data transmission
• Secure password protection for user accounts
• Regular security audits and updates
• Limited access to personal information by authorized personnel only
• Secure storage of sensitive data

However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.`,
    },
    {
      title: '6. Cookies and Tracking Technologies',
      content: `We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and understand how you use our website.

Types of Cookies We Use:
• Essential cookies: Required for website functionality
• Performance cookies: Help us understand how you use our website
• Functional cookies: Remember your preferences
• Marketing cookies: Used to deliver targeted advertisements

You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.`,
    },
    {
      title: '7. Third-Party Links',
      content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party websites before providing your personal information. This Privacy Policy applies only to information collected through our website and services.`,
    },
    {
      title: '8. Your Privacy Rights',
      content: `Depending on your location, you may have certain rights regarding your personal information:

Right to Access: You have the right to request access to the personal information we hold about you.

Right to Correction: You can request that we correct any inaccurate or incomplete information.

Right to Deletion: You may request the deletion of your personal information, subject to certain legal exceptions.

Right to Opt-Out: You can opt out of receiving marketing communications from us at any time.

Right to Data Portability: You may request a copy of your information in a portable format.

To exercise any of these rights, please contact us using the information provided in the "Contact Us" section.`,
    },
    {
      title: '9. Children\'s Privacy',
      content: `Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information and terminate the child's account. If you believe we have collected information from a child under 18, please contact us immediately.`,
    },
    {
      title: '10. Data Retention',
      content: `We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. The retention period may vary depending on the type of information and the purpose for which we use it.

For lead capture information: Retained for 2 years or until you request deletion
For project files and documentation: Retained for 5 years for legal and warranty purposes
For email communications: Retained for 1 year unless required for legal purposes

You can request deletion of your information at any time, subject to legal requirements.`,
    },
    {
      title: '11. EmailJS Integration',
      content: `We use EmailJS to send consultation requests and project inquiries to our email inbox. EmailJS is a third-party email service provider. When you submit a form through our website, your information is transmitted to EmailJS for delivery. EmailJS maintains its own privacy policy, and we encourage you to review it. Your information is used solely for delivering your inquiry to our team.`,
    },
    {
      title: '12. WhatsApp Communication',
      content: `We use WhatsApp to communicate with clients regarding project updates, quotes, and service-related information. By providing your phone number, you consent to receive WhatsApp messages from us. You can opt out of WhatsApp communications at any time by notifying us. Standard WhatsApp messaging rates may apply depending on your service provider.`,
    },
    {
      title: '13. International Data Transfers',
      content: `Our website and services are based in India. If you access our website from outside India, please be aware that your information may be transferred to, stored in, and processed in India. By using our website, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection rules.`,
    },
    {
      title: '14. Policy Updates',
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, and other factors. We will notify you of any material changes by updating the "Last Updated" date at the top of this policy. Your continued use of our website following the posting of revised Privacy Policy means you accept and agree to the changes.`,
    },
    {
      title: '15. Contact Us',
      content: `If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:

Prime Nest Interiors
Hyderabad, Telangana, India
Phone: +91 9542663490
Email: info@primenestinteriors.com

Data Protection Officer: info@primenestinteriors.com

We will respond to your inquiry within 30 days of receipt. If you are not satisfied with our response, you may have the right to lodge a complaint with the relevant data protection authority in your jurisdiction.`,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <Link href="/">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </motion.button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-300 text-lg">
              How we collect, use, and protect your personal information
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-400 rounded">
              <p className="text-gray-700 m-0">
                <strong>Your Privacy Matters:</strong> Prime Nest Interiors is committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our privacy practices, please contact us immediately.
              </p>
            </div>

            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-4 text-blue-600">
                  {section.title}
                </h2>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 pt-8 border-t border-gray-200"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4 text-blue-600">
                Your Consent
              </h2>
              <p className="text-gray-700 mb-4">
                By using our website and services, you consent to our Privacy Policy. We encourage you to review this policy regularly to stay informed about how we protect your information. If you have any concerns or questions about our privacy practices, please don't hesitate to reach out.
              </p>
              <div className="bg-slate-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Prime Nest Interiors</strong>
                </p>
                <p className="text-gray-600 mb-1">📍 Hyderabad, Telangana, India</p>
                <p className="text-gray-600 mb-1">📞 +91 9542663490</p>
                <p className="text-gray-600">✉️ info@primenestinteriors.com</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Have Questions About Your Data?</h3>
          <p className="text-blue-50 mb-6">
            Contact us anytime to discuss your privacy concerns or data requests
          </p>
          <Link href="/">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
