
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    img: "/images/Team/Abhishek_Karkala_CEO.png",
    name: "Abhishek Karkala",
    education: "B.E. (Civil)",
    role: "Chief Executive Officer (CEO)",
    description:
      "Overseeing the organization's growth while balancing traditional craftsmanship with modern approaches.",
  },
  {
    img: "/images/Team/Akshay_K_COO.jpeg",
    name: "Akshay K",
    education: "B.E. (Civil), M.Tech (CEM), MBA (Germany)",
    role: "Chief Operating Officer (COO)",
    description:
      "Managing operations and ensuring excellence in the execution of projects and craftsmanship.",
  },
];

const OurLeadership = () => {
  return (
    <div className="min-h-screen overflow-x-clip bg-transparent text-[#F2F2F2]">
      <Header />

      <hr className="w-full border-t border-white/15" />
      
    <main className="bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F] text-white">

      <div className=" mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16">

        {/* PAGE INTRO */}
        <section className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <h1 className="font-serif text-3xl leading-tight text-[#D1BFA7] sm:text-4xl lg:text-5xl">
            Our Leadership
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Meet the people whose vision, expertise, and dedication continue
            to shape the future of Vijaya Shilpa Shala.
          </p>
        </section>

        {/* CHAIRMAN SECTION */}
        <section aria-labelledby="chairman-heading">
          <div
            className="
              rounded-2xl border border-white/10
              bg-white/[0.04] p-5 shadow-lg
              backdrop-blur-md transition-colors duration-300
              hover:border-[#D1BFA7]/30
              sm:p-7 md:p-8 lg:p-10
            "
          >
            <div className="flex min-w-0 flex-col items-center gap-8 md:flex-row md:items-start md:gap-10 lg:gap-14">
              {/* CHAIRMAN IMAGE AND DETAILS */}
              <div className="flex w-full min-w-0 flex-col items-center text-center md:w-64 md:shrink-0">
                <div className="w-full max-w-[260px] overflow-hidden rounded-xl border border-white/10 bg-black/10 p-2 sm:max-w-[280px] md:max-w-none">
                  <img
                    src="/images/Team/K_Sathish_Chairman.png"
                    alt="Shri K. Sathish Acharya, Chairman of Vijaya Shilpa Shala"
                    loading="lazy"
                    className="
                      aspect-square h-auto w-full
                      rounded-lg object-cover
                    "
                  />
                </div>

                <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-white/55">
                  Chairman
                </p>

                <h2 className="mt-2 max-w-full break-words font-serif text-xl leading-snug text-[#D1BFA7] sm:text-2xl">
                 Shilpi K. Sathish Acharya
                </h2>

                <p className="mt-2 text-sm text-white/60">
                  D.E.E.
                </p>
              </div>

              {/* CHAIRMAN BIOGRAPHY */}
              <div className="min-w-0 flex-1 self-stretch md:border-l md:border-white/10 md:pl-8 lg:pl-10">
                <h3
                  id="chairman-heading"
                  className="font-serif text-2xl text-[#D1BFA7] sm:text-3xl"
                >
                  Meet the Chairman
                </h3>

                <div className="mt-5 space-y-4 text-sm leading-7 text-white/75 sm:text-base sm:leading-8  text-justify">
                  <p>
                    <span  className="text-[#D1BFA7] "> Shilpi K. Sathish Acharya </span> is a traditional Indian sculptor from Karkala, Karnataka,
                     belonging to a distinguished family of artisans with a rich heritage in stone carving and 
                     temple architecture. He is the son and disciple of the renowned <Link to="/founder"><span  className="text-[#D1BFA7]">ShilpGuru K. Shamaraya Acharya, </span></Link> 
                     a recipient of the prestigious <span  className="text-[#D1BFA7]">Shilp Guru Award from the Government of India. </span> 
                     His father founded <span  className="text-[#D1BFA7]" >Vijaya Shilpa Shala </span>  and subsequently served as  <span  className="text-[#D1BFA7]" >Chairman of 
                     the Karnataka Shilpakala Academy for three terms.</span> 
                  </p>

                  <p>
                    Born into this rich artistic tradition, Sathish completed his primary education at <span  className="text-[#D1BFA7]" >Kabettu Primary School, </span>
                     followed by his high school and PUC education at <span  className="text-[#D1BFA7]" > Sri Bhuvanendra College in Karkala. </span>
                      He subsequently earned a <span  className="text-[#D1BFA7]" > Diploma in Electrical Engineering from NRAM Polytechnic, Nitte. </span>  
                      Alongside his formal education, he received extensive traditional training in stone carving under
                       the guidance of his father, who played a pivotal role as his  <span  className="text-[#D1BFA7]" > mentor, teacher, and inspiration. </span>
                  </p>

                  <p>
                    Through years of dedicated learning, Sathish developed a profound understanding of  <span  className="text-[#D1BFA7]" > Shilpa Shastra, </span>  
                    Indian iconography, and the traditional principles of sculpture and temple architecture. 
                  </p>
                  <p>
                    As part of his contribution to the growth of the firm, Sathish established <span  className="text-[#D1BFA7]"> SHILPA GRAMA  at Hiriyangady,
                     Karkala, </span> and developed a <span  className="text-[#D1BFA7]">workshop at Posanottu, Nakre, Kukkundoor, Karkala. </span> 
                      Equipped with modern stone-cutting and shaping machinery, the facility brings together traditional craftsmanship and 
                      contemporary technology,supporting precision and efficiency in the execution of complex sculptural works.
                  </p>
                  <p>
                    Beyond his professional pursuits, Sathish has actively participated in community and cultural organisations, 
                    including the <span  className="text-[#D1BFA7]"> Rotaract Club and Rotary Club of Karkala. </span>He has also served as the  <span  className="text-[#D1BFA7]"> Managing Trustee of 
                    Neklaje Sri Kalikamba Temple Karkala, </span> reflecting his commitment to the cultural, social, and spiritual 
                    heritage of his community.
                  </p>
                  <p>
                    Over the years,  <span  className="text-[#D1BFA7]">  K. Sathish Acharya </span> has been associated with numerous prestigious temple architecture 
                    and sculptural projects across India. Through his dedication, technical understanding, and deep respect
                     for traditional artistic values, he continues to <span  className="text-[#D1BFA7]">uphold the legacy of Vijaya Shilpa Shala and contribute to
                      the preservation of Karnataka's rich stone-carving heritage for future generations. </span>
                  </p>
              
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXECUTIVE TEAM */}
        <section className="mb-8 mt-16 sm:mt-20 lg:mt-24" aria-labelledby="executive-heading">
          <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
            <h2
              id="executive-heading"
              className="font-serif text-2xl text-[#D1BFA7] sm:text-3xl"
            >
              Meet Our Executive Team
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base">
              Meet the team driving our operations and delivering projects
              with care and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 md:grid-cols-2">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="
                  flex min-w-0 flex-col overflow-hidden rounded-2xl
                  border border-white/10 bg-white/[0.04]
                  shadow-lg backdrop-blur-md
                  transition duration-300 ease-out
                  hover:-translate-y-1 hover:border-[#D1BFA7]/35
                  hover:shadow-xl
                "
              >
                {/* TEAM IMAGE */}
                <div className="flex justify-center px-5 pt-7 sm:pt-8">
                  <div className="h-36 w-36 overflow-hidden rounded-full border-2 border-[#D1BFA7]/40 bg-black/10 sm:h-40 sm:w-40">
                    <img
                      src={member.img}
                      alt={member.name}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* TEAM DETAILS */}
                <div className="flex flex-1 flex-col p-5 text-center sm:p-7">
                  <h3 className="break-words font-serif text-xl leading-snug text-[#D1BFA7] sm:text-2xl">
                    {member.name}
                  </h3>

                  <p className="mt-2 break-words text-sm leading-6 text-white/55">
                    {member.education}
                  </p>

                  <p className="mt-3 text-sm font-medium leading-6 text-white/80">
                    {member.role}
                  </p>

                  <p className="mx-auto mt-4 text-center max-w-lg text-sm leading-7 text-white/70 sm:text-center sm:text-base">
                    {member.description}
                  </p>

                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurLeadership;
