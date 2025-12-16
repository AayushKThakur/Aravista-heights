import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroPenthouse from '@/assets/hero-penthouse.jpg';

export const FinalCTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroPenthouse}
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
      </div>

      {/* Animated Gradient Overlay */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(ellipse at 20% 50%, hsla(40, 40%, 75%, 0.1) 0%, transparent 50%)',
            'radial-gradient(ellipse at 80% 50%, hsla(40, 40%, 75%, 0.1) 0%, transparent 50%)',
            'radial-gradient(ellipse at 20% 50%, hsla(40, 40%, 75%, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0"
      />

      <div ref={ref} className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '4rem' } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-champagne mx-auto mb-8"
          />

          <h2 className="heading-display text-cream mb-6">
            Book Your Private Viewing
          </h2>

          <p className="text-elegant text-cream/80 mb-12">
            Experience Aravista Heights in person and feel the luxury
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl">
              Schedule a Tour
            </Button>
            <Button variant="heroGhost" size="xl">
              Request Call Back
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-cream/60"
          >
            <a href="tel:+1234567890" className="hover:text-champagne transition-colors">
              +1 (234) 567-890
            </a>
            <span className="hidden md:block w-1 h-1 bg-cream/30 rounded-full" />
            <a href="mailto:inquiries@aravistaheights.com" className="hover:text-champagne transition-colors">
              inquiries@aravistaheights.com
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Architectural Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
    </section>
  );
};
