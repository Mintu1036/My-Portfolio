"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mgooaknj");

    if (state.succeeded) {
        return (
            <main className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-linear-to-br from-black via-emerald-950/80 to-cyan-950/80">
                {/* Backgroung glow */}
                <div className="pointer-events-none fixed inset-0 -z-10">
                    <div className="absolute inset-0 bg-linear-to-b from-emerald-900/30 via-black to-black" />
                    <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
                    <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mx-4 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
                >
                    <p className="text-xs uppercase tracking-[0.18em] text-emerald-200/80 geist-medium mb-2">
                        Message sent
                    </p>
                    <h1 className="text-2xl geist-light mb-3">
                        Thanks for reaching out 🎉
                    </h1>
                    <p className="text-sm text-white/70 geist-regular">
                        I'll read your message and get back to you soon.
                    </p>
                </motion.div>
            </main>
        );
    }

    return (
        <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-black via-emerald-950/80 to-cyan-950/80 text-white">
            {/* Background glow */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-linear-to-b from-emerald-900/30 via-black to-black" />
                <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
                <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
            </div>

            <div className="mx-auto w-full max-w-3xl px-6 pt-28 pb-20 sm:px-16 lg:px-16">
                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-10"
                >
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl geist-light">
                        Get in{" "}
                        <span className="bg-linear-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent dm-serif-display-regular">
                            Touch
                        </span>
                    </h1>
                    <p className="mt-3 text-sm text-white/65 geist-regular max-w-xl">
                        Want to collaborate, talk about games or AI, or just say hi? Drop me
                        a message below.
                    </p>
                </motion.header>

                {/* Forn=m card */}
                <motion.section
                    initial={{ opacity: 0, y: 24, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div className="space-y-2">
                            <label className="text-sm text-white/80 geist-regular">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your name"
                                className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-emerald-400/60 focus:bg-black/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 geist-regular"
                            />
                        </div>

                        {/* Emal */}
                        <div className="space-y-2">
                            <label className="text-sm text-white/80 gesit-regular">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="you@example.com"
                                className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-emerald-400/60 focus:bg-black/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 geist-regular"
                            />
                            <ValidationError 
                                field="email"
                                errors={state.errors}
                                className="text-xs text-red-300"
                            />
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label className="text-sm text-white/80 geist-regular">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows={5}
                                required
                                placeholder="Tell me what you're building or what you have in mind."
                                className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-emerald-400/60 focus:bg-black/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 geist-regular"
                            />
                            <ValidationError
                                field="message"
                                errors={state.errors}
                                className="text-xs text-red-300"
                            />
                        </div>

                        {/* Submit */}
                        <motion.button
                            whileHover={{ y: -1, scale: 1.01 }}
                            whileTap={{ scale: 0.97 }}
                            type="submit"
                            disabled={state.submitting}
                            className="w-full cursor-pointer rounded-lg bg-linear-to-r from-emerald-400 to-cyan-950 px-6 py-2.5 text-sm font-medium text-black disabled:opacity-60 geist-medium"
                        >
                            {state.submitting ? "Sending..." : "Send Message"}
                        </motion.button>

                        <p className="text-[11px] text-white/45 geist-regular text-center">
                            No spam. Just a direct message that lands in my inbox.
                        </p>
                    </form>
                </motion.section>
            </div>
        </main>
    )
}
