import { Helmet } from "react-helmet-next";
import PageHeader from "../../components/shared/PageHeader";
import StudentCard from "./StudentComponents/StudentCard";

const Student = () => {
  return (
    <div>
      <Helmet>
        <title>Students | Surer Tori</title>
        <meta
          name="description"
          content="Sorer Tori is a premier violin school in India offering professional violin lessons, beginner to advanced courses, and personalized music training."
        />
        <meta
          name="keywords"
          content="violin school, violin lessons, violin classes India, Sorer Tori, music school"
        />
      </Helmet>
      <PageHeader pageTitle={"Our Students"}></PageHeader>
      <StudentCard></StudentCard>
    </div>
  );
};

export default Student;
