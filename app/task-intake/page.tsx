"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, Database, ExternalLink, Brain, Loader2, MessageSquare, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { AccessDisclaimer } from "@/components/access-disclaimer"
import { Progress } from "@/components/ui/progress"

// Form types
type TeamType = "data-engineering" | "machine-learning" | ""
type DataRequestType = "existing-maintenance" | "new-injection" | ""
type MLRequestType = "new-model" | "existing-model" | ""
type MLCapability =
  | "deep-learning"
  | "llm"
  | "image-recognition"
  | "personalization"
  | "statistical"
  | "predictive"
  | "other"
  | ""
type MLWorkstream =
  | "zendesk-review"
  | "google-review"
  | "pm-standard"
  | "ltv-modeling"
  | "personalized-offer"
  | "multiplayer-attribution"
  | "predictive-modeling"
  | "operations-improvement"
  | "digital-efficiency"
  | ""
type UrgencyLevel = "critical" | "high" | "medium" | "low" | ""

interface FormData {
  team: TeamType
  dataRequestType: DataRequestType
  mlRequestType: MLRequestType

  // Data Engineering - New Injection
  businessUseCase: string
  dataSources: string
  updateFrequency: string
  transformationRequirements: string
  dataRetention: string

  // ML - New Model
  businessProblem: string
  expectedOutcome: string
  modelDataSources: string
  capability: MLCapability
  otherCapability: string
  challenges: string
  timeline: string

  // ML - Existing Model
  workstream: MLWorkstream
  issue: string
  recentChanges: string
  urgency: UrgencyLevel
  impact: string
  dependencies: string
}

const initialFormData: FormData = {
  team: "",
  dataRequestType: "",
  mlRequestType: "",

  // Data Engineering - New Injection
  businessUseCase: "",
  dataSources: "",
  updateFrequency: "",
  transformationRequirements: "",
  dataRetention: "",

  // ML - New Model
  businessProblem: "",
  expectedOutcome: "",
  modelDataSources: "",
  capability: "",
  otherCapability: "",
  challenges: "",
  timeline: "",

  // ML - Existing Model
  workstream: "",
  issue: "",
  recentChanges: "",
  urgency: "",
  impact: "",
  dependencies: "",
}

