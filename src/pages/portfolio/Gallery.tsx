import Header from "@/components/Header";
import Footer from "@/components/Footer";
import deckBefore from "@/assets/deck-before.png";
import deckAfter from "@/assets/deck-after.png";
import entranceBefore from "@/assets/entrance-before.png";
import entranceAfter from "@/assets/entrance-after.png";
import shedBefore from "@/assets/shed-before.png";
import shedAfter from "@/assets/shed-after.png";
import stairsBefore from "@/assets/stairs-before.png";
import stairsAfter from "@/assets/stairs-after.png";

const Gallery = () => {
  const galleryImages = [
    {
      before: deckBefore,
      after: deckAfter,
      title: "Deck Construction",
      beforeAlt: "Deck framing and foundation work in progress",
      afterAlt: "Completed deck with premium composite decking",
      description: "Complete deck transformation from foundation to finished composite surface"
    },
    {
      before: entranceBefore,
      after: entranceAfter,
      title: "Entrance Renovation",
      beforeAlt: "Old entrance door before renovation",
      afterAlt: "New entrance with white railings and stairs",
      description: "Modern entrance makeover with custom stairs and elegant white railings"
    },
    {
      before: shedBefore,
      after: shedAfter,
      title: "Custom Shed Build",
      beforeAlt: "Shed foundation and framing setup",
      afterAlt: "Completed custom shed with modern siding",
      description: "Professional shed construction from ground up to finished structure"
    },
    {
      before: stairsBefore,
      after: stairsAfter,
      title: "Exterior Stairs Upgrade",
      beforeAlt: "Old deteriorated exterior stairs",
      afterAlt: "New white exterior stairs and railings",
      description: "Complete stairway renovation with durable materials and modern design"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Project Gallery</h1>
            
            <div className="mb-12">
              <p className="text-lg text-muted-foreground">
                Take a visual journey through our completed projects. Each image represents our commitment 
                to quality workmanship and professional excellence.
              </p>
            </div>

            <div className="space-y-16">
              {galleryImages.map((project, index) => (
                <div key={index} className="space-y-4">
                  <h2 className="text-3xl font-bold text-primary mb-6">{project.title}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img 
                          src={project.before} 
                          alt={project.beforeAlt}
                          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                          Before
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img 
                          src={project.after} 
                          alt={project.afterAlt}
                          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                          After
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mt-4 text-center">{project.description}</p>
                  {index < galleryImages.length - 1 && <div className="border-t border-border mt-12"></div>}
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-semibold text-primary mb-6">See Your Project Come to Life</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Every project tells a story of transformation. Let us help you write the next chapter 
                with professional construction and excavation services.
              </p>
              <div className="flex justify-center gap-4">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  View All Projects
                </button>
                <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;