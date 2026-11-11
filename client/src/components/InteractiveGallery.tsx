import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { id: '1', src: '/images/living-room-premium.webp', title: 'Premium Living Room Design', category: 'Living Rooms' },
  { id: '2', src: '/images/bedroom-premium.webp', title: 'Elegant Master Bedroom', category: 'Bedrooms' },
  { id: '3', src: '/images/bathroom-premium.webp', title: 'Luxury Bathroom Suite', category: 'Bathrooms' },
  { id: '4', src: '/images/dining-room-premium.webp', title: 'Contemporary Dining Space', category: 'Dining Rooms' },
  { id: '5', src: '/images/home-office-premium.webp', title: 'Modern Home Office', category: 'Home Office' },
];

export default function InteractiveGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [likedImages, setLikedImages] = useState<Set<string>>(new Set());
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handleLike = (id: string) => {
    setLikedImages((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setIsFullScreen(false);
    };

    if (isFullScreen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isFullScreen]);

  const currentImage = galleryImages[currentIndex];
  const isLiked = likedImages.has(currentImage.id);

  return (
    <>
      {/* Gallery Slider */}
      <div
        ref={containerRef}
        className="w-full bg-white rounded-lg overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Main Image Container */}
        <div className="relative w-full aspect-video bg-gray-100 overflow-hidden cursor-pointer group">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={currentImage.src}
              alt={currentImage.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              onClick={() => setIsFullScreen(true)}
            />
          </AnimatePresence>

          {/* Overlay on Hover */}
          <motion.div
            className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <p className="text-white text-sm font-medium">Click to expand</p>
          </motion.div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 rounded-full text-xs font-medium">
            {currentImage.category}
          </div>

          {/* Like Button */}
          <motion.button
            onClick={() => handleLike(currentImage.id)}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart
              size={20}
              className={isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}
            />
          </motion.button>

          {/* Navigation Arrows */}
          <motion.button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all opacity-0 group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={24} className="text-charcoal" />
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all opacity-0 group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={24} className="text-charcoal" />
          </motion.button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>

        {/* Image Info & Controls */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-charcoal">{currentImage.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{currentImage.category}</p>
          </div>

          {/* Bottom Navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <motion.button
              onClick={handlePrevious}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-gold hover:text-gold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={18} />
              <span className="text-sm font-medium">Previous</span>
            </motion.button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {galleryImages.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-gold w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={handleNext}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:border-gold hover:text-gold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium">Next</span>
              <ChevronRight size={18} />
            </motion.button>
          </div>

          {/* Liked Count */}
          {likedImages.size > 0 && (
            <motion.p
              className="text-center text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ❤️ {likedImages.size} image{likedImages.size !== 1 ? 's' : ''} liked
            </motion.p>
          )}
        </div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullScreen(false)}
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setIsFullScreen(false)}
                className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={28} className="text-white" />
              </motion.button>

              {/* Full Screen Image */}
              <motion.img
                src={currentImage.src}
                alt={currentImage.title}
                className="max-w-full max-h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Full Screen Navigation */}
              <motion.button
                onClick={handlePrevious}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={32} className="text-white" />
              </motion.button>

              <motion.button
                onClick={handleNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={32} className="text-white" />
              </motion.button>

              {/* Full Screen Info */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/50 text-white p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-lg font-semibold">{currentImage.title}</h3>
                <p className="text-sm text-gray-300 mt-1">{currentImage.category}</p>
                <p className="text-xs text-gray-400 mt-2">
                  {currentIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
