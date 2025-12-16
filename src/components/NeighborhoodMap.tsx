import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Clock, Building2, TreePine, Utensils, GraduationCap } from 'lucide-react';

const landmarks = [
  { icon: Building2, name: 'Financial District', distance: '5 mins' },
  { icon: TreePine, name: 'Central Park', distance: '3 mins' },
  { icon: Utensils, name: 'Fine Dining Hub', distance: '2 mins' },
  { icon: GraduationCap, name: 'International School', distance: '8 mins' },
  { icon: Building2, name: 'Premium Mall', distance: '4 mins' },
  { icon: Clock, name: 'Airport', distance: '25 mins' },
];

export const NeighborhoodMap = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="location" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="heading-section text-muted-foreground mb-4 block">
            Prime Address
          </span>
          <h2 className="heading-editorial text-foreground">
            Location & Connectivity
          </h2>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-sm overflow-hidden border border-border">
              {/* Placeholder Map */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-secondary">
                <div className="absolute inset-0 opacity-50" 
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>
              
              {/* Map Pin */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6, type: 'spring' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  <div className="absolute -inset-8 bg-accent/20 rounded-full animate-ping" />
                  <div className="relative w-16 h-16 bg-charcoal rounded-full flex items-center justify-center shadow-xl">
                    <MapPin className="w-6 h-6 text-champagne" />
                  </div>
                </div>
              </motion.div>

              {/* Map Label */}
              <div className="absolute bottom-6 left-6 bg-charcoal/90 backdrop-blur-sm px-6 py-4">
                <div className="font-display text-lg text-cream">Aravista Heights</div>
                <div className="text-xs text-cream/70 tracking-wide">Downtown Financial District</div>
              </div>
            </div>
          </motion.div>

          {/* Landmarks */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="heading-section text-muted-foreground mb-6">
              Nearby Landmarks
            </h3>
            
            {landmarks.map((landmark, index) => (
              <motion.div
                key={landmark.name}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-4 p-4 border border-border/50 hover:border-accent/50 transition-colors group"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-border group-hover:border-accent transition-colors">
                  <landmark.icon className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="text-foreground text-sm">{landmark.name}</div>
                </div>
                <div className="text-accent font-display text-sm">{landmark.distance}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
