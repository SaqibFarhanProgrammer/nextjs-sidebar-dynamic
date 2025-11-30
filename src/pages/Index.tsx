import { useState } from "react";
import Header from "@/components/Header";
import CategorySidebar from "@/components/CategorySidebar";
import CategoryContent from "@/components/CategoryContent";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("agriculture");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <CategorySidebar 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />
        <CategoryContent categoryId={selectedCategory} />
      </div>
    </div>
  );
};

export default Index;
