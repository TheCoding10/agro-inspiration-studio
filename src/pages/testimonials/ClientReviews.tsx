import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ClientReviews = () => {
  const reviews = [
    {
      name: "Maria Rodriguez",
      company: "Rodriguez Development Group",
      rating: 5,
      text: "Garcia & Peña exceeded our expectations on our residential development project. Their attention to detail and professional approach made all the difference. Highly recommended!",
      project: "Residential Site Development"
    },
    {
      name: "James Thompson",
      company: "Thompson Industrial Solutions",
      rating: 5,
      text: "Outstanding demolition work! They completed the project ahead of schedule and maintained excellent safety standards throughout. Will definitely work with them again.",
      project: "Industrial Facility Demolition"
    },
    {
      name: "Carlos Mendoza",
      company: "Sunshine Properties",
      rating: 5,
      text: "Professional, reliable, and efficient. Garcia & Peña handled our land clearing project with environmental sensitivity and delivered exceptional results.",
      project: "Commercial Land Clearing"
    },
    {
      name: "Sarah Johnson",
      company: "Johnson Construction Co.",
      rating: 5,
      text: "Their crushing and recycling services helped us save significantly on material costs while maintaining quality. Excellent communication throughout the project.",
      project: "Material Processing"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Client Reviews</h1>
            
            <div className="mb-12">
              <p className="text-lg text-muted-foreground">
                See what our clients have to say about working with Garcia & Peña. Their satisfaction 
                is our greatest achievement.
              </p>
            </div>

            <div className="space-y-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-card p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-xl">★</span>
                      ))}
                    </div>
                    <div className="text-sm text-primary font-medium">{review.project}</div>
                  </div>
                  
                  <blockquote className="text-lg text-muted-foreground mb-6 italic">
                    "{review.text}"
                  </blockquote>
                  
                  <div className="border-t pt-4">
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.company}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center bg-muted p-12 rounded-lg">
              <h2 className="text-2xl font-semibold text-primary mb-4">Join Our Satisfied Clients</h2>
              <p className="text-muted-foreground mb-8">
                Experience the Garcia & Peña difference on your next project.
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ClientReviews;