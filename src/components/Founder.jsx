import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const founderImg ="/images/Shilpi_K_Shyaraya_Acharya.JPG";
const founderImg2 ="/images/shilpaguru_K_Shyamaraya_Acharya.jpeg";
const Founder = () => {
  return (
<div>
      <Header />
      <hr className="border-gray-500 border-t-[0.9px] w-full mx-auto opacity-30" />

      <div className="bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F] text-white min-h-screen px-6 py-16 space-y-24">

        {/* ================= FOUNDER SECTION ================= */}
        <section className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto items-start">

          {/* Founder Card */}
          <div className="relative flex justify-center">
            <div className="absolute -inset-6 bg-[#D1BFA7]/10 blur-3xl rounded-full" />

            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4">
              <img
                src={founderImg}
                alt="Shilpi K Shyamaraya Acharya"
                className="rounded-xl w-[380px] h-[520px] object-cover"
              />
              <p className="mt-4 text-center text-sm text-white/80">
                ShilpGuru K Shyamaraya Acharya <br />
                <span className="text-xs text-white/60">1926 – 2011</span>
              </p>
            </div>
          </div>

          {/* Founder Story */}
          <div>
            <h2 className="text-[#D1BFA7] text-sm tracking-widest uppercase mb-4">
              Founder’s Story
            </h2>

            <h3 className="text-3xl font-serif mb-6">
              A Life Dedicated to Stone & Spirit
            </h3>

            <p className="text-white/80 leading-relaxed mb-4 text-justify">
              ShilpGuru K. Shamaraya Acharya is a distinguished traditional sculptor and master craftsman 
              whose life and work embody the highest ideals of Indian sculptural heritage. 
              Trained under the Renjala Gopala Shenoy, 
              he has devoted decades to mastering and practicing the principles of Shilpa Shastra.
            </p>
            
            <p className="text-white/80 leading-relaxed mb-4 text-justify">
              Renowned for his skill, discipline, and deep understanding of form and proportion, 
              Shamaraya Acharya has played a vital role in preserving traditional sculptural techniques. 
              His work reflects spiritual depth, technical precision, and unwavering respect for tradition.
            </p>
            <p className="text-white/80 leading-relaxed mb-4 text-justify">
              Beyond his personal artistic achievements, he is revered as a teacher and mentor who has trained numerous students,
               instilling in them not only technical expertise but also values of humility, patience, and devotion to art. 
              His contribution extends beyond individual creations to the sustained survival of an entire artistic lineage.
            </p>
             <p className="text-white/80 leading-relaxed mb-6 text-justify">
           In recognition of his lifelong service to traditional arts and culture, 
           he has been honored with ShilpGuru Award Government of India, Jakanacharya Award Karnataka State Government,  
           affirming his status as a custodian of cultural heritage and a guiding light for future generations.

            </p>

            
          </div>

           {/* Founder Story */}
          <div className="ml-15">

            <p className="text-white/80 leading-relaxed mb-6 text-justify">
              In 1964, he founded Vijaya Shilpa Shala in Karkala, Karnataka an institution dedicated to temple architecture and stone sculpture. 
              Rooted in tradition and refined through decades of craftsmanship,
               it continues to preserve and celebrate Karnataka’s rich sculptural heritage.
            </p>

            <div className="w-16 h-[1px] bg-[#D1BFA7]/50 my-6" />

            <ul className="space-y-3 text-white/85 mb-6">
              <li>• Created 700+ sculptures across India & abroad</li>
              <li>• 13-ft Mahaveer sculpture near Qutab Minar</li>
              <li>• 17-ft Chandraprabha Teertankar</li>
              <li>• Jakanachary Award (1999)</li>
              <li>• Karnataka Rajyotsava & Shila Shilpi Awards</li>
            </ul>

            <p className="text-white/70 leading-relaxed">
              He passed away on June 8, 2011, at the age of 85. His legacy continues
              through his monumental works and the institution he built.
            </p>
          </div>

          {/* Founder Card */}
          <div className="relative flex justify-center ml-10">
            <div className="absolute -inset-6 bg-[#D1BFA7]/10 blur-3xl rounded-full" />

            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4">
              <img
                src={founderImg2}
                alt="Shilpi K Shyamaraya Acharya"
                className="rounded-xl w-[380px] h-[520px] object-cover"
              />
            </div>
          </div>
        </section>
    </div>
     <Footer/>
    </div>
  );
};


export default Founder




// const founderImg = "/images/Shilpi_K_Shyaraya_Acharya.jpeg";
// const Founder = () => {
//   return (
// <div>
//       <Header />
//       <hr className="border-gray-500 border-t-[0.9px] w-full mx-auto opacity-30" />

//       <div className="bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F] text-white min-h-screen px-6 py-16 space-y-24">

//     <section className="relative py-24 px-6 md:px-24 text-white">
      
//       {/* Background subtle glow */}
//       {/* <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F]/40 to-[#2E2E2E] pointer-events-none" /> */}

//       <div className="relative z-10 grid md:grid-cols-2 gap-20 items-start">

//         {/* Founder Image Card */}
//         <div className="relative">
//           {/* soft spotlight */}
//           <div className="absolute -inset-6 bg-[#D1BFA7]/10 blur-3xl rounded-full" />

//           <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
//             <img
//               src={founderImg}
//               alt="Shilpi K Shyamaraya Acharya"
//               className="rounded-xl w-full object-cover"
//             />
//             <p className="mt-4 text-center text-sm text-white/80">
//               Shilpi K Shyamaraya Acharya <br />
//               <span className="text-xs text-white/60">1926 – 2011</span>
//             </p>
//           </div>
//         </div>

//         {/* Founder Content */}
//         <div>
//           <h2 className="text-[#D1BFA7] text-sm tracking-widest uppercase mb-4">
//             Founder’s Story
//           </h2>

//           <h3 className="text-3xl md:text-4xl font-serif mb-6">
//             A Life Dedicated to Stone & Spirit
//           </h3>

//           <p className="text-white/80 leading-relaxed max-w-xl mb-6">
//             K. Shyamaraya Acharya, born in 1926 in Katpady (Udupi district),
//             inherited a sculptor’s legacy from his father Jogappa Acharya.
//             He trained under Renjala Gopalakrishna Shenoy for 22 years and later
//             founded Vijaya Shilpa Kala School in Kabetta, Karkala, to promote
//             stone sculpture and temple artistry.
//           </p>

//           {/* Divider */}
//           <div className="w-16 h-[1px] bg-[#D1BFA7]/50 my-6" />

//           {/* Highlights */}
//           <ul className="space-y-3 text-white/85 mb-6">
//             <li>• Created 700+ sculptures across India & abroad</li>
//             <li>• 13-ft Mahaveer sculpture near Qutab Minar</li>
//             <li>• 17-ft Chandraprabha Teertankar</li>
//             <li>• Jakanachary Award (1999)</li>
//             <li>• Karnataka Rajyotsava & Shila Shilpi Awards</li>
//           </ul>

//           {/* Legacy */}
//           <p className="text-white/70 leading-relaxed max-w-xl">
//             He passed away on June 8, 2011, at the age of 85. His legacy lives on
//             through his monumental works and the institution that continues to
//             shape generations of artisans.
//           </p>
//         </div>
//       </div>
//     </section>
//     </div>
//      <Footer/>
//     </div>
//   );
// };


// export default Founder