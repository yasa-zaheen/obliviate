"use client";

import Image from "next/image";

import HomeNav from "@/components/HomeNav";

import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="max-w-screen">
      {/* Navbar */}
      <HomeNav />

      {/* Main Container */}
      <div>
        {/* Image Container */}
        <div className="relative h-svh overflow-hidden -z-10">
          <Image
            src="https://unbounce.com/photos/Gradient-Background.png"
            alt="landing-img"
            fill={true}
            objectFit="cover"
            className="select-none"
          />

          <div className="absolute z-50 flex items-center justify-center flex-col h-svh w-screen">
            <motion.p
              initial={{ opacity: 0, transform: "translateY(100px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ type: "spring", duration: 2.5 }}
              className="text-9xl font-bold select-none"
            >
              Obliviate Inc.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", delay: 1, duration: 2.5 }}
              className="text-3xl select-none"
            >
              Your Knowledge Companion, Reimagined
            </motion.p>
          </div>
        </div>

        {/* Rest of the stuff container */}
      </div>
    </div>
  );
}
