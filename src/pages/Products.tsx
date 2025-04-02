
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
import { Search, Plus, Filter, MoreHorizontal } from "lucide-react";

const productData = [
  {
    id: "P001",
    name: "Premium Headphones",
    category: "Electronics",
    price: "$299.99",
    stock: 43,
    status: "in_stock",
  },
  {
    id: "P002",
    name: "Wireless Keyboard",
    category: "Electronics",
    price: "$89.99",
    stock: 15,
    status: "low_stock",
  },
  {
    id: "P003",
    name: "Designer Watch",
    category: "Fashion",
    price: "$199.99",
    stock: 28,
    status: "in_stock",
  },
  {
    id: "P004",
    name: "Smartphone Case",
    category: "Accessories",
    price: "$24.99",
    stock: 0,
    status: "out_of_stock",
  },
  {
    id: "P005",
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: "$129.99",
    stock: 62,
    status: "in_stock",
  },
  {
    id: "P006",
    name: "Fitness Tracker",
    category: "Electronics",
    price: "$89.99",
    stock: 8,
    status: "low_stock",
  },
];

const Products = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Products</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>
        
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium">Product List</CardTitle>
              <div className="flex items-center gap-2">
                <div className="relative w-60">
                  <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search products..." className="pl-8" />
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
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productData.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-muted-foreground">{product.id}</div>
                    </TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          product.status === "in_stock"
                            ? "default"
                            : product.status === "low_stock"
                            ? "outline"
                            : "destructive"
                        }
                      >
                        {product.status === "in_stock"
                          ? "In Stock"
                          : product.status === "low_stock"
                          ? "Low Stock"
                          : "Out of Stock"}
                      </Badge>
                    </TableCell>
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

export default Products;
