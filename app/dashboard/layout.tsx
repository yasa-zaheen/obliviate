"use client";

// Next
import { usePathname } from "next/navigation";

// ShadCn
import { AppSidebar } from "@/components/app-sidebar";
import { NavActions } from "@/components/nav-actions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Router Logic
  const pathname = usePathname();
  console.log(pathname.split("/"));
  return (
    <SidebarProvider>
      {/* Left Sidebar */}
      <AppSidebar />

      {/* Right Section */}
      <SidebarInset>
        {/* Top bar */}
        <header className="flex h-14 shrink-0 items-center gap-2">
          {/* Button and Title */}
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />

            <Breadcrumb>
              {pathname && pathname.split("/").length > 2 ? (
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <Link href={"/dashboard"}>
                      <BreadcrumbLink>Dashboard</BreadcrumbLink>
                    </Link>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <Link href={`/dashboard/${pathname.split("/")[2]}`}>
                      <BreadcrumbLink>{pathname.split("/")[2]}</BreadcrumbLink>
                    </Link>
                  </BreadcrumbItem>
                </BreadcrumbList>
              ) : (
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <Link href={"/dashboard"}>
                      <BreadcrumbLink>Dashboard</BreadcrumbLink>
                    </Link>
                  </BreadcrumbItem>
                </BreadcrumbList>
              )}
            </Breadcrumb>
          </div>

          {/* Nav Actions */}
          <div className="ml-auto px-3">
            <NavActions />
          </div>
        </header>

        {/* Rest of the page content */}
        <div className="flex flex-1 flex-col gap-4 px-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
