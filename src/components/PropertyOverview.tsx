import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Maximize2, BedDouble, Bath, Car, MapPin } from 'lucide-react';
import buildingExterior from '@/assets/building-exterior.jpg';

const propertyStats = [
  { icon: Maximize2, label: 'Sq. Ft.', value: '4,500+' },
  { icon: BedDouble, label: 'Bedrooms', value: '3-5' },
  { icon: Bath, label: 'Bathrooms', value: '4-6' },
  { icon: Car, label: 'Parking', value: '2-3' },
  { icon: MapPin, label: 'Location', value: 'Downtown' },
];

export const PropertyOverview = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="property" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="order-2 lg:order-1"
          >
            <span className="heading-section text-muted-foreground mb-4 block">
              The Property
            </span>
            
            <h2 className="heading-editorial text-foreground mb-8">
              A Masterpiece of 
              <span className="text-accent"> Modern Design</span>
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-body text-muted-foreground">
                Nestled in the heart of the city's most prestigious enclave, Aravista Heights 
                represents the pinnacle of contemporary luxury living. Each residence is a 
                testament to architectural excellence, where every detail has been meticulously 
                crafted to exceed the expectations of the most discerning homeowner.
              </p>
              <p className="text-body text-muted-foreground">
                From the moment you step into the grand lobby adorned with Italian marble 
                and bespoke art installations, you'll understand that this is not merely 
                a residence—it's a lifestyle statement.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {propertyStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 border border-border/50 bg-card/50"
                >
                  <stat.icon className="w-5 h-5 mx-auto mb-2 text-accent" strokeWidth={1.5} />
                  <div className="font-display text-lg text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground tracking-wide uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={buildingExterior}
                alt="Aravista Heights Building Exterior"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              {/* Decorative Frame */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-champagne/20 pointer-events-none" />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-charcoal text-cream p-6 shadow-xl"
            >
              <div className="font-display text-3xl">42</div>
              <div className="text-xs tracking-widest uppercase text-cream/70">Floors</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
