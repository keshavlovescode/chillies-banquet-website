
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
      message: "",
    });
  };

  return (
    <section className="py-20 bg-indiancream" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-indiancharcoal mb-4">
            Get in <span className="text-indianred">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-indiangold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Have questions about our restaurant or banquet hall? Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-playfair font-semibold text-indiancharcoal mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border-gray-200"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border-gray-200"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-50 border-gray-200"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
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

          {/* Contact Information */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-playfair font-semibold text-indiancharcoal mb-6">
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-indianred/10 text-indianred">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-indiancharcoal">Our Location</h4>
                  <p className="text-gray-600">123 Spice Street, Flavortown, FL 12345</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-indianred/10 text-indianred">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-indiancharcoal">Phone Number</h4>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-indianred/10 text-indianred">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-indiancharcoal">Email Address</h4>
                  <p className="text-gray-600">info@indianchillies.com</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-indianred/10 text-indianred">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-indiancharcoal">Opening Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 11am - 10pm</p>
                  <p className="text-gray-600">Saturday - Sunday: 11am - 11pm</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8 h-[250px] rounded-lg overflow-hidden shadow-lg">
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
  );
};

export default Contact;
