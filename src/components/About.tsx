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
          
          {/* Image Grid */}
          <div className="order-1 md:order-2 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-full h-full border-2 border-indiangold rounded-lg"></div>
                <img 
                  src="/lovable-uploads/989568fa-9844-47a0-8c29-e9d57129717e.png" 
                  alt="Indian Chillies Restaurant Interior" 
                  className="w-full h-48 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="relative mt-8">
                <div className="absolute -top-2 -left-2 w-full h-full border-2 border-indianred rounded-lg"></div>
                <img 
                  src="/lovable-uploads/be746985-9516-4618-a195-4c78cfa36f65.png" 
                  alt="Restaurant Dining Area" 
                  className="w-full h-48 object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 bg-indianred text-white p-4 rounded shadow-lg z-10">
                <p className="font-playfair text-xl">Since 2005</p>
              </div>
              <img 
                src="/lovable-uploads/e35077d2-f8b8-415d-9635-86d739be28f6.png" 
                alt="Restaurant Front View" 
                className="w-full h-64 object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
