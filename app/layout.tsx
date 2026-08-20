import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rupesh Shinge | Frontend Developer",
  description: "Rupesh Shinge — Frontend Developer portfolio built with Next.js and Tailwind CSS."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}