
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Plus, Filter, MoreHorizontal } from "lucide-react";

const customerData = [
  {
    id: "C001",
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    location: "New York, USA",
    orders: 10,
    spent: "$2,450.00",
    status: "active",
    lastActive: "5 mins ago",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: "C002",
    name: "Michael Brown",
    email: "michael.b@example.com",
    location: "London, UK",
    orders: 8,
    spent: "$1,890.00",
    status: "active",
    lastActive: "2 hours ago",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: "C003",
    name: "Sophia Lee",
    email: "sophia.lee@example.com",
    location: "Singapore",
    orders: 5,
    spent: "$940.00",
    status: "inactive",
    lastActive: "3 days ago",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: "C004",
    name: "Noah Chen",
    email: "noah.chen@example.com",
    location: "Toronto, Canada",
    orders: 12,
    spent: "$3,240.00",
    status: "active",
    lastActive: "1 day ago",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: "C005",
    name: "Isabella Kim",
    email: "isabella.k@example.com",
    location: "Seoul, South Korea",
    orders: 6,
    spent: "$1,540.00",
    status: "active",
    lastActive: "Just now",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: "C006",
    name: "James Rodriguez",
    email: "james.r@example.com",
    location: "Madrid, Spain",
    orders: 4,
    spent: "$890.00",
    status: "inactive",
    lastActive: "1 week ago",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const Customers = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Customers</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Customer
          </Button>
        </div>
        
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium">Customer List</CardTitle>
              <div className="flex items-center gap-2">
                <div className="relative w-60">
                  <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search customers..." className="pl-8" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Spent</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customerData.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={customer.avatar} />
                          <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{customer.name}</div>
                          <div className="text-sm text-muted-foreground">{customer.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{customer.location}</TableCell>
                    <TableCell>{customer.orders}</TableCell>
                    <TableCell>{customer.spent}</TableCell>
                    <TableCell>
                      <Badge variant={customer.status === "active" ? "default" : "outline"}>
                        {customer.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{customer.lastActive}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Customers;
