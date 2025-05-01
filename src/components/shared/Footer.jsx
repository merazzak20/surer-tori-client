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
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

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
        <footer className="footer sm:footer-horizontal text-neutral-content p-10 flex flex-col md:flex-row justify-around">
          <aside>
            <img className="w-28" src={logo} alt="Surer Tori " />
            <p>
              <span className="text-3xl font-bold text-[#d2ab69]">
                Surer Tori
              </span>
              <br />
              Providing reliable service since 2005
            </p>
          </aside>
          <nav>
            <h6 className="footer-title text-[#d2ab69] text-2xl font-bold">
              Get in touch
            </h6>
            <div className="flex flex-col gap-4">
              {/* Contact Information */}
              <div className="flex flex-col gap-3">
                {/* <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-xl text-[#927138]" />
                  <span className="text-xl">+123 456 7890</span>
                </div> */}
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="text-base text-[#927138]" />
                  <a
                    href="https://wa.me/+91 79807 86387"
                    // target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-[#7f5c1f] "
                  >
                    +91 79807 86387
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-base text-[#927138]" />
                  <a
                    href="mailto:surertori.violin@gmail.com"
                    className="text-xl text-[#7f5c1f] "
                  >
                    surertori.violin@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-base text-[#927138]" />
                  <span className="text-xl text-[#7f5c1f] ">
                    Belur , Howrah, India
                  </span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex gap-5">
                <a
                  target="_blank"
                  className="bg-[#9c2227] p-3 rounded-sm"
                  href="https://www.facebook.com/profile.php?id=61557330762660"
                >
                  <FaFacebook className="text-2xl text-[#D2AB69]" />
                </a>
                <a
                target="_blank"
                 className="bg-[#9c2227] p-3 rounded-sm" 
                 href="https://www.instagram.com/debiprosad_mallick_violinist?utm_source=qr&igsh=dzZmNW0ydXc4bDlh">
                  <FaInstagram className="text-2xl text-[#D2AB69]" />
                </a>
                <a className="bg-[#9c2227] p-3 rounded-sm" href="/">
                  <FaYoutube className="text-2xl text-[#D2AB69]" />
                </a>
              </div>
            </div>
          </nav>
        </footer>
        <div className="divider bg-[#938368] h-[1px]"></div>
        <div className="footer sm:footer-horizontal footer-center text-base-content p-4">
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
