
import { Button } from "@/components/ui/button";
import { Utensils, ChefHat } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-indiancharcoal overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/lovable-uploads/d467db32-2a71-42c3-904d-376c7454bb46.png')", 
          filter: "brightness(0.5)"
        }}
      ></div>
      
      {/* Spice pattern overlay */}
      <div className="absolute inset-0 spice-pattern opacity-30"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center items-center min-h-screen text-center">
        <div className="animate-fade-up">
          <ChefHat className="h-16 w-16 text-indiangold mx-auto mb-4" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-4">
            <span className="text-indiangold">Indian</span> Chillies
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">Restaurant & Banquet Hall</p>
          <div className="w-24 h-1 bg-indianred mx-auto my-6"></div>
          <p className="max-w-2xl mx-auto text-white/90 text-lg mb-8">
            Experience authentic Indian cuisine and host your special events in our elegant banquet hall.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-indianred hover:bg-indianred/90 text-white text-lg px-6 py-6">
              <Utensils className="mr-2 h-5 w-5" /> Reserve a Table
            </Button>
            <Button variant="outline" className="border-indiangold text-indiangold hover:bg-indiangold/10 text-lg px-6 py-6">
              Explore Menu
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="w-0.5 h-10 bg-indiangold/50"></div>
        <div className="w-4 h-4 border-r-2 border-b-2 border-indiangold/50 transform rotate-45 mt-1"></div>
      </div>
    </div>
  );
};

export default Hero;
