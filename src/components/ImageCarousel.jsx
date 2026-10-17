import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
   "images/first_carousel_pic.jpg",
  "images/ganesha_3.jpg",
  "/images/buddha.jpg",
   "/images/artifacts.jpg",
  "/images/buddha_statue.jpg",
  "/images/leaf_buddha.jpg",
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
            object-cover
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