"use client";

import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

import { createClient } from "@/utils/supabase/client";

// Create Supabase client

export default function FileInput() {
  const supabase = createClient();
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    const formData = new FormData();

    console.log("Uploading");

    if (file) {
      formData.append("file", file);
    }

    // Upload file using standard upload. Change this to a server action later on.
    const { data, error } = await supabase.storage
      .from("files")
      .upload(`${file?.name}`, file!);
    if (error) {
      console.log(error);
    } else {
      console.log("Success");
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
