import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function ModularKitchens() {
  const features = [
    'Premium cabinetry with soft-close mechanisms',
    'Marble or quartz countertops',
    'Integrated stainless steel appliances',
    'Smart storage solutions',
    'Under-cabinet LED lighting',
    'Modular design for easy customization',
    'Water and heat-resistant finishes',
    'Professional installation included',
  ];

  const designs = [
    { name: 'L-Shaped Kitchen', desc: 'Ideal for medium-sized apartments' },
    { name: 'U-Shaped Kitchen', desc: 'Perfect for larger spaces with multiple users' },
    { name: 'Parallel Kitchen', desc: 'Great for narrow spaces and efficient workflow' },
    { name: 'Island Kitchen', desc: 'Modern design with central island and breakfast bar' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/modular-kitchen-hero.webp)',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container text-center text-white max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Modular Kitchens</h1>
          <p className="text-lg md:text-xl text-gray-100">
            Beautifully designed kitchens combining functionality, style, and premium materials
          </p>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-6">Why Choose Our Modular Kitchens?</h2>
            <p className="text-lg text-gray-700">
              Our modular kitchens are designed to maximize space, functionality, and aesthetics. Each kitchen is customized to match your lifestyle and preferences.
            </p>
          </motion.div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 bg-soft-gray rounded-lg hover:shadow-md transition-all"
              >
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen Designs */}
      <section className="py-16 md:py-24 bg-soft-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-4">Kitchen Layouts</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designs.map((design, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold text-dark-accent mb-3">{design.name}</h3>
                <p className="text-gray-600 mb-4">{design.desc}</p>
                <button className="text-gold font-semibold hover:gap-2 transition-all flex items-center gap-1">
                  View Design →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-4">Premium Materials</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Countertops',
                items: ['Marble', 'Quartz', 'Granite', 'Stainless Steel']
              },
              {
                title: 'Cabinetry',
                items: ['Plywood', 'MDF', 'Particle Board', 'Solid Wood']
              },
              {
                title: 'Finishes',
                items: ['Matte', 'Glossy', 'Textured', 'Wood Grain']
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-soft-gray rounded-lg border border-gray-200"
              >
                <h3 className="text-xl font-bold text-dark-accent mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-soft-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-4">Featured Kitchens</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { img: '/images/portfolio/L-type-modular-kitchen.jpeg', title: 'Modern L-Shaped Kitchen' },
              { img: '/images/portfolio/open-modular-kitchen.jpg', title: 'Contemporary Open Kitchen' },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-white font-bold text-lg">{project.title}</h3>
                    </div>
                  </div>
                </div>
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
              { step: '1', title: 'Consultation', desc: 'We understand your needs, space, and budget' },
              { step: '2', title: '3D Design', desc: 'Create detailed 3D renderings of your kitchen' },
              { step: '3', title: 'Material Selection', desc: 'Choose from premium materials and finishes' },
              { step: '4', title: 'Installation', desc: 'Professional installation with quality checks' },
              { step: '5', title: 'Handover', desc: 'Final inspection and warranty documentation' },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Kitchen?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Book a free consultation with our kitchen design experts and get a personalized proposal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919542663490?text=Hi%20Prime%20Nest%20Interiors,%20I%20would%20like%20to%20book%20a%20free%20consultation%20for%20modular%20kitchen"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gold text-dark-accent rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 active:scale-95 inline-flex items-center justify-center gap-2"
            >
              Chat on WhatsApp <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+919542663490"
              className="px-8 py-3.5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-dark-accent transition-all duration-200 active:scale-95"
            >
              Call Us Now
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
