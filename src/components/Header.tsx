
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-indiancream/90 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/b93cb0f4-887d-45c9-bc33-118b0511eb5b.png" 
            alt="Indian Chillies Logo" 
            className="h-12 w-auto"
          />
          <div>
            <h1 className="font-playfair text-2xl font-bold text-indianred">Indian Chillies</h1>
            <p className="text-xs text-indiancharcoal/70 -mt-1">Restaurant & Banquet Hall · FSSAI: 22721106000072</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium text-indiancharcoal hover:text-indianred transition-colors">Home</Link>
          <Link to="/menu" className="font-medium text-indiancharcoal hover:text-indianred transition-colors">Menu</Link>
          <Link to="/banquet" className="font-medium text-indiancharcoal hover:text-indianred transition-colors relative group">
            <span className="flex items-center">
              <Building2 className="mr-1 h-4 w-4 text-indiangold" /> 
              Banquet Hall
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indiangold transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          <Link to="/about" className="font-medium text-indiancharcoal hover:text-indianred transition-colors">About</Link>
          <Link to="/contact" className="font-medium text-indiancharcoal hover:text-indianred transition-colors">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-indiancharcoal" />
          ) : (
            <Menu className="h-6 w-6 text-indiancharcoal" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-indiancream border-t border-gray-200 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            <Link 
              to="/" 
              className="py-3 font-medium text-indiancharcoal hover:text-indianred transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="py-3 font-medium text-indiancharcoal hover:text-indianred transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/banquet" 
              className="py-3 font-medium text-indianbrown flex items-center banquet-highlight px-3 my-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <Building2 className="mr-2 h-5 w-5 text-indiangold" /> Banquet Hall
            </Link>
            <Link 
              to="/about" 
              className="py-3 font-medium text-indiancharcoal hover:text-indianred transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="py-3 font-medium text-indiancharcoal hover:text-indianred transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
