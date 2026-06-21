import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Story from "@/components/Story";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Story — The First Authentic Yemeni in DFW",
  description:
    "The story behind Yemandi — the first authentic Yemeni restaurant in DFW, bringing slow-cooked mandi, haneeth, and tandoor rashoosh to Richardson, Texas.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          variant="light"
          eyebrow="Our Story"
          title="A first for"
          accent="Dallas."
          ghost="Yemen"
          subtitle="Slow-cooked mandi, tandoor rashoosh, and the flavors of Yemen — brought to Richardson for the very first time."
        />
        <Story />
      </main>
      <Footer />
    </>
  );
}
