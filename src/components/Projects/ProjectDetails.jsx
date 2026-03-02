import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import GalleryBackButton from "../GalleryBackButton";

const ProjectDetails = () => {
  return (
    
     <div>
        <Header/>
      <hr className="border-gray-500 border-t-[0.9px] w-full mx-auto opacity-30" />
   <section className="bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F] text-[#F2F2F2]">
    
 
      {/* CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* PROJECT TITLE */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-5xl font-serif text-[#D1BFA7] mb-4">
            Sri Ranganatha Temple
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            A traditional granite temple built following ancient Dravidian architectural principles,
            showcasing intricate stone carvings and timeless craftsmanship.
          </p>
        </div>

        {/* PROJECT META DATA */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 border-t border-b border-white/10 py-10">
          <Meta title="Location" value="Karnataka, India" />
          <Meta title="Year" value="2022" />
          <Meta title="Material" value="Granite Stone" />
          <Meta title="Style" value="Dravidian Architecture" />
        </div>

        {/* PROJECT STORY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-serif text-[#D1BFA7] mb-6">
              Project Story
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              This temple project was envisioned as a revival of ancient stone
              craftsmanship. Every sculpture was hand-carved following
              traditional shilpa shastra guidelines passed down through generations.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The construction process balanced structural integrity with
              spiritual symbolism, ensuring the temple stands as a sacred space
              for centuries to come.
            </p>
          </div>

          {/* CRAFT IMAGE */}
          <div>
            <img
              src="/projects/project_1.jpg"
              alt="Craft Detail"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-serif text-[#D1BFA7] mb-4">
            Inspired by this Project?
          </h3>
          <p className="text-gray-300 mb-8">
            Let us help you bring your vision to life through timeless stone craftsmanship.
          </p>
          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#D1BFA7] to-[#B89B72] text-[#2E2E2E] font-medium hover:scale-105 transition">
            Discuss Your Project
          </button>
        </div>

      </div>
    </section>
    <Footer/>
    </div>
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

export default ProjectDetails;



