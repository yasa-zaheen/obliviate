import { SignInButton } from "@clerk/nextjs";
import { GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";

function HomeNav() {
  return (
    <div className="flex items-center justify-between w-full fixed p-6 z-50 bg-[#ffffff2f] backdrop-blur-3xl">
      {/* Title */}
      <div className="flex items-center gap-6">
        <GalleryVerticalEnd className="size-4" />
        Obliviate Inc.
      </div>
      {/* Other buttons */}
      <div className="flex space-x-6">
        <Link href="#">Features</Link>
        <Link href="#">Solutions</Link>
        <Link href="#">Resources</Link>
        <Link href="#">Pricing</Link>
      </div>
      <div>
        {/* Buttons */}
        <SignInButton />
      </div>
    </div>
  );
}
export default HomeNav;
