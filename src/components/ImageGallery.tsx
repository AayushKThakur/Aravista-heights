import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import heroPenthouse from '@/assets/hero-penthouse.jpg';
import buildingExterior from '@/assets/building-exterior.jpg';
import infinityPool from '@/assets/infinity-pool.jpg';
import marbleInterior from '@/assets/marble-interior.jpg';
import homeTheatre from '@/assets/home-theatre.jpg';
import terraceGarden from '@/assets/terrace-garden.jpg';
import galleryBedroom from '@/assets/gallery-bedroom.jpg';
import galleryKitchen from '@/assets/gallery-kitchen.jpg';
import galleryBathroom from '@/assets/gallery-bathroom.jpg';
import galleryLobby from '@/assets/gallery-lobby.jpg';

const galleryImages = [
  { src: heroPenthouse, caption: 'Grand Living Room', aspect: 'wide' },
  { src: galleryKitchen, caption: 'Gourmet Kitchen', aspect: 'tall' },
  { src: infinityPool, caption: 'Infinity Pool', aspect: 'wide' },
  { src: galleryBathroom, caption: 'Spa Bathroom', aspect: 'square' },
  { src: marbleInterior, caption: 'Marble Interiors', aspect: 'square' },
  { src: galleryBedroom, caption: 'Master Suite', aspect: 'wide' },
  { src: homeTheatre, caption: 'Private Cinema', aspect: 'wide' },
  { src: terraceGarden, caption: 'Terrace Garden', aspect: 'square' },
  { src: buildingExterior, caption: 'Tower Exterior', aspect: 'tall' },
  { src: galleryLobby, caption: 'Grand Lobby', aspect: 'wide' },
];

export const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="heading-section text-muted-foreground mb-4 block">
            Visual Journey
          </span>
          <h2 className="heading-editorial text-foreground">
            A Gallery of Excellence
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div ref={ref} className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="break-inside-avoid"
            >
              <div
                onClick={() => setSelectedImage(index)}
                className="relative group cursor-pointer overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    image.aspect === 'tall' ? 'h-[400px]' : 
                    image.aspect === 'wide' ? 'h-[250px]' : 'h-[300px]'
                  }`}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-serif text-lg italic text-cream">
                    {image.caption}
                  </span>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-6 h-px bg-champagne" />
                  <div className="absolute top-4 right-4 w-px h-6 bg-champagne" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].caption}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <span className="font-serif text-xl italic text-cream">
                  {galleryImages[selectedImage].caption}
                </span>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-cream hover:text-champagne transition-colors"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
