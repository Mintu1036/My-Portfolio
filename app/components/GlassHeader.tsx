"use client";

import { useState } from "react";
import Link from "next/link";

type NavLink = {
  label: string;
  href: string;
};

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export default function GlassHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="flex items-center justify-between rounded-3xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xl">
          {/* Brand */}
          <Link href="/" className="text-white text-lg geist-medium">
            Abhilash Balabadra
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80 geist-regular">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-white/80 transition duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="geist-regular rounded-full border border-white/30 bg-linear-to-r from-emerald-500/20 to-cyan-500/20 px-4 py-1.5 text-xs font-semibold text-white shadow-sm backdrop-blur-md transition hover:from-emerald-500/30 hover:to-cyan-500/30 hover:shadow-[0_0_12px_rgba(16,185,129,0.4)]"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen((p) => !p)}
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="mt-2 rounded-3xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xl md:hidden geist-regular">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-2 py-1.5 hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl border border-white/40 px-3 py-2 text-xs text-center"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}