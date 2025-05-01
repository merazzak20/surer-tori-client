import PageHeader from "../../components/shared/PageHeader";
import StudentCard from "./StudentComponents/StudentCard";

const Student = () => {
    
    return (
        <div>
            <PageHeader pageTitle={"Our Students"}></PageHeader>
            <StudentCard></StudentCard>
        </div>
    );
};

export default Student;