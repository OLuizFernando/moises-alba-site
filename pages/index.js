import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

function Home() {
  const carouselImages = [
    "/carousel_images/moises_alba.png",
    "/carousel_images/oportunidade_unica.png",
    "/carousel_images/entre_em_contato.png",
  ];

  return (
    <>
      <div className="mb-[68px]">
        <Navbar />
      </div>
      <Carousel>
        {carouselImages.map((image) => (
          <img src={image} />
        ))}
      </Carousel>
      <Footer />
    </>
  );
}

export default Home;
