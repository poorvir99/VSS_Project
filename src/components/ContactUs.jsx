import React from 'react'
import Header from './Header'
import Footer from './Footer'


const images = [
  "/images/colorful_buddha.jpg",
]

const ContactUs = () => {
  return (
    <div>
        <Header/>
        <hr className="border-gray-500  border-t-[0.9px] w-4/4 mx-auto opacity-30" />
       <div className="min-h-screen text-white px-4 py-8 bg-gradient-to-br from-[#2E2E2E] to-[#1E3A5F] flex flex-col items-center">
      {/* Heading */}
      {/* <div className="text-center mb-10">
        <h1 className="text-2xl md:text-5xl font-extrabold text-[#D1BFA7]">
          CONTACT <span className="text-[#8C6A5D]">US</span>
        </h1> */}
        {/* <p className="text-[#b0adaa] mt-3 text-lg">
          Any question or remarks? Just write us a message.
        </p> */}
      {/* </div> */}

      {/* Content */}
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-[#B0B0B0]/10 rounded-xl p-6 md:p-10 shadow-lg">
        {/* Left: Form */}
        <div>
          <h1 className="text-3xl font-serif mb-3 text-[#D1BFA7]">CONTACT US</h1>
          <p className="text-sm text-gray-400 mb-6">
           Any question or remarks? Just write us a message.
          </p>

          <form className="space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="First Name" className="w-1/2 bg-[#2D2D3F] p-3 rounded-md text-white placeholder-gray-400 focus:outline-none" />
              <input type="text" placeholder="Last Name" className="w-1/2 bg-[#2D2D3F] p-3 rounded-md text-white placeholder-gray-400 focus:outline-none" />
            </div>
            <input type="email" placeholder="Email" className="w-full bg-[#2D2D3F] p-3 rounded-md text-white placeholder-gray-400 focus:outline-none" />
            <input type="tel" placeholder="Phone Number" className="w-full bg-[#2D2D3F] p-3 rounded-md text-white placeholder-gray-400 focus:outline-none" />
            <textarea placeholder="Message" rows="4" className="w-full bg-[#2D2D3F] p-3 rounded-md text-white placeholder-gray-400 focus:outline-none" />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#8C6A5D] to-[#D1BFA7] hover:from-[#D1BFA7] hover:to-[#8C6A5D] text-white py-3 rounded-md font-semibold transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Image + Quote */}
        <div className="flex flex-col items-center justify-between text-center">
          <img src={images} alt="Sculpture" className="rounded-lg max-h-[450px] object-cover mb-2" />
          <p className="text-gray-300 italic text-sm leading-relaxed">
            "Our sculptures are not lifeless – they breathe the soul of the gods we invoke through every chisel stroke."
            <br />
            <span className="font-semibold text-[#957a6f]">– S. Radhakrishnan</span>
          </p>
        </div>
      </div>
        {/* Location Section */}

  <div className="max-w-6xl w-full bg-[#B0B0B0]/10 rounded-xl p-6 md:p-10 shadow-lg mt-10 ">
    <h2 className="text-2xl font-serif text-[#D1BFA7] mb-4 text-center">Our Office Location</h2>
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.2858786629176!2d74.98279181004334!3d13.207359909613139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbb57877489422b%3A0xc68a9355f928bd75!2sVIJAYA%20SHILPA%20SHALA!5e0!3m2!1sen!2sin!4v1753071853057!5m2!1sen!2sin" 
        className="w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location"
      ></iframe>
    </div>
    </div>       
  </div>
    <Footer/>
    </div>


  )
}

export default ContactUs

