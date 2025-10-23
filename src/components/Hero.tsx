import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";
import textLogo from "@/assets/garcia-pena-text-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury kitchen renovation showcase"
          className="w-full h-full object-cover"
        />
        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-navy/90 via-luxury-navy/75 to-luxury-charcoal/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-4 animate-fade-in">
            <img 
              src={textLogo} 
              alt="Garcia & Peña General Contracting"
              className="w-full max-w-xl mx-auto drop-shadow-2xl opacity-95 hover:opacity-100 transition-all duration-300"
            />
          </div>
          
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
            Transforming Spaces.
            <br />
            <span className="text-secondary font-script text-5xl md:text-6xl lg:text-7xl">Exceeding Expectations.</span>
          </h1>
          
          <p className="font-inter text-xl md:text-2xl mb-12 text-gray-200 leading-relaxed max-w-4xl mx-auto font-light">
            Premium kitchen & bath renovations with uncompromising craftsmanship. 
            Where vision meets expertise to create extraordinary spaces that inspire daily living.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-10 py-5 text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl font-inter tracking-wide"
              onClick={() => window.location.href = '/contact'}
            >
              SCHEDULE DESIGN CONSULTATION
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-5 text-lg transition-all duration-500 transform hover:scale-105 backdrop-blur-sm font-inter tracking-wide"
              onClick={() => window.location.href = '/portfolio/gallery'}
            >
              VIEW OUR PORTFOLIO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;