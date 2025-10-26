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

export type Project = {
  name: string;
  image: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
  color: string;
};

export type Resume = {
  name: string;
  role: string;
  location: string;
  email: string;
  bio: string;
  skills: string[];
  experience: Experience[];
  socials: SocialLink[];
  projects: Project[];
};

export const resume: Resume = {
  name: "Sheharyar Khan",
  role: "Web & Agentic AI Developer",
  location: "Karachi, Pakistan",
  email: "sherry258012@gmail.com",
  bio:
    "Developer specializing in Next.js and Agentic AI, building modern web applications with intelligent automation.",
  skills: [
    "TypeScript",
    "JavaScript", 
    "Python",
    "Next.js (App Router)",
    "React",
    "Tailwind CSS",
    "GSAP",
    "Framer Motion",
    "ShadCN UI",
    "PostgreSQL",
    "Supabase",
    "Node.js",
    "REST APIs",
    "Prisma",
    "Sanity",
    "Agentic AI",
    "AI Integrations",
    "OpenAgent SDK",
    "N8N",
    "Git",
    "GitHub",
    "Vercel",
    "VS Code",
    "Cursor",
    "API Integration",
    "Headless CMS",
    "Clerk",
    "PayPal",
    "Stripe",
    "Firebase",
    "NextAuth"
  ],
  experience: [
    {
      company: "AmH Solutions",
      role: "Sales Executive & Web Developer",
      period: "Current",
      summary:
        "Responsible for both web development and sales, creating a hybrid role focused on client-facing technical solutions. Developed and maintained responsive, high-performance websites for clients.",
    },
    {
      company: "Power Mac Solutions",
      role: "Solar Inverter Repairing Engineer",
      period: "2021 - 2024",
      summary:
        "Diagnosed, repaired, and maintained a variety of solar inverter systems. Ensured optimal performance and longevity of solar energy equipment through technical expertise and practical troubleshooting.",
    },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/Sherryk16" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sheharyar-khan10" },
    { label: "Email", href: "mailto:sherry258012@gmail.com" },
  ],
  projects: [
    {
      name: "Cars Analysis Platform",
      description: "Comprehensive car market analysis and comparison tool with advanced data visualization and real-time market insights",
      image: "/projects/carsanalysis.com_.png",
      tags: ["Next.js", "Data Analysis", "Charts", "PostgreSQL"],
      liveUrl: "https://carsanalysis.com",
      githubUrl: "https://github.com/Sherryk16/cars-analysis",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Trading Bot Dashboard",
      description: "AI-powered trading bot with real-time market analysis, automated trading strategies, and performance tracking",
      image: "/projects/sherryk16-trading-bot-main-qmcchg.streamlit.app_.png",
      tags: ["Python", "Streamlit", "Trading", "AI", "Machine Learning"],
      liveUrl: "https://sherryk16-trading-bot-main-qmcchg.streamlit.app",
      githubUrl: "https://github.com/Sherryk16/trading-bot",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Market Place Builder",
      description: "Full-stack marketplace application with user authentication, payment integration, and admin dashboard",
      image: "/projects/market-place-builder-new-app.vercel.app_.png",
      tags: ["Next.js", "Supabase", "Stripe", "TypeScript", "Tailwind"],
      liveUrl: "https://market-place-builder-new-app.vercel.app",
      githubUrl: "https://github.com/Sherryk16/marketplace-builder",
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Sherry XYZ Portfolio",
      description: "Personal portfolio website with dynamic animations, project showcases, and contact integration",
      image: "/projects/sherry-xyz.vercel.app_.png",
      tags: ["Next.js", "GSAP", "Framer Motion", "Three.js"],
      liveUrl: "https://sherry-xyz.vercel.app",
      githubUrl: "https://github.com/Sherryk16/sherry-xyz",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Friendship Test App",
      description: "Interactive friendship compatibility test with personalized results and social sharing features",
      image: "/projects/freindship-test.vercel.app_.png",
      tags: ["React", "Firebase", "CSS3", "Animation"],
      liveUrl: "https://freindship-test.vercel.app",
      githubUrl: "https://github.com/Sherryk16/friendship-test",
      color: "from-pink-500 to-purple-500"
    },
    {
      name: "Sherryz Store Model",
      description: "Marketplace for AI models with integrated testing environment and deployment solutions",
      image: "/projects/sherryz-model-store.vercel.app_.png",
      tags: ["Next.js", "OpenAI", "Python", "Stripe", "Docker"],
      liveUrl: "https://sherryz-model-store.vercel.app",
      githubUrl: "https://github.com/Sherryk16/model-store",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Static Portfolio",
      description: "Clean and minimal portfolio website with optimized performance and SEO",
      image: "/projects/static-persnol-portfolio-milestone2-of-nextjs.vercel.app_.png",
      tags: ["Next.js", "Static Site", "Responsive", "SEO"],
      liveUrl: "https://static-persnol-portfolio-milestone2-of-nextjs.vercel.app",
      githubUrl: "https://github.com/Sherryk16/static-portfolio",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "AMH Solutions Business Portfolio",
      image: "/public/projects/amh-soluitions-22sa.vercel.app_ (1).png",
      description: "A business portfolio website for AMH Solutions, a software house.",
      liveUrl: "https://amh-soluitions-22sa.vercel.app",
      githubUrl: "https://github.com/Sherryk16/AMHSoluitions",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design"],
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "RK Enterprises E-commerce Store",
      image: "/public/projects/www.rkenterpriseshub.com_.png",
      description: "An e-commerce store for RK Enterprises, specializing in furniture.",
      liveUrl: "https://www.rkenterpriseshub.com",
      githubUrl: "https://github.com/Sherryk16/RK-Enterprises",
      tags: ["Next.js", "E-commerce", "Stripe", "SEO", "TypeScript"],
      color: "from-green-500 to-teal-500",
    },
  ],
};



