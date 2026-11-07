export type ProjectCategory = "Application" | "Business website" | "Creative portfolio";

export type Project = {
  number: string;
  name: string;
  category: ProjectCategory;
  description: string;
  url: string;
  image?: string;
  sourceUrl?: string;
  visual: "ping" | "plant" | "hfs" | "research" | "logistics" | "writer";
  techStack?: readonly string[];
  features?: readonly string[];
};

export const projects: Project[] = [
  {
    number: "01",
    name: "Ping AI",
    category: "Application",
    description:
      "A full-stack messaging application combining real-time communication with AI-powered conversations.",
    url: "https://glee-s7rr.onrender.com/",
    image: "/images/ping.jpg",
    visual: "ping",
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Zustand",
      "Socket.IO",
      "JWT",
      "HTTP-only cookies",
      "Cloudinary",
      "Tailwind CSS",
      "DaisyUI",
      "OpenRouter API",
    ],
    features: [
      "Real-time messaging",
      "User authentication",
      "AI-powered conversations",
      "Image sharing",
      "Responsive chat interface",
      "Backend API integration",
      "State management",
      "Secure session handling",
    ],
  },
  {
    number: "02",
    name: "AI Plant Companion",
    category: "Application",
    description:
      "An AI-assisted plant management application to identify plants, understand their condition, and manage plant care activities.",
    url: "https://your-s-plant-app.vercel.app/",
    image: "/images/plant%20ai.jpg",
    visual: "plant",
    techStack: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Supabase Edge Functions",
      "Vercel",
      "PlantNet API",
      "AI integrations",
    ],
    features: [
      "User authentication",
      "Plant identification",
      "Personal garden management",
      "Plant profiles",
      "Watering and soil care reminders",
      "Plant Doctor",
      "Growth Check",
      "AI-assisted care recommendations",
      "Cloud-based data management",
    ],
  },
  {
    number: "03",
    name: "HFS Loans",
    category: "Business website",
    description: "A financial services business platform.",
    url: "https://www.hfsloans.in/",
    image: "/images/hfs.jpg",
    visual: "hfs",
  },
  {
    number: "04",
    name: "GK PhD Research Solutions",
    category: "Business website",
    description: "A PhD research centre website.",
    url: "https://gkphdresearchsolutions.com/",
    image: "/images/gkphd.jpg",
    visual: "research",
  },
  {
    number: "05",
    name: "Vishwa Trans Solutions",
    category: "Business website",
    description: "A logistics and transport business website.",
    url: "https://www.vishwatrans.com/",
    image: "/images/vishwa.jpg",
    visual: "logistics",
  },
  {
    number: "06",
    name: "Creative Writer Portfolio",
    category: "Creative portfolio",
    description:
      "A creative personal portfolio for presenting storytelling, poetry, written compositions, and creative work through a distinctive digital experience.",
    url: "https://passionportfolio.vercel.app/",
    image: "/images/passionportfolio.jpg",
    sourceUrl: "https://github.com/userronald/passion_portfolio",
    visual: "writer",
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sahaya-ronaldo-024b2a239/",
  },
  { name: "GitHub", href: "https://github.com/userronald" },
  {
    name: "Instagram",
    href: "https://www.instagram.com/once_in_a_line/",
  },
];

export const contact = {
  email: "sahayaronaldo398@gmail.com",
  phone: "+91 8760316336",
  whatsapp: "https://wa.me/918760316336",
};

export const resumeUrl =
  "https://drive.google.com/uc?export=download&id=17JSUy7YZUKvlIqGpOVBJP22P0aRaWCmS";
