import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Gangadhar Concrete Solution, Jaipur",
  description:
    "Get in touch with Gangadhar Concrete Solution for a free site assessment. Based in Jaipur, Rajasthan — serving clients pan-India.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
