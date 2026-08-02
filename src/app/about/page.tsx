import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | Gangadhar Concrete Solution — Laser Screed Flooring Experts",
  description:
    "The story, vision, mission, and international standards behind Jaipur's first dedicated laser screed concrete flooring company.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
