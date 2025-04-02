
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  Users,
  ShoppingBag,
  Settings,
  ChevronLeft,
  LayoutDashboard,
  LogOut,
  ChevronRight,
} from 'lucide-react';

const menuItems = [
  { 
    title: 'Dashboard', 
    icon: LayoutDashboard, 
    path: '/' 
  },
  { 
    title: 'Customers', 
    icon: Users, 
    path: '/customers' 
  },
  { 
    title: 'Products', 
    icon: ShoppingBag, 
    path: '/products' 
  },
  { 
    title: 'Analytics', 
    icon: BarChart3, 
    path: '/analytics' 
  },
  { 
    title: 'Settings', 
    icon: Settings, 
    path: '/settings' 
  },
];

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
  return (
    <div className={cn(
      "bg-sidebar text-sidebar-foreground flex flex-col h-screen border-r border-sidebar-border relative transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className={cn(
        "flex items-center p-4",
        collapsed ? "justify-center" : "px-6"
      )}>
        {!collapsed && (
          <h2 className="text-xl font-bold">DEVIAS KIT</h2>
        )}
        {collapsed && (
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-sidebar-primary text-white font-bold">
            D
          </div>
        )}
      </div>
      
      <nav className="flex-1 px-2 py-4">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link 
                to={item.path} 
                className={cn(
                  "flex items-center rounded-md p-2 text-sm hover:bg-sidebar-accent group transition-colors",
                  location.pathname === item.path ? "bg-sidebar-accent text-white" : "text-sidebar-foreground",
                  collapsed ? "justify-center" : "px-4"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && (
                  <span className="ml-3">{item.title}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center p-2 rounded-md hover:bg-sidebar-accent text-sm transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5 mx-auto" />
          ) : (
            <>
              <ChevronLeft className="h-5 w-5" />
              <span className="ml-3">Collapse</span>
            </>
          )}
        </button>
        <button className={cn(
          "w-full flex items-center p-2 rounded-md hover:bg-sidebar-accent text-sm mt-2 text-red-400 transition-colors",
          collapsed ? "justify-center" : ""
        )}>
          <LogOut className="h-5 w-5" />
          {!collapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
}
