"use client";

// Next
import Image from "next/image";

// Components
import HomePageNav from "@/app/components/HomePageNav";
import HomePageText from "@/app/components/HomePageText";

// Framer motion

export default function Home() {
  return (
    <div className="max-w-screen">
      {/* Navbar */}
      <HomePageNav />

      {/* Hero Section */}
      <div className="relative h-svh overflow-hidden -z-10">
        {/* Image */}
        <Image
          src="https://unbounce.com/photos/Gradient-Background.png"
          alt="landing-img"
          fill={true}
          objectFit="cover"
          className="select-none"
        />

        {/* Text */}
        <HomePageText />
      </div>
    </div>
  );
}
