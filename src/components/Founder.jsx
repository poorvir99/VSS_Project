import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const founderImg = "/images/Shilpi_K_Shyaraya_Acharya.JPG";
const founderImg2 = "/images/shilpaguru_K_Shyamaraya_Acharya.jpeg";

const Founder = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <hr className="border-gray-500 border-t-[0.9px] w-full opacity-30" />

      <main className="bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F] text-white">

        {/* ================= FOUNDER SECTION ================= */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20">

          {/* ================= FIRST ROW ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* Founder Image */}
            <div className="relative flex justify-center">

              {/* Glow */}
              <div className="absolute -inset-4 sm:-inset-6 bg-[#D1BFA7]/10 blur-3xl rounded-full" />

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 w-full max-w-[380px]">

                <img
                  src={founderImg}
                  alt="ShilpGuru K Shyamaraya Acharya"
                  className="rounded-xl w-full h-auto aspect-[3/4] object-cover"
                />

                <p className="mt-4 text-center text-sm sm:text-base text-white/80">
                  ShilpGuru K Shyamaraya Acharya
                  <br />

                  <span className="text-xs sm:text-sm text-white/60">
                    1926 – 2011
                  </span>
                </p>

              </div>
            </div>

            {/* Founder Story */}
            <div className="space-y-4">

              <h2 className="text-[#D1BFA7] text-xs sm:text-sm tracking-[0.2em] uppercase">
                Founder’s Story
              </h2>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-tight">
                A Life Dedicated to Stone & Spirit
              </h3>

              <p className="text-sm sm:text-base text-white/80 leading-7 text-justify">
                ShilpGuru K. Shamaraya Acharya is a distinguished traditional
                sculptor and master craftsman whose life and work embody the
                highest ideals of Indian sculptural heritage. Trained under
                Renjala Gopala Shenoy, he devoted decades to mastering and
                practicing the principles of Shilpa Shastra.
              </p>

              <p className="text-sm sm:text-base text-white/80 leading-7 text-justify">
                Renowned for his skill, discipline, and deep understanding of form and proportion, 
                Shamaraya Acharya played a vital role in preserving traditional sculptural techniques. 
                From 1995 to 1998, he also served as the President of the Karnataka Shilpakala Academy, 
                contributing to the promotion and preservation of Karnataka’s rich sculptural traditions. 
                His work reflects spiritual depth, technical precision, and unwavering respect for tradition.
              </p>

              <p className="text-sm sm:text-base text-white/80 leading-7 text-justify">
                Beyond his personal artistic achievements, he is revered as a
                teacher and mentor who trained numerous students, instilling in
                them not only technical expertise but also values of humility,
                patience, and devotion to art. His contribution extends beyond
                individual creations to the sustained survival of an entire
                artistic lineage.
              </p>

              <p className="text-sm sm:text-base text-white/80 leading-7 text-justify">
                In recognition of his lifelong service to traditional arts and
                culture, he was honored with the ShilpGuru Award by the
                Government of India and the Jakanacharya Award by the Karnataka
                State Government, affirming his status as a custodian of
                cultural heritage and a guiding light for future generations.
              </p>

            </div>
          </div>


          {/* ================= SECOND ROW ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mt-16 sm:mt-20 lg:mt-24">

            {/* Second Story */}
            <div className="space-y-5 order-2 lg:order-1">

              <p className="text-sm sm:text-base text-white/80 leading-7 text-justify">
                In 1964, he founded Vijaya Shilpa Shala in Karkala, Karnataka,
                an institution dedicated to stone sculpture and temple architecture. 
                Rooted in tradition and refined through decades of
                craftsmanship, it continues to preserve and celebrate
                Karnataka’s rich sculptural heritage.
              </p>

              {/* Divider */}
              <div className="w-16 h-[1px] bg-[#D1BFA7]/50" />

              {/* Achievements */}
              <ul className="space-y-3 text-sm sm:text-base text-white/85">

                <li className="flex gap-3">
                  <span className="text-[#D1BFA7]">•</span>
                  <span>Created 10,000+ sculptures across India & abroad</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-[#D1BFA7]">•</span>
                  <span>13-ft Mahaveer sculpture in Ahinsa Sthal, Delhi</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-[#D1BFA7]">•</span>
                  <span>17-ft Chandraprabha Teertankar in Tijara, alwer, Rajasthan</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-[#D1BFA7]">•</span>
                  <span>Jakanachari Award (2000)</span>
                </li>

                <li className="flex gap-3">
                  <span className="text-[#D1BFA7]">•</span>
                  <span>Karnataka Rajyotsava & Shila Shilpi Awards</span>
                </li>

              </ul>

              <p className="text-sm sm:text-base text-white/70 leading-7">
                He passed away on June 8, 2011, at the age of 85. His legacy
                continues through his monumental works and the institution he
                built.
              </p>

            </div>


            {/* Second Image */}
            <div className="relative flex justify-center order-1 lg:order-2">

              {/* Glow */}
              <div className="absolute -inset-4 sm:-inset-6 bg-[#D1BFA7]/10 blur-3xl rounded-full" />

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 w-full max-w-[380px]">

                <img
                  src={founderImg2}
                  alt="ShilpGuru K Shyamaraya Acharya sculpting"
                  className="rounded-xl w-full h-auto aspect-[3/4] object-cover"
                />

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Founder;