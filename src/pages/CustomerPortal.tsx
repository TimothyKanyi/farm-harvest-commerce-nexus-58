
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  ShoppingBag, 
  Clock, 
  CheckCircle, 
  Truck,
  Star,
  MessageSquare,
  Phone,
  Mail
} from "lucide-react";

const CustomerPortal = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const customerOrders = [
    {
      id: "ORD-001",
      date: "2024-01-07",
      items: ["2x Fresh Milk", "1x Farm Eggs"],
      total: 11.20,
      status: "delivered",
      trackingNumber: "TRK789456",
      deliveryDate: "2024-01-08"
    },
    {
      id: "ORD-002",
      date: "2024-01-05",
      items: ["5x Avocados", "2x Spinach"],
      total: 20.40,
      status: "shipped",
      trackingNumber: "TRK789457",
      estimatedDelivery: "2024-01-09"
    },
    {
      id: "ORD-003",
      date: "2024-01-03",
      items: ["3x Tomatoes", "1x Organic Compost"],
      total: 28.50,
      status: "processing",
      trackingNumber: "-",
      estimatedDelivery: "2024-01-10"
    }
  ];

  const recentCustomers = [
    {
      id: 1,
      name: "Alice Thompson",
      email: "alice@email.com",
      phone: "+1 234-567-8901",
      orders: 12,
      totalSpent: 156.80,
      lastOrder: "2024-01-07",
      status: "regular",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Bob Miller",
      email: "bob@email.com",
      phone: "+1 234-567-8902",
      orders: 8,
      totalSpent: 95.40,
      lastOrder: "2024-01-06",
      status: "new",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Carol Davis",
      email: "carol@email.com",
      phone: "+1 234-567-8903",
      orders: 25,
      totalSpent: 340.60,
      lastOrder: "2024-01-05",
      status: "vip",
      avatar: "/placeholder.svg"
    }
  ];

  const customerFeedback = [
    {
      customer: "Alice Thompson",
      rating: 5,
      comment: "Absolutely love the fresh milk! Quality is outstanding and delivery is always on time.",
      date: "2024-01-06",
      product: "Fresh Organic Milk"
    },
    {
      customer: "Bob Miller",
      rating: 4,
      comment: "Great avocados, very fresh. Would love to see more variety in vegetables.",
      date: "2024-01-05",
      product: "Organic Avocados"
    },
    {
      customer: "Carol Davis",
      rating: 5,
      comment: "The eggs are the best I've ever had! Free-range quality really shows.",
      date: "2024-01-04",
      product: "Farm Fresh Eggs"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-green-100 text-green-800";
      case "shipped": return "bg-blue-100 text-blue-800";
      case "processing": return "bg-yellow-100 text-yellow-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCustomerStatusColor = (status: string) => {
    switch (status) {
      case "vip": return "bg-purple-100 text-purple-800";
      case "regular": return "bg-blue-100 text-blue-800";
      case "new": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <User className="h-8 w-8 mr-3 text-green-600" />
          Customer Portal
        </h1>
        <p className="text-gray-600">Manage customer relationships and track orders</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                <User className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">248</div>
                <p className="text-xs text-muted-foreground">+12 this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                <ShoppingBag className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">34</div>
                <p className="text-xs text-muted-foreground">Being processed</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
                <Star className="h-4 w-4 text-yellow-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.8</div>
                <p className="text-xs text-muted-foreground">Customer satisfaction</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                <Truck className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,450</div>
                <p className="text-xs text-muted-foreground">+8% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest customer orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customerOrders.slice(0, 3).map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-sm text-gray-600">{order.items.join(", ")}</p>
                        <p className="text-xs text-gray-500">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${order.total}</p>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Customers</CardTitle>
                <CardDescription>Highest value customers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCustomers.map((customer) => (
                    <div key={customer.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={customer.avatar} alt={customer.name} />
                          <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <p className="text-sm text-gray-600">{customer.orders} orders</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${customer.totalSpent}</p>
                        <Badge className={getCustomerStatusColor(customer.status)}>
                          {customer.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="orders" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Order Management</CardTitle>
                  <CardDescription>Track and manage all customer orders</CardDescription>
                </div>
                <Button>View All Orders</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {customerOrders.map((order) => (
                  <Card key={order.id} className="border-l-4 border-l-blue-500">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">{order.id}</h3>
                          <p className="text-sm text-gray-600">Ordered on {order.date}</p>
                        </div>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="text-sm font-medium mb-1">Items</h4>
                          <ul className="text-sm text-gray-600">
                            {order.items.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium mb-1">Tracking</h4>
                          <p className="text-sm text-gray-600">
                            {order.trackingNumber !== "-" ? order.trackingNumber : "Not assigned"}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium mb-1">Delivery</h4>
                          <p className="text-sm text-gray-600">
                            {order.deliveryDate || order.estimatedDelivery}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-3 border-t">
                        <span className="font-semibold">Total: ${order.total}</span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Truck className="h-3 w-3 mr-1" />
                            Track
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            Contact
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Customer Directory</CardTitle>
                  <CardDescription>Manage customer information and relationships</CardDescription>
                </div>
                <Button>Add Customer</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentCustomers.map((customer) => (
                  <Card key={customer.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={customer.avatar} alt={customer.name} />
                          <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{customer.name}</CardTitle>
                          <Badge className={getCustomerStatusColor(customer.status)}>
                            {customer.status}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Orders:</span>
                            <p className="font-medium">{customer.orders}</p>
                          </div>
                          <div>
                            <span className="text-gray-600">Total Spent:</span>
                            <p className="font-medium">${customer.totalSpent}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center text-sm text-gray-600">
                            <Mail className="h-3 w-3 mr-2" />
                            {customer.email}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Phone className="h-3 w-3 mr-2" />
                            {customer.phone}
                          </div>
                        </div>
                        
                        <div className="text-sm">
                          <span className="text-gray-600">Last order:</span>
                          <p className="font-medium">{customer.lastOrder}</p>
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            Message
                          </Button>
                          <Button size="sm" variant="outline">
                            <ShoppingBag className="h-3 w-3 mr-1" />
                            Orders
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer Feedback</CardTitle>
              <CardDescription>Reviews and ratings from customers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {customerFeedback.map((feedback, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>{feedback.customer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{feedback.customer}</p>
                          <p className="text-sm text-gray-600">{feedback.product}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < feedback.rating 
                                  ? "text-yellow-400 fill-current" 
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">{feedback.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{feedback.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CustomerPortal;
