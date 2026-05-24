import { Card, CardContent } from "@/components/ui/card";
import babyEssentials from "@/assets/baby-essentials.jpg";
import momCare from "@/assets/mom-care.jpg";
import babyToys from "@/assets/baby-toys.jpg";
import babyClothing from "@/assets/baby-clothing.jpg";

const categories = [
  {
    name: "Baby Essentials",
    image: babyEssentials,
    description: "Everything your little one needs from day one"
  },
  {
    name: "Mom Care",
    image: momCare,
    description: "Self-care products for expecting and new mothers"
  },
  {
    name: "Baby Toys",
    image: babyToys,
    description: "Safe, educational, and fun toys for all ages"
  },
  {
    name: "Baby Clothing",
    image: babyClothing,
    description: "Adorable and comfortable outfits for your baby"
  }
];

const Categories = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collections designed for every stage of your journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-soft transition-smooth border-border/50 bg-card overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;