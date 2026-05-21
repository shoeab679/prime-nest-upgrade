import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
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
      alert('Something went wrong. Please try again or call us directly.');
    }
  };

  const contactInfo = [
    { icon: Phone, title: 'Phone', value: '+91 9542 663 490', link: 'tel:+919542663490' },
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
                src="/images/about-interior.jpg"
                alt="Prime Nest Interiors showroom"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
                loading="lazy"
              />

              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-dark-accent mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919542663490?text=Hi%20Prime%20Nest%20Interiors,%20I%20would%20like%20to%20book%20a%20free%20consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group no-hover"
                  >
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp Us</p>
                      <p className="text-sm text-gray-500">+91 9542 663 490</p>
                    </div>
                  </a>

                  <a
                    href="tel:+919542663490"
                    className="flex items-center gap-4 p-4 bg-gold/10 rounded-lg hover:bg-gold/20 transition-colors group no-hover"
                  >
                    <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Call Us</p>
                      <p className="text-sm text-gray-500">+91 9542 663 490</p>
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
