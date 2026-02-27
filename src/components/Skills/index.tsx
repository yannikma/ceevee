"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/dummy";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

export default function Skills() {
    return (
        <section className="py-20" id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <SectionHeader number="02" title="Skills & Expertise" />

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
                                    <Badge key={skill} variant="solid">{skill}</Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
