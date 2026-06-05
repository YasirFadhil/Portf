import Link from "next/link";
import { projects } from "../data";

export default function HomeProjects() {
    return (
        <section className="py-16 px-8">
            <h2 className="font-bold text-4xl mb-2 text-center text-port-accent">Projects</h2>
            <p className="text-gray-400 text-center mb-8">A selection of things I&apos;ve built</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {projects.slice(0, 4).map((project) => (
                    <div key={project.name} className="bg-port-card border border-port-border/50 rounded-lg p-5 flex flex-col justify-between hover:border-port-highlight transition-colors">
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-bold text-lg">{project.name}</h3>
                                <span className="text-gray-500 text-sm">{project.year}</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                        </div>
                        <div className="mt-4">
                            <div className="flex flex-wrap gap-2 mb-3">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs bg-port-accent/10 text-port-accent border border-port-border px-2 py-1 rounded-full">{tag}</span>
                                ))}
                            </div>
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-port-accent text-sm hover:text-port-highlight transition-colors">
                                View Project →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <Link href="/projects">
                    <button className="bg-port-accent text-port-dark font-bold px-6 py-2 rounded-lg hover:bg-port-highlight transition-colors">
                        View All Projects →
                    </button>
                </Link>
            </div>
        </section>
    )
}