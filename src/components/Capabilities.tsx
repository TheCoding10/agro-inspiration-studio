const Capabilities = () => {
  return (
    <section className="py-20 bg-industrial-dark text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Proven Track Record
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Over 15 years of excellence in Rhode Island & Massachusetts, delivering premium construction services
            with unmatched craftsmanship and professional integrity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">
                100+
              </div>
              <div className="text-2xl font-semibold text-gray-300">
                Projects Completed
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">
                15+
              </div>
              <div className="text-2xl font-semibold text-gray-300">
                Years Experience
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">
                98%
              </div>
              <div className="text-2xl font-semibold text-gray-300">
                Client Satisfaction
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-4">
                $100K+
              </div>
              <div className="text-2xl font-semibold text-gray-300">
                Projects Value
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;