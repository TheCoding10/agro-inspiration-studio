import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Services from "@/components/Services";
import Difference from "@/components/Difference";
import Mission from "@/components/Mission";
import PremiumTestimonials from "@/components/PremiumTestimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Capabilities />
      <Services />
      <Difference />
      <Mission />
      <PremiumTestimonials />
      <Footer />
    </div>
  );
};

export default Index;
