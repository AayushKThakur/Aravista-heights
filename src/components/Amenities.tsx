import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  ArrowUpFromLine, 
  Headset, 
  CloudSun, 
  Dumbbell, 
  Shield, 
  BatteryCharging,
  Leaf,
  Users
} from 'lucide-react';

const amenities = [
  { icon: ArrowUpFromLine, title: 'Private Lift', description: 'Direct elevator access to your residence' },
  { icon: Headset, title: 'Concierge Services', description: '24/7 dedicated concierge team' },
  { icon: CloudSun, title: 'Sky Lounge', description: 'Exclusive rooftop entertaining space' },
  { icon: Dumbbell, title: 'Fitness Pavilion', description: 'World-class gymnasium & wellness center' },
  { icon: Shield, title: '3-Tier Security', description: 'Advanced biometric & surveillance systems' },
  { icon: BatteryCharging, title: 'EV Charging', description: 'Electric vehicle charging stations' },
  { icon: Leaf, title: 'Meditation Deck', description: 'Tranquil outdoor wellness sanctuary' },
  { icon: Users, title: 'Clubhouse', description: 'Premium social & event spaces' },
];

export const Amenities = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="amenities" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="heading-section text-muted-foreground mb-4 block">
            World-Class Living
          </span>
          <h2 className="heading-editorial text-foreground">
            Curated Amenities
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group p-6 md:p-8 border border-border/50 bg-card hover:border-accent/50 transition-all duration-500"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-4 md:mb-6">
                <amenity.icon 
                  className="w-6 h-6 md:w-7 md:h-7 text-muted-foreground group-hover:text-accent transition-colors duration-300" 
                  strokeWidth={1} 
                />
              </div>
              
              <h3 className="font-display text-base md:text-lg text-foreground mb-2">
                {amenity.title}
              </h3>
              
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
