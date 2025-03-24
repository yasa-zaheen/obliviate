// import FileInput from "@/components/FileInput";

// Components
import CreateQuizSetDialog from "@/components/CreateQuizSetDialog";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex items-center justify-center flex-1 mb-4">
      {/* <FileInput /> */}
      <CreateQuizSetDialog />
    </div>
  );
}
