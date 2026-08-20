"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 fixed top-0 w-full bg-black">
      <div className="container-shell flex items-center justify-between py-5">
        <a href="#about" className="text-sm font-bold tracking-wide">
          RUPESH <span className="text-fuchsia-400">SHINGE</span>
        </a>

        <nav className="hidden items-center gap-7 text-xs text-slate-300 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-fuchsia-500/60 px-4 py-2 text-xs font-semibold text-fuchsia-300 transition hover:bg-fuchsia-500/10 md:block"
        >
          Let&apos;s Talk
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full border-y border-white/10 bg-[#080815]/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-5 text-sm">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}