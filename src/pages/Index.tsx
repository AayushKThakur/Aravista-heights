import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { PropertyOverview } from '@/components/PropertyOverview';
import { KeyHighlights } from '@/components/KeyHighlights';
import { ImageGallery } from '@/components/ImageGallery';
import { FloorPlans } from '@/components/FloorPlans';
import { Amenities } from '@/components/Amenities';
import { NeighborhoodMap } from '@/components/NeighborhoodMap';
import { Testimonials } from '@/components/Testimonials';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <PropertyOverview />
      <KeyHighlights />
      <ImageGallery />
      <FloorPlans />
      <Amenities />
      <NeighborhoodMap />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
