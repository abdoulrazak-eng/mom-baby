import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Menu } from "lucide-react";
import { CartDrawer } from "./CartDrawer";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <h1 className="text-2xl font-bold text-foreground">Mom & Baby Store</h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-foreground hover:text-primary transition-smooth">
              Shop
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-smooth">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <CartDrawer />
            <Button asChild variant="default" className="hidden sm:inline-flex">
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
