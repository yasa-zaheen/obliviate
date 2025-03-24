"use server";

import { currentUser } from "@clerk/nextjs/server";
import { createClient } from "@/utils/supabase/server";

export default async function getUserQuizzes() {
  const user = await currentUser();
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("quizSet")
    .select("*")
    .eq("email", user?.emailAddresses[0].emailAddress);

  if (error) console.log(error);
  else return data;
}
