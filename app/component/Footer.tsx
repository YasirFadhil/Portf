import { socialMedia } from "../data";
import { profile } from "../data";

export default function Footer() {
    return (
        <footer className="p-8 border-t border-port-border/30">
            <div className="justify-center items-center text-center">
                <p className="mb-2 text-gray-400">&copy; {new Date().getFullYear()} {profile.name}</p>
                {socialMedia.map((social) => (
                    <a className="px-4 text-port-accent hover:text-port-highlight transition-colors" key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                        {social.name}
                    </a>
                ))}
            </div>
        </footer>
    );
}