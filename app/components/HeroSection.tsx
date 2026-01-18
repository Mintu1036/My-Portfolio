"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HeroSection() {
    const router = useRouter();

    return (
        <section className="relative flex min-h-[calc(100vh-4rem)] items-center">
            <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-8"
                >
                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white geist-light">
                        I build modern experiences across{" "}
                        <span className="bg-linear-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent dm-serif-display-regular drop-shadow-[0_0_10px_rgba(52,211,153,0.6)]">
                            Games & AI
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="max-w-3xl text-lg text-white/70 geist-regular">
                        Hey, I'm Abhilash. I'm 19, obsessed with building immersive
                        games with Unreal Engine, Unity and intelligent AI models.
                        I love fast execution, clean systems, and interactive worlds.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => router.push("/projects")}
                            className="rounded-xl bg-white px-6 py-2.5 text-sm font-medium text-black"
                        >
                            View Projects
                        </motion.button>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/Abhilash_Balabadra_Resume_Styled.pdf.docx" 
                            download
                            className="rounded-xl border border-white/30 px-6 py-2.5 text-sm text-while/80"
                        >
                            Download Resume
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}