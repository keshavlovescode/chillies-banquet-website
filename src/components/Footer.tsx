
import React from 'react';
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Clock, Building2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-indiancharcoal text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Banquet Hall CTA */}
        <div className="mb-12 p-6 bg-gradient-to-r from-indiangold/30 to-indiangold/10 rounded-lg max-w-4xl mx-auto text-center">
          <Building2 className="h-12 w-12 text-indiangold mx-auto mb-2" />
          <h3 className="text-2xl font-playfair font-bold text-white mb-2">Our Elegant Banquet Hall</h3>
          <p className="mb-4 text-white/80">Perfect for weddings, corporate events, birthday parties, and special occasions.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/banquet" className="bg-indiangold hover:bg-indiangold/90 text-white px-4 py-2 rounded-md">
              View Banquet Hall
            </Link>
            <a href="tel:+919997761232" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md">
              Call: +91 9997761232
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Indian Chillies</h3>
            <p className="mb-2 flex items-start">
              <MapPin className="mr-2 h-5 w-5 shrink-0 text-indianred" />
              <span>Near Sikhera Road, Opposite Umesh Park, Modinagar Locality, Modinagar, Uttar Pradesh</span>
            </p>
            <p className="mb-2 flex items-center">
              <Phone className="mr-2 h-5 w-5 text-indianred" />
              <a href="tel:+919997761232" className="hover:text-indianred transition-colors">+91 9997761232</a>
            </p>
            <p className="mb-2 flex items-center">
              <Clock className="mr-2 h-5 w-5 text-indianred" />
              <span>Open daily: 8:00 AM - 11:00 PM</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-indianred transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-indianred transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/banquet" className="flex items-center text-indiangold hover:text-indiangold/80 transition-colors">
                  <Building2 className="mr-2 h-4 w-4" /> Banquet Hall
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indianred transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indianred transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 AM - 11:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>8:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Holiday Hours</span>
                <span>9:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="bg-white/10 hover:bg-indianred p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-indianred p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-indianred p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <p>FSSAI Lic. No: 22721106000072</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Indian Chillies Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
