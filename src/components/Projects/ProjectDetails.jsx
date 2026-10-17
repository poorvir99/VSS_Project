// import React from "react";
// import Header from "../Header";
// import Footer from "../Footer";
// import GalleryBackButton from "../GalleryBackButton";

// const ProjectDetails = () => {
//   return (
    
//      <div>
//         <Header/>
//       <hr className="border-gray-500 border-t-[0.9px] w-full mx-auto opacity-30" />
//    <section className="bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F] text-[#F2F2F2]">
    
 
//       {/* CONTENT WRAPPER */}
//       <div className="max-w-7xl mx-auto px-6 py-10">
//         {/* PROJECT TITLE */}
//         <div className="mb-14">
//           <h1 className="text-4xl md:text-5xl font-serif text-[#D1BFA7] mb-4">
//             Sri Ranganatha Temple
//           </h1>
//           <p className="text-lg text-gray-300 max-w-3xl">
//             A traditional granite temple built following ancient Dravidian architectural principles,
//             showcasing intricate stone carvings and timeless craftsmanship.
//           </p>
//         </div>

//         {/* PROJECT META DATA */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 border-t border-b border-white/10 py-10">
//           <Meta title="Location" value="Karnataka, India" />
//           <Meta title="Year" value="2022" />
//           <Meta title="Material" value="Granite Stone" />
//           <Meta title="Style" value="Dravidian Architecture" />
//         </div>

//         {/* PROJECT STORY */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
//           <div>
//             <h2 className="text-3xl font-serif text-[#D1BFA7] mb-6">
//               Project Story
//             </h2>
//             <p className="text-gray-300 leading-relaxed mb-6">
//               This temple project was envisioned as a revival of ancient stone
//               craftsmanship. Every sculpture was hand-carved following
//               traditional shilpa shastra guidelines passed down through generations.
//             </p>
//             <p className="text-gray-300 leading-relaxed">
//               The construction process balanced structural integrity with
//               spiritual symbolism, ensuring the temple stands as a sacred space
//               for centuries to come.
//             </p>
//           </div>

//           {/* CRAFT IMAGE */}
//           <div>
//             <img
//               src="/projects/project_1.jpg"
//               alt="Craft Detail"
//               className="rounded-2xl shadow-lg"
//             />
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="text-center">
//           <h3 className="text-2xl md:text-3xl font-serif text-[#D1BFA7] mb-4">
//             Inspired by this Project?
//           </h3>
//           <p className="text-gray-300 mb-8">
//             Let us help you bring your vision to life through timeless stone craftsmanship.
//           </p>
//           <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#D1BFA7] to-[#B89B72] text-[#2E2E2E] font-medium hover:scale-105 transition">
//             Discuss Your Project
//           </button>
//         </div>

//       </div>
//     </section>
//     <Footer/>
//     </div>
//   );
// };

// const Meta = ({ title, value }) => (
//   <div>
//     <p className="text-sm uppercase tracking-wider text-gray-400 mb-1">
//       {title}
//     </p>
//     <p className="text-lg text-[#F2F2F2]">{value}</p>
//   </div>
// );

// export default ProjectDetails;



import React from "react";
import { useParams, Link } from "react-router-dom";

import projectsData from "../../data/projectsData";

import Header from "../Header";
import Footer from "../Footer";

