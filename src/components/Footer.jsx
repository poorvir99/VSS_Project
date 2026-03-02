import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faEnvelope,  faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-10">
      <div className="max-w-6xl ml-[240px] px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo Section with Text Below */}
        <div className="flex flex-col items-center text-center">
           <Link to="/" className="hover:text-gray-400">  <img src="/logo.png" alt="logo" className="w-40 " /></Link>
          {/* <img src="/logo.png" alt="logo" className="w-40 " /> */}
          <p className="text-sm opacity-80">Where Passion meets Precision.</p>
        </div>

        {/* Address & Contact Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3 ">Contact</h3>
          <p className="text-sm ">Address: 'Vijaya Shilpa Shala',Shilpa Grama, New Bypass road, Hiriyangadi, Karkala,Udupi,Karnataka India, 574104</p>
          <p className="text-sm mt-5"> <FontAwesomeIcon icon={faPhone} /> : +91 9741065887</p>
          <p className="text-sm"> <FontAwesomeIcon icon={faEnvelope}  /> : vijayashilpashala@gmail.com</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/about" className="hover:text-gray-400">About Us</Link>
            <Link to="/project" className="hover:text-gray-400">Projects</Link>
            <Link to="/gallery" className="hover:text-gray-400">Gallery</Link>
            <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
          </nav>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="https://www.instagram.com/vijayashilpashala/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-500" />
            </a>
            <a href="https://www.facebook.com/vijayashilpashala" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="hover:text-blue-600" />
            </a>
            <a href="https://www.linkedin.com/in/vijaya-shilpa-shala-bb4963268/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="hover:text-blue-500" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <hr className="border-gray-500 border-t-[0.9px] w-4/4 mx-auto opacity-30 mt-8" />
      <div className="text-center text-sm opacity-70 mt-4">
        <p>&copy; {new Date().getFullYear()} Vijaya Shilpa Shala. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
