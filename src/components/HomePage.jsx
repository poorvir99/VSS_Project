import Header from "./Header";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";
import WhatWeOffer from "./WhatWeOffer";

const MotionLink = motion(Link);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F]">

      <Header />

      <hr className="border-gray-500 border-t-[0.9px] w-full mx-auto opacity-30" />

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">

        <div className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-10
          md:gap-12
          lg:gap-16
          py-12
          md:py-16
          lg:py-20
        ">

          {/* ================= HERO TEXT ================= */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
              w-full
              md:w-1/2
              text-center
              md:text-left
              flex
              flex-col
              items-center
              md:items-start
            "
          >

            <TypeAnimation
              sequence={[
                "In every stone, there's a masterpiece waiting to be unveiled.",
                2000,
                "Discover elegance and artistry in every masterpiece.",
                2000,
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity}
              className="
                font-serif
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                leading-tight
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#8C6A5D]
                to-[#D1BFA7]
              "
            />

            {/* CTA BUTTON */}
            <MotionLink
              to="/gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                mt-8
                px-6
                sm:px-8
                py-3
                sm:py-3.5
                bg-[#D3B8A3]
                text-[#3D3D3D]
                font-medium
                text-sm
                sm:text-base
                rounded-full
                hover:bg-[#3D3D3D]
                hover:text-[#D3B8A3]
                transition
                inline-block
              "
            >
              View Our Portfolio →
            </MotionLink>

          </motion.section>


          {/* ================= IMAGE CAROUSEL ================= */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="
              w-full
              md:w-1/2
              flex
              justify-center
            "
          >
            <div className="w-full max-w-[550px]">
              <ImageCarousel />
            </div>
          </motion.div>

        </div>

      </section>


      {/* ================= STATISTICS ================= */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12">

        <div className="
          grid
          grid-cols-2
          gap-4
          sm:gap-8
          md:gap-16
          text-[#F2F2F2]
          text-center
          py-8
          md:py-12
        ">

          {/* EXPERIENCE */}
          <div className="
            bg-white/5
            backdrop-blur-sm
            border
            border-white/10
            rounded-2xl
            px-4
            py-5
            sm:px-6
            sm:py-7
          ">
            <span className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-medium
              text-[#D1BFA7]
            ">
              61+
            </span>

            <p className="
              mt-1
              text-xs
              sm:text-sm
              md:text-base
              text-white/80
            ">
              Years Experience
            </p>
          </div>


          {/* PROJECTS */}
          <div className="
            bg-white/5
            backdrop-blur-sm
            border
            border-white/10
            rounded-2xl
            px-4
            py-5
            sm:px-6
            sm:py-7
          ">
            <span className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-medium
              text-[#D1BFA7]
            ">
              1 Lakh+
            </span>

            <p className="
              mt-1
              text-xs
              sm:text-sm
              md:text-base
              text-white/80
            ">
              Projects Completed
            </p>
          </div>

        </div>

      </section>


      {/* ================= WHAT WE OFFER ================= */}
      <WhatWeOffer />


      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
};

export default HomePage;