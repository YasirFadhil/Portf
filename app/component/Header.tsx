'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/certifications", label: "Certifications" },
    { href: "/contacts", label: "Contacts" },
];

export default function Header(){
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-port-dark/80 backdrop-blur-md border-b border-port-border/30">
            <nav className="flex justify-between items-center px-8 py-4 max-w-6xl mx-auto">
                <Link href="/" className="font-bold text-lg text-port-accent font-mono">
                    ysirnf_
                </Link>

                {/* Desktop nav */}
                <ul className="hidden md:flex gap-1">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                                    pathname === link.href
                                        ? "text-port-accent border-b-2 border-port-accent"
                                        : "text-gray-300 hover:text-port-accent"
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile hamburger button */}
                <button
                    className="md:hidden text-xl text-gray-300 hover:text-port-accent transition-colors w-8 h-8 flex items-center justify-center"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </nav>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-port-border/30 bg-port-dark px-8 py-4">
                    <ul className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`block px-3 py-2.5 rounded-md text-sm transition-colors ${
                                        pathname === link.href
                                            ? "text-port-accent bg-port-card"
                                            : "text-gray-300 hover:text-port-accent hover:bg-port-card"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}
