import Header from "./Header";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ImageCarousel from "./ImageCarousel";
import Footer from "./Footer";
import WhatWeOffer from "./WhatWeOffer";

const MotionLink = motion(Link);
const HomePage = () => {
    return (
        <div>
            <Header />
            <hr className="border-gray-500  border-t-[0.9px] w-4/4 mx-auto opacity-30" />


            {/* Hero Section */}
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between mt-5 px-10 md:px-20">
                
                {/* Animated Text Section */}
                <motion.section
                    initial={{ opacity: 0, x: -50 }} // Start hidden & shifted left
                    animate={{ opacity: 1, x: 0 }} // Fade in & move to position
                    transition={{ duration: 1 }} // Animation duration
                    className="text-center md:text-left md:w-1/2"
                >
                    {/* Typewriter Effect */}
                    <TypeAnimation
                        sequence={[
                            "In every stone, there's a masterpiece waiting to be unveiled.", // Text 1
                            2000, // Delay 2s
                            "Discover elegance and artistry in every masterpiece.", // Text 2
                            2000, // Delay 2s
                        ]}
                        wrapper="h1"
                        speed={50} // Typing speed
                        className="font-serif text-4xl md:text-5xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#8C6A5D] to-[#D1BFA7]"
                        repeat={Infinity} // Loop the animation
                    />

                    {/* Animated Button */}
                    {/* <motion.button
                        whileHover={{ scale: 1.1 }} // Slight zoom on hover
                        whileTap={{ scale: 0.95 }} // Shrink on click
                        className="mt-6 px-4 py-2 bg-[#D3B8A3] text-[#3D3D3D] font-medium text-md rounded-l-full  rounded-r-full hover:bg-[#3D3D3D] hover:text-[#D3B8A3] transition"
                    >
                      View Our Portfolio
                     </motion.button> */}

                     
                    <MotionLink
                    to="/gallery"
                    whileHover={{ scale: 1.1 }} // Slight zoom on hover
                    whileTap={{ scale: 0.95 }}  // Shrink on click
                    className="mt-6 mr-6 px-4 py-2 bg-[#D3B8A3] text-[#3D3D3D] font-medium text-md rounded-full hover:bg-[#3D3D3D] hover:text-[#D3B8A3] transition inline-block"
                    >
                    View Our Portfolio
                    </MotionLink>
                                        
                </motion.section>

                {/* Animated Image */}
                {/* <motion.img
                    src="/buddha.jpg"
                    alt="hero_image"
                    className="md:w-1/3 w-80 mt-6 md:mt-0 rounded-lg"
                    initial={{ opacity: 0, x: 50 }} // Start hidden & shifted right
                    animate={{ opacity: 1, x: 0 }} // Fade in & move to position
                    transition={{ duration: 1, delay: 0.5 }} // Delayed animation
                   
                /> */}
                 <ImageCarousel/>
            </div>
            <div className="ml-[200px] flex text-[#F2F2F2] ">
                <p className="mr-[90px] "><span className="text-3xl font-medium">61+</span><br/> years Experience</p>
                <p><span  className="text-3xl font-medium">1 lakh+</span> <br/> Projects Completed</p>
            </div>
             <WhatWeOffer/>
            <Footer/>
        </div>
    );
};

export default HomePage;
