"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface Project {
  title: string;
  category: string;
  year: string;
  href: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "SmartFlow",
    category: "AI · Reinforcement Learning",
    year: "2025",
    href: "https://smartflow-sigma.vercel.app/",
    description:
      "An intelligent traffic-control system that uses reinforcement learning to optimise signal timing and ease congestion in real time.",
    image: "/smartflow.png",
  },
  {
    title: "Tachi",
    category: "Web3 · Prediction Market",
    year: "2025",
    href: "https://tachi13.vercel.app/",
    description:
      "A lightning-fast prediction market built on the Monad blockchain — micro-bets, instant settlement and on-chain rewards.",
    image: "/tachi.png",
  },
  {
    title: "Sajkkebysthira",
    category: "E-commerce - fashion",
    year: "2026",
    href: "https://sajkkebysthira.com/",
    description:
      "A cutting-edge e-commerce platform for fashion enthusiasts, offering a seamless shopping experience with a curated selection of trendy apparel.",
    image: "/sajkke.png",
  },
  {
    title: "MeetMate",
    category: "Meeting Scheduler",
    year: "2025",
    href: "https://meetmate-orpin.vercel.app/",
    description:
      "Schedule meetings in plain English.",
    image: "/meetmate.png",
  },
];

const Work = () => {
  return (
    <section id="work" className="relative w-full bg-ink p-2 sm:p-3">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-ink-soft to-ink px-5 py-20 sm:px-8 md:px-12 md:py-28">
        {/* backdrop — matches hero */}
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.2]" />
        <div className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-[28rem] w-[28rem] rounded-full bg-brand/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* header */}
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-brand">
                <span className="h-px w-8 bg-brand" />
                Selected Work / 01
              </span>
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                Things we&apos;re <span className="text-brand">proud of</span>
              </h2>
            </div>
            <a
              href="https://linktr.ee/thisisunit13"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:text-white"
            >
              See everything
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* project grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex min-h-[24rem] flex-col justify-end overflow-hidden rounded-3xl border border-white/10"
              >
                {/* screenshot */}
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                {/* legibility overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
                <div className="absolute inset-0 bg-ink/15 transition-colors duration-500 group-hover:bg-transparent" />

                {/* arrow badge */}
                <div className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-ink/50 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={18} />
                </div>

                {/* meta */}
                <div className="relative z-10 p-7">
                  <div className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white/80">
                    <span>{project.category}</span>
                    <span className="h-1 w-1 rounded-full bg-white/40" />
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
                    {project.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
