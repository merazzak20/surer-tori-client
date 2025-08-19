import { Link } from "react-router";
import image from "../assets/left-about.jpg";
import Button from "./shared/Button";
import SectionHead from "./shared/SectionHead";
// import SectionTitle from "./shared/SectionTitle";

const About = () => {
  return (
    <div id="about" className="bg-white md:pt-0 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center ">
        {/* Image Section */}
        <div className="relative  md:block w-full h-[80vh] md:w-1/2 mt-5 md:mt-26">
          <img
            data-aos="fade-right"
            src={image}
            alt="Surer Tori"
            className="w-full h-[100%] object-cover rounded-none"
          />
        </div>

        {/* Text Section */}
        <div
          data-aos="fade-up md:fade-left"
          className="w-full md:w-1/2 p-6 md:p-12 relative mt-0 md:mt-10"
        >
          {/* Decorative Borders using before */}
          {/* <div>
            <SectionTitle head={"About Us"}></SectionTitle>
          </div> */}
          <div>
            <SectionHead head={"About Us"}></SectionHead>
          </div>
          <div className="">
            <p className="mt-4 text-gray-700 text-justify">
              Welcome to Surer Tori, a place where the timeless beauty of violin
              music comes alive. Founded in the heart of Belur, Howrah, our
              school is dedicated to nurturing a deep love for music through the
              elegance of the violin.
            </p>
            <p className="mt-4 text-gray-700 text-justify">
              At Surer Tori, we believe that music is not just an art —
              it&apos;s a journey of the soul. Whether you are a beginner taking
              your first steps or an advanced student refining your craft, our
              experienced instructors offer personalized training to help you
              grow with confidence and joy.
            </p>
            <p className="mt-4 text-gray-700 text-justify">
              Come, be a part of the Surer Tori family — let&apos;s set sail on
              a beautiful musical journey together!
            </p>
            <Link to="/about">
              <div className="my-4">
                <Button buttonText={"Read More"}></Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
