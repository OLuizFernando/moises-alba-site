import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RealStateGallery from "@/components/RealStateGallery";

function Imoveis() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="pt-14">
        <RealStateGallery />
      </div>
      <div className="border-t border-gray-300 mt-20">
        <Footer />
      </div>
    </>
  );
}

export default Imoveis;
