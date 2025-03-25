import About from "../../components/About";
import Course from "../../components/Course";
import Hero from "../../components/Hero";
import Testimonial from "../../components/Testimonial";
import Video from "../../components/Video";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Course></Course>
      <Video></Video>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
