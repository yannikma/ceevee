"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/dummy";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Hero() {
    const { personal } = cvData;

    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
            >
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-800/50 border border-neutral-700 text-sm text-neutral-300 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Available for new opportunities</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                    Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">{personal.name}</span>
                </h1>

                <h2 className="text-2xl md:text-3xl text-neutral-400 font-medium">
                    {personal.role}
                </h2>

                <p className="max-w-2xl text-lg text-neutral-400 leading-relaxed">
                    {personal.bio}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a href={personal.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full transition-colors border border-neutral-700">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full transition-colors border border-neutral-700">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${personal.email}`} className="p-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full transition-colors border border-neutral-700">
                        <Mail className="w-5 h-5" />
                    </a>
                    <div className="flex items-center space-x-2 text-neutral-400 ml-4">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{personal.location}</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
