import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioImage } from '@/config/images';

interface ImageGalleryProps {
  images: PortfolioImage[];
  columns?: number;
  showFilters?: boolean;
  filters?: string[];
  onFilterChange?: (filter: string) => void;
  activeFilter?: string;
}

export default function ImageGallery({
  images,
  columns = 3,
  showFilters = false,
  filters = [],
  onFilterChange,
  activeFilter,
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<PortfolioImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setSelectedImage(images[currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1]);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setSelectedImage(images[currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1]);
  };

  const handleImageClick = (image: PortfolioImage, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <>
      {/* Filters */}
      {showFilters && filters.length > 0 && (
        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => onFilterChange?.(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-gold text-white shadow-lg'
                  : 'bg-light-gray text-dark-accent hover:bg-gray-300'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>
      )}

      {/* Gallery Grid */}
      <motion.div
        layout
        className={`grid ${gridColsClass} gap-6 md:gap-8`}
      >
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onClick={() => handleImageClick(image, index)}
            className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <div className="relative h-72 overflow-hidden bg-gray-200">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{image.description}</p>
                <span className="text-gold text-sm font-semibold">{image.location}</span>
              </div>
            </div>
            <div className="p-4 bg-light-gray">
              <h4 className="heading-sm mb-1 line-clamp-1">{image.title}</h4>
              <p className="text-gray-600 text-sm line-clamp-1">{image.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gold transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image */}
            <div className="w-full bg-black rounded-lg overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>

            {/* Info */}
            <div className="bg-dark-accent text-white p-6 rounded-b-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <span className="text-gold text-sm">{selectedImage.location}</span>
              </div>
              <p className="text-gray-300 mb-4">{selectedImage.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  {currentImageIndex + 1} / {images.length}
                </span>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrevImage}
                    className="p-2 hover:bg-gold/20 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNextImage}
                    className="p-2 hover:bg-gold/20 rounded-lg transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
