import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutOpen(false);
  };

  return (
    <header className="relative z-50 text-[#F2F2F2]">

      {/* ================= HEADER ================= */}
      <div
        className="
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          md:px-10
          lg:px-12
          py-3
          flex
          items-center
          justify-between
        "
      >

        {/* ================= LOGO ================= */}
        <Link to="/" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="Vijaya Shilpa Shala"
            className="
              w-[75px]
              sm:w-[85px]
              md:w-[95px]
              lg:w-[100px]
              h-auto
            "
          />
        </Link>


        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center">

          {/* HOME */}
          <Link
            to="/"
            className="
              relative
              mr-4
              lg:mr-6
              py-2
              hover:text-[#D1BFA7]
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[1px]
              after:w-0
              after:bg-[#D1BFA7]
              hover:after:w-full
              after:transition-all
              after:duration-300
            "
          >
            Home
          </Link>


          {/* ================= ABOUT DROPDOWN ================= */}
          <div className="relative group mr-4 lg:mr-6">

            <span
              className="
                relative
                cursor-pointer
                py-2
                hover:text-[#D1BFA7]
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-[1px]
                after:w-0
                after:bg-[#D1BFA7]
                hover:after:w-full
                after:transition-all
                after:duration-300
              "
            >
              About Us
            </span>


            {/* DROPDOWN */}
            <div
              className="
                absolute
                left-0
                top-full
                mt-3
                w-40
                rounded-lg
                bg-[#1E1E1E]/90
                backdrop-blur-md
                shadow-xl
                border
                border-white/10
                opacity-0
                invisible
                translate-y-2
                group-hover:opacity-100
                group-hover:visible
                group-hover:translate-y-0
                transition-all
                duration-300
                overflow-hidden
              "
            >
              <Link
                to="/about"
                className="
                  block
                  px-4
                  py-3
                  text-sm
                  hover:bg-white/10
                  hover:text-[#D1BFA7]
                  transition
                "
              >
                About Company
              </Link>
              
              <Link
                to="/founder"
                className="
                  block
                  px-4
                  py-3
                  text-sm
                  hover:bg-white/10
                  hover:text-[#D1BFA7]
                  transition
                "
              >
                Founder
              </Link>

              <Link
                to="/our-leadership"
                className="block px-4 py-3 text-sm 
                 hover:bg-white/10
                  hover:text-[#D1BFA7]
                  transition"
              >
               Our Leadership
             </Link>

              

            </div>
          </div>


          {/* PROJECTS */}
          <Link
            to="/project"
            className="
              relative
              mr-4
              lg:mr-6
              py-2
              hover:text-[#D1BFA7]
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[1px]
              after:w-0
              after:bg-[#D1BFA7]
              hover:after:w-full
              after:transition-all
              after:duration-300
            "
          >
            Projects
          </Link>


          {/* AWARDS */}
          <Link
            to="/award"
            className="
              relative
              mr-4
              lg:mr-6
              py-2
              hover:text-[#D1BFA7]
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[1px]
              after:w-0
              after:bg-[#D1BFA7]
              hover:after:w-full
              after:transition-all
              after:duration-300
            "
          >
            Awards
          </Link>


          {/* GALLERY */}
          <Link
            to="/gallery"
            className="
              relative
              mr-4
              lg:mr-6
              py-2
              hover:text-[#D1BFA7]
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[1px]
              after:w-0
              after:bg-[#D1BFA7]
              hover:after:w-full
              after:transition-all
              after:duration-300
            "
          >
            Gallery
          </Link>


          {/* CONTACT */}
          <Link
            to="/contact"
            className="
              relative
              py-2
              hover:text-[#D1BFA7]
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[1px]
              after:w-0
              after:bg-[#D1BFA7]
              hover:after:w-full
              after:transition-all
              after:duration-300
            "
          >
            Contact Us
          </Link>

        </nav>


        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            md:hidden
            text-2xl
            p-2
            text-[#F2F2F2]
            hover:text-[#D1BFA7]
            transition
          "
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div
          className="
            md:hidden
            absolute
            top-full
            left-0
            w-full
            bg-[#1E1E1E]/95
            backdrop-blur-xl
            border-t
            border-white/10
            shadow-xl
          "
        >

          <nav className="flex flex-col px-6 py-5">

            {/* HOME */}
            <Link
              to="/"
              onClick={closeMenu}
              className="
                py-3
                border-b
                border-white/10
                hover:text-[#D1BFA7]
                transition
              "
            >
              Home
            </Link>


            {/* ================= MOBILE ABOUT ================= */}
            <div className="border-b border-white/10">

              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  py-3
                  text-left
                  hover:text-[#D1BFA7]
                  transition
                "
              >
                <span>About Us</span>

                <span
                  className={`
                    text-sm
                    transition-transform
                    duration-300
                    ${aboutOpen ? "rotate-180" : ""}
                  `}
                >
                  ↓
                </span>
              </button>


              {/* MOBILE ABOUT DROPDOWN */}
              {aboutOpen && (
                <div className="pb-2 pl-4">

                  <Link
                    to="/founder"
                    onClick={closeMenu}
                    className="
                      block
                      py-2
                      text-sm
                      text-white/70
                      hover:text-[#D1BFA7]
                    "
                  >
                    Founder
                  </Link>

                  <Link
                    to="/about"
                    onClick={closeMenu}
                    className="
                      block
                      py-2
                      text-sm
                      text-white/70
                      hover:text-[#D1BFA7]
                    "
                  >
                    About Company
                  </Link>

                </div>
              )}

            </div>


            {/* PROJECTS */}
            <Link
              to="/project"
              onClick={closeMenu}
              className="
                py-3
                border-b
                border-white/10
                hover:text-[#D1BFA7]
                transition
              "
            >
              Projects
            </Link>


            {/* AWARDS */}
            <Link
              to="/award"
              onClick={closeMenu}
              className="
                py-3
                border-b
                border-white/10
                hover:text-[#D1BFA7]
                transition
              "
            >
              Awards
            </Link>


            {/* GALLERY */}
            <Link
              to="/gallery"
              onClick={closeMenu}
              className="
                py-3
                border-b
                border-white/10
                hover:text-[#D1BFA7]
                transition
              "
            >
              Gallery
            </Link>


            {/* CONTACT */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="
                py-3
                hover:text-[#D1BFA7]
                transition
              "
            >
              Contact Us
            </Link>

          </nav>

        </div>
      )}

    </header>
  );
};

export default Header;