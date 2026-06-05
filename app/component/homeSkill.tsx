import { skills } from "@/app/data";

const categoryLabel: Record<string, string> = {
    frontend: "Frontend",
    networking: "Networking",
    tools: "Tools",
    design: "Design",
    other: "Other",
};

export default function HomeSkill() {
    const grouped = skills.reduce((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
    }, {} as Record<string, typeof skills>);

    return (
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
    )
}