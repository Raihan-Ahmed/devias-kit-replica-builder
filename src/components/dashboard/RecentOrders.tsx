
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
import { Button } from "@/components/ui/button";
import { ArrowRight, MoreHorizontal } from "lucide-react";

interface Order {
  id: string;
  customer: string;
  status: "pending" | "processing" | "completed" | "failed";
  date: string;
  total: string;
}

const recentOrders: Order[] = [
  {
    id: "ORD-5331",
    customer: "Devon Lane",
    status: "completed",
    date: "2023/04/21",
    total: "$320.00",
  },
  {
    id: "ORD-4132",
    customer: "Jane Cooper",
    status: "processing",
    date: "2023/04/22",
    total: "$124.00",
  },
  {
    id: "ORD-3133",
    customer: "Esther Howard",
    status: "pending",
    date: "2023/04/23",
    total: "$234.00",
  },
  {
    id: "ORD-2134",
    customer: "Brooklyn Simmons",
    status: "failed",
    date: "2023/04/24",
    total: "$530.00",
  },
  {
    id: "ORD-1135",
    customer: "Ralph Edwards",
    status: "completed",
    date: "2023/04/25",
    total: "$43.00",
  },
];

export function RecentOrders() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Recent Orders</CardTitle>
        <Button variant="ghost" size="sm" className="gap-1">
          View all
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={cn(
                      order.status === "completed" && "border-green-500 text-green-500",
                      order.status === "processing" && "border-blue-500 text-blue-500",
                      order.status === "pending" && "border-yellow-500 text-yellow-500",
                      order.status === "failed" && "border-red-500 text-red-500"
                    )}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell className="text-right">{order.total}</TableCell>
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
  );
}

function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}
