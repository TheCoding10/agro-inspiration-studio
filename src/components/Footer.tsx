const Footer = () => {
  return (
    <footer className="bg-industrial-darker text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="bg-primary text-primary-foreground px-3 py-2 font-bold text-xl mb-6 inline-block">
              J.R. VINAGRO
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              A full-service contractor serving the Northeast with turnkey demolition, 
              recycling and sitework services on commercial, industrial, and public projects.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📧 info@jrvinagro.com</p>
              <p>📞 (555) 123-4567</p>
              <p>📍 123 Industrial Way, Providence, RI</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Site Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Demolition & Abatement</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Land Clearing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Crushing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">C&D Recycling</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Material Sales</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pay Your Bill</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 J.R. Vinagro. All rights reserved. | Built with excellence in construction.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;