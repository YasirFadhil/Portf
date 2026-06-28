import Link from "next/link";
import { socialMedia, profile, skills } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contacts", label: "Contacts" },
];

const socialIcons: Record<string, IconDefinition> = {
    Instagram: faInstagram,
    X: faXTwitter,
    Github: faGithub,
};

export default function Footer() {
    const topSkills = skills.slice(0, 6);

    return (
        <footer className="relative overflow-hidden border-t border-port-border/30">
            {/* Decorative gradient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-port-highlight/60 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[80px] bg-port-highlight/5 blur-3xl rounded-full" />

            <div className="relative max-w-6xl mx-auto px-8 pt-16 pb-8">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">

                    {/* Brand Column */}
                    <div className="md:col-span-5 flex flex-col gap-4">
                        <Link href="/" className="font-mono font-bold text-2xl text-port-accent hover:text-port-highlight transition-colors w-fit">
                            ysirnf_
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            {profile.tagline}
                        </p>
                        <blockquote className="border-l-2 border-port-highlight/40 pl-4 mt-2">
                            <p className="text-gray-500 text-sm italic">
                                &ldquo;{profile.motto}&rdquo;
                            </p>
                        </blockquote>

                        {/* Social Icons */}
                        <div className="flex gap-3 mt-4">
                            {socialMedia.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-10 h-10 rounded-lg bg-port-card border border-port-border/40 flex items-center justify-center hover:border-port-highlight/60 hover:bg-port-highlight/10 transition-all duration-300"
                                    title={social.name}
                                >
                                    <FontAwesomeIcon
                                        icon={socialIcons[social.name]}
                                        className="w-4 h-4 text-gray-400 group-hover:text-port-highlight transition-colors"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div className="md:col-span-3">
                        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-port-accent mb-5">
                            Navigation
                        </h3>
                        <ul className="flex flex-col gap-2.5">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="group text-gray-400 text-sm hover:text-port-accent transition-colors flex items-center gap-2"
                                    >
                                        <span className="w-0 group-hover:w-3 h-[1px] bg-port-highlight transition-all duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack Column */}
                    <div className="md:col-span-4">
                        <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-port-accent mb-5">
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {topSkills.map((skill) => (
                                <span
                                    key={skill.name}
                                    className="px-3 py-1.5 text-xs font-mono rounded-md bg-port-card border border-port-border/40 text-gray-400 hover:text-port-highlight hover:border-port-highlight/40 transition-all duration-300 cursor-default"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>

                        {/* Status badge */}
                        <div className="mt-6 flex items-center gap-2.5">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                            </span>
                            <span className="text-xs text-gray-500 font-mono">
                                Open to opportunities
                            </span>
                        </div>

                        {/* Location */}
                        <div className="mt-3 flex items-center gap-2.5">
                            <span className="text-gray-600 text-sm">📍</span>
                            <span className="text-xs text-gray-500 font-mono">
                                Klaten, Indonesia
                            </span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-port-border/50 to-transparent mb-6" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs font-mono">
                        &copy; {new Date().getFullYear()} {profile.name}
                    </p>
                    <p className="text-gray-600 text-xs font-mono">
                        Built with{" "}
                        <span className="text-port-highlight/80">Next.js</span>{" "}
                        &amp;{" "}
                        <span className="text-port-highlight/80">Tailwind CSS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}