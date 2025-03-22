"use client";

import { useState } from "react";

import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

import { useUser } from "@clerk/nextjs";

import { createClient } from "@/utils/supabase/client";

// Create Supabase client

export default function FileInput() {
  const supabase = createClient();

  const { user } = useUser();

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) alert("No file uploaded");

    await supabase.from("users").insert({
      email: user?.emailAddresses[0].emailAddress,
    });

    const formData = new FormData();
    formData.append("file", file!);

    const { data, error } = await supabase.storage
      .from("files")
      .upload(`${user?.emailAddresses[0].emailAddress}-${file!.name}`, file!);
    if (error) {
      console.log(error);
    } else {
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
