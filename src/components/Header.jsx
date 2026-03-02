import React from 'react';
import { Link } from "react-router-dom";


 const Header = () => {
  return (
    
     <div className='flex justify-between items-center text-[#F2F2F2] '>
      {/* <h1 className='ml-[189px]  text-2xl font-serif italic'>Vijaya Shilpa</h1> */}
       <Link to="/"><img src="/logo.png" alt="vijayashilpa_logo" className='w-[100px] mt-[10px] h-auto ml-[189px]'/> </Link> 
       <nav className='flex list-none mr-[180px] '>
        {/* <Link to="/" className='mr-6 hover:text-[#D1BFA7]'>Home</Link> */}
        <Link to="/" className='relative mr-6 hover:text-[#D1BFA7] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#D1BFA7] hover:after:w-full after:transition-all' > Home </Link>
        {/* <Link to="/about" className='relative mr-6 hover:text-[#D1BFA7] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#D1BFA7] hover:after:w-full after:transition-all'>About Us</Link> */}
        {/* ABOUT US DROPDOWN */}
          <div className="relative group  mr-6 hover:text-[#D1BFA7] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#D1BFA7] hover:after:w-full after:transition-all">
            <span className="cursor-pointer hover:text-[#D1BFA7]">
              About Us
            </span>

            {/* Dropdown */}
            <div className="absolute left-0 top-full mt-3 w-35
              rounded-sm bg-white/10 backdrop-blur-md
              shadow-xl border border-white/20
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-300">

               <Link
                to="/founder"
                className="block px-4 py-1 text-sm text-white hover:bg-white/10"
              >
                Founder
              </Link>

              <Link
                to="/about"
                className="block px-4 py-1 text-sm text-white hover:bg-white/10"
              >
                About Company
              </Link>
 
            </div>
          </div>

        <Link to="/project" className='relative mr-6 hover:text-[#D1BFA7] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#D1BFA7] hover:after:w-full after:transition-all'>Projects</Link>
        <Link to="/award" className='relative mr-6 hover:text-[#D1BFA7] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#D1BFA7] hover:after:w-full after:transition-all'>Awards</Link>
        <Link to="/gallery"  className='relative mr-6 hover:text-[#D1BFA7] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#D1BFA7] hover:after:w-full after:transition-all'>Gallery</Link>
        <Link to="/contact" className='relative mr-6 hover:text-[#D1BFA7] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#D1BFA7] hover:after:w-full after:transition-all'>Contact Us</Link>

         {/* <Link to="/founder" className='relative mr-6 hover:text-[#D1BFA7] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#D1BFA7] hover:after:w-full after:transition-all' > Founder</Link> */}
        
       </nav>
     </div>
 
  )
}

export default Header;