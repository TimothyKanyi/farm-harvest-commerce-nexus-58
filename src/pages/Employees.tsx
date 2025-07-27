
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  Search, 
  Plus,
  Clock,
  CheckCircle,
  XCircle,
  DollarSign,
  Calendar
} from "lucide-react";

const Employees = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const employees = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Farm Manager",
      department: "Management",
      phone: "+1 234-567-8901",
      email: "sarah@greenharvest.com",
      salary: 4500,
      status: "active",
      avatar: "/placeholder.svg",
      attendanceRate: 95,
      tasksCompleted: 28
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      role: "Livestock Supervisor",
      department: "Livestock",
      phone: "+1 234-567-8902",
      email: "mike@greenharvest.com",
      salary: 3800,
      status: "active",
      avatar: "/placeholder.svg",
      attendanceRate: 92,
      tasksCompleted: 34
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Crop Specialist",
      department: "Crops",
      phone: "+1 234-567-8903",
      email: "emily@greenharvest.com",
      salary: 3600,
      status: "active",
      avatar: "/placeholder.svg",
      attendanceRate: 98,
      tasksCompleted: 25
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Equipment Operator",
      department: "Maintenance",
      phone: "+1 234-567-8904",
      email: "james@greenharvest.com",
      salary: 3200,
      status: "active",
      avatar: "/placeholder.svg",
      attendanceRate: 88,
      tasksCompleted: 22
    },
    {
      id: 5,
      name: "Maria Garcia",
      role: "Quality Inspector",
      department: "Quality Control",
      phone: "+1 234-567-8905",
      email: "maria@greenharvest.com",
      salary: 3400,
      status: "active",
      avatar: "/placeholder.svg",
      attendanceRate: 96,
      tasksCompleted: 31
    }
  ];

  const todaysTasks = [
    { employee: "Sarah Johnson", task: "Review monthly production reports", priority: "high", completed: true },
    { employee: "Mike Rodriguez", task: "Morning livestock health check", priority: "high", completed: true },
    { employee: "Emily Chen", task: "Inspect avocado orchard for pests", priority: "medium", completed: false },
    { employee: "James Wilson", task: "Service irrigation pumps", priority: "high", completed: false },
    { employee: "Maria Garcia", task: "Quality check on today's milk production", priority: "medium", completed: true }
  ];

  const attendance = [
    { employee: "Sarah Johnson", checkedIn: "07:30 AM", status: "present" },
    { employee: "Mike Rodriguez", checkedIn: "06:45 AM", status: "present" },
    { employee: "Emily Chen", checkedIn: "08:00 AM", status: "present" },
    { employee: "James Wilson", checkedIn: "-", status: "absent" },
    { employee: "Maria Garcia", checkedIn: "07:15 AM", status: "present" }
  ];

  const filteredEmployees = employees.filter(employee => 
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <Users className="h-8 w-8 mr-3 text-purple-600" />
          Employee Management
        </h1>
        <p className="text-gray-600">Manage staff, track attendance, and assign tasks</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="payroll">Payroll</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
                <Users className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">10</div>
                <p className="text-xs text-muted-foreground">5 active today</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Present Today</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4/5</div>
                <p className="text-xs text-muted-foreground">80% attendance</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
                <Clock className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3/5</div>
                <p className="text-xs text-muted-foreground">60% completion</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Payroll</CardTitle>
                <DollarSign className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalSalary.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Total monthly</p>
              </CardContent>
            </Card>
          </div>

          {/* Today's Attendance */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Attendance</CardTitle>
              <CardDescription>Employee check-in status for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {attendance.map((record, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        record.status === "present" ? "bg-green-500" : "bg-red-500"
                      }`} />
                      <span className="font-medium">{record.employee}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">{record.checkedIn}</span>
                      <Badge variant={record.status === "present" ? "secondary" : "destructive"}>
                        {record.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="employees" className="space-y-6">
          {/* Search and Add */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search employees..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Employee
            </Button>
          </div>

          {/* Employee Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEmployees.map((employee) => (
              <Card key={employee.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={employee.avatar} alt={employee.name} />
                      <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{employee.name}</CardTitle>
                      <CardDescription>{employee.role}</CardDescription>
                    </div>
                    <Badge variant={employee.status === "active" ? "secondary" : "destructive"}>
                      {employee.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Department:</span>
                        <p className="font-medium">{employee.department}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Salary:</span>
                        <p className="font-medium">${employee.salary}/mo</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Attendance:</span>
                        <p className="font-medium">{employee.attendanceRate}%</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Tasks Done:</span>
                        <p className="font-medium">{employee.tasksCompleted}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-sm text-gray-600">Contact:</div>
                      <p className="text-sm">{employee.phone}</p>
                      <p className="text-sm">{employee.email}</p>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Calendar className="h-3 w-3 mr-1" />
                        Schedule
                      </Button>
                      <Button size="sm" variant="outline">
                        <Clock className="h-3 w-3 mr-1" />
                        Tasks
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Today's Task Assignments</CardTitle>
                  <CardDescription>Daily tasks assigned to farm employees</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Assign Task
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todaysTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      {task.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                      <div>
                        <p className="font-medium">{task.employee}</p>
                        <p className="text-sm text-gray-600">{task.task}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={
                        task.priority === "high" ? "destructive" :
                        task.priority === "medium" ? "default" : "secondary"
                      }>
                        {task.priority}
                      </Badge>
                      <Badge variant={task.completed ? "secondary" : "outline"}>
                        {task.completed ? "Completed" : "Pending"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payroll" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payroll Summary</CardTitle>
              <CardDescription>Monthly salary breakdown for all employees</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {employees.map((employee) => (
                  <div key={employee.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={employee.avatar} alt={employee.name} />
                        <AvatarFallback>{employee.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{employee.name}</p>
                        <p className="text-sm text-gray-600">{employee.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">${employee.salary.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">per month</p>
                    </div>
                  </div>
                ))}
                
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">Total Monthly Payroll:</span>
                    <span className="text-2xl font-bold text-green-600">
                      ${totalSalary.toLocaleString()}
                    </span>
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

export default Employees;
