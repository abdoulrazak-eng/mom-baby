import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, Shield, Truck } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Premium Quality",
    description: "Only the best products for your family"
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Carefully selected with care and attention"
  },
  {
    icon: Shield,
    title: "Safe & Trusted",
    description: "All products tested for safety standards"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and secure shipping to your door"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "The best place for all my baby needs. Quality products and amazing service!",
    rating: 5
  },
  {
    name: "Emily Chen",
    text: "I love shopping here. They have everything I need for my little one.",
    rating: 5
  },
  {
    name: "Maria Rodriguez",
    text: "Excellent customer service and fast shipping. Highly recommend!",
    rating: 5
  }
];

const FeaturedSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best experience for every mom and baby
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="text-center bg-card border-border/50 shadow-card">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border/50 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Start Shopping Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;