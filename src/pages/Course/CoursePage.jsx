import PageHeader from "../../components/shared/PageHeader";
import AdmissionProcess from "./CourseComponents/AdmissionProcess";
import CoursesComponent from "./CourseComponents/CoursesComponent";


const CoursePage = () => {
    return (
        <div>
            <PageHeader pageTitle={"Our Popular Courses"}></PageHeader>
            <CoursesComponent></CoursesComponent>
            <AdmissionProcess></AdmissionProcess>
        </div>
    );
};

export default CoursePage;