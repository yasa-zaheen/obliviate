"use client";

// React
import { useState } from "react";

// Components
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

// Clerk
import { useUser } from "@clerk/nextjs";

// Supabase
import { createClient } from "@/utils/supabase/client";

export default function FileInput() {
  // States
  const [file, setFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState(null);

  // Clerk
  const { user } = useUser();

  // Supabase
  const supabase = createClient();

  // Functions
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    // Handle if no file is uploaded
    if (!file) {
      alert("No file uploaded");
      return;
    }

    // Read file and send it to the server
    const formData = new FormData();
    formData.append("file", file);

    // Send request to api/parse-pdf
    try {
      const response = await fetch("/api/parse-pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to parse PDF");
      }

      const result = await response.json();
      setExtractedText(result.text);
    } catch (error) {
      console.log(error);
    }

    // Send request to api/workers-ai
    try {
      console.log(extractedText);
      const response = await fetch("/api/workers-ai", {
        method: "POST",
        body: extractedText,
      });

      const data = await response.json();
    } catch (error) {
      console.log(error);
    }

    // Create a user in the users table in the DB
    // await supabase.from("users").insert({
    //   email: user?.emailAddresses[0].emailAddress,
    // });

    // // Upload the file to Storage
    // const { data, error } = await supabase.storage
    //   .from("files")
    //   .upload(`${file!.name}`, file!);
    // if (error) {
    //   console.log(error);
    // } else {
    //   // Add file information to userFiles table in DB
    //   await supabase.from("userFiles").insert({
    //     email: user?.emailAddresses[0].emailAddress,
    //     filePath: data.fullPath,
    //     path: data.path,
    //   });
    // }
  };

  return (
    <div className="flex space-x-2">
      <Input
        id="file-input"
        type="file"
        className="border-dashed"
        onChange={handleFileChange}
      />
      <Button onClick={handleUpload}>Upload File</Button>
    </div>
  );
}
