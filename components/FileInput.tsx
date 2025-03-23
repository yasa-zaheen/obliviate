"use client";

// React
import { useContext, useState, useTransition } from "react";

// Components
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

// Supabase
import LoadingCircleSpinner from "./Spinner";

// Framer

import { toast } from "sonner";
import AlertProvider from "./AlertProvider";

import parsePdf from "@/utils/parsePdf";
import uploadFile from "@/actions/uploadFile";
import addFileToDatabase from "@/actions/addFileToDatabase";
import { useRouter } from "next/navigation";
import { FileContext } from "@/contexts/FileContext";

// Actions

export default function FileInput() {
  // Next
  const router = useRouter();

  // States
  const [file, setFile] = useState<File | null>(null);
  const [fileAlert, setFileAlert] = useState(false);

  // Contexts
  const { setFiles } = useContext(FileContext);

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
      const databaseRef = await addFileToDatabase(uploadRef!, extractedText);

      toast("Document uploaded successfully.");

      setFiles((prevFiles: any[]) => [...prevFiles, databaseRef![0]]);

      router.push(`/dashboard/${databaseRef![0].id}`);
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
