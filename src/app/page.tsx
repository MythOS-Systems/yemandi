import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import SignatureDishes from "@/components/SignatureDishes";
import GalleryStrip from "@/components/GalleryStrip";
import Spotlight from "@/components/Spotlight";
import PressBand from "@/components/PressBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Welcome />
        <SignatureDishes />
        <GalleryStrip />
        <Spotlight />
        <PressBand />
      </main>
      <Footer />
    </>
  );
}
