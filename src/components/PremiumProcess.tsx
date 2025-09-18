import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Design Consultation",
    description: "In-home assessment and vision discussion with our design experts to understand your needs and preferences.",
    icon: "🏠"
  },
  {
    step: "02", 
    title: "Custom Design",
    description: "3D renderings and material selection with premium finishes tailored to your lifestyle and budget.",
    icon: "✨"
  },
  {
    step: "03",
    title: "Project Planning", 
    description: "Detailed timeline, permits, and coordination to ensure smooth execution from start to finish.",
    icon: "📋"
  },
  {
    step: "04",
    title: "Expert Execution",
    description: "Skilled craftsmen and quality materials bringing your vision to life with precision and care.",
    icon: "🔨"
  },
  {
    step: "05",
    title: "Final Walkthrough",
    description: "Complete quality inspection and client satisfaction guarantee before project completion.",
    icon: "✅"
  }
];

const PremiumProcess = () => {
  return (
    <section className="py-24 bg-luxury-navy text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8">
            The Garcia & Peña Process
          </h2>
          <p className="font-inter text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From initial consultation to final walkthrough, our proven process ensures exceptional results and complete client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-secondary font-bold text-3xl mb-2 font-playfair">{step.step}</div>
                <h3 className="font-inter font-bold text-lg mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-10 py-5 font-inter text-lg"
            onClick={() => window.location.href = '/contact'}
          >
            Start Your Project Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PremiumProcess;