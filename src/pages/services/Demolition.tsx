import Header from "@/components/Header";
import Footer from "@/components/Footer";
import demolitionImg from "@/assets/demolition.jpg";

const Demolition = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Demolition Services</h1>
            
            <div className="mb-8">
              <img 
                src={demolitionImg} 
                alt="Demolition Services" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">Safe & Efficient Demolition</h2>
                <p className="text-muted-foreground mb-6">
                  Our demolition services combine precision, safety, and environmental responsibility. From small 
                  residential structures to large commercial buildings, we handle every project with meticulous 
                  planning and expert execution.
                </p>
                <p className="text-muted-foreground mb-6">
                  We prioritize material recovery and recycling, helping reduce waste and environmental impact 
                  while providing cost-effective solutions for our clients.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">Our Demolition Services</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Selective Demolition</h3>
                    <p className="text-muted-foreground">Precise removal of specific building components while preserving surrounding structures.</p>
                  </div>
                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Total Structure Demolition</h3>
                    <p className="text-muted-foreground">Complete building demolition with debris removal and site preparation.</p>
                  </div>
                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Interior Demolition</h3>
                    <p className="text-muted-foreground">Interior strip-outs and renovations with minimal disruption to occupied areas.</p>
                  </div>
                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Emergency Demolition</h3>
                    <p className="text-muted-foreground">24/7 emergency response for storm damage and structural failures.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-6">Safety & Environmental Responsibility</h2>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-primary bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">Hazardous Material Management</h3>
                    <p className="text-muted-foreground">Proper identification and safe removal of asbestos, lead, and other hazardous materials.</p>
                  </div>
                  <div className="p-4 border-l-4 border-primary bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">Dust & Noise Control</h3>
                    <p className="text-muted-foreground">Advanced suppression systems minimize environmental impact and neighborhood disruption.</p>
                  </div>
                  <div className="p-4 border-l-4 border-primary bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">Material Recycling</h3>
                    <p className="text-muted-foreground">Up to 90% of demolition materials are recovered and recycled through our processing facilities.</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Demolition;