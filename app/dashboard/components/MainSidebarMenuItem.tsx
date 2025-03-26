// Next
import Link from "next/link";
import { usePathname } from "next/navigation";

// Components
import MainSideBarMenuButtonDropdownMenu from "./MainSideBarMenuButtonDropdownMenu";

// ShadCn
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

function MainSidebarMenuItem({ item }: { item: QuizSet }) {
  // Routing
  const pathname = usePathname();
  const currentUrl = pathname.split("/")[pathname.split("/").length - 1];

  return (
    <SidebarMenuItem key={item.id}>
      <SidebarMenuButton asChild>
        <Link
          href={`/dashboard/${item.id}`}
          className={`${
            currentUrl === item.id
              ? "bg-[#331832]! text-white! hover:bg-[#331832]! hover:text-white! active:bg-[#331832]! active:text-white!"
              : ""
          }`}
        >
          {item.title}
        </Link>
      </SidebarMenuButton>
      <MainSideBarMenuButtonDropdownMenu />
    </SidebarMenuItem>
  );
}
export default MainSidebarMenuItem;
