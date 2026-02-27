"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/dummy";

export default function Skills() {
    return (
        <section className="py-20" id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-white mb-10 flex items-center">
                    <span className="text-emerald-400 mr-3">02.</span> Skills & Expertise
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cvData.skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors"
                        >
                            <h3 className="text-xl font-semibold text-white mb-4">
                                {skillGroup.category}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map(skill => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm font-medium text-neutral-300 bg-neutral-800 rounded-md shadow-sm border border-neutral-700/50"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
