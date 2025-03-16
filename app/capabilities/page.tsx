import Link from "next/link"
import { ChevronRight, Code, Database, LineChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CapabilitiesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-tim-brown">Our Capabilities</h1>
        <p className="text-muted-foreground mt-2">
          Explore the various capabilities and services offered by the Tim Hortons Machine Learning team
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-tim-red flex items-center">
                <Database className="mr-2 h-6 w-6" />
                Data Engineering
              </CardTitle>
              <CardDescription>Building robust data infrastructure and pipelines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Our Data Engineering team designs, builds, and maintains the data infrastructure that powers Tim
                  Hortons' analytics and machine learning initiatives. We ensure data is accessible, reliable, and
                  optimized for analysis.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  <Link href="/capabilities/data-engineering/etl-pipelines" className="block">
                    <Card className="h-full hover:shadow-md transition-shadow border-tim-red/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">ETL Pipelines</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Building robust data pipelines to extract, transform, and load data from various sources.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>

                  <Link href="/capabilities/data-engineering/data-warehousing" className="block">
                    <Card className="h-full hover:shadow-md transition-shadow border-tim-red/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Data Warehousing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Designing and implementing scalable data warehouses for efficient data storage and retrieval.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>

                  <Link href="/capabilities/data-engineering/data-quality" className="block">
                    <Card className="h-full hover:shadow-md transition-shadow border-tim-red/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Data Quality</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Ensuring data accuracy, completeness, and reliability through monitoring and validation.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>

                <div className="mt-4 text-right">
                  <Link href="/capabilities/data-engineering">
                    <Button variant="outline" className="text-tim-red border-tim-red hover:bg-tim-red hover:text-white">
                      Explore Data Engineering
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-tim-red flex items-center">
                <Code className="mr-2 h-6 w-6" />
                Machine Learning
              </CardTitle>
              <CardDescription>Developing predictive models and AI-powered solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Our Machine Learning team develops advanced algorithms and models to solve complex business problems,
                  optimize operations, and enhance customer experiences at Tim Hortons.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  <Link href="/capabilities/machine-learning/predictive-analytics" className="block">
                    <Card className="h-full hover:shadow-md transition-shadow border-tim-red/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Predictive Analytics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Building models to forecast sales, demand, and customer behavior to optimize operations.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>

                  <Link href="/capabilities/machine-learning/recommendation-systems" className="block">
                    <Card className="h-full hover:shadow-md transition-shadow border-tim-red/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Recommendation Systems</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Developing personalized recommendation engines for menu items and promotions.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>

                  <Link href="/capabilities/machine-learning/computer-vision" className="block">
                    <Card className="h-full hover:shadow-md transition-shadow border-tim-red/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Computer Vision</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Implementing image recognition for quality control and operational efficiency.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>

                <div className="mt-4 text-right">
                  <Link href="/capabilities/machine-learning">
                    <Button variant="outline" className="text-tim-red border-tim-red hover:bg-tim-red hover:text-white">
                      Explore Machine Learning
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-tim-red flex items-center">
                <LineChart className="mr-2 h-6 w-6" />
                Analytics
              </CardTitle>
              <CardDescription>Transforming data into actionable insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Our Analytics team transforms raw data into actionable insights through dashboards, reports, and
                  advanced analytics to drive business decisions across Tim Hortons.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  <Link href="/capabilities/analytics/dashboards" className="block">
                    <Card className="h-full hover:shadow-md transition-shadow border-tim-red/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Dashboards & Reporting</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Creating interactive dashboards and automated reports for business monitoring.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>

                  <Link href="/capabilities/analytics/business-intelligence" className="block">
                    <Card className="h-full hover:shadow-md transition-shadow border-tim-red/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Business Intelligence</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Providing data-driven insights to support strategic decision-making.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>

                  <Link href="/capabilities/analytics/ab-testing" className="block">
                    <Card className="h-full hover:shadow-md transition-shadow border-tim-red/20">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">A/B Testing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Designing and analyzing experiments to optimize products and marketing campaigns.
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>

                <div className="mt-4 text-right">
                  <Link href="/capabilities/analytics">
                    <Button variant="outline" className="text-tim-red border-tim-red hover:bg-tim-red hover:text-white">
                      Explore Analytics
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

