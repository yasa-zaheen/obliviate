"use client";

// React
import { useContext, useState, useTransition } from "react";

// Next
import { useRouter } from "next/navigation";

// Components
import AlertProvider from "./AlertProvider";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

// Supabase
import LoadingCircleSpinner from "./Spinner";

// Framer

import { toast } from "sonner";

// Context
import { FileContext } from "@/contexts/FileContext";

// Utils
import parsePdf from "@/utils/parsePdf";

// Server Actions
import uploadFile from "@/actions/uploadFile";
import addFileToDatabase from "@/actions/addFileToDatabase";

// Actions

export default function FileInput(quizSetId: any) {
  // Next
  const router = useRouter();

  // States
  const [file, setFile] = useState<File | null>(null);
  const [fileAlert, setFileAlert] = useState(false);

  // Transitions
  const [isPending, startTransition] = useTransition();

  // Functions
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
  };

  const handleFileUpload = async () => {
    if (!file) {
      setFileAlert(true);
      return;
    }
    setFileAlert(false);

    startTransition(async () => {
      const formData = new FormData();
      formData.append("file", file);

      const extractedText = await parsePdf(file);
      const uploadRef = await uploadFile(file);
      const databaseRef = await addFileToDatabase(
        uploadRef!,
        quizSetId.quizSetId,
        extractedText
      );

      toast("Document uploaded successfully.");

      // router.push(`/dashboard/${databaseRef![0].id}`);
    });
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-2">
        <Input
          id="file-input"
          type="file"
          className="border-dashed"
          onChange={handleFileChange}
        />
        <Button
          onClick={handleFileUpload}
          className="hover:shadow-xl cursor-pointer"
          disabled={isPending}
        >
          {!isPending ? <p>Upload File</p> : <LoadingCircleSpinner />}
        </Button>
      </div>
      {fileAlert ? <AlertProvider /> : null}
    </div>
  );
}
