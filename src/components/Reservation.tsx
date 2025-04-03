
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Reservation = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    time: "",
    occasion: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Reservation submitted:", { ...formData, date });
    toast({
      title: "Reservation Request Sent",
      description: "We'll confirm your reservation shortly. Thank you!",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      guests: "",
      time: "",
      occasion: "",
    });
    setDate(undefined);
  };

  return (
    <section className="py-20 bg-indiancharcoal relative" id="reservation">
      {/* Background Pattern */}
      <div className="absolute inset-0 spice-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
            Make a <span className="text-indiangold">Reservation</span>
          </h2>
          <div className="w-20 h-1 bg-indianred mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            Reserve your table at Indian Chillies and enjoy an unforgettable dining experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Name"
                    className="bg-gray-50 border-gray-200"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Phone"
                    className="bg-gray-50 border-gray-200"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="bg-gray-50 border-gray-200"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
                  <Select
                    value={formData.guests}
                    onValueChange={(value) => handleSelectChange("guests", value)}
                  >
                    <SelectTrigger className="bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Select Guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </SelectItem>
                      ))}
                      <SelectItem value="more">More than 10</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal bg-gray-50 border-gray-200",
                          !date && "text-gray-400"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Select a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0);
                          return date < today;
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                  <Select
                    value={formData.time}
                    onValueChange={(value) => handleSelectChange("time", value)}
                  >
                    <SelectTrigger className="bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Select Time" />
                    </SelectTrigger>
                    <SelectContent>
                      {["11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", 
                        "1:30 PM", "2:00 PM", "2:30 PM", "5:00 PM", "5:30 PM", 
                        "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", 
                        "8:30 PM", "9:00 PM", "9:30 PM"].map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Occasion (Optional)</label>
                  <Select
                    value={formData.occasion}
                    onValueChange={(value) => handleSelectChange("occasion", value)}
                  >
                    <SelectTrigger className="bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Select Occasion" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Birthday", "Anniversary", "Date Night", "Business Dinner", "Family Gathering", "Other"].map((occasion) => (
                        <SelectItem key={occasion} value={occasion}>
                          {occasion}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mt-8">
                <Button
                  type="submit"
                  className="w-full bg-indianred hover:bg-indianred/90 text-white py-6"
                >
                  Book My Table
                </Button>
              </div>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                By making a reservation, you agree to our reservation policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
