// Next
import Image from "next/image";

// Supabase
import { createClient } from "@/utils/supabase/client";

// ShadCn UI
import { Skeleton } from "@/components/ui/skeleton";

// Components
import SummarizeButton from "@/components/SummarizeButton";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  // Dynamic Routing
  const { id } = await params;

  // Supabase
  const supabase = createClient();
  const { data } = await supabase.from("quizSet").select("*").eq("id", id);

  // Open AI

  return (
    <div className="flex flex-col space-y-4">
      {/* Image */}
      <div className="w-full h-48 rounded-lg relative overflow-hidden">
        {data ? (
          <Image
            src={`${data![0].coverImage}`}
            alt="landing-img"
            fill={true}
            objectFit="cover"
            className="select-none"
          />
        ) : (
          <Skeleton className="w-full h-full rounded-lg" />
        )}
      </div>
      {/* Title */}
      {data && data?.length > 0 ? (
        <p className="text-3xl font-bold">{data[0].title}</p>
      ) : (
        <Skeleton className="w-full h-[30px] rounded-lg" />
      )}
      {/* <SummarizeButton /> */}
    </div>
  );
}
export default Page;
