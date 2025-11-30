import { Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="bg-card border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4 gap-2 md:gap-4">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={onMenuClick}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-lg md:text-2xl font-bold text-primary-foreground">J</span>
              </div>
              <div>
                <h1 className="text-base md:text-xl font-bold text-foreground">Jodiabazar</h1>
                <p className="text-[10px] md:text-xs text-muted-foreground hidden sm:block">Trading Hub Of Pakistan</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search categories, businesses..." 
                className="pl-10 bg-background"
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-3 lg:gap-6">
            <a href="#" className="text-xs lg:text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Interviews
            </a>
            <a href="#" className="text-xs lg:text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Shop
            </a>
            <a href="#" className="text-xs lg:text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Gallery
            </a>
            <a href="#" className="text-xs lg:text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Members
            </a>
            <a href="#" className="text-xs lg:text-sm font-medium text-foreground hover:text-primary transition-smooth">
              About Us
            </a>
            <a href="#" className="text-xs lg:text-sm font-medium text-foreground hover:text-primary transition-smooth">
              Contacts
            </a>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Search className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="h-auto">
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search categories, businesses..." 
                  className="pl-10 bg-background"
                />
              </div>
              <nav className="flex flex-col gap-4 mt-6">
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
