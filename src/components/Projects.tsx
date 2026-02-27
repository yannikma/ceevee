"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/dummy";
import { ExternalLink, FolderGit2 } from "lucide-react";

export default function Projects() {
    return (
        <section className="py-20" id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-white mb-10 flex items-center">
                    <span className="text-emerald-400 mr-3">03.</span> Open Source Projects
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {cvData.projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col justify-between bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-2xl p-8 transition-colors"
                        >
                            <div>
                                <div className="flex justify-between items-center mb-6 text-emerald-400">
                                    <FolderGit2 className="w-10 h-10 stroke-1" />
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">
                                        <ExternalLink className="w-6 h-6" />
                                    </a>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="before:absolute before:inset-0">
                                        {project.title}
                                    </a>
                                </h3>

                                <p className="text-neutral-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-neutral-500 font-mono mt-auto pt-4">
                                {project.tech.map(tech => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
