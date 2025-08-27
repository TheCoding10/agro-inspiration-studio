import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-secondary py-4 px-6 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-primary text-primary-foreground px-3 py-2 font-bold text-xl">
            J.R. VINAGRO
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-secondary-foreground hover:text-primary transition-colors font-medium">
            ABOUT
          </a>
          <a href="#services" className="text-secondary-foreground hover:text-primary transition-colors font-medium">
            SERVICES
          </a>
          <a href="#projects" className="text-secondary-foreground hover:text-primary transition-colors font-medium">
            PROJECTS
          </a>
          <a href="#careers" className="text-secondary-foreground hover:text-primary transition-colors font-medium">
            CAREERS
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:block border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
            PAY YOUR BILL
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
            CONTACT
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;