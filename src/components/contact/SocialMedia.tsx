
import React from "react";
import { Facebook, Instagram } from "lucide-react";

const SocialMedia = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-playfair font-bold text-indiancharcoal mb-4">
            Connect With <span className="text-indianred">Us</span>
          </h2>
          <div className="w-20 h-1 bg-indiangold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8">
            Follow us on social media for updates, special offers, and behind-the-scenes content.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" className="p-4 bg-indiancream rounded-full transition-colors hover:bg-indianred hover:text-white">
              <Facebook className="h-8 w-8" />
            </a>
            <a href="https://instagram.com" className="p-4 bg-indiancream rounded-full transition-colors hover:bg-indianred hover:text-white">
              <Instagram className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
