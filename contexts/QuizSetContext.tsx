"use client";

import { createContext, useState } from "react";

export const QuizSetContext = createContext<QuizSetContextType>({
  quizSets: [],
  setQuizSets: () => {},
});

export function QuizSetContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [quizSets, setQuizSets] = useState<QuizSet[]>([]);

  return (
    <QuizSetContext.Provider value={{ quizSets, setQuizSets }}>
      {children}
    </QuizSetContext.Provider>
  );
}
