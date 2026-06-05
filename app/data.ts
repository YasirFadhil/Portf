// Profile

export function hitungUmur (tanggalLahir: string): number {
    const lahir = new Date(tanggalLahir)
    const sekarang = new Date() 
    return sekarang.getFullYear() - lahir.getFullYear()
}

export type Profile = {
    name: string;
    date: string;
    bio: string;
    bioLong: string[];
    tagline: string;
    motto: string;
};

export const profile: Profile = {
    name: "Muchammad Yassir Nur Fadillah",
    date: "2007-04-04",
    bio: "Hi, I'm Yassir — a fresh SMK graduate from Klaten, Indonesia. I studied Computer and Network Engineering at SMK Negeri 1 Klaten, where I discovered Linux and haven't looked back since. Currently running NixOS, building web projects, and working toward a degree in Information Technology.",
    bioLong: [
        "My name is Muchammad Yassir Nur Fadillah — called Fadhil at home, Yassir among friends. I was born in Klaten on April 4, 2007, and I just graduated from SMK Negeri 1 Klaten in May 2026, majoring in Computer and Network Engineering.",
        "My curiosity started early. Back in elementary school, I would take apart old RC cars to salvage their motors, build small boats powered by those motors, and wire LED strips onto my bicycle. I was drawn to making things work — understanding how things connect.",
        "By 9th grade, that curiosity shifted toward computers. When I entered SMK and got my own laptop, a friend introduced me to Linux. That changed everything. I've been exploring it ever since — currently running NixOS as my daily driver. Now, I'm expanding into web development and building projects to grow my skills.",
        "Currently, I'm working toward university, pursuing Information Technology through the independent admission pathway."
    ],
    tagline: "Fresh Graduate | Linux Enthusiast | Web Dev Enthusiast",
    motto: "Everything starts with nothing to thing"
};

// Skills

export type Skills = {
    name: string;
    category: "frontend" | "networking" | "tools" | "design" | "other";
}

export const skills: Skills[] = [
    // Code
    {name: "HTML", category: "frontend"},
    {name: "CSS", category: "frontend"},
    
    // Design & Tools
    {name: "Canva", category: "design"},
    {name: "Word", category: "tools"},
    {name: "PowerPoint", category: "tools"},
        
    // Networking
    {name: "Winbox", category: "networking"},
    {name: "Mikrotik", category: "networking"},
    {name: "Cisco Packet Tracer", category: "networking"},
    {name: "LAN / Crimping", category: "networking"},
    {name: "Fiber Optic", category: "networking"},
    {name: "Debian Server", category: "networking"},
];

// Media Socials

export type SocialMedia = {
    name: string;
    url: string;
}

export const socialMedia: SocialMedia[] = [
    {name: "Instagram", url: "https://www.instagram.com/ysirnf_"},
    {name: "X", url: "https://x.com/ysirnf_"},
    {name: "Github", url: "https://github.com/YasirFadhil"},
];

// Certifications

export type Certs = {
    name: string;
    issuer: string;
    year: number;
}

export const certs: Certs[] = [
    {name: "TOEIC", issuer: "ETS", year: 2025},
    {name: "UKK", issuer: "SMK NEGERI 1 KLATEN", year: 2026},
    {name: "PKL", issuer: "SMK NEGERI 1 KLATEN", year: 2026},
    {name: "TKA", issuer: "Kemendikdasmen RI", year: 2026},
];

// Achievements

export type Achievements = {
    name: string;
    year: number;
}

export const achievements: Achievements[] = [
    {name: "KSM 2019 - Regional 2nd Place", year: 2019},
    {name: "KSM 2019 - Provincial Participant", year: 2019},
];

// Projects

export type Projects = {
    name: string;
    year: number;
    description: string;
    tags: string[];
    url: string;
    
};

export const projects: Projects[] = [
    {
        name: "Historical Website", 
        year: 2024, 
        description: "A school project make website, this web contain information about history of Indonesia from colonial to independence.",
        tags: ["HTML", "CSS", "JavaScript"],
        url: "https://github.com/YasirFadhil/nyobo"
    },
    {
        name: "Health Care Web", 
        year: 2025, 
        description: "A school project make website, this web contain information about healthy food.",
        tags: ["HTML", "Tailwind", "JavaScript"],
        url: "https://github.com/YasirFadhil/web2"
    },
    {
        name: "AI Chatbot", 
        year: 2025, 
        description: "Web Ai based chatbot, just some random prject I did using Gemini API.",
        tags: ["HTML", "CSS", "JavaScript", "Gemini API"],
        url: "https://github.com/YasirFadhil/jashb"
    },
    {
        name: "Cloud Storage Website",
        year: 2025, 
        description: "Another random project I did.",
        tags: ["HTML", "CSS", "JavaScript", "Python"],
        url: "https://github.com/YasirFadhil/person"
    },
    {
        name: "First Portofolio Website",
        year: 2025, 
        description: "My first portofolio website, I made this website because I was bored.",
        tags: ["Astro", "Tailwind", "JavaScript"],
        url: "https://github.com/YasirFadhil/profile"
    },
    {
        name: "NIXKs",
        year: 2026,
        description: "My main NixOS configuration for daily driver",
        tags: ["Nix", "NixOS", "Home Manager", "Flakes", "Linux"],
        url: "https://github.com/YasirFadhil/NIXKs"
    },
    {
        name: "Photography Collection",
        year: 2024,
        description: "A personal collection of night sky, moon, sunset, and landscape photography taken around Klaten.",
        tags: ["Photography", "Night Sky", "Landscape", "Sunset"],
        url: "https://drive.google.com/drive/folders/1NQGOB9rSY6X5dqPjr2Ret2H0-uHh_8c-"
    }
];

// Study

export type Studies = {
    name: string;
    year: string;
} 

export const studies: Studies[] = [
    {
        name: "SD Negeri 1 Patran", 
        year: "2014-2017"
    },
    {
        name: "MI Negeri 1 Klaten",
        year: "2017-2020"
    },
    {
        name: "SMP Negeri 1 Klaten",
        year: "2020-2023"
    },
    {
        name: "SMK Negeri 1 Klaten",
        year: "2023-2026"
    }
];

// Hobbies

export type Hobbies = {
    name: string;
}

export const hobbies: Hobbies[] = [
    {name: "Linux"},
    {name: "Explore Technology"},
    {name: "Coding"},
    {name: "Listening Music"},
    {name: "Gaming"},
    {name: "Reading"},
    {name: "Photography"}
];
