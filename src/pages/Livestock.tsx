import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Beef, 
  Activity, 
  Heart, 
  Pill, 
  Plus,
  Search,
  Calendar,
  TrendingUp
} from "lucide-react";

const Livestock = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dairyCows = [
    { id: "DC001", name: "Bessie", breed: "Holstein", age: 4, dailyMilk: 28, health: "Excellent", lastCheckup: "2024-01-05" },
    { id: "DC002", name: "Daisy", breed: "Jersey", age: 3, dailyMilk: 22, health: "Good", lastCheckup: "2024-01-03" },
    { id: "DC003", name: "Molly", breed: "Holstein", age: 5, dailyMilk: 31, health: "Excellent", lastCheckup: "2024-01-07" },
    { id: "DC004", name: "Rosie", breed: "Guernsey", age: 2, dailyMilk: 18, health: "Fair", lastCheckup: "2024-01-02" }
  ];

  const milkProduction = [
    { date: "Jan 1", amount: 2650 },
    { date: "Jan 2", amount: 2720 },
    { date: "Jan 3", amount: 2800 },
    { date: "Jan 4", amount: 2680 },
    { date: "Jan 5", amount: 2850 },
    { date: "Jan 6", amount: 2920 },
    { date: "Jan 7", amount: 2850 }
  ];

  const healthRecords = [
    { cow: "Bessie", treatment: "Vaccination", date: "2024-01-05", vet: "Dr. Smith" },
    { cow: "Rosie", treatment: "Hoof trim", date: "2024-01-02", vet: "Dr. Johnson" },
    { cow: "Daisy", treatment: "Regular checkup", date: "2024-01-03", vet: "Dr. Smith" }
  ];

  const filteredCows = dairyCows.filter(cow => 
    cow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cow.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <Beef className="h-8 w-8 mr-3 text-blue-600" />
          Livestock Management
        </h1>
        <p className="text-gray-600">Manage your dairy cattle and monitor production</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="cattle">Cattle</TabsTrigger>
          <TabsTrigger value="health">Health Records</TabsTrigger>
          <TabsTrigger value="production">Production</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Cattle</CardTitle>
                <Beef className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">150</div>
                <p className="text-xs text-muted-foreground">+5 from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Daily Milk</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,850L</div>
                <p className="text-xs text-muted-foreground">+12% from yesterday</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Health Status</CardTitle>
                <Heart className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98%</div>
                <p className="text-xs text-muted-foreground">Excellent health</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Age</CardTitle>
                <Calendar className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.8</div>
                <p className="text-xs text-muted-foreground">Years</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Livestock Activities</CardTitle>
              <CardDescription>Latest updates and important events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Morning milk collection completed - 2,850L collected</p>
                    <p className="text-xs text-gray-500">30 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Veterinary checkup scheduled for Rosie</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Feed distribution completed - 500kg distributed</p>
                    <p className="text-xs text-gray-500">4 hours ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cattle" className="space-y-6">
          {/* Search and Add */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search cattle by name or ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Cattle
            </Button>
          </div>

          {/* Cattle List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCows.map((cow) => (
              <Card key={cow.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{cow.name}</CardTitle>
                    <Badge variant={
                      cow.health === "Excellent" ? "default" :
                      cow.health === "Good" ? "secondary" : "destructive"
                    }>
                      {cow.health}
                    </Badge>
                  </div>
                  <CardDescription>ID: {cow.id}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Breed:</span>
                      <span className="text-sm font-medium">{cow.breed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Age:</span>
                      <span className="text-sm font-medium">{cow.age} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Daily Milk:</span>
                      <span className="text-sm font-medium">{cow.dailyMilk}L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Last Checkup:</span>
                      <span className="text-sm font-medium">{cow.lastCheckup}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline">
                      <Activity className="h-3 w-3 mr-1" />
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      <Pill className="h-3 w-3 mr-1" />
                      Health Log
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="health" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Health Records</CardTitle>
                  <CardDescription>Veterinary treatments and health monitoring</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Health Record
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {healthRecords.map((record, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Heart className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{record.cow}</p>
                        <p className="text-sm text-gray-600">{record.treatment}</p>
                        <p className="text-xs text-gray-500">by {record.vet}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{record.date}</p>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="production" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Daily Milk Production</CardTitle>
              <CardDescription>Track daily milk yield across the herd</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {milkProduction.map((day, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded">
                    <span className="font-medium">{day.date}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold">{day.amount}L</span>
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
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

export default Livestock;
