
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sandeep Kumar",
    role: "Recent Guest",
    quote: "Awesome location, spacious, well service, awesome looking fully air conditioned.",
    avatar: "/lovable-uploads/be746985-9516-4618-a195-4c78cfa36f65.png",
  },
  {
    name: "Rohit Sharma",
    role: "Event Host",
    quote: "Very good place for family function or individual gathering.. very nice staff and food quality",
    avatar: "/lovable-uploads/5e874262-3d39-48fc-b13d-fc80368a5c02.png",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-indiancharcoal mb-4">
            What Our <span className="text-indianred">Guests Say</span>
          </h2>
          <div className="w-20 h-1 bg-indiangold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Don't just take our word for it. Here's what our valued customers have to say about their experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-full mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-indiangold">★</span>
                    ))}
                  </div>
                  <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="font-semibold text-lg text-indiancharcoal">{testimonial.name}</h4>
                    <p className="text-indianred text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
