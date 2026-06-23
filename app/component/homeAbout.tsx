import { profile, hitungUmur } from "../data";
import Link from "next/link";

const stats = [
    { label: "Age", value: `${hitungUmur(profile.date)} years old` },
    { label: "Location", value: "Klaten, Indonesia" },
    { label: "Status", value: "Pursuing IT Degree" },
    { label: "Job", value: "-" },
];

export default function HomeAbout() {
    return (
        <section className="py-16 px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="font-bold text-4xl mb-2 text-port-accent">About Me</h2>
                <p className="text-gray-400 mb-8">A quick snapshot</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-port-card border border-port-border/50 rounded-lg p-5 text-center hover:border-port-highlight transition-colors">
                            <p className="text-port-accent text-xs font-mono uppercase tracking-widest mb-2">{stat.label}</p>
                            <p className="font-bold text-sm">{stat.value}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end mt-4">
                    <Link href="/about" className="text-port-accent text-sm hover:text-port-highlight transition-colors">
                        Read full story →
                    </Link>
                </div>
            </div>
        </section>
    )
}
