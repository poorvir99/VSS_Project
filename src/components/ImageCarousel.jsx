import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
   "/images/carousel_images/ganesha_1.jpeg",
     "/images/carousel_images/grey_buddha_carousel_pic.jpeg",
  "/images/carousel_images/ganesha_carousel_pic.jpeg",
   "/images/carousel_images/buddha_carousel_pic.jpeg",
  "/images/carousel_images/Hanuman.jpeg",
    "/images/carousel_images/artifacts.jpg",
  "/images/carousel_images/eshwara_carousel_pic.jpeg",
  "/images/carousel_images/chennigaraya_swami.jpeg",
  "/images/carousel_images/finger.jpg",
];

const slides = [...images, images[0]];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  // Preload images before they are needed
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Move to the next image every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Seamlessly reset after the final slide
  useEffect(() => {
    if (index === images.length) {
      const timeout = setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 850);

      return () => clearTimeout(timeout);
    }

    if (!animate) {
      const frame = requestAnimationFrame(() => {
        setAnimate(true);
      });

      return () => cancelAnimationFrame(frame);
    }
  }, [index, animate]);

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
      <motion.div
        className="absolute inset-0 flex h-full"
        style={{
          width: `${slides.length * 100}%`,
        }}
        animate={{
          x: `-${(index * 100) / slides.length}%`,
        }}
        transition={{
          duration: animate ? 0.8 : 0,
          ease: "easeInOut",
        }}
      >
        {slides.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-full shrink-0"
            style={{
              width: `${100 / slides.length}%`,
            }}
          >
            <img
              src={src}
              alt="Vijaya Shilpa Shala craftsmanship"
              draggable="false"
              className="
                absolute inset-0
                w-full h-full
                object-contain
                rounded-xl
                select-none
              "
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;
