import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";

const Gallery = () => {
  // Placeholder for art pieces - in a real implementation, these would be actual images
  const artPieces = [
    {
      title: "Tanjore Ganesha",
      category: "Tanjore Painting",
      description: "Traditional gold foil work depicting Lord Ganesha",
      featured: true
    },
    {
      title: "Kerala Mural Art",
      category: "Keralamural Painting", 
      description: "Ancient temple art with natural pigments",
      featured: false
    },
    {
      title: "Mysore Palace Art",
      category: "Mysore Painting",
      description: "Royal court style with intricate details",
      featured: true
    },
    {
      title: "Rajasthani Folk Art",
      category: "Rajasthani Relief",
      description: "Vibrant textured artwork with cultural themes",
      featured: false
    },
    {
      title: "Pichwai Painting",
      category: "Pichwai Art",
      description: "Devotional art depicting Krishna leelas",
      featured: true
    },
    {
      title: "Contemporary Fusion",
      category: "Modern Art",
      description: "Traditional techniques with modern themes",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-cream/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-terracotta border-terracotta">
            Art Gallery
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Student <span className="text-maroon">Masterpieces</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Witness the beautiful creations of our students as they master traditional South Indian art forms 
            under expert guidance. Each piece tells a story of cultural heritage and artistic excellence.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {artPieces.map((piece, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-500">
              {/* Art Piece Placeholder */}
              <div className={`aspect-square bg-gradient-${index % 2 === 0 ? 'primary' : 'gold'} relative overflow-hidden`}>
                {/* Gradient overlay with pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-black/20"></div>
                
                {/* Art style indicator */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-4 border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Eye className="w-8 h-8 text-white/80" />
                  </div>
                </div>

                {/* Featured badge */}
                {piece.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gold text-white shadow-gold">
                      Featured
                    </Badge>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-maroon/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h4 className="text-xl font-serif font-bold mb-2">{piece.title}</h4>
                    <p className="text-cream/90 text-sm mb-4">{piece.description}</p>
                    <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-maroon">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <div className="mb-3">
                  <Badge variant="outline" className="text-xs border-saffron text-saffron mb-2">
                    {piece.category}
                  </Badge>
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{piece.title}</h3>
                <p className="text-muted-foreground text-sm">{piece.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Ready to Create Your Masterpiece?
            </h3>
            <p className="text-cream/90 mb-8 max-w-2xl mx-auto">
              Join our weekend classes and discover the joy of traditional South Indian art. 
              Our experienced teachers will guide you from basics to mastery.
            </p>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-maroon text-lg px-8 py-6">
              Start Your Artistic Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;