import { motion } from 'framer-motion';

const footerLinks = {
  property: [
    { label: 'Overview', href: '#property' },
    { label: 'Features', href: '#highlights' },
    { label: 'Floor Plans', href: '#floorplans' },
    { label: 'Gallery', href: '#gallery' },
  ],
  amenities: [
    { label: 'Amenities', href: '#amenities' },
    { label: 'Location', href: '#location' },
    { label: 'Virtual Tour', href: '#' },
    { label: 'Brochure', href: '#' },
  ],
  contact: [
    { label: 'Schedule Tour', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Use', href: '#' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-charcoal pt-20 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl text-cream mb-4">
              Aravista Heights
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Where Luxury Meets Architectural Excellence. Experience the pinnacle of contemporary living.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs text-cream/40 hover:text-champagne transition-colors tracking-wider uppercase"
                >
                  {social.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs text-cream/40 tracking-widest uppercase mb-6">
              The Property
            </h4>
            <ul className="space-y-3">
              {footerLinks.property.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-champagne transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs text-cream/40 tracking-widest uppercase mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.amenities.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-champagne transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs text-cream/40 tracking-widest uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-champagne transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cream/10 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/40">
          <p>© 2024 Aravista Heights. All rights reserved.</p>
          <p className="tracking-wider">
            A Development by <span className="text-champagne">Luxury Estates Group</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
