import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { History, ChefHat, Star, Users } from "lucide-react";

const aboutSections = [
  {
    icon: <History className="h-10 w-10 text-indiangold" />,
    title: "Our History",
    description: "Founded in 2005, Indian Chillies began as a small family restaurant with a passion for authentic Indian cuisine. Over the years, we've grown into a beloved culinary destination, now featuring an elegant banquet hall for hosting special occasions.",
  },
  {
    icon: <ChefHat className="h-10 w-10 text-indiangold" />,
    title: "Our Cuisine",
    description: "Our menu features authentic dishes from various regions of India, prepared with traditional recipes and the finest ingredients. Our chefs bring decades of experience to create a diverse and flavorful menu that captures the essence of Indian cuisine.",
  },
  {
    icon: <Star className="h-10 w-10 text-indiangold" />,
    title: "Our Philosophy",
    description: "At Indian Chillies, we believe in providing an immersive dining experience that celebrates the rich tapestry of Indian culture and cuisine. We are committed to excellence in food quality, service, and ambiance.",
  },
  {
    icon: <Users className="h-10 w-10 text-indiangold" />,
    title: "Our Team",
    description: "Our dedicated team of chefs, servers, and event planners work together to ensure every visit to Indian Chillies is memorable. With a passion for hospitality and attention to detail, our staff is the heart of our restaurant.",
  },
];

const values = [
  {
    title: "Quality",
    description: "We use only the freshest, highest-quality ingredients in all our dishes.",
  },
  {
    title: "Authenticity",
    description: "Our recipes stay true to traditional Indian cooking methods and flavors.",
  },
  {
    title: "Hospitality",
    description: "We treat every guest like family, ensuring you feel welcome and valued.",
  },
  {
    title: "Innovation",
    description: "While respecting tradition, we also embrace creative approaches to Indian cuisine.",
  },
  {
    title: "Community",
    description: "We actively participate in and give back to our local community.",
  },
  {
    title: "Sustainability",
    description: "We strive to minimize our environmental impact through responsible practices.",
  },
];

const About = () => {
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
              backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')", 
              filter: "brightness(0.3)"
            }}
          ></div>
          
          {/* Spice pattern overlay */}
          <div className="absolute inset-0 spice-pattern opacity-30"></div>
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
              About <span className="text-indiangold">Indian Chillies</span>
            </h1>
            <div className="w-24 h-1 bg-indianred mx-auto my-6"></div>
            <p className="text-white/90 text-lg max-w-2xl">
              Learn about our story, our team, and our passion for authentic Indian cuisine.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-playfair font-bold text-indiancharcoal mb-4">
                  Our <span className="text-indianred">Story</span>
                </h2>
                <div className="w-20 h-1 bg-indiangold mb-6"></div>
                <p className="text-gray-700 mb-4">
                  Founded in 2005, Indian Chillies has been serving authentic Indian cuisine
                  prepared with traditional recipes and the finest ingredients. Our chefs bring
                  decades of experience from various regions of India to create a diverse and
                  flavorful menu.
                </p>
                <p className="text-gray-700 mb-4">
                  What started as a small family restaurant has grown into a beloved culinary
                  destination, now featuring an elegant banquet hall for hosting special occasions.
                  We take pride in offering an immersive dining experience that celebrates the
                  rich tapestry of Indian culture and cuisine.
                </p>
                <p className="text-gray-700 mb-6">
                  Over the years, we have established ourselves as a cornerstone of the community,
                  bringing people together through the universal language of food. Our commitment
                  to quality, authenticity, and exceptional service has earned us a loyal following
                  of customers who have become like family.
                </p>
              </div>
              
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
        </section>

        {/* About Sections */}
        <section className="py-16 bg-indiancream spice-pattern">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aboutSections.map((section, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="mb-4">{section.icon}</div>
                  <h3 className="text-xl font-playfair font-semibold text-indiancharcoal mb-2">{section.title}</h3>
                  <p className="text-gray-600">{section.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-indiancharcoal mb-4">
                Our <span className="text-indianred">Values</span>
              </h2>
              <div className="w-20 h-1 bg-indiangold mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                These core principles guide everything we do at Indian Chillies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="border border-gray-100 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-playfair font-semibold text-indiancharcoal mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reservation CTA */}
        <section className="py-16 bg-indiancharcoal relative">
          <div className="absolute inset-0 spice-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-playfair font-bold text-white mb-4">
                Come Experience <span className="text-indiangold">Indian Chillies</span>
              </h2>
              <p className="text-white/80 mb-8">
                We invite you to dine with us and experience our authentic Indian cuisine and warm hospitality.
              </p>
              <Button className="bg-indianred hover:bg-indianred/90 text-white">
                Make a Reservation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
