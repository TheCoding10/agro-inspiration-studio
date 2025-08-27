import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Construction equipment in action"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay with blue tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-darker/80 via-industrial-dark/70 to-industrial-dark/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            A FULL-SERVICE
            <br />
            CONTRACTOR SERVING
            <br />
            THE NORTHEAST
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            J.R. Vinagro offers turnkey demolition, recycling and sitework services on commercial, industrial, and public projects
          </p>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            OUR SERVICES
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;