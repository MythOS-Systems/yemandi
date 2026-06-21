import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Visit — 888 S Greenville Ave, Richardson TX",
  description:
    "Find Yemandi Yemeni Cuisine at 888 S Greenville Ave Unit 210, Richardson TX 75081. Hours, directions, phone, and online ordering. Open daily, late on weekends.",
};

export default function VisitPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          eyebrow="Find Us"
          title="Pull up"
          accent="a platter."
          subtitle="We're on S Greenville Ave in Richardson. Dine in, pick up, or order ahead."
        />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
