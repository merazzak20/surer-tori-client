import { useEffect, useState } from "react";
import Container from "../../../components/shared/Container";

const StudentCard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/student.json") // Make sure the file exists in the public folder
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {students.map((singleStudent, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform "
          >
            <figure className="relative overflow-hidden">
            <img
              className="w-full h-[300px] object-top object-cover hover:scale-105  hover:rotate-2 transition duration-300"
              src={singleStudent.image}
              alt={singleStudent.name}
            />
            </figure>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {singleStudent.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default StudentCard;
