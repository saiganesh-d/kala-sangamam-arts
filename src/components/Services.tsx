import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Brush, Sparkles, Heart, Clock, Users } from "lucide-react";

const Services = () => {
  const artForms = [
    {
      title: "Tanjore Paintings",
      description: "Traditional South Indian art with gold foil work and rich colors",
      icon: <Sparkles className="w-6 h-6" />,
      level: "Beginner to Advanced",
      duration: "Weekend Classes"
    },
    {
      title: "Keralamural Paintings", 
      description: "Ancient Kerala mural art techniques with natural pigments",
      icon: <Brush className="w-6 h-6" />,
      level: "Intermediate",
      duration: "Weekend Classes"
    },
    {
      title: "Mysore Paintings",
      description: "Royal court art style with intricate details and gold work",
      icon: <Palette className="w-6 h-6" />,
      level: "Beginner to Advanced", 
      duration: "Weekend Classes"
    },
    {
      title: "Rajasthani Relief Paintings",
      description: "Textured paintings with raised elements and vibrant themes",
      icon: <Heart className="w-6 h-6" />,
      level: "Intermediate",
      duration: "Weekend Classes"
    },
    {
      title: "Oil & Acrylic Paintings",
      description: "Modern painting techniques with traditional Indian subjects",
      icon: <Brush className="w-6 h-6" />,
      level: "All Levels",
      duration: "Weekend Classes"
    },
    {
      title: "Fabric & Abstract Art",
      description: "Contemporary art forms including fabric painting and abstracts",
      icon: <Sparkles className="w-6 h-6" />,
      level: "Beginner",
      duration: "Weekend Classes"
    }
  ];

  const additionalServices = [
    "Pichwai Paintings", "Persian Art", "Resin Art", "Terracotta Work", 
    "Pot Paintings", "Textured Paintings", "Hand Embroidery", "Knitting & Crochet"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-saffron border-saffron">
            Our Art Classes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Weekend Classes for <span className="text-maroon">Traditional Arts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the rich heritage of South Indian art forms through hands-on learning 
            with our experienced masters who have dedicated over three decades to preserving these traditions.
          </p>
        </div>

        {/* Main Art Forms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {artForms.map((art, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-gradient-gold rounded-full text-white group-hover:shadow-gold transition-all duration-300">
                    {art.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl font-serif text-foreground group-hover:text-maroon transition-colors">
                      {art.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {art.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs border-saffron text-saffron">
                    <Clock className="w-3 h-3 mr-1" />
                    {art.duration}
                  </Badge>
                  <Badge variant="outline" className="text-xs border-terracotta text-terracotta">
                    <Users className="w-3 h-3 mr-1" />
                    {art.level}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              And Much More...
            </h3>
            <p className="text-muted-foreground">
              Explore additional art forms and crafts in our comprehensive program
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {additionalServices.map((service, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-white/80 text-maroon border border-maroon/20 hover:bg-maroon hover:text-white transition-all duration-300 cursor-default"
              >
                {service}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;