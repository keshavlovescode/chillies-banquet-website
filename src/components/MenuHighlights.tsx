
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const menuItems = [
  {
    name: "Butter Chicken",
    description: "Tender chicken cooked in a rich and creamy tomato sauce with aromatic spices.",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    name: "Vegetable Biryani",
    description: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    name: "Lamb Rogan Josh",
    description: "Tender lamb cooked with aromatic spices in a rich and flavorful sauce.",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    name: "Paneer Tikka Masala",
    description: "Grilled cottage cheese cubes in a creamy tomato sauce with aromatic spices.",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
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
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
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
          <Button className="bg-indianred hover:bg-indianred/90 text-white">
            View Complete Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
