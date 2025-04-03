
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

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
              Contact <span className="text-indiangold">Us</span>
            </h1>
            <div className="w-24 h-1 bg-indianred mx-auto my-6"></div>
            <p className="text-white/90 text-lg max-w-2xl">
              Get in touch with us for reservations, inquiries, or feedback.
            </p>
          </div>
        </div>

        {/* Contact Information Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-indiancream p-8 rounded-lg shadow-md text-center">
                <Phone className="h-12 w-12 text-indianred mx-auto mb-4" />
                <h3 className="text-xl font-playfair font-semibold text-indiancharcoal mb-2">Phone</h3>
                <p className="text-gray-700">(123) 456-7890</p>
                <p className="text-gray-700">(123) 456-7891</p>
              </div>
              
              <div className="bg-indiancream p-8 rounded-lg shadow-md text-center">
                <Mail className="h-12 w-12 text-indianred mx-auto mb-4" />
                <h3 className="text-xl font-playfair font-semibold text-indiancharcoal mb-2">Email</h3>
                <p className="text-gray-700">info@indianchillies.com</p>
                <p className="text-gray-700">reservations@indianchillies.com</p>
              </div>
              
              <div className="bg-indiancream p-8 rounded-lg shadow-md text-center">
                <Clock className="h-12 w-12 text-indianred mx-auto mb-4" />
                <h3 className="text-xl font-playfair font-semibold text-indiancharcoal mb-2">Hours</h3>
                <p className="text-gray-700">Monday - Friday: 11am - 10pm</p>
                <p className="text-gray-700">Saturday - Sunday: 11am - 11pm</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16 bg-indiancream">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-playfair font-bold text-indiancharcoal mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <Input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border-gray-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border-gray-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Your Phone</label>
                      <Input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-50 border-gray-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <Input
                        id="subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border-gray-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border-gray-200 min-h-[150px]"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-indianred hover:bg-indianred/90 text-white"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>

              {/* Map and Address */}
              <div>
                <h2 className="text-3xl font-playfair font-bold text-indiancharcoal mb-6">
                  Our Location
                </h2>
                <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                  <div className="flex items-start mb-4">
                    <MapPin className="h-6 w-6 text-indianred mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-indiancharcoal mb-1">Address</h3>
                      <p className="text-gray-600">123 Spice Street</p>
                      <p className="text-gray-600">Flavortown, FL 12345</p>
                      <p className="text-gray-600">United States</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-indianred mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold text-indiancharcoal mb-1">Directions</h3>
                      <p className="text-gray-600">Located in downtown Flavortown, near City Park. Parking available behind the restaurant.</p>
                    </div>
                  </div>
                </div>
                
                <div className="h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215663173109!2d-73.98780372374367!3d40.75801057138285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1701696149082!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media */}
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

        {/* FAQ */}
        <section className="py-16 bg-indiancream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-indiancharcoal mb-4">
                Frequently Asked <span className="text-indianred">Questions</span>
              </h2>
              <div className="w-20 h-1 bg-indiangold mx-auto mb-6"></div>
              <p className="max-w-2xl mx-auto text-gray-700">
                Find answers to our most commonly asked questions.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-playfair font-semibold text-indiancharcoal mb-2">Do you take reservations?</h3>
                  <p className="text-gray-600">Yes, we recommend making reservations, especially for dinner and weekends. You can make a reservation online or by calling us.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-playfair font-semibold text-indiancharcoal mb-2">Do you offer vegetarian options?</h3>
                  <p className="text-gray-600">Yes, we have an extensive vegetarian menu with many delicious options to choose from.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-playfair font-semibold text-indiancharcoal mb-2">Can you accommodate dietary restrictions?</h3>
                  <p className="text-gray-600">Yes, we can accommodate various dietary restrictions. Please inform your server about any allergies or dietary needs when ordering.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-playfair font-semibold text-indiancharcoal mb-2">How do I book the banquet hall for an event?</h3>
                  <p className="text-gray-600">You can book our banquet hall by contacting our events coordinator. We recommend booking at least 2-3 months in advance for large events.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
