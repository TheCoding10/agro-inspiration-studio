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
            PREMIUM GENERAL
            <br />
            CONTRACTING
            <br />
            SERVICES
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Transform your space with expert kitchen & bath renovations, seamless additions, and professional commercial build-outs. Excellence in Rhode Island & Massachusetts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = '/contact'}
            >
              GET FREE QUOTE
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = 'tel:+17743294239'}
            >
              CALL NOW: (774) 329-4239
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;