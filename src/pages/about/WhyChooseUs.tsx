import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Why Choose Garcia & Peña</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">The Garcia & Peña Advantage</h2>
                <p className="text-muted-foreground mb-6">
                  When you choose Garcia & Peña, you're partnering with a team that brings 
                  cutting-edge technology, and an unwavering commitment to excellence.
                </p>
              </section>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Expertise & Quality</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Professional construction and excavation services</li>
                    <li>• Successful projects completed across New England</li>
                    <li>• Certified professionals and operators</li>
                    <li>• Expertise across multiple industries</li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Safety Excellence</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Outstanding safety record</li>
                    <li>• Comprehensive safety training programs</li>
                    <li>• Industry-leading safety protocols</li>
                    <li>• Regular equipment inspections</li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Advanced Technology</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• GPS-equipped machinery for precision</li>
                    <li>• Drone surveying and monitoring</li>
                    <li>• Real-time project tracking</li>
                    <li>• Environmental monitoring systems</li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Customer Commitment</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 24/7 project communication</li>
                    <li>• On-time project delivery</li>
                    <li>• Transparent pricing structure</li>
                    <li>• Dedicated project managers</li>
                  </ul>
                </div>
              </div>

              <section className="text-center bg-muted p-12 rounded-lg">
                <h2 className="text-2xl font-semibold text-primary mb-4">Ready to Experience the Difference?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join hundreds of satisfied clients who have trusted Garcia & Peña with their most important projects. 
                  Let us show you why we're the preferred choice for construction and excavation services.
                </p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Get Your Free Quote Today
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

export default WhyChooseUs;