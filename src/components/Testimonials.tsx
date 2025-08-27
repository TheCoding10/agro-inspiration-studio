const testimonials = [
  {
    quote: "Working with J.R. Vinagro on Ashlar Park Quincy Project has been a great experience! The planning that went into material deliveries, manpower/equipment movement, and site accessibility for other trades was second to none. We look forward to closing this project out strong with the team and partnering up with J.R. Vinagro on future projects.",
    author: "Robert Solon",
    company: "Dellbrook | JKS"
  },
  {
    quote: "In my experience at the Worcester VA project at UMASS Medical School, J.R. Vinagro was an excellent contractor and partner. They worked collaboratively with other trades, bringing solutions to the table that saved time and money. Design, schedule, and scope changes from the design team/client were embraced and addressed quickly.",
    author: "David Mollicone", 
    company: "Suffolk"
  },
  {
    quote: "J.R. Vinagro was an exceptional partner on the successful site development project in North Kingstown, RI. Their expertise in material handling and rock crushing allowed all of the blasted rock on the site to be utilized for pavement base, crushed stone, and stone fill. J.R. Vinagro provided valuable input, which ultimately saved the client money and maintained schedule.",
    author: "James Walton",
    company: "Dennis Group"
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