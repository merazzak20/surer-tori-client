import { useEffect, useState } from "react";
import Container from "../../../components/shared/Container";
import { MdVerified } from "react-icons/md";

const CoursesComponent = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <Container>
      {courses.map((course) => (
        <div
          key={course.id}
          className="flex flex-col md:flex-row gap-4 my-4 justify-between items-center rounded-xl shadow-md overflow-hidden relative"
        >
          {/* Course Image */}
          <div className="md:w-1/2 lg:max-h-[450px] overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-center object-cover transition-transform transform hover:scale-105 hover:rotate-2 duration-300"
            />
          </div>

          {/* Course Content */}
          <div className="md:w-1/2 px-6 pb-4 flex flex-col justify-between relative">
            <MdVerified className="absolute hidden md:block top-3 right-1 text-7xl lg:text-9xl opacity-10" />

            {/* Title and Basic Info */}
            <div>
              <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
              <p className="text-sm text-gray-500 mb-1">
                <strong>Instructor:</strong> {course.instructor}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <strong>Level:</strong> {course.level}
              </p>
              <p className="text-sm text-gray-500 mb-1">
                <strong>Age Limit:</strong> {course.description.ageLimit}
              </p>

              {/* Summary */}
              <p className="text-gray-500 mt-3">{course.description.summary}</p>

              {/* Sections */}
              <div className="mt-4 space-y-3 max-h-[250px] overflow-y-scroll pr-2">
                {course.description.sections.map((section, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-semibold text-[#D2AB69] mb-1">
                      {section.title}
                    </h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      {section.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default CoursesComponent;
