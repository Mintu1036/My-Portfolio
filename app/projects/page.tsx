"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Project = {
    title: string;
    description: string;
    tech: string[];
    status?: "Live" | "In Progress" | "Experiment";
    link?: string;
    repo?: string;
};

const projects: Project[] = [
    {
        title: "Wine-Quality-Prediction",
        description:
            "It is to predict wine quality based on its chemical properties and convert the problem into a binary classification task (Good vs Bad wine).",
        tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Jupyter Notebook"],
        link: "",
        repo: "https://github.com/Mintu1036/Wine-Quality-Prediction",
    },
    {
        title: "LuaLander",
        description:
            "It's a fun game where we control a spaceship on an alien world and have to carefully maneuver it to land perfectly.",
        tech: ["Unity", "C#"],
        status: "In Progress",
        link: "",
        repo: "",
    },
    {
        title: "AI-YouTube-Video-Idea-Generator",
        description:
            "It is use to generate current trending videos topics based on user input.",
        tech: ["Nest.js", "TypeScript", "Tailwind", "Google API", "Render", "Vercel"],
        status: "In Progress",
        link: "",
        repo: "https://github.com/Mintu1036/AI-YouTube-Video-Idea-Generator",
    },
    {
        title: "Jarvis_1.0",
        description:
            "It is a Python-based AI assistant that experiments with agent logic and prompt-driven interaction, built to explore the foundations of intelligent systems.",
        tech: ["Python", "AI Agent Architecture", "Prompt Engineering", "Google API"],
        link: "",
        repo: "https://github.com/Mintu1036/Jarvis_1.0",
    },
    {
        title: "Sudoku-Solver",
        description:
            "A C++ program that algorithmically solves 9x9 Sudoku puzzles using logical search and constraint validation.",
        tech: ["C++"],
        link: "",
        repo: "https://github.com/Mintu1036/CodeAlpha_Sudoku-Solver",
    },
    {
        title: "FoodDelivery",
        description:
            "A React + Vite food ordering app with inituitive UI and core ordering features(Frontend part only).",
        tech: ["React", "JavaScript", "HTML", "CSS"],
        status: "Live",
        link: "https://food-delivery-jade-psi.vercel.app",
        repo: "https://github.com/Mintu1036/FoodDelivery",
    },
];

export default function ProjectsPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-black via-emerald-950/80 to-cyan-950/80 text-white">

            {/* Background golw */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-linear-to-b from-emerald-900/30 via-black to-black" />
                <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
                <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
            </div>

            <div className="mx-auto max-w-6xl px-6 pt-24 pb-20">
                {/* Header */}
                <header className="mb-10 border-b border-white/10 pb-6">
                    <h1 className="text-4xl geist-light">
                        Some of my Selected{" "}
                        <span className="bg-linear-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent dm-serif-display-regular drop-shadow-[0_0_10px_rgba(52,211,153,0.6)]">
                            Projects
                        </span>
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm text-white/60 geist-regular">
                        These are the things I'm proud of right now – building real games, experimenting
                        with AI, and exploring how gameplay and intelligence can come together to create
                        immersive experiences.
                    </p>
                </header>

                {/* Grid */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.1 },
                        },
                    }}
                    className="grid gap-6 md:grid-cols-2"
                >
                    {projects.map((project) => (
                        <motion.article
                            key={project.title}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-emerald-400/30 hover:shadow=[0_0_30px_rgba(16,185,129,0.15)]"
                        >
                            {/* Status */}
                            <div className="flex items-center justify-between gap-3 text-xs text-white/60">
                                <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-black/40 px-3 py-1 geist-regular">
                                    <span
                                        className={`h-1.5 w-1.5 rounded-full ${project.status === "Live"
                                            ? "bg-emerald-400"
                                            : project.status === "In Progress"
                                                ? "bg-amber-300"
                                                : "bg-sky-300"
                                            }`}
                                    />
                                    {project.status ?? "Project"}
                                </span>
                            </div>

                            {/* Title */}
                            <h2 className="text-lg font-semibold geist-medium">
                                {project.title}
                            </h2>
                            {/* Description */}
                            <p className="mt-2text-sm text-white/70 geist-regular">
                                {project.description}
                            </p>

                            {/* Tech */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] text-white/70"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Link */}
                            <div className="mt-5 flex gap-3 text-xs">
                                {project.link && (
                                    <Link
                                        href={project.link}
                                        target="_black"
                                        className="rounded-full bg-linear-to-r from-emerald-400 to-cyan-400 px-3 py-1.5 text-black font-medium hover:opacity-90"
                                    >
                                        View Live
                                    </Link>
                                )}
                                {project.repo && (
                                    <Link
                                        href={project.repo}
                                        target="_blank"
                                        className="rounded-full border border-white/25 px-3 py-1.5 text-white/80 hover:border-emerald-400/40"
                                    >
                                        Github
                                    </Link>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </motion.section>
            </div>
        </main>
    );
}