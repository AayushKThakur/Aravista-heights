import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Aravista Heights isn't just a residence—it's a sanctuary. The attention to detail, from the marble finishes to the panoramic views, surpasses anything I've experienced in luxury living.",
    author: "Victoria Chen",
    title: "Private Equity Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    quote: "Having lived in premier properties across three continents, I can say with certainty that Aravista Heights sets a new global standard for residential excellence.",
    author: "James Morrison III",
    title: "International Investment Banker",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    quote: "The concierge service anticipates every need before I even realize it myself. This is what true luxury feels like—effortless and all-encompassing.",
    author: "Priya Sharma",
    title: "Tech Entrepreneur",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="heading-section text-muted-foreground mb-4 block">
            Resident Stories
          </span>
          <h2 className="heading-editorial text-foreground">
            Voices of Excellence
          </h2>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 flex items-center justify-center border border-champagne/30 rounded-full">
                  <Quote className="w-6 h-6 text-champagne" />
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-elegant text-foreground mb-10 max-w-3xl mx-auto">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  className="w-16 h-16 rounded-full object-cover grayscale"
                />
                <div>
                  <div className="font-display text-lg text-foreground">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-sm text-muted-foreground tracking-wide">
                    {testimonials[currentIndex].title}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-accent w-6' : 'bg-border'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
