import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Home as HomeIcon, Zap, Award, Users } from 'lucide-react';
import { Link } from 'wouter';
import PopularSearches from '@/components/PopularSearches';
import ProjectShowcase from '@/components/ProjectShowcase';
import LeadCaptureModal from '@/components/LeadCaptureModal';

export default function Home() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  // Auto-trigger lead modal after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLeadModalOpen(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: HomeIcon,
      title: 'Modular Kitchens',
      description: 'Premium kitchen designs with smart storage and modern aesthetics',
      link: '/modular-kitchens',
      image: '/images/modular-kitchen.jpg',
    },
    {
      icon: Users,
      title: 'Wardrobes',
      description: 'Custom wardrobe solutions for organized and elegant bedrooms',
      link: '/wardrobes',
      image: '/images/wardrobe.jpg',
    },
    {
      icon: Zap,
      title: 'TV Units',
      description: 'Entertainment walls that blend functionality with premium design',
      link: '/tv-units',
      image: '/images/tv-unit.jpg',
    },
    {
      icon: Award,
      title: 'Full Home Interiors',
      description: 'Complete interior design solutions for your entire apartment',
      link: '/services',
      image: '/images/full-home.jpg',
    },
  ];

  const features = [
    'Premium materials and finishes',
    'Expert design consultation',
    '3D visualization before execution',
    'Professional installation',
    'Warranty and after-sales support',
    'Customized solutions for your space',
  ];

  const stats = [
    { number: '120+', label: 'Spaces Designed' },
    { number: '85+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Industry Experience' },
    { number: '98%', label: 'Client Satisfaction' },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Apartment Owner',
      text: 'Prime Nest transformed our apartment into a dream home. The attention to detail and professionalism was exceptional.',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Villa Owner',
      text: 'Excellent service from consultation to installation. The team understood our vision perfectly and delivered beyond expectations.',
      rating: 5,
    },
    {
      name: 'Anjali Reddy',
      role: 'Working Professional',
      text: 'They made the entire process hassle-free. The quality of work and timely delivery impressed us completely.',
      rating: 5,
    },
  ];

  return (
    <div className="bg-white">
      {/* Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        onSubmit={() => setIsLeadModalOpen(false)}
      />

      {/* Premium Hero Section */}
      <section className="relative h-screen md:h-[600px] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-living-room.jpg)',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 container text-left max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="heading-xl text-white mb-4"
          >
            Premium Interior Designs for Modern Hyderabad Homes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-100 mb-8 leading-relaxed"
          >
            Transform your apartment into a luxury space with our expert interior design solutions. Modular kitchens, wardrobes, TV units, and complete home interiors crafted for elegant living.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => setIsLeadModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-white rounded-lg font-semibold hover:opacity-90 transition-all duration-200 active:scale-95"
            >
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-dark-accent transition-all duration-200 active:scale-95 no-hover"
            >
              View Our Projects
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 bg-dark-accent">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl font-bold text-gold">{stat.number}</p>
                <p className="text-gray-300 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="heading-lg mb-4">Our Premium Services</h2>
            <div className="divider-gold mb-6"></div>
            <p className="body-lg max-w-2xl mx-auto">
              We specialize in creating premium interior designs for apartments, flats, and villas in Hyderabad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="card-premium overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="heading-sm mb-2">{service.title}</h3>
                    <p className="body-sm mb-4">{service.description}</p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-gold font-semibold hover:opacity-70 transition-opacity no-hover"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="heading-lg mb-4">Why Choose Prime Nest Interiors?</h2>
            <div className="divider-gold mb-6"></div>
            <p className="body-lg max-w-2xl mx-auto">
              We combine expertise, quality, and innovation to create interior spaces that exceed expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/why-choose-us.jpg"
                alt="Interior design team presenting 3D visualization to clients"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="body-md">{feature}</span>
                </div>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => setIsLeadModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  Get Free Consultation <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <ProjectShowcase />

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="heading-lg mb-4">What Our Clients Say</h2>
            <div className="divider-gold mb-6"></div>
            <p className="body-lg max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied clients across Hyderabad.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-premium p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold text-lg">★</span>
                  ))}
                </div>
                <p className="body-md mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-dark-accent">{testimonial.name}</p>
                  <p className="body-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="heading-lg mb-4">Our Process</h2>
            <div className="divider-gold mb-6"></div>
            <p className="body-lg">From consultation to installation, we ensure a seamless experience</p>
          </motion.div>

          <div className="space-y-6">
            {[
              { step: '1', title: 'Free Consultation', desc: 'Understand your vision, space, and requirements' },
              { step: '2', title: '3D Design & Proposal', desc: 'Detailed 3D renderings and customized proposal' },
              { step: '3', title: 'Material Selection', desc: 'Choose from premium materials and finishes' },
              { step: '4', title: 'Professional Installation', desc: 'Expert installation with quality assurance' },
              { step: '5', title: 'Handover & Support', desc: 'Final inspection, warranty, and after-sales support' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="heading-sm mb-1">{item.title}</h3>
                  <p className="body-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Searches Section */}
      <PopularSearches />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-dark-accent text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container text-center max-w-2xl"
        >
          <h2 className="heading-lg text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="body-lg text-gray-300 mb-8">
            Get your free consultation today and discover how we can create your dream interior.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsLeadModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-dark-accent rounded-lg font-semibold hover:opacity-90 transition-all duration-200 active:scale-95"
            >
              Get Free Consultation <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:+919542663490"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-dark-accent transition-all duration-200 active:scale-95 no-hover"
            >
              Call Us Now
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

