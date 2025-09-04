const Footer = () => {
  return (
    <footer className="bg-industrial-darker text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="bg-primary text-primary-foreground px-3 py-2 font-bold text-xl mb-6 inline-block">
              GARCIA & PEÑA
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Your trusted partner for premium general contracting services in Rhode Island & Massachusetts.
              Expert kitchen & bath renovations, home additions, and commercial build-outs.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📧 hello@gpcontracting.com</p>
              <p>📞 (774) 329-4239</p>
              <p>📍 Providence, Warwick, Cranston, Fall River & surrounding areas</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Kitchen Remodeling</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bathroom Renovations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Home Additions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Commercial Build-Outs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Custom Carpentry</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Design Consultation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Free Quote</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Garcia & Peña General Contracting. All rights reserved. | Licensed & Insured in RI & MA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;