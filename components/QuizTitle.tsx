"use client";

// React
import { useContext, useState, useTransition } from "react";

// ShadCn
import { Button } from "./ui/button";
import { Input } from "./ui/input";

// Components
import LoadingCircleSpinner from "./Spinner";
import updateQuizSetTitle from "@/actions/updateQuizSetTitle";
import { toast } from "sonner";
import { QuizSetContext } from "@/contexts/QuizSetContext";

function QuizTitle({
  data,
}: {
  data: {
    id: string;
    email: string;
    title: string;
    coverImage: string;
    description: string;
  }[];
}) {
  // States
  const [title, setTitle] = useState(data[0].title);

  //Transitions
  const [isPending, startTransition] = useTransition();

  // Contexts
  const { quizzes, setQuizzes } = useContext(QuizSetContext);

  // Functions
  const handleQuizSetTitle = () => {
    startTransition(async () => {
      await updateQuizSetTitle(data[0].id, title);

      setQuizzes((prevQuizzes: any) =>
        prevQuizzes.map((quiz: any) =>
          quiz.id === data[0].id ? { ...quiz, title } : quiz
        )
      );

      toast("Quiz set title updated.");
    });
  };

  return (
    <div className="flex items-center space-x-4">
      <Input
        type="text"
        placeholder="Title"
        value={title}
        className="text-xl! font-bold!"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Button
        onClick={handleQuizSetTitle}
        className="cursor-pointer bg-gradient-to-br from-[#c9def4] via-[#f5ccd4] to-[#b8a4c9] hover:shadow-lg active:scale-99 active:shadow-none px-4 py-2 rounded-lg text-white text-sm duration-100 ease-in-out"
        disabled={isPending}
      >
        {!isPending ? <p> Save Changes</p> : <LoadingCircleSpinner />}
      </Button>
    </div>
  );
}
export default QuizTitle;
