import UserFeedbackForm from "../About/AboutComponents/UserFeedbackForm";
import about from "../../assets/left-about.jpg";
import Founder from "./AboutComponents/Founder";
import PageHeader from "../../components/shared/PageHeader";
const AboutPage = () => {
  return (
    <div className="">
      <PageHeader pageTitle={'About Page'}></PageHeader>
      <Founder></Founder>
      <UserFeedbackForm></UserFeedbackForm>
    </div>
  );
};

export default AboutPage;
