type Skill = {
  name: string;
  icon: string | null;
  monochrome?: boolean;
};

type SkillGroup = {
  id: string;
  title: string;
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Programming Languages",
    items: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "PHP", icon: "php" },
      { name: "Python", icon: "python" },
      { name: "C++", icon: "cplusplus" },
      { name: "Java", icon: "java" },
      { name: "Kotlin", icon: "kotlin" },
      { name: "Swift", icon: "swift" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    items: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "React", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "shadcn/ui", icon: "shadcnui", monochrome: true },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express", monochrome: true },
      { name: "CodeIgniter", icon: "codeigniter" },
      { name: "RESTful API Development", icon: null },
    ],
  },
  {
    id: "databases",
    title: "Databases & Backend Services",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "Supabase", icon: "supabase" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    items: [
      { name: "Google Cloud Platform", icon: "googlecloud" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github", monochrome: true },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel", monochrome: true },
      { name: "Render", icon: "render", monochrome: true },
      { name: "Photoshop", icon: "photoshop" },
    ],
  },
];
