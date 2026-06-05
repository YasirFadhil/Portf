import { profile, skills, studies, hobbies } from "@/app/data"
import Image from "next/image"

const categoryLabel: Record<string, string> = {
    frontend: "Frontend",
    networking: "Networking",
    tools: "Tools",
    design: "Design",
    other: "Other",
};

export default function About() {
    const grouped = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, typeof skills>);

    return (
        <>
            {/* Hero */}
            <section className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-12 px-8 max-w-6xl mx-auto">
                <Image
                    src="/image.webp"
                    alt={profile.name}
                    width={260}
                    height={260}
                    className="rounded-full object-cover border-4 border-port-highlight flex-shrink-0"
                />
                <div className="flex flex-col gap-4 md:text-left max-w-lg">
                    <h1 className="font-bold text-4xl">About Me</h1>
                    <h3 className="font-bold text-xl text-port-accent">{profile.tagline}</h3>
                    {profile.bioLong.map((para, index) => (
                        <p key={index} className="text-gray-300 leading-relaxed text-sm">{para}</p>
                    ))}
                    <p className="italic text-port-accent text-sm">&quot;{profile.motto}&quot;</p>
                </div>
            </section>

            {/* Studies — Timeline */}
            <section className="py-16 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-bold text-4xl mb-2 text-port-accent">Studies</h2>
                    <p className="text-gray-400 mb-8">Education history</p>
                    <div className="flex flex-col gap-0 max-w-2xl">
                        {studies.map((study, index) => (
                            <div key={study.name} className="flex gap-4">
                                {/* Timeline line */}
                                <div className="flex flex-col items-center">
                                    <div className="w-3 h-3 rounded-full bg-port-accent mt-1.5 flex-shrink-0" />
                                    {index < studies.length - 1 && (
                                        <div className="w-px flex-1 bg-port-border/50 my-1" />
                                    )}
                                </div>
                                {/* Content */}
                                <div className="pb-8">
                                    <p className="font-bold">{study.name}</p>
                                    <p className="text-port-accent text-xs font-mono mt-0.5">{study.year}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hobbies — Pills */}
            <section className="py-16 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-bold text-4xl mb-2 text-port-accent">Hobbies</h2>
                    <p className="text-gray-400 mb-8">Things I enjoy outside of tech</p>
                    <div className="flex flex-wrap gap-3">
                        {hobbies.map((hobby) => (
                            <span
                                key={hobby.name}
                                className="bg-port-card border border-port-border/50 px-4 py-2 rounded-full text-sm hover:border-port-highlight transition-colors"
                            >
                                {hobby.name}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills — Grouped */}
            <section className="py-16 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-bold text-4xl mb-2 text-port-accent">Skills</h2>
                    <p className="text-gray-400 mb-8">Technologies and tools I work with</p>
                    <div className="flex flex-col gap-8">
                        {Object.entries(grouped).map(([category, items]) => (
                            <div key={category}>
                                <p className="text-port-accent text-xs font-mono uppercase tracking-widest mb-3">
                                    {categoryLabel[category] ?? category}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill) => (
                                        <span
                                            key={skill.name}
                                            className="bg-port-card border border-port-border/50 text-sm px-3 py-1.5 rounded-full hover:border-port-highlight transition-colors"
                                        >
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}