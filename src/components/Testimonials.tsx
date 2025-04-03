
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Wedding Reception",
    quote: "Indian Chillies made our wedding reception truly special. The banquet hall was beautifully decorated, and the food was exceptional. All our guests were impressed!",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Michael Chen",
    role: "Regular Customer",
    quote: "The best Indian food in town, hands down! I've been coming here for years and the quality and taste have always been consistently excellent.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Patel",
    role: "Corporate Event",
    quote: "We hosted our company's annual dinner at Indian Chillies and everything was perfect. The staff was attentive, and the customized menu was a big hit with our team.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-indiangold">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
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
