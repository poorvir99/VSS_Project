import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


const historyImgs = [
     "/images/K_Shyamaraya_Acharya_sculpturing.jpeg",
  "/images/buddha_K_sathish_.sculpting.jpeg",
     "/images/budha_huge.jpeg"
 
];

// const teamMembers = [
//   {
//     img: "/images/Team/Sathish_K_Chairman.jpeg",
//     name: "K Sathish",
//     education: "D.E.E",
//     role: "Chairman",
//     description:
//       "Leading the firm with a vision to preserve traditional craftsmanship and carry forward its rich artistic heritage.",
//       linkedin: "https://www.linkedin.com/in/chairman-profile/",
//   },
//   {
//     img: "/images/Team/Abhishek_Karkala_CEO.jpeg",
//     name: "Abhishek Karkala",
//     education:"B.E. (Civil)",
//     role: "Chief Executive Officer (CEO)",
//     description:
//       "Overseeing the organization's growth while balancing traditional craftsmanship with modern approaches.",
//       linkedin: "https://www.linkedin.com/in/chairman-profile/",
//   },
//   {
//     img: "/images/Team/Akshay_K_COO.jpeg",
//     name: "Akshay K",
//     education:"B.E. (Civil), M.Tech (CEM), MBA (Germany)",
//     role: "Chief Operating Officer (COO)",
//     description:
//       "Managing operations and ensuring excellence in the execution of projects and craftsmanship.",
//       linkedin: "https://www.linkedin.com/in/akshay-k-ak4407/",
//   },
// ];

const achievements = [
  {
    img: "/images/Achievements/National Award _ShilpGuru Award.jpg",
    title: "National Award - ShilpGuru Award",
    desc: "Recognized in 2006 for outstanding contributions to traditional Indian handicrafts and sculptural craftsmanship.",
  },
   {
    img: "/images/Achievements/Award.jpeg",
    title: "Karnataka Rajyotsava Prashasthi in 1991",
    desc: "Honored in 1991 for lifetime contribution to stone sculpture.",
  },
  {
    img: "/images/Achievements/Award_2.jpeg",
    title: "Cultural Heritage Recognition",
    desc: "For preserving temple architecture and sculptural traditions.",
  },
    {
    img: "/images/Achievements/Reliance_project.jpeg",
    title: "Guruvayur Temple Shiveli Mantapa",
    desc: "Crafted under patronage of Mrs. Kokilaben Dhirubhai Ambani.",
  },
   {
    img: "/images/Achievements/Award_2.jpeg",
    title: "Jakanachari Award",
    desc: "For preserving temple architecture and sculptural traditions.",
  },
   {
    img: "/images/Achievements/Award_2.jpeg",
    title: "Karnataka Rajyotsava Prashasthi",
    desc: "For preserving temple architecture and sculptural traditions.",
  },
 
];

