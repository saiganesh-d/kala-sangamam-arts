import { Button } from "@/components/ui/button";
import { Phone, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-sanctum flex items-center overflow-hidden">
      {/* Temple Architecture Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 35px,
            hsl(var(--temple-gold) / 0.1) 35px,
            hsl(var(--temple-gold) / 0.1) 37px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 35px,
            hsl(var(--sacred-maroon) / 0.1) 35px,
            hsl(var(--sacred-maroon) / 0.1) 37px
          )`
        }}></div>
      </div>

      {/* Temple Pillars */}
      <div className="absolute left-0 top-0 h-full w-4 bg-gradient-temple opacity-20"></div>
      <div className="absolute right-0 top-0 h-full w-4 bg-gradient-temple opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-divine text-white px-4 py-2 rounded-full mb-6 shadow-divine">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Sacred Traditions • Expert Teachers • 30+ Years</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
              <span className="text-sacred-maroon">Kalaa</span>{" "}
              <span className="text-temple-gold">Kuteer</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-muted-foreground mb-8 leading-relaxed">
              Sacred art forms of ancient South India await your reverent touch. 
              From divine Tanjore to mystical Mysore paintings, embark on a spiritual artistic journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-gradient-temple hover:shadow-temple transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6 text-sacred-cream">
                Begin Sacred Journey
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-sacred-maroon text-sacred-maroon hover:bg-sacred-maroon hover:text-sacred-cream text-lg px-8 py-6 transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Connect with Masters
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center md:justify-start gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-sacred-maroon">15+</div>
                <div className="text-sm text-muted-foreground">Sacred Arts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-temple-gold">500+</div>
                <div className="text-sm text-muted-foreground">Devotees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-divine-saffron">30+</div>
                <div className="text-sm text-muted-foreground">Years of Tradition</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Art Gallery Preview */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="w-full h-64 bg-gradient-temple rounded-2xl shadow-temple opacity-90 transform rotate-3 hover:rotate-0 transition-transform duration-300 border border-temple-gold/20"></div>
                <div className="w-full h-48 bg-gradient-divine rounded-2xl shadow-divine opacity-80 transform -rotate-2 hover:rotate-0 transition-transform duration-300 border border-sacred-maroon/20"></div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="w-full h-48 bg-temple-stone rounded-2xl shadow-temple opacity-85 transform -rotate-3 hover:rotate-0 transition-transform duration-300 border border-temple-amber/20"></div>
                <div className="w-full h-64 bg-sacred-bronze rounded-2xl shadow-temple opacity-90 transform rotate-2 hover:rotate-0 transition-transform duration-300 border border-divine-red/20"></div>
              </div>
            </div>
            
            {/* Temple Ornamental Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-temple-gold rounded-full opacity-40 animate-pulse shadow-divine"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-divine-saffron rounded-full opacity-50 animate-bounce shadow-divine"></div>
            <div className="absolute top-1/2 -right-8 w-8 h-8 bg-sacred-maroon rounded-full opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;