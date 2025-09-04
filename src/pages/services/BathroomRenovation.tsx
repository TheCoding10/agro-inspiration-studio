import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BathroomRenovation = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Bathroom Renovation</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">Create Your Personal Spa Retreat</h2>
                <p className="text-muted-foreground mb-6">
                  Transform your bathroom into a luxurious retreat with Garcia & Peña's expert renovation services. 
                  From modern upgrades to complete overhauls, we deliver exceptional results that enhance both comfort and value.
                </p>
              </section>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Tile & Flooring</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Ceramic, porcelain, and natural stone</li>
                    <li>• Heated floor installation</li>
                    <li>• Waterproof membrane systems</li>
                    <li>• Custom tile patterns and designs</li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Fixtures & Plumbing</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• High-end vanities and mirrors</li>
                    <li>• Walk-in showers and soaking tubs</li>
                    <li>• Modern faucets and hardware</li>
                    <li>• Complete plumbing updates</li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Lighting & Ventilation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• LED recessed and vanity lighting</li>
                    <li>• Exhaust fan installation</li>
                    <li>• GFCI electrical updates</li>
                    <li>• Smart home integration</li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Accessibility Features</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• ADA compliant designs</li>
                    <li>• Grab bars and safety features</li>
                    <li>• Walk-in showers and low-threshold entries</li>
                    <li>• Comfort height fixtures</li>
                  </ul>
                </div>
              </div>

              <section className="text-center bg-muted p-12 rounded-lg">
                <h2 className="text-2xl font-semibold text-primary mb-4">Start Your Bathroom Renovation</h2>
                <p className="text-muted-foreground mb-8">
                  Ready to upgrade your bathroom? Contact us for a personalized consultation and detailed project estimate.
                </p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Get Free Estimate
                </button>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BathroomRenovation;