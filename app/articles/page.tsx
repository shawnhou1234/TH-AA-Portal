"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { BookOpen, ChevronRight, FileText, Filter, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Add import for the disclaimer
import { AccessDisclaimer } from "@/components/access-disclaimer"

// Mock data for internal articles
const internalArticles = [
  {
    id: 1,
    title: "Customer Segmentation Using ML",
    excerpt:
      "How we built a customer segmentation model to personalize marketing campaigns and drive higher engagement.",
    category: "Machine Learning",
    author: {
      name: "Shawn Zou",
      avatar: "/placeholder.svg?height=40&width=40&text=SZ",
    },
    date: "2023-05-10",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400&text=Customer+Segmentation",
  },
  {
    id: 2,
    title: "Building Real-time ETL Pipelines",
    excerpt:
      "A detailed walkthrough of how we built real-time ETL pipelines to process transaction data for immediate analysis.",
    category: "Data Engineering",
    author: {
      name: "Haoyu Fan",
      avatar: "/placeholder.svg?height=40&width=40&text=HF",
    },
    date: "2023-05-15",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=400&text=ETL+Pipelines",
  },
  {
    id: 3,
    title: "Optimizing Drive-Thru Operations with ML",
    excerpt: "How we used machine learning to optimize drive-thru operations and reduce wait times across locations.",
    category: "Machine Learning",
    author: {
      name: "Shawn Hou",
      avatar: "/placeholder.svg?height=40&width=40&text=SH",
    },
    date: "2023-05-20",
    readTime: "12 min read",
    image: "/placeholder.svg?height=200&width=400&text=Drive+Thru+ML",
  },
  {
    id: 4,
    title: "Demand Forecasting for Inventory Management",
    excerpt: "A case study on how we built a demand forecasting model to optimize inventory management across stores.",
    category: "Analytics",
    author: {
      name: "Mike Qiu",
      avatar: "/placeholder.svg?height=40&width=40&text=MQ",
    },
    date: "2023-05-25",
    readTime: "15 min read",
    image: "/placeholder.svg?height=200&width=400&text=Demand+Forecasting",
  },
  {
    id: 5,
    title: "Data Quality Monitoring Framework",
    excerpt:
      "How we built a comprehensive data quality monitoring framework to ensure reliable analytics and ML models.",
    category: "Data Engineering",
    author: {
      name: "Paul Kang",
      avatar: "/placeholder.svg?height=40&width=40&text=PK",
    },
    date: "2023-06-01",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=400&text=Data+Quality",
  },
  {
    id: 6,
    title: "Personalized Recommendation System",
    excerpt: "A deep dive into our personalized recommendation system for the Tim Hortons mobile app.",
    category: "Machine Learning",
    author: {
      name: "Jiawei Gao",
      avatar: "/placeholder.svg?height=40&width=40&text=JG",
    },
    date: "2023-06-05",
    readTime: "9 min read",
    image: "/placeholder.svg?height=200&width=400&text=Recommendation+System",
  },
  {
    id: 7,
    title: "Customer Lifetime Value Prediction",
    excerpt:
      "How we built a model to predict customer lifetime value to optimize marketing spend and loyalty programs.",
    category: "Analytics",
    author: {
      name: "Cornielia Wang",
      avatar: "/placeholder.svg?height=40&width=40&text=CW",
    },
    date: "2023-06-10",
    readTime: "11 min read",
    image: "/placeholder.svg?height=200&width=400&text=CLV+Prediction",
  },
]

