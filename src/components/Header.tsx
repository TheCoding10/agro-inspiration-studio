import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [testimonialsOpen, setTestimonialsOpen] = useState(false);

  return (
    <header className="bg-secondary py-4 px-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="bg-primary text-primary-foreground px-3 py-2 font-bold text-xl hover:bg-primary/90 transition-colors">
            GARCIA & PEÑA
          </Link>
        </div>

        {/* Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-secondary-foreground hover:text-primary transition-colors font-medium bg-transparent">
                ABOUT
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-48 gap-3 p-4 bg-background border">
                  <NavigationMenuLink asChild>
                    <Link to="/about/overview" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">OVERVIEW</div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/about/safety" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">SAFETY</div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/about/history" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">HISTORY</div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/about/why-choose-us" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">WHY CHOOSE US</div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-secondary-foreground hover:text-primary transition-colors font-medium bg-transparent">
                SERVICES
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-48 gap-3 p-4 bg-background border">
                  <NavigationMenuLink asChild>
                    <Link to="/services/kitchen-remodeling" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">KITCHEN REMODELING</div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/services/bathroom-renovation" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">BATHROOM RENOVATION</div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/services/home-additions" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">HOME ADDITIONS</div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/services/commercial-buildouts" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">COMMERCIAL BUILD-OUTS</div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/services/site-development" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">SITE DEVELOPMENT</div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/services/demolition" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">DEMOLITION</div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-secondary-foreground hover:text-primary transition-colors font-medium bg-transparent">
                PORTFOLIO
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-48 gap-3 p-4 bg-background border">
                  <NavigationMenuLink asChild>
                    <Link to="/portfolio/projects" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">PROJECTS</div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/portfolio/gallery" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">GALLERY</div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-secondary-foreground hover:text-primary transition-colors font-medium bg-transparent">
                TESTIMONIALS
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-48 gap-3 p-4 bg-background border">
                  <NavigationMenuLink asChild>
                    <Link to="/testimonials/client-reviews" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">CLIENT REVIEWS</div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link to="/testimonials/case-studies" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">CASE STUDIES</div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:block border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
            GET FREE QUOTE
          </Button>
          <Button className="hidden md:block bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            CONTACT
          </Button>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
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
                    <Link to="/about/history" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      HISTORY
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
                    <Link to="/testimonials/case-studies" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                      CASE STUDIES
                    </Link>
                  </CollapsibleContent>
                </Collapsible>

                <div className="border-t pt-4 space-y-2">
                  <Button variant="outline" className="w-full border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                    GET FREE QUOTE
                  </Button>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                    CONTACT
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