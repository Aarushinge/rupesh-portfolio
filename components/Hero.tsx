"use client";

import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="container-shell min-h-[650px] py-16 md:py-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.35fr_.65fr]">
        <div className="order-2 fade-up md:order-1">
          <p className="mb-4 text-sm text-slate-400">Hi, I am</p>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Rupesh <span className="text-fuchsia-400 glow-text">Shinge</span>
          </h1>
          <h2 className="mt-3 text-lg font-semibold text-slate-200 md:text-xl">
            I am a <span className="text-fuchsia-400">Frontend Developer</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
            Frontend developer focused on building clean, responsive and high-performance
            web experiences using HTML, CSS, JavaScript, ReactJS, NextJS, Tailwind CSS and Bootstrap.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500 px-5 py-3 text-xs font-bold text-white shadow-glow transition hover:scale-105"
            >
              View My Work <ArrowUpRight size={15} />
            </a>
            <a
              href="/Rupesh-Shinge-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-semibold text-slate-200 transition hover:border-fuchsia-400"
            >
              Resume <Download size={14} />
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="float-slow relative h-44 w-44 overflow-hidden rounded-full border border-fuchsia-400/60 bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 p-1 shadow-glow md:h-56 md:w-56">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-900">
              <Image
                src="/Rupesh_hero.jpg"
                alt="Rupesh Shinge"
                fill
                className="object-cover"
                sizes="224px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}