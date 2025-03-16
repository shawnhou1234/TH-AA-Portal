import { BookOpen, FileText, HelpCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DataResourcesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-tim-brown">Data Resources</h1>
        <p className="text-muted-foreground">Access documentation, tools, and resources for data engineering</p>
      </div>

      <div className="grid gap-8">
        <div>
          <h2 className="text-xl font-semibold text-tim-brown mb-4">Portal Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/data-resources/portal-guide/navigation">
              <Card className="h-full hover:border-tim-red transition-colors cursor-pointer">
                <CardHeader>
                  <BookOpen className="h-6 w-6 text-tim-red mb-2" />
                  <CardTitle className="text-tim-brown">Portal Navigation</CardTitle>
                  <CardDescription>Learn how to navigate through different sections of the portal</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/task-intake">
              <Card className="h-full hover:border-tim-red transition-colors cursor-pointer">
                <CardHeader>
                  <FileText className="h-6 w-6 text-tim-red mb-2" />
                  <CardTitle className="text-tim-brown">Submitting Requests</CardTitle>
                  <CardDescription>Learn how to submit and track data engineering requests</CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/data-resources/portal-guide/faq">
              <Card className="h-full hover:border-tim-red transition-colors cursor-pointer">
                <CardHeader>
                  <HelpCircle className="h-6 w-6 text-tim-red mb-2" />
                  <CardTitle className="text-tim-brown">FAQ</CardTitle>
                  <CardDescription>Find answers to frequently asked questions</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-tim-brown mb-4">Data Dictionary</h2>
          <Card className="hover:border-tim-red transition-colors cursor-pointer">
            <CardHeader>
              <CardTitle className="text-tim-brown">Data Dictionary</CardTitle>
              <CardDescription>Access comprehensive data definitions and schema documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="text-tim-red hover:bg-tim-red/10">
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-tim-brown mb-4">Tools</h2>
          <Link href="https://docs.databricks.com/" target="_blank" rel="noopener noreferrer">
            <Card className="hover:border-tim-red transition-colors cursor-pointer">
              <CardHeader>
                <CardTitle className="text-tim-brown">Databricks</CardTitle>
                <CardDescription>Access Databricks official documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-tim-red hover:bg-tim-red/10">
                  View Documentation
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}

