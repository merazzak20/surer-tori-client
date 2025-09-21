import Container from "./Container";
import logo from "../../assets/logo.png";
import footerBg from "../../assets/footer.jpg";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="bg-[#140505] bg-gradient-to-b from-zinc-900/20 to-zinc-900/0 py-4"
      style={{
        backgroundImage: `linear-gradient(rgba(20, 5, 5, 1), rgba(20, 5, 5, 0.9)), url(${footerBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <footer className="footer text-neutral-content p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Logo and Description */}
          <aside className="flex flex-col items-center md:items-start">
            <img className="w-28" src={logo} alt="Surer Tori" />
            <p className="mt-4 text-center md:text-left">
              <span className="text-3xl font-bold text-[#d2ab69]">
                Surer Tori
              </span>
              <br />
              Providing reliable service since 2018
            </p>
          </aside>

          {/* Column 2: Contact Information and Social Media */}
          <nav className="flex flex-col items-center md:items-start">
            <h6 className="footer-title text-[#d2ab69] text-2xl font-bold mb-4">
              Get in touch
            </h6>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-base text-[#927138]" />
                <a
                  href="https://wa.me/+91 79807 86387"
                  rel="noopener noreferrer"
                  className="text-xl text-[#7f5c1f]"
                >
                  +91 79807 86387
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-base text-[#927138]" />
                <a
                  href="mailto:surertori.violin@gmail.com"
                  className="text-xl text-[#7f5c1f]"
                >
                  surertori.violin@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-base text-[#927138]" />
                <span className="text-xl text-[#7f5c1f]">
                  Belur, Howrah, India
                </span>
              </div>
              {/* Social Media Links */}
              <div className="flex gap-5 mt-4">
                <a
                  target="_blank"
                  className="bg-[#9c2227] p-3 rounded-sm"
                  href="https://www.facebook.com/profile.php?id=61557330762660"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-2xl text-[#D2AB69]" />
                </a>
                <a
                  target="_blank"
                  className="bg-[#9c2227] p-3 rounded-sm"
                  href="https://www.instagram.com/debiprosad_mallick_violinist?utm_source=qr&igsh=dzZmNW0ydXc4bDlh"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl text-[#D2AB69]" />
                </a>
                <a
                  target="_blank"
                  className="bg-[#9c2227] p-3 rounded-sm"
                  href="https://youtube.com/@surertoriviolin?feature=shared"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="text-2xl text-[#D2AB69]" />
                </a>
              </div>
            </div>
          </nav>

          {/* Column 3: Google Maps */}
          <div className="flex flex-col items-center md:items-start">
            <h6 className="footer-title text-[#d2ab69] text-2xl font-bold mb-4">
              Our Location
            </h6>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.2804121088416!2d88.3523381!3d22.635632099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277c58a1cb1f5%3A0x80572a996bae892f!2sViolin%20class%20by%20DEBIPRASAD%20MALLICK!5e1!3m2!1sen!2sbd!4v1758440453870!5m2!1sen!2sbd"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </footer>
        <div className="divider bg-[#938368] h-[1px]"></div>
        <div className="footer footer-center text-base-content p-4">
          <aside>
            <div className="text-white flex flex-col md:flex-row justify-between items-center gap-4">
              <p>Copyright © {new Date().getFullYear()} - Surer Tori</p>
              <p>
                ⚙️ Developed by{" "}
                <a
                  href="https://www.linkedin.com/in/merazzak20/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#D2AB69]"
                >
                  Abdur Razzak
                </a>
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
