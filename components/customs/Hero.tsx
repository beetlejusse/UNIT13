"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GradientBars } from "@/components/bg-bars";
import StarField from "./StarField";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.35 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Hero = () => {
  return (
    <section id="home" className="relative w-full bg-ink p-2 sm:p-3">
      <div className="relative flex min-h-[calc(100svh-1rem)] w-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 sm:min-h-[calc(100svh-1.5rem)]">
        {/* ---------- Background ---------- */}
        <div className="absolute inset-0 z-0 opacity-70">
          <GradientBars />
        </div>
        <StarField count={70} />
        <div className="pointer-events-none absolute inset-0 z-0 bg-grid opacity-[0.25]" />

        {/* fluid-like animated colour blobs */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-1/4 left-1/4 z-0 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-indigo-600/40 via-violet-600/20 to-transparent blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 22, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-10 right-0 z-0 h-[38rem] w-[38rem] rounded-full bg-gradient-to-tr from-brand/40 via-fuchsia-600/20 to-transparent blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 26, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-1/3 right-1/4 z-0 h-[24rem] w-[24rem] rounded-full bg-gradient-to-tr from-amber-400/20 to-transparent blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* contrast overlays for legibility */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-ink/50 via-transparent to-ink/60" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,5,5,0.6)_100%)]" />

        {/* ---------- Navbar ---------- */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 flex items-center justify-between gap-4 p-4 sm:p-6"
        >
          {/* logo */}
          <a href="#home" className="flex items-center gap-3">
            <span className="hidden font-display text-base font-semibold tracking-[0.28em] text-white sm:block">
              
            </span>
          </a>

          {/* right action */}
          <a
            href="https://linktr.ee/thisisunit13"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-brand hover:text-white hover:shadow-[0_0_30px_-6px_rgba(240,20,112,0.8)]"
          >
            Let&apos;s talk
          </a>
        </motion.nav>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-20 flex flex-1 flex-col items-center justify-center px-6 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-press font-extrabold tracking-wider leading-none text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl  bg-gradient-to-b from-white via-white/90 to-white/70 bg-clip-text text-transparent"
          >
            UNIT13
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
