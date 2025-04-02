
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  description?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  icon?: LucideIcon;
  iconColor?: string;
}

export function StatsCard({
  title,
  value,
  description,
  trend = "neutral",
  trendValue,
  icon: Icon,
  iconColor,
}: StatsCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h4 className="text-2xl font-bold mt-1">{value}</h4>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            )}
            {trendValue && (
              <div className="flex items-center mt-1">
                <span
                  className={cn(
                    "text-xs font-medium mr-1",
                    trend === "up" && "text-green-500",
                    trend === "down" && "text-red-500"
                  )}
                >
                  {trendValue}
                </span>
                <span className="text-xs text-muted-foreground">from last month</span>
              </div>
            )}
          </div>
          {Icon && (
            <div
              className={cn(
                "p-2 rounded-full",
                iconColor ? iconColor : "bg-primary/10"
              )}
            >
              <Icon className={cn("h-5 w-5", iconColor ? "text-white" : "text-primary")} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
