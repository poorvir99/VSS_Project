import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { useParams, Link } from "react-router-dom";

import shilpaguruprojectData from "../data/shilpaguruprojectData";

const ShilpaGuruProject = ()=>{

  const { projectId } = useParams();

  const project = shilpaguruprojectData.find(
    (item) => item.id === projectId
  );

  // If project doesn't exist
  if (!project) {
    return (
      <div className="min-h-screen bg-[#1E1E1E] text-white">
        
         {/* ================= HEADER ================= */}
        <Header />

        <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif text-[#D1BFA7] mb-6">
            Project Not Found
          </h1>
        </div>

        <Footer />
      </div>
    );
  }

    return(
 <div className="min-h-screen overflow-x-clip bg-transparent text-[#F2F2F2]">
      <Header />
      <hr className="border-white/10" />

   <main className="bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F] text-white">

    <div className=" mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16"> 

     {/* PAGE INTRO */}
        <section className="mx-auto mb-12 max-w-5xl text-center sm:mb-16">
          <h1 className="font-serif text-3xl leading-tight text-[#D1BFA7] sm:text-4xl lg:text-5xl">
            Shilpa Guru Project
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-[#D1BFA7]/75  sm:text-base  lg:max-w-7xl">Govt. Of India</p>
           <p className="mx-auto -mt-1 max-w-2xl text-sm leading-7 text-[#D1BFA7]/75  sm:text-base  lg:max-w-7xl">Ministry of Textiles & Handicrafts</p>
            <p className="mx-auto -mt-1 max-w-2xl text-sm leading-7 text-[#D1BFA7]/75  sm:text-base  lg:max-w-7xl">New Delhi - 110066</p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75  sm:text-base  lg:max-w-7xl">
            The Shilpa Guru Project has been initiated with the vision of preserving, revitalizing, and promoting the rich traditional heritage of Indian stone carving through systematic training, 
            technical development, and the transfer of traditional knowledge from master craftsmen to the younger generation of artisans. The programme serves as an important platform for nurturing
             artistic excellence while safeguarding the cultural legacy and craftsmanship of Karnataka’s renowned sculptural traditions.
          </p>
   
        </section>
 
            {/* Project Images of Founder and Chairman*/}
             
          <section className="w-full max-w-5xl mx-auto grid grid-cols-2 items-center gap-3 sm:gap-5 mb-16 px-4 sm:px-6">

            <img
              src="/images/Shilp Guru Project Images/ShilpGuru_ Shamaraya_Acharya_carving.jpeg"
              alt="ShilpGuru K.Shamaraya Acharya working on a stone sculpture"
              loading="lazy"
              className="w-full max-h-[280px] sm:max-h-[340px] lg:max-h-[380px] h-auto object-contain rounded-md "
            />

            <img
              src="/images/Shilp Guru Project Images/ShilpGuru_Award.jpg"
              alt="ShilpGuru K.Shamaraya Acharya winning a National-ShilpGuru Award"
              loading="lazy"
              className="w-full max-h-[280px] sm:max-h-[340px] lg:max-h-[380px] h-auto object-contain rounded-md"
            />
            
            <img
              src="/images/Shilp Guru Project Images/shilpi_K_Sathish_carving_2.jpeg"
              alt="Shri K. Sathish Acharya working on a stone sculpture"
              loading="lazy"
              className="w-full max-h-[280px] sm:max-h-[340px] lg:max-h-[380px] h-auto object-contain rounded-md"
            />

            <img
              src="/images/Shilp Guru Project Images/shilpi_K_Sathish_carving_3.jpg"
              alt="Shri K. Sathish Acharya carving a sculpture"
              loading="lazy"
              className="w-full max-h-[280px] sm:max-h-[340px] lg:max-h-[380px] h-auto object-contain rounded-md"
            />

          </section>


                 {/* PROJECT SHOWCASE */}

          <div className="mb-16 sm:mb-20 md:mb-24">

            {/* SHOWCASE HEADING */}

            <div className="mb-8 sm:mb-10">

              <p
                className="text-xs sm:text-sm
                           uppercase
                           tracking-[0.15em] sm:tracking-[0.2em]
                           text-gray-400
                           mb-2 sm:mb-3"
              >
                Project Details
              </p>

              <h2
                className="text-2xl sm:text-3xl md:text-4xl
                           font-serif
                           text-[#D1BFA7]
                           leading-tight"
              >
                The Art of Shilpa
              </h2>

            </div>

            {/* SHOWCASE GRID */}

            <div
              className="grid grid-cols-1
                         sm:grid-cols-2
                         gap-6 sm:gap-7 md:gap-8"
            >

              {project.images.map((image, index) => (

                <div
                  key={index}
                  className="group
                             bg-[#1E1E1E]
                             rounded-2xl
                             overflow-hidden"
                >

                  {/* IMAGE */}
                    <div
                      className="h-[300px]
                                sm:h-[330px]
                                md:h-[380px]
                                flex items-center justify-center
                                overflow-hidden
                                p-4 sm:p-5"
                    >
                      <img
                        src={image.src}
                        alt={image.title || `${project.title} detail ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="block max-w-full max-h-full object-contain"
                      />
                    </div>

                  {/* IMAGE DETAILS */}

                  <div className="px-4 sm:px-5 md:px-6 py-3 sm:py-4">

                    <p
                      className="text-xs sm:text-sm
                                 uppercase
                                 tracking-[0.15em]
                                 text-gray-500
                                 mb-1"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3
                      className="text-base sm:text-lg md:text-xl
                                 font-serif
                                 text-[#D1BFA7]
                                 mb-1"
                    >
                      {image.title}
                    </h3>

                    <p
                      className="text-xs sm:text-sm
                                 text-gray-400"
                    >
                      Stone Type:{" "}
                      <span className="text-gray-300">
                        {image.stone_type}
                      </span>
                    </p>

                   <p className="text-xs sm:text-sm text-gray-400 text-justify">
                    Description:
                    <span className="block text-gray-300 whitespace-pre-line mt-1">
                      {image.description}
                    </span>
                  </p>

                  </div>

                </div>

              ))}

            </div>

          </div>
     
                {/* CTA */}
          <div className="w-full text-center px-4 sm:px-6 md:px-8">

            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#D1BFA7] mb-3 sm:mb-4">
              Inspired by this Project?
            </h3>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Let us help you bring your vision to life through timeless
              stone craftsmanship.
            </p>

            <Link to="/contact" className="inline-block">
              <button
                className="px-7 py-3 sm:px-10 sm:py-4
                          text-sm sm:text-base
                          rounded-full
                          bg-gradient-to-r from-[#D1BFA7] to-[#B89B72]
                          text-[#2E2E2E] font-medium
                          hover:scale-105 active:scale-95
                          transition-transform duration-300"
              >
                Discuss Your Project
              </button>
            </Link>

          </div>

    </div>   
  </main>


      {/* ================= Footer ================= */}
       <Footer/>
    </div>
    )
}

export default ShilpaGuruProject;