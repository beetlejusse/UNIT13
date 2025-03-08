"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  const [notified, setNotified] = useState(false);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold tracking-wide"
      >
        UNIT13
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl mt-4 text-gray-400"
      >
        Coming Soon...
      </motion.p>

      {!notified ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6"
        >
          <Button
            className="px-6 py-3 text-lg bg-white text-black hover:bg-gray-300 transition"
            onClick={() => setNotified(true)}
          >
            Notify Me
          </Button>
        </motion.div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-4 text-green-400"
        >
          You’ll be notified when we launch! 🚀
        </motion.p>
      )}
    </div>
  );
}
