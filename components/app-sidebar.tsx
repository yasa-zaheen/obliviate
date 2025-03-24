"use client";

// React
import { useContext, useEffect, useTransition } from "react";

// Lucide
import { Home, Search, Sparkles } from "lucide-react";

// ShadCn
import { NavFavorites } from "@/components/nav-favorites";
import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// Clerk
import { UserButton, useUser } from "@clerk/nextjs";
import { FileContext } from "@/contexts/FileContext";
import getUserFiles from "@/actions/getUserFiles";
import { QuizSetContext } from "@/contexts/QuizSetContext";
import getUserQuizzes from "@/actions/getUserQuizzes";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Ask AI",
      url: "#",
      icon: Sparkles,
    },
    {
      title: "Home",
      url: "dashboard",
      icon: Home,
      isActive: true,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // Clerk
  const { user } = useUser();

  // Transitions
  const [isPending, startTransition] = useTransition();

  // Contexts
  const { quizzes, setQuizzes } = useContext(QuizSetContext);

  useEffect(() => {
    startTransition(async () => {
      const quizzes = await getUserQuizzes();
      setQuizzes(quizzes!);
    });
  }, [user, setQuizzes]);

  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <div className="flex items-center p-2 space-x-2">
          <UserButton />
          <div className="flex flex-col justify-around">
            <p className="text-sm">{user?.fullName}</p>
            <p className="text-xs opacity-50">
              {user?.emailAddresses[0].emailAddress}
            </p>
          </div>
        </div>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        {quizzes && quizzes.length !== 0 ? (
          <NavFavorites favorites={quizzes} />
        ) : null}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
