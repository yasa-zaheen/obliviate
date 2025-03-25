"use client";

import { createContext, useState } from "react";

export const QuizSetContext = createContext<{
  quizSets: any[];
  setQuizSets: (files: any) => void;
}>({ quizSets: [], setQuizSets: () => {} });

export function QuizSetContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [quizSets, setQuizSets] = useState<any[]>([]);

  return (
    <QuizSetContext.Provider value={{ quizSets, setQuizSets }}>
      {children}
    </QuizSetContext.Provider>
  );
}
