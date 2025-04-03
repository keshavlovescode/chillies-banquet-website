
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Utensils, ChefHat, Menu, X, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-indiancream/90 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <ChefHat className="h-8 w-8 text-indianred" />
          <div>
            <h1 className="font-playfair text-2xl font-bold text-indianred">Indian Chillies</h1>
            <p className="text-xs text-indiancharcoal/70 -mt-1">Restaurant & Banquet Hall</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium text-indiancharcoal hover:text-indianred transition-colors">Home</Link>
          <Link to="/menu" className="font-medium text-indiancharcoal hover:text-indianred transition-colors">Menu</Link>
          <Link to="/banquet" className="font-medium text-indiancharcoal hover:text-indianred transition-colors">Banquet Hall</Link>
          <Link to="/about" className="font-medium text-indiancharcoal hover:text-indianred transition-colors">About</Link>
          <Link to="/contact" className="font-medium text-indiancharcoal hover:text-indianred transition-colors">Contact</Link>
          <Link to="/order-online" className="font-medium text-indiancharcoal hover:text-indianred transition-colors flex items-center">
            <ShoppingCart className="mr-1 h-4 w-4" /> Order Online
          </Link>
          <Button className="bg-indianred hover:bg-indianred/90 text-white">
            <Utensils className="mr-2 h-4 w-4" /> Reservations
          </Button>
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
              className="py-3 font-medium text-indiancharcoal hover:text-indianred transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Banquet Hall
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
            <Link 
              to="/order-online" 
              className="py-3 font-medium text-indiancharcoal hover:text-indianred transition-colors flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart className="mr-1 h-4 w-4" /> Order Online
            </Link>
            <Button 
              className="mt-4 bg-indianred hover:bg-indianred/90 text-white w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <Utensils className="mr-2 h-4 w-4" /> Make Reservation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
