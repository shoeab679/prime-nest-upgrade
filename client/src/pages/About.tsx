import { motion } from 'framer-motion';
import { CheckCircle, Target, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering premium quality and attention to detail'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We listen, understand, and deliver beyond expectations'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay updated with latest design trends and innovative solutions for modern living'
    },
  ];

  const leadership = [
    { name: 'Mohd Ayub Khan', role: 'Founder' },
    { name: 'Mohd Shoeab Khan', role: 'Co-Founder & Business Development' },
    { name: 'Mohd Raheb Khan', role: 'Operations Head' },
  ];

  const whyChooseUs = [
    'Premium quality materials and craftsmanship',
    'Customized designs tailored to your space',
    'Transparent pricing',
    'End-to-End project support',
    'Modern design solutions',
    'Professional project coordination',
    'Free consultation and design guidance',
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
            <h1 className="text-4xl md:text-5xl font-bold text-dark-accent mb-6">About Prime Nest Interiors</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Prime Nest Interiors is dedicated to creating premium, functional, and elegant spaces designed for modern living in Hyderabad. We focus on combining aesthetics with practicality to deliver interiors tailored to every lifestyle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-4">Our Story</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4 text-gray-700"
            >
              <p className="leading-relaxed">
                Prime Nest Interiors was created with a vision to transform homes into stylish, comfortable, and personalized spaces. We believe interior design should not only look beautiful but also improve everyday living.
              </p>
              <p className="leading-relaxed">
                From modular kitchens to complete home interiors, our focus remains on quality craftsmanship, personalized design, and customer satisfaction.
              </p>
              <p className="leading-relaxed">
                Every project is approached with creativity, attention to detail, and a commitment to delivering premium interior experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030851542/MgcE2EwQn5YwVAvEt2DHn2/hero-main-JcaSpkBMK629bMVPxjD53z.webp"
                alt="Prime Nest Interiors Studio"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 md:py-24 bg-soft-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-4">Leadership Team</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {leadership.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-gold/50 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-dark-accent mb-2">{member.name}</h3>
                <p className="text-gold font-semibold">{member.role}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto bg-white p-8 rounded-lg border border-gray-200"
          >
            <p className="text-gray-700 leading-relaxed">
              Prime Nest Interiors is led by a passionate team focused on design excellence, quality craftsmanship, and delivering premium interior experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-4">Our Values</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-soft-gray p-8 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-accent mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-soft-gray">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-accent mb-4">Why Choose Us?</h2>
            <div className="w-16 h-1 bg-gold mx-auto"></div>
          </motion.div>

          <div className="space-y-4">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all"
              >
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium">✓ {item}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Create Something Beautiful Together</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us today for a free consultation and discover how we can transform your space
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
