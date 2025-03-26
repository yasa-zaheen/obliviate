"use client";

// Clerk
import { UserButton, useUser } from "@clerk/nextjs";

// Components
import { NavMain } from "@/components/nav-main";
import { SidebarHeader } from "@/components/ui/sidebar";

// Lucide
import { Search, Sparkles, Home } from "lucide-react";

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
    },
  ],
};

function MainSidebarHeader() {
  const { user } = useUser();

  return (
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
  );
}
export default MainSidebarHeader;
