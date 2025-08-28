import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteDevelopmentImg from "@/assets/site-development.jpg";

const SiteDevelopment = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Site Development</h1>
            
            <div className="mb-8">
              <img 
                src={siteDevelopmentImg} 
                alt="Site Development" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">Complete Site Preparation Services</h2>
                <p className="text-muted-foreground mb-6">
                  Our site development services transform raw land into construction-ready sites. From initial 
                  site evaluation to final grading, we handle every aspect of site preparation with precision 
                  and efficiency.
                </p>
                <p className="text-muted-foreground mb-6">
                  With our experienced team and modern equipment, we ensure your project site meets all 
                  specifications and regulatory requirements while staying on schedule and within budget.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">Our Services Include</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Site Clearing</h3>
                    <p className="text-muted-foreground">Complete removal of vegetation, debris, and obstacles.</p>
                  </div>
                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Grading & Leveling</h3>
                    <p className="text-muted-foreground">Precise grading to achieve optimal drainage and foundation preparation.</p>
                  </div>
                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Utility Installation</h3>
                    <p className="text-muted-foreground">Underground utility preparation and installation services.</p>
                  </div>
                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Road Construction</h3>
                    <p className="text-muted-foreground">Access road construction and site circulation planning.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-6">Why Choose Our Site Development Services</h2>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-primary bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">Comprehensive Planning</h3>
                    <p className="text-muted-foreground">We work closely with engineers and architects to ensure optimal site layout.</p>
                  </div>
                  <div className="p-4 border-l-4 border-primary bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">Environmental Compliance</h3>
                    <p className="text-muted-foreground">All work meets environmental regulations and sustainability standards.</p>
                  </div>
                  <div className="p-4 border-l-4 border-primary bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">Advanced Equipment</h3>
                    <p className="text-muted-foreground">State-of-the-art machinery ensures precision and efficiency.</p>
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

export default SiteDevelopment;