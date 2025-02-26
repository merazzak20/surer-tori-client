import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { X } from "lucide-react";
// import { AuthContext } from "../provider/AuthProvider";
import { NavLink } from "react-router";
import Container from "./Container";

const Navbar = () => {
  //   const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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
      className={`fixed top-0 left-0 w-full z-40  transition-all duration-300 ${
        isScrolled
          ? "bg-[#140505] bg-gradient-to-b from-[#140505] to-[#140505]/0 shadow-lg"
          : "bg-gradient-to-b from-[#140505] to-[#140505]/80"
      }`}
    >
      <Container>
        <div className="navbar flex items-center justify-between">
          {/* Logo and Navigation for Larger Devices */}
          <div className="navbar-start lg:flex">
            <a href="/" className="text-xl">
              <img className="w-18" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          {/* Horizontal Links */}
          <div className="navbar-end flex flex-row ">
            <div className="hidden md:inline-block">
              <ul className="menu menu-horizontal px-1 hidden lg:inline-block">
                {socialIcons}
              </ul>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="lg:hidden">
              <Hamburger toggled={isOpen} toggle={setIsOpen} color="#d2ab69" />
            </div>
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
              className="absolute top-5 right-5 text-white hover:text-[#d2ab69]"
            >
              <X size={40} />
            </button>

            <ul className="space-y-6 text-center">{mobileLinks}</ul>
          </motion.div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
