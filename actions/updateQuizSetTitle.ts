"use server";

import { createClient } from "@/utils/supabase/server";

export default async function updateQuizSetTitle(id: string, title: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("quizSet")
    .update({ title: title })
    .eq("id", id);

  if (error) console.log(error);
}
