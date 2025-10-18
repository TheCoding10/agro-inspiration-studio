import Header from "@/components/Header";
import Footer from "@/components/Footer";
import projectsCollageImg from "@/assets/projects-collage.png";
import shedProjectImg from "@/assets/shed-project.png";
import houseStairsImg from "@/assets/house-stairs.png";
import entranceStairsImg from "@/assets/entrance-stairs.png";
import deckConstructionImg from "@/assets/deck-construction.png";

const Gallery = () => {
  const galleryImages = [
    {
      src: projectsCollageImg,
      alt: "Construction and Excavation Projects",
      caption: "Professional site development, demolition, and excavation services"
    },
    {
      src: deckConstructionImg,
      alt: "Deck Construction Project",
      caption: "Custom deck installation with premium materials"
    },
    {
      src: entranceStairsImg,
      alt: "Entrance Stairs and Landing",
      caption: "Beautiful white entrance stairs with professional craftsmanship"
    },
    {
      src: shedProjectImg,
      alt: "Custom Shed Construction",
      caption: "High-quality shed installation with modern design"
    },
    {
      src: houseStairsImg,
      alt: "House Addition and Stairs",
      caption: "Professional house addition with custom stairway construction"
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="font-medium">{image.caption}</p>
                    </div>
                  </div>
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