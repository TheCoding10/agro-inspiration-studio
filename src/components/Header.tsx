import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link, useNavigate } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [testimonialsOpen, setTestimonialsOpen] = useState(false);

  return (
    <header className="bg-luxury-navy py-4 px-6 shadow-luxury backdrop-blur-sm border-b border-secondary/20">
      <div className="container mx-auto flex items-center justify-between">
        {/* Premium Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="group transition-all duration-300">
            <div className="bg-gradient-to-r from-secondary to-accent text-primary font-playfair px-4 py-3 font-bold text-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 rounded-md">
              Garcia & Peña
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {/* About Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-secondary hover:text-primary transition-colors font-medium font-inter">
                ABOUT <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white border-2 border-luxury-gold shadow-xl">
              <DropdownMenuItem onClick={() => navigate('/about/overview')} className="cursor-pointer hover:bg-luxury-gold/20 text-luxury-navy font-medium">
                OVERVIEW
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/about/safety')} className="cursor-pointer hover:bg-luxury-gold/20 text-luxury-navy font-medium">
                SAFETY
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/about/why-choose-us')} className="cursor-pointer hover:bg-luxury-gold/20 text-luxury-navy font-medium">
                WHY CHOOSE US
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-secondary hover:text-primary transition-colors font-medium font-inter">
                SERVICES <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white border-2 border-luxury-gold shadow-xl">
              <DropdownMenuItem onClick={() => navigate('/services/kitchen-remodeling')} className="cursor-pointer hover:bg-luxury-gold/20 text-luxury-navy font-medium">
                KITCHEN REMODELING
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/services/bathroom-renovation')} className="cursor-pointer hover:bg-luxury-gold/20 text-luxury-navy font-medium">
                BATHROOM RENOVATION
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/services/home-additions')} className="cursor-pointer hover:bg-luxury-gold/20 text-luxury-navy font-medium">
                HOME ADDITIONS
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/services/commercial-buildouts')} className="cursor-pointer hover:bg-luxury-gold/20 text-luxury-navy font-medium">
                COMMERCIAL BUILD-OUTS
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/services/site-development')} className="cursor-pointer hover:bg-luxury-gold/20 text-luxury-navy font-medium">
                SITE DEVELOPMENT
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/services/demolition')} className="cursor-pointer hover:bg-luxury-gold/20 text-luxury-navy font-medium">
                DEMOLITION
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Portfolio Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-secondary hover:text-primary transition-colors font-medium font-inter">
                PORTFOLIO <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white border-2 border-luxury-gold shadow-xl">
              <DropdownMenuItem onClick={() => navigate('/portfolio/projects')} className="cursor-pointer hover:bg-luxury-gold/20 text-luxury-navy font-medium">
                PROJECTS
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/portfolio/gallery')} className="cursor-pointer hover:bg-luxury-gold/20 text-luxury-navy font-medium">
                GALLERY
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Testimonials Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-secondary hover:text-primary transition-colors font-medium font-inter">
                TESTIMONIALS <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white border-2 border-luxury-gold shadow-xl">
              <DropdownMenuItem onClick={() => navigate('/testimonials/client-reviews')} className="cursor-pointer hover:bg-luxury-gold/20 text-luxury-navy font-medium">
                CLIENT REVIEWS
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button 
            className="hidden md:block bg-secondary hover:bg-secondary/90 text-primary font-bold font-inter transition-all duration-300 hover:shadow-lg"
            onClick={() => window.location.href = '/contact'}
          >
            GET FREE QUOTE
          </Button>
          <Button 
            className="hidden md:block bg-white hover:bg-white/90 text-primary font-bold font-inter transition-all duration-300 hover:shadow-lg border-2 border-secondary"
            onClick={() => window.location.href = 'tel:+17743294239'}
          >
            📞 CALL NOW
          </Button>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-secondary hover:text-primary">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background">
              <div className="flex flex-col space-y-4 mt-8">
                <Collapsible open={aboutOpen} onOpenChange={setAboutOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left font-medium py-2 hover:text-primary transition-colors">
                    ABOUT
                    <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pl-4">
                    <Link to="/about/overview" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      OVERVIEW
                    </Link>
                    <Link to="/about/safety" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      SAFETY
                    </Link>
                    <Link to="/about/why-choose-us" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      WHY CHOOSE US
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left font-medium py-2 hover:text-primary transition-colors">
                    SERVICES
                    <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pl-4">
                    <Link to="/services/kitchen-remodeling" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      KITCHEN REMODELING
                    </Link>
                    <Link to="/services/bathroom-renovation" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      BATHROOM RENOVATION
                    </Link>
                    <Link to="/services/home-additions" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      HOME ADDITIONS
                    </Link>
                    <Link to="/services/commercial-buildouts" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      COMMERCIAL BUILD-OUTS
                    </Link>
                    <Link to="/services/site-development" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      SITE DEVELOPMENT
                    </Link>
                    <Link to="/services/demolition" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      DEMOLITION
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible open={portfolioOpen} onOpenChange={setPortfolioOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left font-medium py-2 hover:text-primary transition-colors">
                    PORTFOLIO
                    <ChevronDown className={`h-4 w-4 transition-transform ${portfolioOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pl-4">
                    <Link to="/portfolio/projects" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      PROJECTS
                    </Link>
                    <Link to="/portfolio/gallery" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      GALLERY
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible open={testimonialsOpen} onOpenChange={setTestimonialsOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-left font-medium py-2 hover:text-primary transition-colors">
                    TESTIMONIALS
                    <ChevronDown className={`h-4 w-4 transition-transform ${testimonialsOpen ? 'rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pl-4">
                    <Link to="/testimonials/client-reviews" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      CLIENT REVIEWS
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <div className="border-t pt-4 space-y-2">
                  <Button 
                    className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold font-inter"
                    onClick={() => { window.location.href = '/contact'; setIsOpen(false); }}
                  >
                    GET FREE QUOTE
                  </Button>
                  <Button 
                    className="w-full bg-white hover:bg-white/90 text-primary font-bold font-inter border-2 border-secondary"
                    onClick={() => { window.location.href = 'tel:+17743294239'; setIsOpen(false); }}
                  >
                    📞 CALL NOW
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;