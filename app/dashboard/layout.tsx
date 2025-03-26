"use client";

// ShadCn
import { AppSidebar } from "@/components/app-sidebar";

// Components
import { SidebarProvider } from "@/components/ui/sidebar";
import MainSidebarInset from "./components/MainSidebarInset";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Router Logic

  return (
    <SidebarProvider>
      <AppSidebar />
      <MainSidebarInset>{children}</MainSidebarInset>
    </SidebarProvider>
  );
}
