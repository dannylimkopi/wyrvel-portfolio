export const siteData = {
  name: "Danny Lim",
  title: "Full-Stack Developer & AI Automation Specialist",
  tagline: "I build fast, clean web apps and AI-powered automations that save businesses hours every week.",
  email: "wyrvel@gmail.com",
  fiverr: "https://www.fiverr.com/felysedaniskur",
  upwork: "https://www.upwork.com/freelancers/dannylimkopi",

  skills: {
    "Languages": ["JavaScript", "TypeScript", "Python", "HTML", "CSS", "SQL"],
    "Frontend": ["React", "Next.js", "Tailwind CSS", "Zustand"],
    "Backend": ["Node.js", "Express", "REST APIs", "PostgreSQL", "Prisma", "Drizzle"],
    "Automation": ["n8n", "Webhooks", "API Integration", "OpenAI API", "LangChain"],
    "DevOps": ["Docker", "Vercel", "Git", "Linux", "CI/CD"],
    "Tools": ["VS Code", "Cursor", "Figma", "Postman", "Obsidian"],
  },

  experience: [
    {
      role: "Full-Stack Developer & AI Automation Specialist",
      company: "Freelance",
      period: "2024 – Present",
      description:
        "Building modern web applications and AI-powered business automation workflows for clients worldwide. Specialising in Next.js, React, TypeScript, and n8n workflow orchestration.",
      tags: ["Next.js", "React", "TypeScript", "n8n", "OpenAI", "PostgreSQL"],
    },
    {
      role: "Real Estate Consultant",
      company: "PropNex Realty",
      period: "2019 – Present",
      description:
        "5.0-star rated consultant handling end-to-end property transactions. Built client management systems, market analysis tools, and automated follow-up pipelines.",
      tags: ["Client Relations", "Negotiation", "Market Analysis", "5.0★ Rating"],
    },
    {
      role: "Production Superintendent",
      company: "Keppel FELS Ltd",
      period: "2012 – 2016",
      description:
        "Led teams of 20-30 across hull production pipeline operations at one of Asia's largest offshore engineering firms. Deployed overseas to Nantong, China for 1.5 years to manage panel line operations independently. Contributed to automation projects improving production efficiency.",
      tags: ["Team Leadership", "Project Management", "Automation", "Overseas Deployment"],
    },
  ],

  projects: [
    {
      title: "AI Automation Pipeline — WhatsApp to CRM",
      description:
        "Production automation system for a real estate agent drowning in 100+ daily WhatsApp messages. Two n8n workflows: WhatsApp Auto-Capture (5 nodes) and AI Client Intelligence (26 nodes) — running every 6 hours, scoring leads as HOT/WARM/COLD via OpenAI, auto-creating follow-up tasks and calendar events.",
      tags: ["n8n", "OpenAI API", "REST API", "Docker", "WhatsApp"],
      type: "Automation",
      images: ["/projects/demo1-automation.png", "/projects/demo1-workflow.png"],
      video: "/projects/demo1-video.mp4",
      results: ["10+ hrs/week saved", "Zero missed leads", "108 auto-generated tasks"],
    },
    {
      title: "Custom CRM — Built for Real Estate",
      description:
        "Built a purpose-built CRM for a Singapore real estate agent. Contact-centric model with property tracking (HDB/Condo/Landed), WhatsApp auto-capture, AI lead scoring, and 108 auto-generated follow-up tasks with deadline tracking.",
      tags: ["Next.js 15", "TypeScript", "PostgreSQL", "Drizzle ORM", "Turborepo"],
      type: "Web App",
      images: ["/projects/demo2-screenshot-1.png", "/projects/demo2-screenshot-2.png", "/projects/demo2-screenshot-5.png"],
      video: "/projects/demo2-video.mp4",
      results: ["511 contacts managed", "12+ pages built", "12+ API endpoints"],
    },
  ],

  services: [
    {
      title: "AI Workflow Automation",
      description: "Custom n8n workflows with AI integration — lead qualification, CRM sync, email automation, data processing.",
      price: "From $75",
    },
    {
      title: "Next.js Web Applications",
      description: "Modern, responsive web apps built with Next.js and React. Landing pages, dashboards, SaaS frontends.",
      price: "From $150",
    },
    {
      title: "API Integrations",
      description: "Connect your apps, services, and databases so data flows automatically where it needs to go.",
      price: "From $100",
    },
    {
      title: "Bug Fixes & Features",
      description: "Quick turnaround on React/Next.js codebases. Diagnose fast, fix cleanly, document changes.",
      price: "From $50",
    },
  ],
};
