import { motion } from 'motion/react'
import React from 'react'

const Writeup = () => {
  return (
    <div>
      <div className="flex flex-col h-screen items-center justify-center z-50 text-white">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gray-900 blur-3xl opacity-30"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          style={{ top: "10%", left: "15%" }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gray-800 blur-3xl opacity-20"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
          style={{ bottom: "15%", right: "10%" }}
        />

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-8xl md:text-9xl font-bold tracking-wider font-press z-50"
        >
          UNIT13
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 0.7, width: "80px" }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="h-1 bg-white my-8"
        />
      </div>
    </div>
  )
}

export default Writeup
