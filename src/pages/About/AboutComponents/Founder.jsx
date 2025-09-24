import Container from "../../../components/shared/Container";
import me from "../../../assets/me.jpg";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Founder = () => {
  return (
    <div className="my-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* left */}
          <div className="left-side w-full md:w-5/12">
            <div className="w-full max-h-[70vh] rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-contain"
                src={me}
                alt="Founder"
              />
            </div>
          </div>

          {/* right */}
          <div className="right-side w-full md:w-7/12 text-left">
            <div className="space-y-1 mb-3 border-b border-[#9C2227] pb-2">
              <h2 className="text-4xl font-bold text-[#D2AB69]">
                Debiprasad Mallick
              </h2>
              <h4 className="text-base font-medium text-[#D2AB69]">
                Founder, Surer Tori
              </h4>
            </div>
            <div className="info">
              <p className="text-justify">
                <strong>"SURER TORI"</strong> an institution to educate violin
                in the proper way for students near and abroad, formed and
                guided by Mr. DEBIPRASAD MALLICK, born & brought up in a violin
                family. Learned violin from his father, who was a renowned
                violin teacher of Santipur, Mr. Gopikanta Mallick. Later
                perfected the art in Indian classical music with the guidance of
                Guru Mr. Subir Mukherjee, Mr. Bhaskar Sen, Mr. Tarun
                Chakraborty, Mr. Saket Sahu and, in Western music, Mr. Jyoti
                Shankar Roy & Mr. Amitava Ghosh. Now serving as a violin teacher
                in a renowned school - M. C. Kejriwal Vidyapeeth.
              </p>

              <p className="text-justify">
                Besides violin, he has been learning ESRAJ with the guidance of
                Guru Mr. Debayan Majumder.
              </p>
            </div>
            <div className=" space-x-2 mt-2">
              <a
                href="https://www.facebook.com/debiprosad.mallick?rdid=H3zej4HGkU4h9sSV&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F169GEVSzHr%2F#"
                target="_blank"
                className="btn bg-[#9C2227] border-none"
              >
                <FaFacebook className="text-xl text-[#D2AB69]"></FaFacebook>
              </a>
              <a
                href="https://www.instagram.com/debiprosad_mallick_violinist/?utm_source=qr&igsh=dzZmNW0ydXc4bDlh#"
                target="_blank"
                className="btn bg-[#9C2227] border-none"
              >
                <FaInstagram className="text-xl text-[#D2AB69]"></FaInstagram>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Founder;
