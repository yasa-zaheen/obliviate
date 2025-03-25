import { motion } from "motion/react";

function HomePageText() {
  return (
    <div className="absolute z-50 flex items-center justify-center flex-col h-svh w-screen">
      {/* Title */}
      <motion.p
        initial={{ opacity: 0, transform: "translateY(100px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ type: "spring", duration: 2.5 }}
        className="text-9xl font-bold select-none"
      >
        Obliviate Inc.
      </motion.p>

      {/* Sub title */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", delay: 1, duration: 2.5 }}
        className="text-3xl select-none"
      >
        Your Knowledge Companion, Reimagined
      </motion.p>
    </div>
  );
}
export default HomePageText;
