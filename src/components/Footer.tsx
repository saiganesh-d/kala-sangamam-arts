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
    <footer className="bg-sacred-maroon text-white relative overflow-hidden">
      {/* Temple Architecture Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            hsl(var(--temple-gold) / 0.1) 20px,
            hsl(var(--temple-gold) / 0.1) 22px
          )`
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sacred Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-divine rounded-full flex items-center justify-center border border-temple-gold/30">
                <span className="text-sacred-cream font-bold text-xl">॥</span>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  Kalaa Kuteer
                </h3>
                <p className="text-sacred-cream/80 text-sm">Sacred Art Temple</p>
              </div>
            </div>
            <p className="text-sacred-cream/90 leading-relaxed mb-6">
              Preserving and teaching sacred traditional South Indian art forms with divine reverence and over 30 years of devoted experience.
            </p>
            <div className="flex items-center gap-2 text-temple-gold">
              <Heart className="w-4 h-4" />
              <span className="text-sm">Teaching with devotion since 1990</span>
            </div>
          </div>

          {/* Sacred Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-temple-gold">Sacred Paths</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sacred-cream/80 hover:text-temple-gold transition-colors duration-200 text-sm border-b border-transparent hover:border-temple-gold/30"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Divine Art Forms */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-temple-gold">Divine Arts</h4>
            <ul className="space-y-2">
              {artForms.map((art, index) => (
                <li key={index} className="text-sacred-cream/80 text-sm">
                  {art}
                </li>
              ))}
            </ul>
          </div>

          {/* Temple Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-temple-gold">Temple Reach</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-temple-gold flex-shrink-0" />
                <div>
                  <p className="text-sacred-cream font-medium text-sm">+91 98765 43210</p>
                  <p className="text-sacred-cream/70 text-xs">Connect with Masters</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-temple-gold flex-shrink-0" />
                <div>
                  <p className="text-sacred-cream font-medium text-sm">info@kalaakuteer.com</p>
                  <p className="text-sacred-cream/70 text-xs">Send your sacred queries</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-temple-gold flex-shrink-0" />
                <div>
                  <p className="text-sacred-cream font-medium text-sm">Sacred Arts Temple</p>
                  <p className="text-sacred-cream/70 text-xs">Weekend Sacred Sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sacred Bottom Section */}
        <div className="border-t border-temple-gold/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sacred-cream/70 text-sm text-center md:text-left">
              © 2024 Kalaa Kuteer. All rights reserved. Preserving sacred South Indian art traditions with devotion.
            </p>
            <div className="flex items-center gap-4 text-sacred-cream/70 text-sm">
              <span>Masters with 30+ Years Sacred Practice</span>
              <span className="hidden md:inline">•</span>
              <span>Weekend Temple Sessions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;