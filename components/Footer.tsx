

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-shell text-center">
        <p className="text-sm font-bold">RUPESH SHINGE</p>
        <p className="mt-2 text-[10px] text-slate-500">Frontend Developer • ReactJS • NextJS • Tailwind CSS</p>
        <p className="mt-6 text-[9px] text-slate-600">© {new Date().getFullYear()} Rupesh Shinge. All rights reserved.</p>
      </div>
    </footer>
  );
}