import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, BarChart3, Beef, Wheat, Users, Package, Store, User, FileText, Menu, Leaf } from "lucide-react";
interface LayoutProps {
  children: React.ReactNode;
}
const navigation = [{
  name: "Dashboard",
  href: "/dashboard",
  icon: BarChart3
}, {
  name: "Livestock",
  href: "/livestock",
  icon: Beef
}, {
  name: "Crops",
  href: "/crops",
  icon: Wheat
}, {
  name: "Employees",
  href: "/employees",
  icon: Users
}, {
  name: "Inventory",
  href: "/inventory",
  icon: Package
}, {
  name: "Store",
  href: "/store",
  icon: Store
}, {
  name: "Customer Portal",
  href: "/customer-portal",
  icon: User
}, {
  name: "Reports",
  href: "/reports",
  icon: FileText
}];
export function Layout({
  children
}: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (href: string) => location.pathname === href;
  return <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-green-600 rounded-md" />
                <span className="text-gray-900 text-2xl px-0 my-0 font-semibold">Nguata Farm</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map(item => {
              const Icon = item.icon;
              return <Link key={item.name} to={item.href} className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive(item.href) ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-gray-700"}`}>
                    <Icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Link>;
            })}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <nav className="flex flex-col space-y-4 mt-6">
                    {navigation.map(item => {
                    const Icon = item.icon;
                    return <Link key={item.name} to={item.href} className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${isActive(item.href) ? "bg-green-100 text-green-700" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"}`} onClick={() => setMobileMenuOpen(false)}>
                          <Icon className="h-4 w-4 mr-3" />
                          {item.name}
                        </Link>;
                  })}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>
    </div>;
}