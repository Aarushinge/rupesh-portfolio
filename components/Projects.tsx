import { ExternalLink } from "lucide-react";

const projects = [
  { title: "Portfolio Website", category: "Next.js / Tailwind", description: "Dark futuristic portfolio with responsive sections and animated visual details.", image: "01" },
  { title: "E-Commerce UI", category: "ReactJS / API", description: "Product listing, cart quantity controls, delete actions and API integration.", image: "02" },
  { title: "Authentication App", category: "Next.js / AWS", description: "Modern signup and authentication flow with reusable form components.", image: "03" },
  { title: "Dashboard UI", category: "ReactJS / Bootstrap", description: "Responsive dashboard layout with cards, tables and modular components.", image: "04" },
  { title: "CMS Interface", category: "HTML / CSS / JS", description: "Clean admin interface built from design specifications and reusable UI patterns.", image: "05" },
  { title: "Responsive Landing Page", category: "HTML / Tailwind", description: "Pixel-focused landing page optimized for desktop, tablet and mobile.", image: "06" },
  { title: "API Product App", category: "Next.js / REST", description: "Dynamic product experience using remote JSON data and reusable components.", image: "07" },
  { title: "Figma to React", category: "ReactJS / UI", description: "Converted high-fidelity Figma screens into maintainable React components.", image: "08" },
  { title: "WordPress UI", category: "WordPress / CSS", description: "Custom responsive front-end work with plugin-based integrations.", image: "09" }
];

export default function Projects() {
  return (
    <section id="projects" className="container-shell py-20">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Selected work and practice projects that demonstrate my UI and frontend development skills.</p>

      <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="overflow-hidden rounded-md border border-slate-800 bg-[#0c0d18] transition hover:-translate-y-1 hover:border-fuchsia-500/50">
            <div className="flex h-36 items-center justify-center bg-gradient-to-br from-slate-800/80 via-indigo-950/50 to-fuchsia-950/40">
              <div className="rounded-lg border border-white/10 bg-black/40 px-8 py-5 text-center shadow-lg">
                <span className="text-2xl font-black text-fuchsia-400">{project.image}</span>
                <p className="mt-1 text-[9px] text-slate-500">PROJECT PREVIEW</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-[10px] font-semibold text-fuchsia-400">{project.category}</p>
              <h3 className="mt-1 text-sm font-bold">{project.title}</h3>
              <p className="mt-2 min-h-12 text-[11px] leading-5 text-slate-400">{project.description}</p>
              <div className="mt-4 flex gap-2">
                <a href="#contact" className="inline-flex items-center gap-1 rounded border border-slate-700 px-3 py-1.5 text-[10px] hover:border-fuchsia-500">
                  <ExternalLink size={11} /> Live
                </a>
                
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}