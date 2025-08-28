import Header from "@/components/Header";
import Footer from "@/components/Footer";

const History = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Our History</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">Building Excellence Since 2000</h2>
                <p className="text-muted-foreground mb-6">
                  Garcia & Peña was founded with a simple vision: to provide exceptional construction and 
                  excavation services that exceed client expectations. What started as a small family business 
                  has grown into one of South Florida's most trusted contractors.
                </p>
              </section>

              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-8 py-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">2000 - The Beginning</h3>
                  <p className="text-muted-foreground">
                    Founded by partners Garcia and Peña with a single excavator and a commitment to quality workmanship.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-8 py-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">2005 - First Major Contract</h3>
                  <p className="text-muted-foreground">
                    Secured our first major commercial development project, establishing our reputation in the industry.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-8 py-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">2010 - Fleet Expansion</h3>
                  <p className="text-muted-foreground">
                    Expanded our equipment fleet to handle larger projects and multiple job sites simultaneously.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-8 py-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">2015 - Environmental Focus</h3>
                  <p className="text-muted-foreground">
                    Launched our environmental division, specializing in sustainable construction practices and material recycling.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-8 py-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">2020 - Technology Integration</h3>
                  <p className="text-muted-foreground">
                    Integrated advanced GPS and drone technology for precision excavation and project monitoring.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-8 py-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">2024 - Industry Leader</h3>
                  <p className="text-muted-foreground">
                    Recognized as a leading contractor with over 1,000 successful projects and zero safety incidents in the past two years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default History;