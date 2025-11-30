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
      <div className="container mx-auto px-6 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            {Icon && (
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="h-7 w-7 text-primary" />
              </div>
            )}
            <div>
              <h1 className="text-3xl font-bold text-foreground">{category?.name}</h1>
              <p className="text-muted-foreground mt-1">
                Browse and connect with verified businesses in this category
              </p>
            </div>
          </div>

          {/* Banner Ad */}
          <div className="mt-6 rounded-xl overflow-hidden bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-border">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Banner Advertise Here!
              </h2>
              <p className="text-muted-foreground mb-4">
                Reach thousands of potential customers in the {category?.name} sector
              </p>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Business Listings */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Featured Businesses
          </h2>
          
          {businesses.map((business) => (
            <Card key={business.id} className="shadow-soft hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{business.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {business.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{business.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{business.contact}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>{business.email}</span>
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
