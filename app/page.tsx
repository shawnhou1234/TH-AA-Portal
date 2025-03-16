import Link from "next/link"
import Image from "next/image"
import {
  BookOpen,
  ChevronRight,
  Code,
  Database,
  ExternalLink,
  FileText,
  GraduationCapIcon as Graduation,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AccessDisclaimer } from "@/components/access-disclaimer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-tim-red text-white py-12 px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Tim Hortons Advanced Analytics Team</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Access resources, knowledge, and submit requests to the Tim Hortons AA team
          </p>
          <Link href="/task-intake">
            <Button size="lg" className="font-semibold bg-white text-tim-red hover:bg-tim-cream hover:text-tim-brown">
              Submit a New Request
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      <section className="py-6 px-6">
        <div className="container mx-auto">
          <AccessDisclaimer />
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-tim-brown">Portal Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/data-resources" className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-tim-red">
                    <Database className="mr-2 h-5 w-5" />
                    Data Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access comprehensive documentation, data dictionaries, and guides for our internal data tools.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/articles" className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-tim-red">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Knowledge Hub
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Browse articles, case studies, and industry insights from our team and external sources.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/free-resources" className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-tim-red">
                    <Graduation className="mr-2 h-5 w-5" />
                    Free Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access free learning resources for SQL, Python, and machine learning to enhance your skills.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-tim-cream/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-tim-brown">Data Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/data-resources/data-dictionary" className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-tim-red">
                    <FileText className="mr-2 h-5 w-5" />
                    Data Dictionary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive documentation of all data sources, tables, and fields available for analysis and
                    modeling.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/data-resources/tools" className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-tim-red">
                    <Database className="mr-2 h-5 w-5" />
                    Tool Guides
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Detailed documentation and tutorials for Databricks, Snowflake, Sigma, and other internal tools.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
          <div className="mt-6 text-center">
            <Link href="/data-resources">
              <Button variant="outline" className="text-tim-red border-tim-red hover:bg-tim-red hover:text-white">
                Browse All Data Resources
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Separator className="bg-tim-cream" />

      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-tim-brown">Knowledge Hub</h2>
            <Link href="/articles">
              <Button variant="outline" className="text-tim-red border-tim-red hover:bg-tim-red hover:text-white">
                View All Articles
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Customer+Segmentation"
                  alt="Customer Segmentation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <BookOpen className="h-4 w-4" />
                  <span>Internal Article</span>
                </div>
                <CardTitle className="text-xl text-tim-brown">Customer Segmentation Using ML</CardTitle>
                <CardDescription>
                  How we built a customer segmentation model to personalize marketing campaigns.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">By Shawn Zou</span>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=QSR+Trends"
                  alt="QSR Trends"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <BookOpen className="h-4 w-4" />
                  <span>External Article</span>
                </div>
                <CardTitle className="text-xl text-tim-brown">AI Trends in QSR Industry</CardTitle>
                <CardDescription>
                  Latest trends in how QSR companies are leveraging AI to improve operations and customer experience.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Source: QSR Magazine</span>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=200&width=400&text=Data+Dictionary"
                  alt="Data Dictionary"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                  <FileText className="h-4 w-4" />
                  <span>Data Resource</span>
                </div>
                <CardTitle className="text-xl text-tim-brown">Comprehensive Data Dictionary</CardTitle>
                <CardDescription>
                  A complete guide to all data sources and tables available for analysis.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">By Anirudha Porwal</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-tim-cream/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-tim-brown">Free Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-tim-red">
                  <Code className="mr-2 h-5 w-5" />
                  SQL Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Free resources to learn and improve your SQL skills for data analysis.
                </p>
                <Link href="/free-resources/sql">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-tim-red border-tim-red hover:bg-tim-red hover:text-white"
                  >
                    Explore Resources
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-tim-red">
                  <Code className="mr-2 h-5 w-5" />
                  Python for Data Science
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Curated resources for learning Python specifically for data analysis and machine learning.
                </p>
                <Link href="/free-resources/python">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-tim-red border-tim-red hover:bg-tim-red hover:text-white"
                  >
                    Explore Resources
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-tim-red">
                  <Graduation className="mr-2 h-5 w-5" />
                  Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Free resources to learn machine learning concepts, algorithms, and applications.
                </p>
                <Link href="/free-resources/machine-learning">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-tim-red border-tim-red hover:bg-tim-red hover:text-white"
                  >
                    Explore Resources
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 text-center">
            <Link href="/free-resources">
              <Button variant="outline" className="text-tim-red border-tim-red hover:bg-tim-red hover:text-white">
                View All Learning Resources
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-tim-red text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Submit a Request?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Our team is ready to help with your data engineering and advanced analytics needs. Submit a request through
            our JIRA system to get started.
          </p>
          <Link href="/task-intake">
            <Button size="lg" className="font-semibold bg-white text-tim-red hover:bg-tim-cream hover:text-tim-brown">
              <ExternalLink className="mr-2 h-5 w-5" />
              Submit a New Request
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

