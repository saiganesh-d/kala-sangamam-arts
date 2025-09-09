import { Button } from "@/components/ui/button";
import { Phone, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-gold text-white px-4 py-2 rounded-full mb-6 shadow-gold">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Teachers with 30+ Years Experience</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
              <span className="text-maroon">Kalaa</span>{" "}
              <span className="text-saffron">Kuteer</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-muted-foreground mb-8 leading-relaxed">
              Master the ancient art forms of South India with expert guidance. 
              From Tanjore to Mysore paintings, discover your artistic heritage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-gradient-primary hover:shadow-elegant transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6">
                Join Art Classes
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-maroon text-maroon hover:bg-maroon hover:text-cream text-lg px-8 py-6 transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center md:justify-start gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-maroon">15+</div>
                <div className="text-sm text-muted-foreground">Art Forms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-saffron">500+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-terracotta">30+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Art Gallery Preview */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="w-full h-64 bg-gradient-primary rounded-2xl shadow-elegant opacity-90 transform rotate-3 hover:rotate-0 transition-transform duration-300"></div>
                <div className="w-full h-48 bg-gradient-gold rounded-2xl shadow-gold opacity-80 transform -rotate-2 hover:rotate-0 transition-transform duration-300"></div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="w-full h-48 bg-terracotta rounded-2xl shadow-elegant opacity-85 transform -rotate-3 hover:rotate-0 transition-transform duration-300"></div>
                <div className="w-full h-64 bg-royal-blue rounded-2xl shadow-elegant opacity-90 transform rotate-2 hover:rotate-0 transition-transform duration-300"></div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-saffron rounded-full opacity-40 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;