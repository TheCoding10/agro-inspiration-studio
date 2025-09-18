const Capabilities = () => {
  return (
    <section className="py-24 bg-luxury-navy text-white relative overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-8 text-white">
            Our Proven Excellence
          </h2>
          <p className="font-inter text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Rhode Island & Massachusetts' premier design-build specialists, 
            delivering unmatched craftsmanship and professional integrity in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="group">
            <div className="text-7xl md:text-8xl font-bold text-secondary mb-6 font-playfair transition-transform duration-500 group-hover:scale-110">
              98%
            </div>
            <div className="text-2xl font-semibold text-gray-300 mb-4 font-inter">
              Client Satisfaction
            </div>
            <div className="text-gray-400 font-inter">
              Exceeding expectations on every project
            </div>
          </div>

          <div className="group">
            <div className="text-7xl md:text-8xl font-bold text-secondary mb-6 font-playfair transition-transform duration-500 group-hover:scale-110">
              15+
            </div>
            <div className="text-2xl font-semibold text-gray-300 mb-4 font-inter">
              Years Experience
            </div>
            <div className="text-gray-400 font-inter">
              Mastering our craft since 2008
            </div>
          </div>

          <div className="group">
            <div className="text-7xl md:text-8xl font-bold text-secondary mb-6 font-playfair transition-transform duration-500 group-hover:scale-110">
              $2M+
            </div>
            <div className="text-2xl font-semibold text-gray-300 mb-4 font-inter">
              Annual Projects
            </div>
            <div className="text-gray-400 font-inter">
              Premium renovations delivered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;