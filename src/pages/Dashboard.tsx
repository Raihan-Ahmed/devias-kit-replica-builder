
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentOrders } from "@/components/dashboard/RecentOrders";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { LatestCustomers } from "@/components/dashboard/LatestCustomers";
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard 
            title="Total Customers" 
            value="13,456" 
            trend="up" 
            trendValue="+12%" 
            icon={Users} 
            iconColor="bg-primary"
          />
          <StatsCard 
            title="Total Revenue" 
            value="$84,686" 
            trend="up" 
            trendValue="+8%" 
            icon={DollarSign} 
            iconColor="bg-green-500"
          />
          <StatsCard 
            title="Total Orders" 
            value="4,320" 
            trend="down" 
            trendValue="-3%" 
            icon={ShoppingCart} 
            iconColor="bg-orange-500"
          />
          <StatsCard 
            title="Growth Rate" 
            value="+12.5%" 
            description="Monthly" 
            icon={TrendingUp} 
            iconColor="bg-blue-500"
          />
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <SalesChart />
          <LatestCustomers />
        </div>
        
        <RecentOrders />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
