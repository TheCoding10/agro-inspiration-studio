import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteDevelopmentImg from "@/assets/site-development.jpg";
import demolitionImg from "@/assets/demolition.jpg";
import landClearingImg from "@/assets/land-clearing.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Commercial Plaza Development",
      location: "Miami, FL",
      description: "Complete site development for 50,000 sq ft commercial plaza including excavation, utilities, and roadway construction.",
      image: siteDevelopmentImg,
      category: "Site Development"
    },
    {
      title: "Industrial Facility Demolition",
      location: "Fort Lauderdale, FL",
      description: "Safe demolition of 100,000 sq ft manufacturing facility with material recycling and site remediation.",
      image: demolitionImg,
      category: "Demolition"
    },
    {
      title: "Residential Community Clearing",
      location: "Boca Raton, FL",
      description: "Land clearing for 200-unit residential development with environmental compliance and habitat preservation.",
      image: landClearingImg,
      category: "Land Clearing"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Our Projects</h1>
            
            <div className="mb-12">
              <p className="text-lg text-muted-foreground">
                Explore our portfolio of successful projects across various industries. Each project showcases 
                our commitment to quality, safety, and client satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <div className="text-sm text-muted-foreground mb-3">{project.location}</div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-semibold text-primary mb-6">Ready to Start Your Project?</h2>
              <p className="text-muted-foreground mb-8">
                Let us bring our expertise to your next construction or excavation project.
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;