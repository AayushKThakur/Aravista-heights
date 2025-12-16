import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Waves, Maximize, Diamond, Film, Smartphone, TreeDeciduous } from 'lucide-react';
import infinityPool from '@/assets/infinity-pool.jpg';
import marbleInterior from '@/assets/marble-interior.jpg';
import homeTheatre from '@/assets/home-theatre.jpg';
import terraceGarden from '@/assets/terrace-garden.jpg';

const highlights = [
  {
    icon: Waves,
    title: 'Infinity Pool',
    description: 'Breathtaking rooftop infinity pool with panoramic skyline views',
    image: infinityPool,
  },
  {
    icon: Maximize,
    title: 'Floor-to-Ceiling Windows',
    description: 'Expansive glass facades flooding spaces with natural light',
    image: null,
  },
  {
    icon: Diamond,
    title: 'Imported Marble',
    description: 'Hand-selected Italian Calacatta marble throughout the residence',
    image: marbleInterior,
  },
  {
    icon: Film,
    title: 'Private Home Theatre',
    description: 'State-of-the-art cinema with acoustic engineering',
    image: homeTheatre,
  },
  {
    icon: Smartphone,
    title: 'Smart Home Automation',
    description: 'Integrated Crestron system for seamless living',
    image: null,
  },
  {
    icon: TreeDeciduous,
    title: 'Landscaped Terrace',
    description: 'Private garden terraces with curated landscaping',
    image: terraceGarden,
  },
];

export const KeyHighlights = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="highlights" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="heading-section text-muted-foreground mb-4 block">
            Signature Features
          </span>
          <h2 className="heading-editorial text-foreground">
            Exceptional by Design
          </h2>
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group luxury-card relative overflow-hidden"
            >
              {/* Background Image (if available) */}
              {highlight.image && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center border border-border mb-6 group-hover:border-accent transition-colors duration-300">
                  <highlight.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>

                <h3 className="font-display text-xl text-foreground mb-3">
                  {highlight.title}
                </h3>

                <p className="text-body text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>

                {/* Hover line accent */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
