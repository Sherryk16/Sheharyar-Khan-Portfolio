export type SocialLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
};

export type Skill = {
  name: string;
  icon: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
};

export type Resume = {
  name: string;
  role: string;
  location: string;
  email: string;
  bio: string;
  skills: Skill[];
  experience: Experience[];
  socials: SocialLink[];
};

export const resume: Resume = {
  name: "Sheharyar Khan",
  role: "Web & Agentic AI Developer",
  location: "Karachi, Pakistan",
  email: "sherry258012@gmail.com",
  bio:
    "Creative developer crafting modern web apps and agentic AI experiences. I blend performance, accessibility, and striking visuals to build products people love.",
  skills: [
    // Frontend Technologies
    { name: "JavaScript", icon: "javascript", category: "Frontend", level: "Expert" },
    { name: "TypeScript", icon: "typescript", category: "Frontend", level: "Advanced" },
    { name: "React", icon: "react", category: "Frontend", level: "Expert" },
    { name: "Next.js", icon: "nextjs", category: "Frontend", level: "Advanced" },
    { name: "HTML5", icon: "html5", category: "Frontend", level: "Expert" },
    { name: "CSS3", icon: "css3", category: "Frontend", level: "Expert" },
    { name: "Tailwind CSS", icon: "tailwindcss", category: "Frontend", level: "Advanced" },
    
    // Backend & Database
    { name: "Node.js", icon: "nodejs", category: "Backend", level: "Advanced" },
    { name: "Python", icon: "python", category: "Backend", level: "Intermediate" },
    { name: "PostgreSQL", icon: "postgresql", category: "Database", level: "Advanced" },
    { name: "MongoDB", icon: "mongodb", category: "Database", level: "Intermediate" },
    
    // Cloud & Services
    { name: "AWS", icon: "amazonwebservices", category: "Cloud", level: "Intermediate" },
    { name: "Vercel", icon: "vercel", category: "Cloud", level: "Advanced" },
    { name: "Supabase", icon: "supabase", category: "Services", level: "Advanced" },
    
    // Development Tools
    { name: "Git", icon: "git", category: "Tools", level: "Advanced" },
    { name: "GitHub", icon: "github", category: "Tools", level: "Advanced" },
    { name: "VS Code", icon: "vscode", category: "Tools", level: "Expert" },
    { name: "Docker", icon: "docker", category: "Tools", level: "Intermediate" },
    
    // Libraries & Frameworks
    { name: "GSAP", icon: "gsap", category: "Libraries", level: "Advanced" },
    { name: "Framer Motion", icon: "framer", category: "Libraries", level: "Advanced" },
    { name: "Prisma", icon: "prisma", category: "Libraries", level: "Intermediate" },
    
    // Payment & Auth
    { name: "Stripe", icon: "stripe", category: "Services", level: "Intermediate" },
    { name: "Clerk", icon: "clerk", category: "Services", level: "Intermediate" },
    
    // AI & Automation
    { name: "OpenAI", icon: "openai", category: "AI", level: "Intermediate" },
    { name: "N8N", icon: "n8n", category: "AI", level: "Intermediate" },
  ],
  experience: [
    {
      company: "Freelance",
      role: "Full‑stack / AI Developer",
      period: "2023 — Present",
      summary:
        "Delivering animated, high‑performance web apps, building agentic workflows, and integrating AI APIs to solve real problems.",
    },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/Sherryk16" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sheharyar-khan10" },
    { label: "Email", href: "mailto:sherry258012@gmail.com" },
  ],
};


