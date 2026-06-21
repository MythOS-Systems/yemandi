import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Signatures from "@/components/Signatures";
import ShareFeature from "@/components/ShareFeature";
import MenuPreview from "@/components/MenuPreview";
import GalleryParallax from "@/components/GalleryParallax";
import Press from "@/components/Press";
import VideoReels from "@/components/VideoReels";
import VisitCTA from "@/components/VisitCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Statement />
        <Signatures />
        <ShareFeature />
        <MenuPreview />
        <GalleryParallax />
        <Press />
        <VideoReels />
        <VisitCTA />
      </main>
      <Footer />
    </>
  );
}
