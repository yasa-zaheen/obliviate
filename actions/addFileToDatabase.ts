"use server";

import { currentUser } from "@clerk/nextjs/server";
import { createClient } from "@/utils/supabase/server";

export default async function addFileToDatabase(
  uploadRef: {
    id: string;
    fullPath: string;
    path: string;
  },
  extractedText: string
) {
  const user = await currentUser();

  const supabase = await createClient();

  const { data, error } = await supabase
    .from("files")
    .insert({
      email: user!.emailAddresses[0].emailAddress,
      filePath: uploadRef.fullPath,
      path: uploadRef.path,
      extractedText: extractedText,
    })
    .select();

  if (error) console.log(error);
  return data;
}
