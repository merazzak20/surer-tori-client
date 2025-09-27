import { Helmet } from "react-helmet-next";
import PageHeader from "../../components/shared/PageHeader";
import AdmissionProcess from "./CourseComponents/AdmissionProcess";
import CoursesComponent from "./CourseComponents/CoursesComponent";

const CoursePage = () => {
  return (
    <div>
      <Helmet>
        <title>Courses | Surer Tori</title>
        <meta
          name="description"
          content="Sorer Tori is a premier violin school in India offering professional violin lessons, beginner to advanced courses, and personalized music training."
        />
        <meta
          name="keywords"
          content="violin school, violin lessons, violin classes India, Sorer Tori, music school"
        />
      </Helmet>
      <PageHeader pageTitle={"Our Popular Courses"}></PageHeader>
      <CoursesComponent></CoursesComponent>
      <AdmissionProcess></AdmissionProcess>
    </div>
  );
};

export default CoursePage;
