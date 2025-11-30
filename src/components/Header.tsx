import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">J</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Jodiabazar</h1>
              <p className="text-xs text-muted-foreground">Trading Hub Of Pakistan</p>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search categories, businesses..." 
                className="pl-10 bg-background"
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Interviews
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Shop
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Gallery
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Members
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              About Us
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Contacts
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
