import { Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Art Classes", href: "#classes" },
    { label: "Gallery", href: "#gallery" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  const artForms = [
    "Tanjore Paintings",
    "Keralamural Art", 
    "Mysore Paintings",
    "Rajasthani Relief",
    "Persian Art",
    "Resin Art"
  ];

  return (
    <footer className="bg-maroon text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Kalaa Kuteer
                </h3>
                <p className="text-cream/80 text-sm">Art Classes</p>
              </div>
            </div>
            <p className="text-cream/90 leading-relaxed mb-6">
              Preserving and teaching traditional South Indian art forms with over 30 years of experience. 
              Join us to discover your artistic heritage.
            </p>
            <div className="flex items-center gap-2 text-gold">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Teaching with passion since 1990</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-cream/80 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Art Forms */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Art Forms</h4>
            <ul className="space-y-2">
              {artForms.map((art, index) => (
                <li key={index} className="text-cream/80 text-sm">
                  {art}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <div>
                  <p className="text-cream font-medium text-sm">+91 98765 43210</p>
                  <p className="text-cream/70 text-xs">Call for immediate assistance</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <div>
                  <p className="text-cream font-medium text-sm">info@kalaakuteer.com</p>
                  <p className="text-cream/70 text-xs">Send us your queries</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <div>
                  <p className="text-cream font-medium text-sm">South Indian Arts Center</p>
                  <p className="text-cream/70 text-xs">Weekend Classes Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cream/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/70 text-sm text-center md:text-left">
              © 2024 Kalaa Kuteer. All rights reserved. Preserving traditional South Indian art forms.
            </p>
            <div className="flex items-center gap-4 text-cream/70 text-sm">
              <span>Teachers with 30+ Years Experience</span>
              <span className="hidden md:inline">•</span>
              <span>Weekend Classes Available</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;