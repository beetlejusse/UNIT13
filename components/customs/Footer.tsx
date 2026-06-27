"use client";

import { ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Linktree", href: "https://linktr.ee/thisisunit13" },
  { label: "Email", href: "mailto:unit13.2025@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="relative w-full bg-ink p-2 pb-2 sm:p-3 sm:pb-3">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-soft px-6 pt-16 sm:px-10 md:px-14">
        {/* backdrop — matches hero */}
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.15]" />
        <div className="pointer-events-none absolute -right-32 top-0 h-[26rem] w-[26rem] rounded-full bg-brand/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="flex flex-col gap-12 pb-12 md:flex-row md:items-start md:justify-between">
            {/* Brand */}
            <div className="max-w-sm">
              <div className="flex items-center gap-3">
                <span className="font-display text-lg font-semibold tracking-[0.28em] text-white">
                  UNIT13
                </span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/50">
                A creative collective crafting bold brands, immersive websites
                and digital experiences that refuse to blend in.
              </p>
            </div>

            {/* Nav */}
            <div className="flex gap-16">
              <div>
                <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                  Explore
                </h4>
                <ul className="space-y-3">
                  {footerLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-white/70 transition-colors hover:text-brand"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                  Connect
                </h4>
                <ul className="space-y-3">
                  {socials.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/70 transition-colors hover:text-brand"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Giant watermark */}
        <div
          aria-hidden
          className="pointer-events-none relative z-0 select-none overflow-hidden"
        >
          <div className="translate-y-1/4 text-center font-press text-[15vw] font-extrabold leading-none tracking-tight text-white/[0.04]">
            UNIT13
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
