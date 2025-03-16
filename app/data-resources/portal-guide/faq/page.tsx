import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <Button variant="ghost" className="mb-4">
          <Link href="/data-resources" className="flex items-center text-tim-red">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Data Resources
          </Link>
        </Button>
        <h1 className="text-3xl font-bold text-tim-brown mb-2">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">Find answers to common questions about the Data Engineering Portal</p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-tim-brown">General Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I submit a new data engineering request?</AccordionTrigger>
                <AccordionContent>
                  Navigate to the Task Intake page, fill out the request form with your project details, and submit. Make sure to include all relevant information and requirements to help us process your request efficiently.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How can I track the status of my request?</AccordionTrigger>
                <AccordionContent>
                  You can track your request status through the Task Intake page. Each request will show its current status, and you'll receive notifications when there are updates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Where can I find documentation for data tools?</AccordionTrigger>
                <AccordionContent>
                  Documentation for data tools can be found in the Data Resources section. We have comprehensive guides for Databricks and other tools used in our data engineering workflow.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-tim-brown">Technical Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I access Databricks?</AccordionTrigger>
                <AccordionContent>
                  You can access Databricks through the Tools section in Data Resources. If you need access, please submit a request through the Task Intake page.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Where can I find sample code and templates?</AccordionTrigger>
                <AccordionContent>
                  Sample code and templates are available in the Free Learning Resources section. You'll find examples for common data engineering tasks and best practices.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>How can I contribute to the Knowledge Hub?</AccordionTrigger>
                <AccordionContent>
                  To contribute to the Knowledge Hub, click on the "New Article" button in the Articles section. You can write technical documentation, share case studies, or provide best practices.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-tim-brown">Support</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-7">
                <AccordionTrigger>How do I get help with urgent issues?</AccordionTrigger>
                <AccordionContent>
                  For urgent issues, you can reach out through the #data-engineering-support Slack channel. Our team monitors this channel during business hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger>What should I do if I find a bug?</AccordionTrigger>
                <AccordionContent>
                  If you find a bug, please submit a detailed report through the Task Intake page. Include steps to reproduce the issue and any relevant screenshots or error messages.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger>How can I request new features?</AccordionTrigger>
                <AccordionContent>
                  Feature requests can be submitted through the Task Intake page. Please provide a clear description of the feature and its business value.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 