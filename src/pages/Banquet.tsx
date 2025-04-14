
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Cake, Bell, Utensils, Users, Music, Image, PartyPopper, Phone } from "lucide-react";

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
  {
    icon: <Utensils className="h-10 w-10 text-indiangold" />,
    title: "Custom Menu Options",
    description: "Create a personalized menu tailored to your event and guests' preferences.",
  },
  {
    icon: <Users className="h-10 w-10 text-indiangold" />,
    title: "Accommodates Up to 200",
    description: "Our spacious banquet hall can comfortably accommodate up to 200 guests.",
  },
  {
    icon: <PartyPopper className="h-10 w-10 text-indiangold" />,
    title: "Decoration Services",
    description: "We offer beautiful decoration packages for all types of events.",
  },
];

const events = [
  {
    title: "Weddings",
    description: "Transform our elegant banquet hall into the wedding venue of your dreams. Our team will help coordinate every detail, from the menu to the decorations, ensuring your special day is truly memorable.",
    image: "/lovable-uploads/e6a9c621-d0e1-448e-ae17-c4267883ad53.png",
  },
  {
    title: "Corporate",
    description: "Host your next corporate event, meeting, or conference in our sophisticated banquet hall. With our professional staff and amenities, your business event will be both productive and impressive.",
    image: "/lovable-uploads/f3b87dd9-18cf-4024-95a3-94d14acd0d1d.png",
  },
  {
    title: "Birthdays",
    description: "Celebrate your special day with us! Our banquet hall provides the perfect setting for birthday celebrations of all sizes, with customizable decoration and catering options.",
    image: "/lovable-uploads/d8d9a203-c06f-4061-a0c3-d93decc64208.png",
  },
  {
    title: "Kitty",
    description: "Our banquet hall is ideal for kitty parties with friends. Enjoy a relaxed atmosphere with delicious food and attentive service for a memorable gathering.",
    image: "/lovable-uploads/e35077d2-f8b8-415d-9635-86d739be28f6.png",
  },
];

const galleryImages = [
  "/lovable-uploads/f3b87dd9-18cf-4024-95a3-94d14acd0d1d.png",
  "/lovable-uploads/e6a9c621-d0e1-448e-ae17-c4267883ad53.png",
  "/lovable-uploads/d8d9a203-c06f-4061-a0c3-d93decc64208.png",
  "/lovable-uploads/989568fa-9844-47a0-8c29-e9d57129717e.png",
  "/lovable-uploads/d467db32-2a71-42c3-904d-376c7454bb46.png",
  "/lovable-uploads/e35077d2-f8b8-415d-9635-86d739be28f6.png",
];

const Banquet = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-indiancharcoal">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('/lovable-uploads/f3b87dd9-18cf-4024-95a3-94d14acd0d1d.png')", 
              filter: "brightness(0.3)"
            }}
          ></div>
          
          {/* Spice pattern overlay */}
          <div className="absolute inset-0 spice-pattern opacity-30"></div>
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
              Our <span className="text-indiangold">Banquet Hall</span>
            </h1>
            <div className="w-24 h-1 bg-indianred mx-auto my-6"></div>
            <p className="text-white/90 text-lg max-w-2xl">
              The perfect venue for your special events, celebrations, and corporate gatherings.
            </p>
          </div>
        </div>

        {/* About the Banquet Hall */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-playfair font-bold text-indiancharcoal mb-4">
                  Fully Equipped <span className="text-indianred">Banquet Hall</span>
                </h2>
                <div className="w-20 h-1 bg-indiangold mb-6"></div>
                <p className="text-gray-700 mb-4">
                  Our beautifully appointed banquet hall offers an elegant setting for weddings, 
                  corporate events, social gatherings, and cultural celebrations. With capacity 
                  for up to 200 guests, our venue provides the perfect backdrop for your most 
                  important occasions.
                </p>
                <p className="text-gray-700 mb-6">
                  At Indian Chillies Banquet Hall, we combine sophisticated ambiance with 
                  exceptional service and delicious cuisine to create memorable events. Our 
                  dedicated event planning team will work closely with you to ensure every 
                  detail meets your vision and exceeds your expectations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+919997761232" className="inline-flex items-center justify-center gap-2 rounded-md bg-indianred text-white hover:bg-indianred/90 px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    <Phone className="h-5 w-5" /> Call for Details: +91 9997761232
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <img 
                    src="/lovable-uploads/f3b87dd9-18cf-4024-95a3-94d14acd0d1d.png" 
                    alt="Banquet Hall" 
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img 
                    src="/lovable-uploads/d467db32-2a71-42c3-904d-376c7454bb46.png" 
                    alt="Banquet Interior" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <img 
                    src="/lovable-uploads/d8d9a203-c06f-4061-a0c3-d93decc64208.png" 
                    alt="Hall Decoration" 
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-indiancream spice-pattern">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-indiancharcoal mb-4">
                Banquet Hall <span className="text-indianred">Features</span>
              </h2>
              <div className="w-20 h-1 bg-indiangold mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                Our banquet hall is equipped with everything you need to host a successful event.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-playfair font-semibold text-indiancharcoal mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events We Host */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-indiancharcoal mb-4">
                Events We <span className="text-indianred">Host</span>
              </h2>
              <div className="w-20 h-1 bg-indiangold mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                From intimate gatherings to grand celebrations, our banquet hall is the perfect venue for any occasion.
              </p>
            </div>

            <Tabs defaultValue="Weddings" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="Weddings">Weddings</TabsTrigger>
                <TabsTrigger value="Corporate">Corporate</TabsTrigger>
                <TabsTrigger value="Birthdays">Birthdays</TabsTrigger>
                <TabsTrigger value="Kitty">Kitty Parties</TabsTrigger>
              </TabsList>
              {events.map((event, index) => (
                <TabsContent key={index} value={event.title}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-playfair font-semibold text-indiancharcoal mb-4">{event.title}</h3>
                      <p className="text-gray-700 mb-6">{event.description}</p>
                      <a href="tel:+919997761232" className="inline-flex items-center justify-center gap-2 rounded-md bg-indianred text-white hover:bg-indianred/90 px-4 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                        <Phone className="h-5 w-5" /> Call to Inquire: +91 9997761232
                      </a>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-indiancream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-indiancharcoal mb-4">
                Banquet Hall <span className="text-indianred">Gallery</span>
              </h2>
              <div className="w-20 h-1 bg-indiangold mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                Take a visual tour of our beautiful banquet hall and get inspired for your event.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                  <img 
                    src={image} 
                    alt={`Gallery image ${index + 1}`} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="border-white text-white hover:bg-white/20">
                      <Image className="mr-2 h-4 w-4" /> View Image
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-16 bg-indiancharcoal relative">
          <div className="absolute inset-0 spice-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-playfair font-bold text-white mb-4">
                Contact Us About Our <span className="text-indiangold">Banquet Hall</span>
              </h2>
              <p className="text-white/80 mb-8">
                Call us today at <span className="text-indiangold">+91 999-776-1232</span> to discuss your event requirements.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:+919997761232" className="inline-flex items-center justify-center gap-2 rounded-md bg-indiangold text-white hover:bg-indiangold/90 px-6 py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-lg">
                  <Phone className="h-5 w-5" /> Call Now: +91 9997761232
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Banquet;
