import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Garcia & Peña transformed our outdated kitchen into a stunning culinary masterpiece. Their attention to detail and commitment to quality exceeded our expectations at every turn.",
    author: "Michael & Sarah Johnson",
    company: "Homeowners, Providence",
    project: "Kitchen Renovation",
    rating: 5,
  },
  {
    quote: "From concept to completion, their team demonstrated unparalleled professionalism. Our bathroom renovation was completed on time and within budget, with results that feel like a luxury spa.",
    author: "David Chen",
    company: "Restaurant Owner, Newport",
    project: "Commercial Build-Out",
    rating: 5,
  },
  {
    quote: "Working with Garcia & Peña was an absolute pleasure. They listened to our vision and brought it to life with craftsmanship that speaks for itself. We couldn't be happier with our home addition.",
    author: "Jennifer Martinez",
    company: "Homeowner, Warwick",
    project: "Home Addition",
    rating: 5,
  },
];

const PremiumTestimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-luxury-cream to-background relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8 text-primary">
            What Our Partners Say
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover why discerning clients choose Garcia & Peña for their most important renovation projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-0 shadow-luxury hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              {/* Elegant accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent"></div>
              
              <CardContent className="p-8">
                {/* Star Rating */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-inter text-lg text-muted-foreground leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Information */}
                <div className="border-t pt-6">
                  <div className="font-playfair text-xl font-semibold text-primary mb-2">
                    {testimonial.author}
                  </div>
                  <div className="font-inter text-sm text-muted-foreground mb-1">
                    {testimonial.company}
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                    {testimonial.project}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Premium CTA */}
        <div className="text-center bg-luxury-navy rounded-3xl p-12 shadow-luxury">
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Family of Satisfied Clients
          </h3>
          <p className="font-inter text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the Garcia & Peña difference. Let's discuss your vision and create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 font-inter transition-all duration-300 hover:shadow-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 font-inter transition-all duration-300"
              onClick={() => window.location.href = '/testimonials/client-reviews'}
            >
              Read More Reviews
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumTestimonials;