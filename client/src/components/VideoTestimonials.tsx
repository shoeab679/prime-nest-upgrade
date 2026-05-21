import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoTestimonial {
  id: string;
  clientName: string;
  clientRole: string;
  videoUrl: string;
  thumbnailUrl: string;
  quote: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: '1',
    clientName: 'Priya Sharma',
    clientRole: 'Apartment Owner',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030851542/MgcE2EwQn5YwVAvEt2DHn2/modular-kitchen-premium-5tiQTLo4SDZPs3T5swY5qE.webp',
    quote: 'Prime Nest transformed our apartment into a dream home. The attention to detail was exceptional.'
  },
  {
    id: '2',
    clientName: 'Rajesh Kumar',
    clientRole: 'Villa Owner',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030851542/MgcE2EwQn5YwVAvEt2DHn2/hero-main-JcaSpkBMK629bMVPxjD53z.webp',
    quote: 'Excellent service from consultation to installation. The team understood our vision perfectly.'
  },
  {
    id: '3',
    clientName: 'Anjali Reddy',
    clientRole: 'Working Professional',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030851542/MgcE2EwQn5YwVAvEt2DHn2/modular-kitchen-premium-5tiQTLo4SDZPs3T5swY5qE.webp',
    quote: 'They made the entire process hassle-free. The quality of work and timely delivery impressed us.'
  },
  {
    id: '4',
    clientName: 'Vikram Patel',
    clientRole: 'Business Owner',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663030851542/MgcE2EwQn5YwVAvEt2DHn2/hero-main-JcaSpkBMK629bMVPxjD53z.webp',
    quote: 'Professional team, premium quality, and excellent after-sales support. Highly recommended!'
  }
];

export default function VideoTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videoTestimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videoTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = videoTestimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Video Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear directly from our satisfied clients about their transformation journey with Prime Nest Interiors
          </p>
        </div>

        {/* Video Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Navigation */}
          <div className="flex justify-center lg:justify-end">
            <Button
              onClick={goToPrevious}
              variant="outline"
              size="lg"
              className="rounded-full p-3 hover:bg-gold hover:border-gold hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>

          {/* Main Video Player */}
          <div className="relative group">
            <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl aspect-video">
              {/* Video Thumbnail with Play Button */}
              <div
                className="relative w-full h-full cursor-pointer"
                onClick={() => setSelectedVideo(currentTestimonial)}
              >
                <img
                  src={currentTestimonial.thumbnailUrl}
                  alt={currentTestimonial.clientName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Client Info Below Video */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {currentTestimonial.clientName}
              </h3>
              <p className="text-gold font-semibold mb-3">
                {currentTestimonial.clientRole}
              </p>
              <p className="text-gray-700 italic text-sm leading-relaxed">
                "{currentTestimonial.quote}"
              </p>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex justify-center lg:justify-start">
            <Button
              onClick={goToNext}
              variant="outline"
              size="lg"
              className="rounded-full p-3 hover:bg-gold hover:border-gold hover:text-white transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-4 mt-12 flex-wrap">
          {videoTestimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-2 ring-gold scale-110'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={testimonial.thumbnailUrl}
                alt={testimonial.clientName}
                className="w-full h-full object-cover"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-gold/20 flex items-center justify-center">
                  <Play className="w-6 h-6 text-gold fill-gold" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-6">
            Ready to transform your space? Get your free consultation today.
          </p>
          <a
            href="https://wa.me/919542663490?text=Hi%20Prime%20Nest%20Interiors,%20I%20would%20like%20to%20book%20a%20free%20consultation"
            className="inline-block bg-gold hover:bg-gold/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Book Free Consultation
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo.videoUrl}
              title={selectedVideo.clientName}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
