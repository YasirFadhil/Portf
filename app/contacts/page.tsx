import { socialMedia, profile } from "../data";

export default function Contacts() {
    return (
        <section className="min-h-screen flex items-center px-8 py-16">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                {/* Left: Info */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="font-bold text-4xl mb-2">Get in Touch</h1>
                        <p className="text-port-accent font-mono text-sm">Let&apos;s connect</p>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                        Have a question, project idea, or just want to say hi? Feel free to reach out — I&apos;ll get back to you as soon as I can.
                    </p>
                    <div className="flex flex-col gap-3">
                        <p className="text-xs font-mono uppercase tracking-widest text-port-accent">Find me on</p>
                        {socialMedia.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-port-accent transition-colors flex items-center gap-2"
                            >
                                <span className="text-port-border">→</span>
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right: Form */}
                <div className="bg-port-card border border-port-border/50 rounded-xl p-8">
                    <form action="https://formspree.io/f/xqajljbq" method="POST" className="flex flex-col gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-mono uppercase tracking-widest text-port-accent">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="bg-port-dark border border-port-border/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-port-accent transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-mono uppercase tracking-widest text-port-accent">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="bg-port-dark border border-port-border/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-port-accent transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-mono uppercase tracking-widest text-port-accent">Message</label>
                            <textarea
                                name="message"
                                rows={5}
                                required
                                className="bg-port-dark border border-port-border/50 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-port-accent transition-colors resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-port-accent text-port-dark font-bold py-3 rounded-lg hover:bg-port-highlight transition-colors mt-2"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}
