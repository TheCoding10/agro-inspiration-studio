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

        <div className="flex justify-center">
          <div className="group max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-white/10 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/20">
              <div className="text-7xl md:text-9xl font-bold text-secondary mb-8 font-playfair transition-transform duration-500 group-hover:scale-105">
                98%
              </div>
              <div className="text-3xl md:text-4xl font-semibold text-white mb-6 font-inter">
                Client Satisfaction
              </div>
              <div className="text-xl text-gray-300 font-inter">
                Exceeding expectations on every project
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;