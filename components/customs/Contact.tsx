"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GradientBars } from "@/components/bg-bars";

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-ink p-2 sm:p-3">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-28 md:py-40">
        {/* backdrop — matches hero */}
        <div className="absolute inset-0 z-0 opacity-60">
          <GradientBars bars={24} />
        </div>
        <div className="pointer-events-none absolute inset-0 z-0 bg-grid opacity-[0.2]" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[140px]" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-ink/50 via-transparent to-ink/70" />

        <div className="relative z-20 mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-6 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-brand"
          >
            <span className="h-px w-8 bg-brand" />
            Contact / 02
            <span className="h-px w-8 bg-brand" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Let&apos;s build
            <br />
            <span className="text-brand">something wild.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            Got a project, a half-formed idea, or just want to say hi? We&apos;re
            always up for a good conversation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="mailto:unit13.2025@gmail.com"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_40px_-6px_rgba(240,20,112,0.85)]"
            >
              <Mail size={18} />
              unit13.2025@gmail.com
            </a>
            <a
              href="https://linktr.ee/thisisunit13"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10"
            >
              Visit our Linktree
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