// Mock data for external articles
const externalArticles = [
  {
    id: 1,
    title: "AI Trends in QSR Industry",
    excerpt: "Latest trends in how QSR companies are leveraging AI to improve operations and customer experience.",
    category: "Industry Trends",
    source: "QSR Magazine",
    date: "2023-05-05",
    readTime: "6 min read",
    image: "/placeholder.svg?height=200&width=400&text=QSR+Trends",
  },
  {
    id: 2,
    title: "The Future of Drive-Thru Technology",
    excerpt: "How AI and machine learning are transforming drive-thru operations in the QSR industry.",
    category: "Technology",
    source: "Fast Casual",
    date: "2023-05-12",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400&text=Drive+Thru+Tech",
  },
  {
    id: 3,
    title: "Data-Driven Menu Optimization",
    excerpt:
      "How leading QSR chains are using data analytics to optimize their menus for profitability and customer satisfaction.",
    category: "Analytics",
    source: "Restaurant Business",
    date: "2023-05-18",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=400&text=Menu+Optimization",
  },
  {
    id: 4,
    title: "Personalization in QSR Mobile Apps",
    excerpt: "A look at how personalization is driving engagement and sales in QSR mobile applications.",
    category: "Mobile",
    source: "Nation's Restaurant News",
    date: "2023-05-22",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=400&text=Mobile+Apps",
  },
  {
    id: 5,
    title: "Sustainability Analytics in QSR",
    excerpt: "How QSR chains are using data analytics to measure and improve their sustainability initiatives.",
    category: "Sustainability",
    source: "Green Restaurant Association",
    date: "2023-05-28",
    readTime: "9 min read",
    image: "/placeholder.svg?height=200&width=400&text=Sustainability",
  },
]

export default function ArticlesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("internal")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const filteredInternalArticles = internalArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    if (categoryFilter === "all") return matchesSearch
    return matchesSearch && article.category.toLowerCase().replace(/\s+/g, "-") === categoryFilter.toLowerCase()
  })

  const filteredExternalArticles = externalArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    if (categoryFilter === "all") return matchesSearch
    return matchesSearch && article.category.toLowerCase().replace(/\s+/g, "-") === categoryFilter.toLowerCase()
  })

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-tim-brown">Knowledge Hub</h1>
          <p className="text-muted-foreground">Browse articles, case studies, and industry insights</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/articles/new">
            <Button className="bg-tim-red hover:bg-tim-red/90 text-white">
              <Plus className="mr-2 h-4 w-4" />
              New Article
            </Button>
          </Link>
        </div>
      </div>

      <AccessDisclaimer />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="md:col-span-3">
          <div className="flex items-center gap-2 mb-6">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 border-tim-red text-tim-red hover:bg-tim-red hover:text-white"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setCategoryFilter("all")}>All Categories</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategoryFilter("machine-learning")}>
                  Machine Learning
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategoryFilter("data-engineering")}>
                  Data Engineering
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategoryFilter("analytics")}>Analytics</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setCategoryFilter("industry-trends")}>
                  Industry Trends
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Tabs defaultValue="internal" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6 bg-tim-cream/30">
              <TabsTrigger value="internal" className="data-[state=active]:bg-tim-red data-[state=active]:text-white">
                Internal Articles
              </TabsTrigger>
              <TabsTrigger value="external" className="data-[state=active]:bg-tim-red data-[state=active]:text-white">
                External Articles
              </TabsTrigger>
            </TabsList>

            <TabsContent value="internal" className="mt-0">
              <div className="grid grid-cols-1 gap-6">
                {filteredInternalArticles.length > 0 ? (
                  filteredInternalArticles.map((article) => <InternalArticleCard key={article.id} article={article} />)
                ) : (
                  <div className="text-center py-12">
                    <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">No articles found</h3>
                    <p className="text-muted-foreground mb-4">
                      We couldn't find any internal articles matching your search criteria.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchQuery("")
                        setCategoryFilter("all")
                      }}
                      className="border-tim-red text-tim-red hover:bg-tim-red hover:text-white"
                    >
                      Clear filters
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="external" className="mt-0">
              <div className="grid grid-cols-1 gap-6">
                {filteredExternalArticles.length > 0 ? (
                  filteredExternalArticles.map((article) => <ExternalArticleCard key={article.id} article={article} />)
                ) : (
                  <div className="text-center py-12">
                    <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-medium mb-2">No articles found</h3>
                    <p className="text-muted-foreground mb-4">
                      We couldn't find any external articles matching your search criteria.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchQuery("")
                        setCategoryFilter("all")
                      }}
                      className="border-tim-red text-tim-red hover:bg-tim-red hover:text-white"
                    >
                      Clear filters
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-tim-brown">Categories</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-2">
              <Button
                variant="ghost"
                className="justify-start hover:text-tim-red"
                onClick={() => {
                  setCategoryFilter("all")
                  setActiveTab("internal")
                }}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                All Articles
              </Button>
              <Button
                variant="ghost"
                className="justify-start hover:text-tim-red"
                onClick={() => {
                  setCategoryFilter("machine-learning")
                  setActiveTab("internal")
                }}
              >
                <ChevronRight className="mr-2 h-4 w-4" />
                Machine Learning
              </Button>
              <Button
                variant="ghost"
                className="justify-start hover:text-tim-red"
                onClick={() => {
                  setCategoryFilter("data-engineering")
                  setActiveTab("internal")
                }}
              >
                <ChevronRight className="mr-2 h-4 w-4" />
                Data Engineering
              </Button>
              <Button
                variant="ghost"
                className="justify-start hover:text-tim-red"
                onClick={() => {
                  setCategoryFilter("analytics")
                  setActiveTab("internal")
                }}
              >
                <ChevronRight className="mr-2 h-4 w-4" />
                Analytics
              </Button>
              <Button
                variant="ghost"
                className="justify-start hover:text-tim-red"
                onClick={() => {
                  setCategoryFilter("industry-trends")
                  setActiveTab("external")
                }}
              >
                <ChevronRight className="mr-2 h-4 w-4" />
                Industry Trends
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-tim-brown">Popular Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-tim-cream text-tim-brown hover:bg-tim-cream/80">
                  Machine Learning
                </Badge>
                <Badge variant="secondary" className="bg-tim-cream text-tim-brown hover:bg-tim-cream/80">
                  Data Engineering
                </Badge>
                <Badge variant="secondary" className="bg-tim-cream text-tim-brown hover:bg-tim-cream/80">
                  Python
                </Badge>
                <Badge variant="secondary" className="bg-tim-cream text-tim-brown hover:bg-tim-cream/80">
                  TensorFlow
                </Badge>
                <Badge variant="secondary" className="bg-tim-cream text-tim-brown hover:bg-tim-cream/80">
                  PyTorch
                </Badge>
                <Badge variant="secondary" className="bg-tim-cream text-tim-brown hover:bg-tim-cream/80">
                  SQL
                </Badge>
                <Badge variant="secondary" className="bg-tim-cream text-tim-brown hover:bg-tim-cream/80">
                  ETL
                </Badge>
                <Badge variant="secondary" className="bg-tim-cream text-tim-brown hover:bg-tim-cream/80">
                  Databricks
                </Badge>
                <Badge variant="secondary" className="bg-tim-cream text-tim-brown hover:bg-tim-cream/80">
                  QSR
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

