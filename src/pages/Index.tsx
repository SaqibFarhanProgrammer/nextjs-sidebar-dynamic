import { useState } from "react";
import Header from "@/components/Header";
import CategorySidebar from "@/components/CategorySidebar";
import CategoryContent from "@/components/CategoryContent";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("agriculture");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setMobileMenuOpen(true)} />
      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <CategorySidebar 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
          />
        </div>

        {/* Mobile Sidebar */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetContent side="left" className="p-0 w-64">
            <CategorySidebar 
              selectedCategory={selectedCategory} 
              onSelectCategory={(category) => {
                setSelectedCategory(category);
                setMobileMenuOpen(false);
              }} 
            />
          </SheetContent>
        </Sheet>

        <CategoryContent categoryId={selectedCategory} />
      </div>
    </div>
  );
};

export default Index;
