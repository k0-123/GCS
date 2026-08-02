import type { Metadata } from "next";
import ServicesHubClient from "./ServicesHubClient";

export const metadata: Metadata = {
  title: "Our Services | FM/VNA Laser Screed, Epoxy & Polished Concrete Flooring",
  description:
    "Explore GCS's full flooring service range — FM1/FM2 laser screed, VNA DM1/DM2 floors, jointless SFRC flooring, concrete polishing & densification, epoxy flooring, and TR34 testing & certification.",
};

export default function ServicesPage() {
  return <ServicesHubClient />;
}
