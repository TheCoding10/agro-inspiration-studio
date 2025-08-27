import { Button } from "@/components/ui/button";

const Difference = () => {
  const features = [
    {
      title: "Innovative Approach",
      description: "We work within the unique constraints of every project to develop innovative solutions to the challenges impacting budget and schedule. Our outside-the-box thinking can cut project costs and reduce the originally proposed timeline."
    },
    {
      title: "Sustainable Practices", 
      description: "Our service offerings include crushing and recycling of construction materials for increased sustainability of our operations. These efforts create a circular economy, recapturing common waste as a resource for manufacturing new products."
    },
    {
      title: "Equipment & Technology",
      description: "We're committed to providing our teams with the advanced heavy equipment and technology needed to perform their work to the best of their abilities. As a contractor, we never let equipment needs prevent us from getting the job done properly."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The J.R. Vinagro Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            We excel at delivering creative, sustainable project solutions using the latest heavy machinery and technology. 
            Our approach has resulted in the successful completion of complex infrastructure projects throughout our region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Why Choose Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Difference;