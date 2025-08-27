const testimonials = [
  {
    quote: "Garcia & Peña completely transformed our kitchen! They were professional, on time, and the attention to detail was incredible. The craftsmanship exceeded our expectations.",
    author: "Sarah & Michael Chen",
    company: "Providence, RI"
  },
  {
    quote: "Outstanding work on our master bathroom renovation. The team was clean, respectful, and delivered exactly what they promised. Highly recommend!",
    author: "James Martinez", 
    company: "Cranston, RI"
  },
  {
    quote: "They handled our restaurant build-out with exceptional professionalism. The project was completed ahead of schedule and within budget. Amazing work!",
    author: "Restaurant Owner",
    company: "Fall River, MA"
  },
  {
    quote: "From design to completion, Garcia & Peña made our home addition seamless. Their team was skilled, reliable, and delivered exactly what we envisioned.",
    author: "The Johnson Family",
    company: "Warwick, RI"
  },
  {
    quote: "Exceptional quality and transparent communication throughout our office renovation. They worked around our business hours to minimize disruption.",
    author: "Tech Startup CEO",
    company: "Providence, RI"
  },
  {
    quote: "The custom millwork and attention to detail in our historic home renovation was remarkable. They preserved the character while adding modern functionality.",
    author: "Historic Homeowner",
    company: "Newport, RI"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-concrete">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-6xl text-primary mb-6">"</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Our Partners Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="text-3xl text-primary mb-4">"</div>
                <p className="text-muted-foreground leading-relaxed italic">
                  {testimonial.quote}
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="font-semibold text-foreground">
                  — {testimonial.author}
                </p>
                <p className="text-primary font-medium">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;