import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Catering from "@/components/Catering";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Catering — Halal Yemeni Catering in Richardson",
  description:
    "Halal Yemeni catering from Yemandi in Richardson — mandi platters, event spreads, and family feasts with tandoor-fresh rashoosh. Made fresh for any headcount.",
};

export default function CateringPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          eyebrow="Catering"
          title="Yemeni feasts for"
          accent="any crowd."
          ghost="Catering"
          subtitle="Mandi platters, event spreads, and family feasts — the same slow-cooked Yemeni cooking, scaled up."
        />
        <Catering />
      </main>
      <Footer />
    </>
  );
}
