import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const historyImgs = [
     "/images/K_Shyamaraya_Acharya_sculpturing.jpeg",
  "/images/buddha_K_sathish_.sculpting.jpeg",
     "/images/budha_huge.jpeg"
 
];

const achievements = [
  {
    img: "/images/Award.jpeg",
    title: "Best Artisan Award",
    desc: "Honored in 1980 for lifetime contribution to stone sculpture.",
  },
  {
    img: "/images/Reliance_project.jpeg",
    title: "Guruvayur Temple Shiveli Mantapa",
    desc: "Crafted under patronage of Mrs. Kokilaben Dhirubhai Ambani.",
  },
  {
    img: "/images/Award_2.jpeg",
    title: "Cultural Heritage Recognition",
    desc: "For preserving temple architecture and sculptural traditions.",
  },
];

const AboutUs = () => {
  return (
  
       <div>
      <Header />
      <hr className="border-gray-500 border-t-[0.9px] w-full mx-auto opacity-30" />

      <div className="bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F] text-white min-h-screen px-6 py-16 space-y-24">

       {/* ================= ABOUT US ================= */}
        <section className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-serif text-[#D1BFA7]">
            About Us
          </h2>

          <p className="text-white/80 leading-relaxed text-justify">
            Vijaya Shilpa Shala, Karkala, established in{" "}
            <span className="text-[#D1BFA7] font-medium">1964</span>, 
            is a distinguished institution devoted to the traditional art of Indian sculpture 
            and temple architecture, deeply rooted in the principles of 
            <span className="italic"> Shilpa Shastra</span>.
          </p>

          <p className="text-white/80 leading-relaxed text-justify">
            The name <span className="text-[#D1BFA7] font-medium">“Vijaya Shilpa Shala”</span> 
            was graciously bestowed by the revered Pejavara Mutt Swamiji on the auspicious day 
            of <span className="font-medium">Vijayadashami</span>, symbolizing the victory of 
            skill, devotion, and righteousness.
          </p>

          <p className="text-white/80 leading-relaxed text-justify">
            For decades, our artisans have created sacred sculptures and architectural works 
            that embody divine expression, precision, and timeless beauty.
          </p>

          <p className="text-white/80 leading-relaxed text-justify">
            Located in Karkala — a historic center of sculpture — Vijaya Shilpa Shala continues 
            to serve temples and patrons across India and abroad, carrying forward a proud legacy.
          </p>
        </section>

        {/* ================= HERITAGE IMAGES ================= */}
        <section className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 ">
            {historyImgs.map((src, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md
                          hover:scale-[1.02] transition"
              >
                <img
                  src={src}
                  alt="Heritage"
                  className="h-full w-full "
                />
              </div>
            ))}
          </div>
        </section>

          {/* ================= VISION & MISSION ================= */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-serif text-[#D1BFA7] mb-4">
              Our Vision
            </h3>
            <p className="text-white/80 leading-relaxed">
              To preserve and promote the sacred traditions of Indian stone sculpture 
              and temple architecture, ensuring their continuity for future generations.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-serif text-[#D1BFA7] mb-4">
              Our Mission
            </h3>
            <p className="text-white/80 leading-relaxed">
              To craft timeless architectural and sculptural works rooted in Shilpa Shastra, 
              blending devotion, discipline, and artistic excellence.
            </p>
          </div>
        </section>


        {/* ================= ACHIEVEMENTS ================= */}
        <section className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-serif text-center text-[#D1BFA7] mb-10">
            Our Achievements
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:scale-[1.02] transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[260px] w-full object-cover"
                />
                <div className="p-5">
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;



