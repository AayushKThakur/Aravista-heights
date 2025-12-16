import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ZoomIn, ZoomOut } from 'lucide-react';

import floorplan2bhk from '@/assets/floorplan-2bhk.jpg';
import floorplan3bhk from '@/assets/floorplan-3bhk.jpg';
import floorplanPenthouse from '@/assets/floorplan-penthouse.jpg';

const floorPlans = [
  {
    id: '2bhk',
    name: '2 BHK',
    area: '1,850 Sq. Ft.',
    image: floorplan2bhk,
    features: ['2 Bedrooms', '2.5 Bathrooms', 'Study', 'Balcony'],
  },
  {
    id: '3bhk',
    name: '3 BHK',
    area: '2,650 Sq. Ft.',
    image: floorplan3bhk,
    features: ['3 Bedrooms', '3.5 Bathrooms', 'Family Room', 'Large Terrace'],
  },
  {
    id: 'penthouse',
    name: 'Penthouse',
    area: '5,200 Sq. Ft.',
    image: floorplanPenthouse,
    features: ['4 Bedrooms', '5 Bathrooms', 'Private Pool', 'Double Height Living'],
  },
];

export const FloorPlans = () => {
  const [activeTab, setActiveTab] = useState('penthouse');
  const [isZoomed, setIsZoomed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const activePlan = floorPlans.find((plan) => plan.id === activeTab)!;

  return (
    <section id="floorplans" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="heading-section text-muted-foreground mb-4 block">
            Residence Layouts
          </span>
          <h2 className="heading-editorial text-foreground">
            Thoughtfully Designed Spaces
          </h2>
        </motion.div>

        <div ref={ref}>
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-2 mb-12"
          >
            {floorPlans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setActiveTab(plan.id)}
                className={`px-6 py-3 text-sm tracking-widest uppercase transition-all duration-300 ${
                  activeTab === plan.id
                    ? 'bg-charcoal text-cream'
                    : 'bg-transparent text-foreground hover:bg-muted border border-border'
                }`}
              >
                {plan.name}
              </button>
            ))}
          </motion.div>

          {/* Floor Plan Display */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Plan Image */}
            <div className="lg:col-span-2 relative">
              <div
                className={`relative overflow-hidden bg-background border border-border cursor-pointer transition-transform duration-500 ${
                  isZoomed ? 'scale-110' : ''
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <img
                  src={activePlan.image}
                  alt={`${activePlan.name} Floor Plan`}
                  className="w-full h-auto object-contain p-4"
                />
                
                {/* Zoom Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(!isZoomed);
                  }}
                  className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-charcoal text-cream hover:bg-accent transition-colors"
                >
                  {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
                </button>
              </div>
            </div>

            {/* Plan Details */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-3xl text-foreground mb-2">
                  {activePlan.name}
                </h3>
                <div className="text-2xl text-accent font-display">
                  {activePlan.area}
                </div>
              </div>

              <div className="h-px bg-border" />

              <div>
                <h4 className="heading-section text-muted-foreground mb-4">
                  Key Features
                </h4>
                <ul className="space-y-3">
                  {activePlan.features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-accent" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="h-px bg-border" />

              <button className="w-full py-4 bg-charcoal text-cream text-sm tracking-widest uppercase hover:bg-accent transition-colors">
                Download Floor Plan
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
