import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Star, Users } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: "+91 98765 43210",
      subtext: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email", 
      content: "info@kalaakuteer.com",
      subtext: "Send us your queries"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      content: "South Indian Arts Center",
      subtext: "Visit our studio"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Class Timings",
      content: "Weekend Classes",
      subtext: "Saturday & Sunday"
    }
  ];

  const features = [
    { icon: <Star className="w-4 h-4" />, text: "30+ Years Experience" },
    { icon: <Users className="w-4 h-4" />, text: "Small Batch Sizes" },
    { icon: <Palette className="w-4 h-4" />, text: "15+ Art Forms" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-maroon border-maroon">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Start Your <span className="text-saffron">Artistic Journey</span> Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to learn traditional South Indian art forms? Contact us to join our weekend classes 
            and discover the beauty of cultural heritage through art.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <Card className="shadow-elegant border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-foreground">Join Our Art Classes</CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                  <Input placeholder="Enter your full name" className="border-border/50 focus:border-saffron" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                  <Input placeholder="Enter your phone number" className="border-border/50 focus:border-saffron" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                <Input type="email" placeholder="Enter your email address" className="border-border/50 focus:border-saffron" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Interested Art Form</label>
                <Input placeholder="e.g., Tanjore Painting, Mysore Art, etc." className="border-border/50 focus:border-saffron" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your artistic interests and any questions you have..."
                  className="border-border/50 focus:border-saffron min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-gradient-primary hover:shadow-elegant text-lg py-6">
                Send Inquiry
              </Button>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                {features.map((feature, index) => (
                  <Badge key={index} variant="outline" className="border-saffron text-saffron">
                    {feature.icon}
                    <span className="ml-1">{feature.text}</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-hero">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-gold rounded-full text-white group-hover:shadow-gold transition-all duration-300 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-maroon font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.subtext}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action Card */}
            <Card className="bg-gradient-primary text-white shadow-elegant">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-serif font-bold mb-4">
                  Ready to Begin?
                </h3>
                <p className="text-cream/90 mb-6 leading-relaxed">
                  Join hundreds of students who have discovered the joy of traditional South Indian art. 
                  Our expert teachers with 30+ years of experience are waiting to guide you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-maroon">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-maroon">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* QR Code Info */}
            <Card className="bg-cream border-0">
              <CardContent className="p-6 text-center">
                <h4 className="font-serif font-semibold text-foreground mb-2">Scan to Connect</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Scan the QR code from our flyer to get instant access to our contact details and class schedules.
                </p>
                <div className="w-24 h-24 bg-gradient-primary rounded-lg mx-auto flex items-center justify-center">
                  <div className="text-white text-xs text-center">QR<br/>Code<br/>Here</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const Palette = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h.01a1 1 0 100-2H10zm3 0a1 1 0 100 2h.01a1 1 0 100-2H13z" clipRule="evenodd" />
  </svg>
);

export default Contact;