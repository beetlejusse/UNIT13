"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { GradientBars } from "@/components/bg-bars";
import HelloPage from "@/components/customs/HelloPage";
// import RotatingText from "@/components/ui/rotating-text";
import Writeup from "@/components/customs/Writeup";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export default function UNIT13() {
  const [stars, setStars] = useState<Star[]>([]);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    const generateStars = (): void => {
      const newStars: Star[] = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.7 + 0.1,
        duration: Math.random() * 5 + 3,
        delay: Math.random() * 2,
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

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
          opacity: 0,
        }}
        animate={{
          opacity: [0, star.opacity, star.opacity * 1.5, star.opacity, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: star.duration,
          delay: star.delay,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    ));
  };

  return (
    <div className="h-screen flex items-center flex-col justify-center bg-black text-white relative overflow-hidden">
      <GradientBars />
      <div suppressHydrationWarning>{renderStars()}</div>

      <Writeup />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 right-12"
      >
        <a href="https://linktr.ee/thisisunit13" target="_blank" rel="noopener noreferrer">
          <Button className="px-6 py-3 text-lg bg-transparent border border-white text-white hover:bg-white/10 transition rounded-md cursor-pointer">
            Visit Our Linktree 
          </Button>
        </a>
      </motion.div>
      <HelloPage />
    </div>
  );
}
