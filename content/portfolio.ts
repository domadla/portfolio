type PortfolioImage = {
  src: string;
  alt: string;
};

export type ProjectMedia =
  | { type: "image"; src: string; alt: string }
  | {
    type: "video";
    src: string;
    alt: string;
    poster?: string;
    captions?: string;
  };

type Project = {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  details: string;
  media: ProjectMedia[];
  siteUrl: string | null;
};

// Reuse these sample assets until each project has its own screenshots and demo.
const placeholderMedia: ProjectMedia[] = [
  {
    type: "image",
    src: "/images/project-placeholder-01.svg",
    alt: "Project image placeholder 1: Your next great idea, with a blue sphere",
  },
  {
    type: "image",
    src: "/images/project-placeholder-02.svg",
    alt: "Project image placeholder 2: Made with intention, with layered squares",
  },
  {
    type: "video",
    src: "/videos/placeholder-demo.mp4",
    alt: "Sample video placeholder showing flowers moving in the breeze",
    poster: "/images/project-placeholder-02.svg",
  },
];

// Replace sample content here. Components only handle presentation.
export const portfolio = {
  initials: "Dominic Madlangbayan",
  name: ["Edgar Dominic", "Madlangbayan"],
  role: "BS Information Technology with specialization in Web and Mobile Development",
  location: "Makati, Philippines",
  introduction: "Keep creating. Keep learning.",
  description:
    "Designer and developer exploring the space between thoughtful design and meaningful digital experiences.",
  about: [
    "I'm Dominic a 4th-year Bachelor of Science in Information Technology student specializing in Web and Mobile Application Development.",
    "I learn through starting and finishing projects. Whether its working with a team or alone, I make sure that I deliver my work with the best I can.",
    "FEU Institute of Technology | Bachelor of Science in Information Technology, Specialization in Web and Mobile Applications | Expected July 2027",
  ],
  interests: ["Analytical", "Creative", "Dependable"],
  images: {
    portrait: {
      src: "/images/SHSPic.JPG",
      alt: "Portrait",
    },
  } satisfies Record<string, PortfolioImage>,
  projects: [
    {
      id: "project-one",
      media: placeholderMedia,
      siteUrl: null as string | null,
      name: "ISKKOLAR",
      category: "Capstone Project",
      year: "2026",
      description: "Scholarship Management for an NGO | Web & Mobile Application",
      details:
        "Sample project: a community platform exploring how shared interests can bring people together. Replace this with your challenge, role, process, and outcome.",
    },
  ] satisfies Project[],
  contact: {
    personalEmail: "domadlangbayan@gmail.com",
    academicEmail: "eamadlangbayan@fit.edu.ph",
    address: "Makati, Philippines" as string | null,
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/edgar-dominic-madlangbayan-3930b1381/" },
    { label: "Facebook", href: "https://www.facebook.com/domadla" },
    { label: "GitHub", href: "https://github.com/domadla" },
  ],
  copyrightYear: "2026",
};
