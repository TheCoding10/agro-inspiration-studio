import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Overview from "./pages/about/Overview";
import Safety from "./pages/about/Safety";
import History from "./pages/about/History";
import WhyChooseUs from "./pages/about/WhyChooseUs";
import SiteDevelopment from "./pages/services/SiteDevelopment";
import Demolition from "./pages/services/Demolition";
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
          <Route path="/about/overview" element={<Overview />} />
          <Route path="/about/safety" element={<Safety />} />
          <Route path="/about/history" element={<History />} />
          <Route path="/about/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/services/site-development" element={<SiteDevelopment />} />
          <Route path="/services/demolition" element={<Demolition />} />
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
