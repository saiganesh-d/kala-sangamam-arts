import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Classes", href: "#classes" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-foreground">
                <span className="text-maroon">Kalaa</span>{" "}
                <span className="text-saffron">Kuteer</span>
              </h1>
              <p className="text-xs text-muted-foreground">Art Classes</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-foreground hover:text-maroon transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+919876543210" className="text-muted-foreground hover:text-maroon transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <a href="mailto:info@kalaakuteer.com" className="text-muted-foreground hover:text-maroon transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <Button size="sm" className="bg-gradient-primary hover:shadow-elegant">
              Join Classes
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-maroon transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-foreground hover:text-maroon transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-maroon transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="mailto:info@kalaakuteer.com" className="text-muted-foreground hover:text-maroon transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <Button size="sm" className="bg-gradient-primary">
                  Join Classes
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;