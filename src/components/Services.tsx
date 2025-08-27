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
    title: "Site Development",
    description: "Our site development division delivers heavy civil, energy, and utility projects of the highest quality for both public and private clients.",
    image: siteDevelopmentImage,
  },
  {
    title: "Demolition & Abatement",
    description: "Our experienced Demolition and Asbestos Abatement teams are fully trained and certified to contain and address hazardous environments prior to removal.",
    image: demolitionImage,
  },
  {
    title: "Land Clearing",
    description: "We offer land clearing services including brush and stump removal, rock breaking and more, while accounting for underground utilities, overhead wires, and erosion control.",
    image: landClearingImage,
  },
  {
    title: "Crushing",
    description: "Our crushing operations utilize more than 40 pieces of specialized equipment to process aggregate, road gravel, asphalt and concrete materials, and more.",
    image: crushingImage,
  },
  {
    title: "C&D Recycling",
    description: "Our state-of-the-art C&D processing facility is equipped to receive residential and commercial debris for recycling and repurposing, helping preserve our environment.",
    image: recyclingImage,
  },
  {
    title: "Material Sales",
    description: "We offer high-quality stone and aggregate products for sale, as well as recycled asphalt products (RAP), sand, and seasonal products including road salt.",
    image: materialSalesImage,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Providing Contracting & Sustainability Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Our combined services cover every stage of project delivery, from demolition to development. We engineer value by recycling and disposing of materials to reduce costs and streamline production.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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