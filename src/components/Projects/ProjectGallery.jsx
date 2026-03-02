import React from 'react'
import projectsData from "../../data/projectsData";
import { Link } from 'react-router-dom';

const ProjectGallery = () => {
  return (
    <section className="bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F] text-[#F2F2F2]">

      {/* CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* IMAGE GALLERY */}
        <div className="mb-24">
          <h2 className="text-3xl text-center font-serif text-[#D1BFA7] mb-20">
            Project Gallery
          </h2>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
            {projectsData.gallery.map((img, i) => (
                <div
                key={i}
                className="w-full max-w-[360px] bg-[#1E1E1E] rounded-2xl overflow-hidden
                            shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
   
                <img
                    src={img}
                    alt="Project Gallery"
                    className="h-[260px] w-full object-cover
                            hover:scale-[1.03] transition-transform duration-300"
                />

              
                <div className="p-5 text-center">
                  <Link to="/project_detail_1">
                    <p className="text-[#D1BFA7] font-serif text-lg flex items-center justify-center gap-2 cursor-pointer">
            View Project Details
            <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
            </span>
            </p>
            </Link>
                    <span className="text-sm text-gray-400 ">
                    Click to explore 
                    </span>
                </div>
            </div>
            ))} 
         </div>       

 </div>

        {/* CRAFT DETAILS */}
        <div className="bg-[#1E1E1E] rounded-3xl p-12 mb-24">
          <h2 className="text-3xl font-serif text-[#D1BFA7] mb-6">
            Craftsmanship Details
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-4xl">
            Every pillar, deity, and ornamentation was sculpted by master artisans
            using time-honored techniques. Special attention was given to stone
            grain orientation, weather resistance, and symbolic detailing.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
           
          <h3 className="text-2xl md:text-3xl font-serif text-[#D1BFA7] mb-4">
            Inspired by this Project?
          </h3>
          <p className="text-gray-300 mb-8">
            Let us help you bring your vision to life through timeless stone craftsmanship.
          </p>
           <Link to="/contact">
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#D1BFA7] to-[#B89B72] text-[#2E2E2E] font-medium hover:scale-105 transition">
            Discuss Your Project
          </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

const Meta = ({ title, value }) => (
  <div>
    <p className="text-sm uppercase tracking-wider text-gray-400 mb-1">
      {title}
    </p>
    <p className="text-lg text-[#F2F2F2]">{value}</p>
  </div>
);
export default ProjectGallery