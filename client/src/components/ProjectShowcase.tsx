import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, MessageCircle } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Bedroom',
    category: 'Luxury Bedrooms',
    image: '/images/portfolio/modern-bedroom.jpg',
  },
  {
    id: 2,
    title: 'L Type Modular Kitchen',
    category: 'Modular Kitchens',
    image: '/images/portfolio/L-type-modular-kitchen.jpeg',
  },
  {
    id: 3,
    title: 'Open Modular Kitchen',
    category: 'Modular Kitchens',
    image: '/images/portfolio/open-modular-kitchen.jpg',
  },
  {
    id: 4,
    title: 'Luxury TV Unit',
    category: 'TV Units',
    image: '/images/portfolio/luxury-tv-unit.jpg',
  },
  {
    id: 5,
    title: 'Modern Wardrobe Hinged Doors',
    category: 'Wardrobes',
    image: '/images/portfolio/modern-wardrobe-hinged-doors.jpg',
  },
  {
    id: 6,
    title: 'Luxury Full TV Unit',
    category: 'TV Units',
    image: '/images/portfolio/luxury-full-tv-unit.jpg',
  },
  {
    id: 7,
    title: 'Premium TV Unit',
    category: 'TV Units',
    image: '/images/portfolio/premium-tv-unit.jpg',
  },
  {
    id: 8,
    title: 'PU Panel Luxury Wardrobes',
    category: 'Wardrobes',
    image: '/images/portfolio/pu-panel-luxury-wardrobes.jpg',
  },
  {
    id: 9,
    title: 'Sliding Wardrobes',
    category: 'Wardrobes',
    image: '/images/portfolio/sliding-wardrobes.jpg',
  },
  {
    id: 10,
    title: 'Kids Bedroom',
    category: 'Bedrooms',
    image: '/images/portfolio/kids-bedroom.jpg',
  },
  {
    id: 11,
    title: 'Prime Nest Kitchen',
    category: 'Modular Kitchens',
    image: '/images/portfolio/primenest-kitchen.jpeg',
  },
  {
    id: 12,
    title: 'Master Bedroom Suite',
    category: 'Luxury Bedrooms',
    image: '/images/bedroom.jpg',
  },
];

export default function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Auto-slide functionality
  useEffect(() => {
    if (!autoPlay) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [autoPlay]);

  const goToPrev = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const visibleProjects = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(projects[(currentIndex + i) % projects.length]);
    }
    return result;
  };

  return (
    <section className="py-16 md:py-24 bg-dark-accent">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="heading-lg text-white mb-4">Our Recent Projects</h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of premium interior designs crafted for homes across Hyderabad
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleProjects().map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-gold text-xs font-medium uppercase tracking-wider mb-1">{project.category}</p>
                    <h3 className="text-white font-bold">{project.title}</h3>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-gold text-white text-xs font-medium px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  View
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-gold text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => { setAutoPlay(false); setCurrentIndex(index); }}
              className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-gold w-6' : 'bg-gray-500'}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/919542663490?text=Hi%20Prime%20Nest%20Interiors,%20I%20would%20like%20to%20see%20more%20projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gold text-gold rounded-lg font-semibold hover:bg-gold hover:text-white transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            View All Projects on WhatsApp
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-10 right-0 text-white hover:text-gold transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full rounded-lg shadow-2xl max-h-[80vh] object-contain"
            />
            <div className="mt-4 text-center">
              <p className="text-gold text-sm uppercase tracking-wider">{selectedProject.category}</p>
              <h3 className="text-white text-xl font-bold mt-1">{selectedProject.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
