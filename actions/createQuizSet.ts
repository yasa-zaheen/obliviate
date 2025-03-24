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
      coverImage:
        "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "",
      email: user!.emailAddresses[0].emailAddress,
    })
    .select();

  if (error) console.log(error);
  return data;
}
