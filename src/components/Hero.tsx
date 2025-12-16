import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroPenthouse from '@/assets/hero-penthouse.jpg';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <img
          src={heroPenthouse}
          alt="Aravista Heights Luxury Penthouse"
          className="w-full h-full object-cover animate-pan-slow"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/20 to-charcoal/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 via-transparent to-transparent" />
      </motion.div>

      {/* Shimmer Effect */}
      <div className="absolute inset-0 shimmer pointer-events-none" />

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="mb-6"
        >
          <span className="heading-section text-champagne">
            The Art of Living Elevated
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="heading-display text-cream mb-8 max-w-5xl"
        >
          Aravista Heights
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '6rem' }}
          transition={{ duration: 1, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-champagne to-transparent mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
          className="text-elegant text-cream/90 max-w-2xl mb-12"
        >
          Where Luxury Meets Architectural Excellence
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="hero" size="xl">
            Schedule a Private Tour
          </Button>
          <Button variant="heroGhost" size="xl">
            Download Brochure
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-cream/60"
        >
          <span className="text-xs tracking-widest uppercase">Discover</span>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      {/* Architectural Lines Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: '120px' }}
        transition={{ duration: 1.5, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
        className="absolute bottom-0 left-[10%] w-px bg-gradient-to-t from-champagne/30 to-transparent"
      />
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: '80px' }}
        transition={{ duration: 1.5, delay: 1.4, ease: [0.4, 0, 0.2, 1] }}
        className="absolute bottom-0 right-[10%] w-px bg-gradient-to-t from-champagne/30 to-transparent"
      />
    </section>
  );
};
