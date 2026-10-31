export type PortfolioImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  details: string;
};

// Replace sample content here. Components only handle presentation.
export const portfolio = {
  initials: "Dominic",
  name: ["Edgar Dominic", "Madlangbayan"],
  role: "BS Information Technology with specialization in Web and Mobile Development",
  location: "Makati, Philippines",
  availability: "Open to opportunities",
  introduction: "A curious mind. A thoughtful maker.",
  description:
    "Designer and developer exploring the space between thoughtful design and meaningful digital experiences.",
  heroNote: "",
  about: [
    "Hey, I’m Alex — a designer and developer drawn to the space where thoughtful design meets everyday life.",
    "I’m currently a university student, learning by making and turning small observations into useful digital experiences. I care about the details, the people behind the screen, and making things feel a little more human.",
    "Away from my desk, you’ll find me collecting little moments, exploring unfamiliar streets, or chasing the next good cup of coffee.",
  ],
  interests: [
    "Thoughtful interfaces",
    "Creative development",
    "Everyday observations",
  ],
  images: {
    portrait: {
      src: "/images/SHSPic.JPG",
      alt: "Portrait of Edgar Dominic Madlangbayan",
    },
    landscape: {
      src: "/images/landscape.svg",
      alt: "Placeholder illustration of layered mountains beneath the sun",
    },
    workspace: {
      src: "/images/workspace.svg",
      alt: "Placeholder illustration of a quiet desk with a lamp and notebook",
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
  resumeUrl: null as string | null,
  copyrightYear: "2026",
};
