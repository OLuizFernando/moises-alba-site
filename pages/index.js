import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

function Home() {
  const carouselImages = [
    "/carousel_images/moises_alba2.png",
    "/carousel_images/oportunidade_unica2.png",
    "/carousel_images/entre_em_contato.png",
  ];

  return (
    <>
      <div className="mb-[68px]">
        <Navbar />
      </div>
      <a href="/imoveis">
        <Carousel>
          {carouselImages.map((image) => (
            <img src={image} />
          ))}
        </Carousel>
      </a>
      <div className="bg-neutral-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto pb-15 pt-20">
          <img
            className="mx-auto mb-10 md:mb-auto me-auto md:me-40 w-[350px] md:w-[400px]"
            src="/moises_albajr/moises1.png"
          />
          <div className="text-white flex flex-col text-center md:text-start px-7">
            <h1 className="text-5xl mb-5">Sou Moisés Alba</h1>
            <p className="text-xl max-w-xl">
              Sou corretor de imóveis e meu objetivo é ajudar você a realizar o
              sonho do imóvel próprio. Com experiência e dedicação, busco
              oferecer as melhores opções para que você faça uma escolha segura
              e tranquila, sempre alinhado às suas necessidades e expectativas.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
