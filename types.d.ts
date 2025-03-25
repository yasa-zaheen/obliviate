// Declare a global namespace for your types
declare global {
  // User type
  interface User {
    id: string;
    fullName: string;
    emailAddresses: { emailAddress: string }[];
  }

  // Quiz Set type
  interface QuizSet {
    id: string;
    title: string;
    coverImage: string;
    description: string;
    email: string;
  }

  // Context types
  interface QuizSetContextType {
    quizSets: Quiz[];
    setQuizSets: (quizSets: Quiz[]) => void;
  }

  // // Props for components
  // interface NavFavoritesProps {
  //   favorites: Quiz[];
  // }

  // interface QuizTitleProps {
  //   data: Quiz[];
  // }

  // interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {}
}

// Export an empty object to ensure this file is treated as a module
export {};
