"use client";

// React
import { useState, useTransition } from "react";

// Components
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

// Clerk
import { useUser } from "@clerk/nextjs";

// Supabase
import { createClient } from "@/utils/supabase/client";
import LoadingCircleSpinner from "./Spinner";

// Framer
import { motion } from "motion/react";

import { toast } from "sonner";
import AlertProvider from "./AlertProvider";

import parsePdf from "@/utils/parsePdf";
import uploadFile from "@/actions/uploadFile";
import addFileToDatabase from "@/actions/addFileToDatabase";
import { useRouter } from "next/navigation";

// Actions

export default function FileInput() {
  // Next
  const router = useRouter();

  // States
  const [file, setFile] = useState<File | null>(null);
  const [fileAlert, setFileAlert] = useState(false);

  // Transitions
  const [isPending, startTransition] = useTransition();

  // Clerk
  const { user } = useUser();

  // Supabase
  const supabase = createClient();

  // Functions
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
  };

  const handleFileUpload = async () => {
    // Handle if no file is uploaded
    if (!file) {
      setFileAlert(true);
      return;
    }

    setFileAlert(false);

    // TODO: Upload file to storage

    startTransition(async () => {
      const formData = new FormData();
      formData.append("file", file);

      // Send request to api/parse-pdf
      const extractedText = await parsePdf(file);
      const uploadRef = await uploadFile(file);
      const databaseRef = await addFileToDatabase(uploadRef!, extractedText);

      toast("Document uploaded successfully.");

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
