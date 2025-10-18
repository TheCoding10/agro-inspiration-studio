import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import kitchenRenovationImage from "@/assets/kitchen-renovation.png";
import bathroomRemodelingImage from "@/assets/bathroom-remodeling.png";
import landClearingImage from "@/assets/land-clearing.jpg";
import commercialBuildoutsImage from "@/assets/commercial-buildouts.png";

const services = [
  {
    title: "Kitchen Renovations",
    description: "Transform your kitchen into a culinary masterpiece with custom cabinetry, luxury appliances, and designer finishes that reflect your personal style.",
    image: kitchenRenovationImage,
    features: ["Custom Cabinetry", "Premium Countertops", "Designer Lighting", "High-End Appliances"]
  },
  {
    title: "Bathroom Remodeling",
    description: "Create spa-like retreats with precision tile work, modern fixtures, and premium materials that combine luxury with functionality.",
    image: bathroomRemodelingImage,
    features: ["Luxury Fixtures", "Custom Tilework", "Heated Floors", "Smart Technology"]
  },
  {
    title: "General Contracting",
    description: "Complete home renovations, additions, and structural work managed by our expert team from concept to completion.",
    image: landClearingImage,
    features: ["Whole-Home Renovations", "Room Additions", "Structural Work", "Project Management"]
  },
  {
    title: "Commercial Build-Outs",
    description: "Professional restaurant, office, and retail spaces designed and built to enhance your business success and customer experience.",
    image: commercialBuildoutsImage,
    features: ["Restaurant Design", "Office Spaces", "Retail Build-Outs", "ADA Compliance"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-cream to-luxury-gray opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8 text-primary">
            Our Premium Services
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            From luxury kitchen renovations to complete home transformations, we deliver uncompromising quality and exceptional craftsmanship in every project.
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-bold px-8 py-4 transition-all duration-300 hover:shadow-lg font-inter"
            onClick={() => window.location.href = '/contact'}
          >
            Schedule Consultation
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-luxury hover:shadow-xl transition-all duration-500 hover:-translate-y-3 bg-card">
              <div className="relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/90 via-luxury-navy/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-playfair text-3xl font-bold text-white mb-2">{service.title}</h3>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="font-inter text-muted-foreground leading-relaxed mb-6 text-lg">
                  {service.description}
                </p>
                
                {/* Premium Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-primary font-medium">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="link" 
                  className="text-accent hover:text-accent/80 p-0 font-semibold font-inter text-lg group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Premium CTA Section */}
        <div className="mt-20 text-center bg-luxury-navy rounded-2xl p-12">
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h3>
          <p className="font-inter text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the Garcia & Peña difference. Schedule your complimentary design consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-4 font-inter"
              onClick={() => window.location.href = '/contact'}
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg"
              className="bg-white hover:bg-white/90 text-primary font-bold px-8 py-4 font-inter border-2 border-secondary"
              onClick={() => window.location.href = 'tel:+17743294239'}
            >
              📞 Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;