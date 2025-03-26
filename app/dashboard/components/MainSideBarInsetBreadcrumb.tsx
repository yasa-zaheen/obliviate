// ShadCn
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MainSideBarInsetBreadcrumb() {
  const pathname = usePathname();

  return (
    <Breadcrumb>
      {pathname && pathname.split("/").length > 2 ? (
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href={"/dashboard"}>Dashboard</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Link href={`/dashboard/${pathname.split("/")[2]}`}>
              {pathname.split("/")[2]}
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      ) : (
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href={"/dashboard"}>Dashboard</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      )}
    </Breadcrumb>
  );
}
export default MainSideBarInsetBreadcrumb;
