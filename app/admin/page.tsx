"use client"

import { useState } from "react"
import { Check, ChevronDown, FileText, Lock, Search, Shield, User, Users, Pencil } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

// Mock data
const users = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@timhortons.com",
    role: "Admin",
    department: "Data Science",
    lastActive: "2023-05-28T10:30:00",
    status: "active",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@timhortons.com",
    role: "PM",
    department: "Product",
    lastActive: "2023-05-27T14:45:00",
    status: "active",
  },
  {
    id: 3,
    name: "Jessica Williams",
    email: "jessica.williams@timhortons.com",
    role: "Client",
    department: "Marketing",
    lastActive: "2023-05-26T09:15:00",
    status: "active",
  },
  {
    id: 4,
    name: "Robert Taylor",
    email: "robert.taylor@timhortons.com",
    role: "Tech Lead",
    department: "Engineering",
    lastActive: "2023-05-25T16:20:00",
    status: "active",
  },
  {
    id: 5,
    name: "Amanda Garcia",
    email: "amanda.garcia@timhortons.com",
    role: "Client",
    department: "Operations",
    lastActive: "2023-05-24T11:10:00",
    status: "inactive",
  },
  {
    id: 6,
    name: "David Kim",
    email: "david.kim@timhortons.com",
    role: "Tech Lead",
    department: "Data Engineering",
    lastActive: "2023-05-23T13:40:00",
    status: "active",
  },
  {
    id: 7,
    name: "Emily Brown",
    email: "emily.brown@timhortons.com",
    role: "Client",
    department: "Finance",
    lastActive: "2023-05-22T15:30:00",
    status: "active",
  },
]

const articles = [
  {
    id: 1,
    title: "Optimizing ML Models for Production",
    author: "Alex Johnson",
    category: "Best Practices",
    publishedDate: "2023-05-10",
    status: "published",
  },
  {
    id: 2,
    title: "Data Pipeline Best Practices",
    author: "Maria Garcia",
    category: "Best Practices",
    publishedDate: "2023-05-15",
    status: "published",
  },
  {
    id: 3,
    title: "A/B Testing Framework",
    author: "David Chen",
    category: "Tutorials",
    publishedDate: "2023-05-20",
    status: "published",
  },
  {
    id: 4,
    title: "Customer Segmentation Case Study",
    author: "Priya Patel",
    category: "Case Studies",
    publishedDate: "2023-05-25",
    status: "published",
  },
  {
    id: 5,
    title: "Introduction to Feature Stores",
    author: "James Wilson",
    category: "Tutorials",
    publishedDate: "2023-06-01",
    status: "draft",
  },
]

