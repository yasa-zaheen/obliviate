"use client";

// React
import { useTransition } from "react";

// Next
import Image from "next/image";
import { useRouter } from "next/navigation";

// Components
import LoadingCircleSpinner from "./Spinner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Server Action
import createQuizSet from "@/actions/createQuizSet";

// ShadCn
import { toast } from "sonner";

function CreateQuizSetDialog() {
  // Next
  const router = useRouter();

  // Transitions
  const [isPending, startTransition] = useTransition();

  // Functions
  const handleCreateQuizSet = async () => {
    startTransition(async () => {
      const databaseRef = await createQuizSet();

      toast("Quiz set created successfully.");
      router.push(`/dashboard/${databaseRef![0].id}`);
    });
  };

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer bg-gradient-to-r from-[#f89b29] to-[#ff0f7b] hover:shadow-lg active:scale-99 active:shadow-none px-4 py-2 rounded-lg text-white text-sm duration-100 ease-in-out">
        Create Quiz Set
      </DialogTrigger>
      <DialogContent className="flex flex-col p-0 overflow-hidden border-none">
        <DialogHeader>
          <div className="h-32 overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              fill={true}
              alt="landing-img"
              objectFit="cover"
              className="select-none"
            />
          </div>
          <div className="p-6 space-y-6">
            <DialogTitle>Create a Quiz</DialogTitle>
            <DialogDescription>
              Create a custom quiz by uploading lecture slides, book chapters,
              or class notes. Our system will generate questions based on your
              content, helping you review key concepts and prepare for exams.
            </DialogDescription>
          </div>
        </DialogHeader>
        <DialogFooter className="px-6 pb-6">
          <DialogClose asChild>
            <Button
              className="cursor-pointer active:scale-99"
              type="button"
              variant="secondary"
            >
              Close
            </Button>
          </DialogClose>
          <Button
            onClick={handleCreateQuizSet}
            className="cursor-pointer bg-gradient-to-r from-[#f89b29] to-[#ff0f7b] active:scale-99 px-4 py-2 rounded-lg text-white text-sm duration-100 ease-in-out z-50"
            disabled={isPending}
          >
            {!isPending ? <p> Create Quiz Set</p> : <LoadingCircleSpinner />}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default CreateQuizSetDialog;
