"use client";

// Next
import Link from "next/link";

// Clerk
import { SignInButton } from "@clerk/nextjs";

// Lucide
import { GalleryVerticalEnd } from "lucide-react";

function HomePageNav() {
  return (
    <div className="flex items-center justify-between w-full fixed p-6 bg-[#ffffff2f] backdrop-blur-3xl">
      {/* Title */}
      <div className="flex items-center gap-4">
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

      {/* Buttons */}
      <SignInButton />
    </div>
  );
}
export default HomePageNav;