export default function AdminPage() {
  const { toast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTab, setSelectedTab] = useState("users")
  const [isAddUserDialogOpen, setIsAddUserDialogOpen] = useState(false)
  const [newUserData, setNewUserData] = useState({
    name: "",
    email: "",
    role: "",
    department: "",
  })

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.department.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  const filteredArticles = articles.filter((article) => {
    return (
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })

  const handleAddUser = () => {
    // Simulate API call
    console.log("Adding new user:", newUserData)
    setIsAddUserDialogOpen(false)
    toast({
      title: "User added successfully",
      description: `${newUserData.name} has been added as a ${newUserData.role}.`,
    })
    setNewUserData({
      name: "",
      email: "",
      role: "",
      department: "",
    })
  }

  const handleChangeUserRole = (userId: number, newRole: string) => {
    // Simulate API call
    console.log(`Changing user ${userId} role to ${newRole}`)
    toast({
      title: "User role updated",
      description: `User role has been updated to ${newRole}.`,
    })
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage users, permissions, and content</p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog open={isAddUserDialogOpen} onOpenChange={setIsAddUserDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <User className="mr-2 h-4 w-4" />
                Add User
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New User</DialogTitle>
                <DialogDescription>Add a new user to the system and assign their role.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={newUserData.name}
                    onChange={(e) => setNewUserData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter full name"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={newUserData.email}
                    onChange={(e) => setNewUserData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter email address"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="role">Role</Label>
                  <Select
                    value={newUserData.role}
                    onValueChange={(value) => setNewUserData((prev) => ({ ...prev, role: value }))}
                  >
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="PM">PM</SelectItem>
                      <SelectItem value="Tech Lead">Tech Lead</SelectItem>
                      <SelectItem value="Client">Client</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="department">Department</Label>
                  <Select
                    value={newUserData.department}
                    onValueChange={(value) => setNewUserData((prev) => ({ ...prev, department: value }))}
                  >
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Data Science">Data Science</SelectItem>
                      <SelectItem value="Data Engineering">Data Engineering</SelectItem>
                      <SelectItem value="Engineering">Engineering</SelectItem>
                      <SelectItem value="Product">Product</SelectItem>
                      <SelectItem value="Marketing">Marketing</SelectItem>
                      <SelectItem value="Operations">Operations</SelectItem>
                      <SelectItem value="Finance">Finance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddUserDialogOpen(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={handleAddUser}
                  disabled={!newUserData.name || !newUserData.email || !newUserData.role || !newUserData.department}
                >
                  Add User
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>Admin Controls</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="users" value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="users">
                <Users className="mr-2 h-4 w-4" />
                Users
              </TabsTrigger>
              <TabsTrigger value="articles">
                <FileText className="mr-2 h-4 w-4" />
                Articles
              </TabsTrigger>
              <TabsTrigger value="permissions">
                <Shield className="mr-2 h-4 w-4" />
                Permissions
              </TabsTrigger>
            </TabsList>

            <TabsContent value="users" className="mt-0">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[250px]">Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${user.name.charAt(0)}`} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            {user.name}
                          </div>
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 p-2 flex items-center gap-1">
                                <Badge
                                  variant={
                                    user.role === "Admin"
                                      ? "destructive"
                                      : user.role === "PM" || user.role === "Tech Lead"
                                        ? "default"
                                        : "secondary"
                                  }
                                >
                                  {user.role}
                                </Badge>
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Change Role</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={() => handleChangeUserRole(user.id, "Admin")}>
                                {user.role === "Admin" && <Check className="mr-2 h-4 w-4" />}
                                Admin
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleChangeUserRole(user.id, "PM")}>
                                {user.role === "PM" && <Check className="mr-2 h-4 w-4" />}
                                PM
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleChangeUserRole(user.id, "Tech Lead")}>
                                {user.role === "Tech Lead" && <Check className="mr-2 h-4 w-4" />}
                                Tech Lead
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleChangeUserRole(user.id, "Client")}>
                                {user.role === "Client" && <Check className="mr-2 h-4 w-4" />}
                                Client
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                        <TableCell>{user.department}</TableCell>
                        <TableCell>{new Date(user.lastActive).toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge variant={user.status === "active" ? "outline" : "secondary"}>{user.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <span className="sr-only">Open menu</span>
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Edit User</DropdownMenuItem>
                              <DropdownMenuItem>Reset Password</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Deactivate User</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="articles" className="mt-0">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[300px]">Title</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Published Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredArticles.map((article) => (
                      <TableRow key={article.id}>
                        <TableCell className="font-medium">{article.title}</TableCell>
                        <TableCell>{article.author}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{article.category}</Badge>
                        </TableCell>
                        <TableCell>{new Date(article.publishedDate).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Badge variant={article.status === "published" ? "default" : "secondary"}>
                            {article.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <span className="sr-only">Open menu</span>
                                <ChevronDown className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Edit Article</DropdownMenuItem>
                              <DropdownMenuItem>View Article</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">Delete Article</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="permissions" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Role Permissions</CardTitle>
                  <CardDescription>Configure what each role can access and modify in the system</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive">Admin</Badge>
                          <span className="text-sm font-medium">Administrator</span>
                        </div>
                        <Button variant="outline" size="sm">
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit Permissions
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border rounded-md p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Lock className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">User Management</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Can create, edit, and delete users. Can assign roles.
                          </p>
                        </div>
                        <div className="border rounded-md p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Lock className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Content Management</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Can create, edit, and delete all content and articles.
                          </p>
                        </div>
                        <div className="border rounded-md p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Lock className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Task Management</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Can review, score, assign, and push tasks to JIRA.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge>PM</Badge>
                          <span className="text-sm font-medium">Project Manager</span>
                        </div>
                        <Button variant="outline" size="sm">
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit Permissions
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border rounded-md p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Lock className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">User Management</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Can view users. Cannot create or delete users.
                          </p>
                        </div>
                        <div className="border rounded-md p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Lock className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Content Management</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Can create and edit articles. Cannot delete articles.
                          </p>
                        </div>
                        <div className="border rounded-md p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Lock className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Task Management</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Can review, score, assign, and push tasks to JIRA.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge>Tech Lead</Badge>
                          <span className="text-sm font-medium">Technical Lead</span>
                        </div>
                        <Button variant="outline" size="sm">
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit Permissions
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border rounded-md p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Lock className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">User Management</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Can view users. Cannot create or delete users.
                          </p>
                        </div>
                        <div className="border rounded-md p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Lock className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Content Management</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Can create and edit articles. Cannot delete articles.
                          </p>
                        </div>
                        <div className="border rounded-md p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Lock className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Task Management</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Can review, score, assign, and push tasks to JIRA.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">Client</Badge>
                          <span className="text-sm font-medium">Client User</span>
                        </div>
                        <Button variant="outline" size="sm">
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit Permissions
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border rounded-md p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Lock className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">User Management</span>
                          </div>
                          <p className="text-sm text-muted-foreground">Cannot view, create, or delete users.</p>
                        </div>
                        <div className="border rounded-md p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Lock className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Content Management</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Can view articles. Cannot create, edit, or delete articles.
                          </p>
                        </div>
                        <div className="border rounded-md p-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Lock className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">Task Management</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Can submit tasks. Cannot review, score, or assign tasks.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

