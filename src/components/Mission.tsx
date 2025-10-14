import { Button } from "@/components/ui/button";

const Mission = () => {
  return (
    <section className="py-20 bg-luxury-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Challenge Accepted Graphic */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-4 bg-secondary/10 rounded-full px-8 py-4 border border-secondary/30">
              <span className="text-2xl font-bold text-luxury-navy">CHALLENGE</span>
              <div className="w-12 h-12 bg-luxury-navy rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-white ml-1"></div>
              </div>
              <span className="text-2xl font-bold text-luxury-navy">ACCEPTED</span>
            </div>
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
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-luxury-navy font-bold px-8 py-4"
          >
            About Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Mission;