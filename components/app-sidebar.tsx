"use client";

// React
import { useEffect, useState, useTransition } from "react";

// Lucide
import {
  Home,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-react";

// ShadCn
import { NavFavorites } from "@/components/nav-favorites";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// Supabase
import { createClient } from "@/utils/supabase/client";

// Clerk
import { UserButton, useUser } from "@clerk/nextjs";

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
      url: "/dashboard",
      icon: Home,
      isActive: true,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },

    {
      title: "Trash",
      url: "#",
      icon: Trash2,
    },
    {
      title: "Help",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
  favorites: [
    {
      name: "Project Management & Task Tracking",
      url: "#",
      emoji: "📊",
    },
    {
      name: "Family Recipe Collection & Meal Planning",
      url: "#",
      emoji: "🍳",
    },
    {
      name: "Fitness Tracker & Workout Routines",
      url: "#",
      emoji: "💪",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();

  const supabase = createClient();

  const [isPending, startTransition] = useTransition();

  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    startTransition(async () => {
      const { data, error } = await supabase
        .from("files")
        .select("*")
        .eq("email", user?.emailAddresses[0].emailAddress);

      if (data?.length !== 0) {
        setUserData(data);
      }
    });
  }, [user]);

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
        {userData && userData.length !== 0 ? (
          <NavFavorites favorites={userData} />
        ) : null}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
