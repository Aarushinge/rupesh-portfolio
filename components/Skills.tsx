const groups = [
  { title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "ReactJS", "NextJS", "Tailwind", "Bootstrap", "UIkit"] },
  { title: "Design", skills: ["Figma", "Photoshop", "Responsive UI", "Design Systems", "Prototyping"] },
  { title: "DevOps", skills: ["Git", "GitHub", "Vercel", "NPM", "Deployment"] },
  { title: "Backend", skills: ["REST API", "JSON", "API Integration", "Authentication", "AWS"] },
  { title: "Tools", skills: ["VS Code", "Chrome DevTools", "Slick Slider", "WordPress", "jQuery"] },
  { title: "Other", skills: ["Agile", "Accessibility", "SEO Basics", "Performance", "Cross-browser"] }
];

export default function Skills() {
  return (
    <section id="skills" className="container-shell py-20">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Technologies and tools I use to turn designs into polished digital experiences.</p>

      <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-md border border-slate-700/60 bg-[#0d1020]/90 p-5 shadow-lg transition hover:-translate-y-1 hover:border-fuchsia-500/50"
          >
            <h3 className="mb-4 text-center text-xs font-bold text-slate-200">{group.title}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded border border-slate-700 bg-slate-950/70 px-2.5 py-1 text-[10px] text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}