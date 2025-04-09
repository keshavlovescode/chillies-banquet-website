
import { Button } from "@/components/ui/button";
import { Calendar, Cake, Bell } from "lucide-react";

const features = [
  {
    icon: <Calendar className="h-10 w-10 text-indiangold" />,
    title: "Custom Event Planning",
    description: "Our experienced team helps plan every detail of your event to ensure it's perfect.",
  },
  {
    icon: <Cake className="h-10 w-10 text-indiangold" />,
    title: "Catering Services",
    description: "Choose from our extensive menu of authentic Indian cuisine for your event.",
  },
  {
    icon: <Bell className="h-10 w-10 text-indiangold" />,
    title: "Full-Service Staff",
    description: "Our professional staff provides exceptional service throughout your event.",
  },
];

const BanquetHall = () => {
  return (
    <section className="py-20 bg-gray-50" id="banquet-hall">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-indiancharcoal mb-4">
            Elegant <span className="text-indianred">Banquet Hall</span>
          </h2>
          <div className="w-20 h-1 bg-indiangold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Host your special occasions in our beautiful banquet hall, perfect for weddings,
            parties, corporate events, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Images */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img 
                src="/lovable-uploads/67cc8a92-84f6-41a4-b32c-1a93a34e8088.png" 
                alt="Banquet Hall" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img 
                src="/lovable-uploads/11104a44-565b-45f7-884e-f97fba6c185b.png" 
                alt="Banquet Setup for Events" 
                className="w-full h-60 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <img 
                src="/lovable-uploads/c473df31-f311-4c3a-8388-038950b206e2.png" 
                alt="Themed Decoration" 
                className="w-full h-60 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Features */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-playfair font-semibold text-indiancharcoal mb-6">
                Perfect for Your Events
              </h3>

              <ul className="space-y-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex">
                    <div className="mr-4 flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-indiancharcoal mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button className="w-full bg-indianred hover:bg-indianred/90 text-white">
                  Book the Banquet Hall
                </Button>
              </div>
            </div>

            <div className="bg-indiancharcoal text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Capacity & Amenities</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indiangold rounded-full mr-2"></div>
                  <span>Accommodates up to 200 guests</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indiangold rounded-full mr-2"></div>
                  <span>State-of-the-art sound system</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indiangold rounded-full mr-2"></div>
                  <span>Projector and screen available</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indiangold rounded-full mr-2"></div>
                  <span>Customizable lighting options</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indiangold rounded-full mr-2"></div>
                  <span>Dedicated event coordinator</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BanquetHall;
