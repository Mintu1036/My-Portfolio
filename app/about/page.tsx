"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-black via-emerald-950/80 to-cyan-950/80 text-white">

            {/* Background glow */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-linear-to-b from-emerald-900/30 via-black to-black" />
                <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
                <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mx-auto max-w-5xl px-6 pb-20 pt-28"
            >
                {/* Heading */}
                <header className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/70 geist-medium">
                        About
                    </p>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl geist-light">
                        A little about{" "}
                        <span className="bg-linear-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent dm-serif-display-regular drop-shadow-[0_0_10px_rgba(52,211,153,0.6)]">
                            who I am &amp; what I&apos;m building.
                        </span>
                    </h1>
                </header>

                {/* Main card */}
                <motion.section
                    initial={{ opacity: 0, y: 24, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl"
                >
                    <div className="text-sm lg:text-xl leading-relaxed text-white/80 geist-regular space-y-4">
                        <p>
                            I'm Abhilash, an aspiring game developer and AI developer who loves building
                            immersive 2D and 3D games, from small experimental projects to high-end,
                            performance-focused experiences. I enjoy combining creativity with technical depth,
                            whether it's designing gameplay systems, crafting interactive worlds, or building
                            intelligent AI models and LLM-powered systems.
                        </p>
                        <p>
                            I like creating things that feel responsive, polished, and meaningful to play or use. I
                            care a lot about clean game architecture, smooth mechanics, and systems that scale
                            well, along with AI that feels purposeful rather than gimmicky. Most of my projects
                            start as simple ideas or experiments and gradually evolve into something more
                            complete as I learn, iterate, and refine.
                        </p>
                        <p>
                            My long-term goal is to work at the intersection of game development and artificial
                            intelligence, building experiences that feel alive and intelligent. Right now, I'm
                            focused on learning by doing — building games, training models, experimenting
                            with new ideas, and improving with every project I ship.
                        </p>
                    </div>
                </motion.section>

                {/* small cards */}
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {[
                        {
                            title: "Right now",
                            text: "Building real Unity game systems, refining my skills with physics and controls, and polishing projects that show my growth as a game developer.",
                        },
                        {
                            title: "Exploring",
                            text: "Building game systems in Unity and Unreal Engine, refining gameplay mechaincs, and learning how AI can be applied to create smarter and more engaging games.",
                        },
                        {
                            title: "Goals",
                            text: "To build games that use AI and machine learning to behave intelligently, adapt to players, and create smarter, more engaging gameplay experiences. Long term, I aim to work at a AAA game studio, contributing to large-scale, high-quality games."
                        },
                    ].map((item) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl"
                        >
                            <h2 className="mb-2 text-sm font-semibold geist-medium">
                                {item.title}
                            </h2>
                            <p className="text-xs text-white/70 geist-regular">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <Link
                    href="/projects"
                    className="mt-8 inline-block text-xs bg-linear-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent underline-offset-4 hover:underline hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(16,185,129,0.6)]"

                >
                    See my projects →
                </Link>
            </motion.div>
        </main>
    )
}