import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { X } from "lucide-react";
// import { AuthContext } from "../provider/AuthProvider";
import { NavLink } from "react-router";
import Container from "./Container";
import FeedbackModal from "./FeedbackModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

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
            `hover:text-[#D2AB69] hover:font-bold ${
              isActive
                ? "text-[#D2AB69] font-bold active-link"
                : "text-white nav-link"
            }`
          }
          // onClick={() => setIsOpen(false)}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        {/* <NavLink
          to="/about"
          className={`nav-link hover:font-bold text-white hover:text-[#D2AB69] `}
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("about");
            // setIsOpen(false);
          }}
        >
          About
        </NavLink> */}
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#D2AB69] hover:font-bold ${
              isActive ? "text-[#D2AB69]" : "text-white nav-link"
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
            `hover:text-[#D2AB69] hover:font-bold ${
              isActive ? "text-[#D2AB69]" : "text-white nav-link"
            }`
          }
          to="/courses"
        >
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#D2AB69] hover:font-bold ${
              isActive ? "text-[#D2AB69]" : "text-white nav-link"
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
            `hover:text-[#D2AB69] hover:font-bold ${
              isActive ? "text-[#D2AB69]" : "text-white nav-link"
            }`
          }
          to="/student"
        >
          Students
        </NavLink>
      </li>
      <li>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn bg-transparent shadow-none border text-white border-[#D2AB69] rounded-full hover:text-[#d2ab69] hover:shadow-none"
        >
          Valuable Feedback
        </button>
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
      <a href="https://www.instagram.com/surer.tori?utm_source=qr&igsh=MXRtdjNsY3R2NGJlOA==">
        <FaInstagram className="text-2xl text-[#D2AB69]" />
      </a>
      <a href="https://wa.me/+91 79807 86387">
        <FaWhatsapp className="text-2xl text-[#D2AB69]" />
      </a>

      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#9c2227] hover:font-bold ${
              isActive ? "text-[#9c2227] font-bold" : "text-white"
            }`
          }
          to="/login"
        >
          Login
        </NavLink>
      </li>
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
          onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#d2ab69] ${isActive ? "text-[#d2ab69]" : "text-white"}`
          }
          to="/courses"
          onClick={() => setIsOpen(false)}
        >
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#d2ab69] ${isActive ? "text-[#d2ab69]" : "text-white"}`
          }
          to="/theory"
          onClick={() => setIsOpen(false)}
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
          onClick={() => setIsOpen(false)}
        >
          Students
        </NavLink>
      </li>
      <li>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn bg-transparent shadow-none text-white border border-[#D2AB69] rounded-full "
        >
          Valuable Feedback
        </button>
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
              <div className="">
                <ul className="menu menu-horizontal px-1">{socialIcons}</ul>
              </div>
            </div>

            <div className="md:hidden">
              <Hamburger toggled={isOpen} toggle={setIsOpen} color="#d2ab69" />
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div
              initial={{ y: "-100%" }} // Start off-screen (right side)
              animate={{ y: 0 }} // Slide into view (left)
              exit={{ y: "-100%" }} // Slide out to the right when closing
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 bg-[#0f0404] bg-opacity-50 backdrop-blur-lg flex flex-col items-center justify-center text-white text-2xl z-50"
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
        </div>
      </Container>

      {/* Modal Component */}
      <FeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      ></FeedbackModal>
    </header>
  );
};

export default Header;
