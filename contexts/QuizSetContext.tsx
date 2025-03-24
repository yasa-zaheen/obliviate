"use client";

import { createContext, useState } from "react";

export const QuizSetContext = createContext<{
  quizzes: any[];
  setQuizzes: (files: any) => void;
}>({ quizzes: [], setQuizzes: () => {} });

export function QuizSetContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [quizzes, setQuizzes] = useState<any[]>([]);

  return (
    <QuizSetContext.Provider value={{ quizzes, setQuizzes }}>
      {children}
    </QuizSetContext.Provider>
  );
}
