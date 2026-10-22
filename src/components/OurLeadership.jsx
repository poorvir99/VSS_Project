
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

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

      <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16">

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
                    Shilpi K. Sathish Acharya is a traditional Indian sculptor from Karkala, Karnataka, 
                    belonging to a distinguished lineage of artisans dedicated to preserving India’s rich sculptural 
                    and temple-building heritage. He is the son of Shilpi Guru K. Shamaraya Acharya, former Chartered 
                    President of the Karnataka Shilpa Kala Academy, Government of Karnataka, and founder of Vijaya Shilpa Shala, 
                    established on Vijayadashami in 1964.
                  </p>

                  <p>
                    Trained under the guidance of his father, 
                    K. Sathish Acharya has carried forward the traditional knowledge and craftsmanship
                     of Shilpa Shastra, with a focus on stone sculpture and temple architecture. 
                     His work reflects a deep respect for traditional artistic principles, precision, 
                     and the spiritual significance of Indian temple art.

                  </p>

                  <p>
                    Beyond his artistic practice, he has been actively involved in community and cultural organisations, 
                    including the Rotaract Club and Rotary Club of Karkala. He has also served as Managing Trustee of Sri Kalikamba Temple, Karkala,
                     reflecting his commitment to the cultural and spiritual traditions of his community.
                  </p>
                  <p>
                    Through his craftsmanship and dedication, Shilpi K. Sathish Acharya continues the legacy of Vijaya Shilpa Shala,
                     contributing to the preservation and continuation of India’s traditional stone-carving and temple-art traditions for future generations.
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

                  {/* LINKEDIN */}
                  {/* <div className="mt-auto pt-6">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${member.name}'s LinkedIn profile`}
                      className="
                        inline-flex max-w-full items-center justify-center
                        gap-2 rounded-md py-2 text-sm
                        text-[#D1BFA7] transition-colors duration-200
                        hover:text-white
                        focus-visible:outline-none
                        focus-visible:ring-2 focus-visible:ring-[#D1BFA7]
                        focus-visible:ring-offset-2
                        focus-visible:ring-offset-[#1E1E1E]
                      "
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                      <span>View LinkedIn Profile</span>
                    </a>
                  </div> */}

                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurLeadership;
