"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ComingSoon() {
  const [stars, setStars] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Generate random stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.7 + 0.1,
          duration: Math.random() * 5 + 3,
          delay: Math.random() * 2
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  // Only render stars after component has mounted on client
  const renderStars = () => {
    if (!mounted) return null;

    return stars.map((star) => (
      <motion.div
        key={star.id}
        className="absolute rounded-full bg-white"
        style={{
          left: `${star.x}%`,
          top: `${star.y}%`,
          width: `${star.size}px`,
          height: `${star.size}px`,
          opacity: 0
        }}
        animate={{
          opacity: [0, star.opacity, star.opacity * 1.5, star.opacity, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: star.duration,
          delay: star.delay,
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
    ));
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Suppress hydration warning */}
      <div suppressHydrationWarning>
        {/* Starry background effect */}
        {renderStars()}
      </div>

      {/* Abstract background elements */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gray-900 blur-3xl opacity-30"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ top: "10%", left: "15%" }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gray-800 blur-3xl opacity-20"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ bottom: "15%", right: "10%" }}
      />

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl md:text-8xl font-bold tracking-wider"
      >
        UNIT13
      </motion.h1>

      {/* Decorative Divider */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 0.7, width: "80px" }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="h-1 bg-white my-8"
      />

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-2xl md:text-3xl mt-4 text-gray-400"
      >
        Coming Soon...
      </motion.p>

      {/* Transparent Linktree Button - Positioned at bottom right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 right-12"
      >
        <a href="https://linktr.ee/thisisunit13" target="_blank" rel="noopener noreferrer">
          <Button className="px-6 py-3 text-lg bg-transparent border border-white text-white hover:bg-white/10 transition rounded-md">
            Visit Our Linktree 🌳
          </Button>
        </a>
      </motion.div>
    </div>
  );
}
