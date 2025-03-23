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
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useUser();

  const [isPending, startTransition] = useTransition();

  const { files, setFiles } = useContext(FileContext);

  useEffect(() => {
    startTransition(async () => {
      const data = await getUserFiles();
      setFiles(data!);
    });
  }, [user, setFiles]);

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
        {files && files.length !== 0 ? (
          <NavFavorites favorites={files} />
        ) : null}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
