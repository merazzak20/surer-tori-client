import UserFeedbackForm from "../About/AboutComponents/UserFeedbackForm";
import about from "../../assets/left-about.jpg";
const AboutPage = () => {
  return (
    <div className="">
      <div
        className="bg-[#551516] py-24 mb-5"
        style={{
          backgroundImage: `linear-gradient(rgba(85, 21, 22, 0.9), rgba(85, 21, 22, 0.8)), url(${about})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <h1 className="pt-16 mx-auto text-center text-5xl mutalis text-[#d2ab69] font-bold ">
          About Page
        </h1>
      </div>
      <UserFeedbackForm></UserFeedbackForm>
    </div>
  );
};

export default AboutPage;
