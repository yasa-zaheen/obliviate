"use server";

import { currentUser } from "@clerk/nextjs/server";
import { createClient } from "@/utils/supabase/server";

export default async function addFileToDatabase(
  uploadRef: {
    id: string; // Also the ID of the quiz set
    fullPath: string; // Path of the file on the storage
    path: string; // Name of the file
  },
  quizSetId: string,
  extractedText: string
) {
  const user = await currentUser();
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("files")
    .insert({
      id: quizSetId,
      storageId: uploadRef.id,
      filePath: uploadRef.fullPath,
      path: uploadRef.path,
      extractedText: extractedText,
    })
    .select();

  if (error) console.log(error);
  else console.log(data);
  return data;
}