interface InternalArticleCardProps {
  article: (typeof internalArticles)[0]
}

function InternalArticleCard({ article }: InternalArticleCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="md:flex">
        <div className="relative h-48 md:h-auto md:w-1/3">
          <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
        </div>
        <div className="md:w-2/3">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="border-tim-red text-tim-red">
                {article.category}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>{article.readTime}</span>
              </div>
            </div>
            <CardTitle className="mt-2 text-tim-brown">
              <Link href={`/articles/${article.id}`} className="hover:text-tim-red transition-colors">
                {article.title}
              </Link>
            </CardTitle>
            <CardDescription className="line-clamp-2">{article.excerpt}</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={article.author.avatar} alt={article.author.name} />
                <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{article.author.name}</p>
                <p className="text-xs text-muted-foreground">{new Date(article.date).toLocaleDateString()}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-tim-red hover:bg-tim-red/10">
              <Link href={`/articles/${article.id}`} className="flex items-center">
                Read more
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}

interface ExternalArticleCardProps {
  article: (typeof externalArticles)[0]
}

function ExternalArticleCard({ article }: ExternalArticleCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="md:flex">
        <div className="relative h-48 md:h-auto md:w-1/3">
          <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
        </div>
        <div className="md:w-2/3">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="border-tim-red text-tim-red">
                {article.category}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <span>{article.readTime}</span>
              </div>
            </div>
            <CardTitle className="mt-2 text-tim-brown">
              <Link href={`/articles/external/${article.id}`} className="hover:text-tim-red transition-colors">
                {article.title}
              </Link>
            </CardTitle>
            <CardDescription className="line-clamp-2">{article.excerpt}</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Source: {article.source}</p>
              <p className="text-xs text-muted-foreground">{new Date(article.date).toLocaleDateString()}</p>
            </div>
            <Button variant="ghost" size="sm" className="text-tim-red hover:bg-tim-red/10">
              <Link href={`/articles/external/${article.id}`} className="flex items-center">
                Read more
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}

