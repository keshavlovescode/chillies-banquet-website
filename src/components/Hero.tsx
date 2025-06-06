
import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-indiancharcoal overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('/lovable-uploads/02880992-4e66-4b19-8ba2-a6dae64a3bca.png')", 
          filter: "brightness(0.5)"
        }}
      ></div>
      
      {/* Floating images for visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          src="/lovable-uploads/d467db32-2a71-42c3-904d-376c7454bb46.png"
          alt="Decorative Food 1"
          className="absolute -right-20 top-20 w-64 h-64 object-cover rounded-full opacity-30 animate-float"
        />
        <img 
          src="/lovable-uploads/8ee8f53d-d6a3-46b0-bfc2-cafc185ba919.png"
          alt="Decorative Food 2"
          className="absolute -left-20 bottom-40 w-48 h-48 object-cover rounded-full opacity-30 animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>
      
      {/* Spice pattern overlay */}
      <div className="absolute inset-0 spice-pattern opacity-30"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center items-center min-h-screen text-center">
        <div className="animate-fade-up">
          <img 
            src="/lovable-uploads/b93cb0f4-887d-45c9-bc33-118b0511eb5b.png" 
            alt="Indian Chillies Logo" 
            className="h-20 w-auto mx-auto mb-4"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-4">
            <span className="text-indiangold">Indian</span> Chillies
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">Restaurant & <span className="text-indiangold font-semibold">Banquet Hall</span></p>
          <div className="w-24 h-1 bg-indianred mx-auto my-6"></div>
          <p className="max-w-2xl mx-auto text-white/90 text-lg mb-8">
            Experience authentic Indian cuisine and host your special events in our elegant banquet hall.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/banquet">
              <Button variant="outline" className="border-indiangold text-indiangold hover:bg-indiangold/10 text-lg px-6 py-6">
                <Building2 className="mr-2 h-5 w-5" /> Explore Banquet Hall
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 p-4 banquet-highlight rounded-lg max-w-lg mx-auto">
            <p className="text-white/90">
              <span className="font-bold text-indiangold">Special Offer:</span> Book our banquet hall now for weddings and get complimentary decor!
            </p>
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
