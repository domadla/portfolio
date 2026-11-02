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
  showWebsite: boolean;
};

const webMedia: ProjectMedia[] = [
  {
    type: "image",
    src: "/images/Iskkolar-Web.png",
    alt: "ISKKOLAR web application screenshot",
  },
  {
    type: "image",
    src: "/images/Admin-Web.png",
    alt: "ISKKOLAR web admin screenshot",
  },
  {
    type: "video",
    src: "/videos/Integra_WebDemo.mp4",
    alt: "ISKKOLAR web application demonstration",
    poster: "/images/Iskkolar-Web.png",
  },
];

const mobileMedia: ProjectMedia[] = [
  {
    type: "image",
    src: "/images/Iskkolar-Mobile.png",
    alt: "ISKKOLAR mobile application screenshot",
  },
  {
    type: "image",
    src: "/images/Scholar-Mobile.png",
    alt: "ISKKOLAR mobile scholar screenshot",
  },
  {
    type: "video",
    src: "/videos/Integra_MobileDemo.mp4",
    alt: "ISKKOLAR mobile application demonstration",
    poster: "/images/Iskkolar-Mobile.png",
  },
];

// Replace sample content here. Components only handle presentation.
export const portfolio = {
  initials: "Edgar Dominic Madlangbayan",
  name: ["Edgar Dominic", "Madlangbayan"],
  role: "BS Information Technology with specialization in Web and Mobile Development",
  location: "Makati, Philippines",
  introduction: "Keep creating. Keep learning.",
  description:
    "Always looking to learn and improve.",
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
      media: webMedia,
      siteUrl: "https://www.kkfi-iskkolar.org",
      showWebsite: true,
      name: "ISKKOLAR Web",
      category: "Capstone Project | Backend Developer",
      year: "2026",
      description: "Scholarship Management for an NGO | Web Application",
      details:
        "ISKKOLAR is a web and mobile-based scholarship application and scholar management system developed for Kapatiran-Kaunlaran Foundation Inc. (KKFI). It supports digital scholarship applications, scholar records management, document compliance monitoring, and financial assistance tracking. The system uses Optical Character Recognition (OCR) and Natural Language Processing (NLP) to extract, process, and validate text from submitted scholarship documents, helping KKFI personnel manage operations efficiently.",
    },
    {
      id: "project-two",
      media: mobileMedia,
      siteUrl: null as string | null,
      showWebsite: false,
      name: "ISKKOLAR Mobile",
      category: "Capstone Project | Backend Developer",
      year: "2026",
      description: "Scholarship Management for an NGO | Mobile Application",
      details:
        "ISKKOLAR Mobile is an app to support the accessibility of its web application. Allowing scholars and applicants to access the system features",
    },
  ] satisfies Project[],
  contact: {
    personalEmail: "domadlangbayan@gmail.com",
    academicEmail: "eamadlangbayan@fit.edu.ph",
    address: "Makati, Philippines" as string | null,
  },
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/domadla/",
    },
    { label: "Facebook", href: "https://www.facebook.com/domadla" },
    { label: "GitHub", href: "https://github.com/domadla" },
  ],
  copyrightYear: "2026",
};
