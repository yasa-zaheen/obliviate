"use client";

import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

export default function FileInput() {
  const [file, setFile] = useState<File | null>(null);

  // const supabase = createClient();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    const formData = new FormData();

    if (file) {
      formData.append("file", file);
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
