"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ComingSoon() {
  const [notified, setNotified] = useState(false);
  const [fontSize, setFontSize] = useState(1);

  const increaseFontSize = () => {
    if (fontSize < 1.3) setFontSize(prevSize => prevSize + 0.1);
  };

  const decreaseFontSize = () => {
    if (fontSize > 0.8) setFontSize(prevSize => prevSize - 0.1);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Abstract background elements */}
      <motion.div 
        className="absolute w-96 h-96 rounded-full bg-gray-900 blur-3xl opacity-30"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ top: '10%', left: '15%' }}
      />
      <motion.div 
        className="absolute w-80 h-80 rounded-full bg-gray-800 blur-3xl opacity-20"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{ bottom: '15%', right: '10%' }}
      />

      {/* Font size controls */}
      <div className="absolute top-8 right-8 flex gap-3">
        <Button 
          variant="outline" 
          className="text-white border-gray-700 hover:bg-gray-800"
          onClick={decreaseFontSize}
        >
          A-
        </Button>
        <Button 
          variant="outline" 
          className="text-white border-gray-700 hover:bg-gray-800"
          onClick={increaseFontSize}
        >
          A+
        </Button>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl md:text-8xl font-bold tracking-wider"
        style={{ fontSize: `${7 * fontSize}rem` }}
      >
        UNIT13
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 0.7, width: "80px" }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="h-1 bg-white my-8"
      />
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-2xl md:text-3xl mt-4 text-gray-400"
        style={{ fontSize: `${2 * fontSize}rem` }}
      >
        Coming Soon...
      </motion.p>

      {!notified ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12"
        >
          <Button
            className="px-8 py-6 text-xl bg-white text-black hover:bg-gray-300 transition rounded-md"
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
          className="mt-12 text-2xl text-green-400"
          style={{ fontSize: `${1.5 * fontSize}rem` }}
        >
          You&apos;ll be notified when we launch! 🚀
        </motion.p>
      )}
      
      <motion.div 
        className="absolute bottom-8 flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        {/* Social icons placeholders */}
        <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-white hover:text-white cursor-pointer transition-colors">
          <span>X</span>
        </div>
        <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-white hover:text-white cursor-pointer transition-colors">
          <span>IG</span>
        </div>
        <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-white hover:text-white cursor-pointer transition-colors">
          <span>LI</span>
        </div>
      </motion.div>
    </div>
  );
}