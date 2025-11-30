import { categories } from "./CategorySidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Phone, Mail, ExternalLink } from "lucide-react";

interface CategoryContentProps {
  categoryId: string;
}

// Sample business data for demonstration
const getBusinessesByCategory = (categoryId: string) => {
  const category = categories.find(c => c.id === categoryId);
  
  return [
    {
      id: 1,
      name: `Leading ${category?.name} Company`,
      description: `Top-rated provider of ${category?.name.toLowerCase()} solutions in Pakistan with over 10 years of experience.`,
      location: "Karachi, Pakistan",
      contact: "+92 300 1234567",
      email: "info@company.com"
    },
    {
      id: 2,
      name: `Premium ${category?.name} Services`,
      description: `Quality ${category?.name.toLowerCase()} services with nationwide delivery and customer support.`,
      location: "Lahore, Pakistan",
      contact: "+92 301 7654321",
      email: "contact@services.com"
    },
    {
      id: 3,
      name: `${category?.name} Specialists`,
      description: `Expert team providing comprehensive ${category?.name.toLowerCase()} solutions for businesses.`,
      location: "Islamabad, Pakistan",
      contact: "+92 302 9876543",
      email: "hello@specialists.com"
    }
  ];
};

const CategoryContent = ({ categoryId }: CategoryContentProps) => {
  const category = categories.find(c => c.id === categoryId);
  const businesses = getBusinessesByCategory(categoryId);
  const Icon = category?.icon;

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-8">
        {/* Category Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-start md:items-center gap-3 md:gap-4 mb-4">
            {Icon && (
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="h-5 w-5 md:h-7 md:w-7 text-primary" />
              </div>
            )}
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-foreground">{category?.name}</h1>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                Browse and connect with verified businesses
              </p>
            </div>
          </div>

          {/* Banner Ad */}
          <div className="mt-4 md:mt-6 rounded-xl overflow-hidden bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-border">
            <div className="p-4 md:p-8 text-center">
              <h2 className="text-lg md:text-2xl font-bold text-foreground mb-2">
                Banner Advertise Here!
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                Reach thousands of customers in {category?.name}
              </p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Business Listings */}
        <div className="space-y-3 md:space-y-4">
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
            Featured Businesses
          </h2>
          
          {businesses.map((business) => (
            <Card key={business.id} className="shadow-soft hover:shadow-medium transition-smooth">
              <CardHeader className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base md:text-lg">{business.name}</CardTitle>
                      <CardDescription className="mt-1 text-xs md:text-sm">
                        {business.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full md:w-auto">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 text-xs md:text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                    <span className="truncate">{business.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                    <span>{business.contact}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                    <span className="truncate">{business.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryContent;
