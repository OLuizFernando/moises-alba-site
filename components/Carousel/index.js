import { useEffect, useState } from "react";

function Carousel({ children }) {
  const [imageIndex, setImageIndex] = useState(0);

  const next = () =>
    setImageIndex((imageIndex) =>
      imageIndex === children.length - 1 ? 0 : imageIndex + 1,
    );

  useEffect(() => {
    const imageInterval = setInterval(next, 7000);
    return () => clearInterval(imageInterval);
  }, []);
  return (
    <>
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-out duration-700"
          style={{ transform: `translateX(-${imageIndex * 100}%)` }}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default Carousel;
