"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="container-shell py-20">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">Have a project, opportunity or collaboration in mind? Send me a message.</p>

      <form onSubmit={submit} className="mx-auto mt-8 max-w-md space-y-2 rounded-lg border border-slate-800 bg-[#0b0d1b]/90 p-4 shadow-glow">
        <input required placeholder="Your Name" className="w-full rounded border border-slate-700 bg-transparent px-3 py-2.5 text-xs outline-none placeholder:text-slate-600 focus:border-fuchsia-500" />
        <input required type="email" placeholder="Your Email" className="w-full rounded border border-slate-700 bg-transparent px-3 py-2.5 text-xs outline-none placeholder:text-slate-600 focus:border-fuchsia-500" />
        <input placeholder="Subject" className="w-full rounded border border-slate-700 bg-transparent px-3 py-2.5 text-xs outline-none placeholder:text-slate-600 focus:border-fuchsia-500" />
        <textarea required rows={5} placeholder="Message" className="w-full resize-none rounded border border-slate-700 bg-transparent px-3 py-2.5 text-xs outline-none placeholder:text-slate-600 focus:border-fuchsia-500" />
        <button className="flex w-full items-center justify-center gap-2 rounded bg-fuchsia-500 py-3 text-xs font-bold transition hover:bg-fuchsia-400">
          <Send size={13} /> {sent ? "Message Ready" : "Send Message"}
        </button>
        {sent && <p className="pt-2 text-center text-[10px] text-slate-500">Connect this form to EmailJS, Resend, or your API to send real emails.</p>}
      </form>
    </section>
  );
}