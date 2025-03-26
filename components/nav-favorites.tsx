"use client";

// ShadCn
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import MainSidebarMenuItem from "@/app/dashboard/components/MainSidebarMenuItem";

export function NavFavorites({ favorites }: { favorites: QuizSet[] }) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Your Quiz Sets</SidebarGroupLabel>
      <SidebarMenu>
        {favorites.map((item) => (
          <MainSidebarMenuItem item={item} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
