
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  Beef, 
  Egg, 
  Wheat, 
  Users, 
  Package, 
  DollarSign,
  Calendar,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      title: "Daily Milk Production",
      value: "2,850L",
      change: "+12%",
      trend: "up",
      icon: Beef,
      color: "text-blue-600"
    },
    {
      title: "Daily Egg Production",
      value: "420 eggs",
      change: "+8%",
      trend: "up",
      icon: Egg,
      color: "text-yellow-600"
    },
    {
      title: "Monthly Revenue",
      value: "$18,450",
      change: "+15%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Active Employees",
      value: "9/10",
      change: "-1",
      trend: "down",
      icon: Users,
      color: "text-purple-600"
    }
  ];

  const recentActivities = [
    { action: "Milk collection completed", time: "30 mins ago", type: "success" },
    { action: "Feed inventory low", time: "1 hour ago", type: "warning" },
    { action: "Veterinary checkup scheduled", time: "2 hours ago", type: "info" },
    { action: "Egg collection recorded", time: "3 hours ago", type: "success" },
    { action: "New employee assigned", time: "4 hours ago", type: "info" }
  ];

  const cropStatus = [
    { crop: "Avocado Orchard", health: 85, stage: "Flowering" },
    { crop: "Spinach Field", health: 92, stage: "Ready for Harvest" },
    { crop: "Tomatoes", health: 78, stage: "Growing" },
    { crop: "Carrots", health: 88, stage: "Mature" }
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
      }}
    >
      <div className="p-6 max-w-7xl mx-auto relative z-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Farm Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening on your farm today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown;
            return (
              <Card key={index} className="backdrop-blur-sm bg-white/80">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendIcon className={`h-3 w-3 mr-1 ${
                      stat.trend === "up" ? "text-green-500" : "text-red-500"
                    }`} />
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <Card className="lg:col-span-2 backdrop-blur-sm bg-white/80">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Latest updates from your farm operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === "success" ? "bg-green-500" :
                      activity.type === "warning" ? "bg-yellow-500" : "bg-blue-500"
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="backdrop-blur-sm bg-white/80">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common farm management tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/livestock">
                <Button variant="outline" className="w-full justify-start">
                  <Beef className="h-4 w-4 mr-2" />
                  Livestock Management
                </Button>
              </Link>
              <Link to="/crops">
                <Button variant="outline" className="w-full justify-start">
                  <Wheat className="h-4 w-4 mr-2" />
                  Crop Management
                </Button>
              </Link>
              <Link to="/employees">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Employee Tasks
                </Button>
              </Link>
              <Link to="/inventory">
                <Button variant="outline" className="w-full justify-start">
                  <Package className="h-4 w-4 mr-2" />
                  Inventory Check
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Crop Status */}
        <Card className="mt-8 backdrop-blur-sm bg-white/80">
          <CardHeader>
            <CardTitle>Crop Status Overview</CardTitle>
            <CardDescription>Current health and stage of all crops</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cropStatus.map((crop, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{crop.crop}</h4>
                    <span className="text-sm text-gray-500">{crop.health}%</span>
                  </div>
                  <Progress value={crop.health} className="h-2" />
                  <p className="text-sm text-gray-600">{crop.stage}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card className="mt-8 border-yellow-200 bg-yellow-50/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-yellow-800">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Today's Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-yellow-800">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span>Feed inventory running low - restock required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span>Veterinary visit scheduled for tomorrow</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span>Irrigation system maintenance due</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
