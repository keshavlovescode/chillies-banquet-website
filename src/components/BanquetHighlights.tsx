
import { Card, CardContent } from "@/components/ui/card";

const BanquetHighlights = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-indiancream to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-indiancharcoal text-center mb-4">
          Why Our <span className="text-indianred">Banquet Hall</span> Is The Best
        </h2>
        <div className="w-20 h-1 bg-indiangold mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden border-none shadow-lg">
            <img 
              src="/lovable-uploads/67cc8a92-84f6-41a4-b32c-1a93a34e8088.png"
              alt="Elegant Banquet Setup" 
              className="h-64 w-full object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-playfair font-bold text-indiancharcoal mb-2">Elegant Ambiance</h3>
              <p className="text-gray-600">Sophisticated decor and lighting that creates the perfect atmosphere for your special events.</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-lg">
            <img 
              src="/lovable-uploads/11104a44-565b-45f7-884e-f97fba6c185b.png"
              alt="Table Settings" 
              className="h-64 w-full object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-playfair font-bold text-indiancharcoal mb-2">Perfect Setup</h3>
              <p className="text-gray-600">Professional table settings and arrangements that cater to your specific needs.</p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-lg">
            <img 
              src="/lovable-uploads/c473df31-f311-4c3a-8388-038950b206e2.png"
              alt="Themed Decoration" 
              className="h-64 w-full object-cover"
            />
            <CardContent className="p-6">
              <h3 className="text-xl font-playfair font-bold text-indiancharcoal mb-2">Customizable Themes</h3>
              <p className="text-gray-600">Versatile space that can be decorated to match any theme or occasion perfectly.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BanquetHighlights;
