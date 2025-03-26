"use client";

// ShadCn
import { Sidebar, SidebarRail } from "@/components/ui/sidebar";

// Components
import MainSidebarHeader from "@/app/dashboard/components/MainSidebarHeader";
import MainSidebarContent from "@/app/dashboard/components/MainSidebarContent";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <MainSidebarHeader />
      <MainSidebarContent />
      <SidebarRail />
    </Sidebar>
  );
}
