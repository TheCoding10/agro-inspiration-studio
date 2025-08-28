import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Safety = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Safety First</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">Our Safety Commitment</h2>
                <p className="text-muted-foreground mb-6">
                  At Garcia & Peña, safety is not just a priority—it's our core value. We maintain a zero-incident 
                  safety culture that protects our employees, clients, and the communities we serve.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our comprehensive safety program exceeds industry standards and is continuously updated to 
                  incorporate the latest safety protocols and best practices.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">Safety Statistics</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">0</div>
                    <div className="text-muted-foreground">Lost Time Incidents</div>
                    <div className="text-sm text-muted-foreground">Last 2 years</div>
                  </div>
                  <div className="text-center p-6 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-muted-foreground">Safety Training</div>
                    <div className="text-sm text-muted-foreground">Completion Rate</div>
                  </div>
                  <div className="text-center p-6 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-muted-foreground">Safety Monitoring</div>
                    <div className="text-sm text-muted-foreground">On all job sites</div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-6">Safety Protocols</h2>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-primary bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">Daily Safety Briefings</h3>
                    <p className="text-muted-foreground">All crew members participate in daily safety meetings before work begins.</p>
                  </div>
                  <div className="p-4 border-l-4 border-primary bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">Equipment Inspections</h3>
                    <p className="text-muted-foreground">Comprehensive equipment checks ensure all machinery operates safely.</p>
                  </div>
                  <div className="p-4 border-l-4 border-primary bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">Personal Protective Equipment</h3>
                    <p className="text-muted-foreground">Industry-leading PPE is mandatory for all personnel on job sites.</p>
                  </div>
                  <div className="p-4 border-l-4 border-primary bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">Continuous Training</h3>
                    <p className="text-muted-foreground">Regular safety education keeps our team current on best practices.</p>
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

export default Safety;