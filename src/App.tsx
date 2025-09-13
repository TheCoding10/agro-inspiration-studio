import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Overview from "./pages/about/Overview";
import Safety from "./pages/about/Safety";
import WhyChooseUs from "./pages/about/WhyChooseUs";
import SiteDevelopment from "./pages/services/SiteDevelopment";
import Demolition from "./pages/services/Demolition";
import KitchenRemodeling from "./pages/services/KitchenRemodeling";
import BathroomRenovation from "./pages/services/BathroomRenovation";
import HomeAdditions from "./pages/services/HomeAdditions";
import CommercialBuildouts from "./pages/services/CommercialBuildouts";
import Projects from "./pages/portfolio/Projects";
import Gallery from "./pages/portfolio/Gallery";
import ClientReviews from "./pages/testimonials/ClientReviews";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about/overview" element={<Overview />} />
          <Route path="/about/safety" element={<Safety />} />
          <Route path="/about/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/services/site-development" element={<SiteDevelopment />} />
          <Route path="/services/demolition" element={<Demolition />} />
          <Route path="/services/kitchen-remodeling" element={<KitchenRemodeling />} />
          <Route path="/services/bathroom-renovation" element={<BathroomRenovation />} />
          <Route path="/services/home-additions" element={<HomeAdditions />} />
          <Route path="/services/commercial-buildouts" element={<CommercialBuildouts />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/gallery" element={<Gallery />} />
          <Route path="/testimonials/client-reviews" element={<ClientReviews />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
