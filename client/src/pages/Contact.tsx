import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { trpc } from '@/lib/trpc';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const createInquiry = trpc.inquiries.create.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createInquiry.mutateAsync({
        name: formData.name,
        email: formData.email || undefined,
        phone: formData.phone,
        serviceType: formData.service || undefined,
        message: formData.message || undefined,
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      console.error('Failed to submit inquiry:', err);
      alert('Something went wrong. Please try again or email us directly.');
    }
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', value: 'info@primenestinteriors.com', link: 'mailto:info@primenestinteriors.com' },
    { icon: MapPin, title: 'Location', value: 'Hyderabad, India', link: '#' },
    { icon: Clock, title: 'Hours', value: 'Mon - Sun: 9 AM - 6 PM', link: '#' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative py-24 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/contact-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-dark-accent/80" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <div className="divider-gold mb-6"></div>
            <p className="text-lg text-gray-200 leading-relaxed">
              Have questions about our services? We'd love to hear from you. Contact us today for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="p-6 bg-soft-gray rounded-lg border border-gray-200 text-center hover:shadow-lg transition-all duration-300 group no-hover"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gold rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-dark-accent mb-2">{info.title}</h3>
                  <p className="text-gray-700 group-hover:text-gold transition-colors">{info.value}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Quick Contact */}
      <section className="py-16 md:py-24 bg-soft-gray">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-8">Send us a Message</h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-accent mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your inquiry has been received. We'll contact you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 border-2 border-gold text-gold rounded-lg font-semibold hover:bg-gold hover:text-white transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-dark-accent mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-dark-accent mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark-accent mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white"
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-accent mb-2">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="modular-kitchen">Modular Kitchen</option>
                      <option value="wardrobe">Wardrobe</option>
                      <option value="tv-unit">TV Unit</option>
                      <option value="bedroom">Bedroom Interiors</option>
                      <option value="living-room">Living Room Interiors</option>
                      <option value="full-home">Full Home Interiors</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark-accent mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none bg-white"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={createInquiry.isPending}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gold text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {createInquiry.isPending ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Quick Contact + Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <img
                src="/images/living-room-premium.webp"
                alt="Premium living room interior by Prime Nest Interiors"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
              />

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-dark-accent mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:info@primenestinteriors.com"
                    className="flex items-center gap-4 p-4 bg-gold/10 rounded-lg hover:bg-gold/20 transition-colors group no-hover"
                  >
                    <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email Us</p>
                      <p className="text-sm text-gray-500">info@primenestinteriors.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
