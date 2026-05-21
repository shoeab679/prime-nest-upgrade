import { motion } from 'framer-motion';

export default function PopularSearches() {
  const searches = [
    { tag: '2BHK Interior Designers Hyderabad', message: "Hi Prime Nest Interiors, I'm looking for 2BHK interior design services in Hyderabad." },
    { tag: '3BHK Interior Designers Hyderabad', message: "Hi Prime Nest Interiors, I'm looking for 3BHK interior design services in Hyderabad." },
    { tag: 'Modern Kitchen Designs Hyderabad', message: "Hi Prime Nest Interiors, I'm interested in modern kitchen designs for my home in Hyderabad." },
    { tag: 'Wardrobe Interior Hyderabad', message: "Hi Prime Nest Interiors, I need custom wardrobe design solutions in Hyderabad." },
    { tag: 'TV Unit Designs Hyderabad', message: "Hi Prime Nest Interiors, I'm looking for premium TV unit designs in Hyderabad." },
    { tag: 'False Ceiling Hyderabad', message: "Hi Prime Nest Interiors, I'm interested in false ceiling designs for my home." },
    { tag: 'Apartment Interior Designers', message: "Hi Prime Nest Interiors, I need professional apartment interior design services." },
    { tag: 'Luxury Home Interiors Hyderabad', message: "Hi Prime Nest Interiors, I'm interested in luxury home interior services." },
    { tag: 'Modular Furniture Hyderabad', message: "Hi Prime Nest Interiors, I'm looking for modular furniture solutions in Hyderabad." },
    { tag: 'Living Room Interiors Hyderabad', message: "Hi Prime Nest Interiors, I need living room interior design services." },
    { tag: 'Interior Designers Hyderabad', message: "Hi Prime Nest Interiors, I'm looking for professional interior design services in Hyderabad." },
    { tag: 'Best Interior Designers in Hyderabad', message: "Hi Prime Nest Interiors, I'm interested in your premium interior design services." },
  ];

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = '919542663490';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-12 md:py-16 bg-light-gray">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="heading-md mb-2">Popular Searches in Hyderabad</h3>
          <p className="body-sm text-secondary-text">
            Explore popular interior solutions and design ideas across Hyderabad
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {searches.map((item, index) => (
            <motion.button
              key={index}
              onClick={() => handleWhatsAppClick(item.message)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="inline-block px-4 py-2 bg-white border-2 border-gray-300 rounded-full text-sm text-secondary-text hover:border-gold hover:text-gold hover:shadow-md transition-all duration-200 cursor-pointer font-medium"
            >
              {item.tag}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