const AboutUs = () => {
  return (
  
       <div>
      <Header />
      <hr className="border-gray-500 border-t-[0.9px] w-full mx-auto opacity-30" />

      <div className="bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F] text-white min-h-screen px-6 py-16 space-y-24">

                                 {/* ================= About US ================= */}
        <section className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-serif text-[#D1BFA7]">
            About Us
          </h2>

          <p className="text-white/80 leading-relaxed text-justify">
            Step into our unique sculpture and architectural firm <span className="text-[#D1BFA7] font-medium">Vijaya Shilpa Shala,</span> {" "}
             where tradition meets innovation.
             Founded by <span className="text-[#D1BFA7] font-medium"><Link to="/founder"> ShilpGuru K. Shamaraya Acharya</Link></span> in the year <span className="text-[#D1BFA7] font-medium">1964</span>, 
             with a vision to blend ancient techniques with evolving architectural aesthetics, 
             we offer a curated selection of handcrafted sculptures, bespoke architectural elements, and artisanal decor. 
          </p>

          <p className="text-white/80 leading-relaxed text-justify">
            The name <span className="text-[#D1BFA7] font-medium"> “Vijaya Shilpa Shala” </span> 
            was graciously bestowed by the revered Pejavara Mutt Swamiji on the auspicious day 
            of <span className="font-medium">Vijayadashami</span>, symbolizing the victory of 
            skill, devotion, and righteousness.
          </p>

          <p className="text-white/80 leading-relaxed text-justify">
            Our journey began with the creation of traditional <span className="text-[#D1BFA7] font-medium">Naga sculptures and deity idols</span>, 
            crafted with devotion and installed in the <span class="italic">Garbhagriha </span>(sanctum sanctorum) of temples. 
            Rooted in the principles of <span className="text-[#D1BFA7] font-medium">Shilpa Shastra</span>, we gradually expanded our expertise to include 
            intricately carved Tulsi structures and comprehensive temple architecture. Over the years, 
            we have continued to evolve, extending our craftsmanship into modern landscaping and conventional
           construction while preserving the essence of traditional design.
          </p>

          <p className="text-white/80 leading-relaxed text-justify">
            For decades, our skilled artisans have brought generations of expertise to every creation, ensuring timeless beauty, 
            exceptional craftsmanship, and uncompromising quality. Driven by our commitment to precision and our passion for 
            Shilpa Shastra, Vijaya Shilpa Shala has become recognized for its efficiency, distinctive style, and dedication to excellence. 
            Each project reflects our pursuit of quality workmanship, harmoniously blending traditional artistry with contemporary needs.
          </p>

          <p className="text-white/80 leading-relaxed text-justify">
            Located in <span className="text-[#D1BFA7] font-medium">Karkala</span> ,a historic center of sculpture Vijaya Shilpa Shala continues 
            to serve temples and patrons across India and abroad, carrying forward a proud legacy of craftsmanship, creativity, and architectural excellence.
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
              To preserve and carry forward the timeless legacy of Indian Shilpa Shastra and sacred architecture, 
              while evolving its traditions through contemporary craftsmanship, innovation, and design. 
              Creating enduring works of art, architecture, and landscape that connect generations to our cultural heritage.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-serif text-[#D1BFA7] mb-4">
              Our Mission
            </h3>
            <p className="text-white/80 leading-relaxed">
              To uphold the principles of Shilpa Shastra through authentic craftsmanship, skilled stone carving, 
              temple architecture, Vastu, and sacred stone traditions, while embracing modern stone artistry and landscape design. 
              We strive to create works of lasting spiritual, cultural, and architectural value through integrity, devotion, precision, and excellence. 
              Continuing the legacy established in 1964 for generations to come.
            </p>
          </div>
        </section>

                  {/* ================= OUR TEAM ================= */}
          {/* <section className="max-w-6xl mx-auto">

            <h3 className="text-2xl font-serif text-center text-[#D1BFA7] mb-10">
              Our Team
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="
                    bg-white/5
                    backdrop-blur-md
                    border border-white/10
                    rounded-2xl
                    overflow-hidden
                    shadow-lg
                    hover:scale-[1.02]
                    transition
                    duration-300
                  "
                > */}

                  {/* TEAM IMAGE */}
                  {/* <div className="flex justify-center pt-6 px-6">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="
                        w-40
                        h-40
                        sm:w-44
                        sm:h-44
                        rounded-full
                        object-cover
                        border-2
                        border-[#D1BFA7]/40
                      "
                    />
                  </div> */}

                  {/* TEAM DETAILS */}
                  {/* <div className="p-6 text-center">

                    <h4 className="text-xl font-serif text-[#D1BFA7] mb-1">
                      {member.name}
                    </h4>

                     <p className="text-sm text-white/50 mb-2">
                      {member.education}
                    </p>

                    <p className="text-sm text-white/60 mb-4">
                      {member.role}
                    </p>

                    <p className="text-sm text-white/70 leading-relaxed text-justify mb-5">
                      {member.description}
                    </p> */}

                    {/* LINKEDIN */}
                    {/* <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        text-[#D1BFA7]
                        hover:text-white
                        transition
                      "
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                      <span>View LinkedIn Profile</span>
                    </a>

                  </div>

                </div>
              ))}

            </div>
          </section> */}

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



