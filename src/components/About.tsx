
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-indiancharcoal mb-4">
              Our <span className="text-indianred">Story</span>
            </h2>
            <div className="w-20 h-1 bg-indiangold mb-6"></div>
            <p className="text-gray-700 mb-4">
              Founded in 2005, Indian Chillies has been serving authentic Indian cuisine
              prepared with traditional recipes and the finest ingredients. Our chefs bring
              decades of experience from various regions of India to create a diverse and
              flavorful menu.
            </p>
            <p className="text-gray-700 mb-6">
              What started as a small family restaurant has grown into a beloved culinary
              destination, now featuring an elegant banquet hall for hosting special occasions.
              We take pride in offering an immersive dining experience that celebrates the
              rich tapestry of Indian culture and cuisine.
            </p>
            <Button className="bg-indianred hover:bg-indianred/90 text-white">
              Learn More About Us
            </Button>
          </div>
          
          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-indiangold rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Indian Chillies Restaurant" 
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-indianred text-white p-4 rounded shadow-lg">
                <p className="font-playfair text-xl">Since 2005</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
