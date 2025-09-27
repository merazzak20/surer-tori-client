import { Helmet } from "react-helmet-next";
import PageHeader from "../../components/shared/PageHeader";
import Theory from "./TheoryComponents/Theory";

const TheoryPage = () => {
  return (
    <div>
      <Helmet>
        <title>Theory | Surer Tori</title>
        <meta
          name="description"
          content="Sorer Tori is a premier violin school in India offering professional violin lessons, beginner to advanced courses, and personalized music training."
        />
        <meta
          name="keywords"
          content="violin school, violin lessons, violin classes India, Sorer Tori, music school"
        />
      </Helmet>
      <PageHeader pageTitle={"Music Theory & Notes"}></PageHeader>
      <Theory></Theory>
    </div>
  );
};

export default TheoryPage;
