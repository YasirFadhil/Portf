import { certs, achievements } from "../data";

export default function Certifications() {
    return (
        <>
            <section className="py-24 px-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="font-bold text-4xl mb-2">Certifications</h1>
                    <p className="text-gray-400 mb-12">Courses and credentials I&apos;ve completed</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {certs.map((cert) => (
                            <div key={cert.name} className="bg-port-card border border-port-border/50 rounded-lg p-5 hover:border-port-highlight transition-colors">
                                <p className="text-port-accent text-xs font-mono uppercase tracking-widest mb-2">{cert.year}</p>
                                <h2 className="font-bold text-base leading-snug mb-1">{cert.name}</h2>
                                <p className="text-gray-400 text-sm">{cert.issuer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-bold text-4xl mb-2 text-port-accent">Achievements</h2>
                    <p className="text-gray-400 mb-8">Competitions and recognitions</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {achievements.map((achievement) => (
                            <div key={achievement.name} className="bg-port-card border border-port-border/50 rounded-lg p-5 hover:border-port-highlight transition-colors">
                                <p className="text-port-accent text-xs font-mono uppercase tracking-widest mb-2">{achievement.year}</p>
                                <h2 className="font-bold text-base">{achievement.name}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}