export default function TaskIntakePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Calculate total steps based on selections
  const getTotalSteps = () => {
    if (!formData.team) return 3 // Default

    if (formData.team === "data-engineering") {
      if (formData.dataRequestType === "existing-maintenance") return 3
      if (formData.dataRequestType === "new-injection") return 4
      return 3
    }

    if (formData.team === "machine-learning") {
      if (formData.mlRequestType === "new-model") return 4
      if (formData.mlRequestType === "existing-model") return 4
      return 3
    }

    return 3
  }

  const totalSteps = getTotalSteps()
  const progress = (step / totalSteps) * 100

  // Handle form field changes
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Navigation functions
  const nextStep = () => {
    if (step < totalSteps) {
      setStep((prev) => prev + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1)
      window.scrollTo(0, 0)
    }
  }

  // Form submission
  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      toast({
        title: "Request submitted successfully",
        description: "Your request has been submitted and will be reviewed by our team.",
      })
    }, 1500)
  }

  // Reset form
  const resetForm = () => {
    setFormData(initialFormData)
    setStep(1)
    setIsSuccess(false)
  }

  // Check if current step is valid to proceed
  const isStepValid = () => {
    if (step === 1) {
      return !!formData.team
    }

    if (step === 2) {
      if (formData.team === "data-engineering") {
        return !!formData.dataRequestType
      }
      if (formData.team === "machine-learning") {
        return !!formData.mlRequestType
      }
    }

    if (step === 3) {
      if (formData.team === "data-engineering") {
        if (formData.dataRequestType === "existing-maintenance") {
          return true // No validation needed for Slack channel redirect
        }
        if (formData.dataRequestType === "new-injection") {
          return !!formData.businessUseCase && !!formData.dataSources
        }
      }

      if (formData.team === "machine-learning") {
        if (formData.mlRequestType === "new-model") {
          return !!formData.businessProblem && !!formData.expectedOutcome
        }
        if (formData.mlRequestType === "existing-model") {
          return !!formData.workstream && !!formData.issue
        }
      }
    }

    return true // Other steps are optional
  }

  // Render success state
  if (isSuccess) {
    return (
      <div className="container mx-auto py-12 px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-tim-brown">Request Submitted Successfully!</CardTitle>
            <CardDescription className="text-center">
              Your request has been submitted and will be reviewed by our team.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="rounded-full bg-green-100 p-3 mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <p className="mb-6 text-center">
              Thank you for your submission. Our team will review your request and get back to you soon.
            </p>
            <div className="flex gap-4">
              <Button onClick={() => router.push("/")} className="bg-tim-red hover:bg-tim-red/90 text-white">
                Return to Home
              </Button>
              <Button
                variant="outline"
                onClick={resetForm}
                className="border-tim-red text-tim-red hover:bg-tim-red hover:text-white"
              >
                Submit Another Request
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-tim-brown">Submit a New Request</h1>
        <p className="text-muted-foreground mb-4">
          This guided form will help you submit a request to the Advanced Analytics team
        </p>

        <AccessDisclaimer />

        <Card className="mt-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-tim-brown">Request Questionnaire</CardTitle>
              <div className="text-sm text-muted-foreground">
                Step {step} of {totalSteps}
              </div>
            </div>
            <Progress value={progress} className="h-2 mt-2" />
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Step 1: Select Team */}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-tim-brown">Select the relevant team for your request</h2>
                <p className="text-muted-foreground">Choose the team that best aligns with your request requirements</p>

                <RadioGroup
                  value={formData.team}
                  onValueChange={(value) => handleChange("team", value as TeamType)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3"
                >
                  <div>
                    <RadioGroupItem value="data-engineering" id="data-engineering" className="peer sr-only" />
                    <Label
                      htmlFor="data-engineering"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-tim-red [&:has([data-state=checked])]:border-tim-red"
                    >
                      <Database className="mb-3 h-6 w-6 text-tim-red" />
                      <div className="text-center">
                        <p className="font-medium">Data Engineering Team</p>
                        <p className="text-sm text-muted-foreground">
                          Data pipeline maintenance, new data injection, and infrastructure support
                        </p>
                      </div>
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="machine-learning" id="machine-learning" className="peer sr-only" />
                    <Label
                      htmlFor="machine-learning"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-tim-red [&:has([data-state=checked])]:border-tim-red"
                    >
                      <Brain className="mb-3 h-6 w-6 text-tim-red" />
                      <div className="text-center">
                        <p className="font-medium">Machine Learning Team</p>
                        <p className="text-sm text-muted-foreground">
                          AI model development, optimization, and maintenance
                        </p>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Step 2: Select Request Type - Data Engineering */}
            {step === 2 && formData.team === "data-engineering" && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-tim-brown">Select request type</h2>
                <p className="text-muted-foreground">Choose the type of data engineering request you need</p>

                <RadioGroup
                  value={formData.dataRequestType}
                  onValueChange={(value) => handleChange("dataRequestType", value as DataRequestType)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3"
                >
                  <div>
                    <RadioGroupItem value="existing-maintenance" id="existing-maintenance" className="peer sr-only" />
                    <Label
                      htmlFor="existing-maintenance"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-tim-red [&:has([data-state=checked])]:border-tim-red"
                    >
                      <MessageSquare className="mb-3 h-6 w-6 text-tim-red" />
                      <div className="text-center">
                        <p className="font-medium">Existing Data Maintenance</p>
                        <p className="text-sm text-muted-foreground">
                          Data access requests, pipeline fixes, schema updates
                        </p>
                      </div>
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="new-injection" id="new-injection" className="peer sr-only" />
                    <Label
                      htmlFor="new-injection"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-tim-red [&:has([data-state=checked])]:border-tim-red"
                    >
                      <Database className="mb-3 h-6 w-6 text-tim-red" />
                      <div className="text-center">
                        <p className="font-medium">New Data Injection</p>
                        <p className="text-sm text-muted-foreground">
                          Adding a new dataset, integrating external data sources
                        </p>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Step 2: Select Request Type - Machine Learning */}
            {step === 2 && formData.team === "machine-learning" && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-tim-brown">Select request type</h2>
                <p className="text-muted-foreground">Choose the type of machine learning request you need</p>

                <RadioGroup
                  value={formData.mlRequestType}
                  onValueChange={(value) => handleChange("mlRequestType", value as MLRequestType)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3"
                >
                  <div>
                    <RadioGroupItem value="new-model" id="new-model" className="peer sr-only" />
                    <Label
                      htmlFor="new-model"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-tim-red [&:has([data-state=checked])]:border-tim-red"
                    >
                      <Brain className="mb-3 h-6 w-6 text-tim-red" />
                      <div className="text-center">
                        <p className="font-medium">New Model Development</p>
                        <p className="text-sm text-muted-foreground">
                          Request development of a new machine learning model
                        </p>
                      </div>
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem value="existing-model" id="existing-model" className="peer sr-only" />
                    <Label
                      htmlFor="existing-model"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-tim-red [&:has([data-state=checked])]:border-tim-red"
                    >
                      <MessageSquare className="mb-3 h-6 w-6 text-tim-red" />
                      <div className="text-center">
                        <p className="font-medium">Existing Model Maintenance</p>
                        <p className="text-sm text-muted-foreground">Request updates or fixes to an existing model</p>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Step 3: Data Engineering - Existing Maintenance */}
            {step === 3 &&
              formData.team === "data-engineering" &&
              formData.dataRequestType === "existing-maintenance" && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-tim-brown">Existing Data Maintenance</h2>
                  <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                    <h3 className="font-medium text-amber-800 mb-2">Please use our Slack channel for this request</h3>
                    <p className="text-amber-700">
                      For existing data maintenance requests (data access, pipeline fixes, schema updates), please post
                      your request in the <strong>#data-engineering-support</strong> Slack channel for faster response.
                    </p>
                    <div className="mt-4">
                      <a
                        href="https://timhortons.slack.com/channels/data-engineering-support"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-tim-red hover:underline"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Go to #data-engineering-support
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-2">
                    If you still need to submit a formal request, you can continue with this form.
                  </p>
                </div>
              )}

            {/* Step 3: Data Engineering - New Injection */}
            {step === 3 && formData.team === "data-engineering" && formData.dataRequestType === "new-injection" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-tim-brown">New Data Injection Request</h2>
                <p className="text-muted-foreground">Please provide details about the new data you need to integrate</p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessUseCase">
                      What is the business use case for this new dataset? <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="businessUseCase"
                      value={formData.businessUseCase}
                      onChange={(e) => handleChange("businessUseCase", e.target.value)}
                      placeholder="Describe the business problem this data will help solve"
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dataSources">
                      What are the expected data sources? <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="dataSources"
                      value={formData.dataSources}
                      onChange={(e) => handleChange("dataSources", e.target.value)}
                      placeholder="e.g., internal database, third-party API, CSV files, etc."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="updateFrequency">What is the expected data update frequency?</Label>
                    <Select
                      value={formData.updateFrequency}
                      onValueChange={(value) => handleChange("updateFrequency", value)}
                    >
                      <SelectTrigger id="updateFrequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="real-time">Real-time</SelectItem>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                        <SelectItem value="yearly">Yearly</SelectItem>
                        <SelectItem value="one-time">One-time load</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="transformationRequirements">
                      Are there any specific data transformation or cleaning requirements?
                    </Label>
                    <Textarea
                      id="transformationRequirements"
                      value={formData.transformationRequirements}
                      onChange={(e) => handleChange("transformationRequirements", e.target.value)}
                      placeholder="e.g., deduplication, normalization, format conversion"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dataRetention">What level of data retention is required?</Label>
                    <Select
                      value={formData.dataRetention}
                      onValueChange={(value) => handleChange("dataRetention", value)}
                    >
                      <SelectTrigger id="dataRetention">
                        <SelectValue placeholder="Select retention period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-month">1 month</SelectItem>
                        <SelectItem value="3-months">3 months</SelectItem>
                        <SelectItem value="6-months">6 months</SelectItem>
                        <SelectItem value="1-year">1 year</SelectItem>
                        <SelectItem value="2-years">2 years</SelectItem>
                        <SelectItem value="5-years">5 years</SelectItem>
                        <SelectItem value="indefinite">Indefinite storage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Machine Learning - New Model */}
            {step === 3 && formData.team === "machine-learning" && formData.mlRequestType === "new-model" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-tim-brown">New Model Development Request</h2>
                <p className="text-muted-foreground">Please provide details about the new model you need</p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessProblem">
                      What business problem are you trying to solve? <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="businessProblem"
                      value={formData.businessProblem}
                      onChange={(e) => handleChange("businessProblem", e.target.value)}
                      placeholder="Describe the business problem this model will help solve"
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expectedOutcome">
                      What is the expected outcome or metric of success? <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="expectedOutcome"
                      value={formData.expectedOutcome}
                      onChange={(e) => handleChange("expectedOutcome", e.target.value)}
                      placeholder="e.g., increased conversion rate, improved engagement, reduced churn"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="modelDataSources">What data sources will be used to train this model?</Label>
                    <Textarea
                      id="modelDataSources"
                      value={formData.modelDataSources}
                      onChange={(e) => handleChange("modelDataSources", e.target.value)}
                      placeholder="e.g., customer transaction history, user behavior, external data"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="capability">Which of the following capabilities does this request relate to?</Label>
                    <Select
                      value={formData.capability}
                      onValueChange={(value) => handleChange("capability", value as MLCapability)}
                    >
                      <SelectTrigger id="capability">
                        <SelectValue placeholder="Select capability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="deep-learning">Deep Learning - For complex pattern recognition</SelectItem>
                        <SelectItem value="llm">
                          LLM (Large Language Models) - For text generation, summarization
                        </SelectItem>
                        <SelectItem value="image-recognition">
                          Image Recognition - For detecting objects in images/videos
                        </SelectItem>
                        <SelectItem value="personalization">
                          Personalization Offers - For recommendations and pricing
                        </SelectItem>
                        <SelectItem value="statistical">
                          Statistical Experiment - For A/B testing and insights
                        </SelectItem>
                        <SelectItem value="predictive">
                          Predictive Modeling - For forecasting trends and behaviors
                        </SelectItem>
                        <SelectItem value="other">Other (please specify)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.capability === "other" && (
                    <div className="space-y-2">
                      <Label htmlFor="otherCapability">Please describe the new capability</Label>
                      <Textarea
                        id="otherCapability"
                        value={formData.otherCapability}
                        onChange={(e) => handleChange("otherCapability", e.target.value)}
                        placeholder="Describe the capability needed for this model"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 3: Machine Learning - Existing Model */}
            {step === 3 && formData.team === "machine-learning" && formData.mlRequestType === "existing-model" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-tim-brown">Existing Model Maintenance Request</h2>
                <p className="text-muted-foreground">
                  Please provide details about the existing model that needs maintenance
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="workstream">
                      Which existing workstream does this relate to? <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={formData.workstream}
                      onValueChange={(value) => handleChange("workstream", value as MLWorkstream)}
                      required
                    >
                      <SelectTrigger id="workstream">
                        <SelectValue placeholder="Select workstream" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="zendesk-review">Zendesk Review LLM Project</SelectItem>
                        <SelectItem value="google-review">Google Review Sentiment Project</SelectItem>
                        <SelectItem value="pm-standard">PM Standard Project</SelectItem>
                        <SelectItem value="ltv-modeling">LTV Modeling Project</SelectItem>
                        <SelectItem value="personalized-offer">Personalized Offer Project</SelectItem>
                        <SelectItem value="multiplayer-attribution">Multiplayer Attribution Model Project</SelectItem>
                        <SelectItem value="predictive-modeling">Predictive Modeling Project</SelectItem>
                        <SelectItem value="operations-improvement">Operations Improvement Project</SelectItem>
                        <SelectItem value="digital-efficiency">Digital Efficiency Project</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="issue">
                      What specific issue or enhancement do you need for the model?{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="issue"
                      value={formData.issue}
                      onChange={(e) => handleChange("issue", e.target.value)}
                      placeholder="e.g., performance degradation, data drift, retraining"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="recentChanges">
                      What recent changes in data or business logic may have impacted the model?
                    </Label>
                    <Textarea
                      id="recentChanges"
                      value={formData.recentChanges}
                      onChange={(e) => handleChange("recentChanges", e.target.value)}
                      placeholder="Describe any recent changes that might be relevant"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency">What is the urgency of this request?</Label>
                    <Select
                      value={formData.urgency}
                      onValueChange={(value) => handleChange("urgency", value as UrgencyLevel)}
                    >
                      <SelectTrigger id="urgency">
                        <SelectValue placeholder="Select urgency level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="critical">Critical - Immediate attention required</SelectItem>
                        <SelectItem value="high">High - Urgent but not critical</SelectItem>
                        <SelectItem value="medium">Medium - Standard priority</SelectItem>
                        <SelectItem value="low">Low - Can be addressed when resources are available</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="impact">What is the expected impact if this issue is not resolved?</Label>
                    <Textarea
                      id="impact"
                      value={formData.impact}
                      onChange={(e) => handleChange("impact", e.target.value)}
                      placeholder="e.g., loss of revenue, decreased engagement, inefficiencies"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Additional Details - Data Engineering New Injection */}
            {step === 4 && formData.team === "data-engineering" && formData.dataRequestType === "new-injection" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-tim-brown">Review Your Request</h2>
                <p className="text-muted-foreground">Please review your request details before submission</p>

                <div className="space-y-4 bg-muted/50 p-4 rounded-md">
                  <div>
                    <h3 className="font-medium">Request Type</h3>
                    <p>Data Engineering - New Data Injection</p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-medium">Business Use Case</h3>
                    <p className="text-sm">{formData.businessUseCase || "Not provided"}</p>
                  </div>

                  <div>
                    <h3 className="font-medium">Data Sources</h3>
                    <p className="text-sm">{formData.dataSources || "Not provided"}</p>
                  </div>

                  <div>
                    <h3 className="font-medium">Update Frequency</h3>
                    <p className="text-sm">{formData.updateFrequency || "Not provided"}</p>
                  </div>

                  <div>
                    <h3 className="font-medium">Transformation Requirements</h3>
                    <p className="text-sm">{formData.transformationRequirements || "Not provided"}</p>
                  </div>

                  <div>
                    <h3 className="font-medium">Data Retention</h3>
                    <p className="text-sm">{formData.dataRetention || "Not provided"}</p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                  <h3 className="font-medium text-amber-800 mb-2">What happens next?</h3>
                  <p className="text-amber-700">
                    After submission, your request will be reviewed by the Data Engineering team. You will receive a
                    confirmation email with a ticket number for tracking. The team will contact you within 2 business
                    days to discuss your request in more detail.
                  </p>
                </div>
              </div>
            )}

            {/* Step 4: Additional Details - ML New Model */}
            {step === 4 && formData.team === "machine-learning" && formData.mlRequestType === "new-model" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-tim-brown">Additional Details</h2>
                <p className="text-muted-foreground">Please provide some final details about your new model request</p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="challenges">
                      What are the key challenges or blockers for implementing this model?
                    </Label>
                    <Textarea
                      id="challenges"
                      value={formData.challenges}
                      onChange={(e) => handleChange("challenges", e.target.value)}
                      placeholder="Describe any challenges you foresee with this project"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">What is the expected timeline for this project?</Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleChange("timeline", value)}>
                      <SelectTrigger id="timeline">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (1-2 weeks)</SelectItem>
                        <SelectItem value="short">Short-term (1 month)</SelectItem>
                        <SelectItem value="medium">Medium-term (1-3 months)</SelectItem>
                        <SelectItem value="long">Long-term (3-6 months)</SelectItem>
                        <SelectItem value="strategic">Strategic initiative (6+ months)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-md mt-6">
                    <h3 className="font-medium mb-2">Review Your Request</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium">Request Type:</span> Machine Learning - New Model Development
                      </div>
                      <div>
                        <span className="font-medium">Business Problem:</span>{" "}
                        {formData.businessProblem || "Not provided"}
                      </div>
                      <div>
                        <span className="font-medium">Expected Outcome:</span>{" "}
                        {formData.expectedOutcome || "Not provided"}
                      </div>
                      <div>
                        <span className="font-medium">Data Sources:</span> {formData.modelDataSources || "Not provided"}
                      </div>
                      <div>
                        <span className="font-medium">Capability:</span>{" "}
                        {formData.capability ? formData.capability.replace(/-/g, " ") : "Not provided"}
                        {formData.capability === "other" && ` - ${formData.otherCapability}`}
                      </div>
                      <div>
                        <span className="font-medium">Challenges:</span> {formData.challenges || "Not provided"}
                      </div>
                      <div>
                        <span className="font-medium">Timeline:</span> {formData.timeline || "Not provided"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Additional Details - ML Existing Model */}
            {step === 4 && formData.team === "machine-learning" && formData.mlRequestType === "existing-model" && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-tim-brown">Additional Details</h2>
                <p className="text-muted-foreground">
                  Please provide some final details about your model maintenance request
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="dependencies">
                      Are there any additional business or technical dependencies for this request?
                    </Label>
                    <Textarea
                      id="dependencies"
                      value={formData.dependencies}
                      onChange={(e) => handleChange("dependencies", e.target.value)}
                      placeholder="Describe any dependencies that might affect this request"
                    />
                  </div>

                  <div className="bg-muted/50 p-4 rounded-md mt-6">
                    <h3 className="font-medium mb-2">Review Your Request</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-medium">Request Type:</span> Machine Learning - Existing Model Maintenance
                      </div>
                      <div>
                        <span className="font-medium">Workstream:</span>{" "}
                        {formData.workstream ? formData.workstream.replace(/-/g, " ") : "Not provided"}
                      </div>
                      <div>
                        <span className="font-medium">Issue:</span> {formData.issue || "Not provided"}
                      </div>
                      <div>
                        <span className="font-medium">Recent Changes:</span> {formData.recentChanges || "Not provided"}
                      </div>
                      <div>
                        <span className="font-medium">Urgency:</span> {formData.urgency || "Not provided"}
                      </div>
                      <div>
                        <span className="font-medium">Impact:</span> {formData.impact || "Not provided"}
                      </div>
                      <div>
                        <span className="font-medium">Dependencies:</span> {formData.dependencies || "Not provided"}
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                    <h3 className="font-medium text-amber-800 mb-2">What happens next?</h3>
                    <p className="text-amber-700">
                      After submission, your request will be reviewed by the Machine Learning team. You will receive a
                      confirmation email with a ticket number for tracking. The team will contact you within 2 business
                      days to discuss your request in more detail.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={prevStep} disabled={step === 1}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>

            {step < totalSteps ? (
              <Button
                onClick={nextStep}
                disabled={!isStepValid()}
                className="bg-tim-red hover:bg-tim-red/90 text-white"
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-tim-red hover:bg-tim-red/90 text-white"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    Submit Request
                  </>
                )}
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

