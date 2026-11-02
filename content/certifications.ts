type Certification = {
  id: string;
  name: string;
  issuer: string;
  image: string;
  issuedOn?: string;
  expiresOn?: string;
  credentialUrl: string | null;
  badgeUrl: string;
};

// Add your personal Credly verification URL or certificate PDF to credentialUrl.
// badgeUrl points to the issuer's badge details, not a personal credential.
export const certifications: Certification[] = [
  {
    id: "ccna-enterprise",
    name: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    image: "/images/certifications/ccna-enterprise.png",
    issuedOn: "2026-01-12",
    credentialUrl: "https://www.credly.com/badges/861c241c-6720-46c3-8d1c-9f34ec830ceb/public_url",
    badgeUrl:
      "https://www.credly.com/org/cisco/badge/ccna-enterprise-networking-security-and-automation",
  },
  {
    id: "ccna-introduction",
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    image: "/images/certifications/ccna-introduction.png",
    issuedOn: "2025-02-07",
    credentialUrl: "https://www.credly.com/badges/2ce6e773-36a8-4cf8-9c0c-565c06e155ee/public_url",
    badgeUrl:
      "https://www.credly.com/org/cisco/badge/ccna-introduction-to-networks",
  },
  {
    id: "ccna-switching",
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    image: "/images/certifications/ccna-switching.png",
    issuedOn: "2025-03-23",
    credentialUrl: "https://www.credly.com/badges/84f0f665-c3bb-4d64-905d-643bd9bd245a/public_url",
    badgeUrl:
      "https://www.credly.com/org/cisco/badge/ccna-switching-routing-and-wireless-essentials.1",
  },
  {
    id: "ccst-networking",
    name: "Cisco Certified Support Technician Networking (CCST Networking)",
    issuer: "Cisco",
    image: "/images/certifications/ccst-networking.png",
    issuedOn: "2025-02-10",
    credentialUrl: "https://www.credly.com/badges/cb93bcfd-5972-45c4-a631-b722084fd1d4/public_url",
    badgeUrl:
      "https://www.credly.com/org/cisco/badge/cisco-certified-support-technician-networking-ccst-.1",
  },
  {
    id: "devnet-associate",
    name: "DevNet Associate",
    issuer: "Cisco",
    image: "/images/certifications/devnet-associate.png",
    issuedOn: "2026-04-17",
    credentialUrl: "https://www.credly.com/badges/ba91d8c5-2a38-49cb-8821-70a7cdea9af1/public_url",
    badgeUrl: "https://www.credly.com/org/cisco/badge/devnet-associate",
  },
  {
    id: "it-specialist-databases",
    name: "IT Specialist - Databases",
    issuer: "Certiport, a Pearson VUE business",
    image: "/images/certifications/it-specialist-databases.png",
    issuedOn: "2024-11-28",
    credentialUrl: "https://www.credly.com/badges/63f274f6-ab7f-4a00-afe2-99876d933110/public_url",
    badgeUrl:
      "https://www.credly.com/org/certiport/badge/it-specialist-databases",
  },
  {
    id: "it-specialist-python",
    name: "IT Specialist - Python",
    issuer: "Certiport, a Pearson VUE business",
    image: "/images/certifications/it-specialist-python.png",
    issuedOn: "2025-02-16",
    credentialUrl: "https://www.credly.com/badges/c8fda493-1b18-4e71-98fb-c1599e437e33/public_url",
    badgeUrl: "https://www.credly.com/org/certiport/badge/it-specialist-python",
  },
  {
    id: "pmi-project-management-ready",
    name: "PMI Project Management Ready™",
    issuer: "Project Management Institute",
    image: "/images/certifications/pmi-project-management-ready.png",
    expiresOn: "2031-03-17",
    credentialUrl: "https://www.credly.com/badges/5f470c72-26a0-4b5a-9814-e36b5b2a0a8e/public_url",
    badgeUrl:
      "https://www.credly.com/org/project-management-institute/badge/pmi-project-management-ready",
  },
];
