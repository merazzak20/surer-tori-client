import Container from "../../../components/shared/Container";
import me from "../../../assets/me.jpg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

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
            <div className="space-y-1 mb-3">
              <h2 className="text-4xl font-bold text-[#D2AB69]">
                Deviprasad Mallick
              </h2>
              <h4 className="text-base font-medium text-[#D2AB69]">
                Founder, Surer Tori
              </h4>
            </div>
            <div className="info">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                eaque officia amet deserunt fugit similique corrupti quidem qui,
                consequatur numquam ut aperiam repellat dolor reprehenderit
                repudiandae nostrum vero voluptate quae animi? Distinctio
                dolores cupiditate, laboriosam doloribus nam accusamus quo
                tempore itaque voluptatum, quidem explicabo quis. Earum saepe
                architecto sed dolor?
              </p>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                eaque officia amet deserunt fugit similique corrupti quidem qui,
                consequatur numquam ut aperiam repellat dolor reprehenderit
                repudiandae nostrum vero voluptate quae animi? Distinctio
                dolores cupiditate, laboriosam doloribus nam accusamus quo
                tempore itaque voluptatum, quidem explicabo quis. Earum saepe
                architecto sed dolor?
              </p>
            </div>
            <div className=" space-x-2 mt-2">
              <a
                href=""
                target="_blank"
                className="btn bg-[#9C2227] border-none"
              >
                <FaFacebook className="text-xl text-[#D2AB69]"></FaFacebook>
              </a>
              <a
                href=""
                target="_blank"
                className="btn bg-[#9C2227] border-none"
              >
                <FaInstagram className="text-xl text-[#D2AB69]"></FaInstagram>
              </a>
              <a
                href=""
                target="_blank"
                className="btn bg-[#9C2227] border-none"
              >
                <FaLinkedin className="text-xl text-[#D2AB69]"></FaLinkedin>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Founder;
