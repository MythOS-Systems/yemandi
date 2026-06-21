import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery — Yemandi Yemeni Cuisine, Richardson",
  description:
    "A look at the food at Yemandi — mandi, haneeth, sizzling fahsa, saltah, mezze, and tandoor rashoosh. All halal, all made fresh.",
};

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          eyebrow="Gallery"
          title="Straight from"
          accent="the clay oven."
          ghost="Gallery"
          subtitle="Mandi, haneeth, sizzling fahsa, and tandoor bread. Tap any photo for a closer look."
        />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
