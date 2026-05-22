'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function TermsAndConditions() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using the Prime Nest Interiors website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. Prime Nest Interiors reserves the right to make changes to these Terms and Conditions at any time without notice. Your continued use of the website following the posting of revised Terms and Conditions means that you accept and agree to the changes.`,
    },
    {
      title: '2. Use License',
      content: `Permission is granted to temporarily download one copy of the materials (information or software) on Prime Nest Interiors website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
      
• Modifying or copying the materials
• Using the materials for any commercial purpose or for any public display
• Attempting to decompile or reverse engineer any software contained on the website
• Removing any copyright or other proprietary notations from the materials
• Transferring the materials to another person or "mirroring" the materials on any other server
• Violating any applicable laws or regulations related to access to the website`,
    },
    {
      title: '3. Disclaimer',
      content: `The materials on Prime Nest Interiors website are provided on an 'as is' basis. Prime Nest Interiors makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Prime Nest Interiors does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.`,
    },
    {
      title: '4. Limitations',
      content: `In no event shall Prime Nest Interiors or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Prime Nest Interiors website, even if Prime Nest Interiors or an authorized representative has been notified orally or in writing of the possibility of such damage.`,
    },
    {
      title: '5. Accuracy of Materials',
      content: `The materials appearing on Prime Nest Interiors website could include technical, typographical, or photographic errors. Prime Nest Interiors does not warrant that any of the materials on the website are accurate, complete, or current. Prime Nest Interiors may make changes to the materials contained on the website at any time without notice. Prime Nest Interiors does not, however, make any commitment to update the materials.`,
    },
    {
      title: '6. Links',
      content: `Prime Nest Interiors has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Prime Nest Interiors of the site. Use of any such linked website is at the user's own risk. If you believe that your work has been copied in a way that constitutes copyright infringement, please contact Prime Nest Interiors immediately.`,
    },
    {
      title: '7. Modifications',
      content: `Prime Nest Interiors may revise these Terms and Conditions for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms and Conditions. The materials appearing on Prime Nest Interiors website could include technical, typographical, or photographic errors. Prime Nest Interiors does not warrant that any of the materials on the website are accurate, complete, or current.`,
    },
    {
      title: '8. Governing Law',
      content: `These Terms and Conditions and any separate agreements we provide to render services to you are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts located in Hyderabad, Telangana.`,
    },
    {
      title: '9. Service Terms',
      content: `Prime Nest Interiors provides interior design and consultation services. All quotes provided are estimates and may be subject to change based on final project specifications. Clients are responsible for providing accurate measurements and access to the project site. Prime Nest Interiors reserves the right to decline any project that does not meet our quality standards or ethical guidelines.`,
    },
    {
      title: '10. Payment Terms',
      content: `Payment terms will be agreed upon before commencement of any project. A deposit may be required to secure project dates. All invoices are due within the agreed timeframe. Prime Nest Interiors reserves the right to suspend services if payment is not received as agreed. Late payments may incur additional charges as per the agreed contract terms.`,
    },
    {
      title: '11. Intellectual Property Rights',
      content: `All content on the Prime Nest Interiors website, including but not limited to text, graphics, logos, images, and software, is the property of Prime Nest Interiors or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or transmit any content without prior written permission from Prime Nest Interiors.`,
    },
    {
      title: '12. User Conduct',
      content: `You agree not to use the website for any purpose that is unlawful or prohibited by these terms and conditions. You agree not to access or search the website by any means other than Prime Nest Interiors publicly supported interfaces. You agree not to engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website.`,
    },
    {
      title: '13. Contact Information',
      content: `If you have any questions about these Terms and Conditions, please contact us at:

Prime Nest Interiors
Hyderabad, Telangana, India
Phone: +91 9542663490
Email: info@primenestinteriors.com

For any concerns or disputes, please contact us through the above channels before pursuing any legal action.`,
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-gray-300 text-lg">
              Please read these terms carefully before using our services
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
            <div className="mb-8 p-6 bg-amber-50 border-l-4 border-amber-400 rounded">
              <p className="text-gray-700 m-0">
                <strong>Important:</strong> These Terms and Conditions constitute a legal agreement between you and Prime Nest Interiors. By accessing and using our website and services, you acknowledge that you have read, understood, and agree to be bound by all the terms and conditions outlined below.
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
                <h2 className="text-2xl font-bold text-slate-900 mb-4 text-amber-600">
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
              <h2 className="text-2xl font-bold text-slate-900 mb-4 text-amber-600">
                Questions or Concerns?
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms and Conditions or our services, please don't hesitate to contact us. We're here to help and ensure you have the best experience possible.
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
      <section className="bg-gradient-to-r from-amber-400 to-amber-600 py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Space?</h3>
          <p className="text-amber-50 mb-6">
            Get a free consultation from our expert designers today
          </p>
          <Link href="/">
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
