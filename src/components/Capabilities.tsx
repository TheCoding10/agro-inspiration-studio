const Capabilities = () => {
  return (
    <section className="py-20 bg-industrial-dark text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Industry-Leading Capabilities
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Our combined services cover every stage of project delivery, from demolition to development. 
            We engineer value by recycling and disposing materials to reduce costs and streamline production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Stats */}
          <div className="space-y-12">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">
                500K+
              </div>
              <div className="text-2xl font-semibold text-gray-300">
                Tons Crushed Annually
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">
                2M+
              </div>
              <div className="text-2xl font-semibold text-gray-300">
                Yards Moved Annually
              </div>
            </div>
          </div>

          {/* Equipment Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-steel/20 to-construction-orange/20 rounded-lg p-8 text-center">
              <div className="text-8xl mb-4">🏗️</div>
              <p className="text-lg text-gray-300">
                Advanced Heavy Equipment & Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;