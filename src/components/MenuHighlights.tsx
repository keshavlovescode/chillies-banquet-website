
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Kadai Paneer",
    description: "Kadai paneer is a spicy, warming, flavorful and super delicious dish made by cooking paneer in a fragrant gravy.",
    price: "₹280",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    bestseller: true,
  },
  {
    name: "Dal Makhani",
    description: "The typical vegetables included in mixed vegetable are cauliflower, carrots, cabbage, french beans.",
    price: "₹190",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    bestseller: true,
  },
  {
    name: "Special Thali",
    description: "Dal Makhani+Shahi Paneer+Mixed Veg+Butter Naan+Laccha Paratha+Salad+Raita+Rice+Gulab Jamun",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    bestseller: true,
  },
  {
    name: "Veg Biryani",
    description: "A classic dish made by layering rice over slow cooked mixed veg gravy.",
    price: "₹220",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const MenuHighlights = () => {
  return (
    <section className="py-20 bg-indiancream spice-pattern" id="menu-highlights">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-indiancharcoal mb-4">
            Our Signature <span className="text-indianred">Dishes</span>
          </h2>
          <div className="w-20 h-1 bg-indiangold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Explore our chef's selection of the finest Indian cuisine, prepared with authentic
            recipes and the freshest ingredients to delight your taste buds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {item.bestseller && (
                  <div className="absolute top-2 right-2 bg-indiangold text-white text-xs px-2 py-1 rounded-full">
                    Bestseller
                  </div>
                )}
              </div>
              <CardContent className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-playfair text-xl font-semibold text-indiancharcoal">{item.name}</h3>
                  <span className="text-indianred font-semibold">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/menu">
            <Button className="bg-indianred hover:bg-indianred/90 text-white mx-2">
              View Complete Menu
            </Button>
          </Link>
          <Link to="/order-online">
            <Button className="bg-indiangold hover:bg-indiangold/90 text-white mx-2">
              Order Online <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
