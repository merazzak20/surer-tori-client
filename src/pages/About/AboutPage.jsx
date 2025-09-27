// import UserFeedbackForm from "../About/AboutComponents/UserFeedbackForm";
// import about from "../../assets/left-about.jpg";
import Founder from "./AboutComponents/Founder";
import PageHeader from "../../components/shared/PageHeader";
import { Helmet } from "react-helmet-next";
const AboutPage = () => {
  return (
    <div className="">
      <Helmet>
        <title>About | Surer Tori</title>
        <meta
          name="description"
          content="Sorer Tori is a premier violin school in India offering professional violin lessons, beginner to advanced courses, and personalized music training."
        />
        <meta
          name="keywords"
          content="violin school, violin lessons, violin classes India, Sorer Tori, music school"
        />
      </Helmet>
      <PageHeader pageTitle={"About Page"}></PageHeader>
      <Founder></Founder>
      {/* <UserFeedbackForm></UserFeedbackForm> */}
    </div>
  );
};

export default AboutPage;
