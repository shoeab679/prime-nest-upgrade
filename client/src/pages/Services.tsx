import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Modular Kitchens',
      description: 'Premium modular kitchens with smart storage, modern appliances, and elegant finishes. Designed for functionality and style.',
      features: ['Custom cabinetry', 'Premium appliances', 'Smart storage solutions', 'Marble countertops', 'Soft-close drawers'],
      image: '/images/modular-kitchen.jpg',
      href: '/modular-kitchens'
    },
    {
      id: 2,
      title: 'Wardrobes',
      description: 'Custom wardrobe designs with elegant finishes, optimal organization, and premium hardware. Perfect for any bedroom.',
      features: ['Custom designs', 'Mirror panels', 'Soft lighting', 'Organized storage', 'Premium hardware'],
      image: '/images/wardrobe.jpg',
      href: '/wardrobes'
    },
    {
      id: 3,
      title: 'TV Units',
      description: 'Sophisticated entertainment walls with integrated storage, ambient lighting, and minimalist design.',
      features: ['Wall-mounted design', 'Integrated storage', 'Ambient lighting', 'Cable management', 'Modern aesthetics'],
      image: '/images/tv-unit.jpg',
      href: '/tv-units'
    },
    {
      id: 4,
      title: 'Bedroom Interiors',
      description: 'Luxurious bedroom designs creating serene and comfortable spaces with premium furnishings and lighting.',
      features: ['Custom bed designs', 'Ambient lighting', 'Premium finishes', 'Storage solutions', 'Relaxing aesthetics'],
      image: '/images/bedroom.jpg',
      href: '/services'
    },
    {
      id: 5,
      title: 'Living Room Interiors',
      description: 'Elegant living spaces designed for modern family living with comfortable seating and entertainment areas.',
      features: ['Custom furniture', 'Accent walls', 'Lighting design', 'Storage integration', 'Entertainment zones'],
      image: '/images/living-room-services.jpg',
      href: '/services'
    },
    {
      id: 6,
      title: 'Full Home Interiors',
      description: 'Complete home transformation with cohesive design throughout all spaces. End-to-end interior solutions.',
      features: ['Complete design', 'All rooms covered', 'Cohesive aesthetics', 'Project management', 'Quality assurance'],
      image: '/images/full-home-services.jpg',
      href: '/services'
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-soft-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-dark-accent mb-6">Our Services</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Comprehensive interior design solutions tailored to your lifestyle and preferences. From modular kitchens to complete home interiors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="space-y-16 md:space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-cols-2 md:direction-rtl' : ''}`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-80 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>

                <div className={index % 2 === 1 ? 'md:order-first' : ''}>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-4">{service.title}</h2>
                  <div className="w-12 h-1 bg-gold mb-6"></div>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Link href={service.href}>
                    <a className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 active:scale-95">
                      Learn More <ArrowRight className="w-5 h-5" />
                    </a>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-soft-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-4">Additional Services</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'False Ceiling', description: 'Modern false ceiling designs with integrated lighting and acoustic solutions' },
              { title: 'Office Interiors', description: 'Professional office spaces designed for productivity and aesthetics' },
              { title: 'Custom Furniture', description: 'Bespoke furniture pieces tailored to your specific requirements' },
              { title: 'Consultation & Design', description: 'Expert consultation and custom design proposals for your space' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-dark-accent mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-4">Our Process</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="space-y-6">
            {[
              { step: '1', title: 'Free Consultation', desc: 'We meet with you to understand your vision, space, and requirements' },
              { step: '2', title: 'Design Proposal', desc: 'Our team creates custom design proposals with detailed visuals and specifications' },
              { step: '3', title: 'Project Planning', desc: 'We develop a comprehensive plan including timeline, budget, and materials' },
              { step: '4', title: 'Execution', desc: 'Professional installation with regular updates and quality checks' },
              { step: '5', title: 'Final Handover', desc: 'Complete project inspection and handover with warranty documentation' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 bg-soft-gray rounded-lg hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-dark-accent mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-dark-accent text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container text-center max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Book your free consultation today and let our expert team help you create your dream space
          </p>
          <a
            href="https://wa.me/919542663490?text=Hi%20Prime%20Nest%20Interiors,%20I%20would%20like%20to%20book%20a%20free%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-gold text-dark-accent rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 active:scale-95"
          >
            Book Free Consultation
          </a>
        </motion.div>
      </section>
    </div>
  );
}
