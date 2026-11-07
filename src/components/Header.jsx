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
    <header className="relative z-50 text-[#F2F2F2] w-full ">

      {/* ================= HEADER ================= */}
      <div
        className="
          max-w-7xl
          mx-auto
          px-3 
          min-[375px]:px-4
          sm:px-6
          md:px-6
          lg:px-8
          xl:px-12
          py-2
          sm:py-3
          flex
          items-center
          justify-between
          gap-2
          sm:gap-4
        "
      >

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          onClick={closeMenu}
          className="shrink-0"
        >
          <img
            src="/logo.png"
            alt="Vijaya Shilpa Shala"
            className="
              w-[75px]
              min-[375px]:w-[85px]
              sm:w-[80px]
              md:w-[85px]
              lg:w-[95px]
              xl:w-[100px]
              h-auto
              
            "
          />

        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav
          className="
            hidden
            min-[1100px]:flex
            items-center
            justify-end
            flex-1
            gap-x-3
            lg:gap-x-4
            xl:gap-x-6
            whitespace-nowrap
            text-sm
            lg:text-sm
            xl:text-base
          "
        >

          {/* HOME */}
          <Link
            to="/"
            onClick={closeMenu}
            className="
              relative py-2
              hover:text-[#D1BFA7]
              after:absolute after:left-0 after:-bottom-1
              after:h-[1px] after:w-0 after:bg-[#D1BFA7]
              hover:after:w-full
              after:transition-all after:duration-300
            "
          >
            Home
          </Link>

          {/* ================= ABOUT DROPDOWN ================= */}
          <div className="relative group py-2">
            <button
              type="button"
              className="
                relative
                cursor-pointer
                hover:text-[#D1BFA7]
                after:absolute after:left-0 after:-bottom-1
                after:h-[1px] after:w-0 after:bg-[#D1BFA7]
                hover:after:w-full
                after:transition-all after:duration-300
              "
              aria-haspopup="true"
            >
              About Us
            </button>

            {/* DROPDOWN */}
            <div
              className="
                absolute
                left-0
                top-full
                mt-2
                w-44
                rounded-lg
                bg-[#1E1E1E]/95
                backdrop-blur-md
                shadow-xl
                border border-white/10
                opacity-0 invisible translate-y-2
                group-hover:opacity-100
                group-hover:visible
                group-hover:translate-y-0
                group-focus-within:opacity-100
                group-focus-within:visible
                group-focus-within:translate-y-0
                transition-all duration-300
                overflow-hidden
              "
            >
              <Link
                to="/about"
                onClick={closeMenu}
                className="block px-4 py-3 text-sm hover:bg-white/10 hover:text-[#D1BFA7] transition"
              >
                About Company
              </Link>

              <Link
                to="/founder"
                onClick={closeMenu}
                className="block px-4 py-3 text-sm hover:bg-white/10 hover:text-[#D1BFA7] transition"
              >
                Founder
              </Link>

              <Link
                to="/our-leadership"
                onClick={closeMenu}
                className="block px-4 py-3 text-sm hover:bg-white/10 hover:text-[#D1BFA7] transition"
              >
                Our Leadership
              </Link>
            </div>
          </div>

          {/* PROJECTS */}
          <Link
            to="/project"
            onClick={closeMenu}
            className="
              relative py-2
              hover:text-[#D1BFA7]
              after:absolute after:left-0 after:-bottom-1
              after:h-[1px] after:w-0 after:bg-[#D1BFA7]
              hover:after:w-full
              after:transition-all after:duration-300
            "
          >
            Projects
          </Link>
          
          {/* Shilp Guru Project */}
          <Link
            to="/ShilpGuru"
            onClick={closeMenu}
            className="
              relative py-2
              hover:text-[#D1BFA7]
              after:absolute after:left-0 after:-bottom-1
              after:h-[1px] after:w-0 after:bg-[#D1BFA7]
              hover:after:w-full
              after:transition-all after:duration-300
            "
          >
            Shilpa Guru Project
          </Link>

          {/* AWARDS */}
          <Link
            to="/award"
            onClick={closeMenu}
            className="
              relative py-2
              hover:text-[#D1BFA7]
              after:absolute after:left-0 after:-bottom-1
              after:h-[1px] after:w-0 after:bg-[#D1BFA7]
              hover:after:w-full
              after:transition-all after:duration-300
            "
          >
            Awards
          </Link>

          {/* GALLERY */}
          <Link
            to="/gallery"
            onClick={closeMenu}
            className="
              relative py-2
              hover:text-[#D1BFA7]
              after:absolute after:left-0 after:-bottom-1
              after:h-[1px] after:w-0 after:bg-[#D1BFA7]
              hover:after:w-full
              after:transition-all after:duration-300
            "
          >
            Gallery
          </Link>

          {/* CONTACT */}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="
              relative py-2
              hover:text-[#D1BFA7]
              after:absolute after:left-0 after:-bottom-1
              after:h-[1px] after:w-0 after:bg-[#D1BFA7]
              hover:after:w-full
              after:transition-all after:duration-300
            "
          >
            Contact Us
          </Link>

        </nav>

        {/* ================= MOBILE / TABLET MENU BUTTON ================= */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            min-[1100px]:hidden
            shrink-0
            flex items-center justify-center
            w-12 h-12
            sm:w-12 sm:h-12
            text-3xl
            text-[#F2F2F2]
            hover:text-[#D1BFA7]
            transition
          "
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* ================= MOBILE / TABLET MENU ================= */}
      {menuOpen && (
        <div
          className="
            min-[1100px]:hidden
            absolute
            top-full
            left-0
            w-full
            max-h-[calc(100vh-70px)]
            overflow-y-auto
            bg-[#1E1E1E]/95
            backdrop-blur-xl
            border-t border-white/10
            shadow-xl
          "
        >
          <nav
            className="
              flex flex-col
              w-full
              max-w-7xl
              mx-auto
              px-4
              min-[375px]:px-5
              sm:px-8
              md:px-10
              lg:px-12
              py-4
              sm:py-5
            "
          >

            {/* HOME */}
            <Link
              to="/"
              onClick={closeMenu}
              className="py-3 border-b border-white/10 hover:text-[#D1BFA7] transition"
            >
              Home
            </Link>

            {/* ================= MOBILE ABOUT ================= */}
            <div className="border-b border-white/10">
              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                className="
                  w-full flex items-center justify-between
                  gap-4 py-3 text-left
                  hover:text-[#D1BFA7] transition
                "
                aria-expanded={aboutOpen}
              >
                <span>About Us</span>

                <span
                  className={`
                    text-sm transition-transform duration-300
                    ${aboutOpen ? "rotate-180" : ""}
                  `}
                >
                  ↓
                </span>
              </button>

              {/* MOBILE ABOUT DROPDOWN */}
              {aboutOpen && (
                <div className="pb-2 pl-4 sm:pl-5">
                  <Link
                    to="/about"
                    onClick={closeMenu}
                    className="block py-2 text-sm text-white/70 hover:text-[#D1BFA7] transition"
                  >
                    About Company
                  </Link>

                  <Link
                    to="/founder"
                    onClick={closeMenu}
                    className="block py-2 text-sm text-white/70 hover:text-[#D1BFA7] transition"
                  >
                    Founder
                  </Link>

                  <Link
                    to="/our-leadership"
                    onClick={closeMenu}
                    className="block py-2 text-sm text-white/70 hover:text-[#D1BFA7] transition"
                  >
                    Our Leadership
                  </Link>
                </div>
              )}
            </div>

            {/* PROJECTS */}
            <Link
              to="/project"
              onClick={closeMenu}
              className="py-3 border-b border-white/10 hover:text-[#D1BFA7] transition"
            >
              Projects
            </Link>

             
            {/*  Shilp Guru Project */}
            <Link
              to="/ShilpGuru"
              onClick={closeMenu}
              className="py-3 border-b border-white/10 hover:text-[#D1BFA7] transition"
            >
               Shilpa Guru Project
            </Link>

            {/* AWARDS */}
            <Link
              to="/award"
              onClick={closeMenu}
              className="py-3 border-b border-white/10 hover:text-[#D1BFA7] transition"
            >
              Awards
            </Link>

            {/* GALLERY */}
            <Link
              to="/gallery"
              onClick={closeMenu}
              className="py-3 border-b border-white/10 hover:text-[#D1BFA7] transition"
            >
              Gallery
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="py-3 hover:text-[#D1BFA7] transition"
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
