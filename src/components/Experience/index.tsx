"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/dummy";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

export default function Experience() {
    return (
        <section className="py-20" id="experience">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <SectionHeader number="01" title="Experience" />

                <div className="space-y-12">
                    {cvData.experience.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="md:grid md:grid-cols-4 md:gap-8 group">
                                <div className="hidden md:block col-span-1 pt-1">
                                    <p className="text-sm text-neutral-500 font-mono">{job.duration}</p>
                                </div>

                                <div className="col-span-3">
                                    <div className="flex flex-col sm:flex-row sm:items-baseline mb-2">
                                        <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                                            {job.role}
                                        </h3>
                                        <span className="text-neutral-500 mx-2 hidden sm:block">•</span>
                                        <span className="text-lg text-neutral-300">{job.company}</span>
                                    </div>

                                    <p className="text-sm text-neutral-500 font-mono mb-4 md:hidden">{job.duration}</p>

                                    <p className="text-neutral-400 leading-relaxed mb-4">
                                        {job.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {job.skills.map(skill => (
                                            <Badge key={skill} variant="subtle">{skill}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
