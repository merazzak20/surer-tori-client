import { Link } from "react-router";
import image from "../assets/left-about.jpg";
import Button from "./shared/Button";
import SectionHead from "./shared/SectionHead";
// import SectionTitle from "./shared/SectionTitle";

const About = () => {
  return (
    <div id="about" className="bg-white sm:pt-52 md:pt-0">
      <div className="flex flex-col md:flex-row items-center ">
        {/* Image Section */}
        <div className="relative hidden md:block w-full h-[80vh] md:w-1/2 mt-26">
          <img
            src={image}
            alt="Lisa Batiashvili"
            className="w-full h-[90%] object-cover rounded-none"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6 md:p-12 relative -mt-22">
          {/* Decorative Borders using before */}
          {/* <div>
            <SectionTitle head={"About Us"}></SectionTitle>
          </div> */}
          <div>
            <SectionHead head={"About Us"}></SectionHead>
          </div>
          <div className="">
            <p className="mt-4 text-gray-700">
              Lisa Batiashvili, the Georgian-born German violinist, is praised
              by audiences and fellow musicians for her virtuosity. An
              award-winning artist, she has developed long-standing
              relationships with the world’s leading orchestras, conductors, and
              musicians.
            </p>
            <Link to="/about">
              <div className="my-4">
                <Button buttonText={"Learn More"}></Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
