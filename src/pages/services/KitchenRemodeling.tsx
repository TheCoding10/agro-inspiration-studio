import Header from "@/components/Header";
import Footer from "@/components/Footer";

const KitchenRemodeling = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Kitchen Remodeling</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">Transform Your Kitchen Into Your Dream Space</h2>
                <p className="text-muted-foreground mb-6">
                  Garcia & Peña specializes in complete kitchen renovations that combine functionality with stunning design. 
                  Whether you're looking for a modern makeover or a classic kitchen design, our expert team brings your vision to life.
                </p>
              </section>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Custom Cabinetry</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Custom-built cabinets to maximize storage</li>
                    <li>• Premium materials and finishes</li>
                    <li>• Soft-close doors and drawers</li>
                    <li>• Pull-out shelves and organizers</li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Premium Countertops</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Quartz, granite, and marble options</li>
                    <li>• Professional installation and sealing</li>
                    <li>• Custom edge profiles and designs</li>
                    <li>• Undermount and integrated sinks</li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Professional Installation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Licensed electricians and plumbers</li>
                    <li>• Appliance installation and connection</li>
                    <li>• Flooring and tile work</li>
                    <li>• Paint and finishing touches</li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Design Consultation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 3D design renderings</li>
                    <li>• Material selection guidance</li>
                    <li>• Layout optimization</li>
                    <li>• Budget planning assistance</li>
                  </ul>
                </div>
              </div>

              <section className="text-center bg-muted p-12 rounded-lg">
                <h2 className="text-2xl font-semibold text-primary mb-4">Ready to Remodel Your Kitchen?</h2>
                <p className="text-muted-foreground mb-8">
                  Contact Garcia & Peña today for a free consultation and estimate on your kitchen renovation project.
                </p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Schedule Free Consultation
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

export default KitchenRemodeling;