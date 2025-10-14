const Footer = () => {
  return (
    <footer className="bg-luxury-charcoal text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="bg-luxury-navy text-white px-3 py-2 font-bold text-xl mb-6 inline-block">
              GARCIA & PEÑA
            </div>
            <p className="text-white leading-relaxed mb-6">
              Your trusted partner for premium general contracting services in Rhode Island & Massachusetts.
              Expert kitchen & bath renovations, home additions, and commercial build-outs.
            </p>
            <div className="space-y-2 text-white">
              <p>📧 hello@gpcontracting.com</p>
              <p>📞 (774) 329-4239</p>
              <p>📍 Providence, Warwick, Cranston, Fall River & surrounding areas</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3 text-white">
              <li><a href="#" className="hover:text-secondary transition-colors">Kitchen Remodeling</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Bathroom Renovations</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Home Additions</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Commercial Build-Outs</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Custom Carpentry</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Design Consultation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-3 text-white">
              <li><a href="#" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Free Quote</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-gold/30 pt-8 text-center">
          <p className="text-white">
            © 2024 Garcia & Peña General Contracting. All rights reserved. | Licensed & Insured in RI & MA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;