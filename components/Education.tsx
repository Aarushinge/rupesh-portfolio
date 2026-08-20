const education = [
  {
    side: "left",
    year: "2010 — 2013",
    title: "Computer / Web Development",
    institute: "Education & Professional Training",
    text: "Built a strong foundation in web development, interface design and software fundamentals."
  },
  {
    side: "right",
    year: "2013 — 2016",
    title: "Advanced Web Development",
    institute: "Professional Learning",
    text: "Expanded into responsive design, JavaScript, UI frameworks, APIs and production web development."
  },
  {
    side: "left",
    year: "Continuous",
    title: "Self Learning",
    institute: "Modern Frontend Ecosystem",
    text: "Continuously learning React, Next.js, Tailwind CSS, accessibility, performance and modern UI patterns."
  }
];

export default function Education() {
  return (
    <section id="education" className="container-shell py-20">
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">Learning, practice and continuous improvement across web technologies.</p>

      <div className="relative mx-auto mt-14 max-w-4xl">
        <div className="timeline-line absolute left-1/2 hidden h-full w-px -translate-x-1/2 md:block" />
        <div className="space-y-10">
          {education.map((item) => (
            <div key={item.year} className="relative grid md:grid-cols-2 md:gap-16">
              <div className={item.side === "left" ? "" : "md:col-start-2"}>
                <div className="rounded-md border border-slate-800 bg-[#0b0d1b]/90 p-5">
                  <p className="text-[10px] font-bold text-fuchsia-400">{item.year}</p>
                  <h3 className="mt-2 text-sm font-bold">{item.title}</h3>
                  <p className="mt-1 text-[11px] text-slate-500">{item.institute}</p>
                  <p className="mt-3 text-xs leading-6 text-slate-400">{item.text}</p>
                </div>
              </div>
              <div className="absolute left-1/2 top-7 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-slate-400 bg-[#070713] md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}