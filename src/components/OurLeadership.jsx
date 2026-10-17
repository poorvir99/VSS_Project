import Footer from "./Footer";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";




const teamMembers = [
  {
    img: "/images/Team/Abhishek_Karkala_CEO.jpeg",
    name: "Abhishek Karkala",
    education:"B.E. (Civil)",
    role: "Chief Executive Officer (CEO)",
    description:
      "Overseeing the organization's growth while balancing traditional craftsmanship with modern approaches.",
      linkedin: "https://www.linkedin.com/in/chairman-profile/",
  },
  {
    img: "/images/Team/Akshay_K_COO.jpeg",
    name: "Akshay K",
    education:"B.E. (Civil), M.Tech (CEM), MBA (Germany)",
    role: "Chief Operating Officer (COO)",
    description:
      "Managing operations and ensuring excellence in the execution of projects and craftsmanship.",
      linkedin: "https://www.linkedin.com/in/akshay-k-ak4407/",
  },
];




const OurLeadership = ()=>{
 return(
  <div>
    <Header/>
     <hr className="border-gray-500 border-t-[0.9px] w-full mx-auto opacity-30" />
     <main className="max-w-6xl mx-auto px-6">

          <h1 className="mt-20 mb-5 text-center text-3xl font-serif text-[#D1BFA7]">Our Leadership</h1>
          <p className= "mb-20 text-center text-white/80 leading-relaxed">Meet the people whose vision, expertise, and dedication continue to shape the future of Vijaya Shilpa Shala.</p>
              
                                      {/* Chairman Introduction */}
          
                    
                    {/* Chairman Section */}
                    <section className=" chairman intro mt-10">
                    <div
                        className="
                        flex flex-col gap-6
                        rounded-2xl border border-white/10
                        bg-white/5 p-6 shadow-lg backdrop-blur-md
                        transition-all duration-300 ease-in-out
                        hover:border-[#D1BFA7]/40
                        hover:shadow-xl
                        md:flex-row md:gap-8 md:p-8
                        "
                    >
                        {/* Left Column: Chairman Image and Details */}
                        <div className="w-full shrink-0 text-center md:w-64">
                        <img
                            src="/images/Team/K_Sathish_Chairman.jpeg"
                            alt="K Sathish, Chairman of Vijaya Shilpa Shala"
                            className="
                            mx-auto h-64 w-full
                            rounded-xl object-contain
                            "
                        />

                          <p
                            className="
                            mt-5 text-xs font-serif
                            uppercase tracking-[0.2em] 
                            text-white/60
                            "
                        >
                            Chairman
                        </p>

                        <h2
                            className="
                            mt-3 font-serif text-2xl
                            text-[#D1BFA7]
                            "
                        >
                            K. Sathish
                        </h2>

                        <p className="mt-2 text-sm text-white/60">
                            D.E.E
                        </p>

                      
                        </div>

                        {/* Right Column: Chairman Biography */}
                        <div className="min-w-0 flex-1 md:pt-1">
                        <h3
                            className="
                            font-serif text-xl
                            text-[#D1BFA7]
                            "
                        >
                            Meet the Chairman
                        </h3>

                        <div
                            className="
                            mt-4 space-y-4
                            text-justify leading-7
                            text-white/80
                            "
                        >
                            <p className="leading-relaxed">
                            {/* Replace this paragraph with your existing Chairman biography. */}
                            With a commitment to preserving traditional craftsmanship
                            while embracing modern approaches, the Chairman plays an
                            important role in guiding the organization's vision and
                            long-term growth.
                            </p>

                            <p className="leading-relaxed">
                            {/* Add another paragraph here if required. */}
                            His leadership reflects the organization's dedication to
                            quality, cultural heritage, and excellence in sculpture
                            and architectural craftsmanship.
                            </p>
                              <p className="leading-relaxed">
                            {/* Add another paragraph here if required. */}
                            His leadership reflects the organization's dedication to
                            quality, cultural heritage, and excellence in sculpture
                            and architectural craftsmanship.
                            </p>
                            
                            
                        </div>
                        </div>
                    </div>
                    </section>



                  {/* ================= OUR EXECUTIVE TEAM ================= */}
                   <section className="max-w-6xl mx-auto mb-20 mt-20">
         
                     <h3 className="text-2xl font-serif text-center text-[#D1BFA7] mb-10">
                       Meet Our Executive Team
                     </h3>
         
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
         
                       {teamMembers.map((member, id) => (
                         <div
                           key={member.id}
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
                         >
         
                           {/* TEAM IMAGE */}
                           <div className="flex justify-center pt-6 px-6">
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
                           </div>
         
                           {/* TEAM DETAILS */}
                           <div className="p-6 text-center">
         
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
                             </p>
         
                             {/* LINKEDIN */}
                             <a
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
                   </section>

     </main>
    
    <Footer/>
  </div>
 );
}

export default OurLeadership;