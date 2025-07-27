import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Leaf, 
  BarChart3, 
  Store, 
  Users, 
  Beef, 
  Wheat, 
  Package, 
  FileText,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Farm Dashboard",
      description: "Real-time insights into all farm operations and performance metrics"
    },
    {
      icon: Beef,
      title: "Livestock Management",
      description: "Track dairy production, health records, and breeding schedules"
    },
    {
      icon: Wheat,
      title: "Crop Management",
      description: "Monitor avocado orchards and vegetable farming operations"
    },
    {
      icon: Users,
      title: "Employee Management",
      description: "Manage 10+ employees with task assignments and payroll tracking"
    },
    {
      icon: Package,
      title: "Inventory Control",
      description: "Track feed, tools, pesticides, and harvested products"
    },
    {
      icon: Store,
      title: "E-Commerce Store",
      description: "Sell farm produce online with integrated payment solutions"
    }
  ];

  const benefits = [
    "Real-time farm data monitoring",
    "Integrated e-commerce platform",
    "Employee task management",
    "Inventory tracking system",
    "Financial reporting tools",
    "Mobile-responsive design"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">GreenHarvest Farm</span>
            </div>
            <div className="flex space-x-4">
              <Link to="/store">
                <Button variant="outline">Visit Store</Button>
              </Link>
              <Link to="/dashboard">
                <Button>Farm Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Modern Farm Management
            <span className="text-green-600 block">& E-Commerce Platform</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive solution for dairy farming, poultry management, crop cultivation, 
            and online sales. Streamline your operations and grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="w-full sm:w-auto">
                Access Farm Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/store">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Farm Management Solution
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to run a modern, efficient farm operation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon className="h-10 w-10 text-green-600 mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose GreenHarvest Farm Management?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">150+</div>
                <div className="text-sm text-gray-600">Dairy Cows</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Layer Hens</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-orange-600">25</div>
                <div className="text-sm text-gray-600">Acres Farmed</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-600">10</div>
                <div className="text-sm text-gray-600">Employees</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start managing your farm operations more efficiently today
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
