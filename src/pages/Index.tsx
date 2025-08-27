import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Services from "@/components/Services";
import Difference from "@/components/Difference";
import Mission from "@/components/Mission";
import Testimonials from "@/components/Testimonials";
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
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
