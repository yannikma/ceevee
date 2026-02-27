import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <main className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
        <Experience />
        <Skills />
        <Projects />

        <footer className="py-12 mt-20 border-t border-neutral-800 text-center">
          <p className="text-neutral-500 text-sm">
            Designed & Built thoughtfully for the open web.
          </p>
          <p className="text-neutral-600 font-mono text-xs mt-2">
            Built with Next.js & Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  );
}
