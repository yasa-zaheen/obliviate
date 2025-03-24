"use server";

import { currentUser } from "@clerk/nextjs/server";
import { createClient } from "@/utils/supabase/server";

export default async function createQuizSet() {
  const user = await currentUser();
  const supabase = await createClient();

  const currentTime = new Date().toLocaleString();

  const { data, error } = await supabase
    .from("quizSet")
    .insert({
      title: currentTime,
      coverImage: "",
      description: "",
      email: user!.emailAddresses[0].emailAddress,
    })
    .select();

  if (error) console.log(error);
  return data;
}
