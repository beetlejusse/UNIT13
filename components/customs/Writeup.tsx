import { motion } from "framer-motion"
import React from "react"

const Writeup = () => {
  return (
    <section className="relative isolate flex items-center justify-center text-white min-h-[60vh] md:min-h-[70vh] lg:min-h-screen">
      {/* Decorative glows */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-20 w-[28rem] h-[28rem] md:w-[34rem] md:h-[34rem] rounded-full bg-gradient-to-br from-cyan-500/20 via-indigo-500/10 to-transparent blur-3xl opacity-40"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 -right-16 w-[24rem] h-[24rem] md:w-[30rem] md:h-[30rem] rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-purple-500/10 to-transparent blur-3xl opacity-30"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-press font-extrabold tracking-wider leading-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl  bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent"
        >
          UNIT13
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.8 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mx-auto mt-6 md:mt-8 h-px md:h-1 w-24 sm:w-28 md:w-32 bg-gradient-to-r from-transparent via-white/70 to-transparent origin-center"
        />
      </div>
    </section>
  )
}

export default Writeup
