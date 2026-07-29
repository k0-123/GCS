export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Laser Screed (FM1/FM2)", href: "/services/laser-screed" },
      { label: "VNA Flooring (DM1/DM2)", href: "/services/vna-flooring" },
      { label: "SFRC Flooring", href: "/services/sfrc" },
      { label: "Jointless Floors", href: "/services/jointless" },
      { label: "Polishing & Densification", href: "/services/polishing-densification" },
      { label: "Epoxy Flooring", href: "/services/epoxy" },
      { label: "Testing & Certification", href: "/services/testing-certification" },
      { label: "Armour Joints & Dowels", href: "/services/specialty-joints" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const footerServices: NavItem[] = [
  { label: "Laser Screed Flooring", href: "/services/laser-screed" },
  { label: "VNA Flooring", href: "/services/vna-flooring" },
  { label: "SFRC Flooring", href: "/services/sfrc" },
  { label: "Jointless Floors", href: "/services/jointless" },
  { label: "Polishing & Densification", href: "/services/polishing-densification" },
  { label: "Epoxy Flooring", href: "/services/epoxy" },
  { label: "Testing & Certification", href: "/services/testing-certification" },
];

export const contactInfo = {
  phone: ["+91 97725 86211", "+91 81040 48093"],
  email: "kailash.pali2008@gmail.com",
  address: "32A, Vijay Nagar D, Jaipur, Rajasthan – 302012",
  gstin: "08BURPC8437K1Z0",
  udyam: "UDYAM-RJ-17-0357091",
  hours: "Mon–Sat, 9:00 AM – 6:00 PM",
};
