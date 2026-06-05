import { profile } from "@/app/data"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return(
        <section className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-12 px-8 max-w-6xl mx-auto">
            {/* Left: Text */}
            <div className="flex flex-col gap-6 flex-1">
                <div>
                    <p className="text-port-accent text-sm font-mono mb-2 mt-8 tracking-widest uppercase">Hi, I&apos;m</p>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">{profile.name}</h1>
                    <p className="text-xl text-port-highlight mt-3">{profile.tagline}</p>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-md">{profile.bio}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-mono">
                    <span>Klaten, Indonesia</span>
                    <span>SMK N 1 Klaten</span>
                    <span>NixOS</span>
                </div>
                <div className="flex flex-wrap gap-3">
                    <a
                        href="/CV.pdf"
                        download
                        className="bg-port-accent text-port-dark font-bold px-6 py-3 rounded-lg hover:bg-port-highlight transition-colors"
                    >
                        Download CV
                    </a>
                    <Link
                        href="/contacts"
                        className="border border-port-accent text-port-accent px-6 py-3 rounded-lg hover:bg-port-accent hover:text-port-dark transition-colors"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>

            {/* Right: Photo */}
            <div className="flex-shrink-0">
                <Image
                    src="/image.webp"
                    alt={profile.name}
                    width={280}
                    height={280}
                    priority
                    className="rounded-full object-cover border-4 border-port-highlight"
                />
            </div>
        </section>
    )
}
