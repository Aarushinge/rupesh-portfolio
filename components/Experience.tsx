const jobs = [
  {
    side: "left",
    year: "2023 — Present",
    role: "Senior Frontend Developer",
    company: "Web & Product Development",
    text: "Building responsive interfaces, reusable React components, Next.js applications and production-ready UI systems."
  },
  {
    side: "right",
    year: "2020 — 2023",
    role: "Frontend Developer",
    company: "Digital Products",
    text: "Converted Figma and HTML designs into responsive web applications and integrated REST APIs with modern frontend stacks."
  },
  {
    side: "left",
    year: "2017 — 2020",
    role: "UI / HTML Developer",
    company: "Web Projects",
    text: "Created pixel-focused interfaces using HTML5, CSS3, JavaScript, jQuery, Bootstrap and UIkit."
  },
  {
    side: "right",
    year: "Earlier",
    role: "Web Designer / Developer",
    company: "Client Projects",
    text: "Delivered websites and reusable UI components with a strong focus on cross-browser compatibility and responsive layouts."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="container-shell py-20">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">A snapshot of my frontend development journey and the type of work I enjoy solving.</p>

      <div className="relative mx-auto mt-14 max-w-4xl">
        <div className="timeline-line absolute left-1/2 hidden h-full w-px -translate-x-1/2 md:block" />

        <div className="space-y-10 md:space-y-14">
          {jobs.map((job, index) => (
            <div key={job.year} className="relative grid md:grid-cols-2 md:gap-16">
              <div className={job.side === "left" ? "md:text-right" : "md:col-start-2"}>
                <div className="rounded-md border border-slate-800 bg-[#0b0d1b]/90 p-5 text-left shadow-xl">
                  <p className="text-[10px] font-bold text-fuchsia-400">{job.year}</p>
                  <h3 className="mt-2 text-sm font-bold">{job.role}</h3>
                  <p className="mt-1 text-[11px] text-slate-500">{job.company}</p>
                  <p className="mt-3 text-xs leading-6 text-slate-400">{job.text}</p>
                </div>
              </div>
              <div className="absolute left-1/2 top-6 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-slate-400 bg-[#070713] md:block" />
              <div className="mt-3 h-px w-8 bg-fuchsia-500/40 md:absolute md:left-1/2 md:top-8 md:mt-0 md:w-8" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}