import image from "../assets/footer.jpg";
import Button from "./shared/Button";
import SectionTitle from "./shared/SectionTitle";

const About = () => {
  return (
    <div id="about" className="bg-white">
      <div className="flex flex-col md:flex-row items-center  py-6 md:py-12">
        {/* Image Section */}
        <div className="relative hidden md:block w-full md:w-1/2">
          <img
            src={image}
            alt="Lisa Batiashvili"
            className="w-full rounded-none"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6 md:p-12 relative">
          {/* Decorative Borders using before */}
          <div>
            <SectionTitle head={"About Us"}></SectionTitle>
          </div>
          <div className="">
            <p className="mt-4 text-gray-700">
              Lisa Batiashvili, the Georgian-born German violinist, is praised
              by audiences and fellow musicians for her virtuosity. An
              award-winning artist, she has developed long-standing
              relationships with the world’s leading orchestras, conductors, and
              musicians.
            </p>
            <div className="my-4">
              <Button buttonText={"Learn More"}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
