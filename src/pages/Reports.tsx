import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  BarChart3,
  Download,
  Calendar,
  Users,
  Beef,
  Wheat
} from "lucide-react";

const Reports = () => {
  const financialData = [
    { month: "Jan 2024", revenue: 18450, expenses: 12300, profit: 6150 },
    { month: "Dec 2023", revenue: 17200, expenses: 11800, profit: 5400 },
    { month: "Nov 2023", revenue: 16800, expenses: 11200, profit: 5600 },
    { month: "Oct 2023", revenue: 15900, expenses: 10800, profit: 5100 }
  ];

  const productionData = [
    { product: "Milk", quantity: 85500, unit: "liters", revenue: 299250, trend: "up" },
    { product: "Eggs", quantity: 12600, unit: "dozens", revenue: 52920, trend: "up" },
    { product: "Avocados", quantity: 4200, unit: "kg", revenue: 11760, trend: "down" },
    { product: "Vegetables", quantity: 2800, unit: "kg", revenue: 8960, trend: "up" }
  ];

  const employeePerformance = [
    { name: "Sarah Johnson", tasksCompleted: 145, efficiency: 96, attendance: 95 },
    { name: "Mike Rodriguez", tasksCompleted: 138, efficiency: 94, attendance: 92 },
    { name: "Emily Chen", tasksCompleted: 142, efficiency: 98, attendance: 98 },
    { name: "James Wilson", tasksCompleted: 125, efficiency: 88, attendance: 88 },
    { name: "Maria Garcia", tasksCompleted: 135, efficiency: 92, attendance: 96 }
  ];

  const keyMetrics = [
    { title: "Total Revenue", value: "$18,450", change: "+8.2%", trend: "up" },
    { title: "Net Profit", value: "$6,150", change: "+12.1%", trend: "up" },
    { title: "Production Volume", value: "105,100 units", change: "+5.4%", trend: "up" },
    { title: "Employee Efficiency", value: "93.6%", change: "+2.1%", trend: "up" }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <FileText className="h-8 w-8 mr-3 text-green-600" />
              Reports & Analytics
            </h1>
            <p className="text-gray-600">Comprehensive insights into farm performance and operations</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Date Range
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export Reports
            </Button>
          </div>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {keyMetrics.map((metric, index) => {
          const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  <TrendIcon className={`h-3 w-3 mr-1 ${
                    metric.trend === "up" ? "text-green-500" : "text-red-500"
                  }`} />
                  {metric.change} from last period
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="financial" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="production">Production</TabsTrigger>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="financial" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Financial Performance</CardTitle>
                  <CardDescription>Revenue, expenses, and profit analysis</CardDescription>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {financialData.map((data, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">{data.month}</h3>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Revenue</p>
                      <p className="text-lg font-bold text-green-600">${data.revenue.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Expenses</p>
                      <p className="text-lg font-bold text-red-600">${data.expenses.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Net Profit</p>
                      <p className="text-lg font-bold text-blue-600">${data.profit.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-8 w-8 text-green-600" />
                      <div>
                        <p className="text-sm text-green-600">Total Revenue</p>
                        <p className="text-2xl font-bold text-green-700">$68,350</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <TrendingDown className="h-8 w-8 text-red-600" />
                      <div>
                        <p className="text-sm text-red-600">Total Expenses</p>
                        <p className="text-2xl font-bold text-red-700">$46,100</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-8 w-8 text-blue-600" />
                      <div>
                        <p className="text-sm text-blue-600">Net Profit</p>
                        <p className="text-2xl font-bold text-blue-700">$22,250</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="production" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Production Analytics</CardTitle>
                  <CardDescription>Livestock and crop production performance</CardDescription>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {productionData.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-lg">{item.product}</h3>
                        {item.trend === "up" ? (
                          <TrendingUp className="h-5 w-5 text-green-500" />
                        ) : (
                          <TrendingDown className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Quantity:</span>
                          <span className="font-medium">{item.quantity.toLocaleString()} {item.unit}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Revenue:</span>
                          <span className="font-medium text-green-600">${item.revenue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Status:</span>
                          <Badge variant={item.trend === "up" ? "secondary" : "destructive"}>
                            {item.trend === "up" ? "Growing" : "Declining"}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Beef className="h-5 w-5 mr-2 text-blue-600" />
                      Livestock Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Daily Milk Production:</span>
                        <span className="font-medium">2,850L</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Daily Egg Production:</span>
                        <span className="font-medium">420 eggs</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Health Rate:</span>
                        <span className="font-medium text-green-600">98%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Wheat className="h-5 w-5 mr-2 text-green-600" />
                      Crop Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Average Crop Health:</span>
                        <span className="font-medium">86%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ready for Harvest:</span>
                        <span className="font-medium">2 fields</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Yield Efficiency:</span>
                        <span className="font-medium text-green-600">94%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="employees" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Employee Performance Report</CardTitle>
                  <CardDescription>Staff productivity and attendance metrics</CardDescription>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {employeePerformance.map((employee, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Users className="h-8 w-8 text-purple-600" />
                      <div>
                        <p className="font-medium">{employee.name}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600">Tasks Completed</p>
                      <p className="text-lg font-bold">{employee.tasksCompleted}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600">Efficiency</p>
                      <p className="text-lg font-bold text-blue-600">{employee.efficiency}%</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600">Attendance</p>
                      <p className="text-lg font-bold text-green-600">{employee.attendance}%</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <p className="text-sm text-blue-600">Average Efficiency</p>
                      <p className="text-3xl font-bold text-blue-700">93.6%</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <p className="text-sm text-green-600">Average Attendance</p>
                      <p className="text-3xl font-bold text-green-700">93.8%</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <p className="text-sm text-purple-600">Total Tasks</p>
                      <p className="text-3xl font-bold text-purple-700">685</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Farm Analytics Dashboard</CardTitle>
              <CardDescription>Comprehensive farm performance insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-2 border-green-200">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <h3 className="font-semibold text-lg mb-2">Overall Farm Health</h3>
                      <div className="text-4xl font-bold text-green-600 mb-2">92%</div>
                      <p className="text-sm text-gray-600">Excellent performance across all metrics</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-200">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <h3 className="font-semibold text-lg mb-2">Growth Rate</h3>
                      <div className="text-4xl font-bold text-blue-600 mb-2">+8.5%</div>
                      <p className="text-sm text-gray-600">Month-over-month improvement</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-200">
                  <CardContent className="p-4">
                    <div className="text-center">
                      <h3 className="font-semibold text-lg mb-2">Efficiency Score</h3>
                      <div className="text-4xl font-bold text-purple-600 mb-2">94.2%</div>
                      <p className="text-sm text-gray-600">Resource utilization rate</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Key Performance Indicators</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Customer Satisfaction</span>
                    <Badge className="bg-green-100 text-green-800">4.8/5.0</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Order Fulfillment Rate</span>
                    <Badge className="bg-blue-100 text-blue-800">97.2%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Inventory Turnover</span>
                    <Badge className="bg-purple-100 text-purple-800">12.4x</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Quality Control Pass Rate</span>
                    <Badge className="bg-green-100 text-green-800">99.1%</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;
