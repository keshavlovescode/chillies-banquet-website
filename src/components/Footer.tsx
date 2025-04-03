
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-indiancharcoal text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-playfair text-indiangold mb-4">Indian Chillies</h3>
            <p className="text-gray-300 mb-4">
              Authentic Indian cuisine and a premium banquet hall for your special occasions.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-indiangold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-indiangold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair text-indiangold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-indiangold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-indiangold transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/banquet" className="text-gray-300 hover:text-indiangold transition-colors">
                  Banquet Hall
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-indiangold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-indiangold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-playfair text-indiangold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-indiangold mt-0.5" />
                <span className="text-gray-300">
                  123 Spice Street, Flavortown, FL 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-indiangold" />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-indiangold" />
                <span className="text-gray-300">info@indianchillies.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-playfair text-indiangold mb-4">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-indiangold mt-0.5" />
                <div>
                  <span className="block text-gray-300">Mon-Fri: 11am - 10pm</span>
                  <span className="block text-gray-300">Sat-Sun: 11am - 11pm</span>
                </div>
              </li>
            </ul>
            <Button className="mt-6 bg-indianred hover:bg-indianred/90 text-white">
              Make Reservation
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} Indian Chillies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
