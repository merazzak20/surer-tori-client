import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { X } from "lucide-react";
// import { AuthContext } from "../provider/AuthProvider";
import { NavLink } from "react-router";
import Container from "./Container";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (window.scrollY > 80) {
  //         setIsScrolled(true);
  //       } else {
  //         setIsScrolled(false);
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
        const header = document.getElementById("header");

        if (header) {
          header.classList.remove(
            "bg-gradient-to-b",
            "from-[#140505]",
            "to-[#140505]/0"
          );
          header.classList.add("bg-[#140505]"); // Use a valid Tailwind color
        }
      } else {
        setIsScrolled(false);
        const header = document.getElementById("header");

        if (header) {
          header.classList.remove("bg-[#140505]");
          header.classList.add(
            "bg-gradient-to-b",
            "from-[#140505]",
            "to-[#140505]/0"
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = (
    <div className="flex gap-2.5">
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#d2ab69] hover:font-bold ${
              isActive ? "text-[#d2ab69] font-bold" : "text-white"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#d2ab69] hover:font-bold ${
              isActive ? "text-[#d2ab69] font-bold" : "text-white"
            }`
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#d2ab69] hover:font-bold ${
              isActive ? "text-[#d2ab69] font-bold" : "text-white"
            }`
          }
          to="/course"
        >
          Course
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#d2ab69] hover:font-bold ${
              isActive ? "text-[#d2ab69] font-bold" : "text-white"
            }`
          }
          to="/theory"
        >
          Music Theory & Notes
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#d2ab69] hover:font-bold ${
              isActive ? "text-[#d2ab69] font-bold" : "text-white"
            }`
          }
          to="/student"
        >
          Student
        </NavLink>
      </li>
    </div>
  );
  const socialIcons = (
    <div className="flex gap-2.5">
      <a
        target="_blank"
        // className="bg-[#9c2227] p-3 rounded-sm"
        href="https://www.facebook.com/profile.php?id=61557330762660"
      >
        <FaFacebook className="text-2xl text-[#D2AB69]" />
      </a>
      <a href="/">
        <FaInstagram className="text-2xl text-[#D2AB69]" />
      </a>
      <a href="/">
        <FaWhatsapp className="text-2xl text-[#D2AB69]" />
      </a>

      {/* <li>
        
      </li> */}
    </div>
  );
  const mobileLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#d2ab69] ${isActive ? "text-[#d2ab69]" : "text-white"}`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#d2ab69] ${isActive ? "text-[#d2ab69]" : "text-white"}`
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#d2ab69] ${isActive ? "text-[#d2ab69]" : "text-white"}`
          }
          to="/course"
        >
          Course
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#d2ab69] ${isActive ? "text-[#d2ab69]" : "text-white"}`
          }
          to="/theory"
        >
          Music Theory & Notes
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#d2ab69] ${isActive ? "text-[#d2ab69]" : "text-white"}`
          }
          to="/student"
        >
          Student
        </NavLink>
      </li>
    </>
  );
  return (
    <header
      id="header"
      className="fixed top-0 left-0 w-full z-40 bg-gradient-to-b from-[#140505] to-[#140505]/0"
    >
      <Container>
        <div className="navbar flex items-center">
          {/* Logo and Navigation for Larger Devices */}
          <div className="navbar-start lg:flex">
            <a href="/">
              <img className="w-18" src={logo} alt="Logo" />
            </a>
          </div>

          {/* Horizontal Links */}
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          {/* Download Resume Button */}
          <div className="navbar-end flex flex-row">
            <div className="hidden md:inline-block">
              {/* <div className="">
                <ul className="menu menu-horizontal px-1">{links}</ul>
              </div> */}
            </div>

            <div className="md:hidden">
              <Hamburger toggled={isOpen} toggle={setIsOpen} color="#B9FF00" />
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ y: "-100%" }} // Start off-screen (right side)
              animate={{ y: 0 }} // Slide into view (left)
              exit={{ y: "-100%" }} // Slide out to the right when closing
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-zinc-900 bg-opacity-50 backdrop-blur-lg flex flex-col items-center justify-center text-white text-2xl z-50"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-white hover:text-[#B9FF00]"
              >
                <X size={40} />
              </button>

              <ul className="space-y-6 text-center">{mobileLinks}</ul>
            </motion.div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
