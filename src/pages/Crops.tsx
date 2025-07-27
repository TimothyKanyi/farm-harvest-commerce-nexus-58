
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Wheat, 
  Droplets, 
  Bug, 
  Calendar, 
  Plus,
  Search,
  Thermometer,
  Sun,
  CloudRain
} from "lucide-react";

const Crops = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const crops = [
    {
      id: "AV001",
      name: "Avocado Orchard - North",
      type: "Avocado",
      area: "5 acres",
      planted: "2020-03-15",
      stage: "Flowering",
      health: 85,
      expectedHarvest: "2024-06-15",
      lastIrrigation: "2024-01-07"
    },
    {
      id: "SP001",
      name: "Spinach Field A",
      type: "Spinach",
      area: "2 acres",
      planted: "2023-12-01",
      stage: "Ready for Harvest",
      health: 92,
      expectedHarvest: "2024-01-15",
      lastIrrigation: "2024-01-06"
    },
    {
      id: "TM001",
      name: "Tomato Greenhouse",
      type: "Tomatoes",
      area: "1.5 acres",
      planted: "2023-11-15",
      stage: "Growing",
      health: 78,
      expectedHarvest: "2024-02-20",
      lastIrrigation: "2024-01-07"
    },
    {
      id: "CR001",
      name: "Carrot Field B",
      type: "Carrots",
      area: "3 acres",
      planted: "2023-10-20",
      stage: "Mature",
      health: 88,
      expectedHarvest: "2024-01-25",
      lastIrrigation: "2024-01-05"
    }
  ];

  const irrigationSchedule = [
    { field: "Avocado Orchard - North", nextIrrigation: "2024-01-09", frequency: "Every 2 days", status: "scheduled" },
    { field: "Spinach Field A", nextIrrigation: "2024-01-08", frequency: "Daily", status: "due" },
    { field: "Tomato Greenhouse", nextIrrigation: "2024-01-08", frequency: "Daily", status: "due" },
    { field: "Carrot Field B", nextIrrigation: "2024-01-10", frequency: "Every 3 days", status: "scheduled" }
  ];

  const pestControlLogs = [
    { crop: "Tomato Greenhouse", treatment: "Organic pesticide spray", date: "2024-01-05", severity: "low" },
    { crop: "Spinach Field A", treatment: "Preventive neem oil", date: "2024-01-03", severity: "none" },
    { crop: "Avocado Orchard - North", treatment: "Aphid treatment", date: "2024-01-01", severity: "medium" }
  ];

  const filteredCrops = crops.filter(crop => 
    crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crop.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Ready for Harvest": return "bg-green-100 text-green-800";
      case "Mature": return "bg-blue-100 text-blue-800";
      case "Growing": return "bg-yellow-100 text-yellow-800";
      case "Flowering": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <Wheat className="h-8 w-8 mr-3 text-green-600" />
          Crop Management
        </h1>
        <p className="text-gray-600">Monitor and manage your crops, irrigation, and pest control</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="crops">Crops</TabsTrigger>
          <TabsTrigger value="irrigation">Irrigation</TabsTrigger>
          <TabsTrigger value="pest-control">Pest Control</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Acreage</CardTitle>
                <Wheat className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">25</div>
                <p className="text-xs text-muted-foreground">Acres cultivated</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Health</CardTitle>
                <Sun className="h-4 w-4 text-yellow-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">86%</div>
                <p className="text-xs text-muted-foreground">Excellent condition</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ready to Harvest</CardTitle>
                <Calendar className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Fields ready</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Water Usage</CardTitle>
                <Droplets className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,250L</div>
                <p className="text-xs text-muted-foreground">Today's irrigation</p>
              </CardContent>
            </Card>
          </div>

          {/* Weather & Conditions */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Conditions</CardTitle>
              <CardDescription>Weather and environmental factors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Thermometer className="h-8 w-8 text-red-500" />
                  <div>
                    <p className="text-2xl font-bold">24°C</p>
                    <p className="text-sm text-gray-600">Temperature</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Droplets className="h-8 w-8 text-blue-500" />
                  <div>
                    <p className="text-2xl font-bold">65%</p>
                    <p className="text-sm text-gray-600">Humidity</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CloudRain className="h-8 w-8 text-gray-500" />
                  <div>
                    <p className="text-2xl font-bold">0mm</p>
                    <p className="text-sm text-gray-600">Rainfall</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="crops" className="space-y-6">
          {/* Search and Add */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search crops by name or type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Crop
            </Button>
          </div>

          {/* Crops Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCrops.map((crop) => (
              <Card key={crop.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{crop.name}</CardTitle>
                    <Badge className={getStageColor(crop.stage)}>
                      {crop.stage}
                    </Badge>
                  </div>
                  <CardDescription>{crop.type} • {crop.area}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Health Status</span>
                        <span className="text-sm font-medium">{crop.health}%</span>
                      </div>
                      <Progress value={crop.health} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Planted:</span>
                        <p className="font-medium">{crop.planted}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Expected Harvest:</span>
                        <p className="font-medium">{crop.expectedHarvest}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Last Irrigation:</span>
                        <p className="font-medium">{crop.lastIrrigation}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">ID:</span>
                        <p className="font-medium">{crop.id}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Calendar className="h-3 w-3 mr-1" />
                        Schedule
                      </Button>
                      <Button size="sm" variant="outline">
                        <Droplets className="h-3 w-3 mr-1" />
                        Irrigate
                      </Button>
                      <Button size="sm" variant="outline">
                        <Bug className="h-3 w-3 mr-1" />
                        Pest Control
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="irrigation" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Irrigation Schedule</CardTitle>
                  <CardDescription>Manage watering schedules for all crops</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Schedule
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {irrigationSchedule.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        schedule.status === "due" ? "bg-red-500" : "bg-green-500"
                      }`} />
                      <div>
                        <p className="font-medium">{schedule.field}</p>
                        <p className="text-sm text-gray-600">{schedule.frequency}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{schedule.nextIrrigation}</p>
                      <Badge variant={schedule.status === "due" ? "destructive" : "secondary"}>
                        {schedule.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pest-control" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Pest Control Logs</CardTitle>
                  <CardDescription>Track pest management and treatments</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Treatment Log
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pestControlLogs.map((log, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <Bug className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium">{log.crop}</p>
                        <p className="text-sm text-gray-600">{log.treatment}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{log.date}</p>
                      <Badge variant={
                        log.severity === "high" ? "destructive" :
                        log.severity === "medium" ? "default" :
                        log.severity === "low" ? "secondary" : "outline"
                      }>
                        {log.severity || "none"}
                      </Badge>
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

export default Crops;
