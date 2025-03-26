"use client";

// Next
import { usePathname } from "next/navigation";

// Server actions
import { NavActions } from "@/components/nav-actions";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";

// ShadCn
import { Separator } from "@/components/ui/separator";
import MainSideBarInsetBreadcrumb from "./MainSideBarInsetBreadcrumb";

function MainSidebarInset({ children }: { children: React.ReactNode }) {
  return (
    <SidebarInset>
      <header className="flex h-14 shrink-0 items-center gap-2">
        <div className="flex flex-1 items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <MainSideBarInsetBreadcrumb />
        </div>

        <div className="ml-auto px-3">
          <NavActions />
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-4 px-4">{children}</div>
    </SidebarInset>
  );
}
export default MainSidebarInset;
