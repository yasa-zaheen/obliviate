"use server";

import { createClient } from "@/utils/supabase/server";

export default async function uploadFile(file: File) {
  const supabase = await createClient();

  const { data, error } = await supabase.storage
    .from("files")
    .upload(`${file!.name}`, file!);

  if (error) console.log(error);
  else return data;
}
