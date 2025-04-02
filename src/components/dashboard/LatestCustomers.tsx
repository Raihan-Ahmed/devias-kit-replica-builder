
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Customer {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  lastSeen: string;
}

const latestCustomers: Customer[] = [
  {
    id: "1",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    lastSeen: "10 minutes ago",
  },
  {
    id: "2",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    lastSeen: "1 hour ago",
  },
  {
    id: "3",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    avatarUrl: "https://randomuser.me/api/portraits/women/26.jpg",
    lastSeen: "2 hours ago",
  },
  {
    id: "4",
    name: "William Kim",
    email: "william.kim@email.com",
    avatarUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    lastSeen: "3 hours ago",
  },
];

export function LatestCustomers() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Latest Customers</CardTitle>
        <Button variant="ghost" size="sm" className="gap-1">
          View all
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {latestCustomers.map((customer) => (
            <div
              key={customer.id}
              className="flex items-center justify-between space-x-4"
            >
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={customer.avatarUrl} />
                  <AvatarFallback>
                    {customer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{customer.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {customer.email}
                  </p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                {customer.lastSeen}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