const ProjectDetails = () => {
  const { projectId } = useParams();

  const project = projectsData.find(
    (item) => item.id === projectId
  );

  // If project doesn't exist
  if (!project) {
    return (
      <div className="min-h-screen bg-[#1E1E1E] text-white">
        <Header />

        <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-serif text-[#D1BFA7] mb-6">
            Project Not Found
          </h1>

          <Link
            to="/project"
            className="text-[#D1BFA7] hover:underline"
          >
            ← Back to Projects
          </Link>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F]">
      <Header />

      <hr className="border-gray-500 border-t-[0.9px] w-full mx-auto opacity-30" />

      <section className="min-h-screen bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F] text-[#F2F2F2]"> 

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">

          {/* BACK TO PROJECTS */}

          <Link
            to="/project"
            className="inline-flex items-center gap-2
                       text-sm sm:text-base
                       text-gray-400 hover:text-[#D1BFA7]
                       transition-colors duration-300
                       mb-8 sm:mb-10 md:mb-12"
          >
            ← Back to Projects
          </Link>


          {/* PROJECT TITLE */}

          <div className="mb-10 sm:mb-12 md:mb-14">

            <p
              className="text-xs sm:text-sm uppercase
                         tracking-[0.15em] sm:tracking-[0.2em]
                         text-gray-400 mb-3 sm:mb-4"
            >
              {project.style}
            </p>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                         font-serif text-[#D1BFA7]
                         mb-4 sm:mb-5 md:mb-6
                         leading-tight"
            >
              {project.title}
            </h1>

            <p
              className="text-base sm:text-lg
                         text-gray-300
                         max-w-3xl
                         leading-relaxed"
            >
              {project.description}
            </p>

          </div>


          {/* PROJECT META */}

          <div
            className="grid grid-cols-1
                       sm:grid-cols-2
                       lg:grid-cols-4
                       gap-6 sm:gap-8
                       mb-16 sm:mb-20
                       border-t border-b
                       border-white/10
                       py-7 sm:py-8 md:py-10"
          >

            <Meta
              title="Location"
              value={project.location}
            />

            <Meta
              title="Year"
              value={project.year}
            />

            <Meta
              title="Material"
              value={project.material}
            />

            <Meta
              title="Style"
              value={project.style}
            />

          </div>


          {/* PROJECT STORY */}

          <div
            className="grid grid-cols-1
                       md:grid-cols-2
                       gap-10 sm:gap-12 md:gap-16
                       mb-16 sm:mb-20 md:mb-24"
          >

            {/* STORY TEXT */}

            <div>

              <h2
                className="text-2xl sm:text-3xl
                           font-serif
                           text-[#D1BFA7]
                           mb-5 sm:mb-6"
              >
                Project Story
              </h2>

              {project.story.map((paragraph, index) => (

                <p
                  key={index}
                  className="text-sm sm:text-base
                             text-gray-300
                             leading-relaxed
                             mb-5 sm:mb-6"
                >
                  {paragraph}
                </p>

              ))}

            </div>


            {/* FEATURE IMAGE */}

            <div className="flex items-start justify-center "> 
            

              <img
                src={project.storyImage.src}
                alt={project.storyImage.title}
                className="w-full h-full
                           object-cover
                           rounded-2xl
                           shadow-lg"
              />

            </div>

          </div>


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
                Project Showcase
              </p>

              <h2
                className="text-2xl sm:text-3xl md:text-4xl
                           font-serif
                           text-[#D1BFA7]
                           leading-tight"
              >
                Craftsmanship & Details
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
                               py-5 sm:py-6 md:py-8"
                  >

                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full
                                 object-contain"
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

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* CTA */}

          <div className="text-center max-w-3xl mx-auto">

            <h3
              className="text-2xl sm:text-3xl
                         font-serif
                         text-[#D1BFA7]
                         mb-3 sm:mb-4"
            >
              Inspired by this Project?
            </h3>

            <p
              className="text-sm sm:text-base
                         text-gray-300
                         mb-6 sm:mb-8
                         leading-relaxed"
            >
              Let us help you bring your vision to life through
              timeless stone craftsmanship.
            </p>

            <Link to="/contact">

              <button
                className="px-6 sm:px-8
             py-3 sm:py-3.5
             rounded-full
             bg-gradient-to-r
             from-[#D1BFA7]
             to-[#B89B72]
             text-[#2E2E2E]
             text-sm
             font-medium
             hover:scale-105
             transition"
              >
                Discuss Your Project
              </button>

            </Link>

          </div>

        </div>

       </section> 


      <Footer />

    </div>
  );
};


// META COMPONENT

const Meta = ({ title, value }) => (

  <div>

    <p
      className="text-xs sm:text-sm
                 uppercase
                 tracking-wider
                 text-gray-400
                 mb-1"
    >
      {title}
    </p>

    <p
      className="text-base sm:text-lg
                 text-[#F2F2F2]"
    >
      {value}
    </p>

  </div>

);


export default ProjectDetails;