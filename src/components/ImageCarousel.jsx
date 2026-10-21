import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
   "images/carousel_images/ganesha_carousel_pic.jpeg",
     "/images/carousel_images/grey_buddha_carousel_pic.jpeg",
     "/images/carousel_images/Hanuman.jpeg",
      "images/carousel_images/black_buddha_carousel_pic.jpeg",
       "/images/carousel_images/eshwara_carousel_pic.jpeg",
     "/images/carousel_images/leaf_buddha.jpeg",
     "/images/carousel_images/chennigaraya_swami.jpeg",
   "/images/carousel_images/artifacts.jpg",
  "/images/carousel_images/buddha_statue.jpg",

];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        relative
        w-full
        max-w-[400px]
        aspect-square
        overflow-hidden
        rounded-xl
        mx-auto
      "
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Vijaya Shilpa Shala craftsmanship"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-contain
            rounded-xl
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default ImageCarousel;