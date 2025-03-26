"use client";

// React
import { useContext, useEffect, useTransition } from "react";

// Context
import { QuizSetContext } from "@/contexts/QuizSetContext";

// Server action
import getUserQuizzes from "@/actions/getUserQuizzes";

// Components
import { SidebarContent } from "@/components/ui/sidebar";
import { NavFavorites } from "@/components/nav-favorites";

function MainSidebarContent() {
  // Contexts
  const { quizSets, setQuizSets } = useContext(QuizSetContext);

  // Transitions
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      const quizzes = await getUserQuizzes();
      setQuizSets(quizzes);
    });
  }, [setQuizSets]);

  return (
    <SidebarContent>
      {quizSets && quizSets.length !== 0 ? (
        <NavFavorites favorites={quizSets} />
      ) : null}
    </SidebarContent>
  );
}
export default MainSidebarContent;
