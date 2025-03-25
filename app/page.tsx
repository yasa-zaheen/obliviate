"use client";

// Next
import Image from "next/image";

// Components
import HomeNav from "@/components/HomeNav";
import HomePageText from "@/components/HomePageText";

// Framer motion

export default function Home() {
  return (
    <div className="max-w-screen">
      {/* Navbar */}
      <HomeNav />

      {/* Main Container */}
      <div>
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
    </div>
  );
}
