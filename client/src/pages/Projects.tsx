import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Modern Bedroom',
      category: 'bedroom',
      image: '/images/portfolio/modern-bedroom.jpg',
      description: 'Contemporary bedroom with modern furnishings and elegant design',
      location: 'Hyderabad'
    },
    {
      id: 2,
      title: 'L Type Modular Kitchen',
      category: 'kitchen',
      image: '/images/portfolio/L-type-modular-kitchen.jpeg',
      description: 'Modern L-shaped modular kitchen with sleek design and premium finishes',
      location: 'Hyderabad'
    },
    {
      id: 3,
      title: 'Modern Wardrobe Hinged Doors',
      category: 'wardrobe',
      image: '/images/portfolio/modern-wardrobe-hinged-doors.jpg',
      description: 'Contemporary wardrobe with hinged door design and spacious storage',
      location: 'Hyderabad'
    },
    {
      id: 4,
      title: 'Luxury TV Unit',
      category: 'tv-unit',
      image: '/images/portfolio/luxury-tv-unit.jpg',
      description: 'Elegant luxury TV unit with premium finishes and sophisticated design',
      location: 'Hyderabad'
    },
    {
      id: 5,
      title: 'Open Modular Kitchen',
      category: 'kitchen',
      image: '/images/portfolio/open-modular-kitchen.jpg',
      description: 'Open concept modular kitchen with contemporary styling and functionality',
      location: 'Hyderabad'
    },
    {
      id: 6,
      title: 'Luxury Full TV Unit',
      category: 'tv-unit',
      image: '/images/portfolio/luxury-full-tv-unit.jpg',
      description: 'Full-wall luxury TV unit with sophisticated design and ambient lighting',
      location: 'Hyderabad'
    },
    {
      id: 7,
      title: 'Premium TV Unit',
      category: 'tv-unit',
      image: '/images/portfolio/premium-tv-unit.jpg',
      description: 'Premium TV unit with modern aesthetics and integrated storage',
      location: 'Hyderabad'
    },
    {
      id: 8,
      title: 'PU Panel Luxury Wardrobes',
      category: 'wardrobe',
      image: '/images/portfolio/pu-panel-luxury-wardrobes.jpg',
      description: 'Luxury wardrobe with PU panel and hinged doors for premium look',
      location: 'Hyderabad'
    },
    {
      id: 9,
      title: 'Sliding Wardrobes',
      category: 'wardrobe',
      image: '/images/portfolio/sliding-wardrobes.jpg',
      description: 'Modern sliding wardrobe with sleek design and space-saving functionality',
      location: 'Hyderabad'
    },
    {
      id: 10,
      title: 'Kids Bedroom',
      category: 'bedroom',
      image: '/images/portfolio/kids-bedroom.jpg',
      description: 'Vibrant and functional kids bedroom design with playful elements',
      location: 'Hyderabad'
    },
    {
      id: 11,
      title: 'Prime Nest Kitchen',
      category: 'kitchen',
      image: '/images/portfolio/primenest-kitchen.jpeg',
      description: 'Premium kitchen design from Prime Nest portfolio with premium finishes',
      location: 'Hyderabad'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'kitchen', label: 'Kitchens' },
    { id: 'wardrobe', label: 'Wardrobes' },
    { id: 'tv-unit', label: 'TV Units' },
    { id: 'bedroom', label: 'Bedrooms' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-light-gray">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-xl mb-4">Our Premium Projects</h1>
            <p className="body-lg">
              Explore our portfolio of beautifully designed interiors across Hyderabad. Each project showcases our commitment to quality, innovation, and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 md:py-12 bg-white sticky top-20 z-20 border-b border-gray-200">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'bg-gold text-white shadow-lg'
                    : 'bg-light-gray text-dark-accent hover:bg-gray-300'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Masonry Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold text-sm font-semibold">{project.location}</span>
                      <motion.button
                        whileHover={{ x: 4 }}
                        className="text-white hover:text-gold transition-colors"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-light-gray">
                  <h4 className="heading-sm mb-2 line-clamp-2">{project.title}</h4>
                  <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full">
                    {categories.find(c => c.id === project.category)?.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="body-lg text-secondary-text">No projects found in this category.</p>
            </motion.div>
          )}
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
          <h2 className="heading-lg text-white mb-6">Inspired by Our Work?</h2>
          <p className="body-lg text-gray-300 mb-8">
            Let's create your dream interior. Book a free consultation with our design experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919542663490?text=Hi%20Prime%20Nest%20Interiors,%20I%20am%20interested%20in%20your%20projects%20and%20would%20like%20to%20book%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-dark-accent rounded-lg font-semibold hover:opacity-90 transition-all duration-200 active:scale-95"
            >
              Book Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+919542663490"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-dark-accent transition-all duration-200 active:scale-95"
            >
              Call Us Now
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
