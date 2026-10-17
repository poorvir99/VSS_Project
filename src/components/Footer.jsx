import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-10">
  <div className="max-w-6xl mx-auto px-6">

    {/* Footer Sections */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 justify-items-center">

      {/* Logo + Tagline */}
      <div className="flex flex-col items-center text-center">
        <Link to="/" className="leading-none">
          <img
            src="/logo.png"
            alt="Vijaya Shilpa Shala Logo"
            className="w-32 lg:w-36 h-auto block"
          />
        </Link>

        <p className="text-sm text-white/70 mt-1">
          Where Passion meets Precision.
        </p>
      </div>

      {/* Contact */}
      <div className="text-center">
        <h3 className="font-semibold text-lg mb-3">
          Contact Us
        </h3>

        <p className="text-sm text-white/80 max-w-[250px] leading-relaxed">
          Address: 'Vijaya Shilpa Shala', Shilpa Grama,
          New Bypass Road, Hiriyangadi, Karkala,
          Udupi, Karnataka, India - 574104
        </p>

        <p className="text-sm mt-4">
          <FontAwesomeIcon icon={faPhone} /> : +91 9741065887
        </p>

        <p className="text-sm break-all">
          <FontAwesomeIcon icon={faEnvelope} /> :
          vijayashilpashala@gmail.com
        </p>
      </div>

      {/* Quick Links */}
      <div className="text-center">
        <h3 className="font-semibold text-lg mb-3">
          Quick Links
        </h3>

        <nav className="flex flex-col space-y-2">
          <Link to="/" className="hover:text-[#D1BFA7] transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-[#D1BFA7] transition">
            About Us
          </Link>

          <Link to="/project" className="hover:text-[#D1BFA7] transition">
            Projects
          </Link>

          <Link to="/gallery" className="hover:text-[#D1BFA7] transition">
            Gallery
          </Link>

          <Link to="/contact" className="hover:text-[#D1BFA7] transition">
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Social Media */}
      <div className="text-center">
        <h3 className="font-semibold text-lg mb-3">
          Follow Us
        </h3>

        <div className="flex justify-center gap-5 text-xl">
          <a
            href="https://www.instagram.com/vijayashilpashala/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://www.facebook.com/vijayashilpashala"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>

          <a
            href="https://www.linkedin.com/in/vijaya-shilpa-shala-bb4963268/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>

    </div>

    {/* Divider */}
    <hr className="border-gray-500 border-t-[0.9px] opacity-30 mt-10" />

    {/* Copyright */}
    <div className="text-center text-sm text-white/60 mt-4">
      <p>
        © {new Date().getFullYear()} Vijaya Shilpa Shala.
        All rights reserved.
      </p>
    </div>

  </div>
</footer>
  );
};

export default Footer;