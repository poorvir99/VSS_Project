import React from "react";
import awardsData from "../data/awardsData";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Awards = () => {
  return (
    <div>
      <Header />
      <hr className="border-white/10" />

      <section className="bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F] text-[#F2F2F2]">
        <div className="max-w-5xl mx-auto px-6 py-24">

          {/* PAGE TITLE */}
          <div className="mb-20 text-center">
            <h1 className="text-4xl md:text-5xl font-serif text-[#D1BFA7] mb-4">
              Awards & Recognition
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A timeline of honors received for dedication to temple architecture
              and traditional stone craftsmanship.
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative border-l border-white/20 pl-10 space-y-14">

            {awardsData.map((award, index) => (
              <div key={index} className="relative pl-2">

                {/* DOT */}
        <span className="absolute -left-[18px] top-6 w-4 h-4 bg-[#D1BFA7] rotate-45 shadow-md " />




                {/* CONTENT */}
                <div>
                  <p className="text-sm text-[#D1BFA7] font-semibold tracking-widest ">
                    {award.year}
                  </p>
                  <h3 className="text-xl font-serif mt-1">
                    {award.title}
                  </h3>
                  <p className="text-gray-300 mt-2 leading-relaxed">
                    {award.description}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Awards;
