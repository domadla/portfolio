type PortfolioImage = {
  src: string;
  alt: string;
};

type Project = {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  details: string;
};

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
  interests: [
    "Analytical",
    "Creative",
    "Dependable",
  ],
  images: {
    portrait: {
      src: "/images/SHSPic.JPG",
      alt: "Portrait of Edgar Dominic Madlangbayan",
    },
  } satisfies Record<string, PortfolioImage>,
  projects: [
    {
      id: "project-one",
      name: "Common Ground",
      category: "Product design",
      year: "2026",
      description: "Making room for better connections.",
      details:
        "Sample project: a community platform exploring how shared interests can bring people together. Replace this with your challenge, role, process, and outcome.",
    },
    {
      id: "project-two",
      name: "Forma",
      category: "Design & development",
      year: "2026",
      description: "A simpler home for everyday ideas.",
      details:
        "Sample project: a minimal workspace for capturing ideas. Replace this with the problem you solved, your contribution, the technology used, and what you learned.",
    },
    {
      id: "project-three",
      name: "Little Interactions",
      category: "Creative experiments",
      year: "2025",
      description: "Small details. A little more delight.",
      details:
        "Sample project: a collection of interface experiments. Add the purpose of each experiment, your approach, and a link to a working demo when available.",
    },
  ] satisfies Project[],
  // Null URLs render as plain text, so unfinished placeholders are never broken links.
  email: null as string | null,
  socials: [
    { label: "GitHub", href: null as string | null },
    { label: "LinkedIn", href: null as string | null },
  ],
  copyrightYear: "2026",
};
