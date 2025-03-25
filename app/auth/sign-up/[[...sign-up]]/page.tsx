"use client";

// Clerk
import { SignUp } from "@clerk/nextjs";

// Components
import AuthImageContainer from "../../components/AuthImageContainer";
// Framer Motion
import { motion } from "motion/react";

export default function LoginPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring" }}
      className="grid min-h-svh lg:grid-cols-2"
    >
      <AuthImageContainer src="https://images.unsplash.com/photo-1741114056855-d4e6d12197df?q=80&w=2328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

      <div className="flex flex-1 items-center justify-center">
        <SignUp />
      </div>
    </motion.div>
  );
}
