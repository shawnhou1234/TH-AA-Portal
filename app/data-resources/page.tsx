import Link from "next/link"
import Image from "next/image"
import { ChevronRight, FileText, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
// Add import for the disclaimer
import { AccessDisclaimer } from "@/components/access-disclaimer"

export default function DataResourcesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Add the disclaimer after the page title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-tim-brown">Data Resources</h1>
        <p className="text-muted-foreground mt-2">
          Access comprehensive documentation, data dictionaries, and guides for our internal data tools
        </p>
      </div>

      <AccessDisclaimer />

      <div className="flex items-center mb-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search data resources..." className="pl-8" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-tim-brown">Portal Guide</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-tim-red flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                How to Use the ML Team Portal
              </CardTitle>
              <CardDescription>A comprehensive guide to navigating and using the ML team portal</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                This guide will help you navigate the ML team portal effectively, access resources, and submit requests.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Link href="/data-resources/portal-guide/navigation" className="block">
                  <Card className="h-full hover:shadow-md transition-shadow border-tim-red/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Portal Navigation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Learn how to navigate the portal and find the resources you need.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/data-resources/portal-guide/resources" className="block">
                  <Card className="h-full hover:shadow-md transition-shadow border-tim-red/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Accessing Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        How to access and use the various resources available on the portal.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/data-resources/portal-guide/requests" className="block">
                  <Card className="h-full hover:shadow-md transition-shadow border-tim-red/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Submitting Requests</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Step-by-step guide to submitting requests through our JIRA system.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/data-resources/portal-guide/faq" className="block">
                  <Card className="h-full hover:shadow-md transition-shadow border-tim-red/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">FAQ</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Frequently asked questions about using the ML team portal.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>

              <div className="mt-6 text-right">
                <Link href="/data-resources/portal-guide">
                  <Button variant="outline" className="text-tim-red border-tim-red hover:bg-tim-red hover:text-white">
                    View Complete Portal Guide
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="bg-tim-cream" />

        <section>
          <h2 className="text-2xl font-bold mb-4 text-tim-brown">Data Dictionary</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-tim-red flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Comprehensive Data Dictionary
              </CardTitle>
              <CardDescription>Complete documentation of all data sources, tables, and fields</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="font-medium">By Anirudha Porwal</p>
                <p className="text-sm text-muted-foreground">Last updated: June 15, 2023</p>
              </div>
              <p className="mb-4">
                This comprehensive data dictionary provides detailed information about all data sources, tables, and
                fields available for analysis and modeling at Tim Hortons. Use this resource to understand data
                structures, relationships, and definitions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Link href="/data-resources/data-dictionary/transactions" className="block">
                  <Card className="h-full hover:shadow-md transition-shadow border-tim-red/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Transaction Data</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Documentation for all transaction-related tables, fields, and relationships.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/data-resources/data-dictionary/customer" className="block">
                  <Card className="h-full hover:shadow-md transition-shadow border-tim-red/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Customer Data</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Documentation for customer profiles, loyalty program, and behavior data.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/data-resources/data-dictionary/products" className="block">
                  <Card className="h-full hover:shadow-md transition-shadow border-tim-red/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Product Data</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Documentation for menu items, pricing, and product attributes.
                      </p>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="/data-resources/data-dictionary/locations" className="block">
                  <Card className="h-full hover:shadow-md transition-shadow border-tim-red/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Location Data</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Documentation for store locations, regions, and geographic attributes.
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>

              <div className="mt-6 text-right">
                <Link href="/data-resources/data-dictionary">
                  <Button variant="outline" className="text-tim-red border-tim-red hover:bg-tim-red hover:text-white">
                    View Complete Data Dictionary
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="bg-tim-cream" />

        <section>
          <h2 className="text-2xl font-bold mb-4 text-tim-brown">Tool Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/data-resources/tools/databricks" className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <div className="relative h-40 w-full">
                  <Image
                    src="/placeholder.svg?height=160&width=400&text=Databricks"
                    alt="Databricks"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-tim-brown">Databricks Guide</CardTitle>
                  <CardDescription>
                    Comprehensive documentation for using Databricks for data processing and analytics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn how to use Databricks for data processing, analysis, and machine learning at Tim Hortons.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-tim-red border-tim-red hover:bg-tim-red hover:text-white"
                  >
                    View Guide
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/data-resources/tools/snowflake" className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <div className="relative h-40 w-full">
                  <Image
                    src="/placeholder.svg?height=160&width=400&text=Snowflake"
                    alt="Snowflake"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-tim-brown">Snowflake Guide</CardTitle>
                  <CardDescription>
                    Documentation for accessing and querying our Snowflake data warehouse
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn how to access, query, and analyze data in our Snowflake data warehouse.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-tim-red border-tim-red hover:bg-tim-red hover:text-white"
                  >
                    View Guide
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <Link href="/data-resources/tools/sigma" className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-tim-brown">Sigma Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Documentation for creating and sharing Sigma dashboards and reports.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-tim-red border-tim-red hover:bg-tim-red hover:text-white"
                  >
                    View Guide
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/data-resources/tools/python" className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-tim-brown">Python Environment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Guide to setting up and using our Python environment for data analysis.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-tim-red border-tim-red hover:bg-tim-red hover:text-white"
                  >
                    View Guide
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/data-resources/tools/git" className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-tim-brown">Git & Version Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Best practices for using Git and version control for data and code.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-tim-red border-tim-red hover:bg-tim-red hover:text-white"
                  >
                    View Guide
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

