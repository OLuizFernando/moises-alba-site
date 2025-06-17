import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import SobreSection from "@/components/SobreSection";
import PrincipaisSection from "@/components/PrincipaisSection";
import Footer from "@/components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <PrincipaisSection />
      <SobreSection />
      <Footer />
    </>
  );
}

export default Home;
