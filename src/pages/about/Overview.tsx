import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Overview = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Company Overview</h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">About Garcia & Peña</h2>
                <p className="text-muted-foreground mb-6">
                  Garcia & Peña is a leading construction and excavation company 
                  delivering exceptional results across various industries. Founded on principles of integrity,
                  quality, and reliability, we have built a reputation as one of the most trusted contractors in the region.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our comprehensive approach combines state-of-the-art equipment with highly skilled professionals 
                  to tackle projects of any scale, from residential developments to large commercial and industrial sites.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  To provide superior construction and excavation services that exceed our clients' expectations 
                  while maintaining the highest standards of safety, environmental responsibility, and operational excellence.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-primary mb-6">Core Values</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Excellence</h3>
                    <p className="text-muted-foreground">We strive for perfection in every project we undertake.</p>
                  </div>
                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Integrity</h3>
                    <p className="text-muted-foreground">Honest communication and ethical business practices guide our work.</p>
                  </div>
                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Innovation</h3>
                    <p className="text-muted-foreground">We embrace new technologies and methods to improve our services.</p>
                  </div>
                  <div className="p-6 bg-muted rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Sustainability</h3>
                    <p className="text-muted-foreground">Environmental responsibility is at the core of our operations.</p>
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

export default Overview;