import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import siteDevelopmentImage from "@/assets/site-development.jpg";
import demolitionImage from "@/assets/demolition.jpg";
import landClearingImage from "@/assets/land-clearing.jpg";
import crushingImage from "@/assets/crushing.jpg";
import recyclingImage from "@/assets/recycling.jpg";
import materialSalesImage from "@/assets/material-sales.jpg";

const services = [
  {
    title: "Kitchen Remodeling",
    description: "Custom cabinetry, premium countertops, and complete kitchen transformations with expert craftsmanship.",
    image: siteDevelopmentImage,
  },
  {
    title: "Bathroom Renovations",
    description: "Luxury spa-like bathrooms with precision tile work, custom fixtures, and waterproofing expertise.",
    image: demolitionImage,
  },
  {
    title: "Home Additions",
    description: "Seamless room additions, second stories, and structural expansions that blend with your home.",
    image: landClearingImage,
  },
  {
    title: "Commercial Build-Outs",
    description: "Professional restaurant, office, and retail spaces delivered on time and within budget.",
    image: crushingImage,
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Premium General Contracting Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Transform your space with expert kitchen & bath renovations, seamless additions, and professional commercial build-outs. Over 15 years of excellence in Rhode Island & Massachusetts.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            See All Services
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-darker/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <Button 
                  variant="link" 
                  className="text-primary hover:text-primary/80 p-0 font-semibold"
                >
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;