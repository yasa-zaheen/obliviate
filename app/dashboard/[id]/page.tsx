// React

// Next
import Image from "next/image";

// Supabase
import { createClient } from "@/utils/supabase/client";

// ShadCn UI
import { Skeleton } from "@/components/ui/skeleton";

// Components
import SummarizeButton from "@/components/SummarizeButton";
import QuizTitle from "@/components/QuizTitle";
import FileInput from "@/components/FileInput";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  // Dynamic Routing
  const { id } = await params;

  // Supabase
  const supabase = createClient();
  const { data } = await supabase.from("quizSet").select("*").eq("id", id);

  // States

  return (
    <div className="flex flex-col space-y-4">
      {/* Image */}
      <div>
        {data ? (
          <div className="w-full h-48 rounded-lg relative overflow-hidden">
            <Image
              src={`${data![0].coverImage}`}
              alt="landing-img"
              fill={true}
              objectFit="cover"
              className="select-none"
            />
            <QuizTitle data={data} />
          </div>
        ) : (
          <Skeleton className="w-full h-full rounded-lg" />
        )}
      </div>
      {/* Title */}
      <FileInput quizSetId={data![0].id} />
      {/* <SummarizeButton /> */}
    </div>
  );
}
export default Page;
