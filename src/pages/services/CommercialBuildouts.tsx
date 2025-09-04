import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CommercialBuildouts = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Commercial Build-Outs</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">Professional Commercial Spaces</h2>
                <p className="text-muted-foreground mb-6">
                  Garcia & Peña delivers exceptional commercial build-out services for businesses across Rhode Island and Massachusetts. 
                  From retail spaces to office complexes, we create professional environments that enhance productivity and customer experience.
                </p>
              </section>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Office Spaces</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Open concept and private offices</li>
                    <li>• Conference rooms and meeting spaces</li>
                    <li>• Reception and lobby areas</li>
                    <li>• Break rooms and kitchenettes</li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Retail Environments</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Storefront design and layout</li>
                    <li>• Custom fixtures and displays</li>
                    <li>• Checkout and service areas</li>
                    <li>• Storage and inventory spaces</li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Restaurant & Food Service</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Commercial kitchen build-outs</li>
                    <li>• Dining room design and construction</li>
                    <li>• Bar and service areas</li>
                    <li>• Health department compliance</li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Medical & Professional</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Medical office suites</li>
                    <li>• Dental and veterinary clinics</li>
                    <li>• Salon and spa facilities</li>
                    <li>• Professional service offices</li>
                  </ul>
                </div>
              </div>

              <section className="text-center bg-muted p-12 rounded-lg">
                <h2 className="text-2xl font-semibold text-primary mb-4">Ready to Build Your Business Space?</h2>
                <p className="text-muted-foreground mb-8">
                  Let Garcia & Peña create a commercial space that reflects your brand and supports your business goals. 
                  We handle all aspects from design to final inspection.
                </p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Request Commercial Quote
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

export default CommercialBuildouts;