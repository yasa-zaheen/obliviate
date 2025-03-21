"use client";

import { motion } from "motion/react";

function MotionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring" }}
    >
      {children}
    </motion.div>
  );
}
export default MotionWrapper;
