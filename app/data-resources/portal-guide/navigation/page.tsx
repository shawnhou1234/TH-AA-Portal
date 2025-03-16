import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PortalNavigationPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <Button variant="ghost" className="mb-4">
          <Link href="/data-resources" className="flex items-center text-tim-red">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Data Resources
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-tim-brown mb-2">Portal Navigation Guide</h1>
        <p className="text-muted-foreground">Learn how to navigate through different sections of the portal</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-tim-brown">Knowledge Hub</CardTitle>
            <CardDescription>Articles and Resources Section</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">The Knowledge Hub contains both internal and external articles:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Internal Articles: Technical documentation, case studies, and best practices from our team</li>
              <li>External Articles: Curated industry news and insights</li>
              <li>Search and filter articles by category</li>
              <li>Contribute new articles through the "New Article" button</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-tim-brown">Task Intake</CardTitle>
            <CardDescription>Request Submission System</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Submit and track data engineering requests:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Fill out the request form with project details</li>
              <li>Track request status</li>
              <li>Communicate with the data engineering team</li>
              <li>Access Slack support channel for questions</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-tim-brown">Data Resources</CardTitle>
            <CardDescription>Documentation and Tools</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Access essential data resources and documentation:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Portal Guide: Navigation help and FAQs</li>
              <li>Data Dictionary: Comprehensive data definitions</li>
              <li>Tools: Access to Databricks and other data tools</li>
              <li>Documentation: Technical guides and references</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-tim-brown">Free Learning Resources</CardTitle>
            <CardDescription>Learning Materials</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Access free learning resources:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Training materials and tutorials</li>
              <li>Best practices guides</li>
              <li>Sample code and templates</li>
              <li>Educational content for data engineering</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 