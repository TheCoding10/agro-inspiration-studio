import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HomeAdditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Home Additions</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">Expand Your Living Space</h2>
                <p className="text-muted-foreground mb-6">
                  Growing family? Need more space? Garcia & Peña specializes in seamless home additions that blend 
                  perfectly with your existing home's architecture while adding valuable square footage and functionality.
                </p>
              </section>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Room Additions</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Master bedroom suites</li>
                    <li>• Family room extensions</li>
                    <li>• Home office spaces</li>
                    <li>• In-law apartments</li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Second Story Additions</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Complete second floor construction</li>
                    <li>• Structural engineering and permits</li>
                    <li>• Matching exterior materials</li>
                    <li>• Staircase design and installation</li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Garage & Storage</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Attached and detached garages</li>
                    <li>• Workshop and storage spaces</li>
                    <li>• Above-garage living spaces</li>
                    <li>• Mudrooms and entryways</li>
                  </ul>
                </div>

                <div className="p-6 bg-card rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-primary mb-4">Outdoor Living</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Sunrooms and three-season porches</li>
                    <li>• Deck and patio extensions</li>
                    <li>• Screened-in porches</li>
                    <li>• Outdoor kitchens and fireplaces</li>
                  </ul>
                </div>
              </div>

              <section className="text-center bg-muted p-12 rounded-lg">
                <h2 className="text-2xl font-semibold text-primary mb-4">Plan Your Home Addition</h2>
                <p className="text-muted-foreground mb-8">
                  Let's discuss how we can expand your home to meet your family's growing needs. 
                  We handle everything from design to permits to final construction.
                </p>
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Schedule Consultation
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

export default HomeAdditions;