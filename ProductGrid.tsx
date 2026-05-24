import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-soft border-t border-border/50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <h3 className="text-xl font-bold text-foreground">
                Mom & Baby Store
              </h3>
            </div>
            <p className="text-muted-foreground">
              Your trusted destination for everything mom and baby needs. We're here to support your journey with love and care.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Baby Essentials</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Mom Care</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Baby Toys</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Baby Clothing</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Shipping Info</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Returns</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">hello@mombaby.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">123 Baby Street, City</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Mom & Baby Store. Made with ❤️ for families everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;