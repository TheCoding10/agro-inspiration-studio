import { Button } from "@/components/ui/button";

const Mission = () => {
  return (
    <section className="py-20 bg-industrial-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Challenge Accepted Graphic */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-4 bg-primary/10 rounded-full px-8 py-4 border border-primary/20">
              <span className="text-2xl font-bold text-primary">CHALLENGE</span>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-white ml-1"></div>
              </div>
              <span className="text-2xl font-bold text-white">ACCEPTED</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Overcoming the Impossible
          </h2>
          
          <div className="space-y-6 text-xl text-gray-300 leading-relaxed mb-12">
            <p>
              At J.R. Vinagro, we see things differently. What others deem impossible, we consider a challenge. 
              And there's nothing we love more than a challenge.
            </p>
            <p>
              We've built our reputation on finding innovative solutions to obstacles that stand in the way of a project's success.
            </p>
          </div>

          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-industrial-dark font-bold px-8 py-4"
          >
            About Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Mission;