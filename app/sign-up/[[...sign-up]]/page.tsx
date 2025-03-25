"use client";

// Next
import Image from "next/image";

// Clerk
import { SignUp } from "@clerk/nextjs";

// Framer Motion
import { motion } from "motion/react";

// Lucide
import { GalleryVerticalEnd } from "lucide-react";

export default function LoginPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring" }}
      className="grid min-h-svh lg:grid-cols-2"
    >
      {/* Left Side */}
      <div className="relative h-svh overflow-hidden -z-10">
        <Image
          src="https://images.unsplash.com/photo-1741114056855-d4e6d12197df?q=80&w=2328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image"
          fill={true}
          objectFit="cover"
          className="select-none"
        />
      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* Top Logo */}
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Obliviate Inc.
          </a>
        </div>

        {/* Sign Up Section */}
        <div className="flex flex-1 items-center justify-center">
          <SignUp />
        </div>
      </div>
    </motion.div>
  );
}
