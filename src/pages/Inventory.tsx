
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Package, 
  Search, 
  Plus,
  AlertTriangle,
  TrendingDown,
  TrendingUp,
  Archive
} from "lucide-react";

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const inventoryItems = [
    {
      id: 1,
      name: "Cattle Feed - Premium",
      category: "Feed",
      currentStock: 450,
      minStock: 200,
      maxStock: 1000,
      unit: "kg",
      costPerUnit: 1.25,
      supplier: "AgriSupply Co.",
      lastRestocked: "2024-01-05",
      status: "good"
    },
    {
      id: 2,
      name: "Poultry Feed - Layer",
      category: "Feed",
      currentStock: 125,
      minStock: 150,
      maxStock: 500,
      unit: "kg",
      costPerUnit: 0.95,
      supplier: "FarmFeed Ltd.",
      lastRestocked: "2024-01-03",
      status: "low"
    },
    {
      id: 3,
      name: "Organic Pesticide",
      category: "Chemicals",
      currentStock: 35,
      minStock: 10,
      maxStock: 100,
      unit: "liters",
      costPerUnit: 12.50,
      supplier: "EcoChemicals",
      lastRestocked: "2024-01-01",
      status: "good"
    },
    {
      id: 4,
      name: "Fertilizer - NPK",
      category: "Fertilizer",
      currentStock: 5,
      minStock: 25,
      maxStock: 200,
      unit: "bags",
      costPerUnit: 45.00,
      supplier: "GreenGrow",
      lastRestocked: "2023-12-20",
      status: "critical"
    },
    {
      id: 5,
      name: "Vegetable Seeds - Spinach",
      category: "Seeds",
      currentStock: 15,
      minStock: 5,
      maxStock: 50,
      unit: "packets",
      costPerUnit: 8.00,
      supplier: "SeedMart",
      lastRestocked: "2024-01-02",
      status: "good"
    },
    {
      id: 6,
      name: "Milking Equipment Cleaner",
      category: "Cleaning",
      currentStock: 8,
      minStock: 12,
      maxStock: 30,
      unit: "bottles",
      costPerUnit: 15.75,
      supplier: "CleanFarm",
      lastRestocked: "2023-12-28",
      status: "low"
    }
  ];

  const harvestedProducts = [
    { name: "Fresh Milk", quantity: 2850, unit: "liters", value: 9975, trend: "up" },
    { name: "Farm Eggs", quantity: 420, unit: "dozens", value: 1764, trend: "up" },
    { name: "Avocados", quantity: 150, unit: "kg", value: 420, trend: "down" },
    { name: "Spinach", quantity: 85, unit: "bunches", value: 272, trend: "up" },
    { name: "Tomatoes", quantity: 120, unit: "kg", value: 540, trend: "up" }
  ];

  const categories = ["All", "Feed", "Chemicals", "Fertilizer", "Seeds", "Cleaning"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStockPercentage = (current: number, max: number) => {
    return (current / max) * 100;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical": return "text-red-600 bg-red-100";
      case "low": return "text-yellow-600 bg-yellow-100";
      case "good": return "text-green-600 bg-green-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const lowStockItems = inventoryItems.filter(item => item.currentStock <= item.minStock);
  const totalValue = inventoryItems.reduce((sum, item) => sum + (item.currentStock * item.costPerUnit), 0);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <Package className="h-8 w-8 mr-3 text-blue-600" />
          Inventory Management
        </h1>
        <p className="text-gray-600">Track supplies, harvested products, and stock levels</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="supplies">Supplies</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Items</CardTitle>
                <Package className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{inventoryItems.length}</div>
                <p className="text-xs text-muted-foreground">Tracked items</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">{lowStockItems.length}</div>
                <p className="text-xs text-muted-foreground">Need restocking</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Value</CardTitle>
                <Archive className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalValue.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Inventory worth</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Categories</CardTitle>
                <Package className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{categories.length - 1}</div>
                <p className="text-xs text-muted-foreground">Item categories</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Stock Status Distribution</CardTitle>
                <CardDescription>Breakdown of inventory status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Good Stock</span>
                    <span className="text-sm font-medium">{inventoryItems.filter(i => i.status === "good").length} items</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Low Stock</span>
                    <span className="text-sm font-medium text-yellow-600">{inventoryItems.filter(i => i.status === "low").length} items</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Critical Stock</span>
                    <span className="text-sm font-medium text-red-600">{inventoryItems.filter(i => i.status === "critical").length} items</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest inventory movements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Cattle feed restocked</p>
                      <p className="text-xs text-gray-500">450kg added - 2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Fertilizer running low</p>
                      <p className="text-xs text-gray-500">5 bags remaining - 1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Spinach seeds purchased</p>
                      <p className="text-xs text-gray-500">15 packets - 3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="supplies" className="space-y-6">
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search supplies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </div>

          {/* Inventory Items */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </div>
                  <CardDescription>{item.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Stock Level</span>
                        <span className="text-sm font-medium">
                          {item.currentStock} / {item.maxStock} {item.unit}
                        </span>
                      </div>
                      <Progress 
                        value={getStockPercentage(item.currentStock, item.maxStock)} 
                        className="h-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Min: {item.minStock}</span>
                        <span>Max: {item.maxStock}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Cost per unit:</span>
                        <p className="font-medium">${item.costPerUnit}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Total value:</span>
                        <p className="font-medium">${(item.currentStock * item.costPerUnit).toFixed(2)}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Supplier:</span>
                        <p className="font-medium">{item.supplier}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Last restocked:</span>
                        <p className="font-medium">{item.lastRestocked}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Plus className="h-3 w-3 mr-1" />
                        Restock
                      </Button>
                      <Button size="sm" variant="outline">
                        <TrendingDown className="h-3 w-3 mr-1" />
                        Usage Log
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="products" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Harvested Products</CardTitle>
              <CardDescription>Current stock of farm produce ready for sale</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {harvestedProducts.map((product, index) => (
                  <Card key={index} className="border-2 border-green-100">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{product.name}</h3>
                        {product.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-500" />
                        )}
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Quantity:</span>
                          <span className="font-medium">{product.quantity} {product.unit}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Est. Value:</span>
                          <span className="font-medium text-green-600">${product.value}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-800">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Inventory Alerts
              </CardTitle>
              <CardDescription>Items requiring immediate attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lowStockItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">
                          Current: {item.currentStock} {item.unit} | Minimum: {item.minStock} {item.unit}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(item.status)}>
                        {item.status}
                      </Badge>
                      <Button size="sm">
                        <Plus className="h-3 w-3 mr-1" />
                        Restock
                      </Button>
                    </div>
                  </div>
                ))}
                
                {lowStockItems.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No inventory alerts at this time</p>
                    <p className="text-sm">All items are well stocked</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Inventory;
