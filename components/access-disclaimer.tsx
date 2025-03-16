import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AccessDisclaimer() {
  return (
    <Alert className="mb-6 border-amber-500/50 bg-amber-500/10">
      <AlertCircle className="h-4 w-4 text-amber-500" />
      <AlertTitle className="text-amber-500">Access Disclaimer</AlertTitle>
      <AlertDescription className="text-sm">
        Some resources in this hub contain internal data that requires proper authorization to access. If you encounter
        access issues with any links or resources, please contact your manager or request access through RBI IT Services
        Portal.
      </AlertDescription>
    </Alert>
  )
}

