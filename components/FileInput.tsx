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
    if (!file) alert("No file uploaded");

    // Create a user in the users table in the DB
    await supabase.from("users").insert({
      email: user?.emailAddresses[0].emailAddress,
    });

    // Upload the file to Storage
    const { data, error } = await supabase.storage
      .from("files")
      .upload(`${file!.name}`, file!);
    if (error) {
      console.log(error);
    } else {
      // Add file information to userFiles table in DB
      await supabase.from("userFiles").insert({
        email: user?.emailAddresses[0].emailAddress,
        filePath: data.fullPath,
        path: data.path,
      });
    }
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
