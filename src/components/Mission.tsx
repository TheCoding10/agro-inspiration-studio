import { Button } from "@/components/ui/button";
import gpLogo from "@/assets/gp-logo.png";

const Mission = () => {
  return (
    <section className="py-20 bg-luxury-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* GP Logo */}
          <div className="mb-12">
            <img 
              src={gpLogo} 
              alt="Garcia & Peña General Contracting logo" 
              className="h-72 mx-auto"
            />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Excellence in Every Project
          </h2>
          
          <div className="space-y-6 text-xl text-white leading-relaxed mb-12">
            <p>
              Welcome to Garcia & Peña General Contracting! We serve Rhode Island and Massachusetts 
              with premium construction services, transforming homes and businesses with 
              unmatched craftsmanship and professional integrity.
            </p>
            <p>
              What started as a passion for quality construction has grown into a full-service contracting business 
              that helps property owners achieve their vision through expert renovation and construction services.
            </p>
          </div>

          <Button 
            size="lg"
            className="bg-white hover:bg-white/90 text-primary font-bold px-8 py-4 border-2 border-secondary"
          >
            About Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Mission;