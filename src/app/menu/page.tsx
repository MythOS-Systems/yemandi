import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Menu — Mandi, Haneeth, Fahsa & Saltah in Richardson",
  description:
    "Yemandi's full menu — lamb & chicken mandi, haneeth, sizzling fahsa, saltah, kebab sanani, Yemeni mezze, and tandoor rashoosh. 100% halal, with prices.",
};

export default function MenuPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          eyebrow="The Menu"
          title="Yemen, plated"
          accent="to share."
          ghost="Menu"
          subtitle="Slow-cooked mandi and haneeth, sizzling fahsa and saltah, Yemeni mezze, and tandoor-fresh rashoosh — all halal."
        />
        <Menu />
      </main>
      <Footer />
    </>
  );
}
