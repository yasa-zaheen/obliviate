"use client";

// React
import { useContext, useEffect, useTransition } from "react";

// Context
import { QuizSetContext } from "@/contexts/QuizSetContext";

// Server actions
import getUserQuizzes from "@/actions/getUserQuizzes";

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

// Lucide
import { Home, Search, Sparkles } from "lucide-react";

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
  const { quizSets, setQuizSets } = useContext(QuizSetContext);

  // Effects

  useEffect(() => {
    startTransition(async () => {
      const quizzes = await getUserQuizzes();
      setQuizSets(quizzes!);
    });
  }, [user, setQuizSets]);

  return (
    <Sidebar className="border-r-0" {...props}>
      {/* Sidebar Header */}
      <SidebarHeader>
        <div className="flex items-center p-2 space-x-2">
          {/* Clerk User Account Button */}
          <UserButton />

          {/* Clerk user information */}
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
        {quizSets && quizSets.length !== 0 ? (
          <NavFavorites favorites={quizSets} />
        ) : null}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
