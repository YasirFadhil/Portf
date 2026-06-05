import { projects } from "../data";

export default function Projects() {
    return (
        <section className="py-24 px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="font-bold text-4xl mb-2">Projects</h1>
                <p className="text-gray-400 mb-12">Things I&apos;ve built and worked on</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                        <div key={project.name} className="bg-port-card border border-port-border/50 rounded-lg p-5 flex flex-col justify-between hover:border-port-highlight transition-colors">
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-port-border font-mono text-xs">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-gray-500 text-xs font-mono">{project.year}</span>
                                </div>
                                <h2 className="font-bold text-base leading-snug mb-2">{project.name}</h2>
                                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                            </div>
                            <div className="mt-4">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs bg-port-accent/10 text-port-accent border border-port-border px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-port-accent text-sm hover:text-port-highlight transition-colors"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}