// import React from 'react'
// import Header from './Header';
// // import { useNavigate } from "react-router-dom";
// import Footer from './Footer';

// // const galleryImages = [
// //   {
// //     id: 1,
// //     src: "/images/tulasi_katte.jpg",
// //     title: "Tulasi Katte",
    
// //     category: "Tulsi",
// //   },
// //   {
// //     id: 2,
// //     src: "/images/pillar.jpg",
// //     title: "Pillar",
   
// //     category: "Pillar",
// //   },
// //   {
// //     id: 3,
// //     src: "/images/hand.jpeg",
// //     title: "Artifacts",
   
// //     category: "Artifacts",
// //   },

// //   {
// //     id: 4,
// //     src: "/images/sharadhe.jpg",
// //     title: "God",
    
// //     category: "God",
// //   },
// //   {
// //     id: 5,
// //     src: "/images/bangalore.jpg",
// //     title: "Temple",
    
// //     category: "Temple",
// //   },
// //   {
// //     id: 6,
// //     src: "/images/tulsi_peetham.jpg",
// //     title: "other",
   
// //     category: "other",
// //   },
  
// // ];

// const Gallery = () => {

//   // const navigate = useNavigate();

//   // const handleClick = (category) => {
//   //   navigate(`/gallery/${category}`);
//   // };
//   return (
//     <div>
//         <Header/>
//         <hr className="border-gray-500  border-t-[0.9px] w-4/4 mx-auto opacity-30" />
//        {/* <div className="max-w-7xl mx-auto px-4 py-16">
//       <h2 className="text-3xl text-center font-bold text-[#D1BFA7] mb-10">Gallerу</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {galleryImages.map((img) => (
//           <div
//             key={img.id}
//             className="relative cursor-pointer group"
//             onClick={() => handleClick(img.category)}
//           >
//            <div className="inline-block group transition duration-300 hover:scale-105">
//             <img
//               src={img.src}
//               alt={img.title}
//               className="w-auto h-100 rounded-lg shadow-md"
//             />
//           </div>
//             <div className="absolute bottom-4 left-4 text-white font-extrabold">
//               <p className="text-sm">{img.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   )
// } */}

// <div className="bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F] text-white px-6 py-12 md:py-20">
//   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//     {/* Left Content */}
//     <div className="space-y-6">
//       <h1 className="text-6xl font-semibold text-[#D1BFA7] leading-tight">
//       Gallery
//       </h1>
//       <p className="text-[#D1BFA7]">
//         Whether you're a seasoned collector or a budding enthusiast, let us be your guide on a journey of discovery and inspiration.
//       </p>
    

//       {/* Small Grid of Images */}
//       <div className="grid grid-cols-3 gap-4 pt-4">
//         <img src="/images/tulasi_katte.jpg" alt="sculpt1" className="rounded-lg object-cover" />
//         <img src="/images/Pillar_new.jpeg" alt="sculpt2" className="rounded-lg object-cover" />
//         <img src= "/images/blackgraniteBuddha.jpeg" alt="sculpt3" className="rounded-lg object-cover" />
//         <img src="/images/sharadhe.jpg" alt="sculpt4" className="rounded-lg object-cover" />
//         <img src="/images/chandika.jpeg" alt="sculpt5" className="rounded-lg object-cover" />
//         <img src="/images/laxmi.jpg" alt="sculpt6" className="rounded-lg object-cover" />
//       </div>
//     </div>

//     {/* Right Large Image */}
//     <div className="relative">
//       <img
//         src="/images/tulsi_peetham.jpg"
//         alt="Large sculpture"
//         className="rounded-xl w-full h-auto object-cover"
//       />
    
//     </div>
//   </div>
// </div>
// <Footer/>
// </div>
//   )};

// export default Gallery;


import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import galleryData from "../data/galleryData";


const Gallery = () => {
  return (
    <>
      <Header />
       <hr className="border-gray-500 border-t-[0.9px] w-full mx-auto opacity-30" />
      <section className="bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F] min-h-screen px-6 py-20">
        <h1 className="text-4xl font-serif text-[#D1BFA7] text-center mb-16">
          Gallery
        </h1>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {Object.entries(galleryData).map(([key, item]) => (
            <Link
              key={key}
              to={`/gallery/${key}`}
              className="group rounded-2xl overflow-hidden shadow-lg bg-black/30 hover:scale-[1.03] transition"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                 className="h-[260px] w-full object-cover"
                 
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#D1BFA7]">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-300 mt-1">
                  View Collection →
                </p>
              </div>
              
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
