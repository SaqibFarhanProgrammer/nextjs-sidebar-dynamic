import { 
  Leaf, Building, BookOpen, Briefcase, Beaker, Hammer, 
  Cpu, Package, Globe, Stethoscope, Home, ShoppingBag,
  Factory, Printer, Shapes, Shield, Shirt, Plane, Users, MoreHorizontal
} from "lucide-react";

export interface Category {
  id: string;
  name: string;
  icon: any;
}

export const categories: Category[] = [
  { id: "agriculture", name: "Agriculture & Food", icon: Leaf },
  { id: "builders", name: "Builders & Real Estate", icon: Building },
  { id: "books", name: "Books & Education", icon: BookOpen },
  { id: "business-services", name: "Business Services & Others", icon: Briefcase },
  { id: "chemicals", name: "Chemicals & Minerals", icon: Beaker },
  { id: "construction", name: "Construction, Material & Scrap", icon: Hammer },
  { id: "computers", name: "Computers, I.T & Telecommunication", icon: Cpu },
  { id: "excess-inventory", name: "Excess Inventory", icon: Package },
  { id: "foreign-companies", name: "Foreign Companies", icon: Globe },
  { id: "health", name: "Health, Lab & Surgical Items", icon: Stethoscope },
  { id: "household", name: "House Hold Furnitures & Appliances", icon: Home },
  { id: "leather", name: "Leather Products", icon: ShoppingBag },
  { id: "plant-machinery", name: "Plant & Machineries", icon: Factory },
  { id: "printing", name: "Printing & Packaging", icon: Printer },
  { id: "plastic", name: "Plastic & Rubber", icon: Shapes },
  { id: "security", name: "Security Products & Services", icon: Shield },
  { id: "textile", name: "Textile & Garments", icon: Shirt },
  { id: "travel", name: "Travel, Tourism & Sports", icon: Plane },
  { id: "women-led", name: "Women Led Businesses", icon: Users },
  { id: "others", name: "Others", icon: MoreHorizontal },
];

interface CategorySidebarProps {
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CategorySidebar = ({ selectedCategory, onSelectCategory }: CategorySidebarProps) => {
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border h-[calc(100vh-73px)] overflow-y-auto">
      <div className="p-4">
        <h2 className="text-sm font-semibold text-sidebar-foreground mb-3 flex items-center gap-2">
          <div className="w-1 h-4 bg-primary rounded-full"></div>
          Categories
        </h2>
        <nav className="space-y-1">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => onSelectCategory(category.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-smooth ${
                  isSelected
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-primary"
                }`}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                <span className="text-left">{category.name}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default CategorySidebar;
