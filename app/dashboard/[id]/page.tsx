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
  const { data } = await supabase.from("files").select("*").eq("id", id);

  // Open AI

  return (
    <div>
      {data && data?.length > 0 ? (
        <p className="text-3xl font-bold">{data[0].path}</p>
      ) : (
        <Skeleton className="w-full h-[30px] rounded-lg" />
      )}
      <SummarizeButton />
    </div>
  );
}
export default Page;
