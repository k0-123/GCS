import type { Metadata } from "next";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = {
  title: "Our Projects | Gangadhar Concrete Solution — Completed Flooring Work",
  description:
    "A selection of completed laser screeding and densification flooring projects delivered by Gangadhar Concrete Solution across Rajasthan, Gujarat, and beyond.",
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
