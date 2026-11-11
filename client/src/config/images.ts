// Portfolio images configuration
// Organized by category with metadata

export interface PortfolioImage {
  id: string;
  src: string;
  title: string;
  description: string;
  category: 'kitchen' | 'wardrobe' | 'tv-unit' | 'bedroom';
  location: string;
}

export const portfolioImages: PortfolioImage[] = [
  // Kitchens
  {
    id: 'kitchen-1',
    src: '/images/portfolio/L-type-modular-kitchen.jpeg',
    title: 'L-Type Modular Kitchen',
    description: 'Premium L-shaped kitchen with modern design and smart storage solutions',
    category: 'kitchen',
    location: 'Hyderabad'
  },
  {
    id: 'kitchen-2',
    src: '/images/portfolio/open-modular-kitchen.jpg',
    title: 'Open Modular Kitchen',
    description: 'Contemporary open kitchen design with marble countertops and integrated appliances',
    category: 'kitchen',
    location: 'Hyderabad'
  },
  {
    id: 'kitchen-3',
    src: '/images/portfolio/primenest-kitchen.jpeg',
    title: 'Prime Nest Kitchen',
    description: 'Luxury kitchen with premium finishes and professional lighting',
    category: 'kitchen',
    location: 'Hyderabad'
  },
  // Wardrobes
  {
    id: 'wardrobe-1',
    src: '/images/portfolio/modern-wardrobe-hinged-doors.jpg',
    title: 'Modern Wardrobe - Hinged Doors',
    description: 'Floor-to-ceiling wardrobe with mirror-hinged doors and LED lighting',
    category: 'wardrobe',
    location: 'Hyderabad'
  },
  {
    id: 'wardrobe-2',
    src: '/images/portfolio/sliding-wardrobes.jpg',
    title: 'Sliding Wardrobes',
    description: 'Space-saving sliding wardrobe design perfect for compact bedrooms',
    category: 'wardrobe',
    location: 'Hyderabad'
  },
  {
    id: 'wardrobe-3',
    src: '/images/portfolio/pu-panel-luxury-wardrobes.jpg',
    title: 'PU Panel Luxury Wardrobes',
    description: 'Premium PU panel wardrobes with luxury hinged doors and sophisticated design',
    category: 'wardrobe',
    location: 'Hyderabad'
  },
  // TV Units
  {
    id: 'tvunit-1',
    src: '/images/portfolio/luxury-tv-unit.jpg',
    title: 'Luxury TV Unit',
    description: 'Elegant TV entertainment unit with ambient lighting and storage',
    category: 'tv-unit',
    location: 'Hyderabad'
  },
  {
    id: 'tvunit-2',
    src: '/images/portfolio/luxury-full-tv-unit.jpg',
    title: 'Luxury Full TV Unit',
    description: 'Complete entertainment wall with textured finishes and premium materials',
    category: 'tv-unit',
    location: 'Hyderabad'
  },
  {
    id: 'tvunit-3',
    src: '/images/portfolio/premium-tv-unit.jpg',
    title: 'Premium TV Unit',
    description: 'Modern TV unit with sophisticated design and integrated cable management',
    category: 'tv-unit',
    location: 'Hyderabad'
  },
  // Bedrooms
  {
    id: 'bedroom-1',
    src: '/images/portfolio/kids-bedroom.jpg',
    title: 'Kids Bedroom',
    description: 'Colorful and functional kids bedroom with custom storage solutions',
    category: 'bedroom',
    location: 'Hyderabad'
  },
  {
    id: 'bedroom-2',
    src: '/images/portfolio/modern-bedroom.jpg',
    title: 'Modern Bedroom',
    description: 'Serene and luxurious master bedroom with premium finishes',
    category: 'bedroom',
    location: 'Hyderabad'
  },
];

// Group images by category
export const portfolioImagesByCategory = {
  kitchen: portfolioImages.filter(img => img.category === 'kitchen'),
  wardrobe: portfolioImages.filter(img => img.category === 'wardrobe'),
  'tv-unit': portfolioImages.filter(img => img.category === 'tv-unit'),
  bedroom: portfolioImages.filter(img => img.category === 'bedroom'),
  all: portfolioImages,
};

export const categoryLabels = {
  kitchen: 'Modular Kitchens',
  wardrobe: 'Wardrobes',
  'tv-unit': 'TV Units',
  bedroom: 'Bedrooms',
};
