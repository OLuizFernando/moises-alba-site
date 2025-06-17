import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import SobreSection from "@/components/SobreSection";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <SobreSection />
      <div id="contato">
        <Footer />
      </div>
    </>
  );
}

export default Home;
