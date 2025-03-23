import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, File } from "lucide-react";

function AlertProvider() {
  return (
    <Alert>
      <File className="h-4 w-4" />
      <AlertTitle>No file uploaded!</AlertTitle>
      <AlertDescription>
        Please upload a file to begin working with it!
      </AlertDescription>
    </Alert>
  );
}
export default AlertProvider;
