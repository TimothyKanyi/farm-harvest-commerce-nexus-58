
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Store as StoreIcon, 
  Search, 
  ShoppingCart, 
  Plus,
  Minus,
  Star,
  Truck,
  Shield
} from "lucide-react";

const Store = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState<{[key: string]: number}>({});

  const products = [
    {
      id: 1,
      name: "Fresh Organic Milk",
      category: "Dairy",
      price: 3.50,
      unit: "per liter",
      image: "/placeholder.svg",
      inStock: 45,
      description: "Fresh daily milk from our Holstein dairy cows",
      rating: 4.8,
      featured: true
    },
    {
      id: 2,
      name: "Farm Fresh Eggs",
      category: "Poultry",
      price: 4.20,
      unit: "per dozen",
      image: "/placeholder.svg",
      inStock: 30,
      description: "Free-range eggs from our happy hens",
      rating: 4.9,
      featured: true
    },
    {
      id: 3,
      name: "Organic Avocados",
      category: "Fruits",
      price: 2.80,
      unit: "per piece",
      image: "/placeholder.svg",
      inStock: 120,
      description: "Creamy organic avocados from our orchard",
      rating: 4.7,
      featured: false
    },
    {
      id: 4,
      name: "Fresh Spinach",
      category: "Vegetables",
      price: 3.20,
      unit: "per bunch",
      image: "/placeholder.svg",
      inStock: 25,
      description: "Crispy fresh spinach leaves",
      rating: 4.6,
      featured: false
    },
    {
      id: 5,
      name: "Organic Tomatoes",
      category: "Vegetables",
      price: 4.50,
      unit: "per kg",
      image: "/placeholder.svg",
      inStock: 35,
      description: "Vine-ripened organic tomatoes",
      rating: 4.8,
      featured: true
    },
    {
      id: 6,
      name: "Organic Compost",
      category: "Fertilizer",
      price: 15.00,
      unit: "per 20kg bag",
      image: "/placeholder.svg",
      inStock: 15,
      description: "Rich organic compost for your garden",
      rating: 4.5,
      featured: false
    }
  ];

  const categories = ["All", "Dairy", "Poultry", "Fruits", "Vegetables", "Fertilizer"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (productId: number) => {
    setCartItems(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) - 1)
    }));
  };

  const getTotalItems = () => {
    return Object.values(cartItems).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cartItems).reduce((sum, [productId, count]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return sum + (product ? product.price * count : 0);
    }, 0);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <StoreIcon className="h-8 w-8 mr-3 text-green-600" />
              Farm Store
            </h1>
            <p className="text-gray-600">Fresh produce directly from our farm to your table</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="lg" className="relative">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Cart ({getTotalItems()})
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>
            <div className="text-right">
              <p className="text-sm text-gray-600">Total</p>
              <p className="text-lg font-bold">${getTotalPrice().toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="products" className="space-y-6">
        <TabsList>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="featured">Featured</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-6">
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
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
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    {product.featured && (
                      <Badge className="absolute top-2 left-2 bg-orange-500">
                        Featured
                      </Badge>
                    )}
                    <Badge 
                      variant={product.inStock > 10 ? "secondary" : "destructive"}
                      className="absolute top-2 right-2"
                    >
                      {product.inStock > 0 ? `${product.inStock} in stock` : "Out of stock"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.description}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) 
                                ? "text-yellow-400 fill-current" 
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.rating})</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-green-600">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-600 ml-1">{product.unit}</span>
                      </div>
                      <Badge variant="outline">{product.category}</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      {cartItems[product.id] > 0 ? (
                        <div className="flex items-center space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => removeFromCart(product.id)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="font-medium">{cartItems[product.id]}</span>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => addToCart(product.id)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      ) : (
                        <Button 
                          onClick={() => addToCart(product.id)}
                          disabled={product.inStock === 0}
                          className="flex-1"
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Add to Cart
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="featured" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.filter(p => p.featured).map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow border-2 border-orange-200">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 left-2 bg-orange-500">
                      Featured
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.description}</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">
                        ${product.price.toFixed(2)}
                      </span>
                      <Button onClick={() => addToCart(product.id)}>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="orders" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Management</CardTitle>
              <CardDescription>Track and manage customer orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Order #1001</p>
                    <p className="text-sm text-gray-600">2x Fresh Milk, 1x Farm Eggs</p>
                    <p className="text-xs text-gray-500">Ordered 2 hours ago</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$11.20</p>
                    <Badge className="bg-blue-100 text-blue-800">Processing</Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Order #1002</p>
                    <p className="text-sm text-gray-600">5x Avocados, 2x Spinach</p>
                    <p className="text-xs text-gray-500">Ordered 1 day ago</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$20.40</p>
                    <Badge className="bg-green-100 text-green-800">Shipped</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Features */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="flex items-center space-x-4 p-6">
            <Truck className="h-10 w-10 text-green-600" />
            <div>
              <h3 className="font-semibold">Free Delivery</h3>
              <p className="text-sm text-gray-600">Orders over $50</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center space-x-4 p-6">
            <Shield className="h-10 w-10 text-blue-600" />
            <div>
              <h3 className="font-semibold">Organic Certified</h3>
              <p className="text-sm text-gray-600">100% organic produce</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center space-x-4 p-6">
            <Star className="h-10 w-10 text-yellow-600" />
            <div>
              <h3 className="font-semibold">Quality Guaranteed</h3>
              <p className="text-sm text-gray-600">Fresh from farm</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Store;